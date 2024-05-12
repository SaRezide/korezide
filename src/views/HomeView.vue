<template>
  <div class="home">
    <!-- =======================
Main banner START -->
  <Navbar v-if="isMobile"/> 
    <div v-if="isMobile" style="margin-top: 20px;">
      <div class="accueil-bodyimg-themea">
        <div style="padding: 10px;">
          <center class="mt-7">
          
            <h1 v-if="isMobile" class="accueil-bodytitle-themeamo">Bienvenue sur SaRezide</h1>
            <h5 class="accueil-bodysubtitle-themea">Plateforme de réservation de résidences meublées et d'hôtel en Côte d'Ivoire.
            </h5>
          </center>
          <div class="accueil-bodysearch-themea">
            <vs-card
              style="padding: 0px; box-shadow: 0 0 0 10px rgb(255 255 255 / 15%), 0 2px 48px 0 rgb(0 0 0 / 4%); border-radius: 15px;">
              <vs-row style="padding: 5px;">
                <vs-col v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="6">
                  <div style="display: flex;">
                    <vs-select style="font-family: 'Jost', sans-serif" class="select-zone web-search" icon-after="true"
                      icon="location_city" v-model="select1">
                      <vs-select-item :key="index" :value="item.value" :text="item.text"
                        v-for="item, index in options1" />
                    </vs-select>
                  </div>
                </vs-col>
                <vs-col v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="6">
                  <div style="display: flex;">
                    <vs-select style="font-family: 'Jost', sans-serif" class="select-zone web-search" icon-after="true"
                      icon="location_on" v-model="select2" :disabled="select2Grise">
                      <vs-select-item :key="index" :value="item.value" :text="item.text"
                        v-for="item, index in options2" />
                    </vs-select>
                  </div>
                </vs-col>
                <vs-col v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="6">
                  <div style="display: flex;">
                    <vs-select style="font-family: 'Jost', sans-serif" class="select-zone web-search" icon-after="true"
                      icon="meeting_room" v-model="selectedType">
                      <vs-select-item :key="index" :value="item.value" :text="item.text"
                        v-for="item, index in options3" />
                    </vs-select>
                  </div>
                </vs-col>
                <vs-col v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="6">
                  <div style="display: flex;">
                    <vs-select style="font-family: 'Jost', sans-serif" class="select-zone web-search" icon-after="true"
                      icon="payments" v-model="selectedPrice">
                      <vs-select-item :key="index" :value="item.value" :text="item.text"
                        v-for="item, index in options4" />
                    </vs-select>
                  </div>
                </vs-col>
                <vs-col v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="1">

                </vs-col>
                <vs-col v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="10">
                  <div style="display: flex;">
                    <vs-button @click="ListeFiltre()" style="width: 100%;font-size: 18px; background: #348ddb !important"
                      type="filled">Recherche</vs-button>
                  </div>
                </vs-col>
                <vs-col v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="1">

                </vs-col>
              </vs-row>
            </vs-card>
          </div>

          <section>
            <div class="container">
              <!-- Title -->
              <div class="row mb-4 mt-3">
                <div class="col-12 text-center">
                  <h2 class="mb-0">Explorer à proximité</h2>
                </div>
              </div>

              <div class="row g-4 g-md-5">
                <!-- Card item START -->
                <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div class="card bg-transparent text-center p-1 h-100">
                    <!-- Image -->
                    <img src="@/assets/images/category/hotel/nearby/san-pedro.png" class="rounded-circle" alt="">

                    <div class="card-body p-0 pt-3">
                      <h5 class="card-title"><a href="#" class="stretched-link" style="font-size: 18px">San-Pedro</a>
                      </h5>
                      <span>13 établissement</span>
                    </div>
                  </div>
                </div>
                <!-- Card item END -->

                <!-- Card item START -->
                <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div class="card bg-transparent text-center p-1 h-100">
                    <!-- Image -->
                    <img src="@/assets/images/category/hotel/nearby/abidjan.png" class="rounded-circle" alt="">

                    <div class="card-body p-0 pt-3">
                      <h5 class="card-title"><a href="#" class="stretched-link" style="font-size: 18px;">Abidjan</a>
                      </h5>
                      <span>25 établissement</span>
                    </div>
                  </div>
                </div>
                <!-- Card item END -->

                <!-- Card item START -->
                <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div class="card bg-transparent text-center p-1 h-100">
                    <!-- Image -->
                    <img src="@/assets/images/category/hotel/nearby/korhogo.jpg" class="rounded-circle" alt="">

                    <div class="card-body p-0 pt-3">
                      <h5 class="card-title"><a href="#" class="stretched-link" style="font-size: 18px">Korhogo</a></h5>
                      <span>45 établissement</span>
                    </div>
                  </div>
                </div>
                <!-- Card item END -->

                <!-- Card item START -->
                <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div class="card bg-transparent text-center p-1 h-100">
                    <!-- Image -->
                    <img src="@/assets/images/category/hotel/nearby/yakro.jpg" class="rounded-circle" alt="">

                    <div class="card-body p-0 pt-3">
                      <h5 class="card-title"><a href="#" class="stretched-link" style="font-size: 18px">Yamoussoukro</a>
                      </h5>
                      <span>55 établissement</span>
                    </div>
                  </div>
                </div>
                <!-- Card item END -->

                <!-- Card item START -->
                <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div class="card bg-transparent text-center p-1 h-100">
                    <!-- Image -->
                    <img src="@/assets/images/category/hotel/nearby/bouake.jpg" class="rounded-circle" alt="">

                    <div class="card-body p-0 pt-3">
                      <h5 class="card-title"><a href="#" class="stretched-link" style="font-size: 18px">Bouaké</a></h5>
                      <span>15 établissement</span>
                    </div>
                  </div>
                </div>
                <!-- Card item END -->

                <!-- Card item START -->
                <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                  <div class="card bg-transparent text-center p-1 h-100">
                    <!-- Image -->
                    <img src="@/assets/images/category/hotel/nearby/grand-bassam.jpg" class="rounded-circle" alt="">

                    <div class="card-body p-0 pt-3">
                      <h5 class="card-title"><a href="#" class="stretched-link" style="font-size: 18px">Grand-Bassam</a>
                      </h5>
                      <span>22 établissement</span>
                    </div>
                  </div>
                </div>
                <!-- Card item END -->
              </div> <!-- Row END -->
            </div>
          </section>

          <section class="bg-light">
            <div class="container">
              <div class="row g-4">

                <!-- Help -->
                <div class="col-md-6 col-xl-4">
                  <div class="bg-body d-flex rounded-3 h-100 p-4">
                    <h3><i class="fa-solid fa-hand-holding-heart"></i></h3>
                    <div class="ms-3">
                      <h5>Aide 7jours/7 - 24h/24</h5>
                      <p class="mb-0">Nous vous assistons 24h/24 et 7jours/7</p>
                    </div>
                  </div>
                </div>

                <!-- Trust -->
                <div class="col-md-6 col-xl-4">
                  <div class="bg-body d-flex rounded-3 h-100 p-4">
                    <h3><i class="fa-solid fa-hand-holding-usd"></i></h3>
                    <div class="ms-3">
                      <h5>Paiement sécurisé</h5>
                      <p class="mb-0">Réservez votre hébergement en toute tranquilité</p>
                    </div>
                  </div>
                </div>

                <!-- Download app -->
                <div class="col-lg-6 col-xl-4 app-footer col-xxl-3 ms-xxl-auto">
                  <h5 class="mb-4">Télécharger bientôt l'application</h5>
                  <div class="row g-3">
                    <!-- Google play store button -->
                    <div class="col-6 col-sm-4 col-md-3 col-lg-6">
                      <a href="#"> <img src="@/assets/images/element/playstore.svg" alt=""> </a>
                    </div>
                    <!-- App store button -->
                    <div class="col-6 col-sm-4 col-md-3 col-lg-6">
                      <a href="#"> <img src="@/assets/images/element/appstore.svg" alt=""> </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
          <div class="mobile-nav">
            <div class="container-mobile  mb-2">
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
              <span @click="openActionSheet()" v-else to="" class="mobile-widget">
                  <svg class="svg icon" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <circle cx="12" cy="9" r="3" stroke="#050a30" stroke-width="2.5"></circle>
                                <path
                                    d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
                                    stroke="#050a30" stroke-width="2.5" stroke-linecap="round"></path>
                                <path
                                    d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                                    stroke="#050a30" stroke-width="2.5" stroke-linecap="round"></path>
                            </g>
                  </svg>
                  <span>Connexion</span>
              </span>
            </div>
            </div>
          </div>
          <!-- ActionSheet -->

          <div class="actionsheet" v-if="isOpen">
              <!-- Arrière-plan semi-transparent -->
             <div div class="actionsheet-overlay" @click="closeActionSheet()"></div>
                <div class="actionsheet-content showSignup" v-if="loginZone">
                  <Inscription />
                </div>
                <div class="actionsheet-content showLogin" v-else>
                  <Login />
                </div>
          </div>

        </div>
      </div>
    </div>

    <div v-else>
      <!-- ======================= Main Banner START -->
      <section class="pt-0">
        <div class="container position-relative">
          <!-- Bg image -->
          <div class="rounded-3 p-4 p-sm-5"
            style="background-image: url(https://images.pexels.com/photos/2956511/pexels-photo-2956511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2); background-position: center center; background-repeat: no-repeat; background-size: cover;">
            <!-- Banner title -->
            <div class="row justify-content-between pt-0 pb-5">
              <div class="col-md-7 col-lg-8 col-xxl-7 pb-5 mb-0 mb-lg-5">
                <h1 class="text-white">La vie est une aventure, profitez-en au maximum</h1>
                <p class="text-white mb-0">Vous planifiez un voyage? nous organiserons votre meilleur voyage avec la
                  meilleure destination et dans les meilleurs budgets !</p>
              </div>

              <!-- Produce item START -->
              <div class="col-md-5 col-lg-4 col-xl-3 mb-3 mb-sm-0">
                <div class="card shadow p-2 pb-0">
                  <!-- Offer badge -->
                  <div class="position-absolute top-0 start-0 mt-n3 ms-n3 z-index-9">
                    <img src="../assets/images/element/05.svg" class="position-relative h-70px" alt="">
                    <span class="h5 text-white position-absolute top-50 start-50 translate-middle">40%</span>
                  </div>

                  <div class="rounded-3 overflow-hidden position-relative">
                    <!-- Image -->
                    <img
                      src="https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      class="card-img" alt="">
                    <!-- Overlay -->
                    <div class="bg-overlay bg-dark opacity-4"></div>

                    <!-- Hover element -->
                    <div class="card-img-overlay d-flex">
                      <h6 class="text-white fw-normal mt-auto mb-0">5 jours / 4 nuits</h6>
                    </div>
                  </div>
                  <!-- Card body -->
                  <div class="card-body px-2">
                    <!-- Badge and Rating -->
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <a href="#" class="badge bg-primary bg-opacity-10 text-white">Adventure</a>
                      <!-- Rating -->
                      <h6 class="fw-light m-0"><i class="fa-solid fa-star text-warning me-2"></i>4.5</h6>
                    </div>

                    <!-- Title -->
                    <h6 class="card-title"><a href="#">Hôtel Pullman Plateau</a></h6>

                    <!-- Badge and Price -->
                    <div class="d-flex justify-content-between align-items-center mb-0">
                      <!-- Price -->
                      <h6 style="font-size: 14px" class="text-success mb-0">XOF 35 000 <span
                          class="fw-light">/nuit</span></h6>
                      <span style="font-size: 13px" class="text-decoration-line-through mb-0 text-reset">XOF 40
                        000</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Produce item END -->
            </div>
          </div>

          <!-- Search START -->
          <div class="row mt-n7">
            <div class="col-11 mx-auto">
              <!-- Booking from START -->
              <form class="bg-mode shadow rounded-3 p-4">
                <div class="row g-4 align-items-center">

                  <div class="col-xl-10">
                    <div class="row g-4">
                      <!-- Location -->
                      <div class="col-md-6 col-lg-4-web">
                        <label class="h6 fw-normal mb-0"><i class="bi bi-buildings-fill text-primary me-1"></i>Ville</label>
                        <!-- Input field -->
                        <div class=" form-control-transparent form-fs-lg mt-2">
                          <vs-select style="font-family: 'Jost', sans-serif;width: 100%" class="select-zone web-search " icon-after="true"
                            icon="location_city" v-model="select1">
                            <vs-select-item :key="index" :value="item.value" :text="item.text"
                              v-for="item, index in options1" />
                          </vs-select>
                        </div>
                      </div>

                      <!-- Check in -->
                      <div class="col-md-6 col-lg-4-web">
                        <label class="h6 fw-normal mb-0"><i class="bi bi-geo-alt-fill text-primary me-1"></i>Zone</label>
                        <!-- Input field -->
                        <div class=" form-control-transparent form-fs-lg mt-2">
                          <div class="block">
                            <vs-select style="font-family: 'Jost', sans-serif; width: 100%" class="select-zone web-search" icon-after="true"
                              icon="location_on" v-model="select2" :disabled="select2Grise">
                              <vs-select-item :key="index" :value="item.value" :text="item.text"
                                v-for="item, index in options2" />
                            </vs-select>
                          </div>
                        </div>
                      </div>

                      <!-- Guest -->
                      <div class="col-md-6 col-lg-4-web">
                        <label class="h6 fw-normal mb-0"><i
                            class="fa-solid fa-door-open text-primary me-1"></i>Nombre de pièce</label>
                        <!-- Input field -->
                        <div class="form-control-transparent form-fs-lg mt-2">
                          <vs-select style="font-family: 'Jost', sans-serif; width: 100%" class="select-zone web-search" icon-after="true"
                            icon="meeting_room" v-model="selectedType">
                            <vs-select-item :key="index" :value="item.value" :text="item.text"
                              v-for="item, index in options3" />
                          </vs-select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Button -->
                  <div class="col-xl-2 mb-0">
                    <div class="d-grid">
                      <vs-button @click="ListeFiltre()" style="width: 100%; margin-top: 32px; background: #348ddb !important"
                      type="filled">Recherche</vs-button>
                    </div>
                  </div>
                </div>
              </form>
              <!-- Booking from END -->
            </div>
          </div>
          <!-- Search END -->

        </div>
      </section>
      <!-- =======================
