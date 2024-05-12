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
								<a href="index.html">
									<img class="h-50px mb-4" src="@/assets/images/icon.png" alt="logo">
								</a>
								<!-- Title -->
								<h2 class="mb-2 h3">Créer un nouveau compte</h2>
								<p class="mb-0">Déjà membre?<router-link to="/login_client"> Se connecter</router-link></p>

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
		
								<!-- Form START -->
								<form class="mt-4 text-start">
									<!-- Email -->
									<div class="mb-3">
										<label class="form-label">Adresse e-mail</label>
										<input type="email" v-model="user" placeholder="Veuillez saisir votre adresse e-mail" class="form-control">
									</div>
									<!-- Password -->
									<div class="mb-3 position-relative">
										<label class="form-label">Mot de passe</label>
										<input class="form-control fakepassword" v-model="pass" placeholder="Saisissez un mot de passe" type="password" id="psw-input">
										<span class="position-absolute top-50 end-0 translate-middle-y p-0 mt-3">
											<i class="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
										</span>
									</div>
									<!-- Confirm Password -->
									<div class="mb-3">
										<label class="form-label">Confirmez le mot de passe</label>
										<input type="password" v-model="pass_verif" placeholder="Confirmez votre mot de passe" class="form-control">
									</div>
									<!-- Remember me -->
									<div class="mb-3">
										<input type="checkbox" class="form-check-input" id="rememberCheck">
										<label class="form-check-label" for="rememberCheck"> Gardez-moi connecté</label>
									</div>
									<!-- Button -->
									<div><p class="btn btn-primary w-100 mb-0" @click="Inscription()">S'inscrire</p></div>
		
									<!-- Divider -->
									<div class="position-relative my-4">
										<hr>
										<p class="small position-absolute top-50 start-50 translate-middle bg-mode px-1 px-sm-2">Ou inscrivez-vous avec</p>
									</div>
		
									<!-- Google and facebook button -->
									<div class="vstack gap-3">
										<a href="#" class="btn btn-light mb-0"><i class="fab fa-fw fa-google text-google-icon me-2"></i>Inscrivez-vous avec Google</a>
										<a href="#" class="btn btn-light mb-0"><i class="fab fa-fw fa-facebook-f text-facebook me-2"></i>Inscrivez-vous avec Facebook</a>
									</div>
		
									<!-- Copyright -->
									<div class="text-primary-hover mt-3 text-center"> Copyrights ©2023 SaRezide. </div>
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
  export default {
    name: 'HomeView',
    data() {
      return {
        select: 'client',
        user: '',
        pass: '',
        pass_verif: '',
        connexionMessage: "",
        erreur:false,
        success:false,
      }
    },
    methods: {
      Inscription() {
        if(this.pass == this.pass_verif) {

          const encryptedEmail = encryptData(this.user);
          const encryptedPassword = encryptData(this.pass);

          // Données à envoyer
          const requestData = {
            email: encryptedEmail,
            mdp: encryptedPassword,
          };
          this.$vs.loading();

          // Envoyer la requête au serveur
          this.$axios.post('/inscription.php?select='+this.select, requestData)
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

        } else {
          this.erreur=true;
          this.connexionMessage = 'Vos mot de passe sont pas identique';
        }
      },

      verif(data) {
          if(data.data.valide == 0 || data.data.valide == 2) {
                this.erreur=true;
                this.connexionMessage = data.data.mes;
            }
            if(data.data.valide == 1) {
              this.erreur=false;
              this.success=true;
              this.connexionMessage = data.data.mes;
            }
            if(data.data.valide == 8 & data.data.data[0].identifiant !== 'sakone@sygestra.com') {
              this.$store.commit('Connexion', data.data.data[0]);
              this.$router.push({ path: '/' });
              console.log('connexion');
            }
      },

    },
    mounted() {
      
    },
  }
  </script>
  