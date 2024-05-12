<template>
	<div class="home">
		<div v-if="isMobile" style="margin-top: -30px">
			<div style="padding: 10px 20px" class="mt-4">
				<vs-card>
					<div @click="handleFocus">
						<vs-input ref="customInput" size="large" style="width: 100%; border: 4px solid #fff; border-radius: 16px; background-color: #ffffff; cursor: pointer;" icon-after="true"  icon="pin_drop" :value="valeurRecherche" disabled/>
				</div>
				</vs-card>
			</div>
			<div class="head-head-resid">
				<div class="zone-of-work-mobile">
					<!-- Booking from START 
					<vs-card style="padding: 0px; box-shadow: 0 0 0 10px rgb(255 255 255 / 15%), 0 2px 48px 0 rgb(0 0 0 / 4%); border-radius: 15px;">
						<vs-row style="padding: 5px;">
							<vs-col v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="6">
								<div style="display: flex;">
									<vs-select
										style="font-family: 'Jost', sans-serif"
										class="select-zone web-search"
										icon-after="true"
										icon="location_city"
										v-model="select1"
									>
										<vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options1" />
									</vs-select>
								</div>
							</vs-col>
							<vs-col v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="6">
								<div style="display: flex;">
									<vs-select
										style="font-family: 'Jost', sans-serif"
										class="select-zone web-search"
										icon-after="true"
										icon="location_on"
										v-model="select2"
										:disabled="select2Grise"
									>
										<vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options2" />
									</vs-select>
								</div>
							</vs-col>
							<vs-col v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="6">
								<div style="display: flex;">
									<vs-select
										style="font-family: 'Jost', sans-serif"
										class="select-zone web-search"
										icon-after="true"
										icon="meeting_room"
										v-model="selectedType"
									>
										<vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options3" />
									</vs-select>
								</div>
							</vs-col>
							<vs-col v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="6">
								<div style="display: flex;">
									<vs-select
										style="font-family: 'Jost', sans-serif"
										class="select-zone web-search"
										icon-after="true"
										icon="payments"
										v-model="selectedPrice"
									>
										<vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options4" />
									</vs-select>
								</div>
							</vs-col>
							<vs-col v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="1">
							</vs-col>
							<vs-col v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="1">
							</vs-col>
						</vs-row>
						<div style="display: flex; padding: 10px; margin-bottom: 10px; width: 100%">
							<el-select
								class="select-zone web-search"
								:blur="AfficheZone"
								v-model="choixService"
								popper-class="hidee"
								multiple
								style="width: 100%"
								placeholder="Filtre par services ou équipements">
								<el-option
									v-for="item in optionsServices"
									:key="item.value"
									:label="item.text"
									:value="item.value">
								</el-option>
							</el-select>
						</div>  
					</vs-card>
					-->
					
					<span style="font-size: 12px; padding: 5px; display: block; color: rgb(255, 166, 3); max-width:450px; margin: 0 auto" >Résultat : <b style="color: gray; font-weight: normal">{{resultsr.total_rows}} résidences trouvées</b> <span style="margin-top: -8px"><em style=" text-decoration: underline"> Page</em> <span style="color: gray; font-weight: normal">{{resultsr.current_page}}/{{resultsr.total_pages}}</span></span></span>
					<div>
					
						<vs-card class="result-item"  v-for="item in results" :key="item.id_item" style="margin: 5px auto; max-width: 400px;  padding: 5px; padding-bottom: 0px">
							<div @click="GoToDetails(item)" style="color: black;">
								<vs-row>
									<vs-col v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="6.5">
										<img class="img" :src="item.image1" style="width: 300px !important; height:132px; border-radius: 5px;">
									</vs-col>
									<vs-col v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="5.5" style="">
										<div class="result-item-detail">
											<span class="result-title-m">{{item.libelle}}</span>
											<span class="result-location-m" style="color:orange" v-if="item.ville_item == 'Abidjan'">
												<vs-icon icon="place" style="font-size: 15px; color: orange;"></vs-icon>
												{{item.commune_item}}, <em style="color: #67c23a; font-weight: bold">{{item.quartier_item}}</em>
											</span>
											<span class="result-location-m" style="color:orange" v-else>
												<vs-icon icon="place" style="font-size: 15px; color: orange;"></vs-icon>
												{{item.ville_item}}, <em style="color: #67c23a; font-weight: bold">{{item.quartier_item}}</em>
											</span>
											<div class="services-list-m mt-2" style="margin-top: 5px; text-align: left;">
												<vs-icon class="services-list-icon-m text-dark" icon="verified_user" v-if="item.agent_securite == '1' || item.agent_securite == 'true'"></vs-icon>
												<vs-icon class="services-list-icon-m text-dark" icon="wifi" v-if="item.eqpm_internet == '1' || item.eqpm_internet == 'true'"></vs-icon>
												<vs-icon class="services-list-icon-m text-dark" icon="pool" v-if="item.eqpm_piscine_pb == '1' || item.eqpm_piscine_pv == '1' || item.eqpm_piscine_pb == 'true' || item.eqpm_piscine_pv == 'true'"></vs-icon>
												<vs-icon class="services-list-icon-m text-dark" icon="bath_private" v-if="item.eqpm_jacuzzi == '1' || item.eqpm_jacuzzi == 'true'"></vs-icon>
												<vs-icon class="services-list-icon-m text-dark" icon="tv" v-if="item.eqpm_tv == '1' || item.eqpm_tv == 'true'"></vs-icon>
												<vs-icon class="services-list-icon-m text-dark" icon="local_parking" v-if="item.tarif_parking == '1' || item.tarif_parking == 'true'"></vs-icon>
											</div>
											<div class="mt-2" style="text-align: left;">
												<span class="result-title-m" style="font-weight: bold; font-size: 13px; color: #348ddb">XOF {{ item.tarif_jour | formatThousands }} <em style="font-size: 12px">/jour</em></span><br>
												<span class="result-title-m" style="color: gray; font-size: 10px; text-align: center" v-if="item.nb_jour_reduction.lentgh >= 1">Reduction à partir de {{item.nb_jour_reduction}}</span><br>
											</div>
										</div>
									</vs-col>
								</vs-row>
							</div>
						</vs-card>
				
						<div style="padding: 20px; width: 80%; display: block; position: relative">
							<b-pagination
							style="width: 90%; margin-left: -18px; --bs-pagination-padding-x: .7rem; --bs-pagination-padding-y: 0.5rem;"
							v-model="numPage"
							:total-rows="resultsr.total_rows"
							:per-page="perPage"
							class="mt-4 pagination"
							>
							<template #prev-text><span class="text-success">Préc</span></template>
							<template #next-text><span class="text-success">Suiv</span></template>
							<template #page="{ page, active }">
								<b v-if="active">{{ page }}</b>
								<i v-else>{{ page }}</i>
							</template>
							</b-pagination>
						</div>
					</div>
				</div>
			</div>

		</div>
        
		<div v-else>
			<section class="pt-0">
				<div class="container" style="margin-top:100px">
					<div class="row mt-n7">
						<div class="col-12 mx-auto">
							<!-- Booking from START -->
							<form class="bg-mode shadow rounded-3 p-4">
								<div class="row g-4">
					
									<div class="col-xl-12">
										<div class="row g-4 d-flex align-items-center justify-content-between">
											<!-- Location -->
											<div class="col-md-6 col-lg-3">
												<label class="h6 fw-normal mb-0"><i class="bi bi-buildings-fill text-primary me-1"></i>Ville</label>
												<!-- Input field -->
												<div class=" form-control-transparent form-fs-lg mt-2">
													<vs-select
														style="font-family: 'Jost', sans-serif"
														class="select-zone web-search"
														icon-after="true"
														icon="location_city"
														v-model="select1"
													>
														<vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options1" />
													</vs-select>
												</div>
											</div>
					
											<!-- Check in -->
											<div class="col-md-6 col-lg-3">
												<label class="h6 fw-normal mb-0"><i class="bi bi-geo-alt-fill text-primary me-1"></i>Zone</label>
												<!-- Input field -->
												<div class=" form-control-transparent form-fs-lg mt-2">
													<div class="block">
														<vs-select
															style="font-family: 'Jost', sans-serif"
															class="select-zone web-search"
															icon-after="true"
															icon="location_on"
															v-model="select2"
															:disabled="select2Grise"
														>
															<vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options2" />
														</vs-select>
													</div>
												</div>
											</div>
					
											<!-- Guest -->
											<div class="col-md-6 col-lg-3">
												<label class="h6 fw-normal mb-0"><i class="fa-solid fa-door-open text-primary me-1"></i>Nombre de pièce</label>
												<!-- Input field -->
												<div class="form-control-transparent form-fs-lg mt-2">
													<vs-select
														style="font-family: 'Jost', sans-serif"
														class="select-zone web-search"
														icon-after="true"
														icon="meeting_room"
														v-model="selectedType"
													>
														<vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options3" />
													</vs-select>
												</div>
											</div>

											<div class="col-md-6 col-lg-3 mb-0">
												<label class="h6 fw-normal mb-0"><i class="material-icons text-primary me-1">payments</i>Tarif</label>
												<!-- Input field -->
												<div class="form-control-transparent form-fs-lg mt-2">
													<vs-select
														style="font-family: 'Jost', sans-serif"
														class="select-zone web-search"
														icon-after="true"
														icon="payments"
														v-model="selectedPrice"
													>
														<vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options4" />
													</vs-select>
												</div>
											</div>

										</div>
									</div>
					
								</div>
							</form>
							<!-- Booking from END -->
						</div>
					</div>					
				</div>
			</section>
			<!-- ======================= -->
			<section class="pt-0">
				<div class="container">
					<!-- Tabs and alert START -->
					<div class="row mb-4">
						<div class="col-12">
							<!-- Alert box START -->
							<div class="alert alert-success alert-dismissible d-flex justify-content-between align-items-center rounded-3 fade show mb-4 mb-0 pe-2"
								role="alert">
								<div class="d-flex">
									<span class="alert-heading h5 mb-0 me-2"><i
											class="bi bi-exclamation-octagon-fill"></i></span>
									<span>.</span>
								</div>
							</div>
							<!-- Alert box END -->

							<!-- Buttons -->
							<div class="hstack gap-3 justify-content-between justify-content-md-end">
								<!-- Filter offcanvas button -->
								<button class="btn btn-primary-soft btn-primary-check mb-0 d-xl-none" type="button"
									data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar"
									aria-controls="offcanvasSidebar">
									<i class="fa-solid fa-sliders-h me-1"></i> Afficher les filtres
								</button>
								<!-- tabs -->
								<ul class="nav nav-pills nav-pills-dark" id="tour-pills-tab" role="tablist">
									<span style="font-size: 17px; padding: 5px; display: block; color: rgb(255, 166, 3); max-width:450px; margin-left: -30px;">Résultat : <b style="color: gray; font-weight: normal">{{resultsr.total_rows}} résidences trouvées</b> <span style="margin-top: -8px"><em style=" text-decoration: underline"> Page</em> <span style="color: gray; font-weight: normal">{{resultsr.current_page}}/{{resultsr.total_pages}}</span></span></span>
									<!-- Tab item -->
									<li class="nav-item">
										<router-link to="/resultat-list"
											class="nav-link rounded-start rounded-0 mb-0 active"><i
												class="bi fa-fw bi-list-ul"></i></router-link>
									</li>
									<!-- Tab item -->
									<li class="nav-item">
										<router-link to="/resultat-grid" class="nav-link rounded-end rounded-0 mb-0"><i
												class="bi fa-fw bi-grid-fill"></i></router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<!-- Tabs and alert END -->

					<div class="row">
						<!-- Left sidebar START -->
						<aside class="col-xl-4 col-xxl-3">
							<!-- Responsive offcanvas body START -->
							<div class="offcanvas-xl offcanvas-end" tabindex="-1" id="offcanvasSidebar"
								aria-labelledby="offcanvasSidebarLabel">
								<div class="offcanvas-header">
									<h5 class="offcanvas-title" id="offcanvasSidebarLabel">Advance Filters</h5>
									<button type="button" class="btn-close" data-bs-dismiss="offcanvas"
										data-bs-target="#offcanvasSidebar" aria-label="Close"></button>
								</div>
								<div class="offcanvas-body flex-column p-3 p-xl-0">
									<form class="rounded-3 shadow">

										<hr class="my-0">
										<div class="card card-body rounded-0 p-4">
											<!-- Title -->
											<h6 class="mb-2">Type d'Hébergement</h6>
											<!-- Hotel Type group -->
											<div class="col-12">
												<!-- Checkbox -->
												<div class="form-check">
													<el-radio v-model="selectedType" label="">Tous types</el-radio>
												</div>

												<div class="form-check">
													<el-radio v-model="selectedType" label="Studio">Studio</el-radio>
												</div>
												<!-- Checkbox -->
												<div class="form-check">
													<el-radio v-model="selectedType" label="2 pieces">2
														Pieces</el-radio>
												</div>
												<div class="form-check">
													<el-radio v-model="selectedType" label="3 pieces">3
														Pieces</el-radio>
												</div>
												<div class="form-check">
													<el-radio v-model="selectedType" label="plus de 3 pieces">Plus de 3
														Pieces</el-radio>
												</div>


												<!-- Collapse body -->
												<div class="multi-collapse collapse" id="hotelType">
													<!-- Checkbox -->
													<div class="form-check">
														<input class="form-check-input" type="checkbox" value=""
															id="hotelType7">
														<label class="form-check-label" for="hotelType7">Guest
															House</label>
													</div>
													<!-- Checkbox -->
													<div class="form-check">
														<input class="form-check-input" type="checkbox" value=""
															id="hotelType10">
														<label class="form-check-label"
															for="hotelType10">Cottage</label>
													</div>
													<!-- Checkbox -->
													<div class="form-check">
														<input class="form-check-input" type="checkbox" value=""
															id="hotelType8">
														<label class="form-check-label" for="hotelType8">Beach
															Hut</label>
													</div>
													<!-- Checkbox -->
													<div class="form-check">
														<input class="form-check-input" type="checkbox" value=""
															id="hotelType9">
														<label class="form-check-label" for="hotelType9">Farm
															house</label>
													</div>
												</div>

											</div>
										</div>
										<!-- Hotel type END -->

										<hr class="my-0"> <!-- Divider -->

										<!-- Price range START -->
										<div class="card card-body rounded-0 p-4">
											<!-- Title -->
											<h6 class="mb-2">Echelle des Prix</h6>
											<!-- Price range group -->
											<div class="col-12">
												<!-- Checkbox -->
												<div class="form-check">
													<el-radio v-model="selectedPrice" label="0">Tout</el-radio>
												</div>

												<div class="form-check">
													<el-radio v-model="selectedPrice" label="1">Moins de XOF 20
														000</el-radio>
												</div>
												<!-- Checkbox -->
												<div class="form-check">
													<el-radio v-model="selectedPrice" label="2">XOF 20 000 - 40
														000</el-radio>
												</div>
												<!-- Checkbox -->
												<div class="form-check">
													<el-radio v-model="selectedPrice" label="3">XOF 40 000 - 100
														000</el-radio>
												</div>
												<!-- Checkbox -->
												<div class="form-check">
													<el-radio v-model="selectedPrice" label="4">Plus de XOF 20
														000</el-radio>
												</div>
											</div>
										</div>
										<!-- Price range END -->

										<hr class="my-0"> <!-- Divider -->

										<!-- Popular type START -->
										<div class="card card-body rounded-0 p-4">
											<!-- Title -->
											<h6 class="mb-2">Type Populaire</h6>
											<!-- Popular Type group -->
											<div class="col-12">
												<!-- Checkbox -->
												<div class="form-check">
													<el-checkbox
														v-model="filters.restaurant">Petit-déjeuner</el-checkbox>
												</div>
												<!-- Checkbox -->
												<div class="form-check">
													<el-checkbox v-model="filters.evenement">Evenements
														accepté</el-checkbox>
												</div>
												<!-- Checkbox -->
												<div class="form-check">
													<el-checkbox v-model="filters.piscine">Avec Piscine</el-checkbox>
												</div>

												<div class="form-check">
													<el-checkbox v-model="filters.internet">Avec Internet</el-checkbox>
												</div>

												<div class="form-check">
													<el-checkbox v-model="filters.bordureMer">Vue sur
														laMer</el-checkbox>
												</div>
												<!-- Collapse button -->
											</div>
										</div>
										<!-- Popular type END -->

										<hr class="my-0"> <!-- Divider -->

										<!-- Customer Rating START -->
										<div class="card card-body rounded-0 p-4">
											<!-- Title -->
											<h6 class="mb-2">Evaluation des Clients</h6>
											<!-- Customer Rating group -->
											<ul class="list-inline mb-0 g-3">
												<!-- Item -->
												<li class="list-inline-item mb-0">
													<input type="checkbox" class="btn-check" id="btn-check-c1">
													<label class="btn btn-sm btn-light btn-primary-soft-check"
														for="btn-check-c1">3+</label>
												</li>
												<!-- Item -->
												<li class="list-inline-item mb-0">
													<input type="checkbox" class="btn-check" id="btn-check-c2">
													<label class="btn btn-sm btn-light btn-primary-soft-check"
														for="btn-check-c2">3.5+</label>
												</li>
												<!-- Item -->
												<li class="list-inline-item mb-0">
													<input type="checkbox" class="btn-check" id="btn-check-c3">
													<label class="btn btn-sm btn-light btn-primary-soft-check"
														for="btn-check-c3">4+</label>
												</li>
												<!-- Item -->
												<li class="list-inline-item mb-0">
													<input type="checkbox" class="btn-check" id="btn-check-c4">
													<label class="btn btn-sm btn-light btn-primary-soft-check"
														for="btn-check-c4">4.5+</label>
												</li>
											</ul>
										</div>
										<!-- Customer Rating END -->

										<hr class="my-0"> <!-- Divider -->

										<!-- Rating Star START -->
										<div class="card card-body rounded-0 p-4">
											<!-- Title -->
											<h6 class="mb-2">Notation Etoilé</h6>
											<!-- Rating Star group -->
											<ul class="list-inline mb-0 g-3">
												<!-- Item -->
												<li class="list-inline-item mb-0">
													<input type="checkbox" class="btn-check" id="btn-check-6">
													<label class="btn btn-sm btn-light btn-primary-soft-check"
														for="btn-check-6">1<i class="bi bi-star-fill"></i></label>
												</li>
												<!-- Item -->
												<li class="list-inline-item mb-0">
													<input type="checkbox" class="btn-check" id="btn-check-7">
													<label class="btn btn-sm btn-light btn-primary-soft-check"
														for="btn-check-7">2<i class="bi bi-star-fill"></i></label>
												</li>
												<!-- Item -->
												<li class="list-inline-item mb-0">
													<input type="checkbox" class="btn-check" id="btn-check-8">
													<label class="btn btn-sm btn-light btn-primary-soft-check"
														for="btn-check-8">3<i class="bi bi-star-fill"></i></label>
												</li>
												<!-- Item -->
												<li class="list-inline-item mb-0">
													<input type="checkbox" class="btn-check" id="btn-check-15">
													<label class="btn btn-sm btn-light btn-primary-soft-check"
														for="btn-check-15">4<i class="bi bi-star-fill"></i></label>
												</li>
												<!-- Item -->
												<li class="list-inline-item mb-0">
													<input type="checkbox" class="btn-check" id="btn-check-16">
													<label class="btn btn-sm btn-light btn-primary-soft-check"
														for="btn-check-16">5<i class="bi bi-star-fill"></i></label>
												</li>
											</ul>
										</div>
										<!-- Rating Star END -->

										<hr class="my-0"> <!-- Divider -->

										<!-- Amenities START -->
										<div class="card card-body rounded-0 rounded-bottom p-4">
											<!-- Title -->
											<h6 class="mb-2">Equipements</h6>
											<!-- Amenities group -->
											<div class="col-12">
												<!-- Checkbox -->
												<div class="form-check">
													<input class="form-check-input" type="checkbox" value=""
														id="amenitiesType1">
													<label class="form-check-label" for="amenitiesType1">Tout</label>
												</div>
												<!-- Checkbox -->
												<div class="form-check">
													<input class="form-check-input" type="checkbox" value=""
														id="amenitiesType2">
													<label class="form-check-label"
														for="amenitiesType2">Climatisation</label>
												</div>
												<!-- Checkbox -->
												<div class="form-check">
													<input class="form-check-input" type="checkbox" value=""
														id="amenitiesType3">
													<label class="form-check-label"
														for="amenitiesType3">Chaufage</label>
												</div>
												<!-- Checkbox -->
												<div class="form-check">
													<input class="form-check-input" type="checkbox" value=""
														id="amenitiesType4">
													<label class="form-check-label" for="amenitiesType4">Chambre(s)
														communicante(s)</label>
												</div>
												<!-- Checkbox -->
												<div class="form-check">
													<input class="form-check-input" type="checkbox" value=""
														id="amenitiesType5">
													<label class="form-check-label" for="amenitiesType5">Bain à
														remous/jacuzzi</label>
												</div>
												<!-- Checkbox -->
												<div class="form-check">
													<input class="form-check-input" type="checkbox" value=""
														id="amenitiesType6">
													<label class="form-check-label"
														for="amenitiesType6">Lave-linge</label>
												</div>

												<!-- Collapse body -->
												<div class="multi-collapse collapse" id="amenitiesCollapes">
													<!-- Checkbox -->
													<div class="form-check">
														<input class="form-check-input" type="checkbox" value=""
															id="amenitiesType7">
														<label class="form-check-label"
															for="amenitiesType7">Réfrigérateur</label>
													</div>
													<!-- Checkbox -->
													<div class="form-check">
														<input class="form-check-input" type="checkbox" value=""
															id="amenitiesType8">
														<label class="form-check-label" for="amenitiesType8">Vue sur la
															ville</label>
													</div>
													<!-- Checkbox -->
													<div class="form-check">
														<input class="form-check-input" type="checkbox" value=""
															id="amenitiesType9">
														<label class="form-check-label" for="amenitiesType9">Vidéo
															surveillance</label>
													</div>
													<!-- Checkbox -->
													<div class="form-check">
														<input class="form-check-input" type="checkbox" value=""
															id="amenitiesType10">
														<label class="form-check-label" for="amenitiesType10">Machine à
															café</label>
													</div>
												</div>
												<!-- Collapse button -->
												<a class="p-0 mb-0 mt-2 btn-more d-flex align-items-center collapsed"
													data-bs-toggle="collapse" href="#amenitiesCollapes" role="button"
													aria-expanded="false" aria-controls="amenitiesCollapes">
													Voir <span class="see-more ms-1">plus</span><span
														class="see-less ms-1">moins</span><i
														class="fa-solid fa-angle-down ms-2"></i>
												</a>
											</div>
										</div>
										<!-- Amenities END -->
									</form><!-- Form End -->
								</div>
								<!-- Buttons -->
								<div class="d-flex justify-content-between p-2 p-xl-0 mt-xl-4">
									<button class="btn btn-link p-0 mb-0">Réinitialiser</button>
									<button class="btn btn-primary mb-0">Résultat du filtre</button>
								</div>
							</div>
							<!-- Responsive offcanvas body END -->
						</aside>
						<!-- Left sidebar END -->

						<!-- Main content START -->
						<div class="col-xl-8 col-xxl-9">
							<div class="vstack gap-4">

							

								<!-- Card item START -->
								<div class="card shadow p-2" v-for="bien in results" :key="bien.id_item">
									<div class="row g-0">
										<!-- Card img -->
										<div class="col-md-5">
											<img :src="bien.image1" class="card-img rounded-2" alt="Card image"
												style="height: 250px">
										</div>

										<!-- Card body -->
										<div class="col-md-7">
											<div class="card-body py-md-2 d-flex flex-column h-100">

												<!-- Rating and buttons -->
												<div class="d-flex justify-content-between align-items-center">
													<ul class="list-inline mb-0">
														<li class="list-inline-item me-0 small"><i
																class="fa-solid fa-star text-warning"></i></li>
														<li class="list-inline-item me-0 small"><i
																class="fa-solid fa-star text-warning"></i></li>
														<li class="list-inline-item me-0 small"><i
																class="fa-solid fa-star text-warning"></i></li>
														<li class="list-inline-item me-0 small"><i
																class="fa-solid fa-star text-warning"></i></li>
														<li class="list-inline-item me-0 small"><i
																class="fa-solid fa-star-half-alt text-warning"></i></li>
													</ul>

													<ul class="list-inline mb-0 z-index-2">
														<!-- Heart icon -->
														<li class="list-inline-item">
															<a href="#" class="btn btn-sm btn-round btn-light"><i
																	class="fa-solid fa-fw fa-heart"></i></a>
														</li>
														<!-- Share icon -->
														<li class="list-inline-item dropdown">
															<!-- Share button -->
															<a href="#" class="btn btn-sm btn-round btn-light"
																role="button" id="dropdownShare2"
																data-bs-toggle="dropdown" aria-expanded="false">
																<i class="fa-solid fa-fw fa-share-alt"></i>
															</a>
															<!-- dropdown button -->
															<ul class="dropdown-menu dropdown-menu-end min-w-auto shadow rounded"
																aria-labelledby="dropdownShare2">
																<li><a class="dropdown-item" href="#"><i
																			class="fab fa-twitter-square me-2"></i>Twitter</a>
																</li>
																<li><a class="dropdown-item" href="#"><i
																			class="fab fa-facebook-square me-2"></i>Facebook</a>
																</li>
																<li><a class="dropdown-item" href="#"><i
																			class="fab fa-linkedin me-2"></i>LinkedIn</a>
																</li>
																<li><a class="dropdown-item" href="#"><i
																			class="fa-solid fa-copy me-2"></i>Copy
																		link</a></li>
															</ul>
														</li>
													</ul>
												</div>

												<!-- Title -->
												<h5 class="card-title mb-1"><a
														href="hotel-detail.html">{{ bien.libelle }}</a>
												</h5>
												<span class="result-location-mi" style="color:orange" v-if="bien.ville_item == 'Abidjan'">
													<vs-icon icon="place" style="font-size: 15px; color: orange;"></vs-icon>
													{{bien.commune_item}}, <em style="color: #67c23a; font-weight: bold">{{bien.quartier_item}}</em>
												</span>
												<span class="result-location-mi" style="color:orange" v-else>
													<vs-icon icon="place" style="font-size: 15px; color: orange;"></vs-icon>
													{{bien.ville_item}}, <em style="color: #67c23a; font-weight: bold">{{bien.quartier_item}}</em>
												</span>
												<!-- Amenities -->
												<ul class="nav nav-divider mt-3">
													<li class="nav-item" v-if="bien.eqpm_internet == '1'">
														<vs-icon title="Wi-Fi" icon="wifi"></vs-icon>
													</li>
													<li class="nav-item" v-if="bien.eqpm_parking == '1'">
														<vs-icon title="Parking" icon="local_parking"></vs-icon>
													</li>
													<li class="nav-item"
														v-if="bien.eqpm_piscine_pb == '1' || eqpm_piscine_pv == '1'">
														<vs-icon title="Piscine" icon="pool"></vs-icon>
													</li>
													<li class="nav-item" v-if="bien.eqpm_tv == '1'">
														<i title="TV" class="fa-solid fa-tv"></i>
													</li>
													<li class="nav-item" v-if="bien.eqpm_table_mange == '1'">
														<i title="Table à manger" class="fa-solid fa-chair"></i>
													</li>
													<li class="nav-item" v-if="bien.eqpm_ustensile == '1'">
														<i title="Ustensile de cuisine"
															class="fa-solid fa-utensils"></i>
													</li>
													<li class="nav-item" v-if="bien.eqpm_chaine_sat == '1'">
														<i title="Chaine satéllite"
															class="fa-solid fa-satellite-dish"></i>
													</li>
													<li class="nav-item" v-if="bien.eqpm_climatisation == '1'">
														<i title="Climatisation" class="fa-solid fa-snowflake"></i>
													</li>
													<li class="nav-item" v-if="bien.video_surveillance == '1'">
														<i title="Video surveillance" class="fa-solid fa-video"></i>
													</li>
												</ul>

												<!-- List -->
												<ul class="list-group list-group-borderless small mb-0 mt-2">
													<li class="list-group-item d-flex text-danger p-0"
														v-if="bien.eqpm_evenement == '0'">
														<i class="bi bi-patch-check-fill me-2"></i>Pas d'évenement
														accepté
													</li>
													<li class="list-group-item d-flex text-success p-0" v-else>
														<i class="bi bi-patch-check-fill me-2"></i>Evenements accepté
													</li>
													<li class="list-group-item d-flex text-success p-0"
														v-if="bien.nb_jour_reduction.length >= 1">
														<i class="bi bi-patch-check-fill me-2"></i>Réduction possible à
														partir
														de {{ bien.nb_jour_reduction }} et plus
													</li>
													<li class="list-group-item d-flex text-danger p-0" v-else>
														<i class="bi bi-patch-check-fill me-2"></i>Pas de réduction
													</li>
												</ul>

												<!-- Price and Button -->
												<div
													class="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
													<!-- Button -->
													<div class="d-flex align-items-center">
														<h5 class="fw-bold mb-0 me-1">XOF {{ bien.tarif_jour |
			formatThousands
															}}</h5>
														<span class="mb-0 me-2">/nuit</span>
													</div>
													<!-- Price -->
													<div class="mt-3 mt-sm-0">
														<a @click="GoToDetails(bien)"
															class="btn btn-sm btn-dark-soft mb-0 w-100">Voir les détails
															<i class="bi bi-arrow-right-circle-fill"></i></a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<!-- Card item END -->

								<!-- Card item END -->

								<!-- Pagination -->
								<center>
									<b-pagination style="width: 100%;" v-model="numPage" :total-rows="resultsr.total_rows"
										:per-page="perPage" class="mt-4">
										<template #prev-text><span class="text-success">Préc</span></template>
										<template #next-text><span class="text-success">Suiv</span></template>
										<template #ellipsis-text>
											<b-spinner small type="grow"></b-spinner>
											<b-spinner small type="grow"></b-spinner>
											<b-spinner small type="grow"></b-spinner>
										</template>
										<template #page="{ page, active }">
											<b v-if="active">{{ page }}</b>
											<i v-else>{{ page }}</i>
										</template>
									</b-pagination>
								</center>
							</div>
						</div>
						<!-- Main content END -->
					</div> <!-- Row END -->
				</div>
			</section>
		</div>

		<transition name="slide-down">
            <div class="actionsheet" v-if="isOpen">
                <!-- Arrière-plan semi-transparent -->
            <div div class="actionsheet-overlay" @click="closeActionSheet()"></div>
            
                <div class="actionsheet-content3 showLogin" :style="{ 'max-height': maxHeight }">
					<div class="d-flex align-items-center dash-header bg-white mb-6">
						<vs-button @click="closeActionSheet()" radius color="dark" type="line" icon="close"></vs-button>
							<span style="flex: auto" class="">
							<h2 style="font-size: 18px" class="mb-0 text-center">
								Recherche
							</h2>
							</span>
					</div>
             
                    <div class="vstack gap-3 menu-account" style="background: #ffffff; padding: 15px; border-radius: 20px">
						<vs-row style="padding: 1px;">
							<vs-col v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="12">
								<div style="display: flex;">
									<vs-select
										ref="secondInput"
										style="font-family: 'Jost', sans-serif"
										class="select-zone web-search"
										icon-after="true"
										icon="location_city"
										v-model="select1"
									>
										<vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options1" />
									</vs-select>
								</div>
							</vs-col>
							<vs-col v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="6">
								<div style="display: flex;">
									<vs-select
										style="font-family: 'Jost', sans-serif"
										class="select-zone web-search"
										icon-after="true"
										icon="location_on"
										v-model="select2"
										:disabled="select2Grise"
									>
										<vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options2" />
									</vs-select>
								</div>
							</vs-col>
							<vs-col v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="6">
								<div style="display: flex;">
									<vs-select
										style="font-family: 'Jost', sans-serif"
										class="select-zone web-search"
										icon-after="true"
										icon="meeting_room"
										v-model="selectedType"
									>
										<vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options3" />
									</vs-select>
								</div>
							</vs-col>
							
							<vs-col v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="1">
							</vs-col>
							<vs-col v-tooltip="'col - 3'" vs-justify="center" vs-align="center" vs-w="1">
							</vs-col>
						</vs-row>
                    </div>
					<vs-divider/>
					<vs-row>
						<vs-col vs-type="flex" vs-w="6" style="padding: 10px 5px">
							<vs-checkbox v-model="checkBox2">
								<vs-chip>
									<vs-avatar icon="wifi"/>
									Wifi
								</vs-chip>
							</vs-checkbox>
						</vs-col>
						<vs-col vs-type="flex" vs-w="6" style="padding: 10px 5px">
							<vs-checkbox icon="sms" color="success" v-model="checkBox2">
								<vs-chip>
									<vs-avatar icon="pool"/>
									Piscine
								</vs-chip>
							</vs-checkbox>
						</vs-col>
						<vs-col vs-type="flex" vs-w="6" style="padding: 10px 5px">
							<vs-checkbox icon="sms" color="success" v-model="checkBox2">
								<vs-chip>
									<vs-avatar icon="sms"/>
									Bord de mer
								</vs-chip>
							</vs-checkbox>
						</vs-col>
						<vs-col vs-type="flex" vs-w="6" style="padding: 10px 5px">
							<vs-checkbox icon="sms" color="success" v-model="checkBox2">
								<vs-chip>
									<vs-avatar icon="sms"/>
									Bord de lagune
								</vs-chip>
							</vs-checkbox>
						</vs-col>
				</vs-row>
				<vs-divider/>
				<div class="cuadrox mb-6" style="background: #f5f5f6; padding: 8px"> 
						<p style="text-align: center;">XOF <span style="font-size: 20px; font-weight: bold">{{ value1[0]*5000 | formatThousands }}</span> - XOF <span style="font-size: 20px; font-weight: bold">{{ value1[1]*5000 | formatThousands }}</span></p>
				</div>
				<vs-slider style="width: 80%; margin-left: 5%" step=1 v-model="value1"/>
				<div class="d-flex justify-content-between mt-7 align-items-center">
				<span class="fw-bold text-decoration-underline">Tout effacer</span>
				<span class="btn btn-primary mb-0" type="filled" @click="closeActionSheet2()">
					<i class="bi bi-search float-left  me-3"></i>
					Rechercher
				</span>
				</div>
				
                </div>
            </div>
        </transition>


	</div>
