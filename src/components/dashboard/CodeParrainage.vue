<template>
    <div>
        <div v-if="isMobile">
          <div>
            <div class="d-flex align-items-center dash-header mt-2 border-bottom bg-white">
                <span class="edit-icon  ms-3 my-2" @click="Back">
                    <i class="fa-solid fa-arrow-left text-black"></i>
                </span>
                <span style="flex: auto" class="">
                    <h6 style="font-size: 16px"  class="mb-0 text-center">Mon code parrainage</h6>
                </span>
            </div>

        <div class="head-head-resid"  >
            <div class="zone-of-work-mobile mt-5">
              <div style="padding: 1px">
                  <div>
                      <vs-card style=" box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px; border-radius: 10px;">
                        <div class="d-flex p-3" style="background: #348ddb; border-radius: 10px 10px 0 0;">
                          <div class="me-3">
                            <img src="@/assets/images/element/promo-code.png" style="width: 80px" alt="">
                          </div>
                          <div>
                            <h5 class="text-white">Parrainez vos proches<br> et gagnez des réductions<br> sur vos réservations !</h5>
                          </div>

                        </div>
                          <div class="p-3" style="display: grid; width: 100%;">
                              <span class="mb-5" style="font-size: 16px; letter-spacing:.5px; color: #000000; padding: 5px; font-family: 'Jost', sans-serif; text-align: center">Bénéficiez d'une réduction de 10% sur votre réservation chaque fois que vous utilisez le code de parrainage d'un ami, et lorsque chaque filleul utilise votre propre code de parrainage.</span>
                                <span class="text-center fw-semibold" style="width: 100%; height: 40px; border: 1px solid #f2f3f4; border-radius: 20px; box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;">
                                  <h6 class="mt-2" ref="texteACopier">{{valeurDuChamp}}</h6>
                                </span>
                                <span @click="copierTexte"><i class="fa-regular fa-copy share-icon"></i></span>

                                <div class="d-flex align-items-center mt-1">
                                    <div class="container-share">
                                        <div class="share-group">
                                        <span class="share-widget me-1">
                                            <i class="fa-brands fa-facebook" style="font-size: 25px !important; color: #1877f2"></i>
                                        </span>
                                        <span class="share-widget me-1">
                                            <span>
                                            <i class="fa-brands fa-whatsapp" style="font-size: 25px !important; color: #25d366;"></i>
                                            </span>
                                        </span>
                                        <span class="share-widget me-1">
                                            <i class="fa-brands fa-facebook-messenger" style="font-size: 25px !important; color: #0084ff"></i>
                                        </span>
                                        <span class="share-widget me-1">
                                            <i class="fa-brands fa-x-twitter" style="font-size: 25px !important; color: #14171a"></i>
                                        </span>
                                        <span class="share-widget me-1">
                                            <i class="fa-solid fa-comment" style="font-size: 25px !important; color: #0cbc87"></i>
                                        </span>
                                        <span class="share-widget me-1">
                                            <i class="fa-solid fa-arrow-up-from-bracket" style="font-size: 25px !important;"></i>
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                  
                          </div>
                      </vs-card>
                      <vs-card class="mt-4" style=" box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px; border-radius: 10px;">
                        <div class="d-grid">
                            <span class="mt-3 mb-2 text-center">
                                <h4 style="font-size: 22px">Saisissez un code parrainage</h4>
                            </span>
                            <span class="mx-3">
                                <input
                                  style="border: none; border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;"
                                  class="form-control"
                                  inputmode="text"
                                  placeholder="Ex: 12APHQ"
                                  v-model="ref" />
                            </span>
                            
                            <span class="mb-3 mx-4">
                                <button class="btn btn-primary w-100 mb-0" style="margin-top: 15px; width: 100%;" color="primary" type="filled" @click="confirmer()">Je valide le code</button>
                            </span>
                        </div>
                      </vs-card>
                  </div>
              </div>
          
          </div>
        </div>
          </div>
        </div>
        <div v-else>
            <section class="pt-3">
                <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-xl-4">
                    <!-- Sidebar START -->
                    <SidebarMenu />
                    <!-- Sidebar END -->
                    </div>
                    <!-- Main content START -->
                    <div class="col-lg-8 col-xl-8 ps-xl-4">
                        <div class="head-head-resid"  >
                            <div class="zone-of-work-mobile">
                            <div style="padding: 1px">
                                <div>
                                    <vs-card style=" box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px; border-radius: 10px;">
                                        <div class="d-flex p-3" style="background: #348ddb; border-radius: 10px 10px 0 0;">
                                        <div class="me-3">
                                            <img src="@/assets/images/element/promo-code.png" style="width: 80px" alt="">
                                        </div>
                                        <div>
                                            <h5 class="text-white">Parrainez vos proches<br> et gagnez des réductions<br> sur vos réservations !</h5>
                                        </div>

                                        </div>
                                        <div class="p-3" style="display: grid; width: 100%;">
                                            <span class="mb-5" style="font-size: 16px; letter-spacing:.5px; color: #000000; padding: 5px; font-family: 'Jost', sans-serif; text-align: center">Bénéficiez d'une réduction de 10% sur votre réservation chaque fois que vous utilisez le code de parrainage d'un ami, et lorsque chaque filleul utilise votre propre code de parrainage.</span>
                                                <span class="text-center fw-semibold" style="width: 100%; height: 40px; border: 1px solid #f2f3f4; border-radius: 20px; box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;">
                                                <h6 class="mt-2" ref="texteACopier">{{valeurDuChamp}}</h6>
                                                </span>
                                                <span @click="copierTexte"><i class="fa-regular fa-copy share-icon"></i></span>

                                                <div class="d-flex align-items-center mt-1">
                                                    <div class="container-share">
                                                        <div class="share-group">
                                                        <span class="share-widget me-1">
                                                            <i class="fa-brands fa-facebook" style="font-size: 25px !important; color: #1877f2"></i>
                                                        </span>
                                                        <span class="share-widget me-1">
                                                            <span>
                                                            <i class="fa-brands fa-whatsapp" style="font-size: 25px !important; color: #25d366;"></i>
                                                            </span>
                                                        </span>
                                                        <span class="share-widget me-1">
                                                            <i class="fa-brands fa-facebook-messenger" style="font-size: 25px !important; color: #0084ff"></i>
                                                        </span>
                                                        <span class="share-widget me-1">
                                                            <i class="fa-brands fa-x-twitter" style="font-size: 25px !important; color: #14171a"></i>
                                                        </span>
                                                        <span class="share-widget me-1">
                                                            <i class="fa-solid fa-comment" style="font-size: 25px !important; color: #0cbc87"></i>
                                                        </span>
                                                        <span class="share-widget me-1">
                                                            <i class="fa-solid fa-arrow-up-from-bracket" style="font-size: 25px !important;"></i>
                                                        </span>
                                                    </div>
                                                    </div>
                                                </div>
                                                
                                        </div>
                                    </vs-card>
                                    <vs-card class="mt-4" style=" box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px; border-radius: 10px;">
                                        <div class="d-grid">
                                            <span class="mt-3 mb-2 text-center">
                                                <h4 style="font-size: 22px">Saisissez un code parrainage</h4>
                                            </span>
                                            <span class="mx-3">
                                                <input
                                                style="border: none; border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;"
                                                class="form-control"
                                                inputmode="text"
                                                placeholder="Ex: 12APHQ"
                                                v-model="ref" />
                                            </span>
                                            
                                            <span class="mb-3 mx-4">
                                                <button class="btn btn-primary w-100 mb-0" style="margin-top: 15px; width: 100%;" color="primary" type="filled" @click="confirmer()">Je valide le code</button>
                                            </span>
                                        </div>
                                    </vs-card>
                                </div>
                            </div>
                        
                        </div>
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

    import { isMobile } from 'mobile-device-detect';
    import SidebarMenu from '@/components/dashboard/SidebarMenu.vue';
    export default {
        name: 'CodeParrainage',
        components: {
            SidebarMenu,
        },
        data() {
            return {
                isMobile: isMobile,
                valeurDuChamp: 'QS12PO',
            }
        },
        mounted() {
        
        },
        methods: {
            Back() {
                this.$router.back()
            },

            copierTexte() {
                const texteACopier = this.$refs.texteACopier;
                
                // Sélectionner le texte dans l'élément <span>
                const selection = window.getSelection();
                const range = document.createRange();
                range.selectNodeContents(texteACopier);
                selection.removeAllRanges();
                selection.addRange(range);
                
                try {
                    // Copier le texte sélectionné
                    const successful = document.execCommand('copy');
                    
                    // Afficher un message de succès avec ElementUI
                    this.$message({
                        message: successful ? 'Copié avec succès!' : 'Échec de la copie.',
                        type: successful ? 'success' : 'error'
                    });
                    console.log(successful ? 'Copié avec succès!' : 'Échec de la copie.');
                } catch (err) {
                    console.error('Erreur lors de la copie : ', err);
                }
                
                // Désélectionner le texte après la copie
                selection.removeAllRanges();
            }

        
        }
    }
</script>