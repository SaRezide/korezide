<template>
  <div class="home">
<!-- =======================
Main banner START -->
<section class="vh-xxl-100 bg-white">
<div class="container h-100 d-flex px-0 px-sm-4">
  <div class="row justify-content-center align-items-center m-auto">
    <div class="col-12">
      <div class="bg-mode shadow rounded-3 overflow-hidden">
        <div class="row g-0">
          <!-- Vector Image -->
          <div class="col-lg-6 d-flex align-items-center order-2 order-lg-1">
            <div class="p-3 p-lg-5">
              <img src="@/assets/images/element/signin.svg" alt="">
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
              <h2 class="mb-2 h3">Content de vous revoir cher client</h2>
              <p class="mb-0">Nouveau ici?<router-link to="/inscription"> Créer un compte</router-link></p>
  
              <!-- Form START -->
              <el-alert
                  v-show="erreur"
                  :title="connexionMessage"
                  type="error">
                </el-alert>
                <el-alert
                  v-show="success"
                  :title="connexionMessage"
                  type="success">
              </el-alert>
              <form class="mt-4 text-start">
                <!-- Email -->
                <div class="mb-3">
                  <label class="form-label">Adresse e-mail</label>
                  <input type="email" v-model="email" placeholder="Veuillez saisir votre adresse e-mail" class="form-control">
                </div>
                <!-- Password -->
                <div class="mb-3 position-relative">
                  <label class="form-label">Mot de passe</label>
                  <input v-model="mdp" class="form-control fakepassword" placeholder="Veuillez saisir votre mot de passe" type="password" id="psw-input">
                  <span class="position-absolute top-50 end-0 translate-middle-y p-0 mt-3">
                    <i class="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
                  </span>
                </div>
                <!-- Remember me -->
                <div class="mb-3 d-sm-flex justify-content-between">
                  <div>
                    <input type="checkbox" class="form-check-input" id="rememberCheck">
                    <label class="form-check-label" for="rememberCheck">Souviens-toi de moi?</label>
                  </div>
                  <router-link to="/mot_de_passe_oublie">Mot de passe oublié?</router-link>
                </div>
                <!-- Button -->
                <div><p class="btn btn-primary w-100 mb-0" @click="Connexion()">Se connecter</p></div>
  
                <!-- Divider -->
                <div class="position-relative my-4">
                  <hr>
                  <p class="small bg-mode position-absolute top-50 start-50 translate-middle px-2">Ou connectez-vous avec</p>
                </div>
  
                <!-- LOGIN RESEAU SOCIAL

                <div class="vstack gap-3">
                  <button   :AppId="clientId"
                  @login="handleGoogleLogin"
                  class="btn btn-light mb-0"><i class="fab fa-fw fa-google text-google-icon me-2"></i>Connectez-vous avec Google</button>
                  
                  <button @click="login()">Connexion</button>
                  Login mi ? {{ isLogin }}
                
                  <vue-facebook-login
                  :appId="AppId"
                  @login="handleFacebookLogin"
                >
                  <button>Connectez-vous avec Facebook</button>
                </vue-facebook-login>
                </div>

                -->
  
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
//import VueFacebookLogin from 'vue-facebook-login-component';
import { encryptData } from '@/cryptoUtils';

