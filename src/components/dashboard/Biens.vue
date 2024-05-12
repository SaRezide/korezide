<template>
  <div class="home">
    <!-- =======================
  Main banner START -->
    <div v-if="isMobile">
      <div class="dashboard-container">
        <div
          class="d-flex align-items-center dash-header mt-2 border-bottom bg-white"
        >
          <span class="edit-icon ms-3 my-2" @click="retour">
            <i class="fa-solid fa-arrow-left text-black"></i>
          </span>
          <span style="flex: auto" class="">
            <h6 style="font-size: 16px" class="mb-0 text-center">
              Mes établissements
            </h6>
          </span>
        </div>
        <vs-tabs
          :color="colorx"
          alignment="fixed"
          class="mb-3"
          style="z-index: 2"
        >
          <!-- Tous les résidence -->
          <vs-tab label="Tout" icon="dashboard">
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
                      <div class="d-flex gap-2 flex-wrap">
                        <vs-card
                          class="result-item"
                          v-for="item in datasBiens"
                          :key="item.id_item"
                          style="
                            margin: 5px auto;
                            max-width: 400px;
                            padding: 5px;
                            padding-bottom: 0px;
                          "
                        >
                          <div style="color: black">
                            <vs-row>
                              <vs-col
                                v-tooltip="'col - 3'"
                                vs-justify="center"
                                vs-align="center"
                                vs-w="6.5"
                              >
                                <img
                                  class="img"
                                  :src="item.image1"
                                  style="
                                    width: 300px !important;
                                    height: 132px;
                                    border-radius: 5px;
                                  "
                                />
                              </vs-col>
                              <vs-col
                                v-tooltip="'col - 3'"
                                vs-justify="center"
                                vs-align="center"
                                vs-w="5.5"
                                style=""
                              >
                                <div class="result-item-detail">
                                  <span class="result-title-m">{{
                                    item.libelle
                                  }}</span>
                                  <span
                                    class="result-location-m"
                                    style="color: orange"
                                    v-if="item.ville_item == 'Abidjan'"
                                  >
                                    <vs-icon
                                      icon="place"
                                      style="font-size: 15px; color: orange"
                                    ></vs-icon>
                                    {{ item.commune_item }},
                                    <em
                                      style="color: #67c23a; font-weight: bold"
                                      >{{ item.quartier_item }}</em
                                    >
                                  </span>
                                  <span
                                    class="result-location-m"
                                    style="color: orange"
                                    v-else
                                  >
                                    <vs-icon
                                      icon="place"
                                      style="font-size: 15px; color: orange"
                                    ></vs-icon>
                                    {{ item.ville_item }},
                                    <em
                                      style="color: #67c23a; font-weight: bold"
                                      >{{ item.quartier_item }}</em
                                    >
                                  </span>
                                  <div
                                    class="services-list-m mt-2"
                                    style="margin-top: 5px; text-align: left"
                                  >
                                    <vs-icon
                                      class="services-list-icon-m text-dark"
                                      icon="verified_user"
                                      v-if="
                                        item.agent_securite == '1' ||
                                        item.agent_securite == 'true'
                                      "
                                    ></vs-icon>
                                    <vs-icon
                                      class="services-list-icon-m text-dark"
                                      icon="wifi"
                                      v-if="
                                        item.eqpm_internet == '1' ||
                                        item.eqpm_internet == 'true'
                                      "
                                    ></vs-icon>
                                    <vs-icon
                                      class="services-list-icon-m text-dark"
                                      icon="pool"
                                      v-if="
                                        item.eqpm_piscine_pb == '1' ||
                                        item.eqpm_piscine_pv == '1' ||
                                        item.eqpm_piscine_pb == 'true' ||
                                        item.eqpm_piscine_pv == 'true'
                                      "
                                    ></vs-icon>
                                    <vs-icon
                                      class="services-list-icon-m text-dark"
                                      icon="bath_private"
                                      v-if="
                                        item.eqpm_jacuzzi == '1' ||
                                        item.eqpm_jacuzzi == 'true'
                                      "
                                    ></vs-icon>
                                    <vs-icon
                                      class="services-list-icon-m text-dark"
                                      icon="tv"
                                      v-if="
                                        item.eqpm_tv == '1' ||
                                        item.eqpm_tv == 'true'
                                      "
                                    ></vs-icon>
                                    <vs-icon
                                      class="services-list-icon-m text-dark"
                                      icon="local_parking"
                                      v-if="
                                        item.tarif_parking == '1' ||
                                        item.tarif_parking == 'true'
                                      "
                                    ></vs-icon>
                                  </div>
                                  <div class="mt-2" style="text-align: left">
                                    <span
                                      class="result-title-m"
                                      style="
                                        font-weight: bold;
                                        font-size: 13px;
                                        color: #348ddb;
                                      "
                                      >XOF
                                      {{ item.tarif_jour | formatThousands }}
                                      <em style="font-size: 12px"
                                        >/jour</em
                                      ></span
                                    ><br />
                                    <span
                                      class="result-title-m"
                                      style="
                                        color: gray;
                                        font-size: 10px;
                                        text-align: center;
                                      "
                                      v-if="item.nb_jour_reduction.lentgh >= 1"
                                      >Reduction à partir de
                                      {{ item.nb_jour_reduction }}</span
                                    ><br />
                                  </div>
                                </div>
                              </vs-col>
                            </vs-row>
                          </div>
                          <vs-divider style="margin: 0px" />
                          <el-alert
                            v-if="item.autorisation == 'activ'"
                            title="En ligne"
                            :closable="false"
                            type="success"
                            show-icon
                          >
                          </el-alert>
                          <el-alert
                            v-if="item.autorisation == 'oo'"
                            :closable="false"
                            title="En cours de validation (Patienter...)"
                            type="warning"
                            show-icon
                          >
                          </el-alert>
                          <el-alert
                            v-if="item.autorisation == 'ko'"
                            :closable="false"
                            title="Réjété"
                            type="error"
                            v-html="item.description"
                            show-icon
                          >
                          </el-alert>
                          <vs-divide style="margin: 0px" />
                          <vs-row>
                            <vs-col
                              v-if="item.autorisation == 'activ'"
                              style="padding: 5px"
                              v-tooltip="'col - 3'"
                              vs-justify="center"
                              vs-align="center"
                              vs-w="4"
                            >
                              <vs-button
                                @click="GoToDetails(item)"
                                color="primary"
                                type="border"
                                icon="update"
                                >Voir</vs-button
                              >
                            </vs-col>
                            <vs-col
                              style="padding: 5px"
                              v-tooltip="'col - 3'"
                              vs-justify="center"
                              vs-align="center"
                              vs-w="4"
                            >
                              <vs-button
                                @click="Modification(item)"
                                color="primary"
                                type="border"
                                icon="update"
                                >Modifier</vs-button
                              >
                            </vs-col>
                            <vs-col
                              style="padding: 5px"
                              v-tooltip="'col - 3'"
                              vs-justify="center"
                              vs-align="center"
                              vs-w="4"
                            >
                              <vs-button
                                @click="deleteFavoris(item.id_favoris)"
                                color="danger"
                                type="border"
                                icon="delete"
                                >Supprimer</vs-button
                              >
                            </vs-col>
                          </vs-row>
                        </vs-card>
                      </div>

                      <!-- Condition lorsque l'utilisateur n'a pas d'établissement inscrit -->
                      <div class="empty mb-8">
                        <div class="d-flex justify-content-center mb-5">
                          <img
                            src="@/assets/images/element/desert.svg"
                            alt=""
                          />
                        </div>
                        <div class="d-grid justify-content-center">
                          <p>Vous n'avez pas d'établissement inscrit.</p>
                          <vs-button
                            style="background: #348ddb !important"
                            class="fw-semibold"
                            >Inscrire mon établissement</vs-button
                          >
                        </div>
                      </div>
                      <!-- Fin condition lorsque l'utilisateur n'a pas d'établissement inscrit -->

                      <!-- Card item END -->
                    </el-row>
                  </div>
                </div>
              </vs-col>
            </vs-col>
          </vs-tab>

          <!-- Résidence validé -->
          <vs-tab label="Validé" icon="task_alt" color="#000000">
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
                      <div v-for="item in datasBiens" :key="item.id_item">
                        <vs-card
                          class="result-item"
                          v-if="item.autorisation == 'activ'"
                          style="
                            margin: 5px auto;
                            max-width: 400px;
                            padding: 5px;
                            padding-bottom: 0px;
                          "
                        >
                          <div style="color: black">
                            <vs-row>
                              <vs-col
                                v-tooltip="'col - 3'"
                                vs-justify="center"
                                vs-align="center"
                                vs-w="6.5"
                              >
                                <img
                                  class="img"
                                  :src="item.image1"
                                  style="
                                    width: 300px !important;
                                    height: 132px;
                                    border-radius: 5px;
                                  "
                                />
                              </vs-col>
                              <vs-col
                                v-tooltip="'col - 3'"
                                vs-justify="center"
                                vs-align="center"
                                vs-w="5.5"
                                style=""
                              >
                                <div class="result-item-detail">
                                  <span class="result-title-m">{{
                                    item.libelle
                                  }}</span>
                                  <span
                                    class="result-location-m"
                                    style="color: orange"
                                    v-if="item.ville_item == 'Abidjan'"
                                  >
                                    <vs-icon
                                      icon="place"
                                      style="font-size: 15px; color: orange"
                                    ></vs-icon>
                                    {{ item.commune_item }},
                                    <em
                                      style="color: #67c23a; font-weight: bold"
                                      >{{ item.quartier_item }}</em
                                    >
                                  </span>
                                  <span
                                    class="result-location-m"
                                    style="color: orange"
                                    v-else
                                  >
                                    <vs-icon
                                      icon="place"
                                      style="font-size: 15px; color: orange"
                                    ></vs-icon>
                                    {{ item.ville_item }},
                                    <em
                                      style="color: #67c23a; font-weight: bold"
                                      >{{ item.quartier_item }}</em
                                    >
                                  </span>
                                  <div
                                    class="services-list-m mt-2"
                                    style="margin-top: 5px; text-align: left"
                                  >
                                    <vs-icon
                                      class="services-list-icon-m text-dark"
                                      icon="verified_user"
                                      v-if="
                                        item.agent_securite == '1' ||
                                        item.agent_securite == 'true'
                                      "
                                    ></vs-icon>
                                    <vs-icon
                                      class="services-list-icon-m text-dark"
                                      icon="wifi"
                                      v-if="
                                        item.eqpm_internet == '1' ||
                                        item.eqpm_internet == 'true'
                                      "
                                    ></vs-icon>
                                    <vs-icon
                                      class="services-list-icon-m text-dark"
                                      icon="pool"
                                      v-if="
                                        item.eqpm_piscine_pb == '1' ||
                                        item.eqpm_piscine_pv == '1' ||
                                        item.eqpm_piscine_pb == 'true' ||
                                        item.eqpm_piscine_pv == 'true'
                                      "
                                    ></vs-icon>
                                    <vs-icon
                                      class="services-list-icon-m text-dark"
                                      icon="bath_private"
                                      v-if="
                                        item.eqpm_jacuzzi == '1' ||
                                        item.eqpm_jacuzzi == 'true'
                                      "
                                    ></vs-icon>
                                    <vs-icon
                                      class="services-list-icon-m text-dark"
                                      icon="tv"
                                      v-if="
                                        item.eqpm_tv == '1' ||
                                        item.eqpm_tv == 'true'
                                      "
                                    ></vs-icon>
                                    <vs-icon
                                      class="services-list-icon-m text-dark"
                                      icon="local_parking"
                                      v-if="
                                        item.tarif_parking == '1' ||
                                        item.tarif_parking == 'true'
                                      "
                                    ></vs-icon>
                                  </div>
                                  <div class="mt-2" style="text-align: left">
                                    <span
                                      class="result-title-m"
                                      style="
                                        font-weight: bold;
                                        font-size: 13px;
                                        color: #348ddb;
                                      "
                                      >XOF
                                      {{ item.tarif_jour | formatThousands }}
                                      <em style="font-size: 12px"
                                        >/jour</em
                                      ></span
                                    ><br />
                                    <span
                                      class="result-title-m"
                                      style="
                                        color: gray;
                                        font-size: 10px;
                                        text-align: center;
                                      "
                                      v-if="item.nb_jour_reduction.lentgh >= 1"
                                      >Reduction à partir de
                                      {{ item.nb_jour_reduction }}</span
                                    ><br />
                                  </div>
                                </div>
                              </vs-col>
                            </vs-row>
                          </div>
                          <vs-divider style="margin: 0px" />
                          <el-alert
                            v-if="item.autorisation == 'activ'"
                            title="En ligne"
                            :closable="false"
                            type="success"
                            show-icon
                          >
                          </el-alert>
                          <el-alert
                            v-if="item.autorisation == 'oo'"
                            :closable="false"
                            title="En cours de validation (Patienter...)"
                            type="warning"
                            show-icon
                          >
                          </el-alert>
                          <el-alert
                            v-if="item.autorisation == 'ko'"
                            :closable="false"
                            title="Rejeter - (Cliquez ici pour voir le motif)"
                            type="error"
                            show-icon
                          >
                          </el-alert>
                          <vs-divide style="margin: 0px" />
                          <vs-row>
                            <vs-col
                              style="padding: 5px"
                              v-tooltip="'col - 3'"
                              vs-justify="center"
                              vs-align="center"
                              vs-w="4"
                            >
                              <vs-button
                                @click="GoToDetails(item)"
                                color="primary"
                                type="border"
                                icon="update"
                                >Voir</vs-button
                              >
                            </vs-col>
                            <vs-col
                              style="padding: 5px"
                              v-tooltip="'col - 3'"
                              vs-justify="center"
                              vs-align="center"
                              vs-w="4"
                            >
                              <vs-button
                                @click="Modification(item)"
                                color="primary"
                                type="border"
                                icon="update"
                                >Modifier</vs-button
                              >
                            </vs-col>
                            <vs-col
                              style="padding: 5px"
                              v-tooltip="'col - 3'"
                              vs-justify="center"
                              vs-align="center"
                              vs-w="4"
                            >
                              <vs-button
                                @click="deleteFavoris(item.id_favoris)"
                                color="danger"
                                type="border"
                                icon="delete"
                                >Supprimer</vs-button
                              >
                            </vs-col>
                          </vs-row>
                        </vs-card>
                      </div>

                      <!-- Condition lorsque l'utilisateur n'a pas d'établissement inscrit -->
                      <div class="empty mb-8">
                        <div class="d-flex justify-content-center mb-5">
                          <img
                            src="@/assets/images/element/desert.svg"
                            alt=""
                          />
                        </div>
                        <div class="d-grid justify-content-center">
                          <p>Vous n'avez pas d'établissement inscrit.</p>
                          <vs-button
                            style="background: #348ddb !important"
                            class="fw-semibold"
                            >Inscrire mon établissement</vs-button
                          >
                        </div>
                      </div>
                      <!-- Fin condition lorsque l'utilisateur n'a pas d'établissement inscrit -->

                      <!-- Card item END -->
                    </el-row>
                  </div>
                </div>
              </vs-col>
            </vs-col>
          </vs-tab>

          <!-- Résidence en cours de validité -->
          <vs-tab label="En_cours" icon="history" color="#000000">
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
                      <div v-for="item in datasBiens" :key="item.id_item">
                        <vs-card
                          class="result-item"
                          v-if="item.autorisation == 'oo'"
                          style="
                            margin: 5px auto;
                            max-width: 400px;
                            padding: 5px;
                            padding-bottom: 0px;
                          "
                        >
                          <div style="color: black">
                            <vs-row>
                              <vs-col
                                v-tooltip="'col - 3'"
                                vs-justify="center"
                                vs-align="center"
                                vs-w="6.5"
                              >
                                <img
                                  class="img"
                                  :src="item.image1"
                                  style="
                                    width: 300px !important;
                                    height: 132px;
                                    border-radius: 5px;
                                  "
                                />
                              </vs-col>
                              <vs-col
                                v-tooltip="'col - 3'"
                                vs-justify="center"
                                vs-align="center"
                                vs-w="5.5"
                                style=""
                              >
                                <div class="result-item-detail">
                                  <span class="result-title-m">{{
                                    item.libelle
                                  }}</span>
                                  <span
                                    class="result-location-m"
                                    style="color: orange"
                                    v-if="item.ville_item == 'Abidjan'"
                                  >
                                    <vs-icon
                                      icon="place"
                                      style="font-size: 15px; color: orange"
                                    ></vs-icon>
                                    {{ item.commune_item }},
                                    <em
                                      style="color: #67c23a; font-weight: bold"
                                      >{{ item.quartier_item }}</em
                                    >
                                  </span>
                                  <span
                                    class="result-location-m"
                                    style="color: orange"
                                    v-else
                                  >
                                    <vs-icon
                                      icon="place"
                                      style="font-size: 15px; color: orange"
                                    ></vs-icon>
                                    {{ item.ville_item }},
                                    <em
                                      style="color: #67c23a; font-weight: bold"
                                      >{{ item.quartier_item }}</em
                                    >
                                  </span>
                                  <div
                                    class="services-list-m mt-2"
                                    style="margin-top: 5px; text-align: left"
                                  >
                                    <vs-icon
                                      class="services-list-icon-m text-dark"
                                      icon="verified_user"
                                      v-if="
                                        item.agent_securite == '1' ||
                                        item.agent_securite == 'true'
                                      "
                                    ></vs-icon>
                                    <vs-icon
                                      class="services-list-icon-m text-dark"
                                      icon="wifi"
                                      v-if="
                                        item.eqpm_internet == '1' ||
                                        item.eqpm_internet == 'true'
                                      "
                                    ></vs-icon>
                                    <vs-icon
                                      class="services-list-icon-m text-dark"
                                      icon="pool"
                                      v-if="
                                        item.eqpm_piscine_pb == '1' ||
                                        item.eqpm_piscine_pv == '1' ||
                                        item.eqpm_piscine_pb == 'true' ||
                                        item.eqpm_piscine_pv == 'true'
                                      "
                                    ></vs-icon>
                                    <vs-icon
                                      class="services-list-icon-m text-dark"
                                      icon="bath_private"
                                      v-if="
                                        item.eqpm_jacuzzi == '1' ||
                                        item.eqpm_jacuzzi == 'true'
                                      "
                                    ></vs-icon>
                                    <vs-icon
                                      class="services-list-icon-m text-dark"
                                      icon="tv"
                                      v-if="
                                        item.eqpm_tv == '1' ||
                                        item.eqpm_tv == 'true'
                                      "
                                    ></vs-icon>
                                    <vs-icon
                                      class="services-list-icon-m text-dark"
                                      icon="local_parking"
                                      v-if="
                                        item.tarif_parking == '1' ||
                                        item.tarif_parking == 'true'
                                      "
                                    ></vs-icon>
                                  </div>
                                  <div class="mt-2" style="text-align: left">
                                    <span
                                      class="result-title-m"
                                      style="
                                        font-weight: bold;
                                        font-size: 13px;
                                        color: #348ddb;
                                      "
                                      >XOF
                                      {{ item.tarif_jour | formatThousands }}
                                      <em style="font-size: 12px"
                                        >/jour</em
                                      ></span
                                    ><br />
                                    <span
                                      class="result-title-m"
                                      style="
                                        color: gray;
                                        font-size: 10px;
                                        text-align: center;
                                      "
                                      v-if="item.nb_jour_reduction.lentgh >= 1"
                                      >Reduction à partir de
                                      {{ item.nb_jour_reduction }}</span
                                    ><br />
                                  </div>
                                </div>
                              </vs-col>
                            </vs-row>
                          </div>
                          <vs-divider style="margin: 0px" />
                          <el-alert
                            v-if="item.autorisation == 'activ'"
                            title="En ligne"
                            :closable="false"
                            type="success"
                            show-icon
                          >
                          </el-alert>
                          <el-alert
                            v-if="item.autorisation == 'oo'"
                            :closable="false"
                            title="En cours de validation (Patienter...)"
                            type="warning"
                            show-icon
                          >
                          </el-alert>
                          <el-alert
                            v-if="item.autorisation == 'ko'"
                            :closable="false"
                            title="Rejeter - (Cliquez ici pour voir le motif)"
                            type="error"
                            show-icon
                          >
                          </el-alert>
                          <vs-divide style="margin: 0px" />
                          <vs-row>
                            <vs-col
                              style="padding: 5px"
                              v-tooltip="'col - 3'"
                              vs-justify="center"
                              vs-align="center"
                              vs-w="4"
                            >
                              <vs-button
                                @click="Modification(item)"
                                color="primary"
                                type="border"
                                icon="update"
                                >Modifier</vs-button
                              >
                            </vs-col>
                            <vs-col
                              style="padding: 5px"
                              v-tooltip="'col - 3'"
                              vs-justify="center"
                              vs-align="center"
                              vs-w="4"
                            >
                              <vs-button
                                @click="deleteFavoris(item.id_favoris)"
                                color="danger"
                                type="border"
                                icon="delete"
                                >Supprimer</vs-button
                              >
                            </vs-col>
                          </vs-row>
                        </vs-card>
                      </div>

                      <!-- Condition lorsque l'utilisateur n'a pas d'établissement inscrit -->
                      <div class="empty mb-8">
                        <div class="d-flex justify-content-center mb-5">
                          <img
                            src="@/assets/images/element/desert.svg"
                            alt=""
                          />
                        </div>
                        <div class="d-grid justify-content-center">
                          <p>Vous n'avez pas d'établissement inscrit.</p>
                          <vs-button
                            style="background: #348ddb !important"
                            class="fw-semibold"
                            >Inscrire mon établissement</vs-button
                          >
                        </div>
                      </div>
                      <!-- Fin condition lorsque l'utilisateur n'a pas d'établissement inscrit -->

                      <!-- Card item END -->
                    </el-row>
                  </div>
                </div>
              </vs-col>
            </vs-col>
          </vs-tab>

          <vs-tab label="Réjété" icon="delete" color="danger">
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
                      <div v-for="item in datasBiens" :key="item.id_item">
                        <vs-card
                          class="result-item"
                          v-if="item.autorisation == 'ko'"
                          style="
                            margin: 5px auto;
                            max-width: 400px;
                            padding: 5px;
                            padding-bottom: 0px;
                          "
                        >
                          <div style="color: black">
                            <vs-row>
                              <vs-col
                                v-tooltip="'col - 3'"
                                vs-justify="center"
                                vs-align="center"
                                vs-w="6.5"
                              >
                                <img
                                  class="img"
                                  :src="item.image1"
                                  style="
                                    width: 300px !important;
                                    height: 132px;
                                    border-radius: 5px;
                                  "
                                />
                              </vs-col>
                              <vs-col
                                v-tooltip="'col - 3'"
                                vs-justify="center"
                                vs-align="center"
                                vs-w="5.5"
                                style=""
                              >
                                <div class="result-item-detail">
                                  <span class="result-title-m">{{
                                    item.libelle
                                  }}</span>
                                  <span
                                    class="result-location-m"
                                    style="color: orange"
                                    v-if="item.ville_item == 'Abidjan'"
                                  >
                                    <vs-icon
                                      icon="place"
                                      style="font-size: 15px; color: orange"
                                    ></vs-icon>
                                    {{ item.commune_item }},
                                    <em
                                      style="color: #67c23a; font-weight: bold"
                                      >{{ item.quartier_item }}</em
                                    >
                                  </span>
                                  <span
                                    class="result-location-m"
                                    style="color: orange"
                                    v-else
                                  >
                                    <vs-icon
                                      icon="place"
                                      style="font-size: 15px; color: orange"
                                    ></vs-icon>
                                    {{ item.ville_item }},
                                    <em
                                      style="color: #67c23a; font-weight: bold"
                                      >{{ item.quartier_item }}</em
                                    >
                                  </span>
                                  <div
                                    class="services-list-m mt-2"
                                    style="margin-top: 5px; text-align: left"
                                  >
                                    <vs-icon
                                      class="services-list-icon-m text-dark"
                                      icon="verified_user"
                                      v-if="
                                        item.agent_securite == '1' ||
                                        item.agent_securite == 'true'
                                      "
                                    ></vs-icon>
                                    <vs-icon
                                      class="services-list-icon-m text-dark"
                                      icon="wifi"
                                      v-if="
                                        item.eqpm_internet == '1' ||
                                        item.eqpm_internet == 'true'
                                      "
                                    ></vs-icon>
                                    <vs-icon
                                      class="services-list-icon-m text-dark"
                                      icon="pool"
                                      v-if="
                                        item.eqpm_piscine_pb == '1' ||
                                        item.eqpm_piscine_pv == '1' ||
                                        item.eqpm_piscine_pb == 'true' ||
                                        item.eqpm_piscine_pv == 'true'
                                      "
                                    ></vs-icon>
                                    <vs-icon
                                      class="services-list-icon-m text-dark"
                                      icon="bath_private"
                                      v-if="
                                        item.eqpm_jacuzzi == '1' ||
                                        item.eqpm_jacuzzi == 'true'
                                      "
                                    ></vs-icon>
                                    <vs-icon
                                      class="services-list-icon-m text-dark"
                                      icon="tv"
                                      v-if="
                                        item.eqpm_tv == '1' ||
                                        item.eqpm_tv == 'true'
                                      "
                                    ></vs-icon>
                                    <vs-icon
                                      class="services-list-icon-m text-dark"
                                      icon="local_parking"
                                      v-if="
                                        item.tarif_parking == '1' ||
                                        item.tarif_parking == 'true'
                                      "
                                    ></vs-icon>
                                  </div>
                                  <div class="mt-2" style="text-align: left">
                                    <span
                                      class="result-title-m"
                                      style="
                                        font-weight: bold;
                                        font-size: 13px;
                                        color: #348ddb;
                                      "
                                      >XOF
                                      {{ item.tarif_jour | formatThousands }}
                                      <em style="font-size: 12px"
                                        >/jour</em
                                      ></span
                                    ><br />
                                    <span
                                      class="result-title-m"
                                      style="
                                        color: gray;
                                        font-size: 10px;
                                        text-align: center;
                                      "
                                      v-if="item.nb_jour_reduction.lentgh >= 1"
                                      >Reduction à partir de
                                      {{ item.nb_jour_reduction }}</span
                                    ><br />
                                  </div>
                                </div>
                              </vs-col>
                            </vs-row>
                          </div>
                          <vs-divider style="margin: 0px" />
                          <el-alert
                            v-if="item.autorisation == 'activ'"
                            title="En ligne"
                            :closable="false"
                            type="success"
                            show-icon
                          >
                          </el-alert>
                          <el-alert
                            v-if="item.autorisation == 'oo'"
                            :closable="false"
                            title="En cours de validation (Patienter...)"
                            type="warning"
                            show-icon
                          >
                          </el-alert>
                          <el-alert
                            v-if="item.autorisation == 'ko'"
                            :closable="false"
                            title="Réjété"
                            type="error"
                            v-html="item.description"
                            show-icon
                          >
                          </el-alert>
                          <vs-divide style="margin: 0px" />
                          <vs-row>
                            <vs-col
                              style="padding: 5px"
                              v-tooltip="'col - 3'"
                              vs-justify="center"
                              vs-align="center"
                              vs-w="4"
                            >
                              <vs-button
                                @click="Modification(item)"
                                color="primary"
                                type="border"
                                icon="update"
                                >Modifier</vs-button
                              >
                            </vs-col>
                            <vs-col
                              style="padding: 5px"
                              v-tooltip="'col - 3'"
                              vs-justify="center"
                              vs-align="center"
                              vs-w="4"
                            >
                              <vs-button
                                @click="deleteFavoris(item.id_favoris)"
                                color="danger"
                                type="border"
                                icon="delete"
                                >Supprimer</vs-button
                              >
                            </vs-col>
                          </vs-row>
                        </vs-card>
                      </div>

                      <!-- Condition lorsque l'utilisateur n'a pas d'établissement inscrit -->
                      <div class="empty mb-8">
                        <div class="d-flex justify-content-center mb-5">
                          <img
                            src="@/assets/images/element/desert.svg"
                            alt=""
                          />
                        </div>
                        <div class="d-grid justify-content-center">
                          <p>Vous n'avez pas d'établissement inscrit.</p>
                          <vs-button
                            style="background: #348ddb !important"
                            class="fw-semibold"
                            >Inscrire mon établissement</vs-button
                          >
                        </div>
                      </div>
                      <!-- Fin condition lorsque l'utilisateur n'a pas d'établissement inscrit -->

                      <!-- Card item END -->
                    </el-row>
                  </div>
                </div>
              </vs-col>
            </vs-col>
          </vs-tab>
        </vs-tabs>
      </div>

      <!-- <div class="mobile-nav">
          <div class="container-mobile  mb-2">
              <div class="mobile-group">
                <vs-button  >Ajouter un nouveau établissement</vs-button>
              </div>
          </div>
      </div> -->
    </div>

    <div v-else>
      <section class="pt-3" >
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-xl-4">
              <!-- Sidebar START -->
              <SidebarMenu />
              <!-- Sidebar END -->
            </div>
            <div class="col-lg-8 col-xl-8 ps-xl-4">
              <div class="card  menu-account">
                <!-- Card header -->
                <div class="card-header border-bottom">
                  <h4 class="card-header-title">Mes établissements</h4>
                </div>

                <!-- Card body START -->
                <div class="card-body p-0">
              <vs-tabs
                :color="colorx"
                alignment="fixed"
                class="mb-3"
                style="z-index: 2"
              >
                <!-- Tous les résidence -->
                <vs-tab label="Tout" icon="dashboard">
                  <vs-col
                    class="mt-2"
                    v-tooltip="'col - 3'"
                    vs-type="flex"
                    vs-align="center"
                    vs-w="12 "
                  >
                    <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                      <div
                        class="result-item-detail-m"
                        style="padding: 0px 6px"
                      >
                        <div style="display: block" class="">
                          <el-row>
                            <div class="d-flex gap-2 flex-wrap">
                              <vs-card
                                class="result-item"
                                v-for="item in datasBiens"
                                :key="item.id_item"
                                style="
                                  margin: 5px auto;
                                  max-width: 400px;
                                  padding: 5px;
                                  padding-bottom: 0px;
                                "
                              >
                                <div style="color: black">
                                  <vs-row>
                                    <vs-col
                                      v-tooltip="'col - 3'"
                                      vs-justify="center"
                                      vs-align="center"
                                      vs-w="6.5"
                                    >
                                      <img
                                        class="img"
                                        :src="item.image1"
                                        style="
                                          width: 300px !important;
                                          height: 132px;
                                          border-radius: 5px;
                                        "
                                      />
                                    </vs-col>
                                    <vs-col
                                      v-tooltip="'col - 3'"
                                      vs-justify="center"
                                      vs-align="center"
                                      vs-w="5.5"
                                      style=""
                                    >
                                      <div class="result-item-detail">
                                        <span class="result-title-m">{{
                                          item.libelle
                                        }}</span>
                                        <span
                                          class="result-location-m"
                                          style="color: orange"
                                          v-if="item.ville_item == 'Abidjan'"
                                        >
                                          <vs-icon
                                            icon="place"
                                            style="
                                              font-size: 15px;
                                              color: orange;
                                            "
                                          ></vs-icon>
                                          {{ item.commune_item }},
                                          <em
                                            style="
                                              color: #67c23a;
                                              font-weight: bold;
                                            "
                                            >{{ item.quartier_item }}</em
                                          >
                                        </span>
                                        <span
                                          class="result-location-m"
                                          style="color: orange"
                                          v-else
                                        >
                                          <vs-icon
                                            icon="place"
                                            style="
                                              font-size: 15px;
                                              color: orange;
                                            "
                                          ></vs-icon>
                                          {{ item.ville_item }},
                                          <em
                                            style="
                                              color: #67c23a;
                                              font-weight: bold;
                                            "
                                            >{{ item.quartier_item }}</em
                                          >
                                        </span>
                                        <div
                                          class="services-list-m mt-2"
                                          style="
                                            margin-top: 5px;
                                            text-align: left;
                                          "
                                        >
                                          <vs-icon
                                            class="services-list-icon-m text-dark"
                                            icon="verified_user"
                                            v-if="
                                              item.agent_securite == '1' ||
                                              item.agent_securite == 'true'
                                            "
                                          ></vs-icon>
                                          <vs-icon
                                            class="services-list-icon-m text-dark"
                                            icon="wifi"
                                            v-if="
                                              item.eqpm_internet == '1' ||
                                              item.eqpm_internet == 'true'
                                            "
                                          ></vs-icon>
                                          <vs-icon
                                            class="services-list-icon-m text-dark"
                                            icon="pool"
                                            v-if="
                                              item.eqpm_piscine_pb == '1' ||
                                              item.eqpm_piscine_pv == '1' ||
                                              item.eqpm_piscine_pb == 'true' ||
                                              item.eqpm_piscine_pv == 'true'
                                            "
                                          ></vs-icon>
                                          <vs-icon
                                            class="services-list-icon-m text-dark"
                                            icon="bath_private"
                                            v-if="
                                              item.eqpm_jacuzzi == '1' ||
                                              item.eqpm_jacuzzi == 'true'
                                            "
                                          ></vs-icon>
                                          <vs-icon
                                            class="services-list-icon-m text-dark"
                                            icon="tv"
                                            v-if="
                                              item.eqpm_tv == '1' ||
                                              item.eqpm_tv == 'true'
                                            "
                                          ></vs-icon>
                                          <vs-icon
                                            class="services-list-icon-m text-dark"
                                            icon="local_parking"
                                            v-if="
                                              item.tarif_parking == '1' ||
                                              item.tarif_parking == 'true'
                                            "
                                          ></vs-icon>
                                        </div>
                                        <div
                                          class="mt-2"
                                          style="text-align: left"
                                        >
                                          <span
                                            class="result-title-m"
                                            style="
                                              font-weight: bold;
                                              font-size: 13px;
                                              color: #348ddb;
                                            "
                                            >XOF
                                            {{
                                              item.tarif_jour | formatThousands
                                            }}
                                            <em style="font-size: 12px"
                                              >/jour</em
                                            ></span
                                          ><br />
                                          <span
                                            class="result-title-m"
                                            style="
                                              color: gray;
                                              font-size: 10px;
                                              text-align: center;
                                            "
                                            v-if="
                                              item.nb_jour_reduction.lentgh >= 1
                                            "
                                            >Reduction à partir de
                                            {{ item.nb_jour_reduction }}</span
                                          ><br />
                                        </div>
                                      </div>
                                    </vs-col>
                                  </vs-row>
                                </div>
                                <vs-divider style="margin: 0px" />
                                <el-alert
                                  v-if="item.autorisation == 'activ'"
                                  title="En ligne"
                                  :closable="false"
                                  type="success"
                                  show-icon
                                >
                                </el-alert>
                                <el-alert
                                  v-if="item.autorisation == 'oo'"
                                  :closable="false"
                                  title="En cours de validation (Patienter...)"
                                  type="warning"
                                  show-icon
                                >
                                </el-alert>
                                <el-alert
                                  v-if="item.autorisation == 'ko'"
                                  :closable="false"
                                  title="Réjété"
                                  type="error" v-html="item.description"
                                  show-icon
                                >
                                </el-alert>
                                <vs-divide style="margin: 0px" />
                                <vs-row>
                                  <vs-col
                                    v-if="item.autorisation == 'activ'"
                                    style="padding: 5px"
                                    v-tooltip="'col - 3'"
                                    vs-justify="center"
                                    vs-align="center"
                                    vs-w="4"
                                  >
                                    <vs-button
                                      @click="GoToDetails(item)"
                                      color="primary"
                                      type="border"
                                      icon="update"
                                      >Voir</vs-button
                                    >
                                  </vs-col>
                                  <vs-col
                                    style="padding: 5px"
                                    v-tooltip="'col - 3'"
                                    vs-justify="center"
                                    vs-align="center"
                                    vs-w="4"
                                  >
                                    <vs-button
                                      @click="Modification(item)"
                                      color="primary"
                                      type="border"
                                      icon="update"
                                      >Modifier</vs-button
                                    >
                                  </vs-col>
                                  <vs-col
                                    style="padding: 5px"
                                    v-tooltip="'col - 3'"
                                    vs-justify="center"
                                    vs-align="center"
                                    vs-w="4"
                                  >
                                    <vs-button
                                      @click="deleteFavoris(item.id_favoris)"
                                      color="danger"
                                      type="border"
                                      icon="delete"
                                      >Supprimer</vs-button
                                    >
                                  </vs-col>
                                </vs-row>
                              </vs-card>
                            </div>

                            <!-- Condition lorsque l'utilisateur n'a pas d'établissement inscrit -->
                            <div class="empty mb-8">
                              <div class="d-flex justify-content-center mb-5">
                                <img
                                  src="@/assets/images/element/desert.svg"
                                  alt=""
                                />
                              </div>
                              <div class="d-grid justify-content-center">
                                <p>Vous n'avez pas d'établissement inscrit.</p>
                                <vs-button
                                  style="background: #348ddb !important"
                                  class="fw-semibold"
                                  >Inscrire mon établissement</vs-button
                                >
                              </div>
                            </div>
                            <!-- Fin condition lorsque l'utilisateur n'a pas d'établissement inscrit -->

                            <!-- Card item END -->
                          </el-row>
                        </div>
                      </div>
                    </vs-col>
                  </vs-col>
                </vs-tab>

                <!-- Résidence validé -->
                <vs-tab label="Validé" icon="task_alt" color="#000000">
                  <vs-col
                    class="mt-2"
                    v-tooltip="'col - 3'"
                    vs-type="flex"
                    vs-align="center"
                    vs-w="12 "
                  >
                    <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                      <div
                        class="result-item-detail-m"
                        style="padding: 0px 6px"
                      >
                        <div style="display: block" class="">
                          <el-row>
                            <div v-for="item in datasBiens" :key="item.id_item">
                              <vs-card
                                class="result-item"
                                v-if="item.autorisation == 'activ'"
                                style="
                                  margin: 5px auto;
                                  max-width: 400px;
                                  padding: 5px;
                                  padding-bottom: 0px;
                                "
                              >
                                <div style="color: black">
                                  <vs-row>
                                    <vs-col
                                      v-tooltip="'col - 3'"
                                      vs-justify="center"
                                      vs-align="center"
                                      vs-w="6.5"
                                    >
                                      <img
                                        class="img"
                                        :src="item.image1"
                                        style="
                                          width: 300px !important;
                                          height: 132px;
                                          border-radius: 5px;
                                        "
                                      />
                                    </vs-col>
                                    <vs-col
                                      v-tooltip="'col - 3'"
                                      vs-justify="center"
                                      vs-align="center"
                                      vs-w="5.5"
                                      style=""
                                    >
                                      <div class="result-item-detail">
                                        <span class="result-title-m">{{
                                          item.libelle
                                        }}</span>
                                        <span
                                          class="result-location-m"
                                          style="color: orange"
                                          v-if="item.ville_item == 'Abidjan'"
                                        >
                                          <vs-icon
                                            icon="place"
                                            style="
                                              font-size: 15px;
                                              color: orange;
                                            "
                                          ></vs-icon>
                                          {{ item.commune_item }},
                                          <em
                                            style="
                                              color: #67c23a;
                                              font-weight: bold;
                                            "
                                            >{{ item.quartier_item }}</em
                                          >
                                        </span>
                                        <span
                                          class="result-location-m"
                                          style="color: orange"
                                          v-else
                                        >
                                          <vs-icon
                                            icon="place"
                                            style="
                                              font-size: 15px;
                                              color: orange;
                                            "
                                          ></vs-icon>
                                          {{ item.ville_item }},
                                          <em
                                            style="
                                              color: #67c23a;
                                              font-weight: bold;
                                            "
                                            >{{ item.quartier_item }}</em
                                          >
                                        </span>
                                        <div
                                          class="services-list-m mt-2"
                                          style="
                                            margin-top: 5px;
                                            text-align: left;
                                          "
                                        >
                                          <vs-icon
                                            class="services-list-icon-m text-dark"
                                            icon="verified_user"
                                            v-if="
                                              item.agent_securite == '1' ||
                                              item.agent_securite == 'true'
                                            "
                                          ></vs-icon>
                                          <vs-icon
                                            class="services-list-icon-m text-dark"
                                            icon="wifi"
                                            v-if="
                                              item.eqpm_internet == '1' ||
                                              item.eqpm_internet == 'true'
                                            "
                                          ></vs-icon>
                                          <vs-icon
                                            class="services-list-icon-m text-dark"
                                            icon="pool"
                                            v-if="
                                              item.eqpm_piscine_pb == '1' ||
                                              item.eqpm_piscine_pv == '1' ||
                                              item.eqpm_piscine_pb == 'true' ||
                                              item.eqpm_piscine_pv == 'true'
                                            "
                                          ></vs-icon>
                                          <vs-icon
                                            class="services-list-icon-m text-dark"
                                            icon="bath_private"
                                            v-if="
                                              item.eqpm_jacuzzi == '1' ||
                                              item.eqpm_jacuzzi == 'true'
                                            "
                                          ></vs-icon>
                                          <vs-icon
                                            class="services-list-icon-m text-dark"
                                            icon="tv"
                                            v-if="
                                              item.eqpm_tv == '1' ||
                                              item.eqpm_tv == 'true'
                                            "
                                          ></vs-icon>
                                          <vs-icon
                                            class="services-list-icon-m text-dark"
                                            icon="local_parking"
                                            v-if="
                                              item.tarif_parking == '1' ||
                                              item.tarif_parking == 'true'
                                            "
                                          ></vs-icon>
                                        </div>
                                        <div
                                          class="mt-2"
                                          style="text-align: left"
                                        >
                                          <span
                                            class="result-title-m"
                                            style="
                                              font-weight: bold;
                                              font-size: 13px;
                                              color: #348ddb;
                                            "
                                            >XOF
                                            {{
                                              item.tarif_jour | formatThousands
                                            }}
                                            <em style="font-size: 12px"
                                              >/jour</em
                                            ></span
                                          ><br />
                                          <span
                                            class="result-title-m"
                                            style="
                                              color: gray;
                                              font-size: 10px;
                                              text-align: center;
                                            "
                                            v-if="
                                              item.nb_jour_reduction.lentgh >= 1
                                            "
                                            >Reduction à partir de
                                            {{ item.nb_jour_reduction }}</span
                                          ><br />
                                        </div>
                                      </div>
                                    </vs-col>
                                  </vs-row>
                                </div>
                                <vs-divider style="margin: 0px" />
                                <el-alert
                                  v-if="item.autorisation == 'activ'"
                                  title="En ligne"
                                  :closable="false"
                                  type="success"
                                  show-icon
                                >
                                </el-alert>
                                <el-alert
                                  v-if="item.autorisation == 'oo'"
                                  :closable="false"
                                  title="En cours de validation (Patienter...)"
                                  type="warning"
                                  show-icon
                                >
                                </el-alert>
                                <el-alert
                                  v-if="item.autorisation == 'ko'"
                                  :closable="false"
                                  title="Rejeter - (Cliquez ici pour voir le motif)"
                                  type="error"
                                  show-icon
                                >
                                </el-alert>
                                <vs-divide style="margin: 0px" />
                                <vs-row>
                                  <vs-col
                                    style="padding: 5px"
                                    v-tooltip="'col - 3'"
                                    vs-justify="center"
                                    vs-align="center"
                                    vs-w="4"
                                  >
                                    <vs-button
                                      @click="GoToDetails(item)"
                                      color="primary"
                                      type="border"
                                      icon="update"
                                      >Voir</vs-button
                                    >
                                  </vs-col>
                                  <vs-col
                                    style="padding: 5px"
                                    v-tooltip="'col - 3'"
                                    vs-justify="center"
                                    vs-align="center"
                                    vs-w="4"
                                  >
                                    <vs-button
                                      @click="Modification(item)"
                                      color="primary"
                                      type="border"
                                      icon="update"
                                      >Modifier</vs-button
                                    >
                                  </vs-col>
                                  <vs-col
                                    style="padding: 5px"
                                    v-tooltip="'col - 3'"
                                    vs-justify="center"
                                    vs-align="center"
                                    vs-w="4"
                                  >
                                    <vs-button
                                      @click="deleteFavoris(item.id_favoris)"
                                      color="danger"
                                      type="border"
                                      icon="delete"
                                      >Supprimer</vs-button
                                    >
                                  </vs-col>
                                </vs-row>
                              </vs-card>
                            </div>

                            <!-- Condition lorsque l'utilisateur n'a pas d'établissement inscrit -->
                            <div class="empty mb-8">
                              <div class="d-flex justify-content-center mb-5">
                                <img
                                  src="@/assets/images/element/desert.svg"
                                  alt=""
                                />
                              </div>
                              <div class="d-grid justify-content-center">
                                <p>Vous n'avez pas d'établissement inscrit.</p>
                                <vs-button
                                  style="background: #348ddb !important"
                                  class="fw-semibold"
                                  >Inscrire mon établissement</vs-button
                                >
                              </div>
                            </div>
                            <!-- Fin condition lorsque l'utilisateur n'a pas d'établissement inscrit -->

                            <!-- Card item END -->
                          </el-row>
                        </div>
                      </div>
                    </vs-col>
                  </vs-col>
                </vs-tab>

                <!-- Résidence en cours de validité -->
                <vs-tab label="En cours" icon="history" color="#000000">
                  <vs-col
                    class="mt-2"
                    v-tooltip="'col - 3'"
                    vs-type="flex"
                    vs-align="center"
                    vs-w="12 "
                  >
                    <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                      <div
                        class="result-item-detail-m"
                        style="padding: 0px 6px"
                      >
                        <div style="display: block" class="">
                          <el-row>
                            <div v-for="item in datasBiens" :key="item.id_item">
                              <vs-card
                                class="result-item"
                                v-if="item.autorisation == 'oo'"
                                style="
                                  margin: 5px auto;
                                  max-width: 400px;
                                  padding: 5px;
                                  padding-bottom: 0px;
                                "
                              >
                                <div style="color: black">
                                  <vs-row>
                                    <vs-col
                                      v-tooltip="'col - 3'"
                                      vs-justify="center"
                                      vs-align="center"
                                      vs-w="6.5"
                                    >
                                      <img
                                        class="img"
                                        :src="item.image1"
                                        style="
                                          width: 300px !important;
                                          height: 132px;
                                          border-radius: 5px;
                                        "
                                      />
                                    </vs-col>
                                    <vs-col
                                      v-tooltip="'col - 3'"
                                      vs-justify="center"
                                      vs-align="center"
                                      vs-w="5.5"
                                      style=""
                                    >
                                      <div class="result-item-detail">
                                        <span class="result-title-m">{{
                                          item.libelle
                                        }}</span>
                                        <span
                                          class="result-location-m"
                                          style="color: orange"
                                          v-if="item.ville_item == 'Abidjan'"
                                        >
                                          <vs-icon
                                            icon="place"
                                            style="
                                              font-size: 15px;
                                              color: orange;
                                            "
                                          ></vs-icon>
                                          {{ item.commune_item }},
                                          <em
                                            style="
                                              color: #67c23a;
                                              font-weight: bold;
                                            "
                                            >{{ item.quartier_item }}</em
                                          >
                                        </span>
                                        <span
                                          class="result-location-m"
                                          style="color: orange"
                                          v-else
                                        >
                                          <vs-icon
                                            icon="place"
                                            style="
                                              font-size: 15px;
                                              color: orange;
                                            "
                                          ></vs-icon>
                                          {{ item.ville_item }},
                                          <em
                                            style="
                                              color: #67c23a;
                                              font-weight: bold;
                                            "
                                            >{{ item.quartier_item }}</em
                                          >
                                        </span>
                                        <div
                                          class="services-list-m mt-2"
                                          style="
                                            margin-top: 5px;
                                            text-align: left;
                                          "
                                        >
                                          <vs-icon
                                            class="services-list-icon-m text-dark"
                                            icon="verified_user"
                                            v-if="
                                              item.agent_securite == '1' ||
                                              item.agent_securite == 'true'
                                            "
                                          ></vs-icon>
                                          <vs-icon
                                            class="services-list-icon-m text-dark"
                                            icon="wifi"
                                            v-if="
                                              item.eqpm_internet == '1' ||
                                              item.eqpm_internet == 'true'
                                            "
                                          ></vs-icon>
                                          <vs-icon
                                            class="services-list-icon-m text-dark"
                                            icon="pool"
                                            v-if="
                                              item.eqpm_piscine_pb == '1' ||
                                              item.eqpm_piscine_pv == '1' ||
                                              item.eqpm_piscine_pb == 'true' ||
                                              item.eqpm_piscine_pv == 'true'
                                            "
                                          ></vs-icon>
                                          <vs-icon
                                            class="services-list-icon-m text-dark"
                                            icon="bath_private"
                                            v-if="
                                              item.eqpm_jacuzzi == '1' ||
                                              item.eqpm_jacuzzi == 'true'
                                            "
                                          ></vs-icon>
                                          <vs-icon
                                            class="services-list-icon-m text-dark"
                                            icon="tv"
                                            v-if="
                                              item.eqpm_tv == '1' ||
                                              item.eqpm_tv == 'true'
                                            "
                                          ></vs-icon>
                                          <vs-icon
                                            class="services-list-icon-m text-dark"
                                            icon="local_parking"
                                            v-if="
                                              item.tarif_parking == '1' ||
                                              item.tarif_parking == 'true'
                                            "
                                          ></vs-icon>
                                        </div>
                                        <div
                                          class="mt-2"
                                          style="text-align: left"
                                        >
                                          <span
                                            class="result-title-m"
                                            style="
                                              font-weight: bold;
                                              font-size: 13px;
                                              color: #348ddb;
                                            "
                                            >XOF
                                            {{
                                              item.tarif_jour | formatThousands
                                            }}
                                            <em style="font-size: 12px"
                                              >/jour</em
                                            ></span
                                          ><br />
                                          <span
                                            class="result-title-m"
                                            style="
                                              color: gray;
                                              font-size: 10px;
                                              text-align: center;
                                            "
                                            v-if="
                                              item.nb_jour_reduction.lentgh >= 1
                                            "
                                            >Reduction à partir de
                                            {{ item.nb_jour_reduction }}</span
                                          ><br />
                                        </div>
                                      </div>
                                    </vs-col>
                                  </vs-row>
                                </div>
                                <vs-divider style="margin: 0px" />
                                <el-alert
                                  v-if="item.autorisation == 'activ'"
                                  title="En ligne"
                                  :closable="false"
                                  type="success"
                                  show-icon
                                >
                                </el-alert>
                                <el-alert
                                  v-if="item.autorisation == 'oo'"
                                  :closable="false"
                                  title="En cours de validation (Patienter...)"
                                  type="warning"
                                  show-icon
                                >
                                </el-alert>
                                <el-alert
                                  v-if="item.autorisation == 'ko'"
                                  :closable="false"
                                  title="Rejeter - (Cliquez ici pour voir le motif)"
                                  type="error"
                                  show-icon
                                >
                                </el-alert>
                                <vs-divide style="margin: 0px" />
                                <vs-row>
                                  <vs-col
                                    style="padding: 5px"
                                    v-tooltip="'col - 3'"
                                    vs-justify="center"
                                    vs-align="center"
                                    vs-w="4"
                                  >
                                    <vs-button
                                      @click="Modification(item)"
                                      color="primary"
                                      type="border"
                                      icon="update"
                                      >Modifier</vs-button
                                    >
                                  </vs-col>
                                  <vs-col
                                    style="padding: 5px"
                                    v-tooltip="'col - 3'"
                                    vs-justify="center"
                                    vs-align="center"
                                    vs-w="4"
                                  >
                                    <vs-button
                                      @click="deleteFavoris(item.id_favoris)"
                                      color="danger"
                                      type="border"
                                      icon="delete"
                                      >Supprimer</vs-button
                                    >
                                  </vs-col>
                                </vs-row>
                              </vs-card>
                            </div>

                            <!-- Condition lorsque l'utilisateur n'a pas d'établissement inscrit -->
                            <div class="empty mb-8">
                              <div class="d-flex justify-content-center mb-5">
                                <img
                                  src="@/assets/images/element/desert.svg"
                                  alt=""
                                />
                              </div>
                              <div class="d-grid justify-content-center">
                                <p>Vous n'avez pas d'établissement inscrit.</p>
                                <vs-button
                                  style="background: #348ddb !important"
                                  class="fw-semibold"
                                  >Inscrire mon établissement</vs-button
                                >
                              </div>
                            </div>
                            <!-- Fin condition lorsque l'utilisateur n'a pas d'établissement inscrit -->

                            <!-- Card item END -->
                          </el-row>
                        </div>
                      </div>
                    </vs-col>
                  </vs-col>
                </vs-tab>

                <vs-tab label="Réjété" icon="delete" color="danger">
                  <vs-col
                    class="mt-2"
                    v-tooltip="'col - 3'"
                    vs-type="flex"
                    vs-align="center"
                    vs-w="12 "
                  >
                    <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                      <div
                        class="result-item-detail-m"
                        style="padding: 0px 6px"
                      >
                        <div style="display: block" class="">
                          <el-row>
                            <div v-for="item in datasBiens" :key="item.id_item">
                              <vs-card
                                class="result-item"
                                v-if="item.autorisation == 'ko'"
                                style="
                                  margin: 5px auto;
                                  max-width: 400px;
                                  padding: 5px;
                                  padding-bottom: 0px;
                                "
                              >
                                <div style="color: black">
                                  <vs-row>
                                    <vs-col
                                      v-tooltip="'col - 3'"
                                      vs-justify="center"
                                      vs-align="center"
                                      vs-w="6.5"
                                    >
                                      <img
                                        class="img"
                                        :src="item.image1"
                                        style="
                                          width: 300px !important;
                                          height: 132px;
                                          border-radius: 5px;
                                        "
                                      />
                                    </vs-col>
                                    <vs-col
                                      v-tooltip="'col - 3'"
                                      vs-justify="center"
                                      vs-align="center"
                                      vs-w="5.5"
                                      style=""
                                    >
                                      <div class="result-item-detail">
                                        <span class="result-title-m">{{
                                          item.libelle
                                        }}</span>
                                        <span
                                          class="result-location-m"
                                          style="color: orange"
                                          v-if="item.ville_item == 'Abidjan'"
                                        >
                                          <vs-icon
                                            icon="place"
                                            style="
                                              font-size: 15px;
                                              color: orange;
                                            "
                                          ></vs-icon>
                                          {{ item.commune_item }},
                                          <em
                                            style="
                                              color: #67c23a;
                                              font-weight: bold;
                                            "
                                            >{{ item.quartier_item }}</em
                                          >
                                        </span>
                                        <span
                                          class="result-location-m"
                                          style="color: orange"
                                          v-else
                                        >
                                          <vs-icon
                                            icon="place"
                                            style="
                                              font-size: 15px;
                                              color: orange;
                                            "
                                          ></vs-icon>
                                          {{ item.ville_item }},
                                          <em
                                            style="
                                              color: #67c23a;
                                              font-weight: bold;
                                            "
                                            >{{ item.quartier_item }}</em
                                          >
                                        </span>
                                        <div
                                          class="services-list-m mt-2"
                                          style="
                                            margin-top: 5px;
                                            text-align: left;
                                          "
                                        >
                                          <vs-icon
                                            class="services-list-icon-m text-dark"
                                            icon="verified_user"
                                            v-if="
                                              item.agent_securite == '1' ||
                                              item.agent_securite == 'true'
                                            "
                                          ></vs-icon>
                                          <vs-icon
                                            class="services-list-icon-m text-dark"
                                            icon="wifi"
                                            v-if="
                                              item.eqpm_internet == '1' ||
                                              item.eqpm_internet == 'true'
                                            "
                                          ></vs-icon>
                                          <vs-icon
                                            class="services-list-icon-m text-dark"
                                            icon="pool"
                                            v-if="
                                              item.eqpm_piscine_pb == '1' ||
                                              item.eqpm_piscine_pv == '1' ||
                                              item.eqpm_piscine_pb == 'true' ||
                                              item.eqpm_piscine_pv == 'true'
                                            "
                                          ></vs-icon>
                                          <vs-icon
                                            class="services-list-icon-m text-dark"
                                            icon="bath_private"
                                            v-if="
                                              item.eqpm_jacuzzi == '1' ||
                                              item.eqpm_jacuzzi == 'true'
                                            "
                                          ></vs-icon>
                                          <vs-icon
                                            class="services-list-icon-m text-dark"
                                            icon="tv"
                                            v-if="
                                              item.eqpm_tv == '1' ||
                                              item.eqpm_tv == 'true'
                                            "
                                          ></vs-icon>
                                          <vs-icon
                                            class="services-list-icon-m text-dark"
                                            icon="local_parking"
                                            v-if="
                                              item.tarif_parking == '1' ||
                                              item.tarif_parking == 'true'
                                            "
                                          ></vs-icon>
                                        </div>
                                        <div
                                          class="mt-2"
                                          style="text-align: left"
                                        >
                                          <span
                                            class="result-title-m"
                                            style="
                                              font-weight: bold;
                                              font-size: 13px;
                                              color: #348ddb;
                                            "
                                            >XOF
                                            {{
                                              item.tarif_jour | formatThousands
                                            }}
                                            <em style="font-size: 12px"
                                              >/jour</em
                                            ></span
                                          ><br />
                                          <span
                                            class="result-title-m"
                                            style="
                                              color: gray;
                                              font-size: 10px;
                                              text-align: center;
                                            "
                                            v-if="
                                              item.nb_jour_reduction.lentgh >= 1
                                            "
                                            >Reduction à partir de
                                            {{ item.nb_jour_reduction }}</span
                                          ><br />
                                        </div>
                                      </div>
                                    </vs-col>
                                  </vs-row>
                                </div>
                                <vs-divider style="margin: 0px" />
                                <el-alert
                                  v-if="item.autorisation == 'activ'"
                                  title="En ligne"
                                  :closable="false"
                                  type="success"
                                  show-icon
                                >
                                </el-alert>
                                <el-alert
                                  v-if="item.autorisation == 'oo'"
                                  :closable="false"
                                  title="En cours de validation (Patienter...)"
                                  type="warning"
                                  show-icon
                                >
                                </el-alert>
                                <el-alert
                                  v-if="item.autorisation == 'ko'"
                                  :closable="false"
                                  title="Réjété"
                                  type="error"
                                  v-html="item.description"
                                  show-icon
                                >
                                </el-alert>
                                <vs-divide style="margin: 0px" />
                                <vs-row>
                                  <vs-col
                                    style="padding: 5px"
                                    v-tooltip="'col - 3'"
                                    vs-justify="center"
                                    vs-align="center"
                                    vs-w="4"
                                  >
                                    <vs-button
                                      @click="Modification(item)"
                                      color="primary"
                                      type="border"
                                      icon="update"
                                      >Modifier</vs-button
                                    >
                                  </vs-col>
                                  <vs-col
                                    style="padding: 5px"
                                    v-tooltip="'col - 3'"
                                    vs-justify="center"
                                    vs-align="center"
                                    vs-w="4"
                                  >
                                    <vs-button
                                      @click="deleteFavoris(item.id_favoris)"
                                      color="danger"
                                      type="border"
                                      icon="delete"
                                      >Supprimer</vs-button
                                    >
                                  </vs-col>
                                </vs-row>
                              </vs-card>
                            </div>

                            <!-- Condition lorsque l'utilisateur n'a pas d'établissement inscrit -->
                            <div class="empty mb-8">
                              <div class="d-flex justify-content-center mb-5">
                                <img
                                  src="@/assets/images/element/desert.svg"
                                  alt=""
                                />
                              </div>
                              <div class="d-grid justify-content-center">
                                <p>Vous n'avez pas d'établissement inscrit.</p>
                                <vs-button
                                  style="background: #348ddb !important"
                                  class="fw-semibold"
                                  >Inscrire mon établissement</vs-button
                                >
                              </div>
                            </div>
                            <!-- Fin condition lorsque l'utilisateur n'a pas d'établissement inscrit -->

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
    },
  },
  data() {
    return {
      colorx: "#050A30",
      datas: [],
      isMobile: isMobile,
      datasBiens: null,
      connexionMessage: "",
      options: [
        {
          value: "Propriétaire",
          label: "Propriétaire",
        },
        {
          value: "Gestionnaire",
          label: "Gestionnaire",
        },
        {
          value: "Assistant(e)",
          label: "Assistant(e)",
        },
      ],
      chargeFichier3: 0,
      photo:
        "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
      value: "",
      radio: 3,
      email: "oumarsakone75@gmail.com",
      form: {
        nom: "",
        prenom: "",
        contact: "",
        role: "",
        genre: "",
        adresse: "",
      },
    };
  },
  methods: {
    retour() {
      this.$router.back();
    },

    getBiens() {
      this.$vs.loading();
      this.$axios
        .get("/biens.php?agt=" + this.users.id)
        .then((response) => {
          // Traitement de la réponse du serveur
          this.datasBiens = response.data.data;
          console.log(this.datasBiens);
          this.$vs.loading.close();
        })
        .catch((error) => {
          // Gestion des erreurs
          console.error(error);
          this.$vs.loading.close();
        });
    },
    sendDataToServer() {
      this.form.email = encryptData(this.email);
      this.$vs.loading();

      // Envoyer la requête au serveur
      this.$axios
        .post("/profile_agent.php", this.form)
        .then((response) => {
          // Traitement de la réponse du serveur
          this.verif(response);
          this.$vs.loading.close();
        })
        .catch((error) => {
          // Gestion des erreurs
          console.error(error);
          this.$vs.loading.close();
        });
    },

    sendPhotoToServer() {
      this.profilePhoto = {
        photo: this.photo,
        email: encryptData(this.email),
      };

      this.$vs.loading();

      // Envoyer la requête au serveur
      this.$axios
        .post("/profile_photo.php", this.profilePhoto)
        .then((response) => {
          // Traitement de la réponse du serveur
          this.verif(response);
          this.$vs.loading.close();
          this.verif(response);
        })
        .catch((error) => {
          // Gestion des erreurs
          console.error(error);
          this.$vs.loading.close();
        });
    },

    verif(data) {
      if (data.data.valide == 0 || data.data.valide == 2) {
        this.erreur = true;
        this.connexionMessage = data.data.mes;
        this.$vs.notify({
          title: "Erreur",
          text: this.connexionMessage,
          color: "danger",
          position: "top-center",
        });
      }
      if (data.data.valide == 1) {
        this.erreur = false;
        this.success = true;
        this.connexionMessage = data.data.mes;
        this.$vs.notify({
          title: "Succès",
          text: this.connexionMessage,
          color: "success",
          position: "top-center",
        });
      }
      if (
        (data.data.valide == 8) &
        (data.data.data[0].identifiant !== "sakone@sygestra.com")
      ) {
        this.$store.commit("Connexion", data.data.data[0]);
        this.$router.push({ path: "/" });
        console.log("connexion");
      }
    },

    Modification(item) {
      this.$store.commit("BiensModif", item);
      this.$router.push({ path: "/modif_residence" });
    },

    uploadImage(e, a) {
      console.log("choix");

      if (a === "c") {
        this.chargeFichier3 = 1;
      }
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.image = files[0];

      let formData = new FormData();
      let uploadPreset = "dsegjq9c";
      let cloudinaryUrl =
        "https://api.cloudinary.com/v1_1/r-sidence-meubl-e/upload";
      this.annee = this.printYear();
      formData.append("file", this.image);
      formData.append("public_id", this.annee);
      formData.append("upload_preset", uploadPreset);

      this.$axios
        .post(cloudinaryUrl, formData)
        .then((res) => {
          if (a === "a") {
            this.chargeFichier = 2;
            let fichierUrl = res.data;
            this.form.fichier_permis = fichierUrl.url;
          }
          if (a === "b") {
            this.chargeFichier2 = 2;
            let fichierUrl = res.data;
            this.form.fichier_piece = fichierUrl.url;
          }
          if (a === "c") {
            this.chargeFichier3 = 2;
            this.photo = null;
            this.photo = res.data.url;
            this.sendPhotoToServer();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    GoToDetails(bien) {
      this.$vs.loading();
      // Déclencher la mutation pour stocker les détails du bien
      this.$store.commit("BiensDetail", bien);
      this.$vs.loading.close();
      // Naviguer vers la page de détails en passant l'identifiant du bien en paramètre
      this.$router.push({
        name: "DetailResult",
        params: { param: bien.id_item },
      });
    },

    printYear: function () {
      return (
        new Date().getFullYear() +
        "" +
        new Date().getMonth() +
        "" +
        new Date().getDate() +
        "" +
        new Date().getHours() +
        "" +
        new Date().getMinutes() +
        "" +
        new Date().getMilliseconds() +
        "" +
        new Date().getSeconds()
      );
    },
  },
  mounted() {
    this.getBiens();
  },
};
</script>
<style></style>
