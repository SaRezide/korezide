<template>
    <div>
        <div v-if="isMobile">
            <div class="d-flex align-items-center dash-header mt-2 border-bottom bg-white">
                    <span class="edit-icon  ms-3 my-2" @click="Back">
                        <i class="fa-solid fa-arrow-left text-black"></i>
                    </span>
                    <span style="flex: auto" class="">
                        <h6 style="font-size: 16px"  class="mb-0 text-center">Activités</h6>
                    </span>
                    
                </div>
                      <!-- Activities START -->
            <div class="row">
                <div class="col-12">

                    <div class="bg-white p-3">
                        <!-- Card header -->
                        <div class="card-header">
                            <h5 class="card-header-title">Activités récentes</h5>
                        </div>

                        <!-- Card body START -->
                        <div class="card-body mt-4">
                            
                            <!-- Activity item START -->
                            <div class="d-sm-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-sm-center me-4 ms-sm-0">
                                    <!-- Avatar -->
                                    <div class="avatar flex-shrink-0">
                                        <div class="avatar-img rounded-circle text-bg-success">
                                            <span class="position-absolute top-50 start-50 translate-middle fw-bold"><i class="bi bi-check-lg fs-5"></i></span>
                                        </div>
                                    </div>
                                    <!-- Title -->
                                    <div class="ms-3">
                                        <h6 class="fw-light m-0">Your listing <a href="#" class="text-primary">Courtyard by Marriott New York </a>has been approved</h6>
                                        <small>2 Days ago</small>
                                    </div>
                                </div>
                              
                            </div>
                            <!-- Activity item END -->

                            <hr> <!-- Divider -->

                            <!-- Activity item START -->
                            <div class="d-sm-flex justify-content-between align-items-center">
                                <!-- Avatar image -->
                                <div class="d-flex align-items-sm-center me-4 ms-sm-0">
                                    <div class="avatar flex-shrink-0">
                                        <img class="avatar-img rounded-circle" src="@/assets/images/avatar/04.jpg" alt="">
                                    </div>
                                    <!-- Title -->
                                    <div class="ms-3">
                                        <h6 class="fw-light m-0">Louis Ferguson booked your <span class="fw-bold">Hotel Baljees Regency </span>Hotel room</h6>
                                        <small class="me-3">15 Nov 2022</small>
                                    </div>
                                </div>
                               
                            </div>
                            <!-- Activity item END -->

                            <hr> <!-- Divider -->

                            <!-- Activity item START -->
                            <div class="d-sm-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-sm-center me-4 ms-sm-0">
                                    <!-- Avatar -->
                                    <div class="avatar flex-shrink-0">
                                        <div class="avatar-img rounded-circle text-bg-info">
                                            <span class="position-absolute top-50 start-50 translate-middle fw-bold"><i class="bi bi-chat fs-5"></i></span>
                                        </div>
                                    </div>
                                    <!-- Title -->
                                    <div class="ms-3">
                                        <h6 class="fw-light m-0">Someone left a review on <span class="fw-bold">Park Plaza Lodge Hotel </span> listing</h6>
                                        <small class="me-3">13 Nov 2022</small>
                                    </div>
                                </div>
                             
                            </div>
                            <!-- Activity item END -->

                            <hr> <!-- Divider -->

                            <!-- Activity item START -->
                            <div class="d-sm-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-sm-center me-4 ms-sm-0">
                                    <!-- Avatar -->
                                    <div class="avatar flex-shrink-0">
                                        <div class="avatar-img rounded-circle text-bg-success">
                                            <span class="position-absolute top-50 start-50 translate-middle fw-bold"><i class="bi bi-check-lg fs-5"></i></span>
                                        </div>
                                    </div>
                                    <!-- Title -->
                                    <div class="ms-3">
                                        <h6 class="fw-light m-0">Your payment received successfully</h6>
                                        <small class="me-3">13 Nov 2022</small>
                                    </div>
                                </div>
                            
                            </div>
                            <!-- Activity item END -->

                            <hr> <!-- Divider -->

                            <!-- Activity item START -->
                            <div class="d-sm-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-sm-center me-4 ms-sm-0">
                                    <!-- Avatar image -->
                                    <div class="avatar flex-shrink-0">
                                        <img class="avatar-img rounded-circle" src="@/assets/images/avatar/05.jpg" alt="">
                                    </div>
                                    <!-- Title -->
                                    <div class="ms-3">
                                        <h6 class="fw-light m-0">Amanda Reed Cancel booking in <a href="#" class="text-primary">Courtyard by Marriott New York </a>hotel</h6>
                                        <small class="me-3">11 Nov 2022</small>
                                    </div>
                                </div>
                              
                            </div>
                            <!-- Activity item END -->

                            <hr> <!-- Divider -->

                            <!-- Activity item START -->
                            <div class="d-sm-flex justify-content-between align-items-center">
                                <!-- Avatar image -->
                                <div class="d-flex align-items-sm-center me-4 ms-sm-0">
                                    <div class="avatar flex-shrink-0">
                                        <img class="avatar-img rounded-circle" src="@/assets/images/avatar/09.jpg" alt="">
                                    </div>
                                    <!-- Title -->
                                    <div class="ms-3">
                                        <h6 class="fw-light m-0">Lori Stevens booked your <span class="fw-bold">Pride moon Village Resort & Spa </span>Hotel room</h6>
                                        <small class="me-3">10 Nov 2022</small>
                                    </div>
                                </div>
                               
                            </div>
                            <!-- Activity item END -->

                        </div>
                        <!-- Card body END -->
                    </div>
                </div>
            </div>
            <!-- Activities END -->
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

                <div class="col-lg-8 col-xl-8 ps-xl-4">
                    <!-- =======================
                    Content START -->
                    <section class="pt-0">
                        <div class="container">

                                <!-- Activities START -->

                                    <div class="card menu-account">
                                        <!-- Card header -->
                                        <div class="card-header border-bottom">
                                            <h5 class="card-header-title"><i class="bi bi-bell fa-fw me-1"></i>Activité(s) récente(s)</h5>
                                        </div>

                                        <!-- Card body START -->
                                        <div class="card-body">
                                            <div>
                                            <!-- Activity item START -->
                                            <div class="d-sm-flex justify-content-between align-items-center">
                                                <div class="d-flex align-items-sm-center me-4 ms-sm-0">
                                                    <!-- Avatar -->
                                                    <div class="avatar flex-shrink-0">
                                                        <div class="avatar-img rounded-circle text-bg-success">
                                                            <span class="position-absolute top-50 start-50 translate-middle fw-bold"><i class="bi bi-check-lg fs-5"></i></span>
                                                        </div>
                                                    </div>
                                                    <!-- Title -->
                                                    <div class="ms-3">
                                                        <h6 class="fw-light m-0">Your listing <a href="#" class="text-primary">Courtyard by Marriott New York </a>has been approved</h6>
                                                        <small>2 Days ago</small>
                                                    </div>
                                                </div>
                                                <!-- Buttons -->
                                                <div class="d-flex gap-2 mt-2 mt-sm-0">
                                                    <a href="#" class="btn btn-sm btn-primary">Voir</a>
                                                    <a href="#" class="btn btn-sm btn-danger"><i class="bi bi-trash"></i></a>
                                                </div>
                                            </div>
                                            <!-- Activity item END -->

                                            <hr> <!-- Divider -->

                                            <!-- Activity item START -->
                                            <div class="d-sm-flex justify-content-between align-items-center">
                                                <!-- Avatar image -->
                                                <div class="d-flex align-items-sm-center me-4 ms-sm-0">
                                                    <div class="avatar flex-shrink-0">
                                                        <img class="avatar-img rounded-circle" src="@/assets/images/avatar/04.jpg" alt="">
                                                    </div>
                                                    <!-- Title -->
                                                    <div class="ms-3">
                                                        <h6 class="fw-light m-0">Louis Ferguson booked your <span class="fw-bold">Hotel Baljees Regency </span>Hotel room</h6>
                                                        <small class="me-3">15 Nov 2022</small>
                                                    </div>
                                                </div>
                                                <!-- Buttons -->
                                                <div class="d-flex gap-2 mt-2 mt-sm-0">
                                                    <a href="#" class="btn btn-sm btn-primary">Voir</a>
                                                    <a href="#" class="btn btn-sm btn-danger"><i class="bi bi-trash"></i></a>
                                                </div>
                                            </div>
                                            <!-- Activity item END -->

                                            <hr> <!-- Divider -->

                                            <!-- Activity item START -->
                                            <div class="d-sm-flex justify-content-between align-items-center">
                                                <div class="d-flex align-items-sm-center me-4 ms-sm-0">
                                                    <!-- Avatar -->
                                                    <div class="avatar flex-shrink-0">
                                                        <div class="avatar-img rounded-circle text-bg-info">
                                                            <span class="position-absolute top-50 start-50 translate-middle fw-bold"><i class="bi bi-chat fs-5"></i></span>
                                                        </div>
                                                    </div>
                                                    <!-- Title -->
                                                    <div class="ms-3">
                                                        <h6 class="fw-light m-0">Someone left a reVoir on <span class="fw-bold">Park Plaza Lodge Hotel </span> listing</h6>
                                                        <small class="me-3">13 Nov 2022</small>
                                                    </div>
                                                </div>
                                                <!-- Buttons -->
                                                <div class="d-flex gap-2 mt-2 mt-sm-0">
                                                    <a href="#" class="btn btn-sm btn-primary">Voir</a>
                                                    <a href="#" class="btn btn-sm btn-danger"><i class="bi bi-trash"></i></a>
                                                </div>
                                            </div>
                                            <!-- Activity item END -->

                                            <hr> <!-- Divider -->

                                            <!-- Activity item START -->
                                            <div class="d-sm-flex justify-content-between align-items-center">
                                                <div class="d-flex align-items-sm-center me-4 ms-sm-0">
                                                    <!-- Avatar -->
                                                    <div class="avatar flex-shrink-0">
                                                        <div class="avatar-img rounded-circle text-bg-success">
                                                            <span class="position-absolute top-50 start-50 translate-middle fw-bold"><i class="bi bi-check-lg fs-5"></i></span>
                                                        </div>
                                                    </div>
                                                    <!-- Title -->
                                                    <div class="ms-3">
                                                        <h6 class="fw-light m-0">Your payment received successfully</h6>
                                                        <small class="me-3">13 Nov 2022</small>
                                                    </div>
                                                </div>
                                                <!-- Buttons -->
                                                <div class="d-flex gap-2 mt-2 mt-sm-0">
                                                    <a href="#" class="btn btn-sm btn-primary">Voir</a>
                                                    <a href="#" class="btn btn-sm btn-danger"><i class="bi bi-trash"></i></a>
                                                </div>
                                            </div>
                                            <!-- Activity item END -->

                                            <hr> <!-- Divider -->

                                            <!-- Activity item START -->
                                            <div class="d-sm-flex justify-content-between align-items-center">
                                                <div class="d-flex align-items-sm-center me-4 ms-sm-0">
                                                    <!-- Avatar image -->
                                                    <div class="avatar flex-shrink-0">
                                                        <img class="avatar-img rounded-circle" src="@/assets/images/avatar/05.jpg" alt="">
                                                    </div>
                                                    <!-- Title -->
                                                    <div class="ms-3">
                                                        <h6 class="fw-light m-0">Amanda Reed Cancel booking in <a href="#" class="text-primary">Courtyard by Marriott New York </a>hotel</h6>
                                                        <small class="me-3">11 Nov 2022</small>
                                                    </div>
                                                </div>
                                                <!-- Buttons -->
                                                <div class="d-flex gap-2 mt-2 mt-sm-0">
                                                    <a href="#" class="btn btn-sm btn-primary">Voir</a>
                                                    <a href="#" class="btn btn-sm btn-danger"><i class="bi bi-trash"></i></a>
                                                </div>
                                            </div>
                                            <!-- Activity item END -->

                                            <hr> <!-- Divider -->

                                            <!-- Activity item START -->
                                            <div class="d-sm-flex justify-content-between align-items-center">
                                                <!-- Avatar image -->
                                                <div class="d-flex align-items-sm-center me-4 ms-sm-0">
                                                    <div class="avatar flex-shrink-0">
                                                        <img class="avatar-img rounded-circle" src="@/assets/images/avatar/09.jpg" alt="">
                                                    </div>
                                                    <!-- Title -->
                                                    <div class="ms-3">
                                                        <h6 class="fw-light m-0">Lori Stevens booked your <span class="fw-bold">Pride moon Village Resort & Spa </span>Hotel room</h6>
                                                        <small class="me-3">10 Nov 2022</small>
                                                    </div>
                                                </div>
                                                <!-- Buttons -->
                                                <div class="d-flex gap-2 mt-2 mt-sm-0">
                                                    <a href="#" class="btn btn-sm btn-primary">Voir</a>
                                                    <a href="#" class="btn btn-sm btn-danger"><i class="bi bi-trash"></i></a>
                                                </div>
                                            </div>
                                            <!-- Activity item END -->
                                        </div>

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
                                        >Vous n'avez pas encore d'activités
                                        !</H6
                                      >
                                      <p class="text-wrap">
                                        Les activités que vous récevrez s'afficherons ici
                                      </p>
                                      
                                    </div>
                                  </div>
                                  <!-- Fin condition lorsque l'utilisateur n'a pas de réservation  -->

                                        </div>
                                        <!-- Card body END -->
                                    </div>
                            <!-- Activities END -->
                        </div>
                    </section>
                    <!-- =======================
                    Content END -->
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
            SidebarMenu
        },
        data() {
            return {
                isMobile: isMobile,
                switch1: false,
            }
        },
        mounted() {
        
        },
        methods: {
            Back() {
                this.$router.back()
            },
        
        }
    }
</script>