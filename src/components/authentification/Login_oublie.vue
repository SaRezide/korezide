<template>

<div v-if="isMobile">
    <div class="align-items-center">
      <div class="login-content mt-2 mb-4 mx-3"> <!-- Ajout de mx-1rem -->
        <div class="login-logo me-4">
          <div style="text-align: center;">
            <img class="mb-4" style="height: 150px;" src="@/assets/images/sarezide-2.png" alt="logo">
          </div>
        </div>
        <div class="login-title">
          <h1 class="mb-2 h3 text-center">Mot de passe oublié?</h1>
          <p class="mb-sm-0" style="font-size: 15px">Saisissez l'adresse e-mail associée à votre compte.</p>
        </div>
        <div class="login-info">
          <!-- Form START -->
          <el-alert v-show="erreur" :title="connexionMessage" type="error"></el-alert>
          <el-alert v-show="success" :title="connexionMessage" type="success"></el-alert>
          <form class="mt-4">
            <template>

              <div class="mb-3">
                <label class="form-label">Adresse e-mail associée à votre compte</label>
                <input type="email" v-model="email" required placeholder="Saisissez l'adresse e-mail"
                  class="form-control">
              </div>
             
              <div>
                <p class="btn btn-primary w-100 mb-0" @click="PasswordForgot()">Envoyer le code de réinitialisation</p>
              </div>
              <!-- Google and facebook button -->
              <!-- <div class="vstack gap-3">
                        <button :AppId="clientId" @login="handleGoogleLogin" class="btn btn-light mb-0"><i class="fab fa-fw fa-google text-google-icon me-2"></i>Connectez-vous avec Google</button>
                        <button @click="login()">Connexion</button>
                        Login mi ? {{ isLogin }}
                        <vue-facebook-login :appId="AppId" @login="handleFacebookLogin">
                          <button>Connectez-vous avec Facebook</button>
                        </vue-facebook-login>
                      </div>
                      -->
            </template>
          </form>
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
                  <img src="@/assets/images/element/forgot-pass.svg" alt="">
                </div>
                <!-- Divider -->
                <div class="vr opacity-1 d-none d-lg-block"></div>
              </div>

              <!-- Information -->
              <div class="col-lg-6 order-1">
                <div class="p-4 p-sm-7">
                  <!-- Logo -->
                  <a href="index.html">
                    <img class="mb-4 h-50px" src="@/assets/images/icon.png" alt="logo">
                  </a>
                  <!-- Title -->
                  <h1 class="mb-2 h3">Mot de passe oublié?</h1>
                  <p class="mb-sm-0">Saisissez l'adresse e-mail associée à votre compte.</p>

                  <!-- Form START -->
                  <el-alert v-show="erreur" :title="connexionMessage" type="error"></el-alert>
                  <el-alert v-show="success" :title="connexionMessage" type="success"></el-alert>
                  <form class="mt-sm-4 text-start">
                    <!-- Email -->
                    <div class="mb-3">
                      <label class="form-label">Adresse e-mail associée à votre compte</label>
                      <input type="email" v-model="email" required placeholder="Saisissez l'adresse e-mail"
                        class="form-control">
                    </div>

                    

                    <!-- Button -->
                    <div>
                      <p class="btn btn-primary w-100 mb-0" @click="PasswordForgot()">Envoyer le code de réinitialisation</p>
                    </div>
                    <!-- Divider -->
                    <div class="position-relative my-4">
                      <hr>
                    </div>
                    <!-- Copyright -->
                    <div class="text-primary-hover mt-3 text-center"> Copyrights ©2024 SaRezide.</div>
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
</template>

<script>

import { encryptData } from '@/cryptoUtils';
import { isMobile } from 'mobile-device-detect';
export default {
  name: 'HomeView',
  data() {
    return {
      datas: [],
      erreur: false,
      success: false,
      isMobile: isMobile,
      connexionMessage: '',
      select: 'agent',
      email: '',
    }
  },
  methods: {
    PasswordForgot() {
      if (!this.email) {
        this.erreur = true;
        this.connexionMessage = "Veuillez saisir une adresse e-mail.";
      } else {
        const encryptedEmail = encryptData(this.email);

        // Données à envoyer
        const requestData = {
          email: encryptedEmail
        };
        this.$vs.loading();

        // Envoyer la requête au serveur
        this.$axios.post('/password_forgot.php?select=' + this.select, requestData)
          .then(response => {
            // Traitement de la réponse du serveur
            this.verif(response);
            this.$vs.loading.close()

               // Redirection vers la page de vérification du token
            if (response.data.valide === 1) {
              this.$router.push({ name: 'TokenVerify', params: { 
                fromForgotPassword: true,
                email: this.email
              
              }});

            }
          })
          .catch(error => {
            // Gestion des erreurs
            console.error(error);
            this.$vs.loading.close()
          });
      }
    },


    verif(data) {
      console.log(data);
      if (data.data.valide == 2) {
        this.erreur = true;
        this.connexionMessage = data.data.mes;
      }
      if (data.data.valide == 1) {
        this.erreur = false;
        this.success = true;
        this.connexionMessage = data.data.mes;
      }
    },
  },
  mounted() {
    this.test();
  },
}
</script>