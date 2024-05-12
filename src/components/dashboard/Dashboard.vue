<template>
    <div class="home">
        <Navbar v-if="isMobile"/>
        <div v-if="isMobile">
            <div class="dashboard">
                <div class="dashboard-container">
                   <div class="details-user mx-3 mt-4 text-center"> 
                            <router-link to="/profile_agent" class="edit-icon mt-2 me-2">
                                <i class="fa-solid fa-pen text-black"></i>
                            </router-link>
                            <div class="avatar avatar-xl mb-2 ms-6 mt-3">

                                <img v-if="users.photo.length > 0" id="uploadfile-1-preview" class="avatar-img rounded-circle border border-white border-3 shadow" :src="users.photo" alt="">
                                <img v-else id="uploadfile-1-preview" class="avatar-img rounded-circle border border-white border-3 shadow" src="@/assets/images/avatar/user.png" alt="">
                            </div>
                        <h4>
                            <span v-if="users.nom.length > 1">{{users.nom}} {{users.prenom}}</span> <span v-else>{{users.email}}</span>
                            <h6 style="font-size: 13px"> {{ users.pays }}</h6>


                        </h4>
                        <div class="d-flex justify-content-center align-content-between my-1 mb-0"> 
                            <h6 v-if="users.nom.length > 1" style="font-size: 13px; margin-right: 15px;">  
                            <vs-tooltip text="Votre email a été vérifié">
                                <i class="bi bi-patch-check-fill text-success me-1"></i>
                                {{users.email}}
                            </vs-tooltip>
                            </h6>
                            <h6 style="font-size: 13px; margin-left: 15px;">
                                <vs-tooltip text="Votre numéro n'est pas vérifié">
                                <i class="bi bi-patch-exclamation-fill text-danger me-1"></i> 
                                {{ users.contact }}
                                </vs-tooltip>
                            </h6>
                        </div>
                    </div>

                <!-- Personal info START -->
					<div class="card menu-account mx-3 mt-3 mb-3">
                    <!-- Card body START -->
                    <div class="card-body" v-if="users.role == 'Agent' || users.role == 'Admin'">
                        <!-- Form START -->
                        <div class="row gy-4 justify-content-center">
                            <div class="d-flex justify-content-center align-content-between">
                            <div class="col-xxl-3 me-2 col-xl-4 col-sm-6 orders-child-1">
                                <div class="single-order" style="padding: 10px">
                                    <div class="single-order-flex">
                                        <div class="single-order-contents">
                                            <span  class="single-order-contents-subtitle ">Réservation en attente</span>
                                            <h2 class="single-order-contents-title">{{dataEncours}}</h2>
                                        </div>
                                        <div class="single-order-icon">
                                            <i class="las fa-solid fa-clock-rotate-left"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-3 ms-2 col-xl-4 col-sm-6 orders-child-2">
                                <div class="single-order" style="padding: 10px">
                                    <div class="single-order-flex">
                                        <div class="single-order-contents">
                                            <span  class="single-order-contents-subtitle ">Réservation acceptée</span>
                                            <h2 class="single-order-contents-title">{{dataValides}}</h2>
                                        </div>
                                        <div class="single-order-icon">
                                            <i class="las fa-regular fa-circle-check"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center align-content-between">
                            <div class="col-xxl-3 me-2 col-xl-4 col-sm-6 orders-child-3">
                                <div class="single-order" style="padding: 10px">
                                    <div class="single-order-flex">
                                        <div class="single-order-contents">
                                            <span  class="single-order-contents-subtitle ">Réservation annulée</span>
                                            <h2 class="single-order-contents-title">{{dataAnnules}}</h2>
                                        </div>
                                        <div class="single-order-icon">
                                            <i class="las fa-regular fa-circle-xmark"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-3 col-xl-4 ms-2 col-sm-6 orders-child-4">
                                <div class="single-order" style="padding: 10px">
                                    <div class="single-order-flex">
                                        <div class="single-order-contents">
                                            <span  class="single-order-contents-subtitle ">Total Visite</span>
                                            <h2 class="single-order-contents-title2">{{dataVisite}}</h2>
                                        </div>
                                        <div class="single-order-icon">
                                            <i class="las bi bi-clipboard-check"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <!-- Form END -->
                    </div>
                    <!-- Card body END -->
                    </div>
                <!-- Personal info END -->

                    <div class="menu mb-4" v-if="users.role == 'Admin'">
                        <h5 class="mx-3">Menu Administrateur</h5>
                        <div class="bg-white mx-3 py-1 menu-account">
                            <h6 class="mx-3 mt-3" style="font-size: 14px; color: grey">Administration</h6>
                            <div class="mx-3">
                                <router-link to="/admin_validation_residences" class="d-flex justify-content-between mb-3 align-items-center">
                                    <p class="fw-normal fs-6 mb-0">Résidences en cours de validation</p>
                                    <i class="fa-solid fa-suitcase-rolling me-2"></i>
                                </router-link>
                                <router-link to="/admin_validation_reservations" class="d-flex justify-content-between mb-3 align-items-center">
                                    <p class="fw-normal fs-6 mb-0">Liste des réservations</p>
                                    <i class="fa-solid fa-paper-plane me-2"></i>
                                </router-link>
                            
                            </div>
                        </div>
                    </div>

                <div class="menu mb-4">
                    <h5 class="mx-3">Menu</h5>
                    <div class="bg-white mx-3 py-1 menu-account">
                        <h6 class="mx-3 mt-3" style="font-size: 14px; color: grey">Compte</h6>
                        <div class="mx-3">
                            <router-link to="/reservations_clients" class="d-flex justify-content-between mb-3 align-items-center">
                                <p class="fw-normal fs-6 mb-0">Mes réservations</p>
                                <i class="fa-solid fa-suitcase-rolling me-2"></i>
                            </router-link>
                            <router-link to="/reservation_id" class="d-flex justify-content-between mb-3 align-items-center">
                                <p class="fw-normal fs-6 mb-0">Suivre ma réservation</p>
                                <i class="fa-solid fa-paper-plane me-2"></i>
                            </router-link>
                            <router-link to="/notifications" class="d-flex justify-content-between mb-3 align-items-center">
                                <p class="fw-normal fs-6 mb-0">Notifications</p>
                                <i class="bi bi-app-indicator me-2"></i>
                            </router-link>
                            <router-link to="/code_parrainage" class="d-flex justify-content-between mb-3 align-items-center">
                                <p class="fw-normal fs-6 mb-0">Mon code parrainage</p>
                                <i class="fa-solid fa-ticket me-2"></i>
                            </router-link>
                        
                        </div>
                    </div>
                </div>

                <div class="preference mb-4">
                    <div class="bg-white mx-3 py-1 menu-account">
                        <h6 class="mx-3 mt-3" style="font-size: 14px; color: grey">Préference</h6>
                        <div class="mx-3">
                            <router-link to="/favoris_clients" class="d-flex justify-content-between mb-3 align-items-center">
                                <p class="fw-normal fs-6 mb-0">Mes établissements favoris</p>
                                <i class="fa-solid fa-heart me-2"></i>
                            </router-link>
                            <!--
                            <router-link to="/favoris_clients" class="d-flex justify-content-between mb-3 align-items-center">
                                <p class="fw-normal fs-6 mb-0">Mes recherches sauvegardées</p>
                                <i class="fa-solid fa-floppy-disk me-2"></i>
                            </router-link>
                            
                            <span class="d-flex justify-content-between mb-3 align-items-center">
                                <p class="fw-normal fs-6 mb-0">Article de voyages</p>
                                <i class="fa-solid fa-newspaper me-2"></i>
                            </span>
                            -->
                            <router-link to="/parametres" class="d-flex justify-content-between mb-3 align-items-center">
                                <p class="fw-normal fs-6 mb-0">Mes paramètres</p>
                                <i class="fa-solid fa-gear me-2"></i>
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="partners mb-4" v-if="users.role == 'Agent'">
                    <div class="bg-white mx-3 py-1 menu-account">
                        <h6 class="mx-3 mt-3" style="font-size: 14px; color: grey">Partenaires</h6>
                        <div class="mx-3">
                            <router-link to="/ajout_residence" class="d-flex justify-content-between mb-3 align-items-center">
                                <p class="fw-normal fs-6 mb-0">Inscrire mon établissement</p>
                                <span class="material-icons me-2" style="font-size: 18px">
                                    add_home_work
                                </span>
                            </router-link>
                            <router-link to="/biens" class="d-flex justify-content-between mb-3 align-items-center mt-2">
                                <p class="fw-normal fs-6 mb-0">Mes établissements</p>
                                <i class="bi bi-buildings-fill me-2 mb-0"></i>
                            </router-link>
                            <router-link to="/reservations_agent" class="d-flex justify-content-between mb-3 align-items-center">
                                <p class="fw-normal fs-6 mb-0">Réservations</p>
                                <i class="bi bi-bookmark-heart fa-fw me-1"></i>
                            </router-link>
                            <router-link to="/activites" class="d-flex justify-content-between mb-3 align-items-center">
                                <p class="fw-normal fs-6 mb-0">Activités</p>
                                <i class="bi bi-bell fa-fw me-1"></i>
                            </router-link>
                        </div>
                    </div>
                </div>

                
                <div class="help mb-8">
                    <div class="bg-white mx-3 py-1 menu-account">
                        <h6 class="mx-3 mt-3" style="font-size: 12px; color: grey;font-family: 'Contrail One'">SaRezide</h6>
                        <div class="mx-3">
                            <router-link to="/terms-of-service" class="d-flex justify-content-between mb-3 align-items-center">
                                <p class="fw-normal fs-6 mb-0">Conditions générales d'utilisation (CGU)</p>
                                <span class="material-icons me-2" style="font-size: 18px">
                                    document_scanner
                                    </span>
                            </router-link>
                            <router-link to="/privacy-policy" class="d-flex justify-content-between mb-3 align-items-center">
                                <p class="fw-normal fs-6 mb-0">Politique de confidentialité</p>
                                <i class="bi bi-file-earmark-lock-fill me-2"></i>
                            </router-link>
                            <router-link to="/contact" class="d-flex justify-content-between mb-3 align-items-center">
                                <p class="fw-normal fs-6 mb-0">Contacter le Service Clients</p>
                                <i class="fa-solid fa-headset me-2"></i>
                            </router-link>
                            <router-link to="/help-center" class="d-flex justify-content-between mb-3 align-items-center">
                                <p class="fw-normal fs-6 mb-0">Centre d'aide</p>
                                <i class="fa-solid fa-circle-question me-2"></i>
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="mobile-nav">
                    <div class="container-mobile mb-2">
                    <div class="mobile-group">
                        <router-link to="/" class="mobile-widget mobile-active">
                            <i class="fa-solid fa-magnifying-glass icon"></i>
                            <span>Recherche</span>
                        </router-link>
                        <router-link to="/reservations_clients" class="mobile-widget">
                          <i class="fa-solid fa-suitcase icon"></i>
                            <span>Réservation</span>
                        </router-link>
                        <router-link to="/ajout_residence" class="mobile-widget plus-btn">
                          <i class="fa-solid fa-circle-plus fa-plus icon"></i>
                            <span>Ajouter</span>
                        </router-link>
                        <router-link to="/favoris_clients" class="mobile-widget">
                          <i class="fa-solid fa-heart icon"></i>
                            <span>Favoris</span>
                        </router-link>
                    <!-- Bouton pour afficher l'ActionSheet -->
                    <router-link to="/dashboard" v-if="users.email.length > 2" class="mobile-widget">
                        <svg class="svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <circle cx="12" cy="9" r="3" stroke="#050a30" stroke-width="2.5"></circle>
                            <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="#050a30" stroke-width="2.5" stroke-linecap="round"></path>
                            <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#050a30" stroke-width="2.5" stroke-linecap="round"></path>
                          </g>
                        </svg>
                        <span v-if="users.nom.length >= 1" style="text-transform: capitalize !important">{{ users.nom }}.</span>
                        <span v-else style="text-transform: capitalize !important">{{ users.email[0] }}{{ users.email[1] }}{{ users.email[2] }}{{ users.email[3] }}{{ users.email[4] }}{{ users.email[5] }}...</span>
                      </router-link>
                    
                    </div>
                    </div>
                </div>

                </div>
            </div>
         
        </div>

        <div v-else>
            <!-- =======================
