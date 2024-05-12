<template>
    <div class="home">
        <div v-if="isMobile">
            <div class="corps">
                <div class="zone-of-work-m">
                    <div class="card-nav">
                        <span @click="retour" class="mt-3" style="position: absolute; z-index: 100; width: 95%">
                                <i class="fa-solid fa-chevron-left text-white fw-bold ms-2 mt-2" style="font-size:x-large"></i>
                        </span>
                        <carousel :per-page="1" :loop="true" :easing="ease" :mouse-drag="false"  :autoplay="true"
                            paginationActiveColor="#ff9800" style="height: 100%; z-index:1">

                            <slide v-if="datas.image1.length > 5" style="width: 100%; height: 260px">
                                <center>
                                    <img :src="datas.image1" class="carousel-image">
                                </center>
                            </slide>
                            <slide v-if="datas.image2.length > 5" style="height: 260px">
                                <center>
                                    <img :src="datas.image2" class="carousel-image">

                                </center>
                            </slide>
                            <slide v-if="datas.image3.length > 5" style="height: 260px">
                                <center>
                                    <img :src="datas.image3" class="carousel-image">
                                </center>
                            </slide>
                            <slide v-if="datas.image4.length > 5" style="height: 260px">
                                <center>
                                    <img :src="datas.image4" class="carousel-image">
                                </center>
                            </slide>
                            <slide v-if="datas.image5.length > 5" style="height: 260px">
                                <center>
                                    <img :src="datas.image5" class="carousel-image">
                                </center>
                            </slide>
                            <slide v-if="datas.image6.length > 5" style="height: 260px">
                                <center>
                                    <img :src="datas.image6" class="carousel-image">
                                </center>
                            </slide>
                            <slide v-if="datas.image7.length > 5" style="height: 260px">
                                <center>
                                    <img :src="datas.image7" class="carousel-image">
                                </center>
                            </slide>
                            <slide v-if="datas.image8.length > 5" style="height: 260px">
                                <center>
                                    <img :src="datas.image8" class="carousel-image">
                                </center>
                            </slide>
                        </carousel>
                    </div>

                    <div class="mobile-info">
                        <div class="mobile-info-content">
                         
                            <div class="mobile-info-body mb-4">
                                <div class="d-flex my-1 mb-0" style="justify-content: space-between;">
                                    <h5>{{ datas.libelle }}</h5>
                                    <span class="" @click="favorisAjout()">
                                        <i class="fas fa-heart" style="font-size: 25px; color: red" v-if="favorisOK"></i>
                                        <i class="fa-regular fa-heart" style="font-size: 25px;" v-else></i>
                                    </span>
                                </div>
                                <div class="d-flex align-items-center my-1 mb-1">
                                    <span class="result-location-detail" style="font-size: 15px">
                                        <i class="fa-solid fa-location-dot me-2" style="color:orange"></i> 
                                        {{ datas.ville_item }} {{ datas.commune_item }} {{ datas.quartier_item }}
                                    </span>
                                </div>
                                <div class="d-flex align-items-center my-1 mb-1">
                                    <div class="container-commodite">
                                        <div class="mobile-group">
                                        <span class="mobile-widget me-2" v-if="datas.eqpm_internet == '1' || datas.eqpm_internet == 'true'">
                                            <i class="fa-solid fa-wifi" style="font-size: 25px !important;"></i>
                                            <span>Wifi gratuit</span>
                                        </span>
                                        <span class="mobile-widget me-2"  v-if="datas.eqpm_climatisation == '1' || datas.eqpm_climatisation == 'true'">
                                            <i class="fa-solid fa-snowflake" style="font-size: 25px !important;"></i>
                                            <span>Climatisation</span>
                                        </span>
                                        <span class="mobile-widget me-2"  v-if="(datas.eqpm_piscine_pb == '1' || datas.eqpm_piscine_pb == 'true') || (datas.eqpm_piscine_pv == '1' || datas.eqpm_piscine_pv == 'true')">
                                            <i class="fa-solid fa-swimming-pool" style="font-size: 25px !important;"></i>
                                            <span>Piscine</span>
                                        </span>
                                        <span class="mobile-widget me-2"  v-if="datas.eqpm_ustensile == '1' || datas.eqpm_ustensile == 'true'">
                                            <i class="fa-solid fa-utensils" style="font-size: 25px !important;"></i>
                                            <span>Ustensile</span>
                                        </span>
                                        <span class="mobile-widget me-2"  v-if="datas.eqpm_tv == '1' || datas.eqpm_tv == 'true'">
                                            <i class="fa-solid fa-tv" style="font-size: 25px !important;"></i>
                                            <span>Télévision</span>
                                        </span>
                                        <span class="mobile-widget me-2"  v-if="datas.eqpm_baignoire == '1' || datas.eqpm_baignoire == 'true'">
                                            <i class="fa-solid fa-bath" style="font-size: 25px !important;"></i>
                                            <span>Baignoire</span>
                                        </span>
                                        <span class="mobile-widget me-2">
                                            <i class="fa-solid fa-universal-access" style="font-size: 25px !important;"></i>
                                            <span>Accès facile</span>
                                        </span>
                                        <span class="mobile-widget me-2"  v-if="datas.eqpm_parking == '1' || datas.eqpm_parking == 'true'">
                                            <i class="fa-solid fa-square-parking" style="font-size: 25px !important;"></i>
                                            <span>Parking</span>
                                        </span>
                                        <span class="mobile-widget me-2">
                                           <vs-icon icon="pending" color="#348ddb" style="font-size: 28px !important;"></vs-icon>                                   
                                            <span style="color: #348ddb">Plus</span>
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center my-1 mb-1">
                                    <p style="font-size:18px" class="text-success">Évènement(s) accepté</p>
                                </div>
                                <div class="event">
                                    <ul class="nav event-name nav-divider mb-2">
                                        <li class="nav-item">Anniversaire</li>
                                        <li class="nav-item">Festivité</li>
                                        <li class="nav-item">Baptême</li>
                                        <li class="nav-item">Tournage</li>
                                    </ul>
                                </div>
                                <div class="d-flex my-1 mb-0 align-items-center" style="justify-content: space-between;">
                                <h6 class="reserve" style="font-size:12px">Réservation à partir de +1 jour(s) à</h6>
                                <h4 class="prix-reserve" style="font-size:17px; color: blue;">XOF {{ datas.tarif_jour | formatThousands }} <span class="result-price-delay">/ Jour</span></h4>
                                </div>
                                <div class="reduct-price">
                                    <span class="reduct-name text-success" v-if="datas.nb_jour_reduction.lenght >= 0">Réduction disponible à partir de {{ datas.nb_jour_reduction }} à <span class="fw-bold ms-1"> {{ datas.tarif_jour_reduction | formatThousands }} <span class="result-price-delay">/ Jour</span></span></span>
                                </div>
                                <vs-divider />
                                <div class="d-flex my-1 mb-0 align-items-center" style="justify-content: space-between;">
                                    <h6><i class="fa-solid fa-door-open me-2"></i> {{ datas.type_item }}</h6>
                                    
                                    <span class=" me-4" style="font-size: 15px; float: right; color: dark;margin-top: -8px ">
                                    {{ ip + 1 }} <vs-icon class="ms-1" icon="visibility"
                                        style="font-size: 19px; position: absolute; color: #348DDB;"></vs-icon>
                                </span>
                                </div>
                                
                            </div>
                        </div>

                    </div>

                   <!-- <div class="card-nav" style="margin-bottom: 5px; padding: 3px">
                        <el-row>

                            <a v-if="datas.localisation_latitude.length > 2" ==============tas.localisation_latitude + ',' + datas.localisation_longitude"><vs-button
                                    color="dark" type="border" icon="room">Localisation</vs-button></a>
                            <a v-else target="_blank"
                                :href="'https://www.google.com/maps?q=' + datas.localisation_latitude + ',' + datas.localisation_longitude"><vs-button
                                    disabled color="dark" type="border" icon="room">Localisation</vs-button></a>
                        </el-row>
                    </div>
                -->
                    <div class="foot-action" v-if="zooma">
                        <vs-button class="mb-4" color="success" type="filled" icon="confirmation_number"
                            style="width: 90%;margin-left: 5%" @click="reservation = true">Je réserve 
                        </vs-button>
                    </div>
                    <div class="card-nav" style="margin-bottom: 55px;">

                      
                       
                        <vs-row class="zone-of-search">

                            <vs-col class="mt-0 ms-2 me-2 mb-2" v-tooltip="'col - 3'" vs-type="flex" vs-align="center" vs-w="12 ">
                                <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                                    <div class="result-item-detail-m" style="padding: 0px 6px">
                                        <div style="display: block">
                                            <h6 style="color: dark;">  Partager cet établissement</h6>
                                            <div class="d-flex align-items-center col-12">
                                                <div class="container-share">
                                                    <div class="share-group">
                                                    <span class="share-widget me-2">
                                                        <a :href="'https://www.facebook.com/sharer/sharer.php?link=' + encodeURIComponent(linkroute) + '&app_id=&display=popup&quote=' + encodeURIComponent(messagewhatsapp)">
                                                            <i class="fab fa-facebook-f" style="font-size: 25px !important; color: #1877f2;"></i>
                                                        </a>
                                                    </span>
                                                    <span class="share-widget me-2">
                                                        <a :href="'https://wa.me//?text=' + linkroute + '%0A' + messagewhatsapp + ' pour ' + formatPrice(datas.tarif_jour) + '/jour.'">
                                                        <i class="fa-brands fa-whatsapp" style="font-size: 25px !important; color: #25d366;"></i>
                                                        </a>
                                                    </span>
                                                    <span class="share-widget me-2">
                                                        <a :href="'fb-messenger://share?link=' + encodeURIComponent(linkroute) + '&app_id=&display=popup&quote=' + encodeURIComponent(messagewhatsapp)">
                                                            <i class="fa-brands fa-facebook-messenger" style="font-size: 25px !important; color: #0084ff;"></i>
                                                        </a>
                                                    </span>
                                                    <span class="share-widget me-2">
                                                        <a :href="'https://twitter.com/intent/tweet?url=' + encodeURIComponent(linkroute) + '&text=' + encodeURIComponent(messagetotweet)">
                                                            <i class="fab fa-twitter" style="font-size: 25px !important; color: #1da1f2;"></i>
                                                        </a>
                                                    </span>
                                                    <span class="share-widget me-2">
                                                        <a :href="'sms:?body=' + encodeURIComponent(messagewhatsapp)">
                                                            <i class="fas fa-comment" style="font-size: 25px !important; color: #007bff;"></i>
                                                        </a>
                                                    </span>
                                                    
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </vs-col>
                            </vs-col>
                            <vs-divider/>
                            <vs-col v-if="datas.agent_securite == '1'" class="mt-0 ms-2 mb-2" v-tooltip="'col - 3'" vs-type="flex" vs-align="center" vs-w="12 ">
                                <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                                    <div class="result-item-detail-m" style="padding: 0px 6px">
                                        <div style="display: block">
                                            <h6 style="color: dark;"> Disponibilité</h6>
                                            <el-row>
                                                <el-col :span="12" v-if="datas.agent_securite == '1'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-clock me-1"></i>
                                                        <span class="service-title">Disponible à {{datas.horaire_jour_entre}}</span>
                                                    </div>
                                                </el-col>
                                                    <el-col :span="12" v-if="datas.agent_securite == '1'">
                                                        <div class="grid-content bg-purple">
                                                            <i class="fa-solid fa-clock me-1"></i>
                                                        <span class="service-title">Libérer avant {{datas.horaire_jour_sorti}}</span>
                                                        </div>
                                                </el-col>
                                            </el-row>
                                        </div>
                                    </div>
                                </vs-col>
                                
                            </vs-col>

                            <vs-divider v-if="datas.agent_securite == '1'" />

                            <vs-col class="mt-1 ms-2 mb-2" v-tooltip="'col - 3'" vs-type="flex" vs-align="center" vs-w="12 ">
                                <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                                    <div class="result-item-detail-m" style="padding: 0px 6px">
                                        <div style="display: block">
                                            <h2 style="color: dark;"> Equipements</h2>
                                        </div>
                                    </div>
                                </vs-col>
                            </vs-col>

                            <vs-col class="mt-1 ms-2 mb-2" v-tooltip="'col - 3'" vs-type="flex" vs-align="center" vs-w="12 ">

                                <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">

                                    <div class="result-item-detail-m" style="padding: 0px 6px">
                                        <div style="display: block">
                                            <h6 style="color: dark;"><i class="fa-solid fa-bed me-2"></i> Équipements en
                                                chambre</h6>
                                            <el-row>
                                                <el-col :span="12"
                                                    v-if="datas.agent_securite == '1' || datas.agent_securite == 'true'">
                                                    <div class="grid-content bg-purple">
                                                   <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Sécurité</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_internet == '1' || datas.eqpm_internet == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Wifi - Internet</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="(datas.eqpm_piscine_pb == '1' || datas.eqpm_piscine_pb == 'true') || (datas.eqpm_piscine_pv == '1' || datas.eqpm_piscine_pv == 'true')">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Piscine</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_tv == '1' || datas.eqpm_tv == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">TV & Canal+</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_climatisation == '1' || datas.eqpm_climatisation == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Climatisation</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_vue_mer == '1' || datas.eqpm_vue_mer == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Vue sur Plage</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_parking == '1' || datas.eqpm_parking == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Parking</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_baignoire == '1' || datas.eqpm_baignoire == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Baignoire</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_balcon == '1' || datas.eqpm_balcon == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Balcon</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_micro_ondes == '1' || datas.eqpm_micro_ondes == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Micro-onde</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_refrigerateur == '1' || datas.eqpm_refrigerateur == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Refrigérateur</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_lave_linge == '1' || datas.eqpm_lave_linge == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Lave Machine</span>
                                                    </div>
                                                </el-col>
                                            </el-row>
                                        </div>
                                    </div>
                                </vs-col>
                            </vs-col>

                            <vs-col class="mt-4 ms-2 mb-2" v-tooltip="'col - 3'" vs-type="flex" vs-align="center" vs-w="12 ">
                                <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                                    <div class="result-item-detail-m" style="padding: 0px 6px">
                                        <div style="display: block">
                                            <h6 style="color: dark;"> <i class="fa-solid fa-tv me-2"></i>High-tech</h6>
                                            <el-row>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_table_mange == '1' || datas.eqpm_table_mange == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Table à manger</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_ustensile == '1' || datas.eqpm_ustensile == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Ustensiles</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="(datas.eqpm_machine_cafe == '1' || datas.eqpm_machine_cafe == 'true')">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Machine à café</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_barbecue == '1' || datas.eqpm_barbecue == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Barbecue</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_micro_ondes == '1' || datas.eqpm_micro_ondes == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Micro-onde</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_four == '1' || datas.eqpm_four == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Four</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_lave_vaiselle == '1' || datas.eqpm_lave_vaiselle == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Lave vaisselle</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_bouilloir_electrique == '1' || datas.eqpm_bouilloir_electrique == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Bouilloire Electrique</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_refrigerateur == '1' || datas.eqpm_refrigerateur == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Réfrigérateur</span>
                                                    </div>
                                                </el-col>

                                            </el-row>
                                        </div>
                                    </div>
                                </vs-col>
                            </vs-col>

                            <vs-col class="mt-4 ms-2 mb-2" v-tooltip="'col - 3'" vs-type="flex" vs-align="center" vs-w="12 ">
                                <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                                    <div class="result-item-detail-m" style="padding: 0px 6px">
                                        <div style="display: block">
                                            <h6 style="color: dark;"><i class="fa-solid fa-lock me-2"></i> Équipements de
                                                sécurité</h6>
                                            <el-row>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_baignoire == '1' || datas.eqpm_baignoire == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Baignoire</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_peignoire == '1' || datas.eqpm_peignoire == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Peignoir</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="(datas.eqpm_jacuzzi == '1' || datas.eqpm_jacuzzi == 'true')">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Jacuzzi</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_sauna == '1' || datas.eqpm_sauna == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Sauna</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_seche_cheveu == '1' || datas.eqpm_seche_cheveu == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Sèche-cheveux</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_papier_toilette == '1' || datas.eqpm_papier_toilette == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Papier toilette</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_seche_linge == '1' || datas.eqpm_seche_linge == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Sèche-linge</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_lave_linge == '1' || datas.eqpm_lave_linge == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Lave-linge</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_fer_repasse == '1' || datas.eqpm_fer_repasse == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Fer à repasser</span>
                                                    </div>
                                                </el-col>

                                            </el-row>
                                        </div>
                                    </div>
                                </vs-col>
                            </vs-col>

                            <vs-col class="mt-4 ms-2 mb-2" v-tooltip="'col - 3'" vs-type="flex" vs-align="center" vs-w="12 ">
                                <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                                    <div class="result-item-detail-m" style="padding: 0px 6px">
                                        <div style="display: block">
                                            <h6 style="color: dark;"> <i class="fa-solid fa-bath me-2"></i>Salle de bains
                                            </h6>
                                            <el-row>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_canape_chambre == '1' || datas.eqpm_canape_chambre == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Canapé en Chambre</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_balcon == '1' || datas.eqpm_balcon == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Balcon</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="(datas.eqpm_jardin == '1' || datas.eqpm_jardin == 'true')">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Jardin</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_jeux_puzzles == '1' || datas.eqpm_jeux_puzzles == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Jeux et puzzles</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_livres == '1' || datas.eqpm_livres == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Livres</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_vue_ville == '1' || datas.eqpm_vue_ville == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Vue sur la ville</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_vue_piscine == '1' || datas.eqpm_vue_piscine == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Vue sur la piscine</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_vue_riviere == '1' || datas.eqpm_vue_riviere == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Vue sur la rivière</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_vue_mer == '1' || datas.eqpm_vue_mer == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Vue sur la mer</span>
                                                    </div>
                                                </el-col>

                                            </el-row>
                                        </div>
                                    </div>
                                </vs-col>
                            </vs-col>

                            <vs-col class="mt-4 ms-2 mb-2" v-tooltip="'col - 3'" vs-type="flex" vs-align="center" vs-w="12 ">
                                <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                                    <div class="result-item-detail-m" style="padding: 0px 6px">
                                        <div style="display: block">
                                            <h6 style="color: dark;"> <i class="fa-solid fa-spa me-2"></i>Extérieur/Vues
                                            </h6>
                                            <el-row>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_canape_chambre == '1' || datas.eqpm_canape_chambre == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Canapé en Chambre</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_balcon == '1' || datas.eqpm_balcon == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Balcon</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="(datas.eqpm_jardin == '1' || datas.eqpm_jardin == 'true')">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Jardin</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_jeux_puzzles == '1' || datas.eqpm_jeux_puzzles == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Jeux et puzzles</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_livres == '1' || datas.eqpm_livres == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Livres</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_vue_ville == '1' || datas.eqpm_vue_ville == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Vue sur la ville</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_vue_piscine == '1' || datas.eqpm_vue_piscine == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Vue sur la piscine</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_vue_riviere == '1' || datas.eqpm_vue_riviere == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Vue sur la rivière</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_vue_mer == '1' || datas.eqpm_vue_mer == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Vue sur la mer</span>
                                                    </div>
                                                </el-col>

                                            </el-row>
                                        </div>
                                    </div>
                                </vs-col>
                            </vs-col>

                            <vs-col class="mt-4 ms-2 mb-2" v-tooltip="'col - 3'" vs-type="flex" vs-align="center" vs-w="12 ">
                                <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                                    <div class="result-item-detail-m" style="padding: 0px 6px">
                                        <div style="display: block">
                                            <h6 style="color: dark;"> <i class="fa-solid fa-utensils me-2"></i>Restauration
                                            </h6>
                                            <el-row>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_canape_chambre == '1' || datas.eqpm_canape_chambre == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Canapé en Chambre</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_balcon == '1' || datas.eqpm_balcon == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Balcon</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="(datas.eqpm_jardin == '1' || datas.eqpm_jardin == 'true')">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Jardin</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_jeux_puzzles == '1' || datas.eqpm_jeux_puzzles == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Jeux et puzzles</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_livres == '1' || datas.eqpm_livres == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Livres</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_vue_ville == '1' || datas.eqpm_vue_ville == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Vue sur la ville</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_vue_piscine == '1' || datas.eqpm_vue_piscine == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Vue sur la piscine</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_vue_riviere == '1' || datas.eqpm_vue_riviere == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Vue sur la rivière</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_vue_mer == '1' || datas.eqpm_vue_mer == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Vue sur la mer</span>
                                                    </div>
                                                </el-col>

                                            </el-row>
                                        </div>
                                    </div>
                                </vs-col>
                            </vs-col>

                            <vs-col class="mt-4 ms-2 mb-2" v-tooltip="'col - 3'" vs-type="flex" vs-align="center" vs-w="12 ">
                                <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                                    <div class="result-item-detail-m" style="padding: 0px 6px">
                                        <div style="display: block">
                                            <h6 style="color: dark;"> <i class="fa-solid fa-language me-2"></i>Langue du personnel
                                            </h6>
                                            <el-row>
                                                <el-col :span="12"
                                                    v-if="datas.eqpm_langue1 == 'true'">
                                                    <div class="grid-content bg-purple">
                                                        <i class="fa-solid fa-check-circle text-success me-1"></i>
                                                        <span class="service-title">Canapé en Chambre</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="8"
                                                    v-if="datas.eqpm_langue1.length >= 2">
                                                    <div class="grid-content bg-purple">
                                                        <span class="service-title">{{datas.eqpm_langue1}}</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="8"
                                                    v-if="datas.eqpm_langue2.length >= 2">
                                                    <div class="grid-content bg-purple">
                                                        <span class="service-title">{{datas.eqpm_langue2}}</span>
                                                    </div>
                                                </el-col>
                                                <el-col :span="8"
                                                    v-if="datas.eqpm_langue3.length >= 2">
                                                    <div class="grid-content bg-purple">
                                                        <span class="service-title">{{datas.eqpm_langue3}}</span>
                                                    </div>
                                                </el-col>
                                               

                                            </el-row>
                                        </div>
                                    </div>
                                </vs-col>
                            </vs-col>

                          <vs-divider />
                          <vs-col class="mt-2 ms-2 mb-0" v-tooltip="'col - 3'" vs-type="flex" vs-align="center" vs-w="12 ">
                                <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                                    <div class="result-item-detail-m" style="padding: 0px 6px">
                                        <div style="display: block">
                                            <h6 style="color: dark;">Description</h6>
                                            <el-row>
                                                <span v-html="showFullDescription ? datas.description : limitedDescription" class="result-text-detail me-4" style=" display: block; color: #4e4747"></span>
                                                <p v-if="!showFullDescription && datas.description.length > 200" @click="showFullDescription = true" class="fw-bold" style="font-size:16px; color: #348ddb">Lire la suite</p>
                                            </el-row>
                                        </div>
                                    </div>
                                </vs-col>
                            </vs-col>
                            <vs-divider/>
                            <vs-col class="mt-4 ms-2 mb-2" v-tooltip="'col - 3'" vs-type="flex" vs-align="center" vs-w="12 ">
                                <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                                    <div class="result-item-detail-m" style="padding: 0px 6px">
                                        <div style="display: block">
                                            
                                            <div class="d-flex justify-content-between align-content-center">
                                                <h6 class="fw-bold" style="color: dark;">Localisation</h6>
                                                <a target="_blank" :href="'https://www.google.com/maps?q=' + datas.localisation_latitude + ',' + datas.localisation_longitude" v-if="datas.localisation_latitude.length >= 2">
                                                    <p class="text-decoration-underline text-align-right" type="text" style="font-size:13px; color: #348ddb; margin-right: 10px" @click="popupActivo4 = true">Ouvrir dans <b>Google Maps</b></p>
                                                </a>
                                            </div>
                                            <el-row class="me-2">
                                                <l-map style="height: 200px" :zoom="zoom" :center="center">
                                                    <l-tile-layer :url="url" ></l-tile-layer>
                                                    <l-marker :lat-lng="[5.3510144, -3.997696]">
                                                        <l-icon
                                                        :icon-anchor="staticAnchor"
                                                         class-name="someExtraClass">
                                                         <img src="../assets/images/map.svg" style="height:32px">
                                                    </l-icon>
                                                    </l-marker>
                                                </l-map>
                                                <div class="d-flex align-items-center my-1 mb-1">
                                                    <span class="result-location-detail" style="font-size: 15px">
                                                        <i class="fa-solid fa-location-dot me-2" style="color:orange"></i> 
                                                        {{ datas.ville_item }} {{ datas.commune_item }} {{ datas.quartier_item }}
                                                    </span>
                                                </div>
                                            </el-row>
                                        </div>
                                    </div>
                                </vs-col>
                            </vs-col>
                           
                            <vs-col class="mt-4 mb-2" v-tooltip="'col - 3'" vs-type="flex" vs-align="center" vs-w="12 ">
                                <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                                    <div class="result-item-detail-m" style="padding: 0px 6px">
                                        <div style="display: block">
                                            <el-row class="me-0">
                                                <el-collapse accordion >
                                                    <el-collapse-item class="ms-2" name="1">
                                                        <template #title>
                                                            <h6>Critères de l'établissement</h6>
                                                        </template>
                                                        <div><i class="bi bi-arrow-right me-2"></i>Le client doit couvrir les frais d'annulation ou de modification en cas de mise à jour.</div>
                                                        <div><i class="bi bi-arrow-right me-2"></i>Pas remboursé lorsque les conditions d'annulation ne sont pas respectées.</div>
                                                        <div><i class="bi bi-arrow-right me-2"></i>Les drogues et substances illicites sont strictement interdites.</div>
                                                        <div><i class="bi bi-arrow-right me-2"></i>Priés de ne pas abuser de la consommation d'alcool.</div>
                                                        <div><i class="bi bi-arrow-right me-2"></i>Pas de fêtes ni d'événements.</div>
                                                    </el-collapse-item>
                                                   
                                                    <el-collapse-item class="ms-2" name="2">
                                                        <template #title>
                                                            <h6>Lieux d'intérêt à découvrir à proximité</h6>
                                                        </template>
                                                            <el-timeline>
                                                                <el-timeline-item
                                                                v-for="(activity, index) in activities"
                                                                :key="index"
                                                                :icon="activity.icon"
                                                                :type="activity.type"
                                                                :color="activity.color"
                                                                :size="activity.size"
                                                                :timestamp="activity.timestamp">
                                                                {{activity.content}}
                                                                </el-timeline-item>
                                                            </el-timeline>
                                                    </el-collapse-item>
                                                    <el-collapse-item class="ms-2" name="4">
                                                        <template #title>
                                                            <h6>Avantage lié à cet établissement</h6>
                                                        </template>
                                                        <div><i class="bi bi-patch-check-fill text-success me-2"></i>L'hôtel propose des options de restauration dans la chambre.</div>
                                                        <div><i class="bi bi-patch-check-fill text-success me-2"></i>Expérience client de qualité supérieure avec un service personnalisé et des installations haut de gamme.</div>
                                                        <div><i class="bi bi-patch-check-fill text-success me-2"></i>Accès facile et discrèt.</div>
                                                        <div><i class="bi bi-patch-check-fill text-success me-2"></i>Confort optimal assuré par une literie de qualité, une climatisation efficace et une insonorisation adéquate.</div>
                                                    
                                                    </el-collapse-item>
                                                    </el-collapse>
                                            </el-row>
                                        </div>
                                    </div>
                                </vs-col>
                            </vs-col>

                            <vs-col class="mt-4 mb-2" v-tooltip="'col - 3'" vs-type="flex" vs-align="center" vs-w="12 ">
                                <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                                    <div class="result-item-detail-m" style="padding: 0px 6px">
                                        <div style="display: block"  class="me-2 ms-2">
                                            <h6>Commentaires des visiteurs:</h6>
                                            <el-row>
                                                <div class="card-body pt-0 p-0">
                                                    <!-- Review item START -->
                                                    <div class="d-md-flex my-4" v-for="commentaire in datas_Avis" :key="commentaire.id_avis">
                                                        <!-- Avatar -->
                                                        <div class="d-flex">
                                                            <div class="avatars avatar-lg me-1 flex-shrink-0">
                                                                <img class="avatar-img rounded-circle" src="@/assets/images/avatar/09.jpg" alt="avatar">
                                                            </div>
                                                            <div class="d-flex justify-content-between mt-1 mt-md-0">
                                                                    <div>
                                                                        <h6 class="me-2 mb-0">{{commentaire.client}}</h6>
                                                                        <!-- Info -->
                                                                        <ul class="nav nav-divider small mb-2">
                                                                            <li class="nav-item">commenté le {{formattedDate(commentaire.dte)}}</li>
                                                                            <li class="nav-item">
                                                                                <el-rate
                                                                                    style="width: 120px; float: right"
                                                                                    v-model="commentaire.etoile" disabled>
                                                                                </el-rate>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                            </div>
                                                        </div>
                                                        <!-- Text -->
                                                        <div>
                                                            <p style="font-size:13px">{{commentaire.message}} </p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="d-flex justify-content-between align-content-center">
                                                        <p class="fw-bold" style="font-size:14px; color: #348ddb">Afficher plus de commentaires</p>
                                                        <p class="text-decoration-underline text-align-right" type="text" style="font-size:13px; color: #348ddb" @click="popupActivo4 = true">Donner votre avis</p>
                                                    </div>
                                                   
                                                    <vs-prompt color="success" title="Donner votre avis" accept-text="Soumettre" cancel-text=""
                                                    @accept="avisAjout()" @close="close" :is-valid="validName" :active.sync="popupActivo4">
                                                        <div class="con-exemple-prompt">
                                                            <p style="font-size:14px">Veuillez renseigner ces champs pour donner votre avis</p>
                                                            <el-row>
                                                                <label>Nombre d'étoile</label>
                                                                <el-rate
                                                                style="margin-bottom: 15px"
                                                                v-model="avisDatas.etoile"
                                                                :texts="['Pas Bon', 'acceptable', 'Bon', 'Assez Bon', 'Très Bon']"
                                                                show-text>
                                                                </el-rate>
                                                                
                                                                <vs-input class="selectExample" style="width: 100%;margin-bottom: 10px" label="Nom & prenom" placeholder="Utilisateur" v-model="avisDatas.client"/>
                                                                <vs-textarea label="Commentaire" v-model="avisDatas.message" style="touch-action: none; position: block" />
                                                            </el-row>
                                                        </div>
                                                    </vs-prompt>
                                                </div>
                                            </el-row>
                                        </div>
                                    </div>
                                </vs-col>
                            </vs-col>
                            <vs-divider />
                            <vs-col class="mt-2" v-tooltip="'col - 3'" vs-type="flex" vs-align="center" vs-w="12 ">
                                <vs-col v-tooltip="'col - 3'" vs-align="center" vs-w="12">
                                    <div class="result-item-detail-m" style="padding: 0px 6px">
                                        <div style="display: block" class="">
                                            <h6 style="color: dark;" class="mb-4">Établissements similaires</h6>
                                            <el-row>
                                                <div class="d-flex gap-2 flex-wrap">
                                                    <vs-row>
                                                        <vs-col :key="index" vs-w="6" style="padding: 5px" v-for="(similaire, index) in datas2">
                                                            <div class=" p-1 pb-0 card-similar h-100 similar-item" @click="GoToDetails(similaire)">
                                                                <img :src="similaire.image1" class="rounded-2 mb-2" alt="" style="height: 120px">
                                                                <div class="similar-body px-1 pb-0">
                                                                    <h6 class="mb-0" style="font-size: 12px">{{ similaire.libelle }}</h6>
                                                                    <span class="result-location-detail" style="font-size: 10px">
                                                                        <i class="fa-solid fa-location-dot me-1" style="color:orange"></i> 
                                                                        {{ similaire.ville_item }} {{ similaire.commune_item }} {{ similaire.quartier_item }}
                                                                    </span>
                                                                    <div class="container-similar mb-1">
                                                                        <div class="mobile-group-similar">
                                                                        <span class="mobile-widget-similar me-2">
                                                                            <i class="fa-solid fa-wifi" style="font-size: 16px !important;"></i>
                                                                            <span>Wifi gratuit</span>
                                                                        </span>
                                                                        <span class="mobile-widget-similar me-2">
                                                                            <i class="fa-solid fa-snowflake" style="font-size: 16px !important;"></i>
                                                                            <span>Climatisation</span>
                                                                        </span>
                                                                        <span class="mobile-widget-similar me-1">
                                                                            <i class="fa-solid fa-swimming-pool" style="font-size: 16px !important;"></i>
                                                                            <span>Piscine privée</span>
                                                                        </span>
                                                                        <span class="mobile-widget-similar me-1">
                                                                            <i class="fa-solid fa-utensils" style="font-size: 16px !important;"></i>
                                                                            <span>Ustensile</span>
                                                                        </span>
                                                                        <span class="mobile-widget-similar me-1">
                                                                            <i class="fa-solid fa-tv" style="font-size: 16px !important;"></i>
                                                                            <span>Télévision</span>
                                                                        </span>
                                                                    
                                                                        <span class="mobile-widget-similar me-1">
                                                                            <i class="fa-solid fa-film" style="font-size: 16px !important;"></i>
                                                                            <span>Netflix</span>
                                                                        </span>
                                                                        <span class="mobile-widget-similar me-1">
                                                                            <i class="fa-solid fa-bath" style="font-size: 16px !important;"></i>
                                                                            <span>Baignoire</span>
                                                                        </span>
                                                                        <span class="mobile-widget-similar me-1">
                                                                            <i class="fa-solid fa-universal-access" style="font-size: 16px !important;"></i>
                                                                            <span>Accès facile</span>
                                                                        </span>
                                                                        <span class="mobile-widget-similar">
                                                                            <i class="fa-solid fa-square-parking" style="font-size: 16px !important;"></i>
                                                                            <span>Parking</span>
                                                                        </span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="d-flex align-items-center mb-2">
                                                                        <h5 class="text-success mb-0 me-1" style="font-size: 13px !important">
                                                                            XOF {{ similaire.tarif_jour | formatThousands }}
                                                                        </h5>
                                                                        <span class="mb-0 me-2 fw-bold" style="font-size: 13px">/jour</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </vs-col>
                                                      </vs-row>
                                                   
                                                   
                                                </div>
                                                <!-- Card item END -->
                                            </el-row>
                                        </div>
                                    </div>
                                </vs-col>
                            </vs-col>

                        </vs-row>
                        <vs-divider />
                      
                    </div>
                </div>
                <vs-prompt color="warning" style="margin-left:" @close="dezoomer" cancel-text="Fermer"
                    button-accept="false" :cancel="dezoomer" :is-valid="validName" :active.sync="activePrompt2">
                    <div class="con-exemple-prompt" style="height: 80vh; margin: -10px">
                        <div id="zoom">
                            <swiper style="margin-left: -10px" :autoplay="numberOk" page-transition="scale">
                                <swiper-item v-if="datas.image1.length > 5">
                                    <center>
                                        <cld-image :publicId="datas.image1">
                                            <cld-transformation height="600" width="335" crop="pad"
                                                background="white" />
                                            <cld-transformation overlay="logoico_d6xi0s" />
                                            <cld-transformation width="55" crop="scale" />
                                            <cld-transformation flags="layer_apply" gravity="south_east" x="20"
                                                y="190" />
                                        </cld-image>
                                    </center>
                                </swiper-item>
                                <swiper-item v-if="datas.image2.length > 5">
                                    <center>
                                        <cld-image :publicId="datas.image2">
                                            <cld-transformation height="600" width="335" crop="pad"
                                                background="white" />
                                            <cld-transformation overlay="logoico_d6xi0s" />
                                            <cld-transformation width="55" crop="scale" />
                                            <cld-transformation flags="layer_apply" gravity="south_east" x="20"
                                                y="190" />
                                        </cld-image>
                                    </center>
                                </swiper-item>
                                <swiper-item v-if="datas.image3.length > 5">
                                    <center>
                                        <cld-image :publicId="datas.image3">
                                            <cld-transformation height="600" width="335" crop="pad"
                                                background="white" />
                                            <cld-transformation overlay="logoico_d6xi0s" />
                                            <cld-transformation width="55" crop="scale" />
                                            <cld-transformation flags="layer_apply" gravity="south_east" x="20"
                                                y="190" />
                                        </cld-image>
                                    </center>
                                </swiper-item>
                                <swiper-item v-if="datas.image4.length > 5">
                                    <center>
                                        <cld-image :publicId="datas.image4">
                                            <cld-transformation height="600" width="335" crop="pad"
                                                background="white" />
                                            <cld-transformation overlay="logoico_d6xi0s" />
                                            <cld-transformation width="55" crop="scale" />
                                            <cld-transformation flags="layer_apply" gravity="south_east" x="20"
                                                y="190" />
                                        </cld-image>
                                    </center>
                                </swiper-item>
                            </swiper>

                        </div>
                    </div>
                </vs-prompt>

                <vs-prompt color="success" title="Réservation" accept-text="Réserver" cancel-text="Annuler"
                    @accept="reservationValide()" @close="close" :is-valid="validName" :active.sync="reservation">
                    <div class="con-exemple-prompt">
                        <b>Choisissez la période</b>.
                        <el-row>
                            <el-col :span="12">
                                <div class="grid-content bg-purple" style="display: grid">
                                    <span>DU</span>
                                    <input @change="reservationform()" :min="new Date().toISOString().split('T')[0]"
                                        style="padding: 5px; border-radius: 5px; width: 95%" type="date"
                                        placeholder="Name" v-model="dateDu" />
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="grid-content bg-purple" style="display: grid">
                                    <span>AU</span>
                                    <input :min="dateDu" @change="reservationform()"
                                        style="padding: 5px; border-radius: 5px; width: 95%" type="date"
                                        placeholder="Name" v-model="dateAu" />
                                </div>
                            </el-col>
                        </el-row>
                        <br>
                        <el-row style="padding-bottom: 15px">
                            <el-col :span="12">
                                <div class="grid-content bg-purple">
                                    <el-timeline :reverse="reverse" style="margin-left: -27px;">

                                        <el-timeline-item v-if="dateDu == dateAu" timestamp="Réservation journéee">
                                            Nombres de jour(s)
                                        </el-timeline-item>
                                        <el-timeline-item v-else :timestamp="jourreserve + ' jours'">
                                            Nombres de jour(s)
                                        </el-timeline-item>

                                        <div v-if="dateDu == dateAu">
                                            <el-timeline-item :timestamp="formatPrice(datas.tarif_journee)">
                                                Total Prix
                                            </el-timeline-item>
                                        </div>

                                        <div v-else>
                                            <el-timeline-item v-if="datas.nb_jour_reduction.length >= 1"
                                                :timestamp="formatPrice(datas.tarif_jour_reduction * jourreserve)">
                                                Total Prix
                                            </el-timeline-item>
                                            <el-timeline-item v-else
                                                :timestamp="formatPrice(datas.tarif_jour * jourreserve)">
                                                Total Prix
                                            </el-timeline-item>
                                        </div>


                                    </el-timeline>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="grid-content bg-purple" style="display: grid;" v-if="dureereserve != 0">
                                    <vs-alert :active="!validName" color="danger" v-if="dureereserve > 2"
                                        style="height: 120px">
                                        <span style="padding-bottom: 15px">
                                            Votre séjour commencera dans <b style="color: black">{{ dureereserve }}
                                                jours.</b> Veuillez prévoir une avance pour valider votre réservation.
                                        </span>
                                    </vs-alert>
                                    <vs-alert :active="!validName" color="success" icon="new_releases" v-else>
                                        Votre séjour commencera dans <span style="color: black; font-weight: bold">{{
            dureereserve }}</span> jour.
                                    </vs-alert>
                                </div>
                            </el-col>
                        </el-row>



                    </div>
                </vs-prompt>

                <vs-prompt color="success" title="Paiement réservation" accept-text="Réserver" cancel-text="Annuler"
                    @cancel="valMultipe.value1 = '', valMultipe.value2 = ''" @accept="reservationValide()" @close="close"
                    :is-valid="validName" :active.sync="payement">
                    <div class="con-exemple-prompt">
                        <b>Choisissez la période</b>
                        <vs-alert :active="!validName" color="danger" icon="new_releases">
                            Vous devez payer une avance de <span style="color: black; font-weight: bold">{{
            formatPrice(avance * jourreserve) }}</span> pour valider la réservation
                        </vs-alert>
                        <el-row>
                            <el-col :span="12">
                                <div class="grid-content bg-purple" style="display: grid">
                                    <span>Nom</span>
                                    <vs-input class="inputx" placeholder="Nom" v-model="nomr" style="width: 99%" />
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="grid-content bg-purple" style="display: grid">
                                    <span>Prenom</span>
                                    <vs-input class="inputx" placeholder="Prenom" v-model="prenomr"
                                        style="width: 99%" />
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="grid-content bg-purple" style="display: grid">
                                    <span>Contact</span>
                                    <vs-input class="inputx" placeholder="Contact" v-model="nomr" style="width: 99%" />
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="grid-content bg-purple" style="display: grid">
                                    <span>Email</span>
                                    <vs-input class="inputx" placeholder="Email" v-model="prenomr" style="width: 99%" />
                                </div>
                            </el-col>
                        </el-row>
                        <br>
                        <el-row>
                            <el-col :span="12">
                                <div class="grid-content bg-purple">
                                    <el-timeline :reverse="reverse">

                                        <el-timeline-item v-if="dateDu == dateAu" timestamp="Réservation journéee">
                                            Nombres de jour(s)
                                        </el-timeline-item>
                                        <el-timeline-item v-else :timestamp="jourreserve + ' jours'">
                                            Nombres de jour(s)
                                        </el-timeline-item>

                                        <div v-if="dateDu == dateAu">
                                            <el-timeline-item :timestamp="formatPrice(datas.tarif_journee)">
                                                Total Prix
                                            </el-timeline-item>
                                        </div>

                                        <div v-else>
                                            <el-timeline-item v-if="datas.nb_jour_reduction.length >= 1"
                                                :timestamp="formatPrice(datas.tarif_jour_reduction * jourreserve)">
                                                Total Prix
                                            </el-timeline-item>
                                            <el-timeline-item v-else
                                                :timestamp="formatPrice(datas.tarif_jour * jourreserve)">
                                                Total Prix
                                            </el-timeline-item>
                                        </div>


                                    </el-timeline>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="grid-content bg-purple" style="display: grid">

                                </div>
                            </el-col>
                        </el-row>



                    </div>
                </vs-prompt>

            </div>
        </div>
        <div v-else>
            <section class="py-0 pt-sm-5">
                <div class="container position-relative">
                    <!-- Title and button START -->
                    <div class="row mb-3">
                        <div class="col-12">
                            <!-- Meta -->
                            <div class="d-lg-flex justify-content-lg-between mb-1">
                                <!-- Title -->
                                <div class="mb-2 mb-lg-0">
                                    <h1 class="fs-2">{{ datas.libelle }} </h1>
                                    <!-- Location -->
                                    <p class="fw-bold mb-0"><i class="bi bi-geo-alt me-2"></i>{{ datas.ville_item }}, {{
            datas.commune_item }} {{ datas.quartier_item }}, {{ datas.zone_item }}
                                        <a href="#" class="ms-2 text-decoration-underline" data-bs-toggle="modal"
                                            data-bs-target="#mapmodal">
                                            <i class="bi bi-eye-fill me-1"></i>Afficher sur la carte
                                        </a>
                                    </p>
                                </div>

                                <!-- Buttons -->
                                <ul class="list-inline text-end">
                                    <!-- Heart icon -->
                                    <li class="list-inline-item">
                                        <a href="#" class="btn btn-sm btn-light px-2"><i
                                                class="fa-solid fa-fw fa-heart"></i></a>
                                    </li>
                                    <!-- Share icon -->
                                    <li class="list-inline-item dropdown">
                                        <!-- Share button -->
                                        <a href="#" class="btn btn-sm btn-light px-2" role="button" id="dropdownShare"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa-solid fa-fw fa-share-alt"></i>
                                        </a>
                                        <!-- dropdown button -->
                                        <ul class="dropdown-menu dropdown-menu-end min-w-auto shadow rounded"
                                            aria-labelledby="dropdownShare">
                                            <li><a class="dropdown-item" href="#"><i
                                                        class="fab fa-twitter-square me-2"></i>Twitter</a></li>
                                            <li><a class="dropdown-item" href="#"><i
                                                        class="fab fa-facebook-square me-2"></i>Facebook</a></li>
                                            <li><a class="dropdown-item" href="#"><i
                                                        class="fab fa-linkedin me-2"></i>LinkedIn</a></li>
                                            <li><a class="dropdown-item" href="#"><i
                                                        class="fa-solid fa-copy me-2"></i>Copy link</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- Title and button END -->

                    <!-- Alert box START -->
                    <!-- 
                <div class="alert alert-danger alert-dismissible d-flex justify-content-between align-items-center fade show mb-4 rounded-3 pe-2" role="alert">
                    <div class="d-flex">
                        <span class="alert-heading h5 mb-0 me-2"><i class="bi bi-exclamation-octagon-fill"></i></span>
                        <span><strong class="alert-heading me-2">Covid Policy:</strong>You may require to present an RT-PCR negative test report at the hotel</span>
                    </div>
                        <button type="button" class="btn btn-link text-primary-hover pb-0 text-end" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x-lg"></i></button>
                </div>
                -->
                    <!-- Alert box END -->
                </div>
            </section>
            <!-- =======================
        Main Title END -->
            <section class="card-grid pt-0">
                <div class="container">
                    <div class="row g-2">
                        <!-- Image -->
                        <div class="col-md-6">
                            <a data-glightbox data-gallery="gallery" :href="datas.image1">
                                <div class="card card-grid-lg card-element-hover card-overlay-hover overflow-hidden"
                                    :style="'background-image:url(' + datas.image1 + '); background-position: center left; background-size: cover;'">
                                    <!-- Card hover element -->
                                    <div class="hover-element position-absolute w-100 h-100">
                                        <i
                                            class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="col-md-6">
                            <!-- Card item START -->
                            <div class="row g-2">
                                <!-- Image -->
                                <div class="col-12">
                                    <a data-glightbox data-gallery="gallery" :href="datas.image2">
                                        <div class="card card-grid-sm card-element-hover card-overlay-hover overflow-hidden"
                                            :style="'background-image:url(' + datas.image2 + '); background-position: center left; background-size: cover;'">
                                            <!-- Card hover element -->
                                            <div class="hover-element position-absolute w-100 h-100">
                                                <i
                                                    class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <!-- Image -->
                                <div class="col-md-6">
                                    <a data-glightbox data-gallery="gallery" :href="datas.image3">
                                        <div class="card card-grid-sm card-element-hover card-overlay-hover overflow-hidden"
                                            :style="'background-image:url(' + datas.image3 + '); background-position: center left; background-size: cover;'">
                                            <!-- Card hover element -->
                                            <div class="hover-element position-absolute w-100 h-100">
                                                <i
                                                    class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <!-- Images -->
                                <div class="col-md-6">
                                    <a data-glightbox data-gallery="gallery" :href="datas.image4">
                                        <div class="card card-grid-sm card-element-hover card-overlay-hover overflow-hidden"
                                            :style="'background-image:url(' + datas.image4 + '); background-position: center left; background-size: cover;'">
                                            <!-- Card hover element -->
                                            <div class="hover-element position-absolute w-100 h-100">
                                                <i
                                                    class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <!-- Card item END -->
                        </div>
                    </div>
                </div>
            </section>
            <!-- =======================
        Image gallery END -->
            <section class="pt-0">
                <div class="container" data-sticky-container>

                    <div class="row g-4 g-xl-5">
                        <!-- Content START -->
                        <div class="col-xl-7 order-1">
                            <div class="vstack gap-5">

                                <!-- About hotel START -->
                                <div class="card bg-transparent">
                                    <!-- Card header -->
                                    <div class="card-header border-bottom bg-transparent px-0 pt-0">
                                        <h3 class="mb-0">À propos de cette résidence</h3>
                                    </div>

                                    <!-- Card body START -->
                                    <div class="card-body pt-4 p-0">
                                        <h5 class="fw-bold mb-4">Les commodité essentielles</h5>

                                        <!-- Highlights Icons -->
                                        <div class="hstack gap-3 mb-3">
                                            <div class="icon-lg bg-light h5 rounded-2" data-bs-toggle="tooltip"
                                                data-bs-placement="top" title="Free wifi">
                                                <i class="fa-solid fa-wifi"></i>
                                            </div>
                                            <div class="icon-lg bg-light h5 rounded-2" data-bs-toggle="tooltip"
                                                data-bs-placement="top" title="Swimming Pool">
                                                <i class="fa-solid fa-swimming-pool"></i>
                                            </div>
                                            <div class="icon-lg bg-light h5 rounded-2" data-bs-toggle="tooltip"
                                                data-bs-placement="top" title="Central AC">
                                                <i class="fa-solid fa-snowflake"></i>
                                            </div>
                                            <div class="icon-lg bg-light h5 rounded-2" data-bs-toggle="tooltip"
                                                data-bs-placement="top" title="Free Service">
                                                <i class="fa-solid fa-concierge-bell"></i>
                                            </div>
                                        </div>

                                        <h5 class="fw-bold mb-2 text-bold">Description</h5>
                                        <p class="mb-3">Demesne far-hearted suppose venture excited see had has.
                                            Dependent on so extremely delivered by. Yet no jokes worse her why. <b>Bed
                                                one supposing breakfast day fulfilled off depending questions.</b></p>
                                        <p class="mb-0">Delivered dejection necessary objection do Mr prevailed. Mr
                                            feeling does chiefly cordial in do. Water timed folly right aware if oh
                                            truth. Large above be to means. Dashwood does provide stronger is.</p>

                                        <div class="collapse" id="collapseContent">
                                            <p class="my-3">We focus a great deal on the understanding of behavioral
                                                psychology and influence triggers which are crucial for becoming a well
                                                rounded Digital Marketer. We understand that theory is important to
                                                build a solid foundation, we understand that theory alone isn't going to
                                                get the job done so that's why this rickets is packed with practical
                                                hands-on examples that you can follow step by step.</p>
                                            <p class="mb-0">Behavioral psychology and influence triggers which are
                                                crucial for becoming a well rounded Digital Marketer. We understand that
                                                theory is important to build a solid foundation, we understand that
                                                theory alone isn't going to get the job done so that's why this tickets
                                                is packed with practical hands-on examples that you can follow step by
                                                step.</p>
                                        </div>
                                        <a class="p-0 mb-4 mt-2 btn-more d-flex align-items-center collapsed"
                                            data-bs-toggle="collapse" href="#collapseContent" role="button"
                                            aria-expanded="false" aria-controls="collapseContent">
                                            Voir <span class="see-more ms-1">plus</span><span
                                                class="see-less ms-1">moins</span><i
                                                class="fa-solid fa-angle-down ms-2"></i>
                                        </a>

                                        <!-- List -->
                                        <h5 class="fw-bold mb-2">Avantages</h5>
                                        <ul class="list-group list-group-borderless mb-0">
                                            <li class="list-group-item h6 fw-light d-flex mb-0"><i
                                                    class="bi bi-patch-check-fill text-success me-2"></i>Trouvez un
                                                parking pour votre vehicule</li>
                                            <li class="list-group-item h6 fw-light d-flex mb-0"><i
                                                    class="bi bi-patch-check-fill text-success me-2"></i>La résidence
                                                dispose d'un restaurant pour vos dejeuner et diner</li>
                                            <li class="list-group-item h6 fw-light d-flex mb-0"><i
                                                    class="bi bi-patch-check-fill text-success me-2"></i>Résidence
                                                située au bord de la plage, facile d'accès.</li>
                                            <li class="list-group-item h6 fw-light d-flex mb-0"><i
                                                    class="bi bi-patch-check-fill text-success me-2"></i>Espace
                                                disponible pour l'organisation de vos réunion ou activités</li>
                                        </ul>
                                    </div>
                                    <!-- Card body END -->
                                </div>
                                <!-- About hotel START -->

                                <!--  Équipements et services START -->
                                <div class="card bg-transparent">
                                    <!-- Card header -->
                                    <div class="card-header border-bottom bg-transparent px-0 pt-0">
                                        <h3 class="card-title mb-0">
                                            Équipements et services
                                        </h3>
                                    </div>

                                    <!-- Card body START -->
                                    <div class="card-body pt-4 p-0">
                                        <div class="row g-4">
                                            <!-- Équipements en chambre -->
                                            <div class="col-sm-6">
                                                <h6><i class="fa-solid fa-bed me-2"></i>Équipements en chambre</h6>
                                                <!-- List -->

                                                <ul class="list-group list-group-borderless mt-2 mb-0">
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.eqpm_climatisation == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Climatisation
                                                    </li>
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.eqpm_piscine_pv == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Piscine
                                                        privée
                                                    </li>
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.eqpm_seche_linge == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Sèche-linge
                                                    </li>
                                                    <li class="list-group-item pb-0" v-if="datas.eqpm_armoire == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Armoire
                                                        ou penderie
                                                    </li>
                                                    <li class="list-group-item pb-0" v-if="datas.eqpm_armoire == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Moquette
                                                    </li>
                                                    <li class="list-group-item pb-0" v-if="datas.eqpm_dressing == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Dressing
                                                    </li>
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.eqpm_ventilateur == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Ventilateur
                                                    </li>
                                                    <li class="list-group-item pb-0" v-if="datas.eqpm_chauffage == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Chauffage
                                                    </li>
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.eqpm_fer_repasse == '1'">
                                                        <i class="fa-solid fa-check-circle text-success me-2"></i>Fer à
                                                        repasser
                                                    </li>
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.eqpm_mt_repasse == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Matériel
                                                        de repassage
                                                    </li>
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.eqpm_moustiquaire == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Moustiquaire
                                                    </li>
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.eqpm_canape_chambre == '1'">
                                                        <i class="fa-solid fa-check-circle text-success me-2"></i>Canapé
                                                        Chambre
                                                    </li>
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.eqpm_lave_linge == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Lave-linge
                                                    </li>
                                                    <li class="list-group-item pb-0" v-if="datas.eqpm_bureau == '1'">
                                                        <i class="fa-solid fa-check-circle text-success me-2"></i>Bureau
                                                    </li>
                                                    <li class="list-group-item pb-0" v-if="datas.eqpm_bar == '1'">
                                                        <i class="fa-solid fa-check-circle text-success me-2"></i>Bar
                                                    </li>
                                                </ul>

                                            </div>

                                            <!-- Salle de bains -->
                                            <div class="col-sm-6">
                                                <h6><i class="fa-solid fa-bath me-2"></i>Salle de bains</h6>
                                                <!-- List -->
                                                <ul class="list-group list-group-borderless mt-2 mb-0">
                                                    <li class="list-group-item pb-0" v-if="datas.eqpm_peignoire == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Peignoir
                                                    </li>
                                                    <li class="list-group-item pb-0" v-if="datas.eqpm_baignoire == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Baignoire
                                                    </li>
                                                    <li class="list-group-item pb-0" v-if="datas.eqpm_jacuzzi == '1'">
                                                        <i class="fa-solid fa-check-circle text-success me-2"></i>Bain à
                                                        remous/jacuzzi
                                                    </li>
                                                    <li class="list-group-item pb-0" v-if="datas.eqpm_jacuzzi == '1'">
                                                        <i class="fa-solid fa-check-circle text-success me-2"></i>Sauna
                                                    </li>
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.eqpm_seche_cheveu == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Sèche-cheveux
                                                    </li>
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.eqpm_papier_toilette == '1'">
                                                        <i class="fa-solid fa-check-circle text-success me-2"></i>Papier
                                                        toilette
                                                    </li>
                                                </ul>
                                            </div>

                                            <!-- High-tech -->
                                            <div class="col-sm-6">
                                                <h6><i class="fa-solid fa-tv me-2"></i>High-tech</h6>
                                                <!-- List -->
                                                <ul class="list-group list-group-borderless mt-2 mb-0">
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.eqpm_ordinateur == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Ordinateur
                                                    </li>
                                                    <li class="list-group-item pb-0" v-if="datas.eqpm_internet == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Connexion
                                                        Wi-Fi gratuite
                                                    </li>
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.eqpm_lecteur_dvd == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Lecteur
                                                        DVD
                                                    </li>
                                                    <li class="list-group-item pb-0" v-if="datas.eqpm_fax == '1'">
                                                        <i class="fa-solid fa-check-circle text-success me-2"></i>Fax
                                                    </li>
                                                    <li class="list-group-item pb-0" v-if="datas.eqpm_telephone == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Téléphone
                                                    </li>
                                                    <li class="list-group-item pb-0" v-if="datas.eqpm_tv == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Télévision
                                                        à écran plat
                                                    </li>
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.eqpm_jeux_puzzles == '1'">
                                                        <i class="fa-solid fa-check-circle text-success me-2"></i>Jeux
                                                        vidéo
                                                    </li>
                                                </ul>
                                            </div>

                                            <!-- Extérieur/Vues -->
                                            <div class="col-sm-6">
                                                <h6><i class="fa-solid fa-spa me-2"></i>Extérieur/Vues</h6>
                                                <!-- List -->
                                                <ul class="list-group list-group-borderless mt-2 mb-0">
                                                    <li class="list-group-item pb-0" v-if="datas.eqpm_balcon == '1'">
                                                        <i class="fa-solid fa-check-circle text-success me-2"></i>Balcon
                                                    </li>
                                                    <li class="list-group-item pb-0" v-if="datas.eqpm_terasse == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Terrasse
                                                    </li>
                                                    <li class="list-group-item pb-0" v-if="datas.eqpm_terasse == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Piscine
                                                    </li>
                                                    <li class="list-group-item pb-0" v-if="datas.eqpm_vue_ville == '1'">
                                                        <i class="fa-solid fa-check-circle text-success me-2"></i>Vue
                                                        sur la ville
                                                    </li>
                                                    <li class="list-group-item pb-0" v-if="datas.eqpm_vue_lac == '1'">
                                                        <i class="fa-solid fa-check-circle text-success me-2"></i>Vue
                                                        sur le lac
                                                    </li>
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.eqpm_vue_piscine == '1'">
                                                        <i class="fa-solid fa-check-circle text-success me-2"></i>Vue
                                                        sur la piscine
                                                    </li>
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.eqpm_vue_riviere == '1'">
                                                        <i class="fa-solid fa-check-circle text-success me-2"></i>Vue
                                                        sur la rivière
                                                    </li>
                                                    <li class="list-group-item pb-0" v-if="datas.eqpm_vue_mer == '1'">
                                                        <i class="fa-solid fa-check-circle text-success me-2"></i>Vue
                                                        sur la mer
                                                    </li>
                                                    <li class="list-group-item pb-0" v-if="datas.eqpm_jardin == '1'">
                                                        <i class="fa-solid fa-check-circle text-success me-2"></i>Jardin
                                                    </li>
                                                </ul>
                                            </div>

                                            <!--Équipements de sécurité-->
                                            <div class="col-sm-6">
                                                <h6><i class="fa-solid fa-lock me-2"></i>Équipements de sécurité</h6>
                                                <!-- List -->
                                                <ul class="list-group list-group-borderless mt-2 mb-0">
                                                    <li class="list-group-item pb-0" v-if="datas.agent_securite == '1'">
                                                        <i class="fa-solid fa-check-circle text-success me-2"></i>Agent
                                                        de sécurité
                                                    </li>
                                                    <li class="list-group-item pb-0" v-if="datas.barbele == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Barbelé
                                                    </li>
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.video_surveillance == '1'">
                                                        <i class="fa-solid fa-check-circle text-success me-2"></i>Vidéo
                                                        surveillance
                                                    </li>
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.capteur_presence == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Capteur
                                                        de présence
                                                    </li>
                                                    <li class="list-group-item pb-0" v-if="datas.antivol == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Antivol
                                                    </li>
                                                </ul>
                                            </div>

                                            <!-- Restauration -->
                                            <div class="col-sm-6">
                                                <h6><i class="fa-solid fa-utensils me-2"></i>Restauration</h6>
                                                <!-- List -->
                                                <ul class="list-group list-group-borderless mt-2 mb-4 mb-sm-5">
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.eqpm_table_mange == '1'">
                                                        <i class="fa-solid fa-check-circle text-success me-2"></i>Table
                                                        à manger
                                                    </li>
                                                    <li class="list-group-item pb-0" v-if="datas.eqpm_barbecue == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Barbecue
                                                    </li>
                                                    <li class="list-group-item pb-0" v-if="datas.eqpm_four == '1'">
                                                        <i class="fa-solid fa-check-circle text-success me-2"></i>Four
                                                    </li>
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.eqpm_lave_vaiselle == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Lave-vaisselle
                                                    </li>
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.eqpm_bouilloir_electrique == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Bouilloire
                                                        électrique
                                                    </li>
                                                    <li class="list-group-item pb-0" v-if="datas.eqpm_ustensile == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Ustensiles
                                                        de cuisine
                                                    </li>
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.eqpm_micro_ondes == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Micro-ondes
                                                    </li>
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.eqpm_refrigerateur == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Réfrigérateur
                                                    </li>
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.eqpm_machine_cafe == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Machine
                                                        à café
                                                    </li>
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.eqpm_kitchenette == '1'">
                                                        <i
                                                            class="fa-solid fa-check-circle text-success me-2"></i>Kitchenette
                                                    </li>
                                                </ul>
                                            </div>

                                            <!--Langue du personnel-->
                                            <div class="col-sm-6">
                                                <h6><i class="fa-solid fa-language me-2"></i>Langue du personnel</h6>
                                                <!-- List -->
                                                <ul class="list-group list-group-borderless mt-2 mb-0">
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.eqpm_langue1.lentgh >= 2">
                                                        <i class="fa-solid fa-check-circle text-success me-2"></i>
                                                        {{ datas.eqpm_langue1 }}
                                                    </li>
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.eqpm_langue2.lentgh >= 2">
                                                        <i class="fa-solid fa-check-circle text-success me-2"></i>
                                                        {{ datas.eqpm_langue1 }}
                                                    </li>
                                                    <li class="list-group-item pb-0"
                                                        v-if="datas.eqpm_langue3.lentgh >= 2">
                                                        <i class="fa-solid fa-check-circle text-success me-2"></i>
                                                        {{ datas.eqpm_langue1 }}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Card body END -->
                                </div>
                                <!-- Amenities END -->

                                <!-- Room START -->
                                <div class="card bg-transparent" id="room-options">
                                    <!-- Card header -->
                                    <div class="card-header border-bottom bg-transparent px-0 pt-0">
                                        <div class="d-sm-flex justify-content-sm-between align-items-center">
                                            <h3 class="mb-2 mb-sm-0">Offre(s) similaire(s)</h3>
                                        </div>
                                    </div>

                                    <!-- Card body START -->
                                    <div class="card-body pt-4 p-0">
                                        <div class="vstack gap-4">

                                            <!-- Room item START -->
                                            <div class="card shadow p-3">
                                                <div class="row g-4">
                                                    <!-- Card img -->
                                                    <div class="col-md-5 position-relative">

                                                        <!-- Overlay item -->
                                                        <div
                                                            class="position-absolute top-0 start-0 z-index-1 mt-4 ms-2 mb-2 ms-4">
                                                            <a href="" class="badge text-bg-danger"><i
                                                                    class="fa-solid fa-toggle-off"></i> Indisponible</a>
                                                        </div>

                                                        <!-- Slider START -->
                                                        <div
                                                            class="tiny-slider arrow-round arrow-xs arrow-dark overflow-hidden rounded-2">
                                                            <el-carousel :interval="5000" height="140px" arrow="always">
                                                                <el-carousel-item height="140">
                                                                    <img src="@/assets/images/category/hotel/4by3/04.jpg"
                                                                        alt="Card image">
                                                                </el-carousel-item>
                                                                <el-carousel-item>
                                                                    <img src="@/assets/images/category/hotel/4by3/02.jpg"
                                                                        alt="Card image">
                                                                </el-carousel-item>
                                                                <el-carousel-item>
                                                                    <img src="@/assets/images/category/hotel/4by3/03.jpg"
                                                                        alt="Card image">
                                                                </el-carousel-item>
                                                                <el-carousel-item>
                                                                    <img src="@/assets/images/category/hotel/4by3/01.jpg"
                                                                        alt="Card image">
                                                                </el-carousel-item>
                                                            </el-carousel>
                                                        </div>
                                                        <!-- Slider END -->
                                                    </div>

                                                    <!-- Card body -->
                                                    <div class="col-md-7">
                                                        <div class="card-body d-flex flex-column h-100 p-0">

                                                            <!-- Title -->
                                                            <h5 class="card-title"><a href="#">Chambre de Luxe avec
                                                                    Balcon</a></h5>

                                                            <!-- Amenities -->
                                                            <ul class="nav nav-divider mb-2">
                                                                <li class="nav-item">Climatisation</li>
                                                                <li class="nav-item">Wifi gratuit</li>
                                                                <li class="nav-item">Piscine</li>
                                                            </ul>

                                                            <p class="text-success mb-0"><i
                                                                    class="bi bi-patch-check-fill me-2"></i> Reduction
                                                                possible</p>

                                                            <!-- Price and Button -->
                                                            <div
                                                                class="d-sm-flex justify-content-sm-between align-items-center mt-auto">
                                                                <!-- Button -->
                                                                <div class="d-flex align-items-center">
                                                                    <h5 class="fw-bold mb-0 me-1">XOF 25 000</h5>
                                                                    <span class="mb-0 me-2">/jour</span>
                                                                </div>
                                                                <!-- Price -->
                                                                <div class="mt-4 ms-2 mb-2 mt-sm-0">
                                                                    <a href="#" class="btn btn-sm btn-primary mb-0">Voir
                                                                        les détails <i
                                                                            class="bi bi-arrow-right-circle-fill"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Room item END -->

                                            <!-- Room item START -->
                                            <div class="card shadow p-3">
                                                <div class="row g-4">
                                                    <!-- Card img -->
                                                    <div class="col-md-5 position-relative">

                                                        <!-- Overlay item -->
                                                        <div
                                                            class="position-absolute top-0 start-0 z-index-1 mt-4 ms-2 mb-2 ms-4">
                                                            <a href="" class="badge text-bg-success"><i
                                                                    class="fa-solid fa-toggle-on"></i> Disponible</a>
                                                        </div>

                                                        <!-- Slider START -->
                                                        <div
                                                            class="tiny-slider arrow-round arrow-xs arrow-dark overflow-hidden rounded-2">
                                                            <div class="tiny-slider-inner2" data-autoplay="true"
                                                                data-arrow="true" data-dots="false" data-items="1">
                                                                <!-- Image item -->
                                                                <el-carousel :interval="5000" height="140px"
                                                                    arrow="always">
                                                                    <el-carousel-item height="140">
                                                                        <img src="@/assets/images/category/hotel/4by3/04.jpg"
                                                                            alt="Card image">
                                                                    </el-carousel-item>
                                                                    <el-carousel-item>
                                                                        <img src="@/assets/images/category/hotel/4by3/02.jpg"
                                                                            alt="Card image">
                                                                    </el-carousel-item>
                                                                    <el-carousel-item>
                                                                        <img src="@/assets/images/category/hotel/4by3/03.jpg"
                                                                            alt="Card image">
                                                                    </el-carousel-item>
                                                                    <el-carousel-item>
                                                                        <img src="@/assets/images/category/hotel/4by3/01.jpg"
                                                                            alt="Card image">
                                                                    </el-carousel-item>
                                                                </el-carousel>
                                                            </div>
                                                        </div>
                                                        <!-- Slider END -->
                                                    </div>

                                                    <!-- Card body -->
                                                    <div class="col-md-7">
                                                        <div class="card-body d-flex flex-column p-0 h-100">

                                                            <!-- Title -->
                                                            <h5 class="card-title"><a href="#">Chambre Deluxe avec
                                                                    Petit-Déjeuner et Vue sur Piscine</a></h5>

                                                            <!-- Amenities -->
                                                            <ul class="nav nav-divider mb-2">
                                                                <li class="nav-item">Climatisation</li>
                                                                <li class="nav-item">Wifi</li>
                                                                <li class="nav-item">Piscine</li>
                                                            </ul>

                                                            <p class="text-danger mb-3"><i
                                                                    class="bi bi-patch-check-fill me-2"></i> Evenements
                                                                non accepté</p>

                                                            <!-- Price and Button -->
                                                            <div
                                                                class="d-sm-flex justify-content-sm-between align-items-center mt-auto">
                                                                <!-- Button -->
                                                                <div class="d-flex align-items-center">
                                                                    <h5 class="fw-bold mb-0 me-1">XOF 25 000</h5>
                                                                    <span class="mb-0 me-2">/jour</span>
                                                                </div>
                                                                <!-- Price -->
                                                                <div class="mt-4 ms-2 mb-2 mt-sm-0">
                                                                    <a href="#" class="btn btn-sm btn-primary mb-0">Voir
                                                                        les détails <i
                                                                            class="bi bi-arrow-right-circle-fill"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Room item END -->
                                        </div>
                                    </div>
                                    <!-- Card body END -->
                                </div>
                                <!-- Room END -->

                                <!-- Avis client START -->
                                <div class="card bg-transparent">
                                    <!-- Card header -->
                                    <div class="card-header border-bottom bg-transparent px-0 pt-0">
                                        <h3 class="card-title mb-0">Avis client</h3>
                                    </div>

                                    <!-- Card body START -->
                                    <div class="card-body pt-4 p-0">
                                        <!-- Progress bar and rating START -->
                                        <div class="card bg-light p-4 mb-4">
                                            <div class="row g-4 align-items-center">
                                                <!-- Rating info -->
                                                <div class="col-md-4">
                                                    <div class="text-center">
                                                        <!-- Info -->
                                                        <h2 class="mb-0">4.5</h2>
                                                        <p class="mb-2">Basé sur 120 avis</p>
                                                        <!-- Star -->
                                                        <ul class="list-inline mb-0">
                                                            <li class="list-inline-item me-0"><i
                                                                    class="fa-solid fa-star text-warning"></i></li>
                                                            <li class="list-inline-item me-0"><i
                                                                    class="fa-solid fa-star text-warning"></i></li>
                                                            <li class="list-inline-item me-0"><i
                                                                    class="fa-solid fa-star text-warning"></i></li>
                                                            <li class="list-inline-item me-0"><i
                                                                    class="fa-solid fa-star text-warning"></i></li>
                                                            <li class="list-inline-item me-0"><i
                                                                    class="fa-solid fa-star-half-alt text-warning"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <!-- Progress-bar START -->
                                                <div class="col-md-8">
                                                    <div class="card-body p-0">
                                                        <div class="row gx-3 g-2 align-items-center">
                                                            <!-- Progress bar and Rating -->
                                                            <div class="col-9 col-sm-10">
                                                                <!-- Progress item -->
                                                                <div
                                                                    class="progress progress-sm bg-warning bg-opacity-15">
                                                                    <div class="progress-bar bg-warning"
                                                                        role="progressbar" style="width: 95%"
                                                                        aria-valuenow="95" aria-valuemin="0"
                                                                        aria-valuemax="100">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!-- Percentage -->
                                                            <div class="col-3 col-sm-2 text-end">
                                                                <span class="h6 fw-light mb-0">85%</span>
                                                            </div>

                                                            <!-- Progress bar and Rating -->
                                                            <div class="col-9 col-sm-10">
                                                                <!-- Progress item -->
                                                                <div
                                                                    class="progress progress-sm bg-warning bg-opacity-15">
                                                                    <div class="progress-bar bg-warning"
                                                                        role="progressbar" style="width: 75%"
                                                                        aria-valuenow="75" aria-valuemin="0"
                                                                        aria-valuemax="100">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!-- Percentage -->
                                                            <div class="col-3 col-sm-2 text-end">
                                                                <span class="h6 fw-light mb-0">75%</span>
                                                            </div>

                                                            <!-- Progress bar and Rating -->
                                                            <div class="col-9 col-sm-10">
                                                                <!-- Progress item -->
                                                                <div
                                                                    class="progress progress-sm bg-warning bg-opacity-15">
                                                                    <div class="progress-bar bg-warning"
                                                                        role="progressbar" style="width: 60%"
                                                                        aria-valuenow="60" aria-valuemin="0"
                                                                        aria-valuemax="100">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!-- Percentage -->
                                                            <div class="col-3 col-sm-2 text-end">
                                                                <span class="h6 fw-light mb-0">60%</span>
                                                            </div>

                                                            <!-- Progress bar and Rating -->
                                                            <div class="col-9 col-sm-10">
                                                                <!-- Progress item -->
                                                                <div
                                                                    class="progress progress-sm bg-warning bg-opacity-15">
                                                                    <div class="progress-bar bg-warning"
                                                                        role="progressbar" style="width: 35%"
                                                                        aria-valuenow="35" aria-valuemin="0"
                                                                        aria-valuemax="100">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!-- Percentage -->
                                                            <div class="col-3 col-sm-2 text-end">
                                                                <span class="h6 fw-light mb-0">35%</span>
                                                            </div>

                                                            <!-- Progress bar and Rating -->
                                                            <div class="col-9 col-sm-10">
                                                                <!-- Progress item -->
                                                                <div
                                                                    class="progress progress-sm bg-warning bg-opacity-15">
                                                                    <div class="progress-bar bg-warning"
                                                                        role="progressbar" style="width: 20%"
                                                                        aria-valuenow="20" aria-valuemin="0"
                                                                        aria-valuemax="100">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!-- Percentage -->
                                                            <div class="col-3 col-sm-2 text-end">
                                                                <span class="h6 fw-light mb-0">15%</span>
                                                            </div>
                                                        </div> <!-- Row END -->
                                                    </div>
                                                </div>
                                                <!-- Progress-bar END -->

                                            </div>
                                        </div>
                                        <!-- Progress bar and rating END -->

                                        <!-- Leave review START -->
                                        <form class="mb-5">
                                            <!-- Rating -->
                                            <div class="form-control-bg-light mb-3">
                                                <select class="form-select js-choice">
                                                    <option selected="">★★★★★ (5/5)</option>
                                                    <option>★★★★☆ (4/5)</option>
                                                    <option>★★★☆☆ (3/5)</option>
                                                    <option>★★☆☆☆ (2/5)</option>
                                                    <option>★☆☆☆☆ (1/5)</option>
                                                </select>
                                            </div>
                                            <!-- Message -->
                                            <div class="form-control-bg-light mb-3">
                                                <textarea class="form-control" id="exampleFormControlTextarea1"
                                                    placeholder="Votre avis" rows="3"></textarea>
                                            </div>
                                            <!-- Button -->
                                            <button type="submit" class="btn btn-lg btn-primary mb-0">donner mon avis <i
                                                    class="bi fa-fw bi-arrow-right ms-2"></i></button>
                                        </form>
                                        <!-- Leave review END -->

                                        <!-- Review item START -->
                                        <div class="d-md-flex my-4">
                                            <!-- Avatar -->
                                            <div class="avatar avatar-lg me-2 flex-shrink-0">
                                                <img class="avatar-img rounded-circle"
                                                    src="@/assets/images/avatar/09.jpg" alt="avatar">
                                            </div>
                                            <!-- Text -->
                                            <div>
                                                <div class="d-flex justify-content-between mt-1 mt-md-0">
                                                    <div>
                                                        <h6 class="me-2 mb-0">Jacqueline Miller</h6>
                                                        <!-- Info -->
                                                        <ul class="nav nav-divider small mb-2">
                                                            <li class="nav-item">Stayed 13 Nov 2022</li>
                                                            <li class="nav-item">4 Reviews written</li>
                                                        </ul>
                                                    </div>
                                                    <!-- Review star -->
                                                    <div class="icon-md rounded text-bg-warning fs-6">4.5</div>
                                                </div>

                                                <p class="mb-2">Handsome met debating sir dwelling age material. As
                                                    style lived he worse dried. Offered related so visitors we private
                                                    removed. Moderate do subjects to distance. </p>

                                                <!-- Images -->
                                                <div class="row g-4">
                                                    <div class="col-4 col-sm-3 col-lg-2">
                                                        <img src="@/assets/images/category/hotel/4by3/07.jpg"
                                                            class="rounded" alt="">
                                                    </div>
                                                    <div class="col-4 col-sm-3 col-lg-2">
                                                        <img src="@/assets/images/category/hotel/4by3/08.jpg"
                                                            class="rounded" alt="">
                                                    </div>
                                                    <div class="col-4 col-sm-3 col-lg-2">
                                                        <img src="@/assets/images/category/hotel/4by3/05.jpg"
                                                            class="rounded" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Child review START -->
                                        <div class="my-4 ps-2 ps-md-3">
                                            <div class="d-md-flex p-3 bg-light rounded-3">
                                                <img class="avatar avatar-sm rounded-circle me-2"
                                                    src="@/assets/images/avatar/02.jpg" alt="avatar">
                                                <div class="mt-2 mt-md-0">
                                                    <h6 class="mb-1">Manager</h6>
                                                    <p class="mb-0">But discretion frequently sir she instruments
                                                        unaffected admiration everything. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Child review END -->

                                        <!-- Divider -->
                                        <hr>
                                        <!-- Review item END -->

                                        <!-- Review item START -->
                                        <div class="d-md-flex my-4">
                                            <!-- Avatar -->
                                            <div class="avatar avatar-lg me-2 flex-shrink-0">
                                                <img class="avatar-img rounded-circle"
                                                    src="@/assets/images/avatar/08.jpg" alt="avatar">
                                            </div>
                                            <!-- Text -->
                                            <div>
                                                <div class="d-flex justify-content-between mt-1 mt-md-0">
                                                    <div>
                                                        <h6 class="me-2 mb-0">Dennis Barrett</h6>
                                                        <!-- Info -->
                                                        <ul class="nav nav-divider small mb-2">
                                                            <li class="nav-item">Stayed 02 Nov 2022</li>
                                                            <li class="nav-item">2 Reviews written</li>
                                                        </ul>
                                                    </div>
                                                    <!-- Review star -->
                                                    <div class="icon-md rounded text-bg-warning fs-6">4.0</div>
                                                </div>

                                                <p class="mb-0">Delivered dejection necessary objection do Mr prevailed.
                                                    Mr feeling does chiefly cordial in do. Water timed folly right aware
                                                    if oh truth. Large above be to means. Dashwood does provide stronger
                                                    is.</p>
                                            </div>
                                        </div>

                                        <!-- Divider -->
                                        <hr>
                                        <!-- Review item END -->

                                        <!-- Button -->
                                        <div class="text-center">
                                            <a href="#" class="btn btn-primary-soft mb-0">Charger plus <i
                                                    class="bi bi-plus-circle-fill"></i></a>
                                        </div>
                                    </div>
                                    <!-- Card body END -->
                                </div>
                                <!-- Customer Review END -->

                                <!-- Hotel Policies START -->
                                <div class="card bg-transparent">
                                    <!-- Card header -->
                                    <div class="card-header border-bottom bg-transparent px-0 pt-0">
                                        <h3 class="mb-0">Conditions de l'hébergement</h3>
                                    </div>

                                    <!-- Card body START -->
                                    <div class="card-body pt-4 p-0">
                                        <!-- List -->
                                        <ul class="list-group list-group-borderless mb-2">
                                            <li class="list-group-item d-flex">
                                                <i class="bi bi-check-circle-fill me-2"></i>This is a family farmhouse,
                                                hence we request you to not indulge.
                                            </li>
                                            <li class="list-group-item d-flex">
                                                <i class="bi bi-check-circle-fill me-2"></i>Drinking and smoking within
                                                controlled limits are permitted at the farmhouse but please do not
                                                create a mess or ruckus at the house.
                                            </li>
                                            <li class="list-group-item d-flex">
                                                <i class="bi bi-check-circle-fill me-2"></i>Drugs and intoxicating
                                                illegal products are banned and not to be brought to the house or
                                                consumed.
                                            </li>
                                            <li class="list-group-item d-flex">
                                                <i class="bi bi-x-circle-fill me-2"></i>For any update, the customer
                                                shall pay applicable cancellation/modification charges.
                                            </li>
                                        </ul>
                                        <hr>
                                        <div class="card-header border-bottom bg-transparent px-0 pt-0">
                                            <h3 class="mb-0">Services à proximité</h3>
                                        </div>
                                        <!-- Important note -->
                                        <div class="bg-danger bg-opacity-10 rounded-2 p-3 mb-3">
                                            <ul class="list-group list-group-borderless mb-2">
                                                <li class="list-group-item h6 fw-light d-flex mb-0">
                                                    <i class="bi bi-arrow-right me-2"></i>Check-in: 1:00 pm - 9:00 pm
                                                </li>
                                                <li class="list-group-item h6 fw-light d-flex mb-0">
                                                    <i class="bi bi-arrow-right me-2"></i>Check out: 11:00 am
                                                </li>
                                                <li class="list-group-item h6 fw-light d-flex mb-0">
                                                    <i class="bi bi-arrow-right me-2"></i>Self-check-in with building
                                                    staff
                                                </li>
                                                <li class="list-group-item h6 fw-light d-flex mb-0">
                                                    <i class="bi bi-arrow-right me-2"></i>No pets
                                                </li>
                                                <li class="list-group-item h6 fw-light d-flex mb-0">
                                                    <i class="bi bi-arrow-right me-2"></i>No parties or events
                                                </li>
                                                <li class="list-group-item h6 fw-light d-flex mb-0">
                                                    <i class="bi bi-arrow-right me-2"></i>Smoking is allowed
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <!-- Card body END -->
                                </div>
                                <!-- Hotel Policies START -->
                            </div>
                        </div>
                        <vs-popup class="holamundo" title="Lorem ipsum dolor sit amet" :active.sync="reservation2">
                            <div>
                                <b>Choisissez la période</b>.
                                <div class="block">
                                    <span class="demonstration">Défaut</span>
                                    <el-date-picker v-model="value1" type="daterange" range-separator="à"
                                        start-placeholder="Date de début" end-placeholder="Date de fin">
                                    </el-date-picker>
                                </div>
                                <el-row>
                                    <el-col :span="12">
                                        <div class="grid-content bg-purple" style="display: grid">
                                            <span>DU</span>
                                            <input @change="reservationform()"
                                                :min="new Date().toISOString().split('T')[0]"
                                                style="padding: 5px; border-radius: 5px; width: 95%" type="date"
                                                placeholder="Name" v-model="dateDu" />
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="grid-content bg-purple" style="display: grid">
                                            <span>AU</span>
                                            <input :min="dateDu" @change="reservationform()"
                                                style="padding: 5px; border-radius: 5px; width: 95%" type="date"
                                                placeholder="Name" v-model="dateAu" />
                                        </div>
                                    </el-col>
                                </el-row>
                                <br>
                                <el-row style="padding-bottom: 15px">
                                    <el-col :span="12">
                                        <div class="grid-content bg-purple">
                                            <el-timeline :reverse="reverse" style="margin-left: -27px;">

                                                <el-timeline-item v-if="dateDu == dateAu"
                                                    timestamp="Réservation journéee">
                                                    Nombres de jour(s)
                                                </el-timeline-item>
                                                <el-timeline-item v-else :timestamp="jourreserve + ' jours'">
                                                    Nombres de jour(s)
                                                </el-timeline-item>

                                                <div v-if="dateDu == dateAu">
                                                    <el-timeline-item :timestamp="formatPrice(datas.tarif_journee)">
                                                        Total Prix
                                                    </el-timeline-item>
                                                </div>

                                                <div v-else>
                                                    <el-timeline-item v-if="datas.nb_jour_reduction.length >= 1"
                                                        :timestamp="formatPrice(datas.tarif_jour_reduction * jourreserve)">
                                                        Total Prix
                                                    </el-timeline-item>
                                                    <el-timeline-item v-else
                                                        :timestamp="formatPrice(datas.tarif_jour * jourreserve)">
                                                        Total Prix
                                                    </el-timeline-item>
                                                </div>


                                            </el-timeline>
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="grid-content bg-purple" style="display: grid;"
                                            v-if="dureereserve != 0">
                                            <vs-alert :active="!validName" color="danger" v-if="dureereserve > 2"
                                                style="height: 120px">
                                                <span style="padding-bottom: 15px">
                                                    Votre séjour commencera dans <b style="color: black">{{ dureereserve
                                                        }} jours.</b> Veuillez prévoir une avance pour valider votre
                                                    réservation.
                                                </span>
                                            </vs-alert>
                                            <vs-alert :active="!validName" color="success" icon="new_releases" v-else>
                                                Votre séjour commencera dans <span
                                                    style="color: black; font-weight: bold">{{ dureereserve }}</span>
                                                jour.
                                            </vs-alert>
                                        </div>
                                    </el-col>
                                </el-row>



                            </div>
                        </vs-popup>
                        <!--
                    <vs-prompt
                        color="success"
                        title="Réservation"
                        accept-text="Réserver"
                        cancel-text="Annuler"
                        @accept="reservationValide()"
                        @close="close"
                        :is-valid="validName"
                        :active.sync="reservation2">
                        <div class="con-exemple-prompt">
                        <b>Choisissez la période</b>.
                        <el-row>
                            <el-col :span="12">
                                <div class="grid-content bg-purple" style="display: grid">
                                    <span>DU</span>
                                    <input  @change="reservationform()" :min="new Date().toISOString().split('T')[0]" style="padding: 5px; border-radius: 5px; width: 95%" type="date" placeholder="Name" v-model="dateDu"/>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="grid-content bg-purple" style="display: grid">
                                    <span>AU</span>
                                    <input :min="dateDu" @change="reservationform()" style="padding: 5px; border-radius: 5px; width: 95%" type="date" placeholder="Name" v-model="dateAu"/>
                                </div>
                            </el-col>
                        </el-row>
                            <br>
                            <el-row style="padding-bottom: 15px">
                            <el-col :span="12">
                                <div class="grid-content bg-purple">
                                    <el-timeline :reverse="reverse" style="margin-left: -27px;">
                    
                                    <el-timeline-item v-if="dateDu == dateAu"
                                        timestamp="Réservation journéee">
                                        Nombres de jour(s)
                                    </el-timeline-item>
                                    <el-timeline-item v-else
                                        :timestamp="jourreserve + ' jours'">
                                        Nombres de jour(s)
                                    </el-timeline-item>
                    
                                    <div v-if="dateDu == dateAu">
                                    <el-timeline-item
                                        :timestamp="formatPrice(datas.tarif_journee)">
                                        Total Prix
                                    </el-timeline-item>
                                    </div>
                    
                                    <div v-else>
                                    <el-timeline-item v-if="datas.nb_jour_reduction.length >= 1"
                                        :timestamp="formatPrice(datas.tarif_jour_reduction * jourreserve)">
                                        Total Prix
                                    </el-timeline-item>
                                    <el-timeline-item v-else
                                        :timestamp="formatPrice(datas.tarif_jour * jourreserve)">
                                        Total Prix
                                    </el-timeline-item>
                                    </div>
                                    
                    
                                    </el-timeline>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="grid-content bg-purple" style="display: grid;" v-if="dureereserve != 0">
                                    <vs-alert :active="!validName" color="danger" v-if="dureereserve > 2" style="height: 120px">
                                        <span style="padding-bottom: 15px">
                                            Votre séjour commencera dans <b style="color: black">{{ dureereserve }} jours.</b> Veuillez prévoir une avance pour valider votre réservation.
                                        </span>
                                    </vs-alert>
                                    <vs-alert :active="!validName" color="success" icon="new_releases" v-else>
                                        Votre séjour commencera dans <span style="color: black; font-weight: bold">{{ dureereserve }}</span> jour.
                                    </vs-alert>
                                </div>
                            </el-col>
                        </el-row>
                        
                        
                            
                        </div>
                        </vs-prompt>
                     Content END -->

                        <!-- Right side content START -->
                        <aside class="col-xl-5 order-xl-2">
                            <div data-sticky data-margin-top="100" data-sticky-for="1199">
                                <!-- Book now START -->
                                <div class="card card-body border">

                                    <!-- Title -->
                                    <div class="d-sm-flex justify-content-sm-between align-items-center mb-3">
                                        <div>
                                            <span>Prix à partir de</span>
                                            <h4 class="card-title mb-0">XOF {{ datas.tarif_jour | formatThousands }}
                                            </h4>
                                        </div>
                                        <div v-if="datas.nb_jour_reduction.length >= 2">
                                            <h6 class="fw-bold mb-0">Réduction possible</h6>
                                            <small>à partir de {{ datas.nb_jour_reduction }} et plus</small>
                                        </div>
                                    </div>

                                    <!-- Rating -->
                                    <p class="h6 fw-light mb-4" style="color:#ff5500"
                                        v-if="datas.eqpm_evenement == '0'"><i
                                            class="bi bi-arrow-right me-2"></i>Evenement(s) non accepté</p>
                                    <p class="h6 fw-light mb-4" style="color:#67c23a" v-else><i
                                            class="bi bi-arrow-right me-2"></i>Evenement(s) accepté</p>

                                    <p class="h6 fw-light mb-4" v-if="datas.eqpm_evenement == '1'"><span><i
                                                class="bi bi-arrow-right me-2"
                                                v-if="datas.eqpm_evenement == '0'"></i>Evenement(s) accepté(s): <span
                                                v-if="datas.event_anniversaire == '1'">Anniversaire, </span><span
                                                v-if="datas.event_mariage == '1'">Mariage, </span><span
                                                v-if="datas.event_festivite == '1'">Festivité, </span><span
                                                v-if="datas.event_tournage == '1'">Tournage</span></span></p>

                                    <!-- Button -->
                                    <div class="d-grid">
                                        <a href="#reservation" class="btn btn-dark mb-0" @click="zoneReserve = true">Je
                                            réserve</a>
                                    </div>
                                </div>

                                <div id="reservation" class="card card-body border"
                                    style="margin-top: 15px;background: #ebebeb" v-if="zoneReserve">

                                    <!-- Title -->
                                    <div>
                                        <h1 style="color: #348ddb">Réservation</h1>
                                        <b>Choisir une date</b>
                                        <el-row>
                                            <el-col :span="12">
                                                <div class="grid-content bg-purple" style="display: grid">
                                                    <span>DU</span>
                                                    <input @change="reservationform()"
                                                        :min="new Date().toISOString().split('T')[0]"
                                                        style="padding: 5px; border-radius: 5px; width: 95%" type="date"
                                                        placeholder="Name" v-model="dateDu" />
                                                </div>
                                            </el-col>
                                            <el-col :span="12">
                                                <div class="grid-content bg-purple" style="display: grid">
                                                    <span>AU</span>
                                                    <input :min="dateDu" @change="reservationform()"
                                                        style="padding: 5px; border-radius: 5px; width: 95%" type="date"
                                                        placeholder="Name" v-model="dateAu" />
                                                </div>
                                            </el-col>
                                        </el-row>
                                        <br>
                                        <el-row style="padding-bottom: 15px">
                                            <el-col :span="12">
                                                <div class="grid-content bg-purple">
                                                    <el-timeline :reverse="reverse" style="margin-left: -27px;">

                                                        <el-timeline-item v-if="dateDu == dateAu"
                                                            timestamp="Réservation journéee">
                                                            Nombres de jour(s)
                                                        </el-timeline-item>
                                                        <el-timeline-item v-else :timestamp="jourreserve + ' jours'">
                                                            Nombres de jour(s)
                                                        </el-timeline-item>

                                                        <div v-if="dateDu == dateAu">
                                                            <el-timeline-item
                                                                :timestamp="formatPrice(datas.tarif_journee)">
                                                                Total Prix
                                                            </el-timeline-item>
                                                        </div>

                                                        <div v-else>
                                                            <el-timeline-item v-if="datas.nb_jour_reduction.length >= 1"
                                                                :timestamp="formatPrice(datas.tarif_jour_reduction * jourreserve)">
                                                                Total Prix
                                                            </el-timeline-item>
                                                            <el-timeline-item v-else
                                                                :timestamp="formatPrice(datas.tarif_jour * jourreserve)">
                                                                Total Prix
                                                            </el-timeline-item>
                                                        </div>


                                                    </el-timeline>
                                                </div>
                                            </el-col>
                                            <el-col :span="12">
                                                <div class="grid-content bg-purple" style="display: grid;"
                                                    v-if="dureereserve != 0">
                                                    <vs-alert :active="!validName" color="danger"
                                                        v-if="dureereserve > 2" style="height: 120px">
                                                        <span style="padding-bottom: 15px">
                                                            Votre séjour commencera dans <b style="color: black">{{
                                                                dureereserve }} jours.</b> Veuillez prévoir une avance
                                                            pour valider votre réservation.
                                                        </span>
                                                    </vs-alert>
                                                    <vs-alert :active="!validName" color="success" icon="new_releases"
                                                        v-else>
                                                        Votre séjour commencera dans <span
                                                            style="color: black; font-weight: bold">{{ dureereserve
                                                            }}</span> jour.
                                                    </vs-alert>
                                                </div>
                                            </el-col>
                                        </el-row>
                                        <div class="d-grid">
                                            <a href="#room-options" @click="reservationValide()"
                                                class="btn btn-primary mb-0">Confirmer réservation</a>
                                        </div>


                                    </div>
                                </div>
                                <!-- Book now END -->

                                <!-- Best deal START -->
                                <div class="mt-4 d-none d-xl-block">
                                    <h4>La meilleure offre du jour</h4>

                                    <div class="card shadow rounded-3 overflow-hidden">
                                        <div class="row g-0 align-items-center">
                                            <!-- Image -->
                                            <div class="col-sm-6 col-md-12 col-lg-6">
                                                <img src="@/assets/images/offer/04.jpg" class="card-img rounded-0"
                                                    alt="">
                                            </div>

                                            <!-- Title and content -->
                                            <div class="col-sm-6 col-md-12 col-lg-6">
                                                <div class="card-body p-3">
                                                    <h6 class="card-title"><a href="offer-detail.html"
                                                            class="stretched-link">Travel Plan</a></h6>
                                                    <p class="mb-0">Get up to $10,000 for lifetime limits</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Best deal END -->
                            </div>
                        </aside>
                        <!-- Right side content END -->
                    </div> <!-- Row END -->
                </div>
            </section>
        </div>


    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import { Swiper, SwiperItem } from 'vue-h5-swiper';
