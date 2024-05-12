<template>
    <!-- =======================
    Main banner START -->
    <div v-if="isMobile">
      <div class="align-items-center">
      <div class="login-content mt-6 mb-6 mx-4"> <!-- Ajout de mx-1rem -->
        <div class="login-logo me-4">
          <div style="text-align: center;">
            <img class="mb-4" style="height: 150px;" src="@/assets/images/sarezide-2.png" alt="logo">
          </div>
        </div>
        <div class="login-title">
          <p class="mb-2 fw-bold" style="font-size: 16px !important;">Un e-mail contenant un code de réinitialisation vous a été envoyé sur <span style="color: #348DDB !important; font-size: 14px">{{ email }}</span></p>
                    <p class="mb-0"><router-link to="/mot_de_passe_oublie" style="color: orange !important;"> je n'ai pas reçu le mail</router-link></p>
        </div>
        <div class="login-info">
          <!-- Form START -->
          <el-alert v-show="erreur" :title="connexionMessage" type="error"></el-alert>
          <el-alert v-show="success" :title="connexionMessage" type="success"></el-alert>
          <form class="mt-4">

                  <div class="mb-3">
                      <label class="form-label">Entrez votre code</label>
                      <input v-model="token" @input="limitLength" inputmode="numeric" placeholder="XXXXXX" class="form-control" />
                  </div>
             
                    <div>
                      <p class="btn btn-primary w-100 mb-0"  @click="TokenVerify()">Continuer</p>
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
          </form>
          <!-- Form END -->
        </div>
      </div>
    </div>

    </div>
    <div v-else>

    <section class="vh-xxl-100">
      <div class="container h-100 d-flex px-0">
        <div class="row justify-content-center align-items-center m-auto">
          <div class="col-12">
            <div class="bg-mode shadow rounded-3 overflow-hidden">
              <div class="row g-0">
                <!-- Vector Image -->
                <div class="col-lg-6 d-flex align-items-center order-2 order-lg-1">
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
                      <img class="h-50px mb-4" src="@/assets/images/icon.png" alt="logo">
                    </a>
                    <!-- Title -->
                    <p class="mb-2" style="font-size: 16px !important;">Un e-mail contenant un code de réinitialisation vous a été envoyé sur <span style="color: #348DDB !important;">{{ email }}</span></p>
                    <p class="mb-0"><router-link to="/mot_de_passe_oublie" style="color: orange !important;"> je n'ai pas reçu le mail</router-link></p>

                    <!-- Form START -->
                    <el-alert v-show="erreur" :title="connexionMessage" type="error"></el-alert>
                    <el-alert v-show="success" :title="connexionMessage" type="success"></el-alert>
                    <form class="mt-4 text-start">
                      <!-- Token -->
                      <div class="mb-3">
                          <label class="form-label">Entrez votre code</label>
                          <input v-model="token" @input="limitLength" inputmode="numeric" placeholder="XXXXXX" class="form-control" />
                      </div>
                      
                      <!-- Button -->
                      <div>
                        <p class="btn btn-primary w-100 mb-0"  @click="TokenVerify()">Valider</p>
                      </div>

                      <!-- Divider -->
                      <div class="position-relative my-4">
                        <hr>
                      </div>

                      <!-- Copyright -->
                      <div class="text-primary-hover mt-3 text-center"> Copyrights ©2023 SaRezide </div>
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

import { isMobile } from 'mobile-device-detect';

export default {
  name: 'TokenVerify',
  components: {
    // VueFacebookLogin,
  },
  data() {
    return {
      token: '',
      isMobile: isMobile,
      email: this.$route.params.email,
      AppId: "695828089390631",
      connexionMessage: '',
      erreur: false,
      success: false,
      isLogin: false,
      isConnected: false,
      personalID: '',
      clientId: "658508526723-2sdfq97i9qsulfk1e6va233kimseokn4.apps.googleusercontent.com",
    }
  },

  methods: {
    TokenVerify() {
    if (!this.token) {
      this.erreur = true;
      this.connexionMessage = "Veuillez saisir le code à 6 chiffre réçu par mail.";
    } else if (this.token.length === 6) {
      // Données à envoyer
      const requestData = {
        token: this.token,
        email: this.email
      };

      this.$vs.loading();

      // Envoyer la requête au serveur
      this.$axios.post('/token_verify.php', requestData)
        .then(response => {
          // Traitement de la réponse du serveur
          this.verif(response);
          this.$vs.loading.close();

         // Redirection vers la page de vérification du token
          if (response.data.valide === 1) {
          this.$router.push({ name: 'ChangePassword', params: { 
            fromTokenVerify: true,
            email: this.email
          
          }});
          }
        })
        .catch(error => {
          // Gestion des erreurs
          console.error(error);
          this.$vs.loading.close();
        });
    } else {
      this.erreur = true;
      this.connexionMessage = 'Attention, votre code doit faire 6 caractères';
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

  if (!this.$route.params.fromForgotPassword) {
    this.$router.push({ name: 'PassForget' });
    
  }
}

}
</script>