<template>
    <div class="home">
  <!-- =======================
  Main banner START -->
    <div v-if="isMobile">

      
            <div class="d-flex align-items-center dash-header mt-2 border-bottom bg-white">
              <span class="edit-icon  ms-3 my-2" @click="Back">
                  <i class="fa-solid fa-arrow-left text-black"></i>
              </span>
              <span style="flex: auto" class="">
                  <h6 style="font-size: 16px"  class="mb-0 text-center">Toutes les réservations</h6>
              </span>
            </div>

          <vs-tabs :color="colorx" alignment="fixed" class="mb-3" style="z-index: 2">

              <!-- Résidence validé -->
              <vs-tab label="En cours" icon="history" color="#000000">
              <vs-col class="mt-2" v-tooltip="'col - 3'" vs-type="flex" vs-align="center" vs-w="12 ">
                <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                  <div class="result-item-detail-m" style="padding: 0px 6px">
                    <div style="display: block" class="">
                      <el-row>
                        
                        <!-- Card item START -->
                        <div class="card mb-4" style=" box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;" v-for="item in dataEncours" :key="item.id_item">
                          <!-- Card header -->
                          <div class="p-4 align-items-center">
                            <!-- Icon and Title -->
                            <div class="d-flex align-items-center">
                              <div class="icon-lg bg-light rounded-circle flex-shrink-0"><i class="fa-solid fa-home"></i></div>	
                              <!-- Title -->
                              <div class="ms-2">
                                <h6 class="card-title mb-0">{{ item.libelle }}</h6>
                                <ul class="nav nav-divider small d-grid">
                                  <li><b>Réf</b> : {{ item.reference }}</li>
                                  <li><b>Jour(s)</b> : {{ item.nbjour }}</li>
                                  <li><b>Total</b> : {{ (item.nbjour * item.tarif_jour) | formatThousands }} XOF</li>
                                  <li><b>Ristoune Sarezide</b> : {{ ((item.nbjour * item.tarif_jour)*0.1) | formatThousands }} XOF</li>
                                  
                                </ul>
                              </div>
                            </div>
                            <div class="d-flex align-items-center">
                              <div class="icon-lg bg-light rounded-circle flex-shrink-0"><i class="fa-solid fa-calendar"></i></div>	
                              <!-- Title -->
                              <div class="ms-2">
                                <ul class="nav nav-divider small d-grid">
                                  
                                  <li><b>Du</b> : 12 janvier 2023</li>
                                  <li><b>Au</b> : 12 janvier 2023</li>
                                </ul>
                              </div>
                            </div>
          
                            <!-- Button -->
                            <vs-row>
                              <vs-col style="padding: 5px" v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="4">
                                <vs-button @click="ViewReservationShow(item)" color="primary" type="border" icon="visibility">Voir</vs-button>
                              </vs-col>
                              <vs-col style="padding: 5px" v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="4">
                                <vs-button @click="ValideReservation(item.reference)" color="success" type="border" icon="done">Valider</vs-button>
                              </vs-col>
                              <vs-col style="padding: 5px" v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="4">
                                <vs-button @click="AnnuleReservation(item.reference)" color="danger" type="border" icon="close">Annuler</vs-button>
                              </vs-col>
                            </vs-row>
                            
                          </div>
                        </div>
                        <!-- Card item END -->

                        <!-- Condition lorsque l'utilisateur n'a pas de réservation  -->
                        <div class="empty mb-8" v-if="dataEncours == null">
                          <div class="d-flex justify-content-center mb-5">
                            <img src="@/assets/images/element/desert.svg" alt="">
                          </div>
                          <div class="d-grid justify-content-center text-center">
                            <H6>Vous n'avez pas de réservation en cours !</H6>
                            <p class="text-wrap">Vos réservations en cours afficherons ici ?</p>
                          </div>
                        </div>
                          <!-- Fin condition lorsque l'utilisateur n'a pas de réservation  -->

                        <!-- Card item END -->
                      </el-row>
                    </div>
                  </div>
                </vs-col>
              </vs-col>
              </vs-tab>

              <!-- Résidence en cours de validité -->
              <vs-tab label="Validée" icon="cancel" color="#000000">
              <vs-col class="mt-2" v-tooltip="'col - 3'" vs-type="flex" vs-align="center" vs-w="12 ">
                <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                  <div class="result-item-detail-m" style="padding: 0px 6px">
                    <div style="display: block" class="">
                      <el-row>
                      
      <!-- Card item START -->
                      <div class="card mb-4" style=" box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;" v-for="item in dataValides" :key="item.id_item">
                        <!-- Card header -->
                        <div class="p-4 align-items-center">
                          <!-- Icon and Title -->
                          <div class="d-flex align-items-center">
                            <div class="icon-lg bg-light rounded-circle flex-shrink-0"><i class="fa-solid fa-home"></i></div>	
                            <!-- Title -->
                            <div class="ms-2">
                              <h6 class="card-title mb-0">{{ item.libelle }}</h6>
                              <ul class="nav nav-divider small d-grid">
                                <li><b>Réf</b> : {{ item.reference }}</li>
                                <li><b>Jour(s)</b> : {{ item.nbjour }}</li>
                                <li><b>Total</b> : {{ (item.nbjour * item.tarif_jour) | formatThousands }} XOF</li>
                                <li><b>Ristoune Sarezide</b> : {{ ((item.nbjour * item.tarif_jour)*0.1) | formatThousands }} XOF</li>
                                
                              </ul>
                            </div>
                          </div>
                          <div class="d-flex align-items-center">
                            <div class="icon-lg bg-light rounded-circle flex-shrink-0"><i class="fa-solid fa-calendar"></i></div>	
                            <!-- Title -->
                            <div class="ms-2">
                              <ul class="nav nav-divider small d-grid">
                                
                                <li><b>Du</b> : 12 janvier 2023</li>
                                <li><b>Au</b> : 12 janvier 2023</li>
                              </ul>
                            </div>
                          </div>

                          <!-- Button -->
                          <vs-row>
                            <vs-col style="padding: 5px" v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="4">
                              <vs-button @click="ViewReservationShow(item)" color="primary" type="border" icon="visibility">Voir</vs-button>
                            </vs-col>
                            <vs-col style="padding: 5px" v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="4">
                              <vs-button @click="AnnuleReservation(item.reference)" color="danger" type="border" icon="close">Annuler</vs-button>
                            </vs-col>
                          </vs-row>
                          
                        </div>
                      </div>
                      <!-- Card item END -->

                      <!-- Condition lorsque l'utilisateur n'a pas de réservation  -->
                      <div class="empty mb-8" v-if="dataValides == null">
                        <div class="d-flex justify-content-center mb-5">
                          <img src="@/assets/images/element/desert.svg" alt="">
                        </div>
                        <div class="d-grid justify-content-center text-center">
                          <H6>Vous n'avez pas de réservation en validée !</H6>
                          <p class="text-wrap">Vos réservations en cours afficherons ici ?</p>
                        </div>
                      </div>
                          <!-- Fin condition lorsque l'utilisateur n'a pas de réservation  -->

                        <!-- Card item END -->
                      </el-row>
                    </div>
                  </div>
                </vs-col>
              </vs-col>
              </vs-tab>

              <!-- Tous les résidence -->
              <vs-tab label="Annulée" icon="done_all">
                <vs-col class="mt-2" v-tooltip="'col - 3'" vs-type="flex" vs-align="center" vs-w="12 ">
                <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                  <div class="result-item-detail-m" style="padding: 0px 6px">
                    <div style="display: block" class="">
                      <el-row>

                      <!-- Card item START -->
                      <div class="card mb-4" style=" box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;" v-for="item in dataAnnules" :key="item.id_item">
                        <!-- Card header -->
                        <div class="p-4 align-items-center">
                          <!-- Icon and Title -->
                          <div class="d-flex align-items-center">
                            <div class="icon-lg bg-light rounded-circle flex-shrink-0"><i class="fa-solid fa-home"></i></div>	
                            <!-- Title -->
                            <div class="ms-2">
                              <h6 class="card-title mb-0">{{ item.libelle }}</h6>
                              <ul class="nav nav-divider small d-grid">
                                <li><b>Réf</b> : {{ item.reference }}</li>
                                <li><b>Jour(s)</b> : {{ item.nbjour }}</li>
                                <li><b>Total</b> : {{ (item.nbjour * item.tarif_jour) | formatThousands }} XOF</li>
                                
                              </ul>
                            </div>
                          </div>
                          <div class="d-flex align-items-center">
                            <div class="icon-lg bg-light rounded-circle flex-shrink-0"><i class="fa-solid fa-calendar"></i></div>	
                            <!-- Title -->
                            <div class="ms-2">
                              <ul class="nav nav-divider small d-grid">
                                
                                <li><b>Du</b> : 12 janvier 2023</li>
                                <li><b>Au</b> : 12 janvier 2023</li>
                              </ul>
                            </div>

                           
                          </div>

                          <!-- Button -->
                          <el-alert
                          style="margin-top: 5px"
                            v-if="item.res_statut == 'Annule'"
                            :closable="false"
                            title="Annulée"
                            type="error"
                            :description="item.res_commentaire"
                            show-icon>
                          </el-alert>
                          
                        </div>
                      </div>
                      <!-- Card item END -->

                      <!-- Condition lorsque l'utilisateur n'a pas de réservation  -->
                      <div class="empty mb-8" v-if="dataAnnules == null">
                        <div class="d-flex justify-content-center mb-5">
                          <img src="@/assets/images/element/desert.svg" alt="">
                        </div>
                        <div class="d-grid justify-content-center text-center">
                          <H6>Vous n'avez pas de réservation en annulée !</H6>
                          <p class="text-wrap">Vos réservations en cours afficherons ici ?</p>
                        </div>
                      </div>
                          <!-- Fin condition lorsque l'utilisateur n'a pas de réservation  -->

                        <!-- Card item END -->
                      </el-row>
                    </div>
                  </div>
                </vs-col>
              </vs-col>
              </vs-tab>
          </vs-tabs>

    </div>

    <div v-else>
      <section class="pt-3">
        <div class="container">
          <div class="row g-2 g-lg-4">
            <!-- Sidebar START -->
            <div class="col-lg-4 col-xl-4">
              <!-- Responsive offcanvas body START -->
              <SidebarMenu />
              <!-- Responsive offcanvas body END -->
            </div>

            <!-- Sidebar END -->

            <!-- Main content START -->
            <div class="col-lg-8 col-xl-8 ps-xl-4">
              <!-- Offcanvas menu button -->

              <div class="card  menu-account">
                <!-- Card header -->
                <div class="card-header border-bottom">
                  <h4 class="card-header-title">Toutes les réservations</h4>
                </div>

                <!-- Card body START -->
                <div class="card-body p-0">


                  <vs-tabs :color="colorx" alignment="fixed" class="mb-3" style="z-index: 2">

                    <!-- Résidence validé -->
                    <vs-tab label="En cours" icon="history" color="#000000">
                    <vs-col class="mt-2" v-tooltip="'col - 3'" vs-type="flex" vs-align="center" vs-w="12 ">
                      <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                        <div class="result-item-detail-m" style="padding: 0px 6px">
                          <div style="display: block" class="">
                            <el-row>
                              
                              <!-- Card item START -->
                              <div class="card mb-4" style=" box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;" v-for="item in dataEncours" :key="item.id_item">
                                <!-- Card header -->
                                <div class="p-4 align-items-center">
                                  <!-- Icon and Title -->
                                  <div class="d-flex align-items-center">
                                    <div class="icon-lg bg-light rounded-circle flex-shrink-0"><i class="fa-solid fa-home"></i></div>	
                                    <!-- Title -->
                                    <div class="ms-2">
                                      <h6 class="card-title mb-0">{{ item.libelle }}</h6>
                                      <ul class="nav nav-divider small d-grid">
                                        <li><b>Réf</b> : {{ item.reference }}</li>
                                        <li><b>Jour(s)</b> : {{ item.nbjour }}</li>
                                        <li><b>Total</b> : {{ (item.nbjour * item.tarif_jour) | formatThousands }} XOF</li>
                                        <li><b>Ristoune Sarezide</b> : {{ ((item.nbjour * item.tarif_jour)*0.1) | formatThousands }} XOF</li>
                                        
                                      </ul>
                                    </div>
                                  </div>
                                  <div class="d-flex align-items-center">
                                    <div class="icon-lg bg-light rounded-circle flex-shrink-0"><i class="fa-solid fa-calendar"></i></div>	
                                    <!-- Title -->
                                    <div class="ms-2">
                                      <ul class="nav nav-divider small d-grid">
                                        
                                        <li><b>Du</b> : 12 janvier 2023</li>
                                        <li><b>Au</b> : 12 janvier 2023</li>
                                      </ul>
                                    </div>
                                  </div>

                                  <!-- Button -->
                                  <vs-row>
                                    <vs-col style="padding: 5px" v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="4">
                                      <vs-button @click="ViewReservationShow(item)" color="primary" type="border" icon="visibility">Voir</vs-button>
                                    </vs-col>
                                    <vs-col style="padding: 5px" v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="4">
                                      <vs-button @click="ValideReservation(item.reference)" color="success" type="border" icon="done">Valider</vs-button>
                                    </vs-col>
                                    <vs-col style="padding: 5px" v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="4">
                                      <vs-button @click="AnnuleReservation(item.reference)" color="danger" type="border" icon="close">Annuler</vs-button>
                                    </vs-col>
                                  </vs-row>
                                  
                                </div>
                              </div>
                              <!-- Card item END -->

                              <!-- Condition lorsque l'utilisateur n'a pas de réservation  -->
                              <div class="empty mb-8" v-if="dataEncours == null">
                                <div class="d-flex justify-content-center mb-5">
                                  <img src="@/assets/images/element/desert.svg" alt="">
                                </div>
                                <div class="d-grid justify-content-center text-center">
                                  <H6>Vous n'avez pas de réservation en cours !</H6>
                                  <p class="text-wrap">Vos réservations en cours afficherons ici ?</p>
                                </div>
                              </div>
                                <!-- Fin condition lorsque l'utilisateur n'a pas de réservation  -->

                              <!-- Card item END -->
                            </el-row>
                          </div>
                        </div>
                      </vs-col>
                    </vs-col>
                    </vs-tab>

                    <!-- Résidence en cours de validité -->
                    <vs-tab label="Validée" icon="cancel" color="#000000">
                    <vs-col class="mt-2" v-tooltip="'col - 3'" vs-type="flex" vs-align="center" vs-w="12 ">
                      <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                        <div class="result-item-detail-m" style="padding: 0px 6px">
                          <div style="display: block" class="">
                            <el-row>
                            
                    <!-- Card item START -->
                            <div class="card mb-4" style=" box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;" v-for="item in dataValides" :key="item.id_item">
                              <!-- Card header -->
                              <div class="p-4 align-items-center">
                                <!-- Icon and Title -->
                                <div class="d-flex align-items-center">
                                  <div class="icon-lg bg-light rounded-circle flex-shrink-0"><i class="fa-solid fa-home"></i></div>	
                                  <!-- Title -->
                                  <div class="ms-2">
                                    <h6 class="card-title mb-0">{{ item.libelle }}</h6>
                                    <ul class="nav nav-divider small d-grid">
                                      <li><b>Réf</b> : {{ item.reference }}</li>
                                      <li><b>Jour(s)</b> : {{ item.nbjour }}</li>
                                      <li><b>Total</b> : {{ (item.nbjour * item.tarif_jour) | formatThousands }} XOF</li>
                                      <li><b>Ristoune Sarezide</b> : {{ ((item.nbjour * item.tarif_jour)*0.1) | formatThousands }} XOF</li>
                                      
                                    </ul>
                                  </div>
                                </div>
                                <div class="d-flex align-items-center">
                                  <div class="icon-lg bg-light rounded-circle flex-shrink-0"><i class="fa-solid fa-calendar"></i></div>	
                                  <!-- Title -->
                                  <div class="ms-2">
                                    <ul class="nav nav-divider small d-grid">
                                      
                                      <li><b>Du</b> : 12 janvier 2023</li>
                                      <li><b>Au</b> : 12 janvier 2023</li>
                                    </ul>
                                  </div>
                                </div>

                                <!-- Button -->
                                <vs-row>
                                  <vs-col style="padding: 5px" v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="4">
                                    <vs-button @click="ViewReservationShow(item)" color="primary" type="border" icon="visibility">Voir</vs-button>
                                  </vs-col>
                                  <vs-col style="padding: 5px" v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="4">
                                    <vs-button @click="AnnuleReservation(item.reference)" color="danger" type="border" icon="close">Annuler</vs-button>
                                  </vs-col>
                                </vs-row>
                                
                              </div>
                            </div>
                            <!-- Card item END -->

                            <!-- Condition lorsque l'utilisateur n'a pas de réservation  -->
                            <div class="empty mb-8" v-if="dataValides == null">
                              <div class="d-flex justify-content-center mb-5">
                                <img src="@/assets/images/element/desert.svg" alt="">
                              </div>
                              <div class="d-grid justify-content-center text-center">
                                <H6>Vous n'avez pas de réservation en validée !</H6>
                                <p class="text-wrap">Vos réservations en cours afficherons ici ?</p>
                              </div>
                            </div>
                                <!-- Fin condition lorsque l'utilisateur n'a pas de réservation  -->

                              <!-- Card item END -->
                            </el-row>
                          </div>
                        </div>
                      </vs-col>
                    </vs-col>
                    </vs-tab>

                    <!-- Tous les résidence -->
                    <vs-tab label="Annulée" icon="done_all">
                      <vs-col class="mt-2" v-tooltip="'col - 3'" vs-type="flex" vs-align="center" vs-w="12 ">
                      <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                        <div class="result-item-detail-m" style="padding: 0px 6px">
                          <div style="display: block" class="">
                            <el-row>

                            <!-- Card item START -->
                            <div class="card mb-4" style=" box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;" v-for="item in dataAnnules" :key="item.id_item">
                              <!-- Card header -->
                              <div class="p-4 align-items-center">
                                <!-- Icon and Title -->
                                <div class="d-flex align-items-center">
                                  <div class="icon-lg bg-light rounded-circle flex-shrink-0"><i class="fa-solid fa-home"></i></div>	
                                  <!-- Title -->
                                  <div class="ms-2">
                                    <h6 class="card-title mb-0">{{ item.libelle }}</h6>
                                    <ul class="nav nav-divider small d-grid">
                                      <li><b>Réf</b> : {{ item.reference }}</li>
                                      <li><b>Jour(s)</b> : {{ item.nbjour }}</li>
                                      <li><b>Total</b> : {{ (item.nbjour * item.tarif_jour) | formatThousands }} XOF</li>
                                      
                                    </ul>
                                  </div>
                                </div>
                                <div class="d-flex align-items-center">
                                  <div class="icon-lg bg-light rounded-circle flex-shrink-0"><i class="fa-solid fa-calendar"></i></div>	
                                  <!-- Title -->
                                  <div class="ms-2">
                                    <ul class="nav nav-divider small d-grid">
                                      
                                      <li><b>Du</b> : 12 janvier 2023</li>
                                      <li><b>Au</b> : 12 janvier 2023</li>
                                    </ul>
                                  </div>

                                
                                </div>

                                <!-- Button -->
                                <el-alert
                                style="margin-top: 5px"
                                  v-if="item.res_statut == 'Annule'"
                                  :closable="false"
                                  title="Annulée"
                                  type="error"
                                  :description="item.res_commentaire"
                                  show-icon>
                                </el-alert>
                                
                              </div>
                            </div>
                            <!-- Card item END -->

                            <!-- Condition lorsque l'utilisateur n'a pas de réservation  -->
                            <div class="empty mb-8" v-if="dataAnnules == null">
                              <div class="d-flex justify-content-center mb-5">
                                <img src="@/assets/images/element/desert.svg" alt="">
                              </div>
                              <div class="d-grid justify-content-center text-center">
                                <H6>Vous n'avez pas de réservation en annulée !</H6>
                                <p class="text-wrap">Vos réservations en cours afficherons ici ?</p>
                              </div>
                            </div>
                                <!-- Fin condition lorsque l'utilisateur n'a pas de réservation  -->

                              <!-- Card item END -->
                            </el-row>
                          </div>
                        </div>
                      </vs-col>
                    </vs-col>
                    </vs-tab>
                    </vs-tabs>
                </div>
                <!-- Card body END -->
              </div>
            </div>
            <!-- Main content END -->
          </div>
        </div>
      </section>
    </div>
    
    <el-dialog
      title="Réservation"
      :visible.sync="ViewReservation"
      width="95%"
      :before-close="handleClose">
      <div class="card shadow" style="margin: -8px">
        <el-carousel :interval="5000" arrow="always" >
            <el-carousel-item v-if="views.image1.length > 1">
                <img :src="views.image1" alt="Card image">
            </el-carousel-item>
            <el-carousel-item >
                <img :src="views.image2" alt="Card image">
            </el-carousel-item>
            <el-carousel-item >
                <img :src="views.image3" alt="Card image">
            </el-carousel-item>
            <el-carousel-item >
                <img :src="views.image4" alt="Card image">
            </el-carousel-item>
          </el-carousel>
          
    
      <!-- Image -->
      <!-- Card body -->
      <div class="card-body text-center p-4" style="margin-top: -40px">
        <!-- Title -->
        <!-- Second title -->
        <h5 class="text-primary mb-4">{{views.libelle}} / {{views.type_item}}</h5>
        <p>{{views.ville_item}} / {{views.commune_item}} / {{views.zone_item}}</p>
  
        <!-- List -->
        <div class="row justify-content-between text-start mb-4">
          <div class="col-lg-5">
            <ul class="list-group list-group-borderless">
              <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                <span class="mb-0"><i class="bi bi-vr fa-fw me-2"></i>Réf : </span>
                <span class="h6 fw-normal mb-0" style="color: blue;font-weight: bold">{{views.reference}}</span>
              </li>
              
            </ul>
          </div>
  
          <div class="col-lg-5">
            <ul class="list-group list-group-borderless">
              <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                <span class="mb-0"><i class="bi bi-calendar fa-fw me-2"></i>Du: </span>
                <span class="h6 fw-normal mb-0">{{views.du.split('-').reverse().join('-')}}</span>
              </li>
              <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                <span class="mb-0"><i class="bi bi-calendar fa-fw me-2"></i>Au: </span>
                <span class="h6 fw-normal mb-0">{{views.au.split('-').reverse().join('-')}}</span>
              </li>
              <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                <span class="mb-0"><i class="bi bi-calendar-day fa-fw me-2"></i>Nb Jour : </span>
                <span class="h6 fw-normal mb-0">{{views.nbjour}} jour(s)</span>
              </li>
              <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                <span class="mb-0"><i class="bi bi-cash fa-fw me-2"></i>Total : </span>
                <span class="h6 fw-normal mb-0">{{ formatPrice(views.tarif_jour * views.nbjour)}}</span>
              </li>
            </ul>
          </div>
          <vs-divider/>
          <div class="col-lg-5">
            <ul class="list-group list-group-borderless">
              <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                <span class="mb-0"><i class="bi bi-person fa-fw me-2"></i></span>
                <span class="h6 fw-normal mb-0"> {{views.nom}} {{views.prenom}}</span>
              </li>
              <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                <span class="mb-0"><i class="bi bi-envelope-fill fa-fw me-2"></i></span>
                <span class="h6 fw-normal mb-0"> {{views.email}}</span>
              </li>
              <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                <span class="mb-0"><i class="bi bi-phone fa-fw me-2"></i></span>
                <span class="h6 fw-normal mb-0"><a :href="'tel:' + views.contact" @click.prevent="appelTelephone"> {{views.contact}} </a></span>
              </li>
            </ul>
          </div>
        </div>

        
        
        <!-- Button -->
        <div class="d-sm-flex justify-content-sm-end d-grid">
          <!-- Share button with dropdown -->
          <!-- Download button -->
          <a href="#" class="btn btn-primary mb-0" @click="ViewReservation = false">Fermer</a>
        </div>
      </div>
    </div>
    </el-dialog>

    <vs-prompt
      title="Confirmation"
      @accept="ConfirmValide"
      color="success"
      accept-text="Accepter"
      @close="close"
      :active.sync="activePrompt">
       <div class="con-exemple-prompt">
        <h3>Cher Partenaire</h3>
        <p style="text-align: justify">En validant cette réservation, vous vous engagez à préparer la résidence pour la période spécifiée. Nous comptons sur votre diligence pour assurer que tout soit prêt à l'arrivée du client. Si vous avez des questions ou des préoccupations, n'hésitez pas à nous contacter.</p>
       </div>
     </vs-prompt>

     <vs-prompt
      title="Annulation"
      color="warning"
      @accept="ConfirmAnnule"
      accept-text="Annuler"
      @close="close"
      :active.sync="annulePrompt">
       <div class="con-exemple-prompt">
        <h3>Cher Partenaire</h3>
        <p style="text-align: justify">Nous vous serions reconnaissants de bien vouloir nous fournir un motif d'annulation si vous choisissez d'annuler. Cette information nous aide à améliorer nos services et à mieux comprendre les besoins de nos partenaires.</p>
        <vs-textarea label="Motif d'annulation" v-model="Motif" />
      </div>
     </vs-prompt>

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
      return this.$store.state.users;
        }
      },
    data() {
      return {
        Motif: '',
        activePrompt: false,
        annulePrompt: false,
        colorx: "#050A30",
        views: {
        "id": 24,
        "reference": "24042822521743",
        "nom": "SAKONE",
        "prenom": "Oumar",
        "contact": "0153676062",
        "email": "oumarsakone75@gmail.com",
        "du": "2024-05-03",
        "au": "2024-05-07",
        "nbjour": "4",
        "avance": "5000",
        "residence": "291",
        "paiement": "",
        "nbper": "0",
        "nbenf": "Non",
        "taxi": "Non",
        "pays": "Ivory Coast",
        "statut": "active",
        "dte": "2024-04-28 22:52:17",
        "id_item": 291,
        "libelle": "Villa meublé 5 pièces",
        "type_item": "PLUS",
        "nm_prop_item": "SAKONE",
        "pren_prop_item": "OUMAR",
        "cnt_prop_item": "0153676062",
        "eml_prop_item": "SAKONE",
        "adresse_item": "SAKONE",
        "ville_item": "Abidjan",
        "commune_item": "Marcory",
        "quartier_item": "zone 4",
        "zone_item": "Marcory",
        "contact_item": "0704224084",
        "apt_item": "PLUS",
        "nb_apt_item": "SAKON",
        "nb_chb_item": "4",
        "chb_1_nb_lit": "",
        "chb_1_lit": "",
        "chb_1_nb_personne": "",
        "chb_2_nb_lit": "",
        "chb_2_lit": "",
        "chb_2_nb_personne": "",
        "chb_3_nb_lit": "",
        "chb_3_lit": "",
        "chb_3_nb_personne": "",
        "chb_4_nb_lit": "",
        "chb_4_lit": "",
        "chb_4_nb_personne": "",
        "chb_5_nb_lit": "",
        "chb_5_lit": "",
        "chb_5_nb_personne": "",
        "nb_sal_item": "",
        "nb_sb_item": "",
        "tarif_jour": "300000",
        "horaire_jour_entre": "12:00",
        "horaire_jour_sorti": "12:00",
        "tarif_journee": "",
        "tarif_nuit": "",
        "nb_jour_reduction": "",
        "tarif_jour_reduction": "",
        "description": "<p>RÉSIDENCE MEUBLÉE UNE BELLE VILLA HAUT STANDING DE 05 PIÈCES (4 CHAMBRES SALON) SITUÉ EN <a href=\"https://www.facebook.com/hashtag/zone4?__eep__=6&amp;__cft__[0]=AZVkiiUX13WXzx66SSHmFS-dA8Mu75Wfd76Z7fNcpC3vTTGn8m-SibOACYfdMmkNzhXZHX9EWLpfoRHIlHr18QZSBDrfdlUJt5o6nND9_VV5gFeLlAsCGCPjlCWSGKcbNh__rZbObBXUTlA72CCSpdAoRGT-T60nGLLgnM3BA-QXm_z8_tAlqHaLg7dW-OJFgg0&amp;__tn__=*NK-R\" rel=\"noopener noreferrer\" target=\"_blank\">ZONE4</a> POUR VOS MOMENTS DE CONVIVIALITÉ EN FAMILE, LES COURTS ET LONG SEJOUR LA VILLA COMPORTE :</p><p>UN GRAND SALON</p><p>UNE CUISINE AMÉRICAINE</p><p>UN GRAND JARDIN</p><p>UNE GRANDE PISCINE</p><p>UN SERVICE DE NETTOYAGE</p><p>DES CAMERAS DE SURVEILLANCE</p><p>SERVICE DE SÉCURITÉ</p><p>CLIMATISATION DANS CHAQUE PIÈCES</p><p>UNE BELLE VUE</p><p>Un GARAGE DE 5 VOITURES</p><p>FACILE D'ACCÈS</p>",
        "eqpm_parking": "true",
        "tarif_parking": "",
        "eqpm_petit_dej": "false",
        "peti_dej_1": "",
        "peti_dej_2": "",
        "peti_dej_3": "",
        "eqpm_langue1": "",
        "eqpm_langue2": "",
        "eqpm_langue3": "",
        "eqpm_evenement": "",
        "event_anniversaire": "",
        "event_mariage": "",
        "event_bapteme": "",
        "event_tournage": "",
        "event_festivite": "",
        "eqpm_climatisation": "true",
        "eqpm_piscine_pb": "true",
        "eqpm_piscine_pv": "true",
        "eqpm_seche_linge": "false",
        "eqpm_armoire": "",
        "eqpm_moquette": "",
        "eqpm_dressing": "",
        "eqpm_ventilateur": "true",
        "eqpm_chauffage": "",
        "eqpm_fer_repasse": "",
        "eqpm_mt_repasse": "",
        "eqpm_moustiquaire": "",
        "eqpm_canape_chambre": "",
        "eqpm_balcon": "undef",
        "eqpm_lave_linge": "",
        "eqpm_bureau": "",
        "eqpm_bar": "",
        "eqpm_baignoire": "false",
        "eqpm_peignoire": "",
        "eqpm_jacuzzi": "",
        "eqpm_sauna": "",
        "eqpm_seche_cheveu": "",
        "eqpm_papier_toilette": "",
        "eqpm_ordinateur": "",
        "eqpm_lecteur_dvd": "",
        "eqpm_telephone": "",
        "eqpm_internet": "true",
        "eqpm_fax": "",
        "eqpm_chaine_sat": "",
        "eqpm_tv": "true",
        "eqpm_table_mange": "",
        "eqpm_ustensile": "",
        "eqpm_machine_cafe": "",
        "eqpm_barbecue": "",
        "eqpm_four": "",
        "eqpm_lave_vaiselle": "",
        "eqpm_micro_ondes": "true",
        "eqpm_kitchenette": "",
        "eqpm_bouilloir_electrique": "",
        "eqpm_refrigerateur": "true",
        "eqpm_vue_ville": "",
        "eqpm_vue_piscine": "",
        "eqpm_vue_riviere": "",
        "eqpm_vue_mer": "",
        "eqpm_jardin": "",
        "eqpm_terasse": "",
        "eqpm_vue_lac": "",
        "eqpm_jeux_puzzles": "",
        "eqpm_livres": "",
        "agent_securite": "true",
        "video_surveillance": "",
        "capteur_presence": "",
        "antivol": "",
        "barbele": "",
        "localisation_longitude": "",
        "localisation_latitude": "",
        "image1": "http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1670320063/202211694920933.jpg",
        "image2": "http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1670320077/2022116949648.jpg",
        "image3": "http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1670320098/20221169507259.jpg",
        "image4": "http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1670320113/20221169509321.jpg",
        "image5": "",
        "image6": "",
        "image7": "",
        "image8": "",
        "user": "83",
        "date_item": "2024-03-24 00:00:00",
        "autorisation": "activ",
        "autoriseur": "",
        "commentaire": ""
      },
        ViewReservation: false,
        datas: [],
        dataEncours: [],
        dataValides: [],
        dataAnnules: [],
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
        choix: 0,
        activeConfirm:false,
        email: 'oumarsakone75@gmail.com',
        form: {
            etat: '',
            reservation: '',
            email: '',
            annule: ''
        }
      }
    },
    methods: {

      Back() {
                this.$router.back()
            },

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

      ConfirmValide() {
                this.form.etat = 'Valide';
                this.form.annule = '';
                this.form.reservation = this.choix;
                this.$vs.loading();

                // Envoyer la requête au serveur
                this.$axios.post('/validation_reservation_agent.php', this.form)
                .then(response => {
                    // Traitement de la réponse du serveur
                    this.getReservations();
                    console.log(response);
                    this.$vs.loading.close()
                })
                .catch(error => {
                    // Gestion des erreurs
                    console.error(error);
                    this.$vs.loading.close()
                });
            },
        
            ConfirmAnnule() {
                this.form.etat = 'Annule';
                this.form.annule = this.Motif;
                this.form.reservation = this.choix;
                this.$vs.loading();

                // Envoyer la requête au serveur
                this.$axios.post('/validation_reservation_agent.php', this.form)
                .then(response => {
                    // Traitement de la réponse du serveur
                    this.getReservations();
                    console.log(response);
                    this.$vs.loading.close()
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

          ValideReservation(item){
            this.activePrompt = true;
            this.choix = item;
          },

          AnnuleReservation(item){
            this.annulePrompt = true;
            this.choix = item;
          },

          ViewReservationShow(item) {
            
            this.ViewReservation = true;
            this.views = item;
          },

          formatPrice(value) {
          var formatter = new Intl.NumberFormat('xof', {
              style: 'currency',
              currency: 'XOF',
              minimumFractionDigits: 0
          });
          return formatter.format(value);
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

        getReservations() {
          const user = encryptData(this.users.id);
          this.$axios.get('/admin_reservation_all.php?user=' + user)
            .then(response => {
              // Traitement de la réponse du serveur
              this.datas = response.data;
              this.dataEncours = this.datas.encours;
              this.dataValides = this.datas.valide;
              this.dataAnnules = this.datas.annule;
              console.log(this.dataEncours)
              this.$vs.loading.close();
            })
            .catch(error => {
              // Gestion des erreurs
              console.error(error);
              this.$vs.loading.close();
            });
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
    filters: {
        formatThousands(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
    },
    mounted() {
      this.getReservations();
    },
  }
  </script>
  