Content START -->
<section class="pt-3">
	<div class="container">
		<div class="row">
            <div class="col-lg-4 col-xl-3">
			<!-- Sidebar START -->
            <SidebarMenu />
			<!-- Sidebar END -->
                </div>
			<!-- Main content START -->
			<div class="col-lg-8 col-xl-9">
				<div class="vstack gap-4">
					<!-- Verified message -->
					<div class="bg-white rounded p-3 menu-account">
						<!-- Progress bar -->
						<div class="overflow-hidden">
							<h6>Complète ton profil</h6>
							<div class="progress progress-sm bg-success bg-opacity-10">
								<div class="progress-bar bg-success aos" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
								<span class="progress-percent-simple h6 fw-light ms-auto">85%</span>
							</div>
						</div>
						<p class="mb-0">Tirez le meilleur parti de votre réservation en ajoutant les détails restants !</p>
						</div>
						<!-- Content -->
						<div class="bg-white-f2ffff rounded p-3 mt-3">
							<ul class="list-inline hstack flex-wrap gap-2 justify-content-between mb-0">
								<li class="list-inline-item h6 fw-normal mb-0"><a href="#"><i class="bi bi-check-circle-fill text-success me-2"></i>E-mail vérifié</a></li>
								<li class="list-inline-item h6 fw-normal mb-0"><a href="#"><i class="bi bi-check-circle-fill text-success me-2"></i>Numéro de mobile vérifié</a></li>
								<li class="list-inline-item h6 fw-normal mb-0"><a href="#" class="text-primary"><i class="bi bi-plus-circle-fill me-2"></i>Informations de base complètes</a></li>
							</ul>
						</div>
					</div>

                    <div class="card menu-account">
                        <div class="card-body">
                            <!-- Counter START -->
                            <div class="row gy-4 d-flex justify-content-between justify-content-center">
                                <!-- Counter item -->
                                    <div class="col-xxl-3 col-xl-4 col-sm-6 bg-white me-0">
                                        <div class="d-flex align-items-center mt-2 mb-2 p-0">
                                            <!-- Icon -->
                                            <div class="icon-xl bg-success rounded-3 text-white">
                                                <i class="bi bi-journals"></i>
                                            </div>
                                            <!-- Content -->
                                            <div class="ms-2">
                                                <h5>56</h5>
                                                <span>Annonces</span>
                                            </div>
                                        </div>
                                    </div>
        
                                <!-- Counter item -->
                                <div class="col-xxl-3 col-xl-4 col-sm-6 bg-white me-0">
                                        <div class="d-flex align-items-center mt-2 mb-2 p-0">
                                            <!-- Icon -->
                                            <div class="icon-xl bg-info rounded-3 text-white">
                                                <i class="bi bi-graph-up-arrow"></i>
                                            </div>
                                            <!-- Content -->
                                            <div class="ms-2">
                                                <h5>$2,55,365</h5>
                                                <span>Revenus</span>
                                            </div>
                                        </div>
                                </div>
        
                                <!-- Counter item -->
                                <div class="col-xxl-3 col-xl-4 col-sm-6 bg-white me-0">
                                        <div class="d-flex align-items-center mt-2 mb-2 p-0">
                                            <!-- Icon -->
                                            <div class="icon-xl bg-warning rounded-3 text-white">
                                                <i class="bi bi-bar-chart-line-fill"></i>
                                            </div>
                                            <!-- Content -->
                                            <div class="ms-2">
                                                <h5>15K</h5>
                                                <span>Visiteurs</span>
                                            </div>
                                        </div>
                                </div>
        
                                <!-- Counter item -->
                                <div class="col-xxl-3 col-xl-4 col-sm-6 bg-white">
                                        <div class="d-flex align-items-center mt-2 mb-2 p-0">
                                            <!-- Icon -->
                                            <div class="icon-xl bg-primary rounded-3 text-white">
                                                <i class="bi bi-star"></i>
                                            </div>
                                            <!-- Content -->
                                            <div class="ms-2">
                                                <h5>12K</h5>
                                                <span>Avis</span>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <!-- Counter END -->
        
                        </div>
                    </div>

					<!-- Personal info START -->
					<div class="card menu-account">
					

						<!-- Card body START -->
						<div class="card-body">
							<!-- Form START -->
							<div class="row gy-4 justify-content-center">
                                <div class="col-xxl-3 col-xl-4 col-sm-6 orders-child-1">
                                    <div class="single-order">
                                        <div class="single-order-flex">
                                            <div class="single-order-contents">
                                                <span  class="single-order-contents-subtitle ">Réservation en attente</span>
                                                <h2 class="single-order-contents-title">02</h2>
                                            </div>
                                            <div class="single-order-icon">
                                                <i class="las fa-solid fa-clock-rotate-left"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-xl-4 col-sm-6 orders-child-2">
                                    <div class="single-order">
                                        <div class="single-order-flex">
                                            <div class="single-order-contents">
                                                <span  class="single-order-contents-subtitle ">Réservation acceptée</span>
                                                <h2 class="single-order-contents-title">32</h2>
                                            </div>
                                            <div class="single-order-icon">
                                                <i class="las fa-regular fa-circle-check"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-xl-4 col-sm-6 orders-child-3">
                                    <div class="single-order">
                                        <div class="single-order-flex">
                                            <div class="single-order-contents">
                                                <span  class="single-order-contents-subtitle ">Réservation annulée</span>
                                                <h2 class="single-order-contents-title">08</h2>
                                            </div>
                                            <div class="single-order-icon">
                                                <i class="las fa-regular fa-circle-xmark"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-xl-4 col-sm-6 orders-child-4">
                                    <div class="single-order">
                                        <div class="single-order-flex">
                                            <div class="single-order-contents">
                                                <span  class="single-order-contents-subtitle ">Réservation terminée</span>
                                                <h2 class="single-order-contents-title">38</h2>
                                            </div>
                                            <div class="single-order-icon">
                                                <i class="las bi bi-clipboard-check"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         
							<!-- Form END -->
						</div>
						<!-- Card body END -->
					</div>
					<!-- Personal info END -->
                   
				</div>
			</div>
			<!-- Main content END -->
		</div>
	</div>
