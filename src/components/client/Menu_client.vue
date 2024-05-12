<template>
    <div class="home">
  <!-- ======================= -->
      <div class="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasSidebar" >
        <!-- Offcanvas header -->
        <div class="offcanvas-header justify-content-end pb-2">
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar" aria-label="Close"></button>
        </div>

        <!-- Offcanvas body -->
        <div class="offcanvas-body p-3 p-lg-0">
          <div class="card bg-light w-100">

            <!-- Edit profile button -->
            <div class="position-absolute top-0 end-0 p-3">
              <a href="#" class="text-primary-hover" data-bs-toggle="tooltip" data-bs-title="Edit profile">
                <i class="bi bi-pencil-square"></i>
              </a>
            </div>

            <!-- Card body START -->
            <div class="card-body p-3">
              <!-- Avatar and content -->
              <div class="text-center mb-3">
                <!-- Avatar -->
                <div class="avatar avatar-xl mb-2">
                  <img class="avatar-img rounded-circle border border-2 border-white" :src="users.photo" alt="">
                </div>
                <h6 class="mb-0"><span v-if="users.nom.length > 1">{{users.nom}} {{users.prenom}}</span></h6>
                <a href="#" class="text-reset text-primary-hover small"><span>{{users.email}}</span></a>
                <hr>
              </div>

              <!-- Sidebar menu item START -->
              <ul class="nav nav-pills-primary-soft flex-column">
                <li class="nav-item">
                  <router-link class="nav-link" to="/dashboard_client"><i class="bi bi-person fa-fw me-2"></i>Mon profil</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/reservations_clients"><i class="bi bi-ticket-perforated fa-fw me-2"></i>Mes Réservations</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/favoris_clients"><i class="bi bi-person fa-fw me-2"></i>Mes Favoris</router-link>
                </li>
                <li class="nav-item">
                  <a style="cursor: pointer;" class="nav-link text-danger bg-danger-soft-hover" @click="deconnexion()"><i class="fas fa-sign-out-alt fa-fw me-2"></i>Se déconnecter</a>
                </li>
              </ul>
              <!-- Sidebar menu item END -->
            </div>
            <!-- Card body END -->
          </div>
        </div>
      </div>	
  
    </div>
  </template>
  
  <script>
  
  import { encryptData } from '@/cryptoUtils';
  export default {
    name: 'HomeView',
    computed: {
    users() {
      return this.$store.state.users;
        }
      },
    data() {
      return {
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
            adresse: '',
            email: '',
            photo: '',
            statut: '',
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

      deconnexion() {
        const renitialise = {
          nom: '',
          prenom: '',
          email: '',
          contact: '',
          adresse: '',
          photo: '',
          role: '',
          statut: '',
          genre: '',
        };
        this.$store.commit('Deconnexion', renitialise);
        this.$router.push({ path: '/login_client' });
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
      this.test();
    },
  }
  </script>
  