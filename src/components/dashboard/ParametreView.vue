<template>
    <div>
        <div v-if="isMobile">
            <div>
                <div class="d-flex align-items-center dash-header mt-2 border-bottom bg-white">
                    <span class="edit-icon  ms-3 my-2" @click="Back">
                        <i class="fa-solid fa-arrow-left text-black"></i>
                    </span>
                    <span style="flex: auto" class="">
                        <h6 style="font-size: 16px"  class="mb-0 text-center">Mes paramètres</h6>
                    </span>
                    <span class="me-3">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </span>
                </div>
                <div class="mb-4">
                    <div class="bg-white py-1 ">
                        <h6 class="mx-3 mt-3 mb-3" style="font-size: 14px; color: grey">Paramètres de notification</h6>
                        <div class="mx-3">
                            <span class="d-flex justify-content-between mb-3 align-items-center mt-2">
                                <p class="fw-normal fs-6 mb-0">Je souhaite recevoir les offres par email</p>
                                <vs-switch v-model="email_recept"/>
                            </span>

                            <span class="d-flex justify-content-between mb-3 align-items-center mt-2">
                                <p class="fw-normal fs-6 mb-0">Me prévenir par email lors de ma connexion</p>
                                <vs-switch />
                            </span>
                        </div>
                        <vs-divider/>
                        <h6 class="mx-3 mt-3 mb-3" style="font-size: 14px; color: grey">Paramètres de sécurité</h6>
                        <div class="mx-3">
                            <router-link to="/profile_agent" class="d-flex justify-content-between mb-3 align-items-center">
                                <p class="fw-normal fs-6 mb-0">Editer mon profil</p>
                            </router-link>
                            <router-link to="/verify_number" class="d-flex justify-content-between mb-3 align-items-center">
                                <p class="fw-normal fs-6 mb-0">Vérifier mon numéro de téléphone</p>
                            </router-link>
                            <router-link to="/mot_de_passe_oublie" class="d-flex justify-content-between mb-3 align-items-center">
                                <p class="fw-normal fs-6 mb-0">Réinitialiser mon mot de passe</p>
                            </router-link>
                        
                        </div>
                        <vs-divider/>
                        <div class="mx-3">
                            <span @click="deconnexion()">
                                <p class="text-danger"><i class="fa-solid fa-right-from-bracket me-2"></i>Se déconnecter</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
        
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
                        <div class="vstack gap-4">
					<!-- Notifications START -->
					<div class="card menu-account">
						<!-- Card header -->
						<div class="card-header border-bottom">
							<h4 class="card-header-title">Paramètres de notification</h4>
						</div>

						<!-- Form START -->
						<form class="card-body">
                            <!-- Switch -->
							<div class="form-check form-switch form-check-md d-flex justify-content-between mb-4">
								<label class="form-check-label ps-0 pe-4" for="checkPrivacy2">Je souhaite recevoir les offres promotionnelles par e-mails</label>
                                <vs-switch v-model="email_recept"/>
							</div>

							<!-- Switch -->
							<div class="form-check form-switch form-check-md d-flex justify-content-between mb-4">
								<label class="form-check-label ps-0 pe-4" for="checkPrivacy1">Me prévenir par email lors de ma connexion</label>
								<input class="form-check-input flex-shrink-0" type="checkbox" id="checkPrivacy1" checked>
							</div>

							
						</form>
						<!-- Form END -->
					</div>
					<!-- Notifications END -->

					<!-- Security settings START -->
					<div class="card menu-account">
						<!-- Card header -->
						<div class="card-header border-bottom">
							<h4 class="card-header-title">Paramètres de sécurité</h4>
						</div>

						<!-- Card body START -->
						<div class="card-body">

                            <div class="mb-3">
								<h6>Souhaitez-vous changer votre mot de passe?</h6>
								<label class="form-label">Saisissez l'adresse e-mail associée à votre compte.</label>
								<input inputmode="email" class="form-control mb-2" placeholder="L'adresse e-mail associée à votre compte">
								<button class="btn btn-sm btn-primary">Envoyer le code de réinitialisation</button>
                            </div>

                            <hr>
							<!-- Two factor -->
							<div class="mb-3">
								<h6>Vérification du numéro de téléphone</h6>
								<label class="form-label">Ajoutez un numéro de téléphone pour vérifier votre numéro de téléphone</label>
								<input inputmode="numeric" class="form-control mb-2" placeholder="Entrez votre numéro de téléphone">
								<button class="btn btn-sm btn-primary">Envoyer le code</button>
                            </div>
                            <hr>
							<!-- Active sessions -->
								<h6>Sessions actives</h6>
								<p class="mb-2">En cliquant sur « Se déconnecter », vous fermerez la session et serez ramené à la page d'accueil.</p>
								<button @click="deconnexion()" class="btn btn-sm btn-danger mb-0"><i class="fas fa-sign-out-alt fa-fw me-2"></i>Se déconnecter</button>
                         
						</div>
						<!-- Card body END -->
					</div>
					<!-- Security settings END -->
				</div>

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
        name: 'CodeParrainage',
            computed: {
        users() {
        return this.$store.state.users;
            }
        },
        components: {
            SidebarMenu,
        },
        data() {
            return {
                isMobile: isMobile,
                email_recept : false,
                form: {
                    email_recept : 'oui',
                    email : '',
                },
                user: {
                nom: '',
                prenom: '',
                email: '',
                contact: '',
                adresse: '',
                photo: '',
                pays: '',
                role: '',
                statut: '',
                genre: '',
                email_recept: null,
                id: null,
                },
            }
        },
        mounted() {
        //this.showEmail()
        },
        watch: {
            email_recept(newVal, oldVal) {
            console.log('Nouvelle valeur de email_recept :', newVal);
            console.log('Ancienne valeur de email_recept :', oldVal);
            this.sendDataToServer();
            }
        },
        methods: {
            Back() {
                this.$router.back()
            },
            showEmail() {
                if(this.users.email_recept == 'oui') {
                    this.email_recept = true;
                } else {
                    this.email_recept = false;
                }
            },

            deconnexion() {
                this.$vs.loading(); // Afficher le loading

                // Déclencher la déconnexion avec un délai de 2 secondes
                setTimeout(() => {
                    this.$store.commit('ConnexionAgent', this.user);
                    this.$vs.loading.close(); // Fermer le loading
                    this.$router.push({ path: '/' }); // Rediriger après le délai
                }, 2000); // Délai de 2000 ms (2 secondes)
                },

            sendDataToServer() {
                if(this.email_recept == true) {
                    this.form.email_recept = 'oui';
                } else {
                    this.form.email_recept = 'non';
                }

                this.form.email = encryptData(this.users.email);
                this.$vs.loading();

                // Envoyer la requête au serveur
                this.$axios.post('/profile_agent_email.php', this.form)
                .then(response => {
                    // Traitement de la réponse du serveur
                    this.$store.commit('ConnexionAgent', response.data.data);
                    console.log(response.data.data);
                    this.$vs.loading.close()
                })
                .catch(error => {
                    // Gestion des erreurs
                    console.error(error);
                    this.$vs.loading.close()
                });
            },
        
        }
    }
</script>