</section>
<!-- =======================
Content END -->

        </div>
    </div>
  </template>
  
  <script>
  import { isMobile } from 'mobile-device-detect';
  import Navbar from '@/components/Navbar.vue';
  import SidebarMenu from '@/components/dashboard/SidebarMenu.vue';
  import { encryptData } from '@/cryptoUtils';
  export default {
    name: 'HomeView',
    components: {
        SidebarMenu,
        Navbar,
  },
  computed: {
    users() {
      return this.$store.state.users;
        },
    bugReload() {
      return this.$store.state.bugConnexion;
        }
      },
    data() {
      return {
        datas: [],
        datasStat: null,
        dataEncours: 0,
        dataValides: 0,
        dataAnnules: 0,
        dataVisite: 0,
        isMobile: isMobile,
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
            email: '',
            prenom: '',
            contact: '',
            pays: '',
            role: '',
            genre: '',
            adresse: ''
        }
      }
    },
    methods: {
      sendDataToServer() {
        this.form.email = encryptData(this.email);
        this.$vs.loading();

        // Envoyer la requête au serveur
        this.$axios.post('/profile_agent.php', this.form)
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

      reloadForBug() {
        if(this.$store.state.bugConnexion == false) {
            this.$store.commit('BugCorrige', true);
            window.location.reload();
        }
        
      },

      sendPhotoToServer() {
        this.profilePhoto = {
            photo : this.photo,
            email : encryptData(this.email)
        }

        this.$vs.loading();

        // Envoyer la requête au serveur
        this.$axios.post('/profile_photo.php', this.profilePhoto)
          .then(response => {
            // Traitement de la réponse du serveur
            this.verif(response);
            this.$vs.loading.close();
            this.verif(response);
          })
          .catch(error => {
            // Gestion des erreurs
            console.error(error);
            this.$vs.loading.close()
          });
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
          },
       
       getReservations() {
        if(this.users.role == 'Agent') {
            const user = encryptData(this.users.id);
            this.$axios.get('/dashboard_reservation_agent_stat.php?user=' + user)
            .then(response => {
              // Traitement de la réponse du serveur
              this.datasStat = response.data;
              this.dataEncours = this.datasStat.encours;
              this.dataValides = this.datasStat.valide;
              this.dataAnnules = this.datasStat.annule;
              this.dataVisite = this.datasStat.visite;
              this.$vs.loading.close();
            })
            .catch(error => {
              // Gestion des erreurs
              console.error(error);
              this.$vs.loading.close();
            });

        } else if(this.users.role == 'Admin') {
            this.$axios.get('/dashboard_reservation_agent_admin.php')
            .then(response => {
              // Traitement de la réponse du serveur
              this.datasStat = response.data;
              this.dataEncours = this.datasStat.encours;
              this.dataValides = this.datasStat.valide;
              this.dataAnnules = this.datasStat.annule;
              this.dataVisite = this.datasStat.visite;
              console.log(this.dataEncours)
              this.$vs.loading.close();
            })
            .catch(error => {
              // Gestion des erreurs
              console.error(error);
              this.$vs.loading.close();
            });
        }
          
        },
   
    },
    mounted() {
      this.reloadForBug();
      this.getReservations();
    },
  }
  </script>
   <style>
  .single-order-contents-title2 {
    font-size: 36px !important;
    font-weight: 600 !important;
    line-height: 42px !important;
    color: #fff !important;
    margin-top: 20px !important;
}
</style>