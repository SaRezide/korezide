<template>
    <div class="hello">
        <!-- Header START -->
        <div v-if="isMobile" class=" py-3">
            <div>
                <vs-row class="position-fixed z-3 w-100 bg-white top-0 d-flex align-items-center border-bottom" style="justify-content: space-between;">
                    <span class="mt-2 mb-1 ms-4">
                        <router-link to="/" >
                            <span class="sarezide" style="color:#348ddb">Sa</span>
                            <span class="sarezide">Rezide</span>
                        </router-link>
                    </span>
                    <span class="mt-2 mb-1 me-4">
                        <router-link to="/help-center" title="Se connecter">
                            <i class="fa-solid fa-circle-question fs-4" style="color: #050a30"></i>
                        </router-link>
                        <el-badge :value="12" class="ms-4" >
                            <i class="fa-solid fa-bell fs-4" style="color: #050a30"></i>
                        </el-badge>
                        <router-link to="/login" title="Notifications" class="ms-4">
                            
                        </router-link>
                        <span  @click="handleFocus" title="Recherche" class="ms-1">
                            <i class="fa-solid fa-magnifying-glass fs-4" style="color: #050a30"></i>
                        </span>
                    </span>
                </vs-row>
            </div>
            
        </div>
        <div v-else>
            <header class="navbar-light py-3">
                <!-- Logo Nav START -->
                <nav class="navbar navbar-expand-lg">
                    <div class="container d-block">
                        <div class="row align-items-center">
                            <div class="col-3">
                                <!-- Logo START -->
                                <router-link to="/">
                                    <a class="navbar-brand" href="#">
                                        <img class="light-mode-item navbar-brand-item"
                                            src="@/assets/images/sarezide.png" alt="sarezide">
                                        <img class="dark-mode-item navbar-brand-item"
                                            src="@/assets/images/logo-light.svg" alt="logo">
                                    </a>
                                </router-link>
                                <!-- Logo END -->
                            </div>

                            <div class="col-9">
                                <!-- Navbar top Right-->
                                <div class="align-items-center justify-content-end d-none d-lg-flex">
                                    <ul class="nav border-bottom me-4">

                                        <vs-dropdown class="dropdown nav-item">
                                            <a class="nav-link small pb-2" href.prevent>
                                                <i class="bi bi-globe fa-fw me-2"></i> Langue
                                            </a>

                                            <vs-dropdown-menu>
                                                <vs-dropdown-item>
                                                    <a class="dropdown-item me-4" href="#"><img class="fa-fw me-2"
                                                            src="@/assets/images/flags/uk.svg" alt="">English</a>
                                                </vs-dropdown-item>
                                                <vs-dropdown-item>
                                                    <a class="dropdown-item me-4" href="#"><img class="fa-fw me-2"
                                                            src="@/assets/images/flags/sp.svg" alt="">Español</a>
                                                </vs-dropdown-item>
                                                <vs-dropdown-item>
                                                    <a class="dropdown-item me-4" href="#"><img class="fa-fw me-2"
                                                            src="@/assets/images/flags/fr.svg" alt="">Français</a>
                                                </vs-dropdown-item>
                                                <vs-dropdown-item>
                                                    <a class="dropdown-item me-4" href="#"><img class="fa-fw me-2"
                                                            src="@/assets/images/flags/gr.svg" alt="">Deutsch</a>
                                                </vs-dropdown-item>
                                            </vs-dropdown-menu>
                                        </vs-dropdown>
                                        <vs-dropdown class="dropdown nav-item">
                                            <a class="nav-link small pb-2" href.prevent> <i
                                                    class="bi bi-currency-exchange me-2"></i> Devise</a>
                                            <vs-dropdown-menu>
                                                <vs-dropdown-item>
                                                    <a class="dropdown-item me-4" href="#"><img class="fa-fw me-2"
                                                            src="@/assets/images/devise/euro.png" alt="">Euro</a>
                                                </vs-dropdown-item>
                                                <vs-dropdown-item>
                                                    <a class="dropdown-item me-4" href="#"><img class="fa-fw me-2"
                                                            src="@/assets/images/devise/dollar.png" alt="">Dollar</a>
                                                </vs-dropdown-item>
                                                <vs-dropdown-item>
                                                    <a class="dropdown-item me-4" href="#"><img class="fa-fw me-2"
                                                            src="@/assets/images/devise/xof.png" alt="">Fcfa</a>
                                                </vs-dropdown-item>
                                                <vs-dropdown-item>
                                                    <a class="dropdown-item me-4" href="#"><img class="fa-fw me-2"
                                                            src="@/assets/images/devise/dirham.png" alt="">Dirham</a>
                                                </vs-dropdown-item>
                                            </vs-dropdown-menu>
                                        </vs-dropdown>

                                        <li class="nav-item"> <a href="/help-center" class="nav-link small pb-2"><i
                                                    class="bi bi-info-circle me-2"></i>Centre d'aide</a> </li>

                                        <vs-dropdown vs-custom-content vs-trigger-click class="dropdown nav-item"
                                            v-if="users.email.length > 2">
                                        <a class="nav-link small text-uppercase pb-2" href.prevent>
                                            <i class="bi bi-person-circle"></i> Bonjour {{ users.nom }},

                                        </a>

                                        <vs-dropdown-menu>
                                            <vs-dropdown-item class="mb-2">
                                                <a href="/dashboard">
                                                <i class="bi bi-person-circle text-primary me-2"></i> Géner mon compte
                                                </a>
                                            </vs-dropdown-item>
                                            <vs-dropdown-item class="mb-2">
                                                <a href=""><i class="bi bi-buildings-fill text-primary me-2"></i>  Mes établissements</a>
                                            </vs-dropdown-item>
                                            <vs-dropdown-item class="mb-2">
                                               <a href=""> <i class="fa-solid fa-suitcase-rolling text-primary me-2"></i>  Mes réservations</a>
                                            </vs-dropdown-item>
                                            <vs-dropdown-item class="mb-2">
                                               <router-link to="/reservation_id"><i class="fa-solid fa-paper-plane text-primary me-2"></i> Suivre ma réservation</router-link>
                                            </vs-dropdown-item>
                                            <vs-dropdown-item class="mb-2">
                                              <a href=""><i class="bi bi-heart-fill text-primary me-2"></i>Mes établissements favoris</a>
                                            </vs-dropdown-item>
                                            <vs-dropdown-item class="mb-2">
                                                <a href=""><i class="fa-solid fa-person-walking-arrow-loop-left text-primary me-2"></i> Faire une réclamation</a>
                                            </vs-dropdown-item>
                                            <vs-dropdown-item divider>
                                          <a href=""><i class="bi bi-box-arrow-right text-primary me-2"></i>Déconnexion</a>
                                            </vs-dropdown-item>
                                        </vs-dropdown-menu>
                                        </vs-dropdown>

                                        <li class="nav-item" v-else>
                                            <router-link to="/login" class="nav-link small pb-2"><i
                                                    class="far fa-user me-2"></i>Connexion
                                            </router-link>
                                        </li>

                                        <!-- Dark mode option START -->
                                        <!-- Dark mode option END -->
                                    </ul>
                                    <router-link v-if="users.email.length >= 1"
                                        class="btn btn-sm btn-primary mb-0 text-white" to="/ajout_residence"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                        data-bs-auto-close="outside">
                                        <i class="bi bi-plus-square-fill"></i> Ajoutez votre établissement
                                    </router-link>
                                    <router-link v-else class="btn btn-sm btn-primary mb-0 text-white" to="/login"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                        data-bs-auto-close="outside">
                                        <i class="bi bi-plus-square-fill"></i> Ajoutez votre établissement
                                    </router-link>
                                </div>

                                <div class="d-sm-flex align-items-center justify-content-end">

                                    <!-- Toggler button and stay button -->
                                    <div class="d-flex align-items-center justify-content-end" style="margin-top: 5px;">
                                        <!-- Responsive navbar toggler -->
                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#navbarCollapse" aria-controls="navbarCollapse"
                                            aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-animation">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </span>
                                            <span class="d-none d-sm-inline-block small">Menu</span>
                                        </button>

                                        <!-- Booking form dropdown START -->
                                        <div class="nav-item dropdown form-control-bg-light">
                                            <!-- Stay button -->


                                            <!-- Form START -->
                                            <div
                                                class="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 mt-2">
                                                <!-- Card START -->
                                                <div class="card">
                                                    <!-- Card header -->
                                                    <div class="card-header border-bottom">
                                                        <h6 class="mb-0">Search your Destination</h6>
                                                    </div>

                                                    <!-- Card body -->
                                                    <div class="card-body">
                                                        <div class="row g-3">
                                                            <!-- Pickup -->
                                                            <div class="col-12">
                                                                <label class="form-label mb-0">Hotel or
                                                                    Destination</label>
                                                                <select class="form-select js-choice"
                                                                    data-search-enabled="true"
                                                                    aria-label=".form-select-sm">
                                                                    <option value="">Select location</option>
                                                                    <option>San Jacinto, USA</option>
                                                                    <option>North Dakota, Canada</option>
                                                                    <option>West Virginia, Paris</option>
                                                                </select>
                                                            </div>

                                                            <!-- Date -->
                                                            <div class="col-md-6">
                                                                <label class="form-label mb-0">Check in</label>
                                                                <input type="text" class="form-control flatpickr"
                                                                    data-date-format="d M Y" placeholder="Select date">
                                                            </div>

                                                            <!-- Date -->
                                                            <div class="col-md-6">
                                                                <label class="form-label mb-0">Check out</label>
                                                                <input type="text" class="form-control flatpickr"
                                                                    data-date-format="d M Y" placeholder="Select date">
                                                            </div>

                                                            <!-- Occupant -->
                                                            <div class="col-12">
                                                                <!-- Dropdown input -->
                                                                <label class="form-label mb-0">Guests & rooms</label>
                                                                <div class="dropdown guest-selector me-2">
                                                                    <input type="text"
                                                                        class="form-guest-selector form-control selection-result"
                                                                        value="2 Guests 1 Room"
                                                                        data-bs-auto-close="outside"
                                                                        data-bs-toggle="dropdown">

                                                                    <!-- dropdown items -->
                                                                    <ul class="dropdown-menu guest-selector-dropdown">
                                                                        <!-- Adult -->
                                                                        <li class="d-flex justify-content-between">
                                                                            <div>
                                                                                <h6 class="mb-0">Adults</h6>
                                                                                <small>Ages 13 or above</small>
                                                                            </div>

                                                                            <div
                                                                                class="hstack gap-1 align-items-center">
                                                                                <button type="button"
                                                                                    class="btn btn-link adult-remove p-0 mb-0"><i
                                                                                        class="bi bi-dash-circle fs-5 fa-fw"></i></button>
                                                                                <h6
                                                                                    class="guest-selector-count mb-0 adults">
                                                                                    2</h6>
                                                                                <button type="button"
                                                                                    class="btn btn-link adult-add p-0 mb-0"><i
                                                                                        class="bi bi-plus-circle fs-5 fa-fw"></i></button>
                                                                            </div>
                                                                        </li>

                                                                        <!-- Divider -->
                                                                        <li class="dropdown-divider"></li>

                                                                        <!-- Child -->
                                                                        <li class="d-flex justify-content-between">
                                                                            <div>
                                                                                <h6 class="mb-0">Child</h6>
                                                                                <small>Ages 13 below</small>
                                                                            </div>

                                                                            <div
                                                                                class="hstack gap-1 align-items-center">
                                                                                <button type="button"
                                                                                    class="btn btn-link child-remove p-0 mb-0"><i
                                                                                        class="bi bi-dash-circle fs-5 fa-fw"></i></button>
                                                                                <h6
                                                                                    class="guest-selector-count mb-0 child">
                                                                                    0</h6>
                                                                                <button type="button"
                                                                                    class="btn btn-link child-add p-0 mb-0"><i
                                                                                        class="bi bi-plus-circle fs-5 fa-fw"></i></button>
                                                                            </div>
                                                                        </li>

                                                                        <!-- Divider -->
                                                                        <li class="dropdown-divider"></li>

                                                                        <!-- Rooms -->
                                                                        <li class="d-flex justify-content-between">
                                                                            <div>
                                                                                <h6 class="mb-0">Rooms</h6>
                                                                                <small>Max room 8</small>
                                                                            </div>

                                                                            <div
                                                                                class="hstack gap-1 align-items-center">
                                                                                <button type="button"
                                                                                    class="btn btn-link room-remove p-0 mb-0"><i
                                                                                        class="bi bi-dash-circle fs-5 fa-fw"></i></button>
                                                                                <h6
                                                                                    class="guest-selector-count mb-0 rooms">
                                                                                    1</h6>
                                                                                <button type="button"
                                                                                    class="btn btn-link room-add p-0 mb-0"><i
                                                                                        class="bi bi-plus-circle fs-5 fa-fw"></i></button>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <!-- Buttons -->
                                                            <div class="col-12 text-center">
                                                                <a href="#"
                                                                    class="text-primary-hover text-decoration-underline">Have
                                                                    a promo code?</a>
                                                                <button
                                                                    class="btn btn-primary-soft w-100 mt-3 mb-0">Check
                                                                    Availability</button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Card END -->
                                            </div>
                                            <!-- Form END -->
                                        </div>
                                        <!-- Booking form dropdown END -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <!-- Logo Nav END -->
            </header>
        </div>
        <!-- Header END -->
    </div>
</template>

<script>
import { isMobile } from 'mobile-device-detect';
export default {
    name: 'NavBar',
    props: {
        msg: String
    },
    computed: {
        users() {
            return this.$store.state.users;
        },
        showNavbar() {
            return this.$store.state.showNavbar;
        }
    },
    data() {
        return {
            isMobile: isMobile,
            MenuSarezide: false,
        }
    },
    methods: {
        MenuRedirect(direction) {
            this.MenuSarezide = false;
            if (direction === 'reservation') {
                this.$router.push({ path: '/reservation_id?' + 'timestamp=' + new Date().getTime() });
            }
            if (direction === 'accueil') {
                this.$router.push({ path: '/?' + 'timestamp=' + new Date().getTime() });
            }
            this.MenuSarezide = true;
        },
    },

    mounted() {
        this.$store.commit('NavbarShow', true)
        this.MenuSarezide = null;
    }
}
</script>