<template>
  <div class="hello">
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
              Suivre ma réservation
            </h6>
          </span>
        </div>

        <div class="head-head-resid">
          <div class="zone-of-work-mobile mt-5">
            <div style="padding: 1px">
              <div>
                <vs-card
                  style="
                    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
                    border-radius: 10px;
                  "
                >
                  <div
                    class="d-flex p-3"
                    style="background: #348ddb; border-radius: 10px 10px 0 0"
                  >
                    <div class="me-3">
                      <img
                        src="@/assets/images/element/clock.png"
                        style="width: 80px"
                        alt=""
                      />
                    </div>
                    <div>
                      <h5 class="text-white">
                        Suivez votre réservation <br />
                        pour connaitre son état d'avancement !
                      </h5>
                    </div>
                  </div>
                  <div class="p-3" style="display: grid; width: 100%">
                    <span
                      class="mb-5"
                      style="
                        font-size: 16px;
                        letter-spacing: 0.5px;
                        color: #000000;
                        padding: 5px;
                        font-family: 'Jost', sans-serif;
                        text-align: center;
                      "
                      >Veuillez entrer la référence de votre réservation dans le
                      champ ci-dessous et cliquez sur "Je suis ma réservation"
                      pour accéder aux détails de votre réservation.</span
                    >
                    <input
                      style="
                        width: 100%;
                        border-radius: 20px;
                        box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
                      "
                      class="form-control"
                      inputmode="numeric"
                      placeholder="Référence de la réservation"
                      v-model="ref"
                    />
                    <button
                      class="btn btn-primary w-100 mb-0"
                      style="margin-top: 15px; width: 100%"
                      color="primary"
                      type="filled"
                      @click="confirmer()"
                    >
                      Je suis ma réservation
                    </button>
                  </div>
                </vs-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <!-- ======================= Content START -->
      <section class="pt-3" v-if="users">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-xl-4">
              <!-- Sidebar START -->
              <SidebarMenu />
              <!-- Sidebar END -->
            </div>
            <!-- Main content START -->
            <div class="col-lg-8 col-xl-8 ps-xl-4">
                <div class="head-head-resid d-grid justify-content-center align-items-center">
                    <div class="zone-of-work-mobile">
                          <vs-card
                            style="
                              box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
                              border-radius: 10px;
                            "
                          >
                            <div
                              class="d-flex p-3"
                              style="background: #348ddb; border-radius: 10px 10px 0 0"
                            >
                              <div class="me-3">
                                <img
                                  src="@/assets/images/element/clock.png"
                                  style="width: 80px"
                                  alt=""
                                />
                              </div>
                              <div>
                                <h5 class="text-white">
                                  Suivez votre réservation <br />
                                  pour connaître son état d'avancement !
                                </h5>
                              </div>
                            </div>
                            <div class="p-3" style="display: grid; width: 100%">
                              <span
                                class="mb-5"
                                style="
                                  font-size: 16px;
                                  letter-spacing: 0.5px;
                                  color: #000000;
                                  padding: 5px;
                                  font-family: 'Jost', sans-serif;
                                  text-align: center;
                                "
                                >Veuillez entrer la référence de votre réservation dans le
                                champ ci-dessous et cliquez sur "Je suis ma réservation"
                                pour accéder aux détails de votre réservation.</span
                              >
                              <input
                                style="
                                  width: 100%;
                                  border-radius: 20px;
                                  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
                                "
                                class="form-control"
                                inputmode="numeric"
                                placeholder="Référence de la réservation"
                                v-model="ref"
                              />
                              <button
                                class="btn btn-primary w-100 mb-0"
                                style="margin-top: 15px"
                                color="primary"
                                type="filled"
                                @click="confirmer()"
                              >
                                Je suis ma réservation
                              </button>
                            </div>
                          </vs-card>
                    </div>
                </div>
            </div>
            <!-- Main content END -->
          </div>
        </div>
      </section>
      <!-- ======================= Content END -->

      <div v-else class="head-head-resid d-grid justify-content-center align-items-center" >
        <div class="zone-of-work-mobile mt-5">
          <div style="padding: 1px">
            <div>
              <vs-card
                style="
                  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
                  border-radius: 10px;
                "
              >
                <div
                  class="d-flex p-3"
                  style="background: #348ddb; border-radius: 10px 10px 0 0"
                >
                  <div class="me-3">
                    <img
                      src="@/assets/images/element/clock.png"
                      style="width: 80px"
                      alt=""
                    />
                  </div>
                  <div>
                    <h5 class="text-white">
                      Suivez votre réservation <br />
                      pour connaître son état d'avancement !
                    </h5>
                  </div>
                </div>
                <div class="p-3" style="display: grid; width: 100%">
                  <span
                    class="mb-5"
                    style="
                      font-size: 16px;
                      letter-spacing: 0.5px;
                      color: #000000;
                      padding: 5px;
                      font-family: 'Jost', sans-serif;
                      text-align: center;
                    "
                    >Veuillez entrer la référence de votre réservation dans le
                    champ ci-dessous et cliquez sur "Je suis ma réservation"
                    pour accéder aux détails de votre réservation.</span
                  >
                  <input
                    style="
                      width: 100%;
                      border-radius: 20px;
                      box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
                    "
                    class="form-control"
                    inputmode="numeric"
                    placeholder="Référence de la réservation"
                    v-model="ref"
                  />
                  <button
                    class="btn btn-primary w-100 mb-0"
                    style="margin-top: 15px"
                    color="primary"
                    type="filled"
                    @click="confirmer()"
                  >
                    Je suis ma réservation
                  </button>
                </div>
              </vs-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isMobile } from "mobile-device-detect";