Main Banner END -->

      <section>
        <div class="container">

          <!-- Title -->
          <div class="row mb-4">
            <div class="col-12 text-center">
              <h2 class="mb-0">Les plus consultés</h2>
            </div>
          </div>

          <div class="row g-4">
            <!-- Hotel item -->
            <div class="col-sm-6 col-xl-3">
              <!-- Card START -->
              <div class="card card-img-scale overflow-hidden bg-transparent">
                <!-- Image and overlay -->
                <div class="card-img-scale-wrapper rounded-3">
                  <!-- Image -->
                  <img src="@/assets/images/category/hotel/01.jpg" class="card-img" alt="hotel image">
                  <!-- Badge -->
                  <div class="position-absolute bottom-0 start-0 p-3">
                    <div class="badge text-bg-dark fs-6 rounded-pill stretched-link"><i
                        class="bi bi-geo-alt me-2"></i>Abidjan</div>
                  </div>
                </div>

                <!-- Card body -->
                <div class="card-body px-2">
                  <!-- Title -->
                  <h5 class="card-title"><a href="hotel-detail.html" class="stretched-link">Seen Hôtel </a></h5>
                  <!-- Price and rating -->
                  <div class="d-flex justify-content-between align-items-center">
                    <h6 class="text-success mb-0">25 000 CFA <small class="fw-light">/Jour</small> </h6>
                    <h6 class="mb-0">4.5<i class="fa-solid fa-star text-warning ms-1"></i></h6>
                  </div>
                </div>
              </div>
              <!-- Card END -->
            </div>

            <!-- Hotel item -->
            <div class="col-sm-6 col-xl-3">
              <!-- Card START -->
              <div class="card card-img-scale overflow-hidden bg-transparent">
                <!-- Image and overlay -->
                <div class="card-img-scale-wrapper rounded-3">
                  <!-- Image -->
                  <img src="@/assets/images/category/hotel/02.jpg" class="card-img" alt="hotel image">
                  <!-- Badge -->
                  <div class="position-absolute bottom-0 start-0 p-3">
                    <div class="badge text-bg-dark fs-6 rounded-pill stretched-link"><i
                        class="bi bi-geo-alt me-2"></i>Bouake</div>
                  </div>
                </div>

                <!-- Card body -->
                <div class="card-body px-2">
                  <!-- Title -->
                  <h5 class="card-title"><a href="hotel-detail.html" class="stretched-link">Hôtel de ville</a></h5>
                  <!-- Price and rating -->
                  <div class="d-flex justify-content-between align-items-center">
                    <h6 class="text-success mb-0">15 000 CFA <small class="fw-light">/Nuit</small> </h6>
                    <h6 class="mb-0">4.8<i class="fa-solid fa-star text-warning ms-1"></i></h6>
                  </div>
                </div>
              </div>
              <!-- Card END -->
            </div>

            <!-- Hotel item -->
            <div class="col-sm-6 col-xl-3">
              <!-- Card START -->
              <div class="card card-img-scale overflow-hidden bg-transparent">
                <!-- Image and overlay -->
                <div class="card-img-scale-wrapper rounded-3">
                  <!-- Image -->
                  <img src="@/assets/images/category/hotel/03.jpg" class="card-img" alt="hotel image">
                  <!-- Badge -->
                  <div class="position-absolute bottom-0 start-0 p-3">
                    <div class="badge text-bg-dark fs-6 rounded-pill stretched-link"><i
                        class="bi bi-geo-alt me-2"></i>Yamoussoukro</div>
                  </div>
                </div>

                <!-- Card body -->
                <div class="card-body px-2">
                  <!-- Title -->
                  <h5 class="card-title"><a href="hotel-detail.html" class="stretched-link">Hôtel Président</a></h5>
                  <!-- Price and rating -->
                  <div class="d-flex justify-content-between align-items-center">
                    <h6 class="text-success mb-0">35 000 CFA <small class="fw-light">/Nuit</small> </h6>
                    <h6 class="mb-0">4.6<i class="fa-solid fa-star text-warning ms-1"></i></h6>
                  </div>
                </div>
              </div>
              <!-- Card END -->
            </div>

            <!-- Hotel item -->
            <div class="col-sm-6 col-xl-3">
              <!-- Card START -->
              <div class="card card-img-scale overflow-hidden bg-transparent">
                <!-- Image and overlay -->
                <div class="card-img-scale-wrapper rounded-3">
                  <!-- Image -->
                  <img src="@/assets/images/category/hotel/04.jpg" class="card-img" alt="hotel image">
                  <!-- Badge -->
                  <div class="position-absolute bottom-0 start-0 p-3">
                    <div class="badge text-bg-dark fs-6 rounded-pill stretched-link"><i
                        class="bi bi-geo-alt me-2"></i>San-Pedro</div>
                  </div>
                </div>

                <!-- Card body -->
                <div class="card-body px-2">
                  <!-- Title -->
                  <h5 class="card-title"><a href="hotel-detail.html" class="stretched-link">Résidence sacré coeur</a>
                  </h5>
                  <!-- Price and rating -->
                  <div class="d-flex justify-content-between align-items-center">
                    <h6 class="text-success mb-0">35 000 CFA <small class="fw-light">/Jour</small> </h6>
                    <h6 class="mb-0">4.8<i class="fa-solid fa-star text-warning ms-1"></i></h6>
                  </div>
                </div>
              </div>
              <!-- Card END -->
            </div>
          </div> <!-- Row END -->
        </div>
      </section>

      <section class="pb-0 pb-xl-5">
        <div class="container">
          <div class="row g-4 justify-content-between align-items-center">
            <!-- Left side START -->
            <div class="col-lg-5 position-relative">
              <!-- Svg Decoration -->
              <figure class="position-absolute top-0 start-0 translate-middle z-index-1 ms-4">
                <svg class="fill-warning" width="77px" height="77px">
                  <path
                    d="M76.997,41.258 L45.173,41.258 L67.676,63.760 L63.763,67.673 L41.261,45.171 L41.261,76.994 L35.728,76.994 L35.728,45.171 L13.226,67.673 L9.313,63.760 L31.816,41.258 L-0.007,41.258 L-0.007,35.725 L31.816,35.725 L9.313,13.223 L13.226,9.311 L35.728,31.813 L35.728,-0.010 L41.261,-0.010 L41.261,31.813 L63.763,9.311 L67.676,13.223 L45.174,35.725 L76.997,35.725 L76.997,41.258 Z" />
                </svg>
              </figure>

              <!-- Svg decoration -->
              <figure class="position-absolute bottom-0 end-0 d-none d-md-block mb-n5 me-n4">
                <svg height="400" class="fill-primary opacity-2" viewBox="0 0 340 340">
                  <circle cx="194.2" cy="2.2" r="2.2"></circle>
                  <circle cx="2.2" cy="2.2" r="2.2"></circle>
                  <circle cx="218.2" cy="2.2" r="2.2"></circle>
                  <circle cx="26.2" cy="2.2" r="2.2"></circle>
                  <circle cx="242.2" cy="2.2" r="2.2"></circle>
                  <circle cx="50.2" cy="2.2" r="2.2"></circle>
                  <circle cx="266.2" cy="2.2" r="2.2"></circle>
                  <circle cx="74.2" cy="2.2" r="2.2"></circle>
                  <circle cx="290.2" cy="2.2" r="2.2"></circle>
                  <circle cx="98.2" cy="2.2" r="2.2"></circle>
                  <circle cx="314.2" cy="2.2" r="2.2"></circle>
                  <circle cx="122.2" cy="2.2" r="2.2"></circle>
                  <circle cx="338.2" cy="2.2" r="2.2"></circle>
                  <circle cx="146.2" cy="2.2" r="2.2"></circle>
                  <circle cx="170.2" cy="2.2" r="2.2"></circle>
                  <circle cx="194.2" cy="26.2" r="2.2"></circle>
                  <circle cx="2.2" cy="26.2" r="2.2"></circle>
                  <circle cx="218.2" cy="26.2" r="2.2"></circle>
                  <circle cx="26.2" cy="26.2" r="2.2"></circle>
                  <circle cx="242.2" cy="26.2" r="2.2"></circle>
                  <circle cx="50.2" cy="26.2" r="2.2"></circle>
                  <circle cx="266.2" cy="26.2" r="2.2"></circle>
                  <circle cx="74.2" cy="26.2" r="2.2"></circle>
                  <circle cx="290.2" cy="26.2" r="2.2"></circle>
                  <circle cx="98.2" cy="26.2" r="2.2"></circle>
                  <circle cx="314.2" cy="26.2" r="2.2"></circle>
                  <circle cx="122.2" cy="26.2" r="2.2"></circle>
                  <circle cx="338.2" cy="26.2" r="2.2"></circle>
                  <circle cx="146.2" cy="26.2" r="2.2"></circle>
                  <circle cx="170.2" cy="26.2" r="2.2"></circle>
                  <circle cx="194.2" cy="50.2" r="2.2"></circle>
                  <circle cx="2.2" cy="50.2" r="2.2"></circle>
                  <circle cx="218.2" cy="50.2" r="2.2"></circle>
                  <circle cx="26.2" cy="50.2" r="2.2"></circle>
                  <circle cx="242.2" cy="50.2" r="2.2"></circle>
                  <circle cx="50.2" cy="50.2" r="2.2"></circle>
                  <circle cx="266.2" cy="50.2" r="2.2"></circle>
                  <circle cx="74.2" cy="50.2" r="2.2"></circle>
                  <circle cx="290.2" cy="50.2" r="2.2"></circle>
                  <circle cx="98.2" cy="50.2" r="2.2"></circle>
                  <circle cx="314.2" cy="50.2" r="2.2"></circle>
                  <circle cx="122.2" cy="50.2" r="2.2"></circle>
                  <circle cx="338.2" cy="50.2" r="2.2"></circle>
                  <circle cx="146.2" cy="50.2" r="2.2"></circle>
                  <circle cx="170.2" cy="50.2" r="2.2"></circle>
                  <circle cx="194.2" cy="74.2" r="2.2"></circle>
                  <circle cx="2.2" cy="74.2" r="2.2"></circle>
                  <circle cx="218.2" cy="74.2" r="2.2"></circle>
                  <circle cx="26.2" cy="74.2" r="2.2"></circle>
                  <circle cx="242.2" cy="74.2" r="2.2"></circle>
                  <circle cx="50.2" cy="74.2" r="2.2"></circle>
                  <circle cx="266.2" cy="74.2" r="2.2"></circle>
                  <circle cx="74.2" cy="74.2" r="2.2"></circle>
                  <circle cx="290.2" cy="74.2" r="2.2"></circle>
                  <circle cx="98.2" cy="74.2" r="2.2"></circle>
                  <circle cx="314.2" cy="74.2" r="2.2"></circle>
                  <circle cx="122.2" cy="74.2" r="2.2"></circle>
                  <circle cx="338.2" cy="74.2" r="2.2"></circle>
                  <circle cx="146.2" cy="74.2" r="2.2"></circle>
                  <circle cx="170.2" cy="74.2" r="2.2"></circle>
                  <circle cx="194.2" cy="98.2" r="2.2"></circle>
                  <circle cx="2.2" cy="98.2" r="2.2"></circle>
                  <circle cx="218.2" cy="98.2" r="2.2"></circle>
                  <circle cx="26.2" cy="98.2" r="2.2"></circle>
                  <circle cx="242.2" cy="98.2" r="2.2"></circle>
                  <circle cx="50.2" cy="98.2" r="2.2"></circle>
                  <circle cx="266.2" cy="98.2" r="2.2"></circle>
                  <circle cx="74.2" cy="98.2" r="2.2"></circle>
                  <circle cx="290.2" cy="98.2" r="2.2"></circle>
                  <circle cx="98.2" cy="98.2" r="2.2"></circle>
                  <circle cx="314.2" cy="98.2" r="2.2"></circle>
                  <circle cx="122.2" cy="98.2" r="2.2"></circle>
                  <circle cx="338.2" cy="98.2" r="2.2"></circle>
                  <circle cx="146.2" cy="98.2" r="2.2"></circle>
                  <circle cx="170.2" cy="98.2" r="2.2"></circle>
                  <circle cx="194.2" cy="122.2" r="2.2"></circle>
                  <circle cx="2.2" cy="122.2" r="2.2"></circle>
                  <circle cx="218.2" cy="122.2" r="2.2"></circle>
                  <circle cx="26.2" cy="122.2" r="2.2"></circle>
                  <circle cx="242.2" cy="122.2" r="2.2"></circle>
                  <circle cx="50.2" cy="122.2" r="2.2"></circle>
                  <circle cx="266.2" cy="122.2" r="2.2"></circle>
                  <circle cx="74.2" cy="122.2" r="2.2"></circle>
                  <circle cx="290.2" cy="122.2" r="2.2"></circle>
                  <circle cx="98.2" cy="122.2" r="2.2"></circle>
                  <circle cx="314.2" cy="122.2" r="2.2"></circle>
                  <circle cx="122.2" cy="122.2" r="2.2"></circle>
                  <circle cx="338.2" cy="122.2" r="2.2"></circle>
                  <circle cx="146.2" cy="122.2" r="2.2"></circle>
                  <circle cx="170.2" cy="122.2" r="2.2"></circle>
                  <circle cx="194.2" cy="146.2" r="2.2"></circle>
                  <circle cx="2.2" cy="146.2" r="2.2"></circle>
                  <circle cx="218.2" cy="146.2" r="2.2"></circle>
                  <circle cx="26.2" cy="146.2" r="2.2"></circle>
                  <circle cx="242.2" cy="146.2" r="2.2"></circle>
                  <circle cx="50.2" cy="146.2" r="2.2"></circle>
                  <circle cx="266.2" cy="146.2" r="2.2"></circle>
                  <circle cx="74.2" cy="146.2" r="2.2"></circle>
                  <circle cx="290.2" cy="146.2" r="2.2"></circle>
                  <circle cx="98.2" cy="146.2" r="2.2"></circle>
                  <circle cx="314.2" cy="146.2" r="2.2"></circle>
                  <circle cx="122.2" cy="146.2" r="2.2"></circle>
                  <circle cx="338.2" cy="146.2" r="2.2"></circle>
                  <circle cx="146.2" cy="146.2" r="2.2"></circle>
                  <circle cx="170.2" cy="146.2" r="2.2"></circle>
                  <circle cx="194.2" cy="170.2" r="2.2"></circle>
                  <circle cx="2.2" cy="170.2" r="2.2"></circle>
                  <circle cx="218.2" cy="170.2" r="2.2"></circle>
                  <circle cx="26.2" cy="170.2" r="2.2"></circle>
                  <circle cx="242.2" cy="170.2" r="2.2"></circle>
                  <circle cx="50.2" cy="170.2" r="2.2"></circle>
                  <circle cx="266.2" cy="170.2" r="2.2"></circle>
                  <circle cx="74.2" cy="170.2" r="2.2"></circle>
                  <circle cx="290.2" cy="170.2" r="2.2"></circle>
                  <circle cx="98.2" cy="170.2" r="2.2"></circle>
                  <circle cx="314.2" cy="170.2" r="2.2"></circle>
                  <circle cx="122.2" cy="170.2" r="2.2"></circle>
                  <circle cx="338.2" cy="170.2" r="2.2"></circle>
                  <circle cx="146.2" cy="170.2" r="2.2"></circle>
                  <circle cx="170.2" cy="170.2" r="2.2"></circle>
                  <circle cx="194.2" cy="194.2" r="2.2"></circle>
                  <circle cx="2.2" cy="194.2" r="2.2"></circle>
                  <circle cx="218.2" cy="194.2" r="2.2"></circle>
                  <circle cx="26.2" cy="194.2" r="2.2"></circle>
                  <circle cx="242.2" cy="194.2" r="2.2"></circle>
                  <circle cx="50.2" cy="194.2" r="2.2"></circle>
                  <circle cx="266.2" cy="194.2" r="2.2"></circle>
                  <circle cx="74.2" cy="194.2" r="2.2"></circle>
                  <circle cx="290.2" cy="194.2" r="2.2"></circle>
                  <circle cx="98.2" cy="194.2" r="2.2"></circle>
                  <circle cx="314.2" cy="194.2" r="2.2"></circle>
                  <circle cx="122.2" cy="194.2" r="2.2"></circle>
                  <circle cx="338.2" cy="194.2" r="2.2"></circle>
                  <circle cx="146.2" cy="194.2" r="2.2"></circle>
                  <circle cx="170.2" cy="194.2" r="2.2"></circle>
                  <circle cx="194.2" cy="218.2" r="2.2"></circle>
                  <circle cx="2.2" cy="218.2" r="2.2"></circle>
                  <circle cx="218.2" cy="218.2" r="2.2"></circle>
                  <circle cx="26.2" cy="218.2" r="2.2"></circle>
                  <circle cx="242.2" cy="218.2" r="2.2"></circle>
                  <circle cx="50.2" cy="218.2" r="2.2"></circle>
                  <circle cx="266.2" cy="218.2" r="2.2"></circle>
                  <circle cx="74.2" cy="218.2" r="2.2"></circle>
                  <circle cx="290.2" cy="218.2" r="2.2"></circle>
                  <circle cx="98.2" cy="218.2" r="2.2"></circle>
                  <circle cx="314.2" cy="218.2" r="2.2"></circle>
                  <circle cx="122.2" cy="218.2" r="2.2"></circle>
                  <circle cx="338.2" cy="218.2" r="2.2"></circle>
                  <circle cx="146.2" cy="218.2" r="2.2"></circle>
                  <circle cx="170.2" cy="218.2" r="2.2"></circle>
                  <circle cx="194.2" cy="242.2" r="2.2"></circle>
                  <circle cx="2.2" cy="242.2" r="2.2"></circle>
                  <circle cx="218.2" cy="242.2" r="2.2"></circle>
                  <circle cx="26.2" cy="242.2" r="2.2"></circle>
                  <circle cx="242.2" cy="242.2" r="2.2"></circle>
                  <circle cx="50.2" cy="242.2" r="2.2"></circle>
                  <circle cx="266.2" cy="242.2" r="2.2"></circle>
                  <circle cx="74.2" cy="242.2" r="2.2"></circle>
                  <circle cx="290.2" cy="242.2" r="2.2"></circle>
                  <circle cx="98.2" cy="242.2" r="2.2"></circle>
                  <circle cx="314.2" cy="242.2" r="2.2"></circle>
                  <circle cx="122.2" cy="242.2" r="2.2"></circle>
                  <circle cx="338.2" cy="242.2" r="2.2"></circle>
                  <circle cx="146.2" cy="242.2" r="2.2"></circle>
                  <circle cx="170.2" cy="242.2" r="2.2"></circle>
                  <circle cx="194.2" cy="266.2" r="2.2"></circle>
                  <circle cx="2.2" cy="266.2" r="2.2"></circle>
                  <circle cx="218.2" cy="266.2" r="2.2"></circle>
                  <circle cx="26.2" cy="266.2" r="2.2"></circle>
                  <circle cx="242.2" cy="266.2" r="2.2"></circle>
                  <circle cx="50.2" cy="266.2" r="2.2"></circle>
                  <circle cx="266.2" cy="266.2" r="2.2"></circle>
                  <circle cx="74.2" cy="266.2" r="2.2"></circle>
                  <circle cx="290.2" cy="266.2" r="2.2"></circle>
                  <circle cx="98.2" cy="266.2" r="2.2"></circle>
                  <circle cx="314.2" cy="266.2" r="2.2"></circle>
                  <circle cx="122.2" cy="266.2" r="2.2"></circle>
                  <circle cx="338.2" cy="266.2" r="2.2"></circle>
                  <circle cx="146.2" cy="266.2" r="2.2"></circle>
                  <circle cx="170.2" cy="266.2" r="2.2"></circle>
                  <circle cx="194.2" cy="290.2" r="2.2"></circle>
                  <circle cx="2.2" cy="290.2" r="2.2"></circle>
                  <circle cx="218.2" cy="290.2" r="2.2"></circle>
                  <circle cx="26.2" cy="290.2" r="2.2"></circle>
                  <circle cx="242.2" cy="290.2" r="2.2"></circle>
                  <circle cx="50.2" cy="290.2" r="2.2"></circle>
                  <circle cx="266.2" cy="290.2" r="2.2"></circle>
                  <circle cx="74.2" cy="290.2" r="2.2"></circle>
                  <circle cx="290.2" cy="290.2" r="2.2"></circle>
                  <circle cx="98.2" cy="290.2" r="2.2"></circle>
                  <circle cx="314.2" cy="290.2" r="2.2"></circle>
                  <circle cx="122.2" cy="290.2" r="2.2"></circle>
                  <circle cx="338.2" cy="290.2" r="2.2"></circle>
                  <circle cx="146.2" cy="290.2" r="2.2"></circle>
                  <circle cx="170.2" cy="290.2" r="2.2"></circle>
                  <circle cx="194.2" cy="314.2" r="2.2"></circle>
                  <circle cx="2.2" cy="314.2" r="2.2"></circle>
                  <circle cx="218.2" cy="314.2" r="2.2"></circle>
                  <circle cx="26.2" cy="314.2" r="2.2"></circle>
                  <circle cx="242.2" cy="314.2" r="2.2"></circle>
                  <circle cx="50.2" cy="314.2" r="2.2"></circle>
                  <circle cx="266.2" cy="314.2" r="2.2"></circle>
                  <circle cx="74.2" cy="314.2" r="2.2"></circle>
                  <circle cx="290.2" cy="314.2" r="2.2"></circle>
                  <circle cx="98.2" cy="314.2" r="2.2"></circle>
                  <circle cx="314.2" cy="314.2" r="2.2"></circle>
                  <circle cx="122.2" cy="314.2" r="2.2"></circle>
                  <circle cx="338.2" cy="314.2" r="2.2"></circle>
                  <circle cx="146.2" cy="314.2" r="2.2"></circle>
                  <circle cx="170.2" cy="314.2" r="2.2"></circle>
                  <circle cx="194.2" cy="338.2" r="2.2"></circle>
                  <circle cx="2.2" cy="338.2" r="2.2"></circle>
                  <circle cx="218.2" cy="338.2" r="2.2"></circle>
                  <circle cx="26.2" cy="338.2" r="2.2"></circle>
                  <circle cx="242.2" cy="338.2" r="2.2"></circle>
                  <circle cx="50.2" cy="338.2" r="2.2"></circle>
                  <circle cx="266.2" cy="338.2" r="2.2"></circle>
                  <circle cx="74.2" cy="338.2" r="2.2"></circle>
                  <circle cx="290.2" cy="338.2" r="2.2"></circle>
                  <circle cx="98.2" cy="338.2" r="2.2"></circle>
                  <circle cx="314.2" cy="338.2" r="2.2"></circle>
                  <circle cx="122.2" cy="338.2" r="2.2"></circle>
                  <circle cx="338.2" cy="338.2" r="2.2"></circle>
                  <circle cx="146.2" cy="338.2" r="2.2"></circle>
                  <circle cx="170.2" cy="338.2" r="2.2"></circle>
                </svg>
              </figure>

              <!-- Image -->
              <img src="@/assets/images/about/01.jpg" class="rounded-3 position-relative" alt="">

              <!-- Client rating START -->
              <div class="position-absolute bottom-0 start-0 z-index-1 mb-4 ms-5">
                <div class="bg-body d-flex d-inline-block rounded-3 position-relative p-3">

                  <!-- Element -->
                  <img src="@/assets/images/element/01.svg"
                    class="position-absolute top-0 start-0 translate-middle w-40px" alt="">

                  <!-- Avatar group -->
                  <div class="me-4">
                    <h6 class="fw-light">Clients</h6>
                    <!-- Avatar group -->
                    <ul class="avatar-group mb-0">
                      <li class="avatar avatar-sm">
                        <img class="avatar-img rounded-circle" src="@/assets/images/avatar/01.jpg" alt="avatar">
                      </li>
                      <li class="avatar avatar-sm">
                        <img class="avatar-img rounded-circle" src="@/assets/images/avatar/02.jpg" alt="avatar">
                      </li>
                      <li class="avatar avatar-sm">
                        <img class="avatar-img rounded-circle" src="@/assets/images/avatar/03.jpg" alt="avatar">
                      </li>
                      <li class="avatar avatar-sm">
                        <img class="avatar-img rounded-circle" src="@/assets/images/avatar/04.jpg" alt="avatar">
                      </li>
                      <li class="avatar avatar-sm">
                        <div class="avatar-img rounded-circle bg-primary">
                          <span class="text-white position-absolute top-50 start-50 translate-middle small">1K+</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <!-- Rating -->
                  <div>
                    <h6 class="fw-light mb-3">Notation</h6>
                    <h6 class="m-0">4.5<i class="fa-solid fa-star text-warning ms-1"></i></h6>
                  </div>
                </div>
              </div>
              <!-- Client rating END -->
            </div>
            <!-- Left side END -->

            <!-- Right side START -->
            <div class="col-lg-6">
              <h2 class="mb-3 mb-lg-5">Commencez vos vacances de rêve dès maintenant !</h2>
              <p class="mb-3 mb-lg-5">Passez par notre service de réservation pour votre hébergement et ne manquez pas
                l'occasion de saisir une formidable offre d'hôtel ou résidence, permettant ainsi des économies
                considérables sur votre séjour.</p>

              <!-- Features START -->
              <div class="row g-4">
                <!-- Item -->
                <div class="col-sm-6">
                  <div class="icon-lg bg-success bg-opacity-10 text-success rounded-circle"><i
                      class="bi bi-award-fill"></i></div>
                  <h5 class="mt-2">Transparence et fiabilité des informations</h5>
                  <!-- <p class="mb-0">Departure defective arranging rapturous did. Conduct denied adding worthy little.</p>-->
                </div>
                <!-- Item -->
                <div class="col-sm-6">
                  <div class="icon-lg bg-danger bg-opacity-10 text-danger rounded-circle"><i
                      class="bi bi-stopwatch-fill"></i></div>
                  <h5 class="mt-2">Service client réactif et personnalisé</h5>
                  <!--  <p class="mb-0">Supposing so be resolving breakfast am or perfectly. </p>-->
                </div>
                <!-- Item -->
                <div class="col-sm-6">
                  <div class="icon-lg bg-orange bg-opacity-10 text-orange rounded-circle"><i
                      class="bi bi-shield-fill-check"></i></div>
                  <h5 class="mt-2">Processus de réservation sécurisé et simple</h5>
                  <!-- <p class="mb-0">Arranging rapturous did believe him all had supported. </p>-->
                </div>
                <!-- Item -->
                <div class="col-sm-6">
                  <div class="icon-lg bg-info bg-opacity-10 text-info rounded-circle"><i
                      class="bi bi-lightning-fill"></i></div>
                  <h5 class="mt-2">Garantie de satisfaction</h5>
                  <!--<p class="mb-0">Rapturous did believe him all had supported.</p>-->
                </div>
              </div>
              <!-- Features END -->

            </div>
            <!-- Right side END -->
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <!-- Title -->
          <div class="row mb-4">
            <div class="col-12 text-center">
              <h2 class="mb-0">Explorer à proximité</h2>
            </div>
          </div>

          <div class="row g-4 g-md-5">
            <!-- Card item START -->
            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
              <div class="card bg-transparent text-center p-1 h-100">
                <!-- Image -->
                <img src="@/assets/images/category/hotel/nearby/san-pedro.png" class="rounded-circle" alt="">

                <div class="card-body p-0 pt-3">
                  <h5 class="card-title"><a href="#" class="stretched-link">San-Pedro</a></h5>
                  <span>13 établissement</span>
                </div>
              </div>
            </div>
            <!-- Card item END -->

            <!-- Card item START -->
            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
              <div class="card bg-transparent text-center p-1 h-100">
                <!-- Image -->
                <img src="@/assets/images/category/hotel/nearby/abidjan.png" class="rounded-circle" alt="">

                <div class="card-body p-0 pt-3">
                  <h5 class="card-title"><a href="#" class="stretched-link">Abidjan</a></h5>
                  <span>25 établissement</span>
                </div>
              </div>
            </div>
            <!-- Card item END -->

            <!-- Card item START -->
            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
              <div class="card bg-transparent text-center p-1 h-100">
                <!-- Image -->
                <img src="@/assets/images/category/hotel/nearby/korhogo.jpg" class="rounded-circle" alt="">

                <div class="card-body p-0 pt-3">
                  <h5 class="card-title"><a href="#" class="stretched-link">Korhogo</a></h5>
                  <span>45 établissement</span>
                </div>
              </div>
            </div>
            <!-- Card item END -->

            <!-- Card item START -->
            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
              <div class="card bg-transparent text-center p-1 h-100">
                <!-- Image -->
                <img src="@/assets/images/category/hotel/nearby/yakro.jpg" class="rounded-circle" alt="">

                <div class="card-body p-0 pt-3">
                  <h5 class="card-title"><a href="#" class="stretched-link">Yamoussoukro</a></h5>
                  <span>55 établissement</span>
                </div>
              </div>
            </div>
            <!-- Card item END -->

            <!-- Card item START -->
            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
              <div class="card bg-transparent text-center p-1 h-100">
                <!-- Image -->
                <img src="@/assets/images/category/hotel/nearby/bouake.jpg" class="rounded-circle" alt="">

                <div class="card-body p-0 pt-3">
                  <h5 class="card-title"><a href="#" class="stretched-link">Bouake</a></h5>
                  <span>15 établissement</span>
                </div>
              </div>
            </div>
            <!-- Card item END -->

            <!-- Card item START -->
            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
              <div class="card bg-transparent text-center p-1 h-100">
                <!-- Image -->
                <img src="@/assets/images/category/hotel/nearby/grand-bassam.jpg" class="rounded-circle" alt="">

                <div class="card-body p-0 pt-3">
                  <h5 class="card-title"><a href="#" class="stretched-link">Grand-Bassam</a></h5>
                  <span>22 établissement</span>
                </div>
              </div>
            </div>
            <!-- Card item END -->
          </div> <!-- Row END -->
        </div>
      </section>

      <section class="bg-light">
        <div class="container">
          <div class="row g-4">

            <!-- Help -->
            <div class="col-md-6 col-xl-4">
              <div class="bg-body d-flex rounded-3 h-100 p-4">
                <h3><i class="fa-solid fa-hand-holding-heart"></i></h3>
                <div class="ms-3">
                  <h5>Aide 7jours/7 - 24h/24</h5>
                  <p class="mb-0">Nous vous assistons 24h/24 et 7jours/7</p>
                </div>
              </div>
            </div>

            <!-- Trust -->
            <div class="col-md-6 col-xl-4">
              <div class="bg-body d-flex rounded-3 h-100 p-4">
                <h3><i class="fa-solid fa-hand-holding-usd"></i></h3>
                <div class="ms-3">
                  <h5>Paiement sécurisé</h5>
                  <p class="mb-0">Réservez votre hébergement en toute tranquilité</p>
                </div>
              </div>
            </div>

            <!-- Download app -->
            <div class="col-lg-6 col-xl-4 col-xxl-3 ms-xxl-auto">
              <h5 class="mb-4">Télécharger bientôt l'application </h5>
              <div class="row g-3">
                <!-- Google play store button -->
                <div class="col-6 col-sm-4 col-md-3 col-lg-6">
                  <a href="#"> <img src="@/assets/images/element/playstore.svg" alt=""> </a>
                </div>
                <!-- App store button -->
                <div class="col-6 col-sm-4 col-md-3 col-lg-6">
                  <a href="#"> <img src="@/assets/images/element/appstore.svg" alt=""> </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