</template>

<script>
import { isMobile } from 'mobile-device-detect';
import 'tiny-slider/dist/tiny-slider.css';
export default {
	name: 'ResultPage',
	computed: {
		results() {
			return this.$store.state.results;
		},
		resultsr() {
			return this.$store.state.resultsr;
		},
		searchByHome() {
			return this.$store.state.searchByHome;
		}
	},
	data() {
		return {
			value1:[1, 80],
			valeurRecherche: 'Ville, commune, quartier',
			compteEtat: null,
			isOpen: false,
			compteData: null,
			numPage: 1,
			perPage: 10,
			datas: [],
			datasr: [],
			filters: {
				piscine: '',
				restaurant: '',
				bordureMer: '',
				evenement: '',
				internet: ''
			},
			ActiveBlur: false,
			choixService: [],
			select1: '0',
			select2: '0',
			select2Grise: false,
			selectedPrice: '0',
			selectedType: '0',
			options1: [
				{ text: 'Ville', value: 0 },
				{ text: 'Abidjan', value: 'Abidjan' },
				{ text: 'Grand-Bassam', value: 'Grand-Bassam' },
				{ text: 'Yamoussoukro', value: 'Yamoussoukro' },
				{ text: 'Bouaké', value: 'Bouaké' },
			],
			options2: [
				{ text: 'Zones', value: 0 },
				{ text: 'Abobo', value: 'Abobo' },
				{ text: 'Adjamé', value: 'Adjamé' },
				{ text: 'Angré', value: 'Angre' },
				{ text: 'Anyama', value: 'Anyama' },
				{ text: 'Attécoubé', value: 'Attécoubé' },
				{ text: 'Bingerville', value: 'Bingerville' },
				{ text: 'Cocody', value: 'Cocody' },
				{ text: 'II Plateau', value: 'II Plateau' },
				{ text: 'Koumassi', value: 'Koumassi' },
				{ text: 'Marcory', value: 'Marcory' },
				{ text: 'Plateau', value: 'Plateau' },
				{ text: 'Port-Bouet', value: 'Port-Bouet' },
				{ text: 'Riviera', value: 'Riviera' },
				{ text: 'Treichville', value: 'Treichville' },
				{ text: 'Yopougon', value: 'Yopougon' },
			],
			options3: [
				{ text: 'Tous Types', value: 0 },
				{ text: 'STUDIO', value: 'STUDIO' },
				{ text: '2 PIECES', value: '2 PIECES' },
				{ text: '3 PIECES', value: '3 PIECES' },
				{ text: '4 PIECES', value: '4 PIECES' },
				{ text: 'PLUS', value: 'PLUS' },
			],
			options4: [
				{ text: 'Tarif', value: 0 },
				{ text: '< XOF 20 000', value: 1 },
				{ text: 'XOF 20 000 - 40 000', value: 2 },
				{ text: 'XOF 40 000 - 100 000', value: 3 },
				{ text: '> XOF 100 000', value: 4 },
				{ text: '5', value: 4 },
				{ text: '6', value: 4 },
				{ text: '7', value: 4 },
				{ text: '8', value: 4 },
				{ text: '9', value: 4 },
				{ text: '10', value: 4 },
				{ text: 'Plus 10', value: 4 },
			],
			optionsServices: [
				{ text: 'Services', value: 0 },
				{ text: 'Avec Piscine', value: 1 },
				{ text: 'Avec Petit Déjeune', value: 2 },
				{ text: 'Vue sur la Mer', value: 3 },
				{ text: 'Evenement accepté', value: 4 },
				{ text: 'Avec Wifi', value: 5 },
				{ text: 'Vue sur lagune', value: 6 },
				{ text: 'vue sur lac', value: 7 },
			],
			isMobile: isMobile,
			options: [{
				label: 'Villes',
				options: [{
					value: 'Bouaké',
					label: 'Bouaké'
				}, {
					value: 'Yamoussoukro',
					label: 'Yamoussoukro'
				}, {
					value: 'Grand-Bassam',
					label: 'Grand-Bassam'
				}, {
					value: 'Assini',
					label: 'Assini'
				}]
			}, {
				label: 'Quartier Abidjan',
				options: [{
					value: 'Adjamé',
					label: 'Adjamé'
				}, {
					value: 'Bingerville',
					label: 'Bingerville'
				}, {
					value: 'Cocody',
					label: 'Cocody'
				}, {
					value: 'Yopougon',
					label: 'Yopougon'
				}]
			}],
		}
	},
	watch: {
		numPage: function () {
			this.ListeFiltre();
		},
		choixService: function (newValue) {
			document.querySelector('.hidee').style.display = 'none';
			this.ActiveBlur = true;
			const correspondance = {
				1: 'piscine',
				2: 'restaurant',
				3: 'bordureMer',
				4: 'evenement',
				5: 'internet'
				// Ajoutez d'autres correspondances au besoin
			};

			// Réinitialiser tous les filtres à 0
			this.filters = {
				piscine: 0,
				restaurant: 0,
				bordureMer: 0,
				evenement: 0,
				internet: 0,
				// Initialisez d'autres filtres au besoin
			};

			// Parcourir les éléments sélectionnés et mettre à jour les filtres correspondants
			newValue.forEach(item => {
				const filterName = correspondance[item];
				if (filterName) {
					this.filters[filterName] = 1;
				}
			});

		},

		AfficheZone() {
			document.querySelector('.hidee').style.display = 'block';
		},


		select2: function () {
			this.ListeFiltre(); // Appel de la fonction de recherche
		},
		select1: function (newValue) {
			if (newValue != 'Abidjan') {
				this.select2 = 0;
				this.select2Grise = true;
			} else {
				this.select2Grise = false;
			}

			this.ListeFiltre(); // Appel de la fonction de recherche
		},
		// Watcher pour le changement de selectedPrice
		selectedPrice: function () {
			this.ListeFiltre(); // Appel de la fonction de recherche
		},
		// Watcher pour le changement de selectedType
		selectedType: function () {
			this.ListeFiltre(); // Appel de la fonction de recherche
		},
		// Watcher pour le changement des filtres
		'filters.piscine': function () {
			this.ListeFiltre(); // Appel de la fonction de recherche
		},
		'filters.restaurant': function () {
			this.ListeFiltre(); // Appel de la fonction de recherche
		},
		'filters.bordureMer': function () {
			this.ListeFiltre(); // Appel de la fonction de recherche
		},
		'filters.evenement': function () {
			this.ListeFiltre(); // Appel de la fonction de recherche
		},
		'filters.internet': function () {
			this.ListeFiltre(); // Appel de la fonction de recherche
		}
	},
	methods: {
		// Méthode pour récupérer la liste des appartements
		Liste() {
			this.$vs.loading();
			this.$axios.get('/liste_appart.php?page=' + this.numPage)
				.then(response => {
					// Traiter la réponse de l'API
					this.datas = response.data.data;
					this.datasr = response.data;
					this.$store.commit('Resultats', this.datas);
					this.$store.commit('Resultatsr', this.datasr);
					this.$vs.loading.close()
				})
				.catch(error => {
					// Gérer les erreurs
					this.$vs.loading.close()
					console.error('Erreur de requête:', error);
				});
		},

		handleFocus() {
			this.openActionSheet();
		},

		openActionSheet() {
				this.isOpen = true;
				console.log(this.isOpen);
				document.body.style.overflow = 'hidden';
			},

		closeActionSheet() {
			this.isOpen = false;
			console.log(this.isOpen)
			document.body.style.overflow = '';
		},

		closeActionSheet2() {
			const pays ="Côte d'Ivoire,";
			let ville = '';
			let commune = '';
			if(this.select1 == '0') {
				ville = ' Abidjan,';
			} else {
				ville = ' '+this.select1+',';
			}
			if(this.select2 == '0') {
				commune = '';
			} else {
				commune = ' '+this.select2+',';
			}
			this.valeurRecherche = pays+ville+commune;
			this.isOpen = false;
			document.body.style.overflow = '';
			this.ListeFiltre();
		},

		ListeFiltre() {
			const postData = {
				prix_min: this.value1[0]*5000,
				prix_max: this.value1[1]*5000,
				type: this.selectedType,
				ville: this.select1,
				commune: this.select2,
				piscine: this.filters.piscine ? 1 : 0,
				restaurant: this.filters.restaurant ? 1 : 0,
				bordureMer: this.filters.bordureMer ? 1 : 0,
				evenement: this.filters.evenement ? 1 : 0,
				internet: this.filters.internet ? 1 : 0
			};
			this.$vs.loading({
				type: 'sound',
			})
			// Faire la requête POST
			this.$axios.post('/liste_appart.php?page=' + this.numPage + '&timestamp=' + new Date().getTime(), postData)
				.then(response => {
					// Traiter la réponse de l'API
					this.datas = response.data.data;
					this.datasr = response.data;
					this.$store.commit('Resultats', this.datas);
					this.$store.commit('Resultatsr', this.datasr);
					this.$vs.loading.close();
					this.scrollToTop();
				})
				.catch(error => {
					// Gérer les erreurs
					this.$vs.loading.close()
					console.error('Erreur de requête:', error);
				});
			this.scrollToTop();
		},

		scrollToTop() {
			window.scrollTo({
				top: 0,
				behavior: 'smooth' // Permet un défilement fluide
			});
		},

		verifSearch() {
			if (!this.searchByHome) {
				this.ListeFiltre();
			}
		},

		open() {
			this.$confirm('Votre compte à été activé !', 'Activé', {
			confirmButtonText: 'OK',
			showCancelButton: false,
			type: 'success'
			}).then(() => {
			this.$message({
				type: 'success',
				message: 'Vous êtes connecté'
			});
			}).catch(() => {         
			});
		},

		off() {
			this.$confirm('erreur activation !', 'Erreur', {
			confirmButtonText: 'OK',
			showCancelButton: false,
			type: 'danger'
			}).then(() => {
			this.$message({
				type: 'danger',
				message: 'Le code d\'activation n\'est pas correcte'
			});
			}).catch(() => {         
			});
		},

		activeCompte(compte) {
			this.$vs.loading();
			this.$axios.get('/compteactive.php?confirmation=' + compte)
				.then(response => {
					// Traiter la réponse de l'API
					this.compteEtat = response.data.valide;
					this.compteData = response.data.data;
					if(this.compteEtat == 1) {
						this.open();
						console.log(this.compteEtat);
						this.$store.commit('ConnexionAgent', this.compteData);
					} else {
						this.off();
					}
					this.$vs.loading.close()
				})
				.catch(error => {
					// Gérer les erreurs
					this.$vs.loading.close()
					console.error('Erreur de requête:', error);
				});
		},
  
		// Méthode pour naviguer vers les détails d'un bien
		GoToDetails(bien) {
			this.$vs.loading();
			// Déclencher la mutation pour stocker les détails du bien
			this.$store.commit('BiensDetail', bien);
			this.$vs.loading.close();
			// Naviguer vers la page de détails en passant l'identifiant du bien en paramètre
			this.$router.push({ name: 'DetailTest', params: { param: bien.id_item } });

		},

		detecterParametreCode() {
		// Obtenez la partie de l'URL qui suit le point d'interrogation ("?")
		const queryString = window.location.search;
			// Créez un objet URLSearchParams pour analyser la chaîne de requête
			const params = new URLSearchParams(queryString);
			// Vérifiez si le paramètre "code" existe
			if (params.has('code')) {
				// Le paramètre "code" existe dans l'URL
				const codeValue = params.get('code').slice(-5);
				this.activeCompte(codeValue);
				//console.log('Le paramètre "code" existe dans l\'URL avec la valeur :', codeValue);
				// Vous pouvez effectuer d'autres actions ici en fonction de votre besoin
			} else {
				// Le paramètre "code" n'existe pas dans l'URL
				//console.log('Le paramètre "code" n\'existe pas dans l\'URL.');
				// Vous pouvez effectuer d'autres actions ici en fonction de votre besoin
			}
		}
	},
	filters: {
		formatThousands(value) {
			return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		},
	},
	mounted() {
		this.verifSearch();
		this.detecterParametreCode();
	},
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital@0;1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,501;1,501&display=swap');
.someExtraClass {
  background-color: aqua;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 0 20px 20px 20px;
  box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: auto !important;
  height: auto !important;
  margin: 0 !important;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.5s ease-out;
}

.slide-down-enter,
.slide-down-leave-to {
  transform: translateY(-100%);
}
</style>