<template>
    <div class="home">
  <!-- =======================
  Main banner START -->
  <section class="pt-4">
	<div class="container">
		<div class="row">
			<div class="col-md-10 col-xl-8 mx-auto">

				<div class="card shadow">
					<!-- Image -->
					<img src="assets/images/gallery/04.jpg" class="rounded-top" alt="">

					<!-- Card body -->
					<div class="card-body text-center p-4">
						<!-- Title -->
						<h1 class="card-title fs-3 text-success">🎊 Toutes nos félicitations! 🎊</h1>
						<p class="lead mb-3">Votre hébergement à été ajouté avec succès</p>

						<!-- Second title -->
						<h6  class="alert alert-success mb-4" role="alert">Par contre nous l'examinerons dans les plus bref délai, Une fois que notre équipe aura examiné votre annonce, vous recevrez une notification par e-mail pour vous informer si elle a été approuvée ou non. Nous vous remercions de votre patience et de votre compréhension.</h6>

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
  