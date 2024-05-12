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
								<p class="mb-sm-0">Saisissez l'adresse e-mail associée à un compte.</p>
		
								<!-- Form START -->
								<form class="mt-sm-4 text-start">
									<!-- Email -->
									<div class="mb-3">
										<label class="form-label">Adresse e-mail</label>
										<input type="email" placeholder="Saisissez l'adresse e-mail associée à un compte" class="form-control">
									</div>

                 

									<!-- Button -->
									<div class="d-grid"><button type="submit" class="btn btn-primary">Réinitialiser le mot de passe</button></div>
									<!-- Copyright -->
									<div class="text-primary-hover mt-3 text-center"> Copyrights ©2023 SaRezide.</div>
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
        datas: [],
        email: '',
        password: ''
      }
    },
    methods: {
      test() {
        const var1 = 'valeur_de_variable';
        const val = encryptData(var1);
        console.log('Valeur chiffrée :', val);
  
        this.$axios.get('/albakoos_camion.php', {
          params: {
          val: val,
        },
        })
          .then(response => {
            // Traiter la réponse de l'API
            this.datas = response.data.data;
            console.log(this.datas);
          })
          .catch(error => {
            // Gérer les erreurs
            console.error('Erreur de requête:', error);
          });
      }
    },
    mounted() {
      this.test();
    },
  }
  </script>
  