import { isMobile } from 'mobile-device-detect';
import 'tiny-slider/dist/tiny-slider.css';
import { tns } from 'tiny-slider/src/tiny-slider';
import { encryptData } from '@/cryptoUtils';

import { LMap, LTileLayer, LMarker, LIcon } from "vue2-leaflet";


export default {
    name: 'ResultPage',
    components: {
        Carousel,
        Slide,
        Swiper,
        SwiperItem,

        LMap,
        LTileLayer,
        LMarker,
        LIcon
    },
    computed: {
        
        users() {
            return this.$store.state.users;
        },
        biens() {
            return this.$store.state.biensdetails;
        },
        limitedDescription() {
      // Limitez la description à 100 caractères (vous pouvez ajuster cette valeur selon vos besoins)
      if (this.datas.description.length <= 200) {
        return this.datas.description;
      } else {
        const lastSpaceIndex = this.datas.description.lastIndexOf(' ', 200);
        return this.datas.description.slice(0, lastSpaceIndex) + '...';
      }
        },
        dynamicAnchor() {
            return [this.iconSize / 2, this.iconSize * 1.15];
        },
    
    },
    data() {
        return {

            ///////modal avis client
            datee: '2024-04-25 18:49:04',
            favorisOK: false,
            popupActivo4: false,
            optionsAvis: [
                { text: '★★★★★ (5/5)', value: 5 },
                { text: '★★★★☆ (4/5)', value: 4 },
                { text: '★★★☆☆ (3/5)', value: 3 },
                { text: '★★☆☆☆ (2/5)', value: 2 },
                { text: '★☆☆☆☆ (1/5)', value: 1 },
            ],
            avis5: 0,
            textarea: '',
            avisDatas: {
                resid: 0,
                client: '',
                message: '',
                etoile: 0,
                user: 0,
            },
            datas_Avis: null,

            //Map
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            zoom: 15,
            center: [5.3510144, -3.997696],
            markerLatLng: [5.3510144, -3.997696],
            iconSize: 64,

            ///////////////////////////////
            reverse: true,
            activities: [{
            content: 'Boutiques',
            timestamp: '10m',
            size: 'small',
            type: 'warning',
            icon: 'el-icon-place',
            }, {
            content: 'Centre commercial Carefour',
            timestamp: '1km',
            size: 'small',
            type: 'warning',
            icon: 'el-icon-place',
            }, {
            content: 'Restaurants et cafés',
            timestamp: '50m',
            size: 'small',
            type: 'warning',
            icon: 'el-icon-place',
            },
            {
            content: 'Spas',
            timestamp: '100m',
            size: 'small',
            type: 'warning',
            icon: 'el-icon-place',   
            }
        ],

            ///////////////////////////////
            showFullDescription: false,
            datas: [],
            datas2: [],
            isMobile: isMobile,


            param: null,
            currentPlacelat: null,
            currentPlacelng: null,
            places: [],
            videoCall: false,
            avance: 5000,
            dateaujourdhui: null,
            jourreserve: null,
            dureereserve: 0,
            moisreserve: null,
            dateDu: null,
            dateAu: '',
            dateDeux: null,
            value1: null,
            reservation: false,
            reservation2: false,
            zoneReserve: false,
            payement: false,
            val: '',
            valMultipe: {
                value1: '',
                value2: ''
            },
            activePrompt2: false,
            options1: [
                { text: 'IT', value: 0 },
                { text: 'Blade Runner', value: 2 },
                { text: 'Thor Ragnarok', value: 3 },
            ],
            outerVisible: false,
            innerVisible: false,
            linkroute: '',
            numberOk: true,
            select1: 2,
            select2: 0,
            select3: 0,
            select4: 0,
            errorReserve: true,
            vue: 0,
            zooma: true,
            messagewhatsapp: 'Voici une résidence que tu peux visiter',
            residences: null,
            options2: [
                { text: 'Toutes les zones', value: 0 },
                { text: 'Abobo', value: 1 },
                { text: 'Adjamé', value: 2 },
                { text: 'Angré', value: 3 },
                { text: 'Anyama', value: 4 },
                { text: 'Attécoubé', value: 5 },
                { text: 'Bingerville', value: 6 },
                { text: 'Cocody', value: 7 },
                { text: 'II Plateau', value: 8 },
                { text: 'Koumassi', value: 9 },
                { text: 'Marcory', value: 10 },
                { text: 'Plateau', value: 11 },
                { text: 'Port-Bouet', value: 12 },
                { text: 'Riviera', value: 13 },
                { text: 'Treichville', value: 14 },
                { text: 'Yopougon', value: 15 },
            ],
            options3: [
                { text: 'Tous types', value: 0 },
                { text: 'Studio', value: 1 },
                { text: '2 pièces', value: 2 },
                { text: '3 pièces', value: 3 },
                { text: '4 pièces', value: 4 },
                { text: 'Autres', value: 5 },
            ],
            options4: [
                { text: 'Tous les prix', value: 0 },
                { text: '0 à 15.000', value: 1 },
                { text: '15.000 à 25.000', value: 2 },
                { text: '25.000 à 50.000', value: 3 },
                { text: 'Plus', value: 4 },
            ],
            ip: 0,
        }
    },
    methods: {
        /////Modal avis client
    

      //////////////////////////
        formattedDate(date) {
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            return new Intl.DateTimeFormat('fr-FR', options).format(new Date(date));
        },
      
        formatPrice(value) {
            var formatter = new Intl.NumberFormat('xof', {
                style: 'currency',
                currency: 'XOF',
                minimumFractionDigits: 0
            });
            return formatter.format(value);
        },

        reservationform() {
            const dateDebut = new Date(this.dateDu);
            let dateFin = '';
            const dateAujourdhui = new Date();
            if (this.dateAu == '') {
                dateFin = new Date(this.dateDu);
            } else {
                dateFin = new Date(this.dateAu);
            }

            const differenceEnMillisecondes = dateFin.getTime() - dateDebut.getTime();
            this.jourreserve = differenceEnMillisecondes / (1000 * 3600 * 24);

            const differenceEnMillisecondesNew = dateDebut.getTime() - dateAujourdhui.getTime();
            this.dureereserve = Math.ceil(differenceEnMillisecondesNew / (1000 * 3600 * 24));

        },

        GoToDetails(bien) {
			this.$vs.loading();
			// Déclencher la mutation pour stocker les détails du bien
			this.$store.commit('BiensDetail', bien);
			this.$vs.loading.close();
			// Naviguer vers la page de détails en passant l'identifiant du bien en paramètre
			this.$router.push({ name: 'DetailResult', params: { param: bien.id_item } });
            this.scrollToTop();
            window.location.reload();

		},

        reservationform2() {
            this.dateDu = this.dateDeux[0];
            this.dateAu = this.dateDeux[1];
            const dateDebut = new Date(this.dateDu);
            let dateFin = '';
            const dateAujourdhui = new Date();
            if (this.dateAu == '') {
                dateFin = new Date(this.dateDu);
            } else {
                dateFin = new Date(this.dateAu);
            }

            const differenceEnMillisecondes = dateFin.getTime() - dateDebut.getTime();
            this.jourreserve = differenceEnMillisecondes / (1000 * 3600 * 24);

            const differenceEnMillisecondesNew = dateDebut.getTime() - dateAujourdhui.getTime();
            this.dureereserve = Math.ceil(differenceEnMillisecondesNew / (1000 * 3600 * 24));

        },

        reservationValide() {
            let formData = new FormData();
            formData.append('du', this.dateDu);
            formData.append('au', this.dateAu);
            formData.append('jour', this.jourreserve);
            formData.append('avance', this.avance);
            formData.append('residence', this.param);
            this.$vs.loading({
                type: 'point',
            })
            this.$axios.post('/reservation_biens.php', formData)
                .then((response) => {
                    this.$vs.loading.close();
                    console.log(response);
                    this.$vs.notify({
                        color: 'success',
                        position: 'top-right',
                        title: 'Enregistré',
                        text: 'Ajouté avec succès'
                    });
                    const ref = response.data.ref;
                    this.$router.push({ path: '/reservation', query: { ref: ref } });
                })
                .catch(function (error) {
                    this.$vs.loading.close();
                    console.log(error);
                });
            this.$vs.loading.close();
        },

        avisAjout() {
            this.avisDatas.user = this.users.id;
            this.avisDatas.resid = this.param;

            const requestData = this.avisDatas;

            this.$axios.post('/avis_residence.php', requestData)
                .then(response => {
                // Traitement de la réponse du serveur
                console.log(response);
                this.getAvis();
                this.$vs.loading.close()
                })
                .catch(error => {
                // Gestion des erreurs
                console.error(error);
                this.$vs.loading.close()
                });
        },
        
        favorisAjout() {
            if(this.users.id == null) {
                this.$vs.notify({
                        color: 'warning',
                        position: 'top-right',
                        title: 'Impossible',
                        text: 'Vous n\'êtes pas connecté'
                    });
            } else {
                const data = {
                client: this.users.id,
                resid: this.param
                };

                this.favorisOK = true;

                this.$axios.post('/favoris.php', data)
                    .then(response => {
                        this.$vs.notify({
                        color: 'success',
                        position: 'top-right',
                        title: 'Ajouté',
                        text: 'Ajouté à vos favoris'
                    });
                    // Traitement de la réponse du serveur
                    console.log(response);
                    this.$vs.loading.close()
                    })
                    .catch(error => {
                    // Gestion des erreurs
                    console.error(error);
                    this.$vs.loading.close()
                    });
            }
            
        },

        retour() {
            this.$router.back()
        },

        getResidences() {
            this.linkroute = window.location.href;
            this.$vs.loading({
                type: 'sound',
            })
            this.$axios.get('/liste_appart_id.php?id=' + this.param + '&timestamp=' + new Date().getTime())
                .then((response) => {
                    this.$vs.loading.close();
                    this.datas = response.data.data[0];
                    this.datas2 = response.data.data2;
                    this.ip = response.data.visite;
                    this.$store.commit('Resultats', this.datas);
                    this.$vs.loading.close();
                    
                }, (error) => {
                    this.$vs.loading.close();
                    console.log(error);
                });
            this.$vs.loading.close();
        },

        getAvis() {
            this.$axios.get('/avis_residence.php?resid=' + this.param + '&timestamp=' + new Date().getTime())
                .then((response) => {
                    this.$vs.loading.close();
                    this.datas_Avis = response.data.data;
                    this.$vs.loading.close();
                    
                }, (error) => {
                    this.$vs.loading.close();
                    console.log(error);
                });
        },

        getFavoris() {
            this.$axios.get('/favoris.php?resid=' + this.param + '&user=' + this.users.id)
                .then((response) => {
                    this.$vs.loading.close();
                    if(response.data.data == 1) {
                        this.favorisOK = true;
                    } else {
                        this.favorisOK = false;
                    }
                    this.$vs.loading.close();
                    
                }, (error) => {
                    this.$vs.loading.close();
                    console.log(error);
                });
        },

        scrollToTop() {
			window.scrollTo({
				top: 0,
				behavior: 'smooth' // Permet un défilement fluide
			});
		},

        test() {
            const var1 = 'valeur_de_variable';
            const val = encryptData(var1);
            console.log('Valeur chiffrée :', val);

            this.$axios.get('/albakoos_camion.php', {
                params: {
                    val: val,
                },
            })
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

    },
    filters: {
        formatThousands(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
    },
    mounted() {
        this.param = this.$route.params.param;
        this.getResidences();
        this.getFavoris();
        this.getAvis();
        const sliderContainer = this.$el.querySelector('.tiny-slider-inner');
        const sliderContainer2 = this.$el.querySelector('.tiny-slider-inner2');

        // Initialisez le slider avec vos options
        tns({
            container: sliderContainer,
            items: 1,
            autoplay: false,
            controls: true,
            nav: false,
            // Ajoutez d'autres options selon vos besoins
        });
        tns({
            container: sliderContainer2,
            items: 1,
            autoplay: false,
            controls: true,
            nav: false,
            // Ajoutez d'autres options selon vos besoins
        });

    },
}
</script>

<style scoped>
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
</style>