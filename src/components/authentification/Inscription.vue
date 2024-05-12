<template>
  <div class="home">
    <!-- =======================
    Main banner START -->

    <div v-if="isMobile" class="login-body">
      <div class="align-items-center">
        <div class="login-content mt-1 mb-2 mx-1">
            <div class="login-title">
              <h2 class="mb-2 h3 text-center">Créer un nouveau compte</h2>
            </div>
            <div class="login-info">
                <!-- Form START -->
                    <el-alert v-show="erreur" :title="connexionMessage" type="error"></el-alert>
                    <el-alert v-show="success" :title="connexionMessage" type="success"></el-alert>
    <!-- Form START -->
                    <form class="mt-4 text-start" v-if="!successInscription">
                      <template>
                        <!-- Email -->
                        <div class="mb-3">
                          <label class="form-label">Adresse e-mail</label>
                          <input type="email" class="form-control" placeholder="Veuillez saisir votre adresse e-mail" v-model="user">
                        </div>
                        <!-- Password -->
                        <div class="mb-3 position-relative">
                          <label class="form-label">Mot de passe</label>
                          <input placeholder="Saisissez un mot de passe" v-model="pass" :type="inputType" class="form-control">
                          <i class="field-icon" :class="showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'" @click="togglePassword"></i>
                        </div>
                        <!-- Confirm Password -->
                        <div class="mb-3">
                          <label class="form-label">Confirmez le mot de passe</label>
                          <input  class="form-control" placeholder="Confirmez votre mot de passe" v-model="pass_verif" type="password">
                        </div>
                        <!-- Remember me -->
                         <!-- Divider -->
                    
                        <!-- Button -->
                        <div><p class="btn btn-primary w-100 mb-2" @click="Inscription()">S'inscrire</p></div>
                        <p class="mb-0">Déjà membre?<span to="/login" style="color: #348DDB !important;" @click="ShowInscription()"> Se connecter</span></p>

                      
                       <!-- Copyright -->
                      </template>
                    </form>
                    <div style="margin-top: 15px" v-if="successInscription"><p class="btn btn-primary w-100 mb-2" @click="ShowInscription()">Se connecter</p></div>
                    <!-- Form END -->
            </div>
        </div>
      </div>
    </div>
    <div v-else>
    <section class="vh-xxl-100">
      <div class="container h-100 d-flex px-0 px-sm-4">
        <div class="row justify-content-center align-items-center m-auto">
          <div class="col-12">
            <div class="bg-mode shadow rounded-3 overflow-hidden">
              <div class="row g-0">
                <!-- Vector Image -->
                <div class="col-lg-6 d-md-flex align-items-center order-2 order-lg-1">
                  <div class="p-3 p-lg-5">
                    <img src="@/assets/images/element/signin.svg" alt="">
                  </div>
                  <!-- Divider -->
                  <div class="vr opacity-1 d-none d-lg-block"></div>
                </div>

                <!-- Information -->
                <div class="col-lg-6 order-1">
                  <div class="p-4 p-sm-6">
                    <!-- Logo -->
                    <a href="#">
                      <img class="h-50px mb-4" src="@/assets/images/icon.png" alt="logo">
                    </a>
                    <!-- Title -->
                    <h2 class="mb-2 h3">Créer un nouveau compte</h2>
                    <p class="mb-0">Déjà membre?<router-link to="/login" style="color: #348DDB !important;"> Se connecter</router-link></p>

                    <el-alert v-show="erreur" :title="connexionMessage" type="error"></el-alert>
                    <el-alert v-show="success" :title="connexionMessage" type="success"></el-alert>

                    <!-- Form START -->
                    <form class="mt-4 text-start">
                      <template>
                        <!-- Email -->
                        <div class="mb-3">
                          <label class="form-label">Adresse e-mail</label>
                          <el-input type="email" placeholder="Veuillez saisir votre adresse e-mail" v-model="user"></el-input>
                        </div>
                        <!-- Password -->
                        <div class="mb-3 position-relative">
                          <label class="form-label">Mot de passe</label>
                          <el-input placeholder="Saisissez un mot de passe" v-model="pass" show-password></el-input>
                        </div>
                        <!-- Confirm Password -->
                        <div class="mb-3">
                          <label class="form-label">Confirmez le mot de passe</label>
                          <el-input placeholder="Confirmez votre mot de passe" v-model="pass_verif" type="password"></el-input>
                        </div>
                        <!-- Remember me -->
                         <!-- Divider -->
                    
                        <!-- Button -->
                        <div><p class="btn btn-primary w-100 mb-0" @click="Inscription()">S'inscrire</p></div>

                        <div class="position-relative my-4">
                        <hr style="color: gray">
                      </div>
                       <!-- Copyright -->
                    <div class="text-primary-hover mt-3 text-center"> Copyrights ©2024 SaRezide.</div>
                      </template>
                    </form>
                    <!-- Form END -->
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  </div>
</template>

  
  <script>
  
