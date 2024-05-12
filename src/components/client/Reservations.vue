<template>
  <div class="home">
    <!-- =======================
  Main banner START -->
    <div v-if="isMobile">
      <div>
        <div
          class="d-flex align-items-center dash-header mt-2 border-bottom bg-white"
        >
          <span class="edit-icon ms-3 my-2" @click="Back">
            <i class="fa-solid fa-arrow-left text-black"></i>
          </span>
          <span style="flex: auto" class="">
            <h6 style="font-size: 16px" class="mb-0 text-center">
              Mes réservations
            </h6>
          </span>
        </div>

        <vs-tabs
          :color="colorx"
          alignment="fixed"
          class="mb-3"
          style="z-index: 2"
          >
            <!-- Résidence validé -->
            <vs-tab label="En cours" icon="history" color="#000000">
              <vs-col
                class="mt-2"
                v-tooltip="'col - 3'"
                vs-type="flex"
                vs-align="center"
                vs-w="12 "
              >
                <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                  <div class="result-item-detail-m" style="padding: 0px 6px">
                    <div style="display: block" class="">
                      <el-row>
                        <!-- Card item START -->
                        <div v-for="items in dataEncours" :key="items.reference"
                          class="card mb-4"
                          style="box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px"
                        >
                          <!-- Card header -->
                          <div class="p-4 align-items-center">
                            <!-- Icon and Title -->
                            <div class="d-flex align-items-center">
                              <div
                                class="rounded-circle flex-shrink-0 ms-2"
                              >
                                <img :src="items.image1" width="100" style="border-radius: 10px">
                              </div>
                              <!-- Title -->
                              <div class="ms-2">
                                <h6 class="card-title mb-0">{{items.libelle}}</h6>
                                <ul class="nav nav-divider small d-grid">
                                  <li>REF réservation: <br><em style="color: gray;">{{items.reference}}</em></li>
                                  <li>Date de la réservation: <br><em style="color: gray;">{{formattedDate(items.dte)}}</em></li>
                                </ul>
                              </div>
                            </div>

                            <!-- Button -->
                            <div
                              class="mt-2 mb-2 d-flex justify-content-between align-items-center"
                            >
                              <div
                                class="col-sm-6 col-md-4 d-flex justify-content-between"
                              >
                                <span style="font-size: 12px">Status:</span>
                                <h6 class="mb-0 text-warning ms-2" style="font-size: 12px">
                                  En cours de validation
                                </h6>
                              </div>
                              <em @click="GoToDetails(items)" class="" style="color: blue; text-align: underline"
                                ><i class="fa-solid fa-eye me-1"></i> Voir</em>
                            </div>
                            <div class="row g-3">
                              <div
                                class="col-md-4 d-flex justify-content-between align-items-center"
                              >
                                <span style="font-size: 12px">Date de rentrée:</span>
                                <h6 class="mb-0" style="font-size: 12px">{{formattedDate2(items.du)}} 12:00</h6>
                              </div>

                              <div v-if="items.du != items.au"
                                class="col-md-4 d-flex justify-content-between align-items-center"
                              >
                                <span style="font-size: 12px">Date de sortie:</span>
                                <h6 class="mb-0" style="font-size: 12px">{{formattedDate2(items.au)}} 11:00</h6>
                              </div>

                              <div
                                class="col-md-4 d-flex justify-content-between align-items-center"
                              >
                                <span style="font-size: 12px">Réservé par:</span>
                                <h6 class="mb-0" style="font-size: 12px">{{items.nom}} {{items.prenom}}</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- Card item END -->

                        <!-- Condition lorsque l'utilisateur n'a pas de réservation  -->
                        <div class="empty mb-8" v-if="dataEncours == 0">
                          <div class="d-flex justify-content-center mb-5">
                            <img
                              src="@/assets/images/element/desert.svg"
                              alt=""
                            />
                          </div>
                          <div class="d-grid justify-content-center text-center">
                            <H6>Vous n'avez pas de réservation en cours !</H6>
                            <p class="text-wrap">
                              Vos réservations en cours afficherons ici ?
                            </p>
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
            <vs-tab label="Annulée" icon="cancel" color="#000000">
              <vs-col
                class="mt-2"
                v-tooltip="'col - 3'"
                vs-type="flex"
                vs-align="center"
                vs-w="12 "
              >
                <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                  <div class="result-item-detail-m" style="padding: 0px 6px">
                    <div style="display: block" class="">
                      <el-row>
                        <!-- Card item START -->
                        <div v-for="items in dataAnnule" :key="items.reference"
                          class="card mb-4"
                          style="box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px"
                        >
                          <!-- Card header -->
                          <div class="p-4 align-items-center">
                            <!-- Icon and Title -->
                            <div class="d-flex align-items-center">
                              <div
                                class="rounded-circle flex-shrink-0 ms-2"
                              >
                                <img :src="items.image1" width="100" style="border-radius: 10px">
                              </div>
                              <!-- Title -->
                              <div class="ms-2">
                                <h6 class="card-title mb-0">{{items.libelle}}</h6>
                                <ul class="nav nav-divider small d-grid">
                                  <li>REF réservation: <br><em style="color: gray;">{{items.reference}}</em></li>
                                  <li>Date de la réservation: <br><em style="color: gray;">{{formattedDate(items.dte)}}</em></li>
                                </ul>
                              </div>
                            </div>

                            <!-- Button -->
                            <div
                              class="mt-2 mb-2 d-flex justify-content-between align-items-center"
                            >
                              <div
                                class="col-sm-6 col-md-4 d-flex justify-content-between"
                              >
                                <span style="font-size: 12px">Status:</span>
                                <h6 class="mb-0 text-danger ms-2" style="font-size: 12px">Annulée</h6>
                              </div>
                              <em @click="GoToDetails(items)" class="" style="color: blue; text-align: underline"
                                ><i class="fa-solid fa-eye me-1"></i> Voir</em>
                            </div>
                            <div class="row g-3">
                              <div
                                class="col-md-4 d-flex justify-content-between align-items-center"
                              >
                                <span style="font-size: 12px">Date de rentrée:</span>
                                <h6 class="mb-0" style="font-size: 12px">{{formattedDate2(items.du)}} 12:00</h6>
                              </div>

                              <div v-if="items.du != items.au"
                                class="col-md-4 d-flex justify-content-between align-items-center"
                              >
                                <span style="font-size: 12px">Date de sortie:</span>
                                <h6 class="mb-0" style="font-size: 12px">{{formattedDate2(items.au)}} 11:00</h6>
                              </div>

                              <div
                                class="col-md-4 d-flex justify-content-between align-items-center"
                              >
                                <span style="font-size: 12px">Réservé par:</span>
                                <h6 class="mb-0" style="font-size: 12px">{{items.nom}} {{items.prenom}}</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <!-- Card item END -->

                        <!-- Condition lorsque l'utilisateur n'a pas de réservation  -->
                        <div class="empty mb-8" v-if="dataAnnule == 0">
                          <div class="d-flex justify-content-center mb-5">
                            <img
                              src="@/assets/images/element/desert.svg"
                              alt=""
                            />
                          </div>
                          <div class="d-grid justify-content-center text-center">
                            <H6>Vous n'avez pas de réservation annulée !</H6>
                            <p class="text-wrap">
                              Vos réservations annulée afficherons ici
                            </p>
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
            <vs-tab label="Validée" icon="done_all">
              <vs-col
                class="mt-2"
                v-tooltip="'col - 3'"
                vs-type="flex"
                vs-align="center"
                vs-w="12 "
              >
                <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                  <div class="result-item-detail-m" style="padding: 0px 6px">
                    <div style="display: block" class="">
                      <el-row>
                        <!-- Card item START -->
                        <div v-for="items in dataValide" :key="items.reference"
                        class="card mb-4"
                        style="box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px"
                      >
                        <!-- Card header -->
                        <div class="p-4 align-items-center">
                          <!-- Icon and Title -->
                          <div class="d-flex align-items-center">
                            <div
                              class="rounded-circle flex-shrink-0 ms-2"
                            >
                              <img :src="items.image1" width="100" style="border-radius: 10px">
                            </div>
                            <!-- Title -->
                            <div class="ms-2">
                              <h6 class="card-title mb-0">{{items.libelle}}</h6>
                              <ul class="nav nav-divider small d-grid">
                                <li>REF réservation: <br><em style="color: gray;">{{items.reference}}</em></li>
                                <li>Date de la réservation: <br><em style="color: gray;">{{formattedDate(items.dte)}}</em></li>
                              </ul>
                            </div>
                          </div>

                          <!-- Button -->
                          <div
                            class="mt-2 mb-2 d-flex justify-content-between align-items-center"
                          >
                            <div
                              class="col-sm-6 col-md-4 d-flex justify-content-between"
                            >
                              <span style="font-size: 12px">Status:</span>
                              <h6 class="mb-0 text-success ms-2" style="font-size: 12px">Validée</h6>
                            </div>
                            <em @click="GoToDetails(items)" class="" style="color: blue; text-align: underline"
                              ><i class="fa-solid fa-eye me-1"></i> Voir</em>
                          </div>
                          <div class="row g-3">
                            <div
                              class="col-md-4 d-flex justify-content-between align-items-center"
                            >
                              <span style="font-size: 12px">Date de rentrée:</span>
                              <h6 class="mb-0" style="font-size: 12px">{{formattedDate2(items.du)}} 12:00</h6>
                            </div>

                            <div v-if="items.du != items.au"
                              class="col-md-4 d-flex justify-content-between align-items-center"
                            >
                              <span style="font-size: 12px">Date de sortie:</span>
                              <h6 class="mb-0" style="font-size: 12px">{{formattedDate2(items.au)}} 11:00</h6>
                            </div>

                            <div
                              class="col-md-4 d-flex justify-content-between align-items-center"
                            >
                              <span style="font-size: 12px">Réservé par:</span>
                              <h6 class="mb-0" style="font-size: 12px">{{items.nom}} {{items.prenom}}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                        <!-- Card item END -->

                        <!-- Condition lorsque l'utilisateur n'a pas de réservation  -->
                        <div class="empty mb-8" v-if="dataValide == 0">
                          <div class="d-flex justify-content-center mb-5">
                            <img
                              src="@/assets/images/element/desert.svg"
                              alt=""
                            />
                          </div>
                          <div class="d-grid justify-content-center text-center">
                            <H6
                              >Vous n'avez pas encore effectué de réservation
                              !</H6
                            >
                            <p class="text-wrap">
                              Pourquoi ne pas réserver dès maintenant pour vivre
                              une expérience inoubliable ?
                            </p>
                            <vs-button
                              to="/"
                              style="background: #348ddb !important"
                              class="fw-semibold"
                              >Rechercher les meilleurs établissements</vs-button
                            >
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
                <div class="card-header bg-transparent border-bottom">
                  <h4 class="card-header-title">Mes réservations</h4>
                </div>

                <!-- Card body START -->
                <div class="card-body p-0">
                  <!-- Tabs -->
              
                  <vs-tabs
                    :color="colorx"
                    alignment="fixed"
                    class="mb-3"
                    style="z-index: 2"
                    >
                      <!-- Résidence validé -->
                      <vs-tab label="Réservation en cours" icon="history" color="#000000">
                        <vs-col
                          class="mt-2"
                          v-tooltip="'col - 3'"
                          vs-type="flex"
                          vs-align="center"
                          vs-w="12 "
                        >
                          <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                            <div class="result-item-detail-m" style="padding: 0px 6px">
                              <div style="display: block" class="">
                                <el-row>
                                  <!-- Card item START -->
                                  <div v-for="items in dataEncours" :key="items.reference"
                                    class="card mb-4"
                                    style="box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px"
                                  >
                                    <!-- Card header -->
                                    <div class="p-4 align-items-center">
                                      <!-- Icon and Title -->
                                      <div class="d-flex align-items-center">
                                        <div
                                          class="rounded-circle flex-shrink-0 ms-2"
                                        >
                                          <img :src="items.image1" width="100" style="border-radius: 10px">
                                        </div>
                                        <!-- Title -->
                                        <div class="ms-2">
                                          <h6 class="card-title mb-0">{{items.libelle}}</h6>
                                          <ul class="nav nav-divider small d-grid">
                                            <li>REF réservation: <br><em style="color: gray;">{{items.reference}}</em></li>
                                            <li>Date de la réservation: <br><em style="color: gray;">{{formattedDate(items.dte)}}</em></li>
                                          </ul>
                                        </div>
                                      </div>

                                      <!-- Button -->
                                      <div
                                        class="mt-2 mb-2 d-flex justify-content-between align-items-center"
                                      >
                                        <div
                                          class="col-sm-6 col-md-4 d-flex justify-content-between"
                                        >
                                          <span style="font-size: 12px">Status:</span>
                                          <h6 class="mb-0 text-warning ms-2" style="font-size: 12px">
                                            En cours de validation
                                          </h6>
                                        </div>
                                        <em @click="GoToDetails(items)" class="" style="color: blue; text-align: underline"
                                          ><i class="fa-solid fa-eye me-1"></i> Voir</em>
                                      </div>
                                      <div class="row g-3">
                                        <div
                                          class="col-md-4 d-flex justify-content-between align-items-center"
                                        >
                                          <span style="font-size: 12px">Date de rentrée:</span>
                                          <h6 class="mb-0" style="font-size: 12px">{{formattedDate2(items.du)}} 12:00</h6>
                                        </div>

                                        <div v-if="items.du != items.au"
                                          class="col-md-4 d-flex justify-content-between align-items-center"
                                        >
                                          <span style="font-size: 12px">Date de sortie:</span>
                                          <h6 class="mb-0" style="font-size: 12px">{{formattedDate2(items.au)}} 11:00</h6>
                                        </div>

                                        <div
                                          class="col-md-4 d-flex justify-content-between align-items-center"
                                        >
                                          <span style="font-size: 12px">Réservé par:</span>
                                          <h6 class="mb-0" style="font-size: 12px">{{items.nom}} {{items.prenom}}</h6>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <!-- Card item END -->

                                  <!-- Condition lorsque l'utilisateur n'a pas de réservation  -->
                                  <div class="empty mb-8" v-if="dataEncours == 0">
                                    <div class="d-flex justify-content-center mb-5">
                                      <img
                                        src="@/assets/images/element/desert.svg"
                                        alt=""
                                      />
                                    </div>
                                    <div class="d-grid justify-content-center text-center">
                                      <H6>Vous n'avez pas de réservation en cours !</H6>
                                      <p class="text-wrap">
                                        Vos réservations en cours afficherons ici. 
                                      </p>
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

                      <vs-tab label="Réservation acceptée" icon="done_all">
                        <vs-col
                          class="mt-2"
                          v-tooltip="'col - 3'"
                          vs-type="flex"
                          vs-align="center"
                          vs-w="12 "
                        >
                          <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                            <div class="result-item-detail-m" style="padding: 0px 6px">
                              <div style="display: block" class="">
                                <el-row>
                                  <!-- Card item START -->
                                  <div v-for="items in dataValide" :key="items.reference"
                                  class="card mb-4"
                                  style="box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px"
                                >
                                  <!-- Card header -->
                                  <div class="p-4 align-items-center">
                                    <!-- Icon and Title -->
                                    <div class="d-flex align-items-center">
                                      <div
                                        class="rounded-circle flex-shrink-0 ms-2"
                                      >
                                        <img :src="items.image1" width="100" style="border-radius: 10px">
                                      </div>
                                      <!-- Title -->
                                      <div class="ms-2">
                                        <h6 class="card-title mb-0">{{items.libelle}}</h6>
                                        <ul class="nav nav-divider small d-grid">
                                          <li>REF réservation: <br><em style="color: gray;">{{items.reference}}</em></li>
                                          <li>Date de la réservation: <br><em style="color: gray;">{{formattedDate(items.dte)}}</em></li>
                                        </ul>
                                      </div>
                                    </div>

                                    <!-- Button -->
                                    <div
                                      class="mt-2 mb-2 d-flex justify-content-between align-items-center"
                                    >
                                      <div
                                        class="col-sm-6 col-md-4 d-flex justify-content-between"
                                      >
                                        <span style="font-size: 12px">Status:</span>
                                        <h6 class="mb-0 text-success ms-2" style="font-size: 12px">Validée</h6>
                                      </div>
                                      <em @click="GoToDetails(items)" class="" style="color: blue; text-align: underline"
                                        ><i class="fa-solid fa-eye me-1"></i> Gérer la réservation</em>
                                    </div>
                                    <div class="row g-3">
                                      <div
                                        class="col-md-4 d-flex justify-content-between align-items-center"
                                      >
                                        <span style="font-size: 12px">Date de rentrée:</span>
                                        <h6 class="mb-0" style="font-size: 12px">{{formattedDate2(items.du)}} 12:00</h6>
                                      </div>

                                      <div v-if="items.du != items.au"
                                        class="col-md-4 d-flex justify-content-between align-items-center"
                                      >
                                        <span style="font-size: 12px">Date de sortie:</span>
                                        <h6 class="mb-0" style="font-size: 12px">{{formattedDate2(items.au)}} 11:00</h6>
                                      </div>

                                      <div
                                        class="col-md-4 d-flex justify-content-between align-items-center"
                                      >
                                        <span style="font-size: 12px">Réservé par:</span>
                                        <h6 class="mb-0" style="font-size: 12px">{{items.nom}} {{items.prenom}}</h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                  <!-- Card item END -->

                                  <!-- Condition lorsque l'utilisateur n'a pas de réservation  -->
                                  <div class="empty mb-8" v-if="dataValide == null">
                                    <div class="d-flex justify-content-center mb-5">
                                      <img
                                        src="@/assets/images/element/desert.svg"
                                        alt=""
                                      />
                                    </div>
                                    <div class="d-grid justify-content-center text-center">
                                      <H6
                                        >Vous n'avez pas de réservation acceptée !</H6
                                      >
                                      <p class="text-wrap">
                                        Vos réservations acceptée afficherons ici
                                      </p>
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
                      <vs-tab label="Réservation annulée" icon="cancel" color="#000000">
                        <vs-col
                          class="mt-2"
                          v-tooltip="'col - 3'"
                          vs-type="flex"
                          vs-align="center"
                          vs-w="12 "
                        >
                          <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                            <div class="result-item-detail-m" style="padding: 0px 6px">
                              <div style="display: block" class="">
                                <el-row>
                                  <!-- Card item START -->
                                  <div v-for="items in dataAnnule" :key="items.reference"
                                    class="card mb-4"
                                    style="box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px"
                                  >
                                    <!-- Card header -->
                                    <div class="p-4 align-items-center">
                                      <!-- Icon and Title -->
                                      <div class="d-flex align-items-center">
                                        <div
                                          class="rounded-circle flex-shrink-0 ms-2"
                                        >
                                          <img :src="items.image1" width="100" style="border-radius: 10px">
                                        </div>
                                        <!-- Title -->
                                        <div class="ms-2">
                                          <h6 class="card-title mb-0">{{items.libelle}}</h6>
                                          <ul class="nav nav-divider small d-grid">
                                            <li>REF réservation: <br><em style="color: gray;">{{items.reference}}</em></li>
                                            <li>Date de la réservation: <br><em style="color: gray;">{{formattedDate(items.dte)}}</em></li>
                                          </ul>
                                        </div>
                                      </div>

                                      <!-- Button -->
                                      <div
                                        class="mt-2 mb-2 d-flex justify-content-between align-items-center"
                                      >
                                        <div
                                          class="col-sm-6 col-md-4 d-flex justify-content-between"
                                        >
                                          <span style="font-size: 12px">Status:</span>
                                          <h6 class="mb-0 text-danger ms-2" style="font-size: 12px">Annulée</h6>
                                        </div>
                                        <em @click="GoToDetails(items)" class="" style="color: blue; text-align: underline"
                                          ><i class="fa-solid fa-eye me-1"></i> Voir</em>
                                      </div>
                                      <div class="row g-3">
                                        <div
                                          class="col-md-4 d-flex justify-content-between align-items-center"
                                        >
                                          <span style="font-size: 12px">Date de rentrée:</span>
                                          <h6 class="mb-0" style="font-size: 12px">{{formattedDate2(items.du)}} 12:00</h6>
                                        </div>

                                        <div v-if="items.du != items.au"
                                          class="col-md-4 d-flex justify-content-between align-items-center"
                                        >
                                          <span style="font-size: 12px">Date de sortie:</span>
                                          <h6 class="mb-0" style="font-size: 12px">{{formattedDate2(items.au)}} 11:00</h6>
                                        </div>

                                        <div
                                          class="col-md-4 d-flex justify-content-between align-items-center"
                                        >
                                          <span style="font-size: 12px">Réservé par:</span>
                                          <h6 class="mb-0" style="font-size: 12px">{{items.nom}} {{items.prenom}}</h6>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <!-- Card item END -->

                                  <!-- Condition lorsque l'utilisateur n'a pas de réservation  -->
                                  <div class="empty mb-8" v-if="dataAnnule == null">
                                    <div class="d-flex justify-content-center mb-5">
                                      <img
                                        src="@/assets/images/element/desert.svg"
                                        alt=""
                                      />
                                    </div>
                                    <div class="d-grid justify-content-center text-center">
                                      <H6>Vous n'avez pas de réservation annulée !</H6>
                                      <p class="text-wrap">
                                        Vos réservations annulée afficherons ici
                                      </p>
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
                        <vs-tab label="Réservation terminée" icon="assignment_turned_in" color="#000000">
                        <vs-col
                          class="mt-2"
                          v-tooltip="'col - 3'"
                          vs-type="flex"
                          vs-align="center"
                          vs-w="12 "
                        >
                          <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                            <div class="result-item-detail-m" style="padding: 0px 6px">
                              <div style="display: block" class="">
                                <el-row>
                                  <!-- Card item START -->
                                  <div v-for="items in dataAnnule" :key="items.reference"
                                    class="card mb-4"
                                    style="box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px"
                                  >
                                    <!-- Card header -->
                                    <div class="p-4 align-items-center">
                                      <!-- Icon and Title -->
                                      <div class="d-flex align-items-center">
                                        <div
                                          class="rounded-circle flex-shrink-0 ms-2"
                                        >
                                          <img :src="items.image1" width="100" style="border-radius: 10px">
                                        </div>
                                        <!-- Title -->
                                        <div class="ms-2">
                                          <h6 class="card-title mb-0">{{items.libelle}}</h6>
                                          <ul class="nav nav-divider small d-grid">
                                            <li>REF réservation: <br><em style="color: gray;">{{items.reference}}</em></li>
                                            <li>Date de la réservation: <br><em style="color: gray;">{{formattedDate(items.dte)}}</em></li>
                                          </ul>
                                        </div>
                                      </div>

                                      <!-- Button -->
                                      <div
                                        class="mt-2 mb-2 d-flex justify-content-between align-items-center"
                                      >
                                        <div
                                          class="col-sm-6 col-md-4 d-flex justify-content-between"
                                        >
                                          <span style="font-size: 12px">Status:</span>
                                          <h6 class="mb-0 text-danger ms-2" style="font-size: 12px">Annulée</h6>
                                        </div>
                                        <em @click="GoToDetails(items)" class="" style="color: blue; text-align: underline"
                                          ><i class="fa-solid fa-eye me-1"></i> Voir</em>
                                      </div>
                                      <div class="row g-3">
                                        <div
                                          class="col-md-4 d-flex justify-content-between align-items-center"
                                        >
                                          <span style="font-size: 12px">Date de rentrée:</span>
                                          <h6 class="mb-0" style="font-size: 12px">{{formattedDate2(items.du)}} 12:00</h6>
                                        </div>

                                        <div v-if="items.du != items.au"
                                          class="col-md-4 d-flex justify-content-between align-items-center"
                                        >
                                          <span style="font-size: 12px">Date de sortie:</span>
                                          <h6 class="mb-0" style="font-size: 12px">{{formattedDate2(items.au)}} 11:00</h6>
                                        </div>

                                        <div
                                          class="col-md-4 d-flex justify-content-between align-items-center"
                                        >
                                          <span style="font-size: 12px">Réservé par:</span>
                                          <h6 class="mb-0" style="font-size: 12px">{{items.nom}} {{items.prenom}}</h6>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <!-- Card item END -->

                                  <!-- Condition lorsque l'utilisateur n'a pas de réservation  -->
                                  <div class="empty mb-8" v-if="dataValide == null">
                                    <div class="d-flex justify-content-center mb-5">
                                      <img
                                        src="@/assets/images/element/desert.svg"
                                        alt=""
                                      />
                                    </div>
                                    <div class="d-grid justify-content-center text-center">
                                      <H6
                                        >Vous n'avez pas encore effectué de réservation
                                        !</H6
                                      >
                                      <p class="text-wrap">
                                        Pourquoi ne pas réserver dès maintenant pour vivre
                                        une expérience inoubliable ?
                                      </p>
                                      <vs-button
                                        to="/"
                                        style="background: #348ddb !important"
                                        class="fw-semibold"
                                        >Rechercher les meilleurs établissements</vs-button
                                      >
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
  </div>
