<template>
    <div class="home">
        <div v-if="isMobile" class=" bg-white">
            <Mobile />
            <!-- ======================= Main content END -->
        </div>

        <div v-else>
	<!-- ======================= Page Banner START -->
            <Web />
    <!-- ======================= Main content END -->
        </div>  
  
    </div>
  </template>
   <style>
   .invisible {
   display: none;
   };
   button[disabled] {
  opacity: 0.5;
}
</style>
  <script>
  import Mobile from '@/components/dashboard/Ajout_residence_m.vue';
  import Web from '@/components/dashboard/Ajout_residence_w.vue';
  import { isMobile } from 'mobile-device-detect';
  import Dropzone from "dropzone";
  import Stepper from "bs-stepper"; 
  import Choices from 'choices.js';
  import flatpickr from 'flatpickr';
  import '@/assets/vendor/dropzone/css/dropzone.css'
  import { encryptData } from '@/cryptoUtils';
  export default {
    name: 'HomeView',
    components: {
        Mobile,
        Web // Enregistrez le composant VueB pour pouvoir l'utiliser dans l'application
    },
    computed: {
        users() {
      return this.$store.state.users;
        },
        biens() {
      return this.$store.state.biens;
        }
      },
    data() {
      return {
        isMobile: isMobile,
        isWhatsApp: null,
        erreurLibelle: false,
        erreurNom: false,
        erreurContact: false,
        erreurAdresse: false,
        erreurVille: false,
        erreurTarif: false,
        erreurImage: false,
        datas: [],
        datasBiens: [],
        startTime: '',
        chargeFichier1 : 0,
        chargeFichier2 : 0,
        chargeFichier3 : 0,
        chargeFichier4 : 0,
        petit_dej: false,
        langue: false,
        endTime: '',
        reductionjour: 0,
        journee: 0,
        active: 0,
        stepper: null,
        eqpm_parking: 'Non',
        data_r: {
        libelle: '',
        type_item: '',
        nm_prop_item: '',
        pren_prop_item: '',
        cnt_prop_item: '',
        eml_prop_item: '',
        adresse_item: '',
        ville_item: '',
        commune_item: '',
        quartier_item: '',
        zone_item: '',
        contact_item: '',
        apt_item: '',
        nb_apt_item: '',
        nb_chb_item: '1',
        nb_sal_item: '0',
        nb_sb_item: '1',
        tarif_jour: '',
        tarif_journee: '',
        tarif_nuit: '',
        nb_jour_reduction: '',
        tarif_jour_reduction: '',
        description: '',
        eqpm_parking: 0,
        eqpm_petit_dej: 0,
        eqpm_langue1: 'Langue 1',
        eqpm_langue2: 'Langue 2',
        eqpm_langue3: 'Langue 3',
        eqpm_evenement: 0,
        event_anniversaire: 0,
        event_mariage: 0,
        event_bapteme: 0,
        event_tournage: 0,
        event_festivite: 0,
        eqpm_climatisation: 0,
        eqpm_piscine_pb: 0,
        eqpm_piscine_pv: 0,
        eqpm_seche_linge: 0,
        eqpm_armoire: 0,
        eqpm_moquette: 0,
        eqpm_dressing: 0,
        eqpm_ventilateur: 0,
        eqpm_chauffage: 0,
        eqpm_fer_repasse: 0,
        eqpm_mt_repasse: 0,
        eqpm_moustiquaire: 0,
        eqpm_canape_chambre: 0,
        eqpm_balcon: 0,
        eqpm_lave_linge: 0,
        eqpm_bureau: 0,
        eqpm_bar: 0,
        eqpm_baignoire: 0,
        eqpm_peignoire: 0,
        eqpm_jacuzzi: 0,
        eqpm_sauna: 0,
        eqpm_seche_cheveu: 0,
        eqpm_papier_toilette: 0,
        eqpm_ordinateur: 0,
        eqpm_lecteur_dvd: 0,
        eqpm_telephone: 0,
        eqpm_internet: 0,
        eqpm_fax: 0,
        eqpm_chaine_sat: 0,
        eqpm_tv: 0,
        eqpm_table_mange: 0,
        eqpm_ustensile: 0,
        eqpm_machine_cafe: 0,
        eqpm_barbecue: 0,
        eqpm_four: 0,
        eqpm_lave_vaiselle: 0,
        eqpm_micro_ondes: 0,
        eqpm_kitchenette: 0,
        eqpm_bouilloir_electrique: 0,
        eqpm_refrigerateur: 0,
        eqpm_vue_ville: 0,
        eqpm_vue_piscine: 0,
        eqpm_vue_riviere: 0,
        eqpm_vue_mer: 0,
        eqpm_jardin: 0,
        eqpm_terasse: 0,
        eqpm_vue_lac: 0,
        eqpm_jeux_puzzles: 0,
        eqpm_livres: 0,
        agent_securite: 0,
        video_surveillance: 0,
        capteur_presence: 0,
        antivol: 0,
        barbele: 0,
        localisation_longitude: '',
        localisation_latitude: '',
        image1: 'http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1708450283/2024120173149422.jpg',
        image2: 'http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1708450290/2024120173175629.jpg',
        image3: 'http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1708450296/2024120173195235.jpg',
        image4: 'http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1708450305/2024120173196943.jpg',
        user: '',
        date_item: '',
        autorisation: '',
        statut: '',
        autoriseur: '',
        chb_1_nb_lit: '',
        chb_1_lit: '',
        chb_1_nb_personne: '',
        chb_2_nb_lit: '',
        chb_2_lit: '',
        chb_2_nb_personne: '',
        chb_3_nb_lit: '',
        chb_3_lit: '',
        chb_3_nb_personne: '',
        chb_4_nb_lit: '',
        chb_4_lit: '',
        chb_4_nb_personne: '',
        chb_5_nb_lit: '',
        chb_5_lit: '',
        chb_5_nb_personne: '',
        horaire_jour_entre: '',
        horaire_jour_sorti: '',
        tarif_parking: 0,
        peti_dej_1: '',
        peti_dej_2: '',
        peti_dej_3: '',
    }
      }
    },
    created() {
    // Mettre à jour numRooms avec la valeur de this.biens.nb_chb_item si disponible
    if (this.data_r && this.biens.nb_chb_item) {
      this.numRooms = parseInt(this.biens.nb_chb_item);
    }
  },
    methods: {
        Back() {
                this.$router.back()
            },
    showNonWhatsAppField() {
      this.isWhatsApp = true;
    },
    showWhatsAppField() {
      this.isWhatsApp = false;
    },

        sakone() {
            alert('aa');
        },

      next() {
        if(this.active === 0) {
            if(this.biens.libelle.length < 5) {
            this.erreurLibelle = true;
            } else {
                this.erreurLibelle = false;
            }
            if(this.biens.nm_prop_item < 3) {
                this.erreurNom = true;
            }else {
                this.erreurNom = false;
            }
            if(this.biens.cnt_prop_item.length < 10) {
                this.erreurContact = true;
            }else {
                this.erreurContact = false;
            }
            if(this.biens.adresse_item.length < 5) {
                this.erreurAdresse = true;
            }else {
                this.erreurAdresse = false;
            }
            if(this.biens.ville_item.length < 5) {
                this.erreurVille = true;
            }else {
                this.erreurVille = false;
            }
            if(!this.erreurLibelle && !this.erreurNom && !this.erreurContact && !this.erreurAdresse && !this.erreurVille) {
                if (this.active++ > 2) this.active = 0;
                this.$store.commit('BiensAjout', this.biens);
                this.scrollToTop();
                this.$store.commit('ActiveForm', this.active);
            } else {
                this.$message({
                    message: 'Veuillez renseiller tous les champs',
                    type: 'error'
                    });
                this.scrollToTop();
            }
        }
        
        else if(this.active === 1) {

            if(this.biens.tarif_jour.length < 4) {
                this.erreurTarif = true;
                this.$store.commit('BiensAjout', this.biens);

                this.$message({
                    message: 'Veuillez renseiller tous les champs',
                    type: 'error'
                    });
                this.scrollToTop();
            } else {
                this.$store.commit('BiensAjout', this.biens);
                this.erreurTarif = false;
                if (this.active++ > 2) this.active = 0;
                this.scrollToTop();
            }
        }

        else if(this.active === 2) {
            this.$store.commit('BiensAjout', this.biens);
            if (this.active++ > 2) this.active = 0;
            this.scrollToTop();
        }

        else if(this.active === 3) {
            if(this.biens.image1 === 'http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1708450283/2024120173149422.jpg' || this.biens.image2 === 'http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1708450290/2024120173175629.jpg' || this.biens.image3 === 'http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1708450296/2024120173195235.jpg' || this.biens.image4 === 'http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1708450305/2024120173196943.jpg') {
                this.erreurImage = true;
                this.$store.commit('BiensAjout', this.biens);
                this.$message({
                    message: 'Veuillez ajouter les quartres images',
                    type: 'error'
                    });
                this.scrollToTop();
            } else {
                this.$store.commit('BiensAjout', this.biens);
                this.erreurImage = false;
                if (this.active++ > 2) this.active = 0;
                this.scrollToTop();
            }
        }
        
      },

      prec() {
        this.active--;
        this.$store.commit('BiensAjout', this.biens);
      },

      scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Permet un défilement fluide
        });
        },

      VideChamp() {
        this.$store.commit('BiensAjout', this.data_r);
      },

      uploadImage(e, a) {
        console.log('choix');

            if(a === 'a') {
              this.chargeFichier1 = 1;
            }
            if(a === 'b') {
              this.chargeFichier2 = 1;
            }
            if(a === 'c') {
              this.chargeFichier3 = 1;
            }
            if(a === 'd') {
              this.chargeFichier4 = 1;
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
                  this.chargeFichier1 = 2;
                  this.biens.image1 = res.data.url;
                }
                if(a === 'b') {
                  this.chargeFichier2 = 2;
                  this.biens.image2 = res.data.url;
                }
                if(a === 'c') {
                  this.chargeFichier3 = 2;
                  this.biens.image3 = res.data.url;
                  //this.sendPhotoToServer();
                }
                if(a === 'd') {
                  this.chargeFichier4 = 2;
                  this.biens.image4 = res.data.url;
                  //this.sendPhotoToServer();
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
      },

      getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition);
            } else {
                console.log("La géolocalisation n'est pas prise en charge par ce navigateur.");
            }
        },
        showPosition(position) {
            this.biens.localisation_latitude = position.coords.latitude;
            this.biens.localisation_longitude = position.coords.longitude;
        },

    submitForm() {
        if(this.active === 3) {
            if(this.biens.image1 === 'http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1708450283/2024120173149422.jpg' || this.biens.image2 === 'http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1708450290/2024120173175629.jpg' || this.biens.image3 === 'http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1708450296/2024120173195235.jpg' || this.biens.image4 === 'http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1708450305/2024120173196943.jpg') {
                this.erreurImage = true;
                this.$vs.notify({title:'Image Manquant',text:'Ajoutez les quatres (4) Images',color:'danger',position:'top-center'})
                this.scrollToTop();
            } else {
                this.erreurImage = false;
                
                this.$vs.loading();

                // Envoyer la requête au serveur
                this.biens.user = this.users.id;
                this.$axios.post('/biens.php', this.biens)
                .then(response => {
                // Traitement de la réponse du serveur
                console.log(response);
                this.$vs.loading.close();
                this.$vs.notify({title:'Succès',text:'Ajouté avec Succès',color:'danger',position:'top-center'})
                this.$router.push({ path: '/biens' });
                })
                .catch(error => {
                // Gestion des erreurs
                console.error(error);
                this.$vs.loading.close()
                });
                }
            }
        
        },

    routeVerif() {
        if(this.users.id.length < 1) {
            this.$router.push({ path: '/login' });
            }
        }

    },
    mounted() {
      this.routeVerif();
      new Dropzone(".dropzone-custom", {
            maxFiles: 5,
            addRemoveLinks: false,
            // Autres options Dropzone...
        });
        this.stepper = new Stepper(document.querySelector('.bs-stepper'));

    // Exemple d'utilisation de flatpickr
    flatpickr(this.$refs.myDatePicker, {
      // Options de configuration ici
    });
    const select = new Choices(this.$refs.mySelect, {
      // Options de configuration ici
      
    });
    console.log(select);
  }
}
  </script>
  