import { encryptData } from '@/cryptoUtils';
import { isMobile } from 'mobile-device-detect';

  export default {
    name: 'HomeView',
    data() {
      return {
        isMobile: isMobile,
        successInscription: false,
        showPassword: false,
        select: 'agent',
        user: '',
        pass: '',
        pass_verif: '',
        connexionMessage: '',
        token: '',
        erreur:false,
        success:false,
        tokenVerif: false,
      }
    },
    methods: {
      togglePassword() {
      this.showPassword = !this.showPassword;
    },

    ShowInscription() {
      const login = false
      this.$store.commit('LoginShow', login);
    },
      limitLength() {
        // Limiter la longueur du champ à 5 caractères
        if (this.token !== null && this.token.toString().length > 5) {
          this.token = parseInt(this.token.toString().slice(0, 5));
        }
      },

      Inscription() {
    if (!this.user || !this.pass || !this.pass_verif) {
      this.erreur = true;
      this.connexionMessage = "Veuillez remplir tous les champs.";
    } else if (this.pass !== this.pass_verif) {
      this.erreur = true;
      this.connexionMessage = "Les mots de passe ne correspondent pas.";
    } else {
      const encryptedEmail = encryptData(this.user);
      const encryptedPassword = encryptData(this.pass);

      // Données à envoyer
      const requestData = {
        email: encryptedEmail,
        mdp: encryptedPassword,
      };
      

      this.$vs.loading();

      // Envoyer la requête au serveur
      this.$axios.post('/inscription.php?select=' + this.select, requestData)
        .then(response => {
          // Traitement de la réponse du serveur
          this.verif(response);
          this.scrollToTop();
          this.$vs.loading.close();
        })
        .catch(error => {
          // Gestion des erreurs
          console.error(error);
          this.$vs.loading.close()
        });
    }
  },



      scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Permet un défilement fluide
        });
        },

      verif(data) {
            if(data.data.valide == 0 || data.data.valide == 2) {
                this.erreur=true;
                this.connexionMessage = data.data.mes;
            }
            if(data.data.valide == 1 || data.data.valide == 3) {
              this.successInscription = true;
              this.erreur=false;
              this.success=true;
              this.connexionMessage = data.data.mes;
              this.tokenVerif = true;
            }
            if(data.data.valide == 9) {
                this.erreur=false;
                this.success=true;
                this.connexionMessage = data.data.mes;
                this.$store.commit('ConnexionAgent', data.data.data);
                this.$router.push({ path: '/dashboard' });
            }
            if(data.data.valide == 8 & data.data.data[0].identifiant !== 'sakone@sygestra.com') {
              this.$store.commit('Connexion', data.data.data[0]);
              this.$router.push({ path: '/' });
              console.log('connexion');
            }
      },

    },
    computed: {
    inputType() {
      return this.showPassword ? 'text' : 'password';
    }
  },
  }
  </script>
  