</template>

<script>
import { isMobile } from "mobile-device-detect";
import SidebarMenu from "@/components/dashboard/SidebarMenu.vue";
import { encryptData } from "@/cryptoUtils";
export default {
  name: "HomeView",
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
      colorx: "#050A30",
      isMobile: isMobile,
      datas: [],
      dataEncours: [],
      dataValides: [],
      dataAnnules: [],
      connexionMessage: "",
    };
  },
  methods: {
    Back() {
      this.$router.back();
    },

    formattedDate(date) {
    const options = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric'};
    return new Intl.DateTimeFormat('fr-FR', options).format(new Date(date));
    },

    formattedDate2(dateStr) {
    // Créer un objet Date à partir de la chaîne de caractères
        const dateObj = new Date(dateStr);

        // Options de formatage de la date
        const options = { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric', 
        };

        // Formater la date selon les options spécifiées
        return new Intl.DateTimeFormat('fr-FR', options).format(dateObj);
    },

    GoToDetails(bien) {
			this.$vs.loading();
			// Déclencher la mutation pour stocker les détails du bien
			this.$store.commit('BiensDetail', bien);
			this.$vs.loading.close();
			// Naviguer vers la page de détails en passant l'identifiant du bien en paramètre
			this.$router.push({ name: 'DetailResult', params: { param: bien.id_item } });

		},

    getReservations() {
      const user = encryptData(this.users.email);
      this.$axios.get('/dashboard_reservation.php?user=' + user)
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
  },

  mounted() {
    this.getReservations();
  },
};
</script>
