<template>
    <div class="home">
  <!-- ======================= -->
        

        <div v-if="isMobile">
          <el-button-group>
            <router-link class="nav-item" to="/dashboard"><el-button type="primary">Home</el-button></router-link>
            <router-link class="nav-item" to="/biens"><el-button type="primary">Biens</el-button></router-link>
            <router-link class="nav-item" to="/reservations_agent"><el-button type="primary">Réservations</el-button></router-link>
          </el-button-group>
        </div>

        <div v-else>
          <div class="offcanvas-body p-3 p-xl-0">
            <!-- Nav item -->
            <div class="navbar navbar-expand-xl">
              <ul class="navbar-nav navbar-offcanvas-menu">
  
                <router-link class="nav-item" to="/dashboard"> <a class="nav-link" href="agent-dashboard.html"><i class="bi bi-house-door fa-fw me-1"></i>Dashboard</a>	</router-link>
  
                <router-link class="nav-item" to="/biens"> <a class="nav-link" href="agent-listings.html"><i class="bi bi-journals fa-fw me-1"></i>Biens</a> </router-link>
  
                <router-link class="nav-item" to="/reservations_agent"> <a class="nav-link" href="agent-bookings.html"><i class="bi bi-bookmark-heart fa-fw me-1"></i>Réservations</a> </router-link>
                
                <router-link class="nav-item" to="/profile_agent"> <a class="nav-link" href="agent-settings.html"><i class="bi bi-gear fa-fw me-1"></i>Paramètre</a></router-link>
  
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="dropdoanMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="bi bi-list-ul fa-fw me-1"></i>Dropdown
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="dropdoanMenu">
                    <!-- Dropdown menu -->
                    <li> <a class="dropdown-item" href="#">Item 1</a></li>
                    <li> <a class="dropdown-item" href="#">Item 2</a></li>
                  </ul>
                </li>		
              </ul>
            </div>
          </div>
        </div>
				
  
    </div>
  </template>
  
  <script>
  import { isMobile } from 'mobile-device-detect';
  import { encryptData } from '@/cryptoUtils';
  export default {
    name: 'HomeView',
    data() {
      return {
        datas: [],
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
            prenom: '',
            contact: '',
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
  