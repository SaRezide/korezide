<template>
    <div class="home">
  <!-- =======================
  Main banner START -->
    <section class="pt-0">
	<div class="container">
		<!-- Background image -->
		<div class="rounded-3 p-3 p-sm-5" style="background-image: url(@/assets/images/bg/05.jpg); background-position: center center; background-repeat: no-repeat; background-size: cover;">
			<!-- Banner title -->
			<div class="row my-2 my-xl-5"> 
				<div class="col-md-8 mx-auto"> 
					<h3 class="text-center text-white">150 établisesment(s) à Bouake</h3>
				</div>
			</div>

			<!-- Booking from START -->
			<form class="bg-mode shadow rounded-3 position-relative p-4 pe-md-5 pb-5 pb-md-4 mb-4">
				<div class="row g-4 align-items-center">
					<!-- Location -->
					<div class="col-lg-4">
						<div class="form-control-border form-control-transparent form-fs-md d-flex">
							<!-- Icon -->
							<i class="bi bi-geo-alt fs-3 me-2 mt-2"></i>
							<!-- Select input -->
							<div class="flex-grow-1">
								<label class="form-label">Location</label>
								<select class="form-select js-choice" data-search-enabled="true">
									<option value="">Select location</option>
									<option selected>San Jacinto, USA</option>
									<option>North Dakota, Canada</option>
									<option>West Virginia, Paris</option>
								</select>
							</div>
						</div>
					</div>

					<!-- Check in -->
					<div class="col-lg-4">
						<div class="d-flex">
							<!-- Icon -->
							<i class="bi bi-calendar fs-3 me-2 mt-2"></i>
							<!-- Date input -->
							<div class="form-control-border form-control-transparent form-fs-md">
								<label class="form-label">Check in - out</label>
								<input type="text" class="form-control flatpickr" data-mode="range" placeholder="Select date" value="19 Sep to 28 Sep">
							</div>
						</div>
					</div>

					<!-- Guest -->
					<div class="col-lg-4">
						<div class="form-control-border form-control-transparent form-fs-md d-flex">
							<!-- Icon -->
							<i class="bi bi-person fs-3 me-2 mt-2"></i>
							<!-- Dropdown input -->
							<div class="w-100">
								<label class="form-label">Guests & rooms</label>
								<div class="dropdown guest-selector me-2">
									<input type="text" class="form-guest-selector form-control selection-result" value="2 Guests 1 Room" id="dropdownShare" data-bs-auto-close="outside" data-bs-toggle="dropdown">
								
									<!-- dropdown items -->
									<ul class="dropdown-menu guest-selector-dropdown" aria-labelledby="dropdownShare">
										<!-- Adult -->
										<li class="d-flex justify-content-between">
											<div>
												<h6 class="mb-0">Adults</h6>
												<small>Ages 13 or above</small>
											</div>

											<div class="hstack gap-1 align-items-center">
												<button type="button" class="btn btn-link adult-remove p-0 mb-0"><i class="bi bi-dash-circle fs-5 fa-fw"></i></button>
												<h6 class="guest-selector-count mb-0 adults">2</h6>
												<button type="button" class="btn btn-link adult-add p-0 mb-0"><i class="bi bi-plus-circle fs-5 fa-fw"></i></button>
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

											<div class="hstack gap-1 align-items-center">
												<button type="button" class="btn btn-link child-remove p-0 mb-0" ><i class="bi bi-dash-circle fs-5 fa-fw"></i></button>
												<h6 class="guest-selector-count mb-0 child">0</h6>
												<button type="button" class="btn btn-link child-add p-0 mb-0" ><i class="bi bi-plus-circle fs-5 fa-fw"></i></button>
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

											<div class="hstack gap-1 align-items-center">
												<button type="button" class="btn btn-link room-remove p-0 mb-0" ><i class="bi bi-dash-circle fs-5 fa-fw"></i></button>
												<h6 class="guest-selector-count mb-0 rooms">1</h6>
												<button type="button" class="btn btn-link room-add p-0 mb-0" ><i class="bi bi-plus-circle fs-5 fa-fw"></i></button>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Button -->
				<div class="btn-position-md-middle">
					<a  class="icon-lg btn btn-round btn-dark-soft mb-0" href="#"><i class="bi bi-search fa-fw"></i></a>
				</div>
			</form>
			<!-- Booking from END -->
		</div>
	</div>
    </section>
    <!-- =======================
    Main Banner END -->
        
    <!-- =======================
    Title and Tabs START -->
    <section class="pt-0 pb-4">
        <div class="container position-relative">

            <!-- Title and button START -->
            <div class="row">
                <div class="col-12">
                    <!-- Meta START -->
                    <div class="d-flex justify-content-between">
            <!-- Filter collapse button -->
            <input type="checkbox" class="btn-check" id="btn-check-soft">
            <label class="btn btn-primary-soft btn-primary-check mb-0" for="btn-check-soft" data-bs-toggle="collapse" data-bs-target="#collapseFilter" aria-controls="collapseFilter">
                <i class="bi fa-fe bi-sliders me-2"></i>Afficher les filtres
            </label>

            <!-- tabs -->
            <ul class="nav nav-pills nav-pills-dark" id="tour-pills-tab" role="tablist">
                <!-- Tab item -->
                <li class="nav-item">
                    <router-link to="/resultat-list" class="nav-link rounded-start rounded-0 mb-0 active"><i class="bi fa-fw bi-list-ul"></i></router-link>
                </li>
                <!-- Tab item -->
                <li class="nav-item">
                    <router-link to="/resultat-grid" class="nav-link rounded-end rounded-0 mb-0"><i class="bi fa-fw bi-grid-fill"></i></router-link>
                </li>
            </ul>
                    </div>
                    <!-- Meta END -->
                </div>
            </div>
            <!-- Title and button END -->

            <!-- Collapse body START -->
            <div class="collapse" id="collapseFilter">
                <div class="card card-body bg-light p-4 mt-4 z-index-9">

                    <!-- Form START -->
                    <form class="row g-4">
                        <!-- Input item -->
                        <div class="col-md-6 col-lg-4">
                            <div class="form-control-borderless">
                                <label class="form-label">Entrer le nom de l'établisesment</label>
                                <input type="text" class="form-control form-control-lg" placeholder="Hôtel seen">
                            </div>
                        </div>

                        <!-- nouislider item -->
                        <div class="col-md-6 col-lg-4">
                            <div class="form-control-borderless">
                                <label class="form-label">Échelle des Prix</label>
                                <div class="position-relative">
                                    <div class="noui-wrapper">
                                        <div class="d-flex justify-content-between">
                                            <input type="text" class="text-body input-with-range-min">
                                            <input type="text" class="text-body input-with-range-max">
                                        </div>
                                        <div class="noui-slider-range mt-2" data-range-min='500' data-range-max='2000' data-range-selected-min='700' data-range-selected-max='1500'></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Select item -->
                        <div class="col-md-6 col-lg-4">
                            <div class="form-size-lg form-control-borderless">
                                <label class="form-label">Filtres Populaires</label>
                                <select class="form-select js-choice border-0">
                                    <option value="">Sélectionnez une option</option>
                                    <option>Recherche récente</option>
                                    <option>Le plus populaire</option>
                                    <option>Les mieux notés</option>
                                </select>
                            </div>
                        </div>

                        <!-- Customer rating -->
                        <div class="col-md-6 col-lg-4">
                            <div class="form-control-borderless">
                                <label class="form-label">Évaluation des Clients</label>
                                <ul class="list-inline mb-0 g-3">
                                    <!-- 1 -->
                                    <li class="list-inline-item">
                                        <input type="checkbox" class="btn-check" id="btn-check-1">
                                        <label class="btn btn-white btn-primary-soft-check" for="btn-check-1">3+</label>
                                    </li>
                                    <!-- 2 -->
                                    <li class="list-inline-item">
                                        <input type="checkbox" class="btn-check" id="btn-check-2">
                                        <label class="btn btn-white btn-primary-soft-check" for="btn-check-2">3.5+</label>
                                    </li>
                                    <!-- 3 -->
                                    <li class="list-inline-item">
                                        <input type="checkbox" class="btn-check" id="btn-check-3">
                                        <label class="btn btn-white btn-primary-soft-check" for="btn-check-3">4+</label>
                                    </li>
                                    <!-- 4 -->
                                    <li class="list-inline-item">
                                        <input type="checkbox" class="btn-check" id="btn-check-4">
                                        <label class="btn btn-white btn-primary-soft-check" for="btn-check-4">4.5+</label>
                                    </li>
                                </ul>
                            </div>	
                        </div>

                        <!-- Star rating -->
                        <div class="col-md-6 col-lg-4">
                            <div class="form-control-borderless">
                                <label class="form-label">Évaluation étoilée</label>
                                <ul class="list-inline mb-0 g-3">
                                    <!-- 1 -->
                                    <li class="list-inline-item">
                                        <input type="checkbox" class="btn-check" id="btn-check-9">
                                        <label class="btn btn-white btn-primary-soft-check" for="btn-check-9">1<i class="bi bi-star-fill"></i></label>
                                    </li>
                                    <!-- 2 -->
                                    <li class="list-inline-item">
                                        <input type="checkbox" class="btn-check" id="btn-check-10">
                                        <label class="btn btn-white btn-primary-soft-check" for="btn-check-10">2<i class="bi bi-star-fill"></i></label>
                                    </li>
                                    <!-- 3 -->
                                    <li class="list-inline-item">
                                        <input type="checkbox" class="btn-check" id="btn-check-11">
                                        <label class="btn btn-white btn-primary-soft-check" for="btn-check-11">3<i class="bi bi-star-fill"></i></label>
                                    </li>
                                    <!-- 4 -->
                                    <li class="list-inline-item">
                                        <input type="checkbox" class="btn-check" id="btn-check-12">
                                        <label class="btn btn-white btn-primary-soft-check" for="btn-check-12">4<i class="bi bi-star-fill"></i></label>
                                    </li>
                                    <!-- 4 -->
                                    <li class="list-inline-item">
                                        <input type="checkbox" class="btn-check" id="btn-check-13">
                                        <label class="btn btn-white btn-primary-soft-check" for="btn-check-13">5<i class="bi bi-star-fill"></i></label>
                                    </li>
                                </ul>
                            </div>	
                        </div>

                        <!-- Select item -->
                        <div class="col-md-6 col-lg-4">
                            <div class="form-size-lg form-control-borderless">
                                <label class="form-label">Type d'Hébergement</label>
                                <select class="form-select js-choice border-0">
                                    <option value="">Sélectionnez une option</option>
                                    <option>Annulation gratuite disponible</option>
                                    <option>Payer à l'hôtel disponible</option>
                                    <option>Petit-déjeuner gratuit inclus</option>
                                </select>
                            </div>
                        </div>

                        <!-- Check box item -->
                        <div class="col-12">
                            <div class="form-control-borderless">
                                <label class="form-label">Equipements</label>
                                <div class="row g-3">
                                    <!-- checkbox -->
                                    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                            <label class="form-check-label h6 fw-light mb-0" for="flexCheckDefault">
                                                Climatisation
                                            </label>
                                        </div>
                                    </div>

                                    <!-- checkbox -->
                                    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2">
                                            <label class="form-check-label h6 fw-light mb-0" for="flexCheckDefault2">
                                                Services en chambre
                                            </label>
                                        </div>
                                    </div>

                                    <!-- checkbox -->
                                    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3">
                                                <label class="form-check-label h6 fw-light mb-0" for="flexCheckDefault3">
                                                    Salle à manger
                                                </label>
                                        </div>
                                    </div>

                                    <!-- checkbox -->
                                    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault4">
                                                <label class="form-check-label h6 fw-light mb-0" for="flexCheckDefault4">
                                                    Concierge
                                                </label>
                                        </div>
                                    </div>

                                    <!-- checkbox -->
                                    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault5">
                                                <label class="form-check-label h6 fw-light mb-0" for="flexCheckDefault5">
                                                    Internet gratuit
                                                </label>
                                        </div>
                                    </div>
                                    
                                    <!-- checkbox -->
                                    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault6">
                                                <label class="form-check-label h6 fw-light mb-0" for="flexCheckDefault6">
                                                    Service d'affaires
                                                </label>
                                        </div>
                                    </div>

                                    <!-- checkbox -->
                                    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault7">
                                                <label class="form-check-label h6 fw-light mb-0" for="flexCheckDefault7">
                                                    Fer à répassé
                                                </label>
                                        </div>
                                    </div>

                                    <!-- checkbox -->
                                    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault8">
                                                <label class="form-check-label h6 fw-light mb-0" for="flexCheckDefault8">
                                                    Massage
                                                </label>
                                        </div>
                                    </div>

                                    <!-- checkbox -->
                                    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault9">
                                                <label class="form-check-label h6 fw-light mb-0" for="flexCheckDefault9">
                                                    Spa
                                                </label>
                                        </div>
                                    </div>

                                    <!-- checkbox -->
                                    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault10">
                                                <label class="form-check-label h6 fw-light mb-0" for="flexCheckDefault10">
                                                    Piscine
                                                </label>
                                        </div>
                                    </div>

                                    <!-- checkbox -->
                                    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11">
                                                <label class="form-check-label h6 fw-light mb-0" for="flexCheckDefault11">
                                                    Centre de fitness
                                                </label>
                                        </div>
                                    </div>

                                    <!-- checkbox -->
                                    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault12">
                                                <label class="form-check-label h6 fw-light mb-0" for="flexCheckDefault12">
                                                    Bar 
                                                </label>
                                        </div>
                                    </div>
                                </div> <!-- Row END -->
                            </div>
                        </div>

                        <!-- Button -->
                        <div class="text-end align-items-center">
                            <button class="btn btn-link p-0 mb-0">Réinitialiser</button>
                            <button class="btn btn-dark mb-0 ms-3">Appliquer le filtre</button>
                        </div>
                    </form>
                    <!-- Form END -->
                </div>
            </div>
            <!-- Collapse body END -->

        </div>
    </section>
    <!-- =======================
    Title and Tabs END -->

    <!-- =======================
    Hotel grid START -->
    <section class="pt-0">
        <div class="container">
            <div class="row g-4">

                <!-- Card item START -->
                <div class="col-md-6 col-xl-4">
                    <div class="card shadow p-2 pb-0 h-100">
                      

                        <!-- Slider START -->
                        <div class="tiny-slider arrow-round arrow-xs arrow-dark rounded-2 overflow-hidden">
                            <div class="tiny-slider-inner" data-autoplay="false" data-arrow="true" data-dots="false" data-items="1">
                                <!-- Image item -->
                                <div><img src="@/assets/images/category/hotel/4by3/09.jpg" alt="Card image"></div>

                                <!-- Image item -->
                                <div><img src="@/assets/images/category/hotel/4by3/02.jpg" alt="Card image"></div>

                                <!-- Image item -->
                                <div><img src="@/assets/images/category/hotel/4by3/03.jpg" alt="Card image"></div>

                                <!-- Image item -->
                                <div><img src="@/assets/images/category/hotel/4by3/01.jpg" alt="Card image"></div>
                            </div>
                        </div>
                        <!-- Slider END -->

                        <!-- Card body START -->
                        <div class="card-body px-3 pb-0">
                            <!-- Rating and cart -->
                            <div class="d-flex justify-content-between mb-3">
                                <a href="#" class="badge bg-dark text-white"><i class="bi fa-fw bi-star-fill me-2 text-warning"></i>4.5</a>
                                <a href="#" class="h6 mb-0 z-index-2"><i class="bi fa-fw bi-bookmark"></i></a>
                            </div>

                            <!-- Title -->
                            <h5 class="card-title"><a href="hotel-detail.html">Hôtel PullMan Plateau</a></h5>

                            <!-- List -->
                            <ul class="nav nav-divider mb-2 mb-sm-3">
                                <li class="nav-item">Climatisation</li>
                                <li class="nav-item">Wifi gratuit</li>
                                <li class="nav-item">Piscine</li>
                            </ul>
                        </div>
                        <!-- Card body END -->

                        <!-- Card footer START-->
                        <div class="card-footer pt-0">
                            <!-- Price and Button -->
                            <div class="d-sm-flex justify-content-sm-between align-items-center">
                                <!-- Price -->
                                <div class="d-flex align-items-center">
                                    <h5 class="fw-bold mb-0 me-1">XOF 35 000</h5>
                                    <span class="mb-0 me-2">/nuit</span>
                                </div>
                                <!-- Button -->
                                <div class="mt-2 mt-sm-0">
                                    <a class="btn btn-sm btn-dark-soft mb-0 w-100" @click="GoToDetails(21)">Voir les détails <i class="bi bi-arrow-right-circle-fill"></i></a>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card item END -->

                <!-- Card item START -->
                <div class="col-md-6 col-xl-4" v-for="bien in datas" :key="bien.id_item">
                    <div class="card shadow p-2 pb-0 h-100">
                       
                        <!-- Image -->
                        <img :src="bien.image1" class="rounded-2" style="width: 337px; height: 190px" alt="Card image">

                        <!-- Card body START -->
                        <div class="card-body px-3 pb-0">
                            <!-- Rating and cart -->
                            <div class="d-flex justify-content-between mb-3">
                                <a href="#" class="badge bg-dark text-white"><i class="bi fa-fw bi-star-fill me-2 text-warning"></i>4.0</a>
                                <a href="#" class="h6 mb-0 z-index-2"><i class="bi fa-fw bi-bookmark"></i></a>
                            </div>

                            <!-- Title -->
                            <h5 class="card-title"><a href="hotel-detail.html">{{bien.libelle}}</a></h5>

                            <!-- List -->
                            <ul class="nav nav-divider mb-2 mb-sm-3">
                                <li class="nav-item" v-if="bien.eqpm_internet == '1'">
                                    <vs-icon title="Wi-Fi" icon="wifi"></vs-icon>
                                </li>
                                <li class="nav-item" v-if="bien.eqpm_parking == '1'">
                                    <vs-icon title="Parking" icon="local_parking"></vs-icon>
                                </li>
                                <li class="nav-item" v-if="bien.eqpm_piscine_pb == '1' || eqpm_piscine_pv == '1'">
                                    <vs-icon title="Piscine" icon="pool"></vs-icon>
                                </li>
                                <li class="nav-item" v-if="bien.eqpm_tv == '1'">
                                    <i title="TV" class="fa-solid fa-tv"></i>
                                </li>
                                <li class="nav-item" v-if="bien.eqpm_table_mange == '1'">
                                    <i title="Table à manger" class="fa-solid fa-chair"></i>
                                </li>
                                <li class="nav-item" v-if="bien.eqpm_ustensile == '1'">
                                    <i title="Ustensile de cuisine" class="fa-solid fa-utensils"></i>
                                </li>
                                <li class="nav-item" v-if="bien.eqpm_chaine_sat == '1'">
                                    <i title="Chaine satéllite" class="fa-solid fa-satellite-dish"></i>
                                </li>
                                <li class="nav-item" v-if="bien.eqpm_climatisation == '1'">
                                    <i title="Climatisation" class="fa-solid fa-snowflake"></i>
                                </li>
                                <li class="nav-item" v-if="bien.video_surveillance == '1'">
                                    <i title="Video surveillance" class="fa-solid fa-video"></i>
                                </li>
                            </ul>
                        </div>
                        <!-- Card body END -->

                        <!-- Card footer START-->
                        <div class="card-footer pt-0">
                            <!-- Price and Button -->
                            <div class="d-sm-flex justify-content-sm-between align-items-center">
                                <!-- Price -->
                                <div class="d-flex align-items-center">
                                    <h5 class="fw-bold mb-0 me-1">XOF {{ bien.tarif_jour | formatThousands }}</h5>
                                    <span class="mb-0 me-2">/nuit</span>
                                </div>
                                <!-- Button -->
                                <div class="mt-2 mt-sm-0">
                                    <a class="btn btn-sm btn-dark-soft mb-0 w-100" @click="GoToDetails(bien)">Voir les détails <i class="bi bi-arrow-right-circle-fill"></i></a>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card item END -->

            </div> <!-- Row END -->

            <!-- Pagination -->
            <div class="row">
                <div class="col-12">
                    <nav class="mt-4 d-flex justify-content-center" aria-label="navigation">
                        <ul class="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                            <li class="page-item mb-0"><a class="page-link" href="#" tabindex="-1"><i class="fa-solid fa-angle-left"></i></a></li>
                            <li class="page-item mb-0"><a class="page-link" href="#">1</a></li>
                            <li class="page-item mb-0 active"><a class="page-link" href="#">2</a></li>
                            <li class="page-item mb-0"><a class="page-link" href="#">..</a></li>
                            <li class="page-item mb-0"><a class="page-link" href="#">6</a></li>
                            <li class="page-item mb-0"><a class="page-link" href="#"><i class="fa-solid fa-angle-right"></i></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>
  
    </div>
  </template>
  
  <script>
  import 'tiny-slider/dist/tiny-slider.css';
  import { tns } from 'tiny-slider/src/tiny-slider';
  export default {
    name: 'ResultPage',
    data() {
      return {
        datas: [],
      }
    },
    methods: {
		// Méthode pour récupérer la liste des appartements
		Liste() {
			this.$axios.get('/liste_appart.php')
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

		// Méthode pour naviguer vers les détails d'un bien
		GoToDetails(bien) {
			// Déclencher la mutation pour stocker les détails du bien
			this.$store.commit('BiensDetail', bien);
			// Naviguer vers la page de détails en passant l'identifiant du bien en paramètre
			this.$router.push({ name: 'DetailResult', params: { param: bien.id_item } });
		},
	},
	filters: {
    formatThousands(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		},
	},
    mounted() {
        
        const sliderContainer = this.$el.querySelector('.tiny-slider-inner');

        // Initialisez le slider avec vos options
        tns({
        container: sliderContainer,
        items: 1,
        autoplay: false,
        controls: true,
        nav: false,
        // Ajoutez d'autres options selon vos besoins
        });

      this.Liste();
    },
  }
  </script>
  