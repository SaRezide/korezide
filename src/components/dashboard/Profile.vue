<template>
  <div class="home">
    <!-- =======================
  Main banner START -->
    <div v-if="isMobile">
      <div
        class="d-flex align-items-center dash-header mt-2 border-bottom bg-white"
      >
        <span class="edit-icon ms-3 my-2" @click="Back">
          <i class="fa-solid fa-arrow-left text-black"></i>
        </span>
        <span style="flex: auto" class="">
          <h6 style="font-size: 16px" class="mb-0 text-center">
            Informations personnelles
          </h6>
        </span>
      </div>
      <!-- Card body START -->
      <vs-card
        style="
          box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
          border-radius: 10px;
        "
      >
        <div class="d-grid card-body p-3">
          <!-- Form START -->
          <form class="row g-3">
            <!-- Profile photo -->
            <div class="col-12">
              <label class="form-label"
                >Téléchargez votre photo de profil<span class="text-danger"
                  >*</span
                ></label
              >
              <div class="d-flex align-items-center justify-content-center">
                <div
                  class="me-4 align-items-center"
                  for="uploadfile-1"
                  title="Replace this pic"
                >
                  <span class="avatar avatar-xl">
                    <img
                      v-if="users.photo.length > 0"
                      id="uploadfile-1-preview"
                      class="avatar-img rounded-circle border border-white border-3 shadow"
                      :src="users.photo"
                      alt=""
                    />
                    <img
                      v-else
                      id="uploadfile-1-preview"
                      class="avatar-img rounded-circle border border-white border-3 shadow"
                      src="@/assets/images/avatar/user.png"
                      alt=""
                    />
                  </span>
                </div>
                <!-- Upload button -->
                <label
                  class="edit-image"
                  style="margin-top: -62px; margin-left: -20px"
                  for="uploadfile-1"
                >
                  <i class="fa-solid fa-pen text-black"></i>
                </label>
              </div>
              <vs-progress
                indeterminate
                color="primary"
                v-show="chargeFichier3 == 1"
                >primary</vs-progress
              >
              <input
                id="uploadfile-1"
                class="form-control d-none"
                @change="uploadImage($event, 'c')"
                type="file"
              />
            </div>

            <!-- Name -->
            <div class="col-md-6">
              <label class="form-label"
                >Nom<span class="text-danger">*</span></label
              >
              <input
                class="form-control"
                placeholder="Votre nom"
                v-model="users.nom"
              />
            </div>

            <div class="col-md-6">
              <label class="form-label"
                >Prenom<span class="text-danger">*</span></label
              >
              <input
                class="form-control"
                placeholder="Votre prenom"
                v-model="users.prenom"
              />
            </div>

            <!-- Email -->
            <div class="col-md-6">
              <label class="form-label"
                >Adresse e-mail<span class="text-danger">*</span></label
              >
              <input
                class="form-control"
                placeholder="Votre adresse e-mail"
                :value="users.email"
                disabled
              />
            </div>

            <!-- Mobile -->
            <div class="col-md-6">
              <label class="form-label"
                >Numéro de téléphone portable<span class="text-danger"
                  >*</span
                ></label
              >
              <input
                class="form-control"
                placeholder="Votre contact mobile"
                v-model="users.contact"
              />
            </div>

            <!-- Nationality -->
            <div class="col-md-6">
              <label class="form-label"
                >Pays<span class="text-danger">*</span></label
              >
              <select
                class="form-control"
                v-model="users.pays"
                style="width: 100%"
              >
                <option selected>Sélectionnez votre pays</option>
                <option v-for="item in paysData"
                            :key="item.pays"
                            :value="item.pays">
                            {{ item.pays }}
                          </option>
              </select>
            </div>

            <!-- Date of birth -->

            <!-- Gender -->
            <div class="col-md-6">
              <label class="form-label"
                >Sélectionnez le sexe<span class="text-danger">*</span></label
              >
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
              <input
                v-model="users.adresse"
                class="form-control"
                placeholder="Votre adresse"
              />
            </div>

            <!-- Button -->
            <div class="col-12 text-center">
              <p @click="sendDataToServer()" class="btn btn-primary mb-0">
                Sauvegarder les modifications
              </p>
            </div>
          </form>
          <!-- Form END -->
        </div>
        <!-- Card body END -->
      </vs-card>
    </div>
    <div v-else>
      <!-- =======================