<!--
      <section class="py-0 py-md-5">
        <div class="container">
          <div class="row g-4 g-lg-7 justify-content-center align-items-center">
            
            <div class="col-5 col-sm-3 col-xl-2">
              <img src="@/assets/images/client/01.svg" class="grayscale" alt="">
            </div>
            
            <div class="col-5 col-sm-3 col-xl-2">
              <img src="@/assets/images/client/02.svg" class="grayscale" alt="">
            </div>
            
            <div class="col-5 col-sm-3 col-xl-2">
              <img src="@/assets/images/client/03.svg" class="grayscale" alt="">
            </div>
            
            <div class="col-5 col-sm-3 col-xl-2">
              <img src="@/assets/images/client/04.svg" class="grayscale" alt="">
            </div>
           
            <div class="col-5 col-sm-3 col-xl-2">
              <img src="@/assets/images/client/05.svg" class="grayscale" alt="">
            </div>
         
            <div class="col-5 col-sm-3 col-xl-2">
              <img src="@/assets/images/client/06.svg" class="grayscale" alt="">
            </div>
          </div>
        </div>
      </section>
    -->
    </div>

  </div>
</template>

<script>
import Login from '@/components/authentification/Login.vue';
import Inscription from '@/components/authentification/Inscription.vue';
import { isMobile } from 'mobile-device-detect';
import { encryptData } from '@/cryptoUtils';
import Navbar from '@/components/Navbar.vue';
export default {
  name: 'HomeView',
  components: {
    Login,
    Navbar,
    Inscription // Enregistrez le composant VueB pour pouvoir l'utiliser dans l'application
  },
  computed: {
        users() {
            return this.$store.state.users;
        },
        loginZone() {
            return this.$store.state.LoginZone;
        }
    },
  data() {
    return {

      datas: [],
      value1:[1, 80],
      filters: {
        piscine: '',
        restaurant: '',
        bordureMer: '',
        evenement: '',
        internet: ''
      },
      isOpen: false,
      showSignup: false,
      startY: 0,
      startHeight: 0,
      headerHeight: 60,
      selectedPrice: '0',
      select2Grise: false,
      selectedType: '0',
      isMobile: isMobile,
      select1: '0',
      select2: '0',
      select3: '0',
      select4: '0',
      options1: [
        { text: 'Ville', value: 0 },
        { text: 'Abidjan', value: 'Abidjan' },
        { text: 'Grand-Bassam', value: 'Grand-Bassam' },
        { text: 'Yamoussoukro', value: 'Yamoussoukro' },
        { text: 'Bouaké', value: 'Bouaké' },
      ],
      options2: [
        { text: 'Zones', value: 0 },
        { text: 'Abobo', value: 1 },
        { text: 'Adjamé', value: 2 },
        { text: 'Angré', value: 3 },
        { text: 'Anyama', value: 4 },
        { text: 'Attécoubé', value: 5 },
        { text: 'Bingerville', value: 6 },
        { text: 'Cocody', value: 7 },
        { text: 'II Plateau', value: 8 },
        { text: 'Koumassi', value: 9 },
        { text: 'Marcory', value: 10 },
        { text: 'Plateau', value: 11 },
        { text: 'Port-Bouet', value: 12 },
        { text: 'Riviera', value: 13 },
        { text: 'Treichville', value: 14 },
        { text: 'Yopougon', value: 15 },
      ],
      options3: [
        { text: 'Types', value: 0 },
        { text: 'STUDIO', value: 1 },
        { text: '2 PIECES', value: 2 },
        { text: '3 PIECES', value: 3 },
        { text: '4 PIECES', value: 4 },
        { text: 'PLUS', value: 5 },
      ],
      options4: [
        { text: 'Tarif', value: 0 },
        { text: '< XOF 20 000', value: 1 },
        { text: 'XOF 20 000 - 40 000', value: 2 },
        { text: 'XOF 40 000 - 100 000', value: 3 },
        { text: '> XOF 100 000', value: 4 },
        { text: '5', value: 4 },
        { text: '6', value: 4 },
        { text: '7', value: 4 },
        { text: '8', value: 4 },
        { text: '9', value: 4 },
        { text: '10', value: 4 },
        { text: 'Plus 10', value: 4 },
      ],
    }
  },
  watch: {
		select1: function (newValue) {
			if (newValue != 'Abidjan') {
				this.select2 = 0;
				this.select2Grise = true;
			} else {
				this.select2Grise = false;
			} // Appel de la fonction de recherche
		}
	},
  methods: {
    test() {
      const var1 = 'valeur_de_variable';
      const val = encryptData(var1);
      //console.log('Valeur chiffrée :', val);

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

    ListeFiltre() {
      const postData = {
        prix_min: this.value1[0]*5000,
				prix_max: this.value1[1]*5000,
        type: this.selectedType,
        ville: this.select1,
        commune: this.select2,
        piscine: this.filters.piscine ? 1 : 0,
        restaurant: this.filters.restaurant ? 1 : 0,
        bordureMer: this.filters.bordureMer ? 1 : 0,
        evenement: this.filters.evenement ? 1 : 0,
        internet: this.filters.internet ? 1 : 0
      };

      // Correction de la valeur de prix
      if (postData.prix === 'Tarif') {
        postData.prix = '0';
      }

      // Correction de la valeur de type
      if (postData.type === 'Types') {
        postData.type = '0';
      }

      this.$vs.loading();
      // Faire la requête POST
      this.$axios.post('/liste_appart.php?page=1', postData)
        .then(response => {
          // Traiter la réponse de l'API
          this.datas = response.data.data;
          this.$store.commit('ResultatByHome', this.datas);
          this.$vs.loading.close();
          this.$router.push({ path: '/resultat-list' });
        })
        .catch(error => {
          // Gérer les erreurs
          this.$vs.loading.close()
          console.error('Erreur de requête:', error);
        });
    },
    openActionSheet() {
      const login = false
      this.$store.commit('LoginShow', login);
      this.isOpen = true;
      console.log(this.isOpen);
      document.body.style.overflow = 'hidden';
    },
    closeActionSheet() {
      this.isOpen = false;
      console.log(this.isOpen)
      document.body.style.overflow = '';
    },

    openLogin() {
      this.showLogin = true;
      this.showSignup = false;
    },

    openSignup() {
      this.showSignup = true;
      this.showLogin = false;
    },


  },

  mounted() {
   // this.test();
   // this.$store.commit('NavbarShow', true)
  },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');



.hello {
  background: #f2ffff;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.vs-select--label {
  font-size: .85rem;
  color: rgba(0, 0, 0, .6);
}

.fnt {
  font-family: 'Dancing Script', cursive;
  text-align: center;
  padding-bottom: 5px;
  background: white;
  width: 400px;
  border-radius: 40%;
  padding: 20px;
  margin: 0 auto
}

.fnto {
  font-family: 'Quicksand', sans-serif;
  text-align: center;
  padding-bottom: 5px
}

.fntt {

  text-align: center;
  padding-bottom: 10px
}

.bann {
  background-image: url('../assets/banne.jpg');
  margin-top: -45px;
  height: 310px
}

.vs-inputx {
  background: rgb(92, 53, 53);
}
</style>