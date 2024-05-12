<template>
    <div class="home">

		<div v-if="isMobile">
			<div class="d-flex align-items-center dash-header mt-2 border-bottom bg-white">
                    <span class="edit-icon  ms-3 my-2" @click="Back">
                        <i class="fa-solid fa-arrow-left text-black"></i>
                    </span>
                    <span style="flex: auto" class="">
                        <h6 style="font-size: 16px"  class="mb-0 text-center">Mes établissements favoris</h6>
                    </span>
                </div>

				<div class="p-3">

				
						<!-- Wishlist item START -->
						<vs-card class="result-item"  v-for="item in datas" :key="item.id_item" style="margin: 5px auto; max-width: 400px;  padding: 5px; padding-bottom: 0px">
							<div @click="GoToDetails(item)" style="color: black;">
								<vs-row>
									<vs-col v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="6.5">
										<img class="img" :src="item.image1" style="width: 300px !important; height:132px; border-radius: 5px;">
									</vs-col>
									<vs-col v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="5.5" style="">
										<div class="result-item-detail">
											<span class="result-title-m">{{item.libelle}}</span>
											<span class="result-location-m" style="color:orange" v-if="item.ville_item == 'Abidjan'">
												<vs-icon icon="place" style="font-size: 15px; color: orange;"></vs-icon>
												{{item.commune_item}}, <em style="color: #67c23a; font-weight: bold">{{item.quartier_item}}</em>
											</span>
											<span class="result-location-m" style="color:orange" v-else>
												<vs-icon icon="place" style="font-size: 15px; color: orange;"></vs-icon>
												{{item.ville_item}}, <em style="color: #67c23a; font-weight: bold">{{item.quartier_item}}</em>
											</span>
											<div class="services-list-m mt-2" style="margin-top: 5px; text-align: left;">
												<vs-icon class="services-list-icon-m text-dark" icon="verified_user" v-if="item.agent_securite == '1' || item.agent_securite == 'true'"></vs-icon>
												<vs-icon class="services-list-icon-m text-dark" icon="wifi" v-if="item.eqpm_internet == '1' || item.eqpm_internet == 'true'"></vs-icon>
												<vs-icon class="services-list-icon-m text-dark" icon="pool" v-if="item.eqpm_piscine_pb == '1' || item.eqpm_piscine_pv == '1' || item.eqpm_piscine_pb == 'true' || item.eqpm_piscine_pv == 'true'"></vs-icon>
												<vs-icon class="services-list-icon-m text-dark" icon="bath_private" v-if="item.eqpm_jacuzzi == '1' || item.eqpm_jacuzzi == 'true'"></vs-icon>
												<vs-icon class="services-list-icon-m text-dark" icon="tv" v-if="item.eqpm_tv == '1' || item.eqpm_tv == 'true'"></vs-icon>
												<vs-icon class="services-list-icon-m text-dark" icon="local_parking" v-if="item.tarif_parking == '1' || item.tarif_parking == 'true'"></vs-icon>
											</div>
											<div class="mt-2" style="text-align: left;">
												<span class="result-title-m" style="font-weight: bold; font-size: 13px; color: #348ddb">XOF {{ item.tarif_jour | formatThousands }} <em style="font-size: 12px">/jour</em></span><br>
												<span class="result-title-m" style="color: gray; font-size: 10px; text-align: center" v-if="item.nb_jour_reduction.lentgh >= 1">Reduction à partir de {{item.nb_jour_reduction}}</span><br>
											</div>
										</div>
									</vs-col>
								</vs-row>
							</div>
							<li @click="deleteFavoris(item.id_favoris)" class="list-inline-item" style="position: relative; float: right; margin-top: -50px">
								<a href="#" title="Supprimer de ma liste" class="btn btn-sm btn-round btn-danger mb-0"><i class="fa-solid fa-trash"></i></a>
							</li>
						</vs-card>
						
						<!-- Wishlist item END -->
						<!-- Wishlist item START -->
						<!-- Wishlist item END -->

						<!-- Condition lorsque l'utilisateur n'a pas de réservation  -->
						<div class="empty mb-8" v-if="datas == null">
                          <div class="d-flex justify-content-center mb-5">
                            <img src="@/assets/images/element/desert.svg" alt="">
                          </div>
                          <div class="d-grid justify-content-center text-center">
                            <H6>Vous n'avez pas encore ajouté d'établissement dans vos favoris !</H6>
                          </div>
                        </div>
                          <!-- Fin condition lorsque l'utilisateur n'a pas de réservation  -->
				</div>

				
		</div>

		<div v-else>
  <!-- =======================
  Main banner START -->
  <section class="pt-3">
	<div class="container">
		<div class="row">

			<!-- Sidebar START -->
			<div class="col-lg-4 col-xl-3">
				<!-- Responsive offcanvas body START -->
				<SidebarMenu />
				<!-- Responsive offcanvas body END -->	
			</div>
			<!-- Sidebar END -->

			<!-- Main content START -->
			<div class="col-lg-8 col-xl-9">

				<!-- Wishlist START -->
				<div class="card menu-account">
					<!-- Card header -->
					<div class="card-header border-bottom">
						<h4 class="card-header-title">Mes établissements favoris</h4>
					</div>

					<!-- Card body START -->
					<div class="card-body vstack gap-4">
						<div  v-for="item in datas" :key="item.id_item">
						<!-- Wishlist item START -->
						<div class="card shadow p-2">
							<div class="row g-0">
								<!-- Card img -->
								<div class="col-md-3">
									<img src="@/assets/images/category/hotel/4by3/10.jpg" class="card-img rounded-2" alt="Card image">
								</div>
	
								<!-- Card body -->
								<div class="col-md-9">
									<div class="card-body py-md-2 d-flex flex-column h-100">
	
										<!-- Rating and buttons -->
										<div class="d-flex justify-content-between align-items-center">
											<ul class="list-inline small mb-0">
												<li class="list-inline-item me-0"><i class="fa-solid fa-star text-warning"></i></li>
												<li class="list-inline-item me-0"><i class="fa-solid fa-star text-warning"></i></li>
												<li class="list-inline-item me-0"><i class="fa-solid fa-star text-warning"></i></li>
												<li class="list-inline-item me-0"><i class="fa-solid fa-star text-warning"></i></li>
												<li class="list-inline-item"><i class="fa-solid fa-star-half-alt text-warning"></i></li>
											</ul>
	
											<ul class="list-inline mb-0">
												<!-- Heart icon -->
												<li class="list-inline-item">
													<a href="#" class="btn btn-sm btn-round btn-danger mb-0"><i class="fa-solid fa-fw fa-heart"></i></a>
												</li>
												<!-- Share icon -->
												<li class="list-inline-item dropdown">
													<!-- Share button -->
													<span class="btn btn-sm btn-round btn-light mb-0" role="button" @click="centerDialogVisible = true">
														<i class="fa-solid fa-fw fa-share-alt"></i>
													</span>
													<!-- dropdown button -->
													<ul class="dropdown-menu dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare2">
														<li><a class="dropdown-item" href="#"><i class="fab fa-twitter-square me-2"></i>Twitter</a></li>
														<li><a class="dropdown-item" href="#"><i class="fab fa-facebook-square me-2"></i>Facebook</a></li>
														<li><a class="dropdown-item" href="#"><i class="fab fa-linkedin me-2"></i>LinkedIn</a></li>
														<li><a class="dropdown-item" href="#"><i class="fa-solid fa-copy me-2"></i>Copier le lien</a></li>
													</ul>
												</li>
												<li class="list-inline-item">
													<a href="#" class="btn btn-sm btn-round btn-light mb-0"><i class="fas fa-trash"></i></a>
												</li>
											</ul>
										</div>
	
										<!-- Title -->
										<h5 class="card-title mb-1"><a href="hotel-detail.html">Complexe hôtelier Pride Moon Village</a></h5>
										<small><i class="bi bi-geo-alt me-2"></i>31J W Spark Street, California - 24578</small>
										
										<!-- Price and Button -->
										<div class="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
											<!-- Button -->
											<div class="d-flex align-items-center">
												<h5 class="fw-bold mb-0 me-1">25 000F CFA</h5>
												<span class="mb-0 me-2">/jour</span>
											</div>
											<!-- Price -->
											<div class="mt-3 mt-sm-0">
												<a href="hotel-detail.html" class="btn btn-sm btn-dark w-100 mb-0">Voir établissement</a>    
											</div>                  
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- Wishlist item END -->

						<!-- Wishlist item START -->
						<div class="card shadow p-2">
							<div class="row g-0">
								<!-- Card img -->
								<div class="col-md-3">
									<img src="@/assets/images/category/hotel/4by3/11.jpg" class="card-img rounded-2" alt="Card image">
								</div>
	
								<!-- Card body -->
								<div class="col-md-9">
									<div class="card-body d-flex flex-column h-100 py-md-2">
	
										<!-- Rating and buttons -->
										<div class="d-flex justify-content-between align-items-center">
											<ul class="list-inline small mb-0">
												<li class="list-inline-item me-0"><i class="fa-solid fa-star text-warning"></i></li>
												<li class="list-inline-item me-0"><i class="fa-solid fa-star text-warning"></i></li>
												<li class="list-inline-item me-0"><i class="fa-solid fa-star text-warning"></i></li>
												<li class="list-inline-item me-0"><i class="fa-solid fa-star text-warning"></i></li>
												<li class="list-inline-item"><i class="fa-solid fa-star-half-alt text-warning"></i></li>
											</ul>
	
											<ul class="list-inline mb-0">
												<!-- Heart icon -->
												<li class="list-inline-item">
													<a href="#" class="btn btn-sm btn-round btn-danger mb-0"><i class="fa-solid fa-fw fa-heart"></i></a>
												</li>
												<!-- Share icon -->
													
												<li class="list-inline-item">
													<span class="btn btn-sm btn-round btn-light mb-0" role="button" @click="centerDialogVisible = true">
														<i class="fa-solid fa-fw fa-share-alt"></i>
													</span>
													<!-- dropdown button -->
													
													
												</li>
												<li class="list-inline-item">
													<a href="#" class="btn btn-sm btn-round btn-light mb-0"><i class="fas fa-trash"></i></a>
												</li>
											</ul>
										</div>
	
										<!-- Title -->
										<h5 class="card-title mb-1"><a href="hotel-detail.html">Royal Beach Plateau</a></h5>
										<small><i class="bi bi-geo-alt me-2"></i>Manhattan street, London - 24578</small>
										
										<!-- Price and Button -->
										<div class="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
											<!-- Button -->
											<div class="d-flex align-items-center">
												<h5 class="fw-bold mb-0 me-1">35 000F CFA</h5>
												<span class="mb-0 me-2">/jour</span>
											</div>
											<!-- Price -->
											<div class="mt-3 mt-sm-0">
												<a href="hotel-detail.html" class="btn btn-sm btn-dark w-100 mb-0">Voir établissement</a>    
											</div>                  
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- Wishlist item END -->
					</div>

						<!-- Condition lorsque l'utilisateur n'a pas de réservation  -->
						<div class="empty mb-8" v-if="datas == 0">
                          <div class="d-flex justify-content-center mb-5">
                            <img src="@/assets/images/element/desert.svg" alt="">
                          </div>
                          <div class="d-grid justify-content-center text-center">
                            <H6>Vous n'avez pas encore ajouté d'établissement dans vos favoris !</H6>
                          </div>
                        </div>
                          <!-- Fin condition lorsque l'utilisateur n'a pas de réservation  -->

					</div>
					<!-- Card body END -->
				</div>
				<!-- Wishlist END -->

			</div>
			<!-- Main content END -->

		</div>
	</div>
  </section>
		</div>

  
    </div>
  </template>
  
  <script>
  import { isMobile } from 'mobile-device-detect';
  import SidebarMenu from '@/components/dashboard/SidebarMenu.vue';
  import { encryptData } from '@/cryptoUtils';
  export default {
    name: 'HomeView',
	components: {
    SidebarMenu,
  },
  computed: {
    users() {
      return  this.$store.state.users;  
        },
	
      },
    data() {
      return {
		centerDialogVisible: false,
		isMobile: isMobile,
        datas: [],
        connexionMessage: '',
        options: [{
          value: 'Propriétaire',
          label: 'Propriétaire'
        }, {
          value: 'Gestionnaire',
          label: 'Gestionnaire'
        }, {
          value: 'Assistant(e)',
          label: 'Assistant(e)'
        }],
        chargeFichier3 : 0,
        photo: 'https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg',
        value: '',
        radio: 3,
        email: 'oumarsakone75@gmail.com',
        form: {
            nom: '',
            prenom: '',
            contact: '',
            role: '',
            genre: '',
            adresse: ''
        }
      }
    },
    methods: {

	Back() {
		this.$router.back()
	},
	getFavoris() {
		this.$vs.loading();
      const user = encryptData(this.users.id);
      this.$axios.get('/dashboard_favoris.php?user=' + user)
        .then(response => {
          // Traitement de la réponse du serveur
          this.datas = response.data.favoris;
          this.$vs.loading.close();
        })
        .catch(error => {
          // Gestion des erreurs
          console.error(error);
          this.$vs.loading.close();
        });
    },

	deleteFavoris(del) {
		this.$vs.loading();
      const user = encryptData(this.users.id);
      this.$axios.delete('/dashboard_favoris.php?user=' + user + '&resid=' + del)
        .then(response => {
          // Traitement de la réponse du serveur
          this.datas = response.data.favoris;
          this.$vs.loading.close();
        })
        .catch(error => {
          // Gestion des erreurs
          console.error(error);
          this.$vs.loading.close();
        });
    },

	GoToDetails(bien) {
			this.$vs.loading();
			// Déclencher la mutation pour stocker les détails du bien
			this.$store.commit('BiensDetail', bien);
			this.$vs.loading.close();
			// Naviguer vers la page de détails en passant l'identifiant du bien en paramètre
			this.$router.push({ name: 'DetailResult', params: { param: bien.id_item } });

		},

      verif(data) {
        if(data.data.valide == 0 || data.data.valide == 2) {
              this.erreur=true;
              this.connexionMessage = data.data.mes;
              this.$vs.notify({title:'Succès',text:this.connexionMessage,color:'danger',position:'top-center'})
            }
            if(data.data.valide == 1) {
              this.erreur=false;
              this.success=true;
              this.connexionMessage = data.data.mes;
              this.$vs.notify({title:'Succès',text:this.connexionMessage,color:'success',position:'top-center'})
            }
            if(data.data.valide == 8 & data.data.data[0].identifiant !== 'sakone@sygestra.com') {
              this.$store.commit('Connexion', data.data.data[0]);
              this.$router.push({ path: '/' });
              console.log('connexion');
            }
          },

      uploadImage(e, a) {
        console.log('choix');

            if(a === 'c') {
              this.chargeFichier3 = 1;
            }
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.image = files[0]; 

            let formData = new FormData();
            let uploadPreset = "dsegjq9c"
            let cloudinaryUrl = "https://api.cloudinary.com/v1_1/r-sidence-meubl-e/upload"
            this.annee = this.printYear();
            formData.append('file', this.image);
            formData.append('public_id', this.annee);
            formData.append('upload_preset', uploadPreset)

            this.$axios.post(cloudinaryUrl, formData)
            .then(res => {
                if(a === 'a') {
                  this.chargeFichier = 2;
                  let fichierUrl = res.data;
                  this.form.fichier_permis = fichierUrl.url;
                }
                if(a === 'b') {
                  this.chargeFichier2 = 2;
                  let fichierUrl = res.data;
                  this.form.fichier_piece = fichierUrl.url;
                }
                if(a === 'c') {
                  this.chargeFichier3 = 2;
                  this.photo = null;
                  this.photo = res.data.url;
                  this.sendPhotoToServer();
                }
            })
            .catch(err => {
                console.log(err)
            })
        },

        printYear: function () {
            return new Date().getFullYear() + 
            '' + new Date().getMonth()+ 
            '' + new Date().getDate()+
            '' + new Date().getHours()+
            '' + new Date().getMinutes()+
            '' + new Date().getMilliseconds()+
            '' + new Date().getSeconds();
      },
    },
    mounted() {
      this.getFavoris();
    },
  }
  </script>
  