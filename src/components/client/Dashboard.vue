<template>
    <div class="home">
  <!-- =======================
  Main banner START -->
      <section class="pt-3">
        <div class="container">
        <div class="row">

          <!-- Sidebar START -->
          <div class="col-lg-4 col-xl-3">
            <!-- Responsive offcanvas body START -->
            <Menu />
            <!-- Responsive offcanvas body END -->	
          </div>
          <!-- Sidebar END -->

          <!-- Main content START -->
          <div class="col-lg-8 col-xl-9">

            <!-- Offcanvas menu button -->
            <div class="d-grid mb-0 d-lg-none w-100">
              <button class="btn btn-primary mb-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
                <i class="fas fa-sliders-h"></i> 
              </button>
            </div>

            <div class="vstack gap-4">
              <!-- Verified message -->
              <div v-if="users.nom.length >=1 && users.prenom.length >=1 && users.contact.length >=1 && users.role.length >=1"></div>
              <div class="bg-light rounded p-3" v-else>
                <!-- Progress bar -->
                <div class="overflow-hidden" >
                  <h6>Complétez votre profil</h6>
                  <div class="progress progress-sm bg-success bg-opacity-10">
                    <div v-if="users.nom.length ==0 && users.prenom.length ==0 && users.contact.length ==0 && users.role.length ==0" class="progress-bar bg-success aos" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                      <div v-if="users.nom.length >=1 && users.prenom.length >=1 && users.contact.length >=0 && users.role.length ==0" class="progress-bar bg-success aos" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                        <div v-if="users.nom.length >=1 && users.prenom.length >=1 && users.contact.length >=1 && users.role.length >=1" class="progress-bar bg-success aos" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style="width: 50%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                          </div>
                        </div>
                      </div>
                    <span v-if="users.nom.length ==0 && users.prenom.length ==0 && users.contact.length ==0 && users.role.length ==0" class="progress-percent-simple h6 fw-light ms-auto">50%</span>
                    <span v-if="users.nom.length >=1 && users.prenom.length >=1 && users.contact.length >=0 && users.role.length ==0" class="progress-percent-simple h6 fw-light ms-auto">70%</span>
                    <span v-if="users.nom.length >=1 && users.prenom.length >=1 && users.contact.length >=1 && users.role.length >=1" class="progress-percent-simple h6 fw-light ms-auto">100%</span>
                  </div>
                </div>
                <p class="mb-0">Tirez le meilleur parti de votre résidence en ajoutant les détails restants !</p>
                </div>
                <!-- Content -->
                <div class="bg-body rounded p-3 mt-3">
                  <ul class="list-inline hstack flex-wrap gap-2 justify-content-between mb-0">
                    <li class="list-inline-item h6 fw-normal mb-0"><a href="#"><i class="bi bi-check-circle-fill text-success me-2"></i>Email vérifié</a></li>
                    <li class="list-inline-item h6 fw-normal mb-0"><a href="#" class="text-primary"><i class="bi bi-plus-circle-fill me-2"></i>Complétez les informations de base</a></li>
                  </ul>
                </div>
              </div>

              <!-- Personal info START -->
              <div class="card border">
                <!-- Card header -->
                <div class="card-header border-bottom">
                  <h4 class="card-header-title">Informations personnelles</h4>
                </div>

                <!-- Card body START -->
                <div class="card-body">
                  <!-- Form START -->
                  <form class="row g-3">
                    <!-- Profile photo -->
                    <div class="col-12">
                      <label class="form-label">Téléchargez votre photo de profil<span class="text-danger">*</span></label>
                      <div class="d-flex align-items-center">
                        <label class="position-relative me-4" for="uploadfile-1" title="Replace this pic">
                          <!-- Avatar place holder -->
                          <span class="avatar avatar-xl">
                            <img id="uploadfile-1-preview" class="avatar-img rounded-circle border border-white border-3 shadow" :src="users.photo" alt="">
                          </span>
                        </label>
                        <!-- Upload button -->
                        <label class="btn btn-sm btn-primary-soft mb-0" for="uploadfile-1">Change</label>
                                            <vs-progress indeterminate color="primary" v-show="chargeFichier3 == 1">primary</vs-progress>
                        <input id="uploadfile-1" class="form-control d-none" @change="uploadImage($event, 'c')" type="file">
                      </div>
                    </div>

                    <!-- Name -->
                    <div class="col-md-6">
                      <label class="form-label">Nom<span class="text-danger">*</span></label>
                      <el-input placeholder="Votre nom" v-model="users.nom"></el-input>
                    </div>

                                    <div class="col-md-6">
                      <label class="form-label">Prenom<span class="text-danger">*</span></label>
                      <el-input placeholder="Votre prenom" v-model="users.prenom"></el-input>
                    </div>

                    <!-- Email -->
                    <div class="col-md-6">
                      <label class="form-label">Adresse e-mail<span class="text-danger">*</span></label>
                      <el-input placeholder="Votre adresse e-mail" :value="users.email" disabled></el-input>
                    </div>

                    <!-- Mobile -->
                    <div class="col-md-6">
                      <label class="form-label">Numéro de téléphone portable<span class="text-danger">*</span></label>
                      <el-input placeholder="Votre contact mobile" v-model="users.contact"></el-input>
                    </div>

                    <!-- Nationality -->
                    <div class="col-md-6">
                      <label class="form-label">Nationalité<span class="text-danger">*</span></label>
                                        <el-select v-model="users.role" placeholder="Selectionnez votre nationalité" style="width: 100%">
                                            <el-option
                                              v-for="item in options"
                                              :key="item.value"
                                              :label="item.label"
                                              :value="item.value">
                                            </el-option>
                                          </el-select>
                    </div>

                    <!-- Date of birth -->
                  

                    <!-- Gender -->
                    <div class="col-md-6">
                      <label class="form-label">Sélectionnez le sexe<span class="text-danger">*</span></label>
                      <div class="d-flex gap-4">
                        <el-radio-group v-model="users.genre">
                                                <el-radio :label="1">Homme</el-radio>
                                                <el-radio :label="2">Femme</el-radio>
                                                <el-radio :label="3">Autre</el-radio>
                                              </el-radio-group>
                      </div>
                    </div>

                    <!-- Address -->
                    <div class="col-12">
                      <label class="form-label">Adresse</label>
                      <textarea v-model="users.adresse" class="form-control" rows="3" spellcheck="false">2119 N Division Ave, New Hampshire, York, United States</textarea>
                    </div>

                    <!-- Button -->
                    <div class="col-12 text-end">
                      <p @click="sendDataToServer()" class="btn btn-primary mb-0">Sauvegarder les modifications</p>
                    </div>
                                    <vs-button @click="randomCenter()" color="success" type="gradient">Position Top Center Random Color</vs-button>
                  </form>
                  <!-- Form END -->
                </div>
                <!-- Card body END -->
              </div>
              <!-- Personal info END -->

            </div>
          </div>
          <!-- Main content END -->

        </div>
      </section>
  
    </div>
  </template>
  
  <script>
  import Menu from '@/components/client/Menu_client.vue';
  import { encryptData } from '@/cryptoUtils';
  export default {
    name: 'HomeView',
	components: {
    Menu,
  },
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
          value: 'Afghane (Afghanistan)',
          label: 'Afghane (Afghanistan)'
        }, {
          value: 'Albanaise (Albanie)',
          label: 'Albanaise (Albanie)'
        }, {
          value: 'Algérienne (Algérie)',
          label: 'Algérienne (Algérie)'
        }
        , {
          value: 'Allemande (Allemagne)',
          label: 'Allemande (Allemagne)'
        }, {
          value: 'Americaine (États-Unis)',
          label: 'Americaine (États-Unis)'
        }
        , {
          value: 'Andorrane (Andorre)',
          label: 'Andorrane (Andorre)'
        }, {
          value: 'Angolaise (Angola)',
          label: 'Angolaise (Angola)'
        }
        , {
          value: 'Antiguaise-et-Barbudienne (Antigua-et-Barbuda)',
          label: 'Antiguaise-et-Barbudienne (Antigua-et-Barbuda)'
        }, {
          value: 'Argentine (Argentine)',
          label: 'Argentine (Argentine)'
        }
        , {
          value: 'Armenienne (Arménie)',
          label: 'Armenienne (Arménie)'
        }, {
          value: 'Australienne (Australie)',
          label: 'Australienne (Australie)'
        }
        , {
          value: 'Autrichienne (Autriche)',
          label: 'Autrichienne (Autriche)'
        }, {
          value: 'Azerbaïdjanaise (Azerbaïdjan)',
          label: 'Azerbaïdjanaise (Azerbaïdjan)'
        }
        , {
          value: 'Bahamienne (Bahamas)',
          label: 'Bahamienne (Bahamas)'
        }, {
          value: 'Bahreinienne (Bahreïn)',
          label: 'Bahreinienne (Bahreïn)'
        }
        , {
          value: 'Bangladaise (Bangladesh)',
          label: 'Bangladaise (Bangladesh)'
        }, {
          value: 'Barbadienne (Barbade)',
          label: 'Barbadienne (Barbade)'
        }
        , {
          value: 'Belge (Belgique)',
          label: 'Belge (Belgique)'
        }, {
          value: 'Belizienne (Belize)',
          label: 'Belizienne (Belize)'
        }
        , {
          value: 'Béninoise (Bénin)',
          label: 'Béninoise (Bénin)'
        }, {
          value: 'Bhoutanaise (Bhoutan)',
          label: 'Bhoutanaise (Bhoutan)'
        }
        , {
          value: 'Biélorusse (Biélorussie)',
          label: 'Biélorusse (Biélorussie)'
        }, {
          value: 'Birmane (Birmanie)',
          label: 'Birmane (Birmanie)'
        }
        , {
          value: 'Bissau-Guinéenne (Guinée-Bissau)',
          label: 'Bissau-Guinéenne (Guinée-Bissau)'
        }, {
          value: 'Bolivienne (Bolivie)',
          label: 'Bolivienne (Bolivie)'
        }
        , {
          value: 'Bosnienne (Bosnie-Herzégovine)',
          label: 'Bosnienne (Bosnie-Herzégovine)'
        }, {
          value: 'Botswanaise (Botswana)',
          label: 'Botswanaise (Botswana)'
        }
        , {
          value: 'Brésilienne (Brésil)',
          label: 'Brésilienne (Brésil)'
        }, {
          value: 'Britannique (Royaume-Uni)',
          label: 'Britannique (Royaume-Uni)'
        }
        , {
          value: 'Brunéienne (Brunéi)',
          label: 'Brunéienne (Brunéi)'
        }, {
          value: 'Bulgare (Bulgarie)',
          label: 'Bulgare (Bulgarie)'
        }
        , {
          value: 'Burkinabée (Burkina)',
          label: 'Burkinabée (Burkina)'
        }, {
          value: 'Burundaise (Burundi)',
          label: 'Burundaise (Burundi)'
        }
        , {
          value: 'Cambodgienne (Cambodge)',
          label: 'Cambodgienne (Cambodge)'
        }, {
          value: 'Camerounaise (Cameroun)',
          label: 'Camerounaise (Cameroun)'
        }
        , {
          value: 'Canadienne (Canada)',
          label: 'Canadienne (Canada)'
        }, {
          value: 'Cap-verdienne (Cap-Vert)',
          label: 'Cap-verdienne (Cap-Vert)'
        }
        , {
          value: 'Centrafricaine (Centrafrique)',
          label: 'Centrafricaine (Centrafrique)'
        }, {
          value: 'Chilienne (Chili)',
          label: 'Chilienne (Chili)'
        }
        , {
          value: 'Chinoise (Chine)',
          label: 'Chinoise (Chine)'
        }, {
          value: 'Chypriote (Chypre)',
          label: 'Chypriote (Chypre)'
        }
        , {
          value: 'Colombienne (Colombie)',
          label: 'Colombienne (Colombie)'
        }, {
          value: 'Comorienne (Comores)',
          label: 'Comorienne (Comores)'
        }
        , {
          value: 'Congolaise (Congo-Brazzaville)',
          label: 'Congolaise (Congo-Brazzaville)'
        }, {
          value: 'Congolaise (Congo-Kinshasa)',
          label: 'Congolaise (Congo-Kinshasa)'
        }
        , {
          value: 'Cookienne (Îles Cook)',
          label: 'Cookienne (Îles Cook)'
        }, {
          value: 'Costaricaine (Costa Rica)',
          label: 'Costaricaine (Costa Rica)'
        }
        , {
          value: 'Croate (Croatie)',
          label: 'Croate (Croatie)'
        }, {
          value: 'Cubaine (Cuba)',
          label: 'Cubaine (Cuba)'
        }
        , {
          value: 'Danoise (Danemark)',
          label: 'Danoise (Danemark)'
        }, {
          value: 'Djiboutienne (Djibouti)',
          label: 'Djiboutienne (Djibouti)'
        }
        , {
          value: 'Dominicaine (République dominicaine)',
          label: 'Dominicaine (République dominicaine)'
        }, {
          value: 'Dominiquaise (Dominique)',
          label: 'Dominiquaise (Dominique)'
        }
      
        , {
          value: 'Égyptienne (Égypte)',
          label: 'Égyptienne (Égypte)'
        }, {
          value: 'Émirienne (Émirats arabes unis)',
          label: 'Émirienne (Émirats arabes unis)'
        }
        , {
          value: 'Équato-guineenne (Guinée équatoriale)',
          label: 'Équato-guineenne (Guinée équatoriale)'
        }, {
          value: 'Équatorienne (Équateur)',
          label: 'Équatorienne (Équateur)'
        }
        , {
          value: 'Érythréenne (Érythrée)',
          label: 'Érythréenne (Érythrée)'
        }, {
          value: 'Espagnole (Espagne)',
          label: 'Espagnole (Espagne)'
        }
        , {
          value: 'Est-timoraise (Timor-Leste)',
          label: 'Est-timoraise (Timor-Leste)'
        }, {
          value: 'Estonienne (Estonie)',
          label: 'Estonienne (Estonie)'
        }
        , {
          value: 'Éthiopienne (Éthiopie)',
          label: 'Éthiopienne (Éthiopie)'
        }, {
          value: 'Fidjienne (Fidji)',
          label: 'Fidjienne (Fidji)'
        }
        , {
          value: 'Finlandaise (Finlande)',
          label: 'Finlandaise (Finlande)'
        }, {
          value: 'Française (France)',
          label: 'Française (France)'
        }
        , {
          value: 'Gabonaise (Gabon)',
          label: 'Gabonaise (Gabon)'
        }, {
          value: 'Gambienne (Gambie)',
          label: 'Gambienne (Gambie)'
        }
        , {
          value: 'Georgienne (Géorgie)',
          label: 'Georgienne (Géorgie)'
        }, {
          value: 'Ghanéenne (Ghana)',
          label: 'Ghanéenne (Ghana)'
        }
        , {
          value: 'Grenadienne (Grenade)',
          label: 'Grenadienne (Grenade)'
        }, {
          value: 'Guatémaltèque (Guatemala)',
          label: 'Guatémaltèque (Guatemala)'
        }
        , {
          value: 'Guinéenne (Guinée)',
          label: 'Guinéenne (Guinée)'
        }, {
          value: 'Guyanienne (Guyana)',
          label: 'Guyanienne (Guyana)'
        }
        , {
          value: 'Haïtienne (Haïti)',
          label: 'Haïtienne (Haïti)'
        }, {
          value: 'Hellénique (Grèce)',
          label: 'Hellénique (Grèce)'
        }
        , {
          value: 'Hondurienne (Honduras)',
          label: 'Hondurienne (Honduras)'
        }, {
          value: 'Hongroise (Hongrie)',
          label: 'Hongroise (Hongrie)'
        }
        , {
          value: 'Indienne (Inde)',
          label: 'Indienne (Inde)'
        }, {
          value: 'Indonésienne (Indonésie)',
          label: 'Indonésienne (Indonésie)'
        }
        , {
          value: 'Irakienne (Iraq)',
          label: 'Irakienne (Iraq)'
        }, {
          value: 'Iranienne (Iran)',
          label: 'Iranienne (Iran)'
        }
        , {
          value: 'Irlandaise (Irlande)',
          label: 'Irlandaise (Irlande)'
        }, {
          value: 'Islandaise (Islande)',
          label: 'Islandaise (Islande)'
        }
        , {
          value: 'Israélienne (Israël)',
          label: 'Israélienne (Israël)'
        }, {
          value: 'Italienne (Italie)',
          label: 'Italienne (Italie)'
        }
        , {
          value: 'Ivoirienne (Côte d\'Ivoire)',
          label: 'Ivoirienne (Côte d\'Ivoire)'
        }, {
          value: 'Jamaïcaine (Jamaïque)',
          label: 'Jamaïcaine (Jamaïque)'
        }
        , {
          value: 'Japonaise (Japon)',
          label: 'Japonaise (Japon)'
        }, {
          value: 'Jordanienne (Jordanie)',
          label: 'Jordanienne (Jordanie)'
        }
        , {
          value: 'Kazakhstanaise (Kazakhstan)',
          label: 'Kazakhstanaise (Kazakhstan)'
        }, {
          value: 'Kenyane (Kenya)',
          label: 'Kenyane (Kenya)'
        }
        , {
          value: 'Kirghize (Kirghizistan)',
          label: 'Kirghize (Kirghizistan)'
        }, {
          value: 'Kiribatienne (Kiribati)',
          label: 'Kiribatienne (Kiribati)'
        }
        , {
          value: 'Kittitienne et Névicienne (Saint-Christophe-et-Niévès)',
          label: 'Kittitienne et Névicienne (Saint-Christophe-et-Niévès)'
        }, {
          value: 'Koweïtienne (Koweït)',
          label: 'Koweïtienne (Koweït)'
        }
        , {
          value: 'Laotienne (Laos)',
          label: 'Laotienne (Laos)'
        }, {
          value: 'Lesothane (Lesotho)',
          label: 'Lesothane (Lesotho)'
        }
        , {
          value: 'Lettone (Lettonie)',
          label: 'Lettone (Lettonie)'
        }, {
          value: 'Libanaise (Liban)',
          label: 'Libanaise (Liban)'
        }
        , {
          value: 'Libérienne (Libéria)',
          label: 'Libérienne (Libéria)'
        }, {
          value: 'Libyenne (Libye)',
          label: 'Libyenne (Libye)'
        }
        , {
          value: 'Liechtensteinoise (Liechtenstein)',
          label: 'Liechtensteinoise (Liechtenstein)'
        }, {
          value: 'Lituanienne (Lituanie)',
          label: 'Lituanienne (Lituanie)'
        }
        , {
          value: 'Luxembourgeoise (Luxembourg)',
          label: 'Luxembourgeoise (Luxembourg)'
        }, {
          value: 'Macédonienne (Macédoine)',
          label: 'Macédonienne (Macédoine)'
        }
        , {
          value: 'Malaisienne (Malaisie)',
          label: 'Malaisienne (Malaisie)'
        }, {
          value: 'Malawienne (Malawi)',
          label: 'Malawienne (Malawi)'
        }
        , {
          value: 'Maldivienne (Maldives)',
          label: 'Maldivienne (Maldives)'
        }, {
          value: 'Malgache (Madagascar)',
          label: 'Malgache (Madagascar)'
        }
        , {
          value: 'Maliennes (Mali)',
          label: 'Maliennes (Mali)'
        }, {
          value: 'Maltaise (Malte)',
          label: 'Maltaise (Malte)'
        }
        , {
          value: 'Marocaine (Maroc)',
          label: 'Marocaine (Maroc)'
        }, {
          value: 'Marshallaise (Îles Marshall)',
          label: 'Marshallaise (Îles Marshall)'
        }
        , {
          value: 'Mauricienne (Maurice)',
          label: 'Mauricienne (Maurice)'
        }, {
          value: 'Mauritanienne (Mauritanie)',
          label: 'Mauritanienne (Mauritanie)'
        }
        , {
          value: 'Mexicaine (Mexique)',
          label: 'Mexicaine (Mexique)'
        }, {
          value: 'Micronésienne (Micronésie)',
          label: 'Micronésienne (Micronésie)'
        }
        , {
          value: 'Moldave (Moldovie)',
          label: 'Moldave (Moldovie)'
        }, {
          value: 'Monegasque (Monaco)',
          label: 'Monegasque (Monaco)'
        }
        , {
          value: 'Mongole (Mongolie)',
          label: 'Mongole (Mongolie)'
        }, {
          value: 'Monténégrine (Monténégro)',
          label: 'Monténégrine (Monténégro)'
        }
        , {
          value: 'Mozambicaine (Mozambique)',
          label: 'Mozambicaine (Mozambique)'
        }, {
          value: 'Namibienne (Namibie)',
          label: 'Namibienne (Namibie)'
        }
        , {
          value: 'Nauruane (Nauru)',
          label: 'Nauruane (Nauru)'
        }, {
          value: 'Néerlandaise (Pays-Bas)',
          label: 'Néerlandaise (Pays-Bas)'
        }
        , {
          value: 'Néo-Zélandaise (Nouvelle-Zélande)',
          label: 'Néo-Zélandaise (Nouvelle-Zélande)'
        }, {
          value: 'Népalaise (Népal)',
          label: 'Népalaise (Népal)'
        }
        , {
          value: 'Nicaraguayenne (Nicaragua)',
          label: 'Nicaraguayenne (Nicaragua)'
        }, {
          value: 'Nigériane (Nigéria)',
          label: 'Nigériane (Nigéria)'
        }
        , {
          value: 'Nigérienne (Niger)',
          label: 'Nigérienne (Niger)'
        }, {
          value: 'Niuéenne (Niue)',
          label: 'Niuéenne (Niue)'
        }
        , {
          value: 'Nord-coréenne (Corée du Nord)',
          label: 'Nord-coréenne (Corée du Nord)'
        }, {
          value: 'Norvégienne (Norvège)',
          label: 'Norvégienne (Norvège)'
        }
        , {
          value: 'Omanaise (Oman)',
          label: 'Omanaise (Oman)'
        }, {
          value: 'Ougandaise (Ouganda)',
          label: 'Ougandaise (Ouganda)'
        }
        , {
          value: 'Ouzbéke (Ouzbékistan)',
          label: 'Ouzbéke (Ouzbékistan)'
        }, {
          value: 'Pakistanaise (Pakistan)',
          label: 'Pakistanaise (Pakistan)'
        }
        , {
          value: 'Palaosienne (Palaos)',
          label: 'Palaosienne (Palaos)'
        }, {
          value: 'Palestinienne (Palestine)',
          label: 'Palestinienne (Palestine)'
        }
        , {
          value: 'Panaméenne (Panama)',
          label: 'Panaméenne (Panama)'
        }, {
          value: 'Papouane-Néo-Guinéenne (Papouasie-Nouvelle-Guinée)',
          label: 'Papouane-Néo-Guinéenne (Papouasie-Nouvelle-Guinée)'
        }
        , {
          value: 'Paraguayenne (Paraguay)',
          label: 'Paraguayenne (Paraguay)'
        }, {
          value: 'Péruvienne (Pérou)',
          label: 'Péruvienne (Pérou)'
        }
        , {
          value: 'Philippine (Philippines)',
          label: 'Philippine (Philippines)'
        }, {
          value: 'Polonaise (Pologne)',
          label: 'Polonaise (Pologne)'
        }
        , {
          value: 'Portugaise (Portugal)',
          label: 'Portugaise (Portugal)'
        }, {
          value: 'Qatarienne (Qatar)',
          label: 'Qatarienne (Qatar)'
        }
        , {
          value: 'Roumaine (Roumanie)',
          label: 'Roumaine (Roumanie)'
        }, {
          value: 'Russe (Russie)',
          label: 'Russe (Russie)'
        }
        , {
          value: 'Rwandaise (Rwanda)',
          label: 'Rwandaise (Rwanda)'
        }, {
          value: 'Saint-Lucienne (Sainte-Lucie)',
          label: 'Saint-Lucienne (Sainte-Lucie)'
        }
        , {
          value: 'Saint-Marinaise (Saint-Marin)',
          label: 'Saint-Marinaise (Saint-Marin)'
        }, {
          value: 'Saint-Vincentaise et Grenadine (Saint-Vincent-et-les Grenadines)',
          label: 'Saint-Vincentaise et Grenadine (Saint-Vincent-et-les Grenadines)'
        }
        , {
          value: 'Salomonaise (Îles Salomon)',
          label: 'Salomonaise (Îles Salomon)'
        }, {
          value: 'Salvadorienne (Salvador)',
          label: 'Salvadorienne (Salvador)'
        }
        , {
          value: 'Samoane (Samoa)',
          label: 'Samoane (Samoa)'
        }, {
          value: 'Santoméenne (Sao Tomé-et-Principe)',
          label: 'Santoméenne (Sao Tomé-et-Principe)'
        }
        , {
          value: 'Saoudienne (Arabie saoudite)',
          label: 'Saoudienne (Arabie saoudite)'
        }, {
          value: 'Sénégalaise (Sénégal)',
          label: 'Sénégalaise (Sénégal)'
        }
        , {
          value: 'Serbe (Serbie)',
          label: 'Serbe (Serbie)'
        }, {
          value: 'Seychelloise (Seychelles)',
          label: 'Seychelloise (Seychelles)'
        }
        , {
          value: 'Sierra-Léonaise (Sierra Leone)',
          label: 'Sierra-Léonaise (Sierra Leone)'
        }, {
          value: 'Singapourienne (Singapour)',
          label: 'Singapourienne (Singapour)'
        }
        , {
          value: 'Slovaque (Slovaquie)',
          label: 'Slovaque (Slovaquie)'
        }, {
          value: 'Slovène (Slovénie)',
          label: 'Slovène (Slovénie)'
        }
        , {
          value: 'Somalienne (Somalie)',
          label: 'Somalienne (Somalie)'
        }, {
          value: 'Soudanaise (Soudan)',
          label: 'Soudanaise (Soudan)'
        }
        , {
          value: 'Sri-Lankaise (Sri Lanka)',
          label: 'Sri-Lankaise (Sri Lanka)'
        }, {
          value: 'Sud-Africaine (Afrique du Sud)',
          label: 'Sud-Africaine (Afrique du Sud)'
        }
        , {
          value: 'Sud-Coréenne (Corée du Sud)',
          label: 'Sud-Coréenne (Corée du Sud)'
        }, {
          value: 'Sud-Soudanaise (Soudan du Sud)',
          label: 'Sud-Soudanaise (Soudan du Sud)'
        }
        , {
          value: 'Suédoise (Suède)',
          label: 'Suédoise (Suède)'
        }, {
          value: 'Suisse (Suisse)',
          label: 'Suisse (Suisse)'
        }
        , {
          value: 'Surinamaise (Suriname)',
          label: 'Surinamaise (Suriname)'
        }, {
          value: 'Swazie (Swaziland)',
          label: 'Swazie (Swaziland)'
        }
        , {
          value: 'Syrienne (Syrie)',
          label: 'Syrienne (Syrie)'
        }, {
          value: 'Tadjike (Tadjikistan)',
          label: 'Tadjike (Tadjikistan)'
        }
        , {
          value: 'Tanzanienne (Tanzanie)',
          label: 'Tanzanienne (Tanzanie)'
        }, {
          value: 'Tchadienne (Tchad)',
          label: 'Tchadienne (Tchad)'
        }
        , {
          value: 'Tchèque (Tchéquie)',
          label: 'Tchèque (Tchéquie)'
        }, {
          value: 'Thaïlandaise (Thaïlande)',
          label: 'Thaïlandaise (Thaïlande)'
        }
        , {
          value: 'Togolaise (Togo)',
          label: 'Togolaise (Togo)'
        }, {
          value: 'Tonguienne (Tonga)',
          label: 'Tonguienne (Tonga)'
        }
        , {
          value: 'Trinidadienne (Trinité-et-Tobago)',
          label: 'Trinidadienne (Trinité-et-Tobago)'
        }, {
          value: 'Tunisienne (Tunisie)',
          label: 'Tunisienne (Tunisie)'
        }
        , {
          value: 'Turkmène (Turkménistan)',
          label: 'Turkmène (Turkménistan)'
        }, {
          value: 'Turque (Turquie)',
          label: 'Turque (Turquie)'
        }
        , {
          value: 'Tuvaluane (Tuvalu)',
          label: 'Tuvaluane (Tuvalu)'
        }, {
          value: 'Ukrainienne (Ukraine)',
          label: 'Ukrainienne (Ukraine)'
        }
        , {
          value: 'Uruguayenne (Uruguay)',
          label: 'Uruguayenne (Uruguay)'
        }, {
          value: 'Vanuatuane (Vanuatu)',
          label: 'Vanuatuane (Vanuatu)'
        }
        , {
          value: 'Vaticane (Vatican)',
          label: 'Vaticane (Vatican)'
        }, {
          value: 'Vénézuélienne (Venezuela)',
          label: 'Vénézuélienne (Venezuela)'
        }
        , {
          value: 'Vietnamienne (Viêt Nam)',
          label: 'Vietnamienne (Viêt Nam)'
        }, {
          value: 'Yéménite (Yémen)',
          label: 'Yéménite (Yémen)'
        }
        , {
          value: 'Zambienne (Zambie)',
          label: 'Zambienne (Zambie)'
        }, {
          value: 'Zimbabwéenne (Zimbabwe)',
          label: 'Zimbabwéenne (Zimbabwe)'
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
        this.form.nom = this.users.nom;
        this.form.prenom = this.users.prenom;
        this.form.role = this.users.role;
        this.form.genre = this.users.genre;
        this.form.adresse = this.users.adresse;
        this.form.contact = this.users.contact;
        this.form.email = encryptData(this.email);
        this.$vs.loading();

        // Envoyer la requête au serveur
        this.$axios.post('/profile_client.php', this.form)
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
            photo : this.users.photo,
            email : encryptData(this.email)
        }

        this.$vs.loading();

        // Envoyer la requête au serveur
        this.$axios.post('/profile_photo_client.php', this.profilePhoto)
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
                  this.users.photo = res.data.url;
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
      //this.test();
    },
  }
  </script>
  