export default {
  name: 'HomeView',
  components: {
  //  VueFacebookLogin,
  },
  data() {
    return {
      email: '',
      mdp: '',
      AppId: "695828089390631",
      connexionMessage: "",
      erreur:false,
      success:false,
      FB: null, // Instance du SDK Facebook
      isLogin: false,
      isConnected: false,
      personalID: '',
      name: '',
      clientId: "658508526723-2sdfq97i9qsulfk1e6va233kimseokn4.apps.googleusercontent.com",
    }
  },
 
  methods: {

    async login(){
      const googleUser=await this.$gAuth.signIn();
      console.log('googleUser', googleUser)
    },

     ////////Login With Facebook/////////
    handleFacebookLogin(response) {
        // Traitez la réponse de la connexion Facebook ici
        console.log('Facebook Login Response:', response);
        
        // Vérifiez si la connexion a réussi
        if (response.authResponse) {
            // L'utilisateur est connecté avec succès
            const accessToken = response.authResponse.accessToken; // Récupérez le jeton d'accès
            
            // Utilisez le jeton d'accès pour récupérer les informations de l'utilisateur depuis l'API Graph de Facebook
            fetch(`https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${accessToken}`)
            .then(response => response.json())
            .then(data => {
                // Les données de l'utilisateur sont disponibles dans 'data'
                console.log('User data:', data);
                this.$router.push({ path: 'dashboard' });
                // Envoyez les données de l'utilisateur au backend pour traitement
                this.sendUserDataToBackend(data);
            })
            .catch(error => {
                // Gérer les erreurs
                console.error('Error fetching user data:', error);
            });
        } else {
            // La connexion a échoué ou l'utilisateur a annulé
            console.log('Facebook login failed or user cancelled.');
        }
    },
    sendUserDataToBackend(userData) {
        // Envoyez les données de l'utilisateur au backend via une requête HTTP
        this.$axios.post('https://www.korezide.com/appi_sarezide/callback_facebook.php', userData)
        .then(response => {
            if (response.status === 200) {
                // La requête a réussi
                console.log('User data sent to backend successfully.');
                // Traitez la réponse du backend si nécessaire
            } else {
                // La requête a échoué
                console.error('Failed to send user data to backend.');
            }
        })
        .catch(error => {
            // Gérer les erreurs de requête
            console.error('Error sending user data to backend:', error);
        });
    },

    ////////Login With Google/////////

    handleGoogleLogin(response) {
        // Traitez la réponse de la connexion Google ici
        console.log('Google Login Response:', response);
        
        // Vérifiez si la connexion a réussi
        if (response.authResponse) {
            // L'utilisateur est connecté avec succès
            const accessToken = response.authResponse.accessToken; // Récupérez le jeton d'accès
            
            // Utilisez le jeton d'accès pour récupérer les informations de l'utilisateur depuis l'API Graph de Google
            fetch(`https://accounts.google.com/gsi/client=${accessToken}`)
            .then(response => response.json())
            .then(data => {
                // Les données de l'utilisateur sont disponibles dans 'data'
                console.log('User data:', data);
                this.$router.push({ path: 'dashboard' });
                // Envoyez les données de l'utilisateur au backend pour traitement
                this.SendDataToBackend(data);
            })
            .catch(error => {
                // Gérer les erreurs
                console.error('Error fetching user data:', error);
            });
        } else {
            // La connexion a échoué ou l'utilisateur a annulé
            console.log('Google login failed or user cancelled.');
        }
    },
    SendDataToBackend(userData) {
        // Envoyez les données de l'utilisateur au backend via une requête HTTP
        this.$axios.post('https://www.korezide.com/appi_sarezide/google_callback.php', userData)
        .then(response => {
            if (response.status === 200) {
                // La requête a réussi
                console.log('User data sent to backend successfully.');
                // Traitez la réponse du backend si nécessaire
            } else {
                // La requête a échoué
                console.error('Failed to send user data to backend.');
            }
        })
        .catch(error => {
            // Gérer les erreurs de requête
            console.error('Error sending user data to backend:', error);
        });
    },

    Connexion() {
      if (this.email && this.mdp) {
        this.sendDataToServer(this.email, this.mdp);
      } else {
        console.error('Email et/ou mot de passe non définis.');
      }
    },
    sendDataToServer(email, password) {
      // Chiffrer les données
      const encryptedEmail = encryptData(email);
      const encryptedPassword = encryptData(password);

      // Données à envoyer
      const requestData = {
        user: encryptedEmail,
        mdp: encryptedPassword,
      };
      this.$vs.loading();

      // Envoyer la requête au serveur
      this.$axios.post('/login_client.php', requestData)
        .then(response => {
          // Traitement de la réponse du serveur
          this.verif(response);
          this.$vs.loading.close()
        })
        .catch(error => {
          // Gestion des erreurs
          console.error(error);
          this.$vs.loading.close()
        });
    },

    verif(data) {
      console.log(data);
      if(data.data.valide == 0 || data.data.valide == 2) {
            this.erreur=true;
            this.connexionMessage = data.data.mes;
          }
          if(data.data.valide == 1) {
            this.erreur=false;
            this.success=true;
            this.connexionMessage = data.data.mes;
            this.$store.commit('ConnexionClient', data.data.data);
            this.$router.push({ path: '/dashboard_client' });
          }
        },

  },
  

}
</script>