Content START -->
      <section class="pt-3">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-xl-3">
              <!-- Sidebar START -->
              <SidebarMenu />
             <!-- Sidebar END -->
            </div>

            <!-- Main content START -->
            <div class="col-lg-8 col-xl-9">
              <div class="vstack gap-4">
                <!-- Personal info START -->
                <div class="card menu-account">
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
                        <div class="form-label text-center mb-3">
                          Téléchargez votre photo de profil<span
                            class="text-danger"
                            >*</span
                          >
                        </div>
                        <div
                          class="d-flex align-items-center justify-content-center"
                        >
                          <div
                            class="me-4 align-items-center"
                            for="uploadfile-1"
                            title="Replace this pic"
                          >
                            <span class="avatar avatar-xl">
                              <img
                                v-if="users.photo > 0"
                                id="uploadfile-1-preview"
                                class="avatar-img rounded-circle border border-white border-3 shadow"
                                :src="users.photo"
                                alt=""
                              />
                              <img
                                v-else
                                id="uploadfile-1-preview"
                                class="avatar-img rounded-circle border border-white border-3 shadow"
                                src="@/assets/images/avatar/user.png"
                                alt=""
                              />
                            </span>
                          </div>
                          <!-- Upload button -->
                          <label
                            class="edit-image"
                            style="margin-top: -62px; margin-left: -20px"
                            for="uploadfile-1"
                          >
                            <i class="fa-solid fa-pen text-black"></i>
                          </label>
                        </div>
                        <vs-progress
                          indeterminate
                          color="primary"
                          v-show="chargeFichier3 == 1"
                          >primary</vs-progress
                        >
                        <input
                          id="uploadfile-1"
                          class="form-control d-none"
                          @change="uploadImage($event, 'c')"
                          type="file"
                        />
                      </div>

                      <!-- Name -->
                      <div class="col-md-6">
                        <label class="form-label"
                          >Nom<span class="text-danger">*</span></label
                        >
                        <input
                          class="form-control"
                          placeholder="Votre nom"
                          v-model="users.nom"
                        />
                      </div>

                      <div class="col-md-6">
                        <label class="form-label"
                          >Prenom<span class="text-danger">*</span></label
                        >
                        <input
                          class="form-control"
                          placeholder="Votre prenom"
                          v-model="users.prenom"
                        />
                      </div>

                      <!-- Email -->
                      <div class="col-md-6">
                        <label class="form-label"
                          >Adresse e-mail<span class="text-danger"
                            >*</span
                          ></label
                        >
                        <input
                          class="form-control"
                          placeholder="Votre adresse e-mail"
                          :value="users.email"
                          disabled
                        />
                      </div>

                      <!-- Mobile -->
                      <div class="col-md-6">
                        <label class="form-label"
                          >Numéro de téléphone portable<span class="text-danger"
                            >*</span
                          ></label
                        >
                        <input
                          class="form-control"
                          placeholder="Votre contact mobile"
                          v-model="users.contact"
                        />
                      </div>

                      <!-- Nationality -->
                      <div class="col-md-6">
                        <label class="form-label"
                          >Pays<span class="text-danger">*</span></label
                        >
                        <select
                          class="form-control"
                          v-model="users.pays"
                          style="width: 100%"
                        >
                          <option value="">Sélectionnez votre pays</option>
                          <option v-for="item in paysData"
                            :key="item.pays"
                            :value="item.pays">
                            {{ item.pays }}
                          </option>
                        </select>
                      </div>

                      <!-- Date of birth -->

                      <!-- Gender -->
                      <div class="col-md-6">
                        <label class="form-label"
                          >Sélectionnez le sexe<span class="text-danger"
                            >*</span
                          ></label
                        >
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
                        <input
                          v-model="users.adresse"
                          class="form-control"
                          placeholder="Votre adresse"
                        />
                      </div>

                      <!-- Button -->
                      <div class="col-12 text-center">
                        <p
                          @click="sendDataToServer()"
                          class="btn btn-primary mb-0"
                        >
                          Sauvegarder les modifications
                        </p>
                      </div>
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
        </div>
      </section>
      <!-- =======================
Content END -->


    </div>
  </div>
</template>

<script>
import { isMobile } from "mobile-device-detect";
import { encryptData } from "@/cryptoUtils";
import SidebarMenu from '@/components/dashboard/SidebarMenu.vue'
export default {
  name: "HomeView",
  components: {
    SidebarMenu
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  data() {
    return {
      datas: [],
      connexionMessage: "",
      isMobile: isMobile,
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
        pays: "",
        flag: "",
        genre: "",
        adresse: "",
        email: "",
      },
      selectedGender: "",
    };
  },
  methods: {
    Back() {
      this.$router.back();
    },
    updateSelectedGender() {
      this.selectedGender = this.users.genre;
    },
    deconnexion() {
      this.$vs.loading(); // Afficher le loading

      // Déclencher la déconnexion avec un délai de 2 secondes
      setTimeout(() => {
        this.$store.commit("ConnexionAgent", this.user);
        this.$vs.loading.close(); // Fermer le loading
        this.$router.push({ path: "/" }); // Rediriger après le délai
      }, 2000); // Délai de 2000 ms (2 secondes)
    },

    sendDataToServer() {
      this.form.nom = this.users.nom;
      this.form.prenom = this.users.prenom;
      this.form.pays = this.users.pays;
      this.form.flag = this.users.flag;
      this.form.genre = this.users.genre;
      this.form.adresse = this.users.adresse;
      this.form.contact = this.users.contact;

        // Récupérer l'URL du drapeau du pays
      const selectedPays = this.paysData.find(pays => pays.pays === this.users.pays);
      if (selectedPays) {
        this.form.flag = selectedPays.flag;
      } else {
        console.error('Pays non trouvé dans les données.');
        return;
      }

      this.form.email = encryptData(this.users.email);
      this.$store.commit("ConnexionAgent2", this.form);
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
      this.$store.commit("ProfilPhoto", this.photo);

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
        this.$message({
          message: this.connexionMessage,
          type: "danger",
        });
        // this.$vs.notify({title:'Succès',text:this.connexionMessage,color:'danger',position:'top-center'})
      }
      if (data.data.valide == 1) {
        this.erreur = false;
        this.success = true;
        this.connexionMessage = data.data.mes;
        this.$store.commit("ConnexionAgent", data.data.data);
        console.log(data.data.data);
        this.$message({
          message: this.connexionMessage,
          type: "success",
        });
        //this.$vs.notify({title:'Succès',text:this.connexionMessage,color:'success',position:'top-center'})
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

    handleFileChange(event) {
      this.selectedFile = event.target.files[0];
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
    this.test();
  },
};
</script>
