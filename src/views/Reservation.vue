<template>
    <div class="hello">
      <div class="head-head-resid"  >
       
          <div class="zone-of-work-mobile">
            <div class="accueil-bodysearch-themea" v-if="validerreserve">
              <vs-card style="padding: 10px; box-shadow: 0 0 0 10px rgb(255 255 255 / 15%), 0 2px 48px 0 rgb(0 0 0 / 4%); border-radius: 10px; margin-top: -27 px">
                <p v-if="isMobile" style="font-family: 'Jost', sans-serif; font-size: 20px;font-weight: 600;letter-spacing: 1px; color: #383a4e; text-align: center">Détail de la réservation N° : <b style="color: blue">{{ref}}</b></p>
                <vs-divider v-if="isMobile"/>
                <p v-if="isMobile" style="margin-bottom: 1rem;font-family: 'Jost', sans-serif; font-size: 14px;letter-spacing: 1px; color: #383a4e;">Du <b>{{reservation.du.split('-').reverse().join('-')}}</b>, à partir de 12h00</p>
                <p v-if="isMobile" style="margin-bottom: 1rem; font-family: 'Jost', sans-serif; font-size: 14px;letter-spacing: 1px; color: #383a4e;">Au <b>{{reservation.au.split('-').reverse().join('-')}}</b>, jusqu'à 11h00</p>
                <div style="padding: 10px;">
                  <p style="font-family: 'Jost', sans-serif; font-size: 20px;font-weight: 600;letter-spacing: 1px; color: #383a4e;">Détails de la réservation</p>
                  <vs-divider/>
                  <vs-row class="mb-4">
                    <vs-col vs-justify="center" vs-align="center" vs-w="12">
                      <div style="display: grid; width: 95%;">
                        <span style="font-size: 14px; letter-spacing:.5px; color: #64688c; padding: 5px; font-family: 'Jost', sans-serif">Nom</span>
                            <el-input
                              style="width: 100%;  float: right;"
                              placeholder="Nom"
                              suffix-icon="el-icon-user-solid"
                              v-model="reservation.nom">
                            </el-input>
                            
                          </div>
                    </vs-col>
                  </vs-row>
                  <vs-row class="mb-4">
                    <vs-col vs-justify="center" vs-align="center" vs-w="12">
                      <div style="display: grid; width: 95%;">
                        <span style="font-size: 14px; letter-spacing:.5px; color: #64688c; padding: 5px; font-family: 'Jost', sans-serif">Email</span>
                            <el-input
                              style="width: 100%;  float: right;"
                              placeholder="Email"
                              suffix-icon="el-icon-s-promotion"
                              v-model="email">
                            </el-input>
                            
                          </div>
                    </vs-col>
                    </vs-row>
                    <vs-row class="mb-4">
                    <vs-col vs-justify="center" vs-align="center" vs-w="12">
                      <div style="display: grid; width: 95%;">
                        <span style="font-size: 14px; letter-spacing:.5px; color: #64688c; padding: 5px; font-family: 'Jost', sans-serif">Téléphone</span>
                            <el-input
                              style="width: 100%;  float: right;"
                              placeholder="Contact"
                              maxlength="15"
                              type="tel"
                              suffix-icon="el-icon-phone"
                              v-model="contact">
                            </el-input>
                            
                          </div>
                    </vs-col>
                  </vs-row>
                  <vs-row style="padding-bottom: 25px">
                    <vs-col vs-justify="center" vs-align="center" vs-w="8">
                      <div style="display: grid; width: 95%;">
                        <span style="font-size: 14px; letter-spacing:.5px; color: #64688c; padding: 5px; font-family: 'Jost', sans-serif">Pays de résidence</span>
                        <vs-select
                            autocomplete
                            class="selectExample"
                            v-model="pays"
                            >
                            <vs-select-item :key="index" :value="item.pays" :text="item.pays" v-for="item,index in paysData" />
                        </vs-select>
                            
                          </div>
                    </vs-col>
                    <vs-col vs-justify="center" vs-align="center" vs-w="4">
                    
                    </vs-col>
                    
                  </vs-row>
                  <vs-divider/>
                  <p style="font-family: 'Jost', sans-serif; font-size: 20px;font-weight: 600;letter-spacing: 1px; color: #383a4e; margin-top: 50px;">Plus d'info sur la réservation</p>
                  <vs-divider/>
                  <vs-row style="padding-bottom: 25px">
                    <vs-col vs-justify="center" vs-align="center" vs-w="6">
                      <div style="display: grid; width: 93%;">
                        <span style="font-size: 14px; letter-spacing:.5px; color: #64688c; padding: 5px; font-family: 'Jost', sans-serif">Nombre de personne</span>
                        <el-select v-model="nbper" filterable placeholder="Select">
                            <el-option
                              style="display: grid;"
                              v-for="item in optionsnb"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                            
                          </div>
                    </vs-col>
                    <vs-col vs-justify="center" vs-align="center" vs-w="6">
                      <div style="display: grid; width: 95%;">
                        <span style="font-size: 14px; letter-spacing:.5px; color: #64688c; padding: 5px; font-family: 'Jost', sans-serif">Ya t'il des <b>moins de 14 ans</b></span>
                        <el-select v-model="nbmin" filterable placeholder="Select">
                            <el-option
                              style="display: grid;"
                              v-for="item in optionsmin"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                            
                          </div>
                    </vs-col>
                  </vs-row>
                  <vs-row>
                    <vs-col  v-tooltip="'col - 3'" vs-align="center" vs-w="5.9">
                      <div style="display: grid; width: 95%;">
                      <span style="font-size: 14px; letter-spacing:.5px; color: #64688c; padding: 5px; font-family: 'Jost', sans-serif"><b style="color: blue;">Service Taxi</b>, Je veux qu'un véhicule vienne me chercher</span>
                      <el-select v-model="taxi" filterable placeholder="Select">
                          <el-option
                            style="display: grid;"
                            v-for="item in optionstaxi"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>  
                      </div> 
                    </vs-col>
                    <vs-col  v-tooltip="'col - 3'" vs-type="grid" vs-align="center" vs-w="0.2">
                    </vs-col>
                    
                </vs-row>
                </div>
                <button class="btn btn-primary mb-0" style="margin-top: 15px; width: 100%" type="filled" @click="confirmer()">Valider mes informations</button>
              </vs-card>
            </div>
            <div v-else style="padding: 10px">
                <div v-if="!refOK">
                    <vs-card style="padding: 10px; box-shadow: 0 0 0 10px rgb(255 255 255 / 15%), 0 2px 48px 0 rgb(0 0 0 / 4%); border-radius: 10px;">
                        <div style="display: grid; width: 100%;">
                            <span style="font-size: 14px; letter-spacing:.5px; color: #64688c; padding: 5px; font-family: 'Jost', sans-serif">Référence réservation ou Adresse email </span>
                                <el-input
                                style="width: 100%;  float: right;"
                                placeholder="Référence ou Email"
                                suffix-icon="el-icon-s-promotion"
                                v-model="email">
                                </el-input>
                                <vs-button style="margin-top: 15px; width: 100%" color="primary" type="filled" @click="confirmer()">Vérifier</vs-button>
                                
                        </div>
                    </vs-card>
                </div>
                <div v-else>
                  <!-- =======================
                  Main content START -->
                  <section class="pt-4" v-if="isMobile">
                    <div class="">
                      <div class="row">
                        <div class="col-md-10 col-xl-8 mx-auto">

                          <div class="card shadow">
                            <!-- Image -->
                            <el-carousel :interval="5000" height="170px" arrow="always" class="rounded-top">
                                  <el-carousel-item >
                                      <img :src="reservation.image1" alt="Card image">
                                  </el-carousel-item>
                                  <el-carousel-item >
                                      <img :src="reservation.image2" alt="Card image">
                                  </el-carousel-item>
                                  <el-carousel-item >
                                      <img :src="reservation.image3" alt="Card image">
                                  </el-carousel-item>
                                  <el-carousel-item >
                                      <img :src="reservation.image4" alt="Card image">
                                  </el-carousel-item>
                                </el-carousel>

                            <!-- Card body -->
                            <div class="card-body text-center p-3">
                              <!-- Title -->
                              <h1 class="card-title fs-5">🎊 Toutes nos félicitations! 🎊</h1>
                              <vs-alert class="mb-4 text-center" color="warning" title="Votre réservation a été enregistrée avec succès!" :active="!validName" style="margin: 3%; width: 94%">
                                Nous vous contacterons dans un intervalle de 2 heures pour confirmer votre demande.
                              </vs-alert>
                              <!-- Second title -->
                            <el-breadcrumb separator="|" class="mb-4">
                              <el-breadcrumb-item style="margin-top: 0; line-height: 1.25 !important; font-size: calc(1rem + 0.06vw) !important; font-weight:700 !important;"><i class="fas fa-hotel me-2"></i>{{reservation.libelle}}</el-breadcrumb-item>
                              <el-breadcrumb-item v-if="reservation.type_item" style="margin-top: 0; line-height: 1.25 !important; font-size: calc(1rem + 0.06vw) !important; font-weight:900 !important;"><i class="fas fa-door-open me-2"></i>{{reservation.type_item}}</el-breadcrumb-item>
                            </el-breadcrumb>

                            

                            <ul class="nav nav-divider lead-mobile mb-4 d-flex justify-content-center align-items-center">
                              <i class="bi bi-geo-fill me-1"></i>
                              <li class="nav-item" v-if="reservation.ville_item">{{reservation.ville_item}}</li>
                              <li class="nav-item" v-if="reservation.commune_item">{{reservation.commune_item}}</li>
                              <li class="nav-item" v-if="reservation.zone_item">{{reservation.zone_item}}</li>
                            </ul>
                            <span class="d-flex justify-content-center align-items-center mb-4">
                              <span class="mb-0 me-2 lead-mobile"> <i class="bi bi-bar-chart-steps me-1"></i>Statut de la réservation:</span>
                              <span class="fw-bold mb-0 lead-mobile text-warning text-center">En cours de validation</span>
                            </span>

                              <!-- List -->
                              <div class="row justify-content-between text-start mb-4">
                                <div class="col-lg-5">
                                  <ul class="list-group list-group-borderless">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                      <span class="mb-0"><i class="bi bi-vr fa-fw me-1"></i>Référence:</span>
                                      <span class="h6 fw-bold mb-0">{{ref}}</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                      <span class="mb-0"><i class="bi bi-person fa-fw me-1"></i>Réservé par:</span>
                                      <span class="h6 fw-normal mb-0">{{reservation.nom}} {{reservation.prenom}}</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                      <span class="mb-0"><i class="far fa-flag me-1"></i>Pays:</span>
                                      <span class="h6 fw-normal mb-0">{{reservation.pays}}</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                      <span class="mb-0"><i class="bi bi-wallet2 fa-fw me-1"></i>Mode de paiement:</span>
                                      <span class="h6 fw-normal mb-0" v-if="reservation.paiement">{{ reservation.paiement }}</span>
                                      <span class="h6 fw-normal mb-0" v-else>Non spécifié</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                      <span class="mb-0"><i class="bi bi-people fa-fw me-1"></i>Invitées:</span>
                                      <span class="h6 fw-normal mb-0">{{reservation.nbper}}</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                      <span class="mb-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-arms-up me-1" viewBox="0 0 16 16">
                                          <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                                          <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"/>
                                        </svg>
                                        Nombre d'enfant:</span>
                                      <span class="h6 fw-normal mb-0">{{reservation.nbenf}}</span>
                                    </li>
                                  </ul>
                                </div>
                               
                                <div class="col-lg-5">
                                  <ul class="list-group list-group-borderless">
                                    
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                      <span class="mb-0"><i class="bi bi-calendar fa-fw me-1"></i>Date d'arrivée:</span>
                                      <span class="h6 fw-normal mb-0">{{reservation.du}}</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                      <span class="mb-0"><i class="bi bi-calendar fa-fw me-1"></i>Date de départ:</span>
                                      <span class="h6 fw-normal mb-0">{{reservation.au}}</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                      <span class="mb-0"><i class="bi bi-calendar-day fa-fw me-1"></i>Nombre de Jour: </span>
                                      <span class="h6 fw-normal mb-0">{{reservation.nbjour}} jour(s)</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                      <span class="mb-0"><i class="bi bi-cash fa-fw me-1"></i>Prix total: </span>
                                      <span class="h6 fw-bold mb-0">{{ formatPrice(reservation.tarif_jour * reservation.nbjour)}}</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <vs-alert class="mb-4" :active="!validName" color="success" icon="headset_mic" style=" width: 100%;text-align: left">
                               Veuillez appeler le <b style="color: black; font-size: 13px">+225 07 89 97 79 29</b> pour valider votre réservation plus rapidement.
                              </vs-alert>

                              <!-- Button -->
                              <div class="d-sm-flex justify-content-sm-end d-grid">
                                <!-- 
                                <div class="dropdown me-sm-2 mb-2 mb-sm-0">
                                  <a href="#" class="btn btn-light mb-0 w-100" role="button" id="dropdownShare" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bi bi-share me-2"></i>Share
                                  </a>
                                 
                                  <ul class="dropdown-menu dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare">
                                    <li><a  class="dropdown-item" href="#"><i class="fab fa-twitter-square me-2"></i>Twitter</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="fab fa-facebook-square me-2"></i>Facebook</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="fab fa-linkedin me-2"></i>LinkedIn</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="fas fa-copy me-2"></i>Copy link</a></li>
                                  </ul>
                                </div>
                         Download button -->
                                <span class="btn btn-primary mb-0"  @click="retour()"><i class="bi bi-arrow-left-circle-fill me-2 float-left"></i>Retour</span>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </section>
                  <section class="pt-4" v-else>
                    <div class="container">
                      <div class="row">
                        <div class="col-md-10 col-xl-8 mx-auto">
                          <div class="card shadow">
                            <!-- Image -->
                            <el-carousel :interval="5000" height="170px" arrow="always" class="rounded-top" v-if="isMobile">
                                  <el-carousel-item >
                                      <img :src="reservation.image1" alt="Card image">
                                  </el-carousel-item>
                                  <el-carousel-item >
                                      <img :src="reservation.image2" alt="Card image">
                                  </el-carousel-item>
                                  <el-carousel-item >
                                      <img :src="reservation.image3" alt="Card image">
                                  </el-carousel-item>
                                  <el-carousel-item >
                                      <img :src="reservation.image4" alt="Card image">
                                  </el-carousel-item>
                                </el-carousel>
                                <el-carousel :interval="5000" height="470px" arrow="always" v-else>
                                  <el-carousel-item >
                                      <img :src="reservation.image1" alt="Card image">
                                  </el-carousel-item>
                                  <el-carousel-item >
                                      <img :src="reservation.image2" alt="Card image">
                                  </el-carousel-item>
                                  <el-carousel-item >
                                      <img :src="reservation.image3" alt="Card image">
                                  </el-carousel-item>
                                  <el-carousel-item >
                                      <img :src="reservation.image4" alt="Card image">
                                  </el-carousel-item>
                                </el-carousel>

                            <!-- Card body -->
                            <div class="card-body text-center p-4">
                              <!-- Title -->
                              <h1 class="card-title fs-3">🎊 Toutes nos félicitations! 🎊</h1>
                              <vs-alert class="mb-4 text-center" color="warning" title="Votre réservation a été enregistrée avec succès!" :active="!validName" style="margin: 3%; width: 94%">
                                Nous vous contacterons dans un intervalle de 2 heures pour confirmer votre demande.
                              </vs-alert>
                              <!-- Second title -->
                            <el-breadcrumb separator="|" class="mb-4">
                              <el-breadcrumb-item style="margin-top: 0; line-height: 1.25 !important; font-size: calc(1.1rem + 0.06vw) !important; font-weight:700 !important;"><i class="fas fa-hotel me-2"></i>{{reservation.libelle}}</el-breadcrumb-item>
                              <el-breadcrumb-item v-if="reservation.type_item" style="margin-top: 0; line-height: 1.25 !important; font-size: calc(1.1rem + 0.06vw) !important; font-weight:900 !important;"><i class="fas fa-door-open me-2"></i>{{reservation.type_item}}</el-breadcrumb-item>
                            </el-breadcrumb>

                            

                            <ul class="nav nav-divider lead mb-4 d-flex justify-content-center align-items-center">
                              <i class="bi bi-geo-fill me-2"></i>
                              <li class="nav-item" v-if="reservation.ville_item">{{reservation.ville_item}}</li>
                              <li class="nav-item" v-if="reservation.commune_item">{{reservation.commune_item}}</li>
                              <li class="nav-item" v-if="reservation.zone_item">{{reservation.zone_item}}</li>
                            </ul>
                            <span class="d-flex justify-content-center align-items-center mb-4">
                              <span class="mb-0 me-3"> <i class="bi bi-bar-chart-steps me-2"></i>Statut de la réservation:</span>
                              <span class="h5 fw-bold mb-0 text-warning text-center">En cours de validation</span>
                            </span>

                              <!-- List -->
                              <div class="row justify-content-between text-start mb-4">
                                <div class="col-lg-5">
                                  <ul class="list-group list-group-borderless">
                                    <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                                      <span class="mb-0"><i class="bi bi-vr fa-fw me-2"></i>Référence:</span>
                                      <span class="h6 fw-bold mb-0">{{ref}}</span>
                                    </li>
                                    <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                                      <span class="mb-0"><i class="bi bi-person fa-fw me-2"></i>Réservé par:</span>
                                      <span class="h6 fw-normal mb-0">{{reservation.nom}} {{reservation.prenom}}</span>
                                    </li>
                                    <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                                      <span class="mb-0"><i class="far fa-flag me-2"></i>Pays:</span>
                                      <span class="h6 fw-normal mb-0">{{reservation.pays}}</span>
                                    </li>
                                    <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                                      <span class="mb-0"><i class="bi bi-wallet2 fa-fw me-2"></i>Mode de paiement:</span>
                                      <span class="h6 fw-normal mb-0" v-if="reservation.paiement">{{ reservation.paiement }}</span>
                                      <span class="h6 fw-normal mb-0" v-else>Non spécifié</span>
                                    </li>
                                    <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                                      <span class="mb-0"><i class="bi bi-people fa-fw me-2"></i>Invitées:</span>
                                      <span class="h6 fw-normal mb-0">{{reservation.nbper}}</span>
                                    </li>
                                    <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                                      <span class="mb-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-arms-up me-1" viewBox="0 0 16 16">
                                          <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                                          <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"/>
                                        </svg>
                                        Nombre d'enfant:</span>
                                      <span class="h6 fw-normal mb-0">{{reservation.nbenf}}</span>
                                    </li>
                                  </ul>
                                </div>
                               
                                <div class="col-lg-5">
                                  <ul class="list-group list-group-borderless">
                                    
                                    <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                                      <span class="mb-0"><i class="bi bi-calendar fa-fw me-2"></i>Date d'arrivée:</span>
                                      <span class="h6 fw-normal mb-0">{{reservation.du}}</span>
                                    </li>
                                    <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                                      <span class="mb-0"><i class="bi bi-calendar fa-fw me-2"></i>Date de départ:</span>
                                      <span class="h6 fw-normal mb-0">{{reservation.au}}</span>
                                    </li>
                                    <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                                      <span class="mb-0"><i class="bi bi-calendar-day fa-fw me-2"></i>Nombre de Jour: </span>
                                      <span class="h6 fw-normal mb-0">{{reservation.nbjour}} jour(s)</span>
                                    </li>
                                    <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                                      <span class="mb-0"><i class="bi bi-cash fa-fw me-2"></i>Prix total: </span>
                                      <span class="h6 fw-normal mb-0">{{ formatPrice(reservation.tarif_jour * reservation.nbjour)}}</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <vs-alert :active="!validName" color="success" icon="headset_mic" style="margin: 3%; width: 94%;text-align: left">
                               Veuillez appeler le <b style="color: black">+225 07 89 97 79 29</b> pour valider votre réservation plus rapidement.
                              </vs-alert>

                              <!-- Button -->
                              <div class="d-sm-flex justify-content-sm-end d-grid">
                                <!-- 
                                <div class="dropdown me-sm-2 mb-2 mb-sm-0">
                                  <a href="#" class="btn btn-light mb-0 w-100" role="button" id="dropdownShare" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bi bi-share me-2"></i>Share
                                  </a>
                                 
                                  <ul class="dropdown-menu dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare">
                                    <li><a  class="dropdown-item" href="#"><i class="fab fa-twitter-square me-2"></i>Twitter</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="fab fa-facebook-square me-2"></i>Facebook</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="fab fa-linkedin me-2"></i>LinkedIn</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="fas fa-copy me-2"></i>Copy link</a></li>
                                  </ul>
                                </div>
                         Download button -->
                                <span class="btn btn-primary mb-0"  @click="retour()"><i class="bi bi-arrow-left-circle-fill me-2 float-left"></i>Retour</span>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- =======================
                  Main content START -->
                    
                    <!--
                    <vs-row>
                        <vs-col  v-tooltip="'col - 3'" vs-type="grid" vs-align="center" vs-w="4">
                            <el-badge is-dot class="item" style="display: grid; width: 70px; margin: 0 auto">
                            <el-button @click="money('orange')" class="share-button" type="primary" style="background:none; padding: 0px; width: 70px; border: none">
                                <img src="../../assets/orange.png" style="max-width: 70px; height: 50px">
                            </el-button>
                            <span style="text-align: center; font-size: 10px">Orange Money</span>
                            </el-badge>
                        </vs-col>
                        <vs-col  v-tooltip="'col - 3'" vs-type="grid" vs-align="center" vs-w="4">
                            <el-badge is-dot class="item" style="display: grid; width: 70px; margin: 0 auto">
                            <el-button @click="money('moov')" class="share-button" type="primary" style="background:none; padding: 0px; width: 70px; border: none">
                                <img src="../../assets/moov.png" style="max-width: 70px; height: 50px">
                            </el-button>
                            <span style="text-align: center; font-size: 10px">Moov Money</span>
                            </el-badge>
                        </vs-col>
                        <vs-col  v-tooltip="'col - 3'" vs-type="grid" vs-align="center" vs-w="4">
                            <el-badge is-dot class="item" style="display: grid; width: 70px; margin: 0 auto">
                            <el-button @click="money('wave')" class="share-button" type="primary" style="background:none; padding: 0px; width: 70px; border: none">
                                <img src="../../assets/wave.png" style="max-width: 70px; height: 50px">
                            </el-button>
                            <span style="text-align: center; font-size: 10px">Wave</span>
                            </el-badge>
                        </vs-col>
                    </vs-row> -->
                </div>
            </div>
        
        </div>
      </div>
      
      
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { Carousel, Slide } from 'vue-carousel';
  import { Swiper, SwiperItem } from 'vue-h5-swiper';
  import { isMobile } from 'mobile-device-detect';
  import HorizontalScroll from 'vue-horizontal-scroll'
  import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'
  export default {
    name: 'HeadReservation',
    computed: {
      users() {
        return this.$store.state.users;
      },
      components: {
      Carousel,
      Slide,
      Swiper,
      SwiperItem,
      HorizontalScroll,
    },
    },
     data(){
      return {
        isMobile: isMobile,
        orangeOk: false,
        moovOk: false,
        waveOk: false,
        method: null,
        refOK: true,
        useri: {
          name: '',
          email: '',
          contact: '',
          nbper: '',
        },
         optionsnb: [{
            value: '1',
            label: '1 personne '
          }, {
            value: '2',
            label: '2 personnes'
          }, {
            value: '3',
            label: '3 personnes'
          }, {
            value: '4',
            label: '4 personnes'
          }, {
            value: '5',
            label: '5 personnes'
          }, {
            value: 'plus',
            label: 'plus'
          }],
          optionsmin: [{
            value: '0',
            label: 'Non'
          }, {
            value: '1',
            label: 'Oui 1'
          }, {
            value: '2',
            label: 'Oui 2'
          }, {
            value: '3',
            label: 'Oui plus'
          }],
          optionstaxi: [{
            value: 'Non',
            label: 'Non'
          }, {
            value: 'Oui',
            label: 'Oui'
          }],
          paysData: [
  {
    "pays": "Afghanistan",
    "flag": "https://korezide.com/tousPays/country/af.svg"
  },
  {
    "pays": "Afrique du Sud",
    "flag": "https://korezide.com/tousPays/country/za.svg"
  },
  {
    "pays": "Albanie",
    "flag": "https://korezide.com/tousPays/country/al.svg"
  },
  {
    "pays": "Algérie",
    "flag": "https://korezide.com/tousPays/country/dz.svg"
  },
  {
    "pays": "Allemagne",
    "flag": "https://korezide.com/tousPays/country/de.svg"
  },
  {
    "pays": "Andorre",
    "flag": "https://korezide.com/tousPays/country/ad.svg"
  },
  {
    "pays": "Angola",
    "flag": "https://korezide.com/tousPays/country/ao.svg"
  },
  {
    "pays": "Antigua-et-Barbuda",
    "flag": "https://korezide.com/tousPays/country/ag.svg"
  },
  {
    "pays": "Arabie saoudite",
    "flag": "https://korezide.com/tousPays/country/sa.svg"
  },
  {
    "pays": "Argentine",
    "flag": "https://korezide.com/tousPays/country/ar.svg"
  },
  {
    "pays": "Arménie",
    "flag": "https://korezide.com/tousPays/country/am.svg"
  },
  {
    "pays": "Australie",
    "flag": "https://korezide.com/tousPays/country/au.svg"
  },
  {
    "pays": "Autriche",
    "flag": "https://korezide.com/tousPays/country/at.svg"
  },
  {
    "pays": "Azerbaïdjan",
    "flag": "https://korezide.com/tousPays/country/az.svg"
  },
  {
    "pays": "Bahamas",
    "flag": "https://korezide.com/tousPays/country/bs.svg"
  },
  {
    "pays": "Bahreïn",
    "flag": "https://korezide.com/tousPays/country/bh.svg"
  },
  {
    "pays": "Bangladesh",
    "flag": "https://korezide.com/tousPays/country/bd.svg"
  },
  {
    "pays": "Barbade",
    "flag": "https://korezide.com/tousPays/country/bb.svg"
  },
  {
    "pays": "Belgique",
    "flag": "https://korezide.com/tousPays/country/be.svg"
  },
  {
    "pays": "Belize",
    "flag": "https://korezide.com/tousPays/country/bz.svg"
  },
  {
    "pays": "Bénin",
    "flag": "https://korezide.com/tousPays/country/bj.svg"
  },
  {
    "pays": "Bhoutan",
    "flag": "https://korezide.com/tousPays/country/bt.svg"
  },
  {
    "pays": "Biélorussie",
    "flag": "https://korezide.com/tousPays/country/by.svg"
  },
  {
    "pays": "Birmanie",
    "flag": "https://korezide.com/tousPays/country/mm.svg"
  },
  {
    "pays": "Bolivie",
    "flag": "https://korezide.com/tousPays/country/bo.svg"
  },
  {
    "pays": "Bosnie-Herzégovine",
    "flag": "https://korezide.com/tousPays/country/ba.svg"
  },
  {
    "pays": "Botswana",
    "flag": "https://korezide.com/tousPays/country/bw.svg"
  },
  {
    "pays": "Brésil",
    "flag": "https://korezide.com/tousPays/country/br.svg"
  },
  {
    "pays": "Brunei",
    "flag": "https://korezide.com/tousPays/country/bn.svg"
  },
  {
    "pays": "Bulgarie",
    "flag": "https://korezide.com/tousPays/country/bg.svg"
  },
  {
    "pays": "Burkina Faso",
    "flag": "https://korezide.com/tousPays/country/bf.svg"
  },
  {
    "pays": "Burundi",
    "flag": "https://korezide.com/tousPays/country/bi.svg"
  },
  {
    "pays": "Cambodge",
    "flag": "https://korezide.com/tousPays/country/kh.svg"
  },
  {
    "pays": "Cameroun",
    "flag": "https://korezide.com/tousPays/country/cm.svg"
  },
  {
    "pays": "Canada",
    "flag": "https://korezide.com/tousPays/country/ca.svg"
  },
  {
    "pays": "Cap-Vert",
    "flag": "https://korezide.com/tousPays/country/cv.svg"
  },
  {
    "pays": "Centrafrique",
    "flag": "https://korezide.com/tousPays/country/cf.svg"
  },
  {
    "pays": "Chili",
    "flag": "https://korezide.com/tousPays/country/cl.svg"
  },
  {
    "pays": "Chine",
    "flag": "https://korezide.com/tousPays/country/cn.svg"
  },
  {
    "pays": "Chypre",
    "flag": "https://korezide.com/tousPays/country/cy.svg"
  },
  {
    "pays": "Colombie",
    "flag": "https://korezide.com/tousPays/country/co.svg"
  },
  {
    "pays": "Comores",
    "flag": "https://korezide.com/tousPays/country/km.svg"
  },
  {
    "pays": "Congo-Brazzaville",
    "flag": "https://korezide.com/tousPays/country/cg.svg"
  },
  {
    "pays": "Congo-Kinshasa",
    "flag": "https://korezide.com/tousPays/country/cd.svg"
  },
  {
    "pays": "Corée du Nord",
    "flag": "https://korezide.com/tousPays/country/kp.svg"
  },
  {
    "pays": "Corée du Sud",
    "flag": "https://korezide.com/tousPays/country/kr.svg"
  },
  {
    "pays": "Costa Rica",
    "flag": "https://korezide.com/tousPays/country/cr.svg"
  },
  {
    "pays": "Côte d'Ivoire",
    "flag": "https://korezide.com/tousPays/country/ci.svg"
  },
  {
    "pays": "Croatie",
    "flag": "https://korezide.com/tousPays/country/hr.svg"
  },
  {
    "pays": "Cuba",
    "flag": "https://korezide.com/tousPays/country/cu.svg"
  },
  {
    "pays": "Danemark",
    "flag": "https://korezide.com/tousPays/country/dk.svg"
  },
  {
    "pays": "Djibouti",
    "flag": "https://korezide.com/tousPays/country/dj.svg"
  },
  {
    "pays": "Dominique",
    "flag": "https://korezide.com/tousPays/country/dm.svg"
  },
  {
    "pays": "Égypte",
    "flag": "https://korezide.com/tousPays/country/eg.svg"
  },
  {
    "pays": "Émirats arabes unis",
    "flag": "https://korezide.com/tousPays/country/ae.svg"
  },
  {
    "pays": "Équateur",
    "flag": "https://korezide.com/tousPays/country/ec.svg"
  },
  {
    "pays": "Érythrée",
    "flag": "https://korezide.com/tousPays/country/er.svg"
  },
  {
    "pays": "Espagne",
    "flag": "https://korezide.com/tousPays/country/es.svg"
  },
  {
    "pays": "Estonie",
    "flag": "https://korezide.com/tousPays/country/ee.svg"
  },
  {
    "pays": "Eswatini",
    "flag": "https://korezide.com/tousPays/country/sz.svg"
  },
  {
    "pays": "États-Unis",
    "flag": "https://korezide.com/tousPays/country/us.svg"
  },
  {
    "pays": "Éthiopie",
    "flag": "https://korezide.com/tousPays/country/et.svg"
  },
  {
    "pays": "Fidji",
    "flag": "https://korezide.com/tousPays/country/fj.svg"
  },
  {
    "pays": "Finlande",
    "flag": "https://korezide.com/tousPays/country/fi.svg"
  },
  {
    "pays": "France",
    "flag": "https://korezide.com/tousPays/country/fr.svg"
  },
  {
    "pays": "Gabon",
    "flag": "https://korezide.com/tousPays/country/ga.svg"
  },
  {
    "pays": "Gambie",
    "flag": "https://korezide.com/tousPays/country/gm.svg"
  },
  {
    "pays": "Géorgie",
    "flag": "https://korezide.com/tousPays/country/ge.svg"
  },
  {
    "pays": "Ghana",
    "flag": "https://korezide.com/tousPays/country/gh.svg"
  },
  {
    "pays": "Grèce",
    "flag": "https://korezide.com/tousPays/country/gr.svg"
  },
  {
    "pays": "Grenade",
    "flag": "https://korezide.com/tousPays/country/gd.svg"
  },
  {
    "pays": "Guatemala",
    "flag": "https://korezide.com/tousPays/country/gt.svg"
  },
  {
    "pays": "Guinée",
    "flag": "https://korezide.com/tousPays/country/gn.svg"
  },
  {
    "pays": "Guinée-Bissau",
    "flag": "https://korezide.com/tousPays/country/gw.svg"
  },
  {
    "pays": "Guinée équatoriale",
    "flag": "https://korezide.com/tousPays/country/gq.svg"
  },
  {
    "pays": "Guyana",
    "flag": "https://korezide.com/tousPays/country/gy.svg"
  },
  {
    "pays": "Haïti",
    "flag": "https://korezide.com/tousPays/country/ht.svg"
  },
  {
    "pays": "Honduras",
    "flag": "https://korezide.com/tousPays/country/hn.svg"
  },
  {
    "pays": "Hongrie",
    "flag": "https://korezide.com/tousPays/country/hu.svg"
  },
  {
    "pays": "Îles Cook",
    "flag": "https://korezide.com/tousPays/country/ck.svg"
  },
  {
    "pays": "Îles Marshall",
    "flag": "https://korezide.com/tousPays/country/mh.svg"
  },
  {
    "pays": "Îles Salomon",
    "flag": "https://korezide.com/tousPays/country/sb.svg"
  },
  {
    "pays": "Inde",
    "flag": "https://korezide.com/tousPays/country/in.svg"
  },
  {
    "pays": "Indonésie",
    "flag": "https://korezide.com/tousPays/country/id.svg"
  },
  {
    "pays": "Irak",
    "flag": "https://korezide.com/tousPays/country/iq.svg"
  },
  {
    "pays": "Iran",
    "flag": "https://korezide.com/tousPays/country/ir.svg"
  },
  {
    "pays": "Irlande",
    "flag": "https://korezide.com/tousPays/country/ie.svg"
  },
  {
    "pays": "Islande",
    "flag": "https://korezide.com/tousPays/country/is.svg"
  },
  {
    "pays": "Israël",
    "flag": "https://korezide.com/tousPays/country/il.svg"
  },
  {
    "pays": "Italie",
    "flag": "https://korezide.com/tousPays/country/it.svg"
  },
  {
    "pays": "Jamaïque",
    "flag": "https://korezide.com/tousPays/country/jm.svg"
  },
  {
    "pays": "Japon",
    "flag": "https://korezide.com/tousPays/country/jp.svg"
  },
  {
    "pays": "Jordanie",
    "flag": "https://korezide.com/tousPays/country/jo.svg"
  },
  {
    "pays": "Kazakhstan",
    "flag": "https://korezide.com/tousPays/country/kz.svg"
  },
  {
    "pays": "Kenya",
    "flag": "https://korezide.com/tousPays/country/ke.svg"
  },
  {
    "pays": "Kirghizistan",
    "flag": "https://korezide.com/tousPays/country/kg.svg"
  },
  {
    "pays": "Kiribati",
    "flag": "https://korezide.com/tousPays/country/ki.svg"
  },
  {
    "pays": "Koweït",
    "flag": "https://korezide.com/tousPays/country/kw.svg"
  },
  {
    "pays": "Laos",
    "flag": "https://korezide.com/tousPays/country/la.svg"
  },
  {
    "pays": "Lesotho",
    "flag": "https://korezide.com/tousPays/country/ls.svg"
  },
  {
    "pays": "Lettonie",
    "flag": "https://korezide.com/tousPays/country/lv.svg"
  },
  {
    "pays": "Liban",
    "flag": "https://korezide.com/tousPays/country/lb.svg"
  },
  {
    "pays": "Libéria",
    "flag": "https://korezide.com/tousPays/country/lr.svg"
  },
  {
    "pays": "Libye",
    "flag": "https://korezide.com/tousPays/country/ly.svg"
  },
  {
    "pays": "Liechtenstein",
    "flag": "https://korezide.com/tousPays/country/li.svg"
  },
  {
    "pays": "Lituanie",
    "flag": "https://korezide.com/tousPays/country/lt.svg"
  },
  {
    "pays": "Luxembourg",
    "flag": "https://korezide.com/tousPays/country/lu.svg"
  },
  {
    "pays": "Macédoine du Nord",
    "flag": "https://korezide.com/tousPays/country/mk.svg"
  },
  {
    "pays": "Madagascar",
    "flag": "https://korezide.com/tousPays/country/mg.svg"
  },
  {
    "pays": "Malaisie",
    "flag": "https://korezide.com/tousPays/country/my.svg"
  },
  {
    "pays": "Malawi",
    "flag": "https://korezide.com/tousPays/country/mw.svg"
  },
  {
    "pays": "Maldives",
    "flag": "https://korezide.com/tousPays/country/mv.svg"
  },
  {
    "pays": "Mali",
    "flag": "https://korezide.com/tousPays/country/ml.svg"
  },
  {
    "pays": "Malte",
    "flag": "https://korezide.com/tousPays/country/mt.svg"
  },
  {
    "pays": "Maroc",
    "flag": "https://korezide.com/tousPays/country/ma.svg"
  },
  {
    "pays": "Maurice",
    "flag": "https://korezide.com/tousPays/country/mu.svg"
  },
  {
    "pays": "Mauritanie",
    "flag": "https://korezide.com/tousPays/country/mr.svg"
  },
  {
    "pays": "Mexique",
    "flag": "https://korezide.com/tousPays/country/mx.svg"
  },
  {
    "pays": "Micronésie",
    "flag": "https://korezide.com/tousPays/country/fm.svg"
  },
  {
    "pays": "Moldavie",
    "flag": "https://korezide.com/tousPays/country/md.svg"
  },
  {
    "pays": "Monaco",
    "flag": "https://korezide.com/tousPays/country/mc.svg"
  },
  {
    "pays": "Mongolie",
    "flag": "https://korezide.com/tousPays/country/mn.svg"
  },
  {
    "pays": "Monténégro",
    "flag": "https://korezide.com/tousPays/country/me.svg"
  },
  {
    "pays": "Mozambique",
    "flag": "https://korezide.com/tousPays/country/mz.svg"
  },
  {
    "pays": "Namibie",
    "flag": "https://korezide.com/tousPays/country/na.svg"
  },
  {
    "pays": "Nauru",
    "flag": "https://korezide.com/tousPays/country/nr.svg"
  },
  {
    "pays": "Népal",
    "flag": "https://korezide.com/tousPays/country/np.svg"
  },
  {
    "pays": "Nicaragua",
    "flag": "https://korezide.com/tousPays/country/ni.svg"
  },
  {
    "pays": "Niger",
    "flag": "https://korezide.com/tousPays/country/ne.svg"
  },
  {
    "pays": "Nigéria",
    "flag": "https://korezide.com/tousPays/country/ng.svg"
  },
  {
    "pays": "Niue",
    "flag": "https://korezide.com/tousPays/country/nu.svg"
  },
  {
    "pays": "Norvège",
    "flag": "https://korezide.com/tousPays/country/no.svg"
  },
  {
    "pays": "Nouvelle-Zélande",
    "flag": "https://korezide.com/tousPays/country/nz.svg"
  },
  {
    "pays": "Oman",
    "flag": "https://korezide.com/tousPays/country/om.svg"
  },
  {
    "pays": "Ouganda",
    "flag": "https://korezide.com/tousPays/country/ug.svg"
  },
  {
    "pays": "Ouzbékistan",
    "flag": "https://korezide.com/tousPays/country/uz.svg"
  },
  {
    "pays": "Pakistan",
    "flag": "https://korezide.com/tousPays/country/pk.svg"
  },
  {
    "pays": "Palaos",
    "flag": "https://korezide.com/tousPays/country/pw.svg"
  },
  {
    "pays": "Palestine",
    "flag": "https://korezide.com/tousPays/country/ps.svg"
  },
  {
    "pays": "Panama",
    "flag": "https://korezide.com/tousPays/country/pa.svg"
  },
  {
    "pays": "Papouasie-Nouvelle-Guinée",
    "flag": "https://korezide.com/tousPays/country/pg.svg"
  },
  {
    "pays": "Paraguay",
    "flag": "https://korezide.com/tousPays/country/py.svg"
  },
  {
    "pays": "Pays-Bas",
    "flag": "https://korezide.com/tousPays/country/nl.svg"
  },
  {
    "pays": "Pérou",
    "flag": "https://korezide.com/tousPays/country/pe.svg"
  },
  {
    "pays": "Philippines",
    "flag": "https://korezide.com/tousPays/country/ph.svg"
  },
  {
    "pays": "Pologne",
    "flag": "https://korezide.com/tousPays/country/pl.svg"
  },
  {
    "pays": "Portugal",
    "flag": "https://korezide.com/tousPays/country/pt.svg"
  },
  {
    "pays": "Qatar",
    "flag": "https://korezide.com/tousPays/country/qa.svg"
  },
  {
    "pays": "République centrafricaine",
    "flag": "https://korezide.com/tousPays/country/cf.svg"
  },
  {
    "pays": "République dominicaine",
    "flag": "https://korezide.com/tousPays/country/do.svg"
  },
  {
    "pays": "République tchèque",
    "flag": "https://korezide.com/tousPays/country/cz.svg"
  },
  {
    "pays": "Roumanie",
    "flag": "https://korezide.com/tousPays/country/ro.svg"
  },
  {
    "pays": "Royaume-Uni",
    "flag": "https://korezide.com/tousPays/country/gb.svg"
  },
  {
    "pays": "Russie",
    "flag": "https://korezide.com/tousPays/country/ru.svg"
  },
  {
    "pays": "Rwanda",
    "flag": "https://korezide.com/tousPays/country/rw.svg"
  },
  {
    "pays": "Saint-Christophe-et-Niévès",
    "flag": "https://korezide.com/tousPays/country/kn.svg"
  },
  {
    "pays": "Sainte-Lucie",
    "flag": "https://korezide.com/tousPays/country/lc.svg"
  },
  {
    "pays": "Saint-Marin",
    "flag": "https://korezide.com/tousPays/country/sm.svg"
  },
  {
    "pays": "Saint-Vincent-et-les-Grenadines",
    "flag": "https://korezide.com/tousPays/country/vc.svg"
  },
  {
    "pays": "Salvador",
    "flag": "https://korezide.com/tousPays/country/sv.svg"
  },
  {
    "pays": "Samoa",
    "flag": "https://korezide.com/tousPays/country/ws.svg"
  },
  {
    "pays": "São Tomé-et-Principe",
    "flag": "https://korezide.com/tousPays/country/st.svg"
  },
  {
    "pays": "Sénégal",
    "flag": "https://korezide.com/tousPays/country/sn.svg"
  },
  {
    "pays": "Serbie",
    "flag": "https://korezide.com/tousPays/country/rs.svg"
  },
  {
    "pays": "Seychelles",
    "flag": "https://korezide.com/tousPays/country/sc.svg"
  },
  {
    "pays": "Sierra Leone",
    "flag": "https://korezide.com/tousPays/country/sl.svg"
  },
  {
    "pays": "Singapour",
    "flag": "https://korezide.com/tousPays/country/sg.svg"
  },
  {
    "pays": "Slovaquie",
    "flag": "https://korezide.com/tousPays/country/sk.svg"
  },
  {
    "pays": "Slovénie",
    "flag": "https://korezide.com/tousPays/country/si.svg"
  },
  {
    "pays": "Somalie",
    "flag": "https://korezide.com/tousPays/country/so.svg"
  },
  {
    "pays": "Soudan",
    "flag": "https://korezide.com/tousPays/country/sd.svg"
  },
  {
    "pays": "Soudan du Sud",
    "flag": "https://korezide.com/tousPays/country/ss.svg"
  },
  {
    "pays": "Sri Lanka",
    "flag": "https://korezide.com/tousPays/country/lk.svg"
  },
  {
    "pays": "Suède",
    "flag": "https://korezide.com/tousPays/country/se.svg"
  },
  {
    "pays": "Suisse",
    "flag": "https://korezide.com/tousPays/country/ch.svg"
  },
  {
    "pays": "Suriname",
    "flag": "https://korezide.com/tousPays/country/sr.svg"
  },
  {
    "pays": "Syrie",
    "flag": "https://korezide.com/tousPays/country/sy.svg"
  },
  {
    "pays": "Tadjikistan",
    "flag": "https://korezide.com/tousPays/country/tj.svg"
  },
  {
    "pays": "Tanzanie",
    "flag": "https://korezide.com/tousPays/country/tz.svg"
  },
  {
    "pays": "Tchad",
    "flag": "https://korezide.com/tousPays/country/td.svg"
  },
  {
    "pays": "Thaïlande",
    "flag": "https://korezide.com/tousPays/country/th.svg"
  },
  {
    "pays": "Timor oriental",
    "flag": "https://korezide.com/tousPays/country/tl.svg"
  },
  {
    "pays": "Togo",
    "flag": "https://korezide.com/tousPays/country/tg.svg"
  },
  {
    "pays": "Tonga",
    "flag": "https://korezide.com/tousPays/country/to.svg"
  },
  {
    "pays": "Trinité-et-Tobago",
    "flag": "https://korezide.com/tousPays/country/tt.svg"
  },
  {
    "pays": "Tunisie",
    "flag": "https://korezide.com/tousPays/country/tn.svg"
  },
  {
    "pays": "Turkménistan",
    "flag": "https://korezide.com/tousPays/country/tm.svg"
  },
  {
    "pays": "Turquie",
    "flag": "https://korezide.com/tousPays/country/tr.svg"
  },
  {
    "pays": "Tuvalu",
    "flag": "https://korezide.com/tousPays/country/tv.svg"
  },
  {
    "pays": "Ukraine",
    "flag": "https://korezide.com/tousPays/country/ua.svg"
  },
  {
    "pays": "Uruguay",
    "flag": "https://korezide.com/tousPays/country/uy.svg"
  },
  {
    "pays": "Vanuatu",
    "flag": "https://korezide.com/tousPays/country/vu.svg"
  },
  {
    "pays": "Vatican",
    "flag": "https://korezide.com/tousPays/country/va.svg"
  },
  {
    "pays": "Venezuela",
    "flag": "https://korezide.com/tousPays/country/ve.svg"
  },
  {
    "pays": "Viêt Nam",
    "flag": "https://korezide.com/tousPays/country/vn.svg"
  },
  {
    "pays": "Yémen",
    "flag": "https://korezide.com/tousPays/country/ye.svg"
  },
  {
    "pays": "Zambie",
    "flag": "https://korezide.com/tousPays/country/zm.svg"
  },
  {
    "pays": "Zimbabwe",
    "flag": "https://korezide.com/tousPays/country/zw.svg"
  }
    ],
        numeroOrange: null,
        reservation: null,
        validerreserve: true,
        ref:'',
        tousPays: null,
        nom:'',
        email:'',
        contact:'',
        message:'',
        nomr: '',
        prenomr:'',
        nbper: 0,
        nbmin: 'Non',
        taxi: 'Non',
        pays: 'Ivory Coast',
         con: true,
         transaction: {
          cpm_site_id: "296911",
          signature: "4dfbf5b8f40818abffe754b8a8aa04e4d29af25f",
          cpm_amount: "11",
          cpm_trans_date: "04092017140045",
          cpm_trans_id: "50445985950",
          cpm_custom: "08373459U",
          cpm_currency: "XOF",
          cpm_payid: "MP170904.1401.A91088",
          cpm_payment_date: "2017-09-04",
          cpm_payment_time: "14:01:35",
          cpm_error_message: "SUCCES",
          payment_method: "OM",
          cpm_phone_prefixe: "225",
          cel_phone_num: "79557788",
          cpm_ipn_ack: "Y",
          created_at: "2017-09-04 14:00:54",
          updated_at: "2017-09-04 14:01:06",
          cpm_result: "00",
          cpm_trans_status: "ACCEPTED",
          cpm_designation: "Test",
          buyer_name: ""
      }
  
      }
    },
    methods: {
        formatPrice(value) {
          var formatter = new Intl.NumberFormat('xof', {
              style: 'currency',
              currency: 'XOF',
              minimumFractionDigits: 0
          });
          return formatter.format(value);
      },
      retour() {
        this.$router.push({ path: '/resultat-list'});
      },
      money(reseau) {
        if(reseau == 'orange') {
          this.orangeOk = true;
          this.moovOk = false;
          this.waveOk = false;
          this.method = "Orange Money";
        }
        if(reseau == 'moov') {
          this.orangeOk = false;
          this.moovOk = true;
          this.waveOk = false;
          this.method = "Moov Money";
        }
        if(reseau == 'wave') {
          this.orangeOk = false;
          this.moovOk = false;
          this.waveOk = true;
          this.method = "Wave";
        }
      },
      deconnexion() {
        this.$store.commit('Connexion', this.useri);
        this.users.name = '';
        this.$router.push({ path: '/about' });
      },

      confirmer() {
        let formData = new FormData();
        formData.append('nom', this.reservation.nom);
        formData.append('prenom', this.prenomr);
        formData.append('contact', this.contact);
        formData.append('email', this.email);
        formData.append('nbper', this.nbper);
        formData.append('pays', this.pays);
        formData.append('enfant', this.nbmin);
        formData.append('taxi', this.taxi);
        formData.append('ref', this.ref);
        this.$vs.loading({
            type:'point',
        })
        axios.post('/reservation_info.php', formData)
        .then((response) => {
            this.envoi = true;
            this.validerreserve = false;
            this.getReservation();
            console.log(response);
            setTimeout(function () {
            this.$vs.loading.close()}.bind(this), 1000);
        })
        .catch(function (error) {
            console.log(error);
            this.$vs.loading.close()
        });
      },
  
      getReservation() {

        if(this.$route.query.ref.length >= 2) {
            this.$vs.loading({
            type:'point',
            })
            axios.get('/reservation_get.php?ref=' + this.$route.query.ref)
            .then((response) => {
            this.reservation = response.data.data[0];
            if(this.reservation.contact.length >= 3 || this.reservation.email.length >= 3) {
                this.validerreserve = false;
                this.refOK = true;
            }
            console.log(this.reservation)
            this.$vs.loading.close()
            }, (error) => {
            console.log(error);
            this.$vs.loading.close()
            });
        } else {
            this.validerreserve = false;
                this.refOK = false;
        }
      },
  
      envoyera() {
       
         let formData = new FormData();
        formData.append('nom', this.reservation.nom);
        formData.append('contact', this.contact);
        formData.append('email', this.email);
        formData.append('message', this.message);
        this.$vs.loading({
          type:'point',
        })
         axios.post('https://autre.sarezide.com/envoyer.php', formData)
         .then((response) => {
           this.envoi = true;
           console.log(response);
           setTimeout(function () {
          this.$vs.loading.close()}.bind(this), 1000);
        })
        .catch(function (error) {
          console.log(error);
          this.$vs.loading.close()
        });
      },
  
    },
  
    mounted() {
  this.ref = this.$route.query.ref;
  this.getReservation();
}
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
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
      color: rgba(0,0,0,.6);
  }
  .el-input.is-disabled .el-input__inner {
    background-color: #f1fefe;
    border-color: #E4E7ED;
    color: #0b0a12b5;
    cursor: not-allowed;
}
  </style>
  