import axios from "axios";
import SidebarMenu from '@/components/dashboard/SidebarMenu.vue';
//import HorizontalScroll from "vue-horizontal-scroll";
import "vue-horizontal-scroll/dist/vue-horizontal-scroll.css";

export default {
  name: "HeadReservation",
  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  components: {
    //HorizontalScroll,
    SidebarMenu
  },

  data() {
    return {
      isMobile: isMobile,
      orangeOk: false,
      moovOk: false,
      waveOk: false,
      method: null,
      refOK: true,
      useri: {
        name: "",
        email: "",
        contact: "",
        nbper: "",
      },
      optionsnb: [
        {
          value: "1",
          label: "1 personne ",
        },
        {
          value: "2",
          label: "2 personnes",
        },
        {
          value: "3",
          label: "3 personnes",
        },
        {
          value: "4",
          label: "4 personnes",
        },
        {
          value: "5",
          label: "5 personnes",
        },
        {
          value: "plus",
          label: "plus",
        },
      ],
      optionsmin: [
        {
          value: "0",
          label: "Non",
        },
        {
          value: "1",
          label: "Oui 1",
        },
        {
          value: "2",
          label: "Oui 2",
        },
        {
          value: "3",
          label: "Oui plus",
        },
      ],
      optionstaxi: [
        {
          value: "Non",
          label: "Non",
        },
        {
          value: "Oui",
          label: "Oui",
        },
      ],
      numeroOrange: null,
      reservation: null,
      validerreserve: true,
      ref: "",
      tousPays: null,
      nom: "",
      email: "",
      contact: "",
      message: "",
      nomr: "",
      prenomr: "",
      nbper: 0,
      nbmin: "Non",
      taxi: "Non",
      pays: "Ivory Coast",
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
        buyer_name: "",
      },
    };
  },
  methods: {
    Back() {
      this.$router.back();
    },
    formatPrice(value) {
      var formatter = new Intl.NumberFormat("xof", {
        style: "currency",
        currency: "CFA",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
    retour() {
      this.$router.push({ path: "/recherche" });
    },
    money(reseau) {
      if (reseau == "orange") {
        this.orangeOk = true;
        this.moovOk = false;
        this.waveOk = false;
        this.method = "Orange Money";
      }
      if (reseau == "moov") {
        this.orangeOk = false;
        this.moovOk = true;
        this.waveOk = false;
        this.method = "Moov Money";
      }
      if (reseau == "wave") {
        this.orangeOk = false;
        this.moovOk = false;
        this.waveOk = true;
        this.method = "Wave";
      }
    },
    deconnexion() {
      this.$store.commit("Connexion", this.useri);
      this.users.name = "";
      this.$router.push({ path: "/about" });
    },

    confirmer() {
      const ref = this.ref;
      this.$router.push({ path: "/reservation", query: { ref: ref } });
    },

    getReservation() {
      if (this.$route.query.ref.length >= 2) {
        this.$vs.loading({
          type: "point",
        });
        axios.get("/reservation_get.php?ref=" + this.$route.query.ref).then(
          (response) => {
            this.reservation = response.data.data[0];
            if (this.reservation.nom.length >= 3) {
              this.validerreserve = false;
              this.refOK = true;
            }
            console.log(this.reservation);
            this.$vs.loading.close();
          },
          (error) => {
            console.log(error);
            this.$vs.loading.close();
          }
        );
      } else {
        this.validerreserve = false;
        this.refOK = false;
      }
    },

    envoyera() {
      let formData = new FormData();
      formData.append("nom", this.nom);
      formData.append("contact", this.contact);
      formData.append("email", this.email);
      formData.append("message", this.message);
      this.$vs.loading({
        type: "point",
      });
      axios
        .post("https://autre.sarezide.com/envoyer.php", formData)
        .then((response) => {
          this.envoi = true;
          console.log(response);
          setTimeout(
            function () {
              this.$vs.loading.close();
            }.bind(this),
            1000
          );
        })
        .catch(function (error) {
          console.log(error);
          this.$vs.loading.close();
        });
    },
  },

  mounted() {
    this.ref = this.$route.query.ref;
    this.getReservation();
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        // Data contient la liste des pays
        this.tousPays = data;

        // Trier les pays par leur nom français s'ils sont disponibles
        this.tousPays.sort((a, b) => {
          const nameA = a.translations.fr || a.name.common;
          const nameB = b.translations.fr || b.name.common;
          return nameA.localeCompare(nameB);
        });

        console.log(this.tousPays);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des pays:",
          error
        );
      });
  },
};
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
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.6);
}
.el-input.is-disabled .el-input__inner {
  background-color: #f1fefe;
  border-color: #e4e7ed;
  color: #0b0a12b5;
  cursor: not-allowed;
}
</style>
