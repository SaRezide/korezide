<template>
    <div class="home">

        <div>
	<!-- ======================= Page Banner START -->
                <section class="pt-4 pt-md-5 pb-0">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 mx-auto text-center">
                                <h1 class="fs-2 mb-2">Ajouter une nouvelle résidence</h1>
                                <p class="mb-0">Vous êtes sur la bonne voie. Continuez ainsi !</p>
                                <el-button type="warning" plain v-if="biens.libelle.length >= 1" @click="VideChamp()">Vider tous les champs</el-button>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-10 mx-auto">
                                 <el-steps :active="active" finish-status="success">
                                    <el-step title="Général"></el-step>
                                    <el-step title="Disposition & tarification">b</el-step>
                                    <el-step title="Equipements & services">c</el-step>
                                    <el-step title="Photos">d</el-step>
                                  </el-steps>

                                  <div class="step_zone" v-if="active === 0">
                                    <h1 style="font-size: 24px; line-height: 32px; font-weight: 700;">
                                        Bienvenue {{users.nom }}&nbsp;!
                                    </h1>
                                    <p style="font-size: 16px">
                                        Commencez par nous indiquer le nom de votre établissement, son adresse et vos coordonnées.
                                    </p>
                                    <el-row>

                                        <div class="card shadow">
                                         
                
                                            <!-- Card body -->
                                            <div class="card-body">
                                                <div class="row g-3">
                                                    <legend style="font-size: 18px">
                                                        Quel est le nom de votre résidence?
                                                    </legend>
                                                    <div class="col-12">
                                                        <div class="input-group">
                                                            <el-input class="form_reside" placeholder="Nom de votre résidence" v-model="biens.libelle"></el-input>
                                                        </div>
                                                        <span style="font-size: 12px; color: red;" v-if="erreurLibelle === true">
                                                            * Champ à renseigner
                                                        </span><br>
                                                        <span style="font-size: 12px">
                                                            C'est le nom que les clients verront lorsqu'ils rechercheront une résidence.
                                                        </span>
                                                    </div>
                                                    <hr>
                                                    <!-- Owner name -->
                                                    <legend style="font-size: 18px">Informations de contact pour cette résidence</legend>
                                                    <div class="col-12">
                                                        <label class="form-label">Le nom & prénom de la personne à contacter</label>
                                                        <div class="input-group">
                                                            <input type="text" autocomplete="contact_name" autofocus
                                                                class="form-control"
                                                                name="contact_name" value=""
                                                                v-model="biens.nm_prop_item"
                                                                placeholder="Nom de famille">
                                                            <input type="text" autocomplete="first_name" autofocus
                                                                class="form-control"
                                                                v-model="biens.pren_prop_item"
                                                                name="contact_firstname" value="" placeholder="Prénom">
                                                        </div>
                                                        <span style="font-size: 12px; color: red;" v-if="erreurNom === true">
                                                            * Champ à renseigner
                                                        </span><br>
                                                    </div>
                
                                                    <!-- Contact number -->
                                                    <div class="col-md-6">
                                                        <label class="form-label">Numéro de téléphone ( Mobile )</label>
                                                        <input autocomplete="contact_phone" v-model="biens.cnt_prop_item" autofocus
                                                            class="form-control"
                                                            name="contact_phone" value="" type="tel"
                                                            placeholder="Entrer le numéro de téléphone">
                                                            <span style="font-size: 12px; color: red;" v-if="erreurContact === true">
                                                                * Champ à renseigner
                                                            </span><br>
                                                            <label class="form-label" style="margin-top: 5px">
                                                                    Le numéro de téléphone est WhatsApp?
                                                                    <el-row>
                                                                        <el-button type="success" round :disabled="isWhatsApp === true" @click="showNonWhatsAppField">Oui</el-button>
                                                                        <el-button type="danger" round :disabled="isWhatsApp === false" @click="showWhatsAppField">Non</el-button>
                                                                    </el-row>
                                                                </label>
                                                    <div id="non-whatsapp-field" v-if="isWhatsApp === false">
                                                        <!-- Champ pour un numéro non WhatsApp -->
                                                        <label class="form-label" for="non-whatsapp-number">Entrez un numéro WhatsApp:</label>
                                                        <input class="form-control" type="text" id="non-whatsapp-number" v-model="nonWhatsAppNumber">
                                                    </div>
                                                    <div id="whatsapp-field" v-if="isWhatsApp === true">
                                                        <!-- Champ pour un numéro WhatsApp -->
                                                        <label class="form-label" for="whatsapp-number">Entrez un sécond numéro non WhatsApp:</label>
                                                        <input class="form-control" type="text" id="whatsapp-number" v-model="whatsappNumber">
                                                    </div>
                                                    </div>
                                                   
                
                                                    <!-- Email -->
                                                    <div class="col-md-6">
                                                        <label class="form-label">Adresse e-mail</label>
                                                        <input v-model="biens.eml_prop_item" autocomplete="contact_email" autofocus
                                                            class="form-control "
                                                            name="contact_email" value="" type="email"
                                                            placeholder="Entrer adresse e-mail ">
                                                    </div>
                                                  
                                                    <hr>
                                                    <legend style="font-size: 18px">Où se trouve votre résidence ?</legend>
                                                    <!-- Address -->
                                                    <div class="col-md-6">
                                                        <label class="form-label">Adresse</label>
                                                        <input v-model="biens.adresse_item" autocomplete="address" autofocus
                                                            class="form-control" name="address"
                                                            placeholder="Abidjan, Cocody Riviera">
                                                            <span style="font-size: 12px; color: red;" v-if="erreurAdresse === true">
                                                                * Champ à renseigner
                                                            </span><br>
                                                    </div>
                                                    <!-- State -->
                                                    <div class="col-md-6">
                                                        <label class="form-label">Ville</label>
                                                        <select autocomplete="city" autofocus
                                                            v-model="biens.ville_item"
                                                            class="form-control" name="city">
                                                            <option value="" selected>Veuillez choisir votre ville</option>
                                                            <option value="Abidjan">Abidjan</option>
                                                            <option value="Yamoussoukro">Yamoussoukro</option>
                                                            <option value="Grand-Bassam">Grand-Bassam</option>
                                                            <option value="Sassandra">Sassandra</option>
                                                            <option value="Nassian">Nassian</option>
                                                            <option class="option-separator" disabled="disabled" value="sep"></option>
                                                            <option value="Abengourou">Abengourou</option>
                                                            <option value="Aboisso">Aboisso</option>
                                                            <option value="Adiaké">Adiaké</option>
                                                            <option value="Adzopé">Adzopé</option>
                                                            <option value="Agboville">Agboville</option>
                                                            <option value="Agnibilekrou">Agnibilekrou</option>
                                                            <option value="Akoupé">Akoupé</option>
                                                            <option value="Alépé">Alépé</option>
                                                            <option value="Arrah">Arrah</option>
                                                            <option value="Assinie">Assinie</option>
                                                            <option value="Bangolo">Bangolo</option>
                                                            <option value="Beoumi">Beoumi</option>
                                                            <option value="Bettié">Bettié</option>
                                                            <option value="Biankouma">Biankouma</option>
                                                            <option value="Bloléquin">Bloléquin</option>
                                                            <option value="Bocanda">Bocanda</option>
                                                            <option value="Bondoukou">Bondoukou</option>
                                                            <option value="Bongouanou">Bongouanou</option>
                                                            <option value="Botro">Botro</option>
                                                            <option value="Bouaflé">Bouaflé</option>
                                                            <option value="Bouaflé">Bouaké</option>
                                                            <option value="Bouna">Bouna</option>
                                                            <option value="Boundiali">Boundiali</option>
                                                            <option value="Dabakala">Dabakala</option>
                                                            <option value="Dabou">Dabou</option>
                                                            <option value="Daloa">Daloa</option>
                                                            <option value="Danané">Danané</option>
                                                            <option value="Daoukro">Daoukro</option>
                                                            <option value="Didiévi">Didiévi</option>
                                                            <option value="Dikodougou">Dikodougou</option>
                                                            <option value="Dimbokro">Dimbokro</option>
                                                            <option value="Divo">Divo</option>
                                                            <option value="Doropo">Doropo</option>
                                                            <option value="Duékoué">Duékoué</option>
                                                            <option value="Ferkessédougou">Ferkessédougou</option>
                                                            <option value="Fresco">Fresco</option>
                                                            <option value="Gagnoa">Gagnoa</option>
                                                            <option value="Grand-Lahou">Grand-Lahou</option>
                                                            <option value="Guiglo">Guiglo</option>
                                                            <option value="Guitry">Guitry</option>
                                                            <option value="Guéyo">Guéyo</option>
                                                            <option value="Issia">Issia</option>
                                                            <option value="Jacqueville">Jacqueville</option>
                                                            <option value="Kani">Kani</option>
                                                            <option value="Kaniasso">Kaniasso</option>
                                                            <option value="Katiola">Katiola</option>
                                                            <option value="Korhogo">Korhogo</option>
                                                            <option value="Koro">Koro</option>
                                                            <option value="Kouibly">Kouibly</option>
                                                            <option value="Koun-Fao">Koun-Fao</option>
                                                            <option value="Kounahiri">Kounahiri</option>
                                                            <option value="Kouto">Kouto</option>
                                                            <option value="Lakota">Lakota</option>
                                                            <option value="M'Bahiakro">M'Bahiakro</option>
                                                            <option value="M'Batto">M'Batto</option>
                                                            <option value="Madinani">Madinani</option>
                                                            <option value="Man">Man</option>
                                                            <option value="Mankono">Mankono</option>
                                                            <option value="Minignan">Minignan</option>
                                                            <option value="Niakaramandougou">Niakaramandougou</option>
                                                            <option value="Odienné">Odienné</option>
                                                            <option value="Ouangolodougou">Ouangolodougou</option>
                                                            <option value="Ouaninou">Ouaninou</option>
                                                            <option value="Oumé">Oumé</option>
                                                            <option value="Prikro">Prikro</option>
                                                            <option value="Sakassou">Sakassou</option>
                                                            <option value="Samatiguila">Samatiguila</option>
                                                            <option value="San-Pédro">San-Pédro</option>
                                                            <option value="Sandégué">Sandégué</option>
                                                            <option value="Sikensi">Sikensi</option>
                                                            <option value="Sinfra">Sinfra</option>
                                                            <option value="Sinématiali">Sinématiali</option>
                                                            <option value="Soubré">Soubré</option>
                                                            <option value="Séguéla">Séguéla</option>
                                                            <option value="Tabou">Tabou</option>
                                                            <option value="Tanda">Tanda</option>
                                                            <option value="Tehini">Tehini</option>
                                                            <option value="Tiapoum">Tiapoum</option>
                                                            <option value="Tiassalé">Tiassalé</option>
                                                            <option value="Tiebissou">Tiebissou</option>
                                                            <option value="Tingréla">Tingréla</option>
                                                            <option value="Touba">Touba</option>
                                                            <option value="Toulepleu">Toulepleu</option>
                                                            <option value="Toumodi">Toumodi</option>
                                                            <option value="Transua">Transua</option>
                                                            <option value="Vavoua">Vavoua</option>
                                                            <option value="Yakassé-Attobrou">Yakassé-Attobrou</option>
                                                            <option value="Zouan-Hounien">Zouan-Hounien</option>
                                                            <option value="Zoukougbeu">Zoukougbeu</option>
                                                            <option value="Zuénoula">Zuénoula</option>
                                                        </select>
                                                        <span style="font-size: 12px; color: red;" v-if="erreurVille === true">
                                                            * Champ à renseigner
                                                        </span><br>
                                                    </div>
                
                                                    <!-- City -->
                                                    <div class="col-md-6">
                                                        <label class="form-label">Commune</label>
                                                        <input v-model="biens.commune_item" autocomplete="common" autofocus
                                                            class="form-control" name="common"
                                                            type="text" placeholder="Exemple: Cocody">
                                                    </div>
                                                    <!-- City -->
                                                    <div class="col-md-6">
                                                        <label class="form-label">Quartier</label>
                                                        <input v-model="biens.quartier_item" autocomplete="district" autofocus
                                                            class="form-control" name="district"
                                                            type="text" placeholder="Exemple: Angré">
                                                    </div>
                                                    <!-- City -->
                                                    <div class="col-md-6">
                                                        <label class="form-label">Zone</label>
                                                        <input v-model="biens.zone_item" autocomplete="area" autofocus
                                                            class="form-control" name="area"
                                                            type="text" placeholder="Exemple: 7ème Tranche">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label class="form-label">Contact de votre résidence </label>
                                                        <input v-model="biens.contact_item" autocomplete="residency_phone" autofocus
                                                            class="form-control"
                                                            name="residency_phone" type="tel"
                                                            placeholder="Contact de votre établissement">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      </el-row>
                                      <el-button v-if="active === 0" @click="next" type="primary" style="width: 100%; margin-top: 10px; font-size: 18px">Prochaine étape <i class="el-icon-arrow-right el-icon-right"></i></el-button>

                                  </div>

                                  <div class="step_zone" v-if="active === 1">
                                    <h1 style="font-size: 24px; line-height: 32px; font-weight: 700;">
                                        Disposition & tarification
                                    </h1>
                                    <p style="font-size: 16px">
                                        Indiquez-nous les types de lits, les parties communes, la taille et le tarif de l'ensemble de vos résidence.
                                    </p>
                                    <el-row>

                                        <div class="card shadow">
                                            <!-- Card header -->
                                            <div class="card-header border-bottom">
                                                <h5 class="mb-0">Informations sur la résidence</h5>
                                            </div>
                
                                            <!-- Card body -->
                                            <div class="card-body">
                                                <div class="row g-3">
                                                    <!-- Car name -->
                                                    <legend style="font-size: 18px">Appartement</legend>
                                                    <!-- State -->
                                                    <div class="col-md-6">
                                                        <label class="form-label">Type d'appartement</label>
                                                        <select autocomplete="residency_name_1" autofocus
                                                            class="form-control"
                                                            v-model="biens.apt_item"
                                                            name="residency_name_1" data-search-enabled="true">
                                                            <option value="" class="hidden">Veuillez sélectionner</option>
                                                            <option value="Appartement" selected="">Appartement</option>
                                                            <option value="Appartement - Rez-de-Chaussée">Appartement - Rez-de-Chaussée
                                                            </option>
                                                            <option value="Appartement - Vue sur Jardin">Appartement - Vue sur Jardin
                                                            </option>
                                                            <option value="Appartement - Haut standing">Appartement - Haut standing
                                                            </option>
                                                            <option value="Appartement - Vue sur Mer">Appartement - Vue sur Mer</option>
                                                            <option value="Appartement - Vue sur Piscine">Appartement - Vue sur Piscine
                                                            </option>
                                                            <option value="Appartement 1 Chambre">Appartement 1 Chambre</option>
                                                            <option value="Appartement 2 Chambres">Appartement 2 Chambres</option>
                                                            <option value="Appartement 3&nbsp;Chambres">Appartement 3&nbsp;Chambres
                                                            </option>
                                                            <option value="Appartement Deluxe">Appartement Deluxe</option>
                                                            <option value="Appartement Standard">Appartement Standard</option>
                                                            <option value="Appartement Supérieur">Appartement Supérieur</option>
                                                            <option value="ppartement Supérieur avec Sauna">Appartement Supérieur avec
                                                                Sauna
                                                            </option>
                                                            
                                                            <option value="Appartement avec Sauna">Appartement avec Sauna</option>
                                                           
                                                            <option value="Appartement en Duplex">Appartement en Duplex</option>
                                                            
                                                            <option value="Loft">Loft</option>
                                                            <option value="Maisonnette">Maisonnette</option>
                                                            <option value="Penthouse">Penthouse</option>
                                                            <option value="Studio">Studio</option>
                                                            <option value="Studio - Américain">Studio - Américain</option>
                                                        </select>
                                                        <span style="font-size: 12px">
                                                            Les clients verront ce nom sur le site Internet SaRezide.ci.
                                                        </span>
                                                    </div>
                                                    <!-- Model Year -->
                                                    <div class="col-md-6">
                                                        <label class="form-label">Nom personnalisé (facultatif)</label>
                                                        <input v-model="biens.apt_item" autocomplete="residency_name_2" autofocus class="form-control"
                                                            name="residency_name_2" type="text"
                                                            placeholder="Nom personnalisé (facultatif)">
                                                        <span style="font-size: 12px">
                                                            Vous pouvez personnaliser le nom à titre de référence si vous le souhaitez.
                                                        </span>
                                                    </div>
                
                                                    <!-- car type -->
                                                    <div class="col-md-4">
                                                        <label class="form-label">Nombre de chambres</label>
                                                        <select autocomplete="bedrooms" v-model="biens.nb_chb_item" autofocus
                                                            class="form-select" name="bedrooms"
                                                            data-search-enabled="true" id="number_of_rooms">
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                    </div>
                                                    <!-- State -->
                                                    <div class="col-md-4">
                                                        <label class="form-label">Nombre de salons</label>
                                                        <select autocomplete="livingrooms" v-model="biens.nb_sal_item" autofocus
                                                            class="form-select"
                                                            name="livingrooms" data-search-enabled="true">
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label class="form-label">Nombre de salles de bains</label>
                                                        <select autocomplete="bathrooms" autofocus
                                                            class="form-select " v-model="biens.nb_sb_item" name="bathrooms"
                                                            data-search-enabled="true">
                                                            <option value="0">0</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        
                                        <div class="card shadow" style="margin-top: 15px">
                                            <!-- Card header -->

                                            <!-- Card body -->
                                            <div class="card-body" >
                                                <div class="row g-3" v-if="biens.nb_chb_item >= 1" >
                                                    <legend v-if="n===0">Literie </legend>
                                                    <!-- Select item -->
                                                    <div class="describe-block">
                                                        <p class="describe-text">
                                                            Veuillez uniquement indiquer les lits déjà disponibles dans la chambre.
                                                        </p>
                                                    </div>
                                                    
                                                            <legend style="font-size: 18px">Chambre 1</legend>
                                                            <label class="form-label"> Quels types de lits sont disponibles dans cette pièce ?</label>

                                                            <div class="col-md-6">
                                                                <select class="form-select" v-model="chb_1_lit" name="bedtype_1">
                                                                    <option value="lit(s) simple(s)" data-occupancy="1"
                                                                        data-name="lit(s) simple(s)">
                                                                        lit(s) simple(s)
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimension&nbsp;: 90-130 cm
                                                                    </option>
                                                                    <option value="lit(s) double(s)" data-occupancy="2"
                                                                        data-name="lit(s) double(s)">
                                                                        lit(s) double(s)
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimension&nbsp;: 131-150 cm
                                                                    </option>
                                                                    <option value="lit(s) queen-size" data-occupancy="2"
                                                                        data-name="lit(s) queen-size">
                                                                        lit(s) queen-size
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimension&nbsp;: 151-180 cm
                                                                    </option>
                                                                    <option value="lit(s) king-size" data-occupancy="2"
                                                                        data-name="lit(s) king-size">
                                                                        lit(s) king-size
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimension&nbsp;: 181-210 cm
                                                                    </option>
                                                                    <option value="lits superposés" data-occupancy="1"
                                                                        data-name="lits superposés">
                                                                        lits superposés
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimensions variables
                                                                    </option>
                                                                    <option value="canapé(s)-lit(s)" data-occupancy="1"
                                                                        data-name="canapé(s)-lit(s)">
                                                                        canapé(s)-lit(s)
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimensions variables
                                                                    </option>
                                                                    <option value="futon(s)" data-occupancy="1" data-name="futon(s)">
                                                                        futon(s)
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimensions variables
                                                                    </option>

                                                                </select>
                                                            </div>
                                                            <label class="form-label" style="margin-top: 22px">Combien de lits dispose cette pièce ? </label>
                                                            
                                                            <div class="col-md-4">
                                                                <select autocomplete="bed_number_1" v-model="chb_1_nb_lit" autofocus class="form-select"
                                                                    name="bed_number_1">
                                                                    <option value="0" selected="">Sélectionnez le nombre de lits</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                    <option value="6">6</option>
                                                                    <option value="7">7</option>
                                                                    <option value="8">8</option>
                                                                    <option value="9">9</option>
                                                                    <option value="10">10</option>
                                                                    <option value="11">11</option>
                                                                    <option value="12">12</option>
                                                                </select>
                                                            </div>

                                                            <label class="form-label" style="margin-top: 22px">Combien de personnes peuvent dormir dans cette pièce ? </label>
                                                            <div class="col-md-5">
                                                                <input autocomplete="num_guests_in_room_1" v-model="chb_1_nb_personne" autofocus
                                                                    class="form-control"
                                                                    type="number" name="num_guests_in_room_1" style="margin-top: -20px;">
                                                            </div>

                                                            <div class="col-md-12">
                                                                <label class="form-label">
                                                                    <input autocomplete="bathroom_in_the_room_1" v-model="chb_1_nb_personne" autofocus type="checkbox"
                                                                        name="bathroom_in_the_room_1">
                                                                    Salle de bains dans la chambre </label>
                                                            </div>
                                                        <vs-divider/>
                                                </div>
                                                <div class="row g-3" v-if="biens.nb_chb_item >= 2" >
                                                    <legend v-if="n===0">Literie </legend>
                                                    <!-- Select item -->
                                                    <div class="describe-block">
                                                        <p class="describe-text">
                                                            Veuillez uniquement indiquer les lits déjà disponibles dans la chambre.
                                                        </p>
                                                    </div>
                                                    
                                                            <legend style="font-size: 18px">Chambre 2</legend>
                                                            <label class="form-label"> Quels types de lits sont disponibles dans cette pièce ?</label>

                                                            <div class="col-md-6">
                                                                <select class="form-select" v-model="chb_2_lit" name="bedtype_1">
                                                                    <option value="lit(s) simple(s)" data-occupancy="1"
                                                                        data-name="lit(s) simple(s)">
                                                                        lit(s) simple(s)
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimension&nbsp;: 90-130 cm
                                                                    </option>
                                                                    <option value="lit(s) double(s)" data-occupancy="2"
                                                                        data-name="lit(s) double(s)">
                                                                        lit(s) double(s)
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimension&nbsp;: 131-150 cm
                                                                    </option>
                                                                    <option value="lit(s) queen-size" data-occupancy="2"
                                                                        data-name="lit(s) queen-size">
                                                                        lit(s) queen-size
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimension&nbsp;: 151-180 cm
                                                                    </option>
                                                                    <option value="lit(s) king-size" data-occupancy="2"
                                                                        data-name="lit(s) king-size">
                                                                        lit(s) king-size
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimension&nbsp;: 181-210 cm
                                                                    </option>
                                                                    <option value="lits superposés" data-occupancy="1"
                                                                        data-name="lits superposés">
                                                                        lits superposés
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimensions variables
                                                                    </option>
                                                                    <option value="canapé(s)-lit(s)" data-occupancy="1"
                                                                        data-name="canapé(s)-lit(s)">
                                                                        canapé(s)-lit(s)
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimensions variables
                                                                    </option>
                                                                    <option value="futon(s)" data-occupancy="1" data-name="futon(s)">
                                                                        futon(s)
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimensions variables
                                                                    </option>

                                                                </select>
                                                            </div>
                                                            
                                                            <div class="col-md-4">
                                                            <label class="form-label" style="margin-top: 22px">Combien de lits dispose cette pièce ? </label>
                                                                <select autocomplete="bed_number_1" v-model="chb_2_nb_lit" autofocus class="form-select"
                                                                    name="bed_number_1">
                                                                    <option value="0" selected="">Sélectionnez le nombre de lits</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                    <option value="6">6</option>
                                                                    <option value="7">7</option>
                                                                    <option value="8">8</option>
                                                                    <option value="9">9</option>
                                                                    <option value="10">10</option>
                                                                    <option value="11">11</option>
                                                                    <option value="12">12</option>
                                                                </select>
                                                            </div>

                                                            <label class="form-label" style="margin-top: 22px">Combien de personnes peuvent dormir dans cette pièce ? </label>
                                                            <div class="col-md-5">
                                                                <input autocomplete="num_guests_in_room_1" v-model="chb_2_nb_personne" autofocus
                                                                    class="form-control"
                                                                    type="number" name="num_guests_in_room_1" style="margin-top: -20px;">
                                                            </div>

                                                            <div class="col-md-12">
                                                                <label class="form-label">
                                                                    <input autocomplete="bathroom_in_the_room_1" v-model="chb_1_nb_personne" autofocus type="checkbox"
                                                                        name="bathroom_in_the_room_1">
                                                                    Salle de bains dans la chambre </label>
                                                            </div>
                                                        <vs-divider/>
                                                </div>
                                                <div class="row g-3" v-if="biens.nb_chb_item >= 3" >
                                                    <legend v-if="n===0">Literie </legend>
                                                    <!-- Select item -->
                                                    <div class="describe-block">
                                                        <p class="describe-text">
                                                            Veuillez uniquement indiquer les lits déjà disponibles dans la chambre.
                                                        </p>
                                                    </div>
                                                    
                                                            <legend style="font-size: 18px">Chambre 3</legend>
                                                            <label class="form-label"> Quels types de lits sont disponibles dans cette pièce ?</label>

                                                            <div class="col-md-6">
                                                                <select class="form-select" v-model="chb_3_lit" name="bedtype_1">
                                                                    <option value="lit(s) simple(s)" data-occupancy="1"
                                                                        data-name="lit(s) simple(s)">
                                                                        lit(s) simple(s)
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimension&nbsp;: 90-130 cm
                                                                    </option>
                                                                    <option value="lit(s) double(s)" data-occupancy="2"
                                                                        data-name="lit(s) double(s)">
                                                                        lit(s) double(s)
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimension&nbsp;: 131-150 cm
                                                                    </option>
                                                                    <option value="lit(s) queen-size" data-occupancy="2"
                                                                        data-name="lit(s) queen-size">
                                                                        lit(s) queen-size
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimension&nbsp;: 151-180 cm
                                                                    </option>
                                                                    <option value="lit(s) king-size" data-occupancy="2"
                                                                        data-name="lit(s) king-size">
                                                                        lit(s) king-size
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimension&nbsp;: 181-210 cm
                                                                    </option>
                                                                    <option value="lits superposés" data-occupancy="1"
                                                                        data-name="lits superposés">
                                                                        lits superposés
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimensions variables
                                                                    </option>
                                                                    <option value="canapé(s)-lit(s)" data-occupancy="1"
                                                                        data-name="canapé(s)-lit(s)">
                                                                        canapé(s)-lit(s)
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimensions variables
                                                                    </option>
                                                                    <option value="futon(s)" data-occupancy="1" data-name="futon(s)">
                                                                        futon(s)
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimensions variables
                                                                    </option>

                                                                </select>
                                                            </div>
                                                            
                                                            <div class="col-md-4">
                                                                <select autocomplete="bed_number_1" v-model="chb_3_nb_lit" autofocus class="form-select"
                                                                    name="bed_number_1">
                                                                    <option value="0" selected="">Sélectionnez le nombre de lits</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                    <option value="6">6</option>
                                                                    <option value="7">7</option>
                                                                    <option value="8">8</option>
                                                                    <option value="9">9</option>
                                                                    <option value="10">10</option>
                                                                    <option value="11">11</option>
                                                                    <option value="12">12</option>
                                                                </select>
                                                            </div>

                                                            <label class="form-label" style="margin-top: 22px">Combien de personnes peuvent dormir dans cette pièce ? </label>
                                                            <div class="col-md-5">
                                                                <input autocomplete="num_guests_in_room_1" v-model="chb_3_nb_personne" autofocus
                                                                    class="form-control"
                                                                    type="number" name="num_guests_in_room_1" style="margin-top: -20px;">
                                                            </div>

                                                            <div class="col-md-12">
                                                                <label class="form-label">
                                                                    <input autocomplete="bathroom_in_the_room_1" v-model="chb_1_nb_personne" autofocus type="checkbox"
                                                                        name="bathroom_in_the_room_1">
                                                                    Salle de bains dans la chambre </label>
                                                            </div>
                                                        <vs-divider/>
                                                </div>
                                                <div class="row g-3" v-if="biens.nb_chb_item >= 4" >
                                                    <legend v-if="n===0">Literie </legend>
                                                    <!-- Select item -->
                                                    <div class="describe-block">
                                                        <p class="describe-text">
                                                            Veuillez uniquement indiquer les lits déjà disponibles dans la chambre.
                                                        </p>
                                                    </div>
                                                    
                                                            <legend style="font-size: 18px">Chambre 4</legend>
                                                            <label class="form-label"> Quels types de lits sont disponibles dans cette pièce ?</label>

                                                            <div class="col-md-6">
                                                                <select class="form-select" v-model="chb_4_lit" name="bedtype_1">
                                                                    <option value="lit(s) simple(s)" data-occupancy="1"
                                                                        data-name="lit(s) simple(s)">
                                                                        lit(s) simple(s)
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimension&nbsp;: 90-130 cm
                                                                    </option>
                                                                    <option value="lit(s) double(s)" data-occupancy="2"
                                                                        data-name="lit(s) double(s)">
                                                                        lit(s) double(s)
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimension&nbsp;: 131-150 cm
                                                                    </option>
                                                                    <option value="lit(s) queen-size" data-occupancy="2"
                                                                        data-name="lit(s) queen-size">
                                                                        lit(s) queen-size
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimension&nbsp;: 151-180 cm
                                                                    </option>
                                                                    <option value="lit(s) king-size" data-occupancy="2"
                                                                        data-name="lit(s) king-size">
                                                                        lit(s) king-size
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimension&nbsp;: 181-210 cm
                                                                    </option>
                                                                    <option value="lits superposés" data-occupancy="1"
                                                                        data-name="lits superposés">
                                                                        lits superposés
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimensions variables
                                                                    </option>
                                                                    <option value="canapé(s)-lit(s)" data-occupancy="1"
                                                                        data-name="canapé(s)-lit(s)">
                                                                        canapé(s)-lit(s)
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimensions variables
                                                                    </option>
                                                                    <option value="futon(s)" data-occupancy="1" data-name="futon(s)">
                                                                        futon(s)
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimensions variables
                                                                    </option>

                                                                </select>
                                                            </div>
                                                            
                                                            <div class="col-md-4">
                                                                <select autocomplete="bed_number_1" v-model="chb_4_nb_lit" autofocus class="form-select"
                                                                    name="bed_number_1">
                                                                    <option value="0" selected="">Sélectionnez le nombre de lits</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                    <option value="6">6</option>
                                                                    <option value="7">7</option>
                                                                    <option value="8">8</option>
                                                                    <option value="9">9</option>
                                                                    <option value="10">10</option>
                                                                    <option value="11">11</option>
                                                                    <option value="12">12</option>
                                                                </select>
                                                            </div>

                                                            <label class="form-label" style="margin-top: 22px">Combien de personnes peuvent dormir dans cette pièce ? </label>
                                                            <div class="col-md-5">
                                                                <input autocomplete="num_guests_in_room_1" v-model="chb_4_nb_personne" autofocus
                                                                    class="form-control"
                                                                    type="number" name="num_guests_in_room_1" style="margin-top: -20px;">
                                                            </div>

                                                            <div class="col-md-12">
                                                                <label class="form-label">
                                                                    <input autocomplete="bathroom_in_the_room_1" v-model="chb_1_nb_personne" autofocus type="checkbox"
                                                                        name="bathroom_in_the_room_1">
                                                                    Salle de bains dans la chambre </label>
                                                            </div>
                                                        <vs-divider/>
                                                </div>
                                                <div class="row g-3" v-if="biens.nb_chb_item >= 5" >
                                                    <legend v-if="n===0">Literie </legend>
                                                    <!-- Select item -->
                                                    <div class="describe-block">
                                                        <p class="describe-text">
                                                            Veuillez uniquement indiquer les lits déjà disponibles dans la chambre.
                                                        </p>
                                                    </div>
                                                    
                                                            <legend style="font-size: 18px">Chambre 5</legend>
                                                            <label class="form-label"> Quels types de lits sont disponibles dans cette pièce ?</label>

                                                            <div class="col-md-6">
                                                                <select class="form-select" v-model="chb_5_lit" name="bedtype_1">
                                                                    <option value="lit(s) simple(s)" data-occupancy="1"
                                                                        data-name="lit(s) simple(s)">
                                                                        lit(s) simple(s)
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimension&nbsp;: 90-130 cm
                                                                    </option>
                                                                    <option value="lit(s) double(s)" data-occupancy="2"
                                                                        data-name="lit(s) double(s)">
                                                                        lit(s) double(s)
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimension&nbsp;: 131-150 cm
                                                                    </option>
                                                                    <option value="lit(s) queen-size" data-occupancy="2"
                                                                        data-name="lit(s) queen-size">
                                                                        lit(s) queen-size
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimension&nbsp;: 151-180 cm
                                                                    </option>
                                                                    <option value="lit(s) king-size" data-occupancy="2"
                                                                        data-name="lit(s) king-size">
                                                                        lit(s) king-size
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimension&nbsp;: 181-210 cm
                                                                    </option>
                                                                    <option value="lits superposés" data-occupancy="1"
                                                                        data-name="lits superposés">
                                                                        lits superposés
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimensions variables
                                                                    </option>
                                                                    <option value="canapé(s)-lit(s)" data-occupancy="1"
                                                                        data-name="canapé(s)-lit(s)">
                                                                        canapé(s)-lit(s)
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimensions variables
                                                                    </option>
                                                                    <option value="futon(s)" data-occupancy="1" data-name="futon(s)">
                                                                        futon(s)
                                                                        &nbsp;&nbsp;/&nbsp;&nbsp;dimensions variables
                                                                    </option>

                                                                </select>
                                                            </div>
                                                            
                                                            <div class="col-md-4">
                                                                <select autocomplete="bed_number_1" v-model="chb_5_nb_lit" autofocus class="form-select"
                                                                    name="bed_number_1">
                                                                    <option value="0" selected="">Sélectionnez le nombre de lits</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                    <option value="6">6</option>
                                                                    <option value="7">7</option>
                                                                    <option value="8">8</option>
                                                                    <option value="9">9</option>
                                                                    <option value="10">10</option>
                                                                    <option value="11">11</option>
                                                                    <option value="12">12</option>
                                                                </select>
                                                            </div>

                                                            <label class="form-label" style="margin-top: 22px">Combien de personnes peuvent dormir dans cette pièce ? </label>
                                                            <div class="col-md-5">
                                                                <input autocomplete="num_guests_in_room_1" v-model="chb_1_nb_personne" autofocus
                                                                    class="form-control"
                                                                    type="number" name="num_guests_in_room_1" style="margin-top: -20px;">
                                                            </div>

                                                            <div class="col-md-12">
                                                                <label class="form-label">
                                                                    <input autocomplete="bathroom_in_the_room_1" v-model="chb_5_nb_personne" autofocus type="checkbox"
                                                                        name="bathroom_in_the_room_1">
                                                                    Salle de bains dans la chambre </label>
                                                            </div>
                                                        <vs-divider/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card shadow" style="margin-top: 15px">
                                            <!-- Card header -->
                                            <div class="card-header border-bottom">
                                                <h6 class="mb-0">Tarification de base par jour</h6>
                                            </div>
                
                                            <!-- Card body -->
                                            <div class="card-body">
                                                <div class="row g-3">
                                                    <!-- Select item -->
                                                    <!-- Owner name -->
                                                    <div class="col-md-5">
                                                        <label class="form-label">Quel est le tarif pour 1 jour ?</label>
                                                        <div class="input-group mb-3">
                                                            <input autocomplete="room_price" v-model="biens.tarif_jour" autofocus type="number"
                                                                class="form-control"
                                                                name="room_price" aria-label="Username" aria-describedby="basic-addon1">
                                                            <span class="input-group-text" id="basic-addon1">Franc CFA</span>
                                                        </div>
                                                        <span style="font-size: 12px; color: red;" v-if="erreurTarif === true">
                                                            * Champ à renseigner
                                                        </span><br>
                                                    </div>
                                                    <div class="col-md-7">
                                                        <label class="form-label">Indiquez l'horaire d'entrée et l'horaire de sortie</label>
                                                    <div class="input-group">
                                                        <el-time-select
                                                            placeholder="Horaire de rentrée"
                                                            v-model="biens.horaire_jour_entre"
                                                            :picker-options="{
                                                            start: '07:30',
                                                            step: '00:30',
                                                            end: '20:00'
                                                            }">
                                                        </el-time-select>
                                                        <el-time-select
                                                            placeholder="Horaire de sortie"
                                                            v-model="biens.horaire_jour_sorti"
                                                            :picker-options="{
                                                            start: '07:30',
                                                            step: '00:15',
                                                            end: '20:00',
                                                            }">
                                                        </el-time-select>
                                                    </div>
                                                    </div>
                                                    
                                                    <div class="col-md-3">
                                                        <label class="form-label">Réduction possible?</label>
                                                        <select id="reduct" v-model="reductionjour" autocomplete="reduct" autofocus class="form-select"
                                                            name="reduct">
                                                            <option value="">Réduction possible?</option>
                                                            <option value="1">Oui</option>
                                                            <option value="0">Non</option>
                                                        </select>
                                                    </div>
                                                        <div class="col-md-4" v-if="reductionjour == 1">
                                                            <label class="form-label">A partir de combien de jour? </label>
                                                            <select id="reduct" v-model="biens.nb_jour_reduction" autocomplete="reduct" autofocus class="form-select"
                                                                name="reduct">
                                                                <option value="3j">3 jours</option>
                                                                <option value="5j">5 jours</option>
                                                                <option value="1s">1 semaine</option>
                                                                <option value="2s">2 semaine</option>
                                                                <option value="1m">1 mois</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-md-5" v-if="reductionjour == 1">
                                                            <label class="form-label">Tarif de la réduction</label>
                                                            <div class="input-group mb-3">
                                                                <input v-model="biens.tarif_jour_reduction" autocomplete="room_price" autofocus type="number"
                                                                    class="form-control"
                                                                    name="room_price" aria-label="Username" aria-describedby="basic-addon1">
                                                                <span class="input-group-text" id="basic-addon1">Franc CFA</span>
                                                            </div>
                                                        </div>
                                                </div>
                                                <div class="row g-3">
                                                    <!-- Select item -->
                                                    <!-- Owner name -->
                                                    <div class="col-md-4">
                                                        <label class="form-label">Acceptez-vous les démi-journée?</label>
                                                        <select id="reduct" v-model="biens.tarif_journee" autocomplete="reduct" autofocus class="form-select"
                                                            name="reduct">
                                                            <option value="">Démi-journée possible?</option>
                                                            <option value="1">Oui</option>
                                                            <option value="0">Non</option>
                                                        </select>
                                                    </div>

                                                    <div class="col-md-3" v-if="journee == 1">
                                                        <label class="form-label">Tarif pour la journée ?</label>
                                                        <div class="input-group mb-3">
                                                            <input autocomplete="room_price" autofocus type="number"
                                                                class="form-control is-invalid"
                                                                name="room_price" aria-label="Username" aria-describedby="basic-addon1">
                                                            <span class="input-group-text" id="basic-addon1">Franc CFA</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-7" v-if="journee == 1">
                                                        <div class="input-group">
                                                            <el-time-select
                                                                placeholder="Horaire d'entré"
                                                                v-model="startTime"
                                                                :picker-options="{
                                                                start: '07:30',
                                                                step: '00:30',
                                                                end: '20:00'
                                                                }">
                                                            </el-time-select>
                                                            <el-time-select
                                                                placeholder="Horaire de sorti"
                                                                v-model="endTime"
                                                                :picker-options="{
                                                                start: '07:30',
                                                                step: '00:15',
                                                                end: '20:00',
                                                                minTime: startTime
                                                                }">
                                                            </el-time-select>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-4" id="days_reduct" style="display: none">
                                                        <label class="form-label">A partir de combien de jour?</label>
                                                        <select class="form-select" autocomplete="days_reduct" autofocus
                                                            name="days_reduct">
                                                            <option value="">A partir de combien de jour?</option>
                                                            <option value="2 jours">2 jours</option>
                                                            <option value="1 semaine">1 semaine</option>
                                                            <option value="2 semaines">2 semaines</option>
                                                            <option value="1 mois">1 mois</option>
                                                        </select>
                                                    </div>
                                                    <!-- Contact number -->
                                                    <div class="col-md-5" id="reduct_price" style="display: none">
                                                        <label class="form-label">Tarif de la réduction</label>
                                                        <div class="input-group mb-3">
                                                            <input type="number" autocomplete="price_reduct" autofocus
                                                                class="form-control" name="price_reduct" aria-label="Username"
                                                                aria-describedby="basic-addon1">
                                                            <span class="input-group-text" id="basic-addon1">Franc CFA</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      </el-row>
                                      <el-row>
                                        <el-col :span="11">
                                            <el-button v-if="active === 1" @click="prec" type="warning" style="width: 100%; margin-top: 10px; font-size: 18px"><i class="el-icon-back el-icon-back"></i> Etape précédente</el-button>
                                        </el-col>
                                        <el-col :span="1">.</el-col>
                                        <el-col :span="12">
                                            <el-button v-if="active === 1" @click="next" type="primary" style="width: 100%; margin-top: 10px; font-size: 18px">Prochaine étape <i class="el-icon-arrow-right el-icon-right"></i></el-button>
                                        </el-col>
                                      </el-row>
                                      
                                  </div>

                              

                                  <div class="step_zone" v-if="active === 2">
                                    <h1 style="font-size: 40px">
                                       
                                        Equipements & Services
                                    </h1>
                                    <p style="font-size: 16px">
                                        Donnez-nous des détails sur vos équipements, votre connexion internet, votre parking et vos langues etc.
                                    </p>
                                    <el-row>
                                    <div class="card shadow">
                                    <!-- Card header -->
                                  
                                    <div class="card-body">
                                        <div class="row g-3">
                                            <legend style="font-size: 18px">Parking </legend>
                                            <div class="describe-block">
                                                <p class="describe-text">
                                                    Cette information est cruciale pour les clients qui arrivent à votre résidence
                                                    en voiture.
                                                </p>
                                            </div>
                                            <div class="col-md-6">
                                                <label class="form-label">Est-il possible de stationner à ou près de votre
                                                    résidence ? </label>
                                                <select v-model="eqpm_parking" autocomplete="parking_available" autofocus name="parking_available"
                                                    id="parking_available" class="form-control">
                                                    <option value="Non" selected="">Non</option>
                                                    <option value="Oui">Oui</option>
                                                </select>
                                            </div>
                                            <div class="col-md-3" id="parking_private_or_public" v-if="eqpm_parking === 'Non'">
                                                <label for="" class="form-label">Parking Public ou Privé</label>
                                                <select v-model="biens.eqpm_parking" autocomplete="parking_private_or_public" autofocus
                                                    name="parking_private_or_public" id="" class="form-control" disabled>
                                                    <option value="Public">Public</option>
                                                    <option value="Privé">Privé</option>
                                                </select>
                                            </div>
                                            <div class="col-md-3" id="parking_private_or_public" v-else>
                                                <label for="" class="form-label">Parking Public ou Privé</label>
                                                <select v-model="biens.eqpm_parking" autocomplete="parking_private_or_public" autofocus
                                                    name="parking_private_or_public" id="" class="form-control">
                                                    <option value="Public">Public Gratuit</option>
                                                    <option value="Public Payant">Public Payant</option>
                                                    <option value="Privé Payant">Privé Payant</option>
                                                </select>
                                            </div>
                                            <div class="col-md-3" id="parking_near_on_place" v-if="eqpm_parking === 'Non'">
                                                <label for="" class="form-label">Sur place ou À proximité</label>
                                                <select autocomplete="parking_near_on_place" autofocus disabled
                                                    name="parking_near_on_place" id="" class="form-control">
                                                    <option value="Sur place">Sur place</option>
                                                    <option value="À proximité">À proximité</option>
                                                </select>
                                            </div>
                                            <div class="col-md-3" id="parking_near_on_place" v-else>
                                                <label for="" class="form-label">Sur place ou À proximité</label>
                                                <select autocomplete="parking_near_on_place" autofocus
                                                    name="parking_near_on_place" id="" class="form-control">
                                                    <option value="Sur place">Sur place</option>
                                                    <option value="À proximité">À proximité</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6" id="parking_price" v-if="biens.eqpm_parking === 'Privé Payant' || biens.eqpm_parking === 'Public Payant'">
                                                <label for="" class="form-label">Tarif du stationnement (par jour)</label>
                                                <div class="input-group mb-3">
                                                    <input type="number" autocomplete="parking_price" autofocus
                                                        name="parking_price" class="form-control" aria-label="Username"
                                                        aria-describedby="basic-addon1">
                                                    <span class="input-group-text" id="basic-addon1">Franc CFA</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr>
                                    <!-- Card body -->
                                    <div class="card-body">
                                        <div class="row g-3">
                                            <legend style="font-size: 18px">Petit-déjeuner </legend>
                                            <div class="col-md-4">
                                                <label class="form-label"> Le petit-déjeuner est-il proposé ? </label>
                                                <select v-model="biens.eqpm_petit_dej" autocomplete="breakfast_included" autofocus class="form-control" name="breakfast_included" id="breakfast_included">
                                                    <option value="Non" selected="">Non</option>
                                                    <option value="Oui, il est compris dans le tarif">Oui, il est compris dans le
                                                        tarif</option>
                                                    <option value="Oui, il est proposé en option">Oui, il est proposé en option
                                                    </option>
                                                </select>
                                            </div>
                                            <div class="col-md-5" id="breakfast_type">
                                                <label class="form-label"> Quel type de petit-déjeuner proposez-vous ? </label>
                                                <select v-model="biens.peti_dej_1" autocomplete="breakfast_type" autofocus class="form-control"
                                                    name="breakfast_type">
                                                    <option value="">Veuillez sélectionner</option>
                                                    <option value="Continental">Continental</option>
                                                    <option value="Américain">Américain</option>
                                                    <option value="Buffet">Buffet</option>
                                                    <option value="À la carte">À la carte</option>
                                                    <option value="Petit-déjeuner à emporter">Petit-déjeuner à emporter</option>
                                                    <option value="Italien">Italien</option>
                                                    <option value="Anglais / irlandais complet">Anglais / irlandais complet
                                                    </option>
                                                    <option value="Végétarien">Végétarien</option>
                                                    <option value="Végétalien">Végétalien</option>
                                                    <option value="Halal">Halal</option>
                                                    <option value="Sans gluten">Sans gluten</option>
                                                    <option value="Casher">Casher</option>
                                                    <option value="Asiatique">Asiatique</option>
                                                </select>
                                            </div>
                                            <div class="col-md-5" id="breakfast_type" v-if="petit_dej">
                                                <label class="form-label"> Quel type de petit-déjeuner proposez-vous (2) ? </label>
                                                <select v-model="biens.peti_dej_2" autocomplete="breakfast_type" autofocus class="form-control"
                                                    name="breakfast_type">
                                                    <option value="">Veuillez sélectionner</option>
                                                    <option value="Continental">Continental</option>
                                                    <option value="Américain">Américain</option>
                                                    <option value="Buffet">Buffet</option>
                                                    <option value="À la carte">À la carte</option>
                                                    <option value="Petit-déjeuner à emporter">Petit-déjeuner à emporter</option>
                                                    <option value="Italien">Italien</option>
                                                    <option value="Anglais / irlandais complet">Anglais / irlandais complet
                                                    </option>
                                                    <option value="Végétarien">Végétarien</option>
                                                    <option value="Végétalien">Végétalien</option>
                                                    <option value="Halal">Halal</option>
                                                    <option value="Sans gluten">Sans gluten</option>
                                                    <option value="Casher">Casher</option>
                                                    <option value="Asiatique">Asiatique</option>
                                                </select>
                                            </div>
                                            <div class="col-md-5" id="breakfast_type" v-if="petit_dej">
                                                <label class="form-label"> Quel type de petit-déjeuner proposez-vous (3) ? </label>
                                                <select v-model="biens.peti_dej_3" autocomplete="breakfast_type" autofocus class="form-control"
                                                    name="breakfast_type">
                                                    <option value="">Veuillez sélectionner</option>
                                                    <option value="Continental">Continental</option>
                                                    <option value="Américain">Américain</option>
                                                    <option value="Buffet">Buffet</option>
                                                    <option value="À la carte">À la carte</option>
                                                    <option value="Petit-déjeuner à emporter">Petit-déjeuner à emporter</option>
                                                    <option value="Italien">Italien</option>
                                                    <option value="Anglais / irlandais complet">Anglais / irlandais complet
                                                    </option>
                                                    <option value="Végétarien">Végétarien</option>
                                                    <option value="Végétalien">Végétalien</option>
                                                    <option value="Halal">Halal</option>
                                                    <option value="Sans gluten">Sans gluten</option>
                                                    <option value="Casher">Casher</option>
                                                    <option value="Asiatique">Asiatique</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6" id="breakfast_price" style="display: none">
                                                <label for="" class="form-label">Tarif du petit-déjeuner (par personne et
                                                    par jour, tous frais et taxes compris)</label>
                                                <div class="input-group mb-3">
                                                    <input autocomplete="breakfast_price" autofocus type="number"
                                                        name="breakfast_price" class="form-control" aria-label="Username"
                                                        aria-describedby="basic-addon1">
                                                    <span class="input-group-text" id="basic-addon1">Franc CFA</span>
                                                </div>
                                            </div>
                                            <br>
                                            <div class="col-md-6" id="add_breakfast" v-if="!petit_dej">
                                                <button @click="petit_dej = true" type="button"
                                                    class="navbar-toggler ms-sm-auto mx-3 me-md-0 p-0 p-sm-2"><i
                                                        class="bi bi-plus-circle-fill" style="color: var(--bs-primary)"></i>
                                                    Ajouter un autre type de petit-déjeuner
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="card-body">
                                        <div class="row g-3">
                                            <legend style="font-size: 18px">Langues parlées </legend>
                                            <!-- Select item -->
                                            <div class="describe-block">
                                                <p class="describe-text">
                                                    Quelles langues parlez-vous (vous ou votre personnel) ?
                                                </p>
                                            </div>
                                            <div class="col-md-4 language-container" data-index="1">
                                                <select v-model="biens.eqpm_langue1" autocomplete="staff_language_1" autofocus class="form-control"
                                                    name="staff_language_1" id="">
                                                    <option value="">Veuillez sélectionner</option>
                                                    <option value="Anglais">Anglais</option>
                                                    <option value="Arabe">Arabe</option>
                                                    <option value="Espagnol">Espagnol</option>
                                                    <option value="Français" selected="selected">Français</option>
                                                    <hr>
                                                    <option value="Afrikaans">Afrikaans</option>
                                                    <option value="Albanais">Albanais</option>
                                                    <option value="Allemand">Allemand</option>
                                                    <option value="Anglais">Anglais</option>
                                                    <option value="Arabe">Arabe</option>
                                                    <option value="Arménien">Arménien</option>
                                                    <option value="Azéri">Azéri</option>
                                                    <option value="Basque">Basque</option>
                                                    <option value="Bengali">Bengali</option>
                                                    <option value="Birman">Birman</option>
                                                    <option value="Biélorusse">Biélorusse</option>
                                                    <option value="Bosnien">Bosnien</option>
                                                    <option value="Bulgare">Bulgare</option>
                                                    <option value="Cantonais">Cantonais</option>
                                                    <option value="Catalan">Catalan</option>
                                                    <option value="Chinois">Chinois</option>
                                                    <option value="Coréen">Coréen</option>
                                                    <option value="Croate">Croate</option>
                                                    <option value="Danois">Danois</option>
                                                    <option value="Dhivehi">Dhivehi</option>
                                                    <option value="Espagnol">Espagnol</option>
                                                    <option value="Estonien">Estonien</option>
                                                    <option value="Farsi">Farsi</option>
                                                    <option value="Finnois">Finnois</option>
                                                    <option value="Français" selected="selected">Français</option>
                                                    <option value="Féroïen">Féroïen</option>
                                                    <option value="Galicien">Galicien</option>
                                                    <option value="Gallois">Gallois</option>
                                                    <option value="Grec">Grec</option>
                                                    <option value="Groenlandais">Groenlandais</option>
                                                    <option value="Gujarati">Gujarati</option>
                                                    <option value="Géorgien">Géorgien</option>
                                                    <option value="Haoussa">Haoussa</option>
                                                    <option value="Hindi">Hindi</option>
                                                    <option value="Hongrois">Hongrois</option>
                                                    <option value="Hébreu">Hébreu</option>
                                                    <option value="Indonésien">Indonésien</option>
                                                    <option value="Irlandais">Irlandais</option>
                                                    <option value="Islandais">Islandais</option>
                                                    <option value="Italien">Italien</option>
                                                    <option value="Japonais">Japonais</option>
                                                    <option value="Kannada">Kannada</option>
                                                    <option value="Khmer">Khmer</option>
                                                    <option value="Lao">Lao</option>
                                                    <option value="Letton">Letton</option>
                                                    <option value="Lituanien">Lituanien</option>
                                                    <option value="Macédonien">Macédonien</option>
                                                    <option value="Malais">Malais</option>
                                                    <option value="Malayalam">Malayalam</option>
                                                    <option value="Maltais">Maltais</option>
                                                    <option value="Marathi">Marathi</option>
                                                    <option value="Moldave">Moldave</option>
                                                    <option value="Mongole">Mongole</option>
                                                    <option value="Norvégien">Norvégien</option>
                                                    <option value="Néerlandais">Néerlandais</option>
                                                    <option value="Népalais">Népalais</option>
                                                    <option value="Odia">Odia</option>
                                                    <option value="Ourdou">Ourdou</option>
                                                    <option value="Polonais">Polonais</option>
                                                    <option value="Portugais">Portugais</option>
                                                    <option value="Punjabi">Punjabi</option>
                                                    <option value="Roumain">Roumain</option>
                                                    <option value="Russe">Russe</option>
                                                    <option value="Serbe">Serbe</option>
                                                    <option value="Slovaque">Slovaque</option>
                                                    <option value="Slovène">Slovène</option>
                                                    <option value="Suédois">Suédois</option>
                                                    <option value="Swahili">Swahili</option>
                                                    <option value="Tagalog">Tagalog</option>
                                                    <option value="Tamoul">Tamoul</option>
                                                    <option value="Tchèque">Tchèque</option>
                                                    <option value="Thaï">Thaï</option>
                                                    <option value="Turc">Turc</option>
                                                    <option value="Télougou">Télougou</option>
                                                    <option value="Ukrainien">Ukrainien</option>
                                                    <option value="Vietnamien">Vietnamien</option>
                                                    <option value="Xhosa">Xhosa</option>
                                                    <option value="Yoruba">Yoruba</option>
                                                    <option value="Zoulou">Zoulou</option>
                                                </select>
                                            </div>
                                            <div class="col-md-4 language-container" data-index="1" v-if="langue">
                                                <select v-model="biens.eqpm_langue2" autocomplete="staff_language_1" autofocus class="form-control"
                                                    name="staff_language_1" id="">
                                                    <option value="">Veuillez sélectionner</option>
                                                    <option value="Anglais">Anglais</option>
                                                    <option value="Arabe">Arabe</option>
                                                    <option value="Espagnol">Espagnol</option>
                                                    <option value="Français" selected="selected">Français</option>
                                                    <hr>
                                                    <option value="Afrikaans">Afrikaans</option>
                                                    <option value="Albanais">Albanais</option>
                                                    <option value="Allemand">Allemand</option>
                                                    <option value="Anglais">Anglais</option>
                                                    <option value="Arabe">Arabe</option>
                                                    <option value="Arménien">Arménien</option>
                                                    <option value="Azéri">Azéri</option>
                                                    <option value="Basque">Basque</option>
                                                    <option value="Bengali">Bengali</option>
                                                    <option value="Birman">Birman</option>
                                                    <option value="Biélorusse">Biélorusse</option>
                                                    <option value="Bosnien">Bosnien</option>
                                                    <option value="Bulgare">Bulgare</option>
                                                    <option value="Cantonais">Cantonais</option>
                                                    <option value="Catalan">Catalan</option>
                                                    <option value="Chinois">Chinois</option>
                                                    <option value="Coréen">Coréen</option>
                                                    <option value="Croate">Croate</option>
                                                    <option value="Danois">Danois</option>
                                                    <option value="Dhivehi">Dhivehi</option>
                                                    <option value="Espagnol">Espagnol</option>
                                                    <option value="Estonien">Estonien</option>
                                                    <option value="Farsi">Farsi</option>
                                                    <option value="Finnois">Finnois</option>
                                                    <option value="Français" selected="selected">Français</option>
                                                    <option value="Féroïen">Féroïen</option>
                                                    <option value="Galicien">Galicien</option>
                                                    <option value="Gallois">Gallois</option>
                                                    <option value="Grec">Grec</option>
                                                    <option value="Groenlandais">Groenlandais</option>
                                                    <option value="Gujarati">Gujarati</option>
                                                    <option value="Géorgien">Géorgien</option>
                                                    <option value="Haoussa">Haoussa</option>
                                                    <option value="Hindi">Hindi</option>
                                                    <option value="Hongrois">Hongrois</option>
                                                    <option value="Hébreu">Hébreu</option>
                                                    <option value="Indonésien">Indonésien</option>
                                                    <option value="Irlandais">Irlandais</option>
                                                    <option value="Islandais">Islandais</option>
                                                    <option value="Italien">Italien</option>
                                                    <option value="Japonais">Japonais</option>
                                                    <option value="Kannada">Kannada</option>
                                                    <option value="Khmer">Khmer</option>
                                                    <option value="Lao">Lao</option>
                                                    <option value="Letton">Letton</option>
                                                    <option value="Lituanien">Lituanien</option>
                                                    <option value="Macédonien">Macédonien</option>
                                                    <option value="Malais">Malais</option>
                                                    <option value="Malayalam">Malayalam</option>
                                                    <option value="Maltais">Maltais</option>
                                                    <option value="Marathi">Marathi</option>
                                                    <option value="Moldave">Moldave</option>
                                                    <option value="Mongole">Mongole</option>
                                                    <option value="Norvégien">Norvégien</option>
                                                    <option value="Néerlandais">Néerlandais</option>
                                                    <option value="Népalais">Népalais</option>
                                                    <option value="Odia">Odia</option>
                                                    <option value="Ourdou">Ourdou</option>
                                                    <option value="Polonais">Polonais</option>
                                                    <option value="Portugais">Portugais</option>
                                                    <option value="Punjabi">Punjabi</option>
                                                    <option value="Roumain">Roumain</option>
                                                    <option value="Russe">Russe</option>
                                                    <option value="Serbe">Serbe</option>
                                                    <option value="Slovaque">Slovaque</option>
                                                    <option value="Slovène">Slovène</option>
                                                    <option value="Suédois">Suédois</option>
                                                    <option value="Swahili">Swahili</option>
                                                    <option value="Tagalog">Tagalog</option>
                                                    <option value="Tamoul">Tamoul</option>
                                                    <option value="Tchèque">Tchèque</option>
                                                    <option value="Thaï">Thaï</option>
                                                    <option value="Turc">Turc</option>
                                                    <option value="Télougou">Télougou</option>
                                                    <option value="Ukrainien">Ukrainien</option>
                                                    <option value="Vietnamien">Vietnamien</option>
                                                    <option value="Xhosa">Xhosa</option>
                                                    <option value="Yoruba">Yoruba</option>
                                                    <option value="Zoulou">Zoulou</option>
                                                </select>
                                            </div>

                                            <div class="col-md-4 language-container" data-index="1" v-if="langue">
                                                <select v-model="biens.eqpm_langue3" autocomplete="staff_language_1" autofocus class="form-control"
                                                    name="staff_language_1" id="">
                                                    <option value="">Veuillez sélectionner</option>
                                                    <option value="Anglais">Anglais</option>
                                                    <option value="Arabe">Arabe</option>
                                                    <option value="Espagnol">Espagnol</option>
                                                    <option value="Français" selected="selected">Français</option>
                                                    <hr>
                                                    <option value="Afrikaans">Afrikaans</option>
                                                    <option value="Albanais">Albanais</option>
                                                    <option value="Allemand">Allemand</option>
                                                    <option value="Anglais">Anglais</option>
                                                    <option value="Arabe">Arabe</option>
                                                    <option value="Arménien">Arménien</option>
                                                    <option value="Azéri">Azéri</option>
                                                    <option value="Basque">Basque</option>
                                                    <option value="Bengali">Bengali</option>
                                                    <option value="Birman">Birman</option>
                                                    <option value="Biélorusse">Biélorusse</option>
                                                    <option value="Bosnien">Bosnien</option>
                                                    <option value="Bulgare">Bulgare</option>
                                                    <option value="Cantonais">Cantonais</option>
                                                    <option value="Catalan">Catalan</option>
                                                    <option value="Chinois">Chinois</option>
                                                    <option value="Coréen">Coréen</option>
                                                    <option value="Croate">Croate</option>
                                                    <option value="Danois">Danois</option>
                                                    <option value="Dhivehi">Dhivehi</option>
                                                    <option value="Espagnol">Espagnol</option>
                                                    <option value="Estonien">Estonien</option>
                                                    <option value="Farsi">Farsi</option>
                                                    <option value="Finnois">Finnois</option>
                                                    <option value="Français" selected="selected">Français</option>
                                                    <option value="Féroïen">Féroïen</option>
                                                    <option value="Galicien">Galicien</option>
                                                    <option value="Gallois">Gallois</option>
                                                    <option value="Grec">Grec</option>
                                                    <option value="Groenlandais">Groenlandais</option>
                                                    <option value="Gujarati">Gujarati</option>
                                                    <option value="Géorgien">Géorgien</option>
                                                    <option value="Haoussa">Haoussa</option>
                                                    <option value="Hindi">Hindi</option>
                                                    <option value="Hongrois">Hongrois</option>
                                                    <option value="Hébreu">Hébreu</option>
                                                    <option value="Indonésien">Indonésien</option>
                                                    <option value="Irlandais">Irlandais</option>
                                                    <option value="Islandais">Islandais</option>
                                                    <option value="Italien">Italien</option>
                                                    <option value="Japonais">Japonais</option>
                                                    <option value="Kannada">Kannada</option>
                                                    <option value="Khmer">Khmer</option>
                                                    <option value="Lao">Lao</option>
                                                    <option value="Letton">Letton</option>
                                                    <option value="Lituanien">Lituanien</option>
                                                    <option value="Macédonien">Macédonien</option>
                                                    <option value="Malais">Malais</option>
                                                    <option value="Malayalam">Malayalam</option>
                                                    <option value="Maltais">Maltais</option>
                                                    <option value="Marathi">Marathi</option>
                                                    <option value="Moldave">Moldave</option>
                                                    <option value="Mongole">Mongole</option>
                                                    <option value="Norvégien">Norvégien</option>
                                                    <option value="Néerlandais">Néerlandais</option>
                                                    <option value="Népalais">Népalais</option>
                                                    <option value="Odia">Odia</option>
                                                    <option value="Ourdou">Ourdou</option>
                                                    <option value="Polonais">Polonais</option>
                                                    <option value="Portugais">Portugais</option>
                                                    <option value="Punjabi">Punjabi</option>
                                                    <option value="Roumain">Roumain</option>
                                                    <option value="Russe">Russe</option>
                                                    <option value="Serbe">Serbe</option>
                                                    <option value="Slovaque">Slovaque</option>
                                                    <option value="Slovène">Slovène</option>
                                                    <option value="Suédois">Suédois</option>
                                                    <option value="Swahili">Swahili</option>
                                                    <option value="Tagalog">Tagalog</option>
                                                    <option value="Tamoul">Tamoul</option>
                                                    <option value="Tchèque">Tchèque</option>
                                                    <option value="Thaï">Thaï</option>
                                                    <option value="Turc">Turc</option>
                                                    <option value="Télougou">Télougou</option>
                                                    <option value="Ukrainien">Ukrainien</option>
                                                    <option value="Vietnamien">Vietnamien</option>
                                                    <option value="Xhosa">Xhosa</option>
                                                    <option value="Yoruba">Yoruba</option>
                                                    <option value="Zoulou">Zoulou</option>
                                                </select>
                                            </div>

                                            <br>
                                            <div class="col-md-4" v-if="!langue">
                                                <button @click="langue = true" type="button" id="addLanguage"
                                                    class="navbar-toggler ms-sm-auto mx-3 me-md-0 p-0 p-sm-2"><i
                                                        class="bi bi-plus-circle-fill" style="color: var(--bs-primary)"></i>
                                                    Ajouter une autre langue
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="card-body">
                                        <div class="row g-3">
                                            <legend style="font-size: 18px">Événement </legend>
                                            <div class="describe-block">
                                                <p class="describe-text">
                                                    Cette information est cruciale pour les clients qui souhaiterons fait les événement dans votre résidence.
                                                </p>
                                            </div>
                                            <div class="col-md-6">
                                                <label class="form-label">Est-il possible de fait les événement dans votre
                                                    résidence ? </label>
                                                <select autocomplete="evenementiel " autofocus name="evenementiel"
                                                    id="evenementiel" class="form-control">
                                                    <option value="Non" selected="">Non</option>
                                                    <option value="Oui">Oui</option>
                                                </select>
                                            </div>
                                            
                                            <div id="evenementiel_id">
                                                <label class="form-label" style="font-weight: 900;color:#5143d9"
                                                    for="">Quel sont les événements que vous acceptez dans votre résidence ?</label>
                                                <div class="row g-3 d-flex justify-content-between">
                                                <div class="col-md-4">
                                                    <label class="form-label">
                                                        <input v-model="biens.event_anniversaire" autocomplete="anniversary" autofocus type="checkbox"
                                                            name="anniversary">
                                                        Anniversaire </label>

                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label">
                                                        <input v-model="biens.event_mariage" autocomplete="marriage" autofocus type="checkbox"
                                                            name="marriage" style="margin-top: -20px;">
                                                            Mariage </label>

                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label">
                                                        <input v-model="biens.event_festivite" autocomplete="festivity" autofocus type="checkbox"
                                                            name="festivity" style="margin-top: -20px;">
                                                            Festivité </label>

                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label">
                                                        <input v-model="biens.event_bapteme" autocomplete="baptism" autofocus type="checkbox"
                                                            name="baptism" style="margin-top: -20px;">
                                                    Baptême</label>

                                                </div>
                                                <div class="col-md-4">
                                                    <label class="form-label">
                                                        <input v-model="biens.event_tournage" autocomplete="filming" autofocus type="checkbox"
                                                            name="filming" style="margin-top: -20px;">
                                                            Tournage </label>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="card-body">
                                        <div class="row g-3">
                                            <legend style="font-size: 18px">Équipements par catégorie</legend>
                                            <div class="describe-block">
                                                <p class="describe-text">
                                                    Lorsque les clients effectuent une recherche d'établissements, ces équipements
                                                    sont les plus prisés.
                                                </p>
                                            </div>
                                            <!--Équipements en chambre -->
                                            <label class="form-label" style="font-weight: 900;color:#5143d9"
                                                for="">Équipements en chambre</label>

                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="air_conditioning" autofocus type="checkbox"
                                                        name="air_conditioning" v-model="biens.eqpm_climatisation" style="margin-top: -20px;">
                                                    Climatisation </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="private_swimming_pool" autofocus type="checkbox"
                                                        name="private_swimming_pool"  v-model="biens.eqpm_piscine_pv" style="margin-top: -20px;">
                                                    Piscine privée </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="clothes_dryer"  v-model="biens.eqpm_seche_linge" autofocus type="checkbox"
                                                        name="clothes_dryer" style="margin-top: -20px;">
                                                    Sèche-linge </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="wardrobe_or_closet" autofocus type="checkbox"
                                                        name="wardrobe_or_closet"  v-model="biens.eqpm_armoire" style="margin-top: -20px;">
                                                    Armoire ou penderie </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="carpet" v-model="biens.eqpm_moquette" autofocus type="checkbox" name="carpet"
                                                        style="margin-top: -20px;">
                                                    Moquette </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="dressing" v-model="biens.eqpm_dressing" autofocus type="checkbox" name="dressing"
                                                        style="margin-top: -20px;">
                                                    Dressing </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="fan" v-model="biens.eqpm_ventilateur" autofocus type="checkbox" name="fan"
                                                        style="margin-top: -20px;">
                                                    Ventilateur </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="heating" v-model="biens.eqpm_chauffage" autofocus type="checkbox" name="heating"
                                                        style="margin-top: -20px;">
                                                    Chauffage </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="iron" v-model="biens.eqpm_fer_repasse" autofocus type="checkbox" name="iron"
                                                        style="margin-top: -20px;">
                                                    Fer à repasser </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="ironing_equipment" v-model="biens.eqpm_mt_repasse" autofocus type="checkbox"
                                                        name="ironing_equipment" style="margin-top: -20px;">
                                                    Matériel de repassage </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="hot_tub" v-model="biens.eqpm_jacuzzi" autofocus type="checkbox" name="hot_tub"
                                                        style="margin-top: -20px;">
                                                    Bain à remous </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="mosquito_net" v-model="biens.eqpm_moustiquaire" autofocus type="checkbox"
                                                        name="mosquito_net" style="margin-top: -20px;">
                                                    Moustiquaire </label>

                                            </div>

                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="couch" v-model="biens.eqpm_canape_chambre" autofocus type="checkbox" name="couch"
                                                        style="margin-top: -20px;">
                                                    Canapé </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="washing_machine"  v-model="biens.eqpm_lave_linge" autofocus type="checkbox"
                                                        name="washing_machine" style="margin-top: -20px;">
                                                    Lave-linge </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="desk"  v-model="biens.eqpm_bureau" autofocus type="checkbox" name="desk"
                                                        style="margin-top: -20px;">
                                                    Bureau </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="bar" v-model="biens.eqpm_bar" autofocus type="checkbox" name="bar"
                                                        style="margin-top: -20px;">
                                                    Bar </label>

                                            </div>

                                            <label class="form-label" style="font-weight: 900;color:#5143d9"
                                                for="">Salle de bains</label>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="dressing_gown" v-model="biens.eqpm_peignoire" autofocus type="checkbox"
                                                        name="dressing_gown" style="margin-top: -20px;">
                                                    Peignoir </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="bathtub" v-model="biens.eqpm_baignoire" autofocus type="checkbox" name="bathtub"
                                                        style="margin-top: -20px;">
                                                    Baignoire </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="hottub_jacuzzi"  v-model="biens.eqpm_jacuzzi" autofocus type="checkbox"
                                                        name="hottub_jacuzzi" style="margin-top: -20px;">
                                                    Bain à remous/jacuzzi </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="sauna" v-model="biens.eqpm_sauna" autofocus type="checkbox" name="sauna"
                                                        style="margin-top: -20px;">
                                                    Sauna </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="hair_dryer" v-model="biens.eqpm_seche_cheveu" autofocus type="checkbox"
                                                        name="hair_dryer" style="margin-top: -20px;">
                                                    Sèche-cheveux </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="spa_bath" v-model="biens.eqpm_baignoire" autofocus type="checkbox" name="spa_bath"
                                                        style="margin-top: -20px;">
                                                    Baignoire spa </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="toilet_paper" v-model="biens.eqpm_papier_toilette" autofocus type="checkbox"
                                                        name="toilet_paper" style="margin-top: -20px;">
                                                    Papier toilette </label>

                                            </div>

                                            <label class="form-label" style="font-weight: 900;color:#5143d9"
                                                for="">High-tech</label>

                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="computer" v-model="biens.eqpm_ordinateur" autofocus type="checkbox" name="computer"
                                                        style="margin-top: -20px;">
                                                    Ordinateur </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="free_wi_fi_connection" v-model="biens.eqpm_internet" autofocus type="checkbox"
                                                        name="free_wi_fi_connection" style="margin-top: -20px;">
                                                    Connexion Internet </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="dvd_player" v-model="biens.eqpm_lecteur_dvd" autofocus type="checkbox"
                                                        name="dvd_player" style="margin-top: -20px;">
                                                    Lecteur DVD </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="fax" v-model="biens.eqpm_fax" autofocus type="checkbox" name="fax"
                                                        style="margin-top: -20px;">
                                                    Fax </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="satellite_channels" v-model="biens.eqpm_chaine_sat" autofocus type="checkbox"
                                                        name="satellite_channels" style="margin-top: -20px;">
                                                    Chaînes satellite </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="phone" v-model="biens.eqpm_telephone" autofocus type="checkbox" name="phone"
                                                        style="margin-top: -20px;">
                                                    Téléphone </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="television" v-model="biens.eqpm_tv" autofocus type="checkbox"
                                                        name="television" style="margin-top: -20px;">
                                                    Télévision à écran plat </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="video_games" v-model="biens.eqpm_jeux_puzzles" autofocus type="checkbox"
                                                        name="video_games" style="margin-top: -20px;">
                                                    Jeux vidéo </label>

                                            </div>
                                            <label class="form-label" style="font-weight: 900;color:#5143d9"
                                                for="">Restauration</label>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="dinner_table" v-model="biens.eqpm_table_mange" autofocus type="checkbox"
                                                        name="dinner_table" style="margin-top: -20px;">
                                                    Table à manger </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="barbecue" v-model="biens.eqpm_barbecue" autofocus type="checkbox" name="barbecue"
                                                        style="margin-top: -20px;">
                                                    Barbecue </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="oven"  v-model="biens.eqpm_four" autofocus type="checkbox" name="oven"
                                                        style="margin-top: -20px;">
                                                    Four </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="dishwasher" v-model="biens.eqpm_lave_vaiselle" autofocus type="checkbox"
                                                        name="dishwasher" style="margin-top: -20px;">
                                                    Lave-vaisselle </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="electric_kettle" v-model="biens.eqpm_bouilloir_electrique" autofocus type="checkbox"
                                                        name="electric_kettle" style="margin-top: -20px;">
                                                    Bouilloire électrique </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="cooking_tools" v-model="biens.eqpm_ustensile" autofocus type="checkbox"
                                                        name="cooking_tools" style="margin-top: -20px;">
                                                    Ustensiles de cuisine </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="microwave" v-model="biens.eqpm_micro_ondes" autofocus type="checkbox" name="microwave"
                                                        style="margin-top: -20px;">
                                                    Micro-ondes </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="fridge" v-model="biens.eqpm_refrigerateur" autofocus type="checkbox" name="fridge"
                                                        style="margin-top: -20px;">
                                                    Réfrigérateur </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="coffee_machine" v-model="biens.eqpm_machine_cafe" autofocus type="checkbox"
                                                        name="coffee_machine" style="margin-top: -20px;">
                                                    Machine à café </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="kitchenette" v-model="biens.eqpm_kitchenette" autofocus type="checkbox"
                                                        name="kitchenette" style="margin-top: -20px;">
                                                    Kitchenette </label>

                                            </div>

                                            <!--Extérieur/Vues-->
                                            <label class="form-label" style="font-weight: 900;color:#5143d9"
                                                for="">Extérieur/Vues</label>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="balcony" v-model="biens.eqpm_balcon" autofocus type="checkbox" name="balcony"
                                                        style="margin-top: -20px;">
                                                    Balcon </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="terrace" v-model="biens.eqpm_terasse" autofocus type="checkbox" name="terrace"
                                                        style="margin-top: -20px;">
                                                    Terrasse </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="pool" autofocus type="checkbox"  v-model="biens.eqpm_piscine_pb" name="pool"
                                                        style="margin-top: -20px;">
                                                    Piscine </label>

                                            </div>

                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="city_view" v-model="biens.eqpm_vue_ville" autofocus type="checkbox" name="city_view"
                                                        style="margin-top: -20px;">
                                                    Vue sur la ville </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="lake_view" v-model="biens.eqpm_vue_lac" autofocus type="checkbox" name="lake_view"
                                                        style="margin-top: -20px;">
                                                    Vue sur le lac </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="mountain_view" autofocus type="checkbox"
                                                        name="mountain_view" style="margin-top: -20px;">
                                                    Vue sur la montagne </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="pool_view" v-model="biens.eqpm_vue_piscine" autofocus type="checkbox" name="pool_view"
                                                        style="margin-top: -20px;">
                                                    Vue sur la piscine </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="river_view" v-model="biens.eqpm_vue_riviere" autofocus type="checkbox"
                                                        name="river_view" style="margin-top: -20px;">
                                                    Vue sur la rivière </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="view_on_the_sea" v-model="biens.eqpm_vue_mer" autofocus type="checkbox"
                                                        name="view_on_the_sea" style="margin-top: -20px;">
                                                    Vue sur la mer </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="garden" v-model="biens.eqpm_jardin" autofocus type="checkbox" name="garden"
                                                        style="margin-top: -20px;">
                                                    Jardin</label>

                                            </div>
                                            <!--Accessibilité-->
                                            <label class="form-label" style="font-weight: 900;color:#5143d9"
                                                for="">Accessibilité</label>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="ground_floor_accommodation" autofocus type="checkbox"
                                                        name="ground_floor_accommodation" style="margin-top: -20px;">
                                                    Logement entièrement situé au rez-de-chaussée </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="fully_wheelchair_accessible_accommodation" autofocus
                                                        type="checkbox" name="fully_wheelchair_accessible_accommodation"
                                                        style="margin-top: -20px;">
                                                    Logement entièrement accessible en fauteuil roulant </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="upper_floors_accessible_elevator" autofocus
                                                        type="checkbox" name="upper_floors_accessible_elevator"
                                                        style="margin-top: -20px;">
                                                    Étages supérieurs accessibles par ascenseur </label>

                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="upper_floors_accessible_only_stairs" autofocus
                                                        type="checkbox" name="upper_floors_accessible_only_stairs"
                                                        style="margin-top: -20px;">
                                                    Étages supérieurs accessibles uniquement par les escaliers </label>
                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="toilets_with_grab_bars" autofocus type="checkbox"
                                                        name="toilets_with_grab_bars" style="margin-top: -20px;">
                                                    Toilettes avec barres d'appui </label>
                                            </div>
                                            <!--Caractéristiques du bâtiment-->
                                            <label class="form-label" style="font-weight: 900;color:#5143d9"
                                                for="">Caractéristiques du bâtiment</label>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="independent" autofocus type="checkbox"
                                                        name="independent" style="margin-top: -20px;">
                                                    Indépendant </label>
                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="private_apartment_in_building" autofocus
                                                        type="checkbox" name="private_apartment_in_building"
                                                        style="margin-top: -20px;">
                                                    Appartement privé dans un immeuble </label>
                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="semi_detached" autofocus type="checkbox"
                                                        name="semi_detached" style="margin-top: -20px;">
                                                    Mitoyen </label>
                                            </div>
                                            <!--Divertissements et services aux familles-->
                                            <label class="form-label" style="font-weight: 900;color:#5143d9"
                                                for="">Divertissements et services aux familles</label>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="baby_safety_gates" autofocus type="checkbox"
                                                        name="baby_safety_gates" style="margin-top: -20px;">
                                                    Barrières de sécurité pour bébés </label>
                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="Board_games_puzzles" v-model="biens.eqpm_jeux_puzzles" autofocus type="checkbox"
                                                        name="Board_games_puzzles" style="margin-top: -20px;">
                                                    Jeux de société / puzzles </label>
                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="books_dvds_or_music_for_children" autofocus
                                                        type="checkbox" v-model="biens.eqpm_livres" name="books_dvds_or_music_for_children"
                                                        style="margin-top: -20px;">
                                                    Livres, DVD ou musique pour enfants </label>
                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="socket_covers_for_children" autofocus type="checkbox"
                                                        name="socket_covers_for_children" style="margin-top: -20px;">
                                                    Cache-prises pour enfants </label>
                                            </div>
                                            <label class="form-label" style="font-weight: 900;color:#5143d9"
                                                for="">Équipements de sécurité</label>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="security_agent" autofocus type="checkbox"
                                                        name="security_agent" v-model="biens.agent_securite" style="margin-top: -20px;">
                                                    Agent de sécurité </label>
                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="barbed" v-model="biens.barbele" autofocus type="checkbox" name="barbed"
                                                        style="margin-top: -20px;">
                                                    Barbelé </label>
                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="video_surveillance" v-model="biens.video_surveillance" autofocus type="checkbox"
                                                        name="video_surveillance" style="margin-top: -20px;">
                                                    Vidéo surveillance</label>
                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="presence_sensor" v-model="biens.capteur_presence" autofocus type="checkbox"
                                                        name="presence_sensor" style="margin-top: -20px;">
                                                    Capteur de présence </label>
                                            </div>
                                            <div class="col-md-4">
                                                <label class="form-label">
                                                    <input autocomplete="anti_theft" v-model="biens.antivol" autofocus type="checkbox"
                                                        name="anti_theft" style="margin-top: -20px;">
                                                    Antivol </label>
                                            </div>
                                        </div>
                                    </div>
                                    <hr>                                                           <!-- Card body -->
                                    <div class="card-body">

                                        <div class="row g-3">
                                            <!-- Select item -->
                                            <legend style="font-size: 18px">Coordonnées GPS</legend>
                                            <div class="describe-block">
                                                <p class="describe-text">
                                                    Lorsque les clients consulterons vôtre établissements, ils pourrons aussi la
                                                    rétrouver sur la carte (Google Maps).
                                                </p>
                                            </div>
                                                <!-- City -->
                                                <div class="col-md-6">
                                                <label class="form-label">Longitude:</label>
                                                <input autocomplete="longitude" v-model="biens.localisation_longitude" autofocus
                                                    class="form-control" name="longitude"
                                                    type="text" id="longitude" readonly placeholder="Longitude">
                                               
                                            </div>
                                                <div class="col-md-6">
                                                <label class="form-label">Latitude:</label>
                                                <input autocomplete="latitude" autofocus v-model="biens.localisation_latitude"
                                                    class="form-control" name="latitude"
                                                    type="text" id="latitude" readonly placeholder="Latitude">
                                              
                                            </div>
                                                <div class="col-md-4">
                                                    <label class="form-label">
                                                        <input @change="getLocation()" id="getLocationCheckbox" autofocus type="checkbox" style="margin-top: -20px;">
                                                         Cliquer pour obtenir les coordonnées </label>
                                                </div>
                                            <br>
                                        </div>
                                    </div>
                                     <!-- Card body -->
                                     <hr>
                                     <div class="card-body">
                                                <div class="row g-3">
                                                    <!-- Car name -->
                                                    <!-- State -->
                                                    <!-- car type -->
                                                </div>
                                            </div>

                                </div>

                                      
                                      </el-row>
                                      <el-row>
                                        <el-col :span="11">
                                            <el-button v-if="active === 2" @click="prec" type="warning" style="width: 100%; margin-top: 10px; font-size: 18px"><i class="el-icon-back el-icon-back"></i> Etape précédente</el-button>
                                        </el-col>
                                        <el-col :span="1">.</el-col>
                                        <el-col :span="12">
                                            <el-button v-if="active === 2" @click="next" type="primary" style="width: 100%; margin-top: 10px; font-size: 18px">Prochaine étape <i class="el-icon-arrow-right el-icon-right"></i></el-button>
                                        </el-col>
                                      </el-row>
                                      
                                  </div>

                                  <div class="step_zone" v-if="active === 3">
                                    <h1 style="font-size: 40px">
                                        Photos
                                    </h1>
                                    <p style="font-size: 20px">
                                        Photos des résidences
                                    </p>
                                    <el-row>

                                        <div class="card shadow">
                                            <!-- Card header -->
                                            <div class="card-header border-bottom">
                                                <h5 class="mb-0">Photosll</h5>
                                            </div>
                                            <vue-editor v-model="biens.description"></vue-editor>
                                            <!-- Card body -->
                                            <div class="card-body">
                                                
                                                <vs-progress indeterminate color="primary" v-show="chargeFichier1 == 1">primary</vs-progress>
                                                <vs-progress indeterminate color="primary" v-show="chargeFichier2 == 1">primary</vs-progress>
                                                <vs-progress indeterminate color="primary" v-show="chargeFichier3 == 1">primary</vs-progress>
                                                <vs-progress indeterminate color="primary" v-show="chargeFichier4 == 1">primary</vs-progress>
                                                <section class="card-grid pt-0">
                                                    <div class="container">
                                                        <div class="row g-2">
                                                            <!-- Image -->
                                                            <div class="col-md-6">
                                                                <a for="uploadfile-1" data-glightbox data-gallery="gallery" style="cursor:pointer">
                                                                    <div class="card card-grid-lg card-element-hover overflow-hidden" :style="{ 'background-image': 'url(' + biens.image1 + ')', 'background-position': 'center left', 'background-size': 'cover' }">
                                                                        <!-- Card hover element -->
                                                                        <div class="hover-element position-absolute w-100 h-100">
                                                                            <i class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <input id="uploadfile-1" class="form-control d-none" @change="uploadImage($event, 'c')" type="file">
                                                            </div>
                                                
                                                            <div class="col-md-6">
                                                                <!-- Card item START -->
                                                                <div class="row g-2"> 
                                                                    <!-- Image -->
                                                                    <div class="col-12">
                                                                        <a data-glightbox data-gallery="gallery" href="https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                                                                            <div class="card card-grid-sm card-element-hover card-overlay-hover overflow-hidden" :style="{ 'background-image': 'url(' + biens.image2 + ')', 'background-position': 'center left', 'background-size': 'cover' }">
                                                                                <!-- Card hover element -->
                                                                                <div class="hover-element position-absolute w-100 h-100">
                                                                                    <i class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                                                                                </div>
                                                                            </div>
                                                                        </a>	
                                                                    </div>
                                                
                                                                    <!-- Image -->
                                                                    <div class="col-md-6">
                                                                        <a data-glightbox data-gallery="gallery" href="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                                                                            <div class="card card-grid-sm card-element-hover card-overlay-hover overflow-hidden" :style="{ 'background-image': 'url(' + biens.image3 + ')', 'background-position': 'center left', 'background-size': 'cover' }">
                                                                                <!-- Card hover element -->
                                                                                <div class="hover-element position-absolute w-100 h-100">
                                                                                    <i class="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                                                                                </div>
                                                                            </div>
                                                                        </a>	
                                                                    </div>
                                                                    
                                                                    <!-- Images -->
                                                                    <div class="col-md-6">
                                                                        <div class="card card-grid-sm overflow-hidden" :style="{ 'background-image': 'url(' + biens.image4 + ')', 'background-position': 'center left', 'background-size': 'cover' }">
                                                                            <!-- Background overlay -->
                                                                            
                                                
                                                                            <!-- Popup Images -->
                                                                            <a data-glightbox="" data-gallery="gallery" href="assets/images/gallery/11.jpg" class="stretched-link z-index-9"></a>
                                                                            <a data-glightbox="" data-gallery="gallery" href="assets/images/gallery/15.jpg"></a>
                                                                            <a data-glightbox="" data-gallery="gallery" href="assets/images/gallery/16.jpg"></a>
                                                
                                                                            <!-- Overlay text -->
                                                                            
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <!-- Card item END -->
                                                                
                                                            </div>
                                                            <div style="margin-top: 20px">
                                                                <label class="form-label">Image 1</label>
                                                                <input id="uploadfile-1" class="form-control" @change="uploadImage($event, 'a')" type="file">
                                                                <label class="form-label">Image 2</label>
                                                                <input id="uploadfile-1" class="form-control" @change="uploadImage($event, 'b')" type="file">
                                                                <label class="form-label">Image 3</label>
                                                                <input id="uploadfile-1" class="form-control" @change="uploadImage($event, 'c')" type="file">
                                                                <label class="form-label">Image 4</label>
                                                                <input id="uploadfile-1" class="form-control" @change="uploadImage($event, 'd')" type="file">
                                                            </div>
                                                            </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>

                                        
                                      </el-row>
                                      <el-row>
                                        <el-col :span="11">
                                            <el-button v-if="active === 3" @click="prec" type="warning" style="width: 100%; margin-top: 10px; font-size: 18px"><i class="el-icon-back el-icon-back"></i> Etape précédente </el-button>
                                        </el-col>
                                        <el-col :span="1">.</el-col>
                                        <el-col :span="12">
                                            <el-button v-if="active === 3" @click="submitForm()" type="success" style="width: 100%; margin-top: 10px; font-size: 18px">Valider l'enregistrement</el-button>
                                        </el-col>
                                      </el-row>
                                      
                                  </div>
                                  
                                  
                                
                            </div>
                        </div>
                    </div>
                </section>
    <!-- ======================= Main content END -->
        </div>  
  
    </div>
  </template>
   <style>
   .invisible {
   display: none;
   };
   button[disabled] {
  opacity: 0.5;
}
</style>
  <script>
  import Dropzone from "dropzone";
  import Stepper from "bs-stepper"; 
  import Choices from 'choices.js';
  import flatpickr from 'flatpickr';
  import '@/assets/vendor/dropzone/css/dropzone.css'
  import { encryptData } from '@/cryptoUtils';
  export default {
    name: 'HomeView',
    computed: {
        users() {
      return this.$store.state.users;
        },
        biens() {
      return this.$store.state.biens;
        }
      },
    data() {
      return {
        isWhatsApp: null,
        erreurLibelle: false,
        erreurNom: false,
        erreurContact: false,
        erreurAdresse: false,
        erreurVille: false,
        erreurTarif: false,
        erreurImage: false,
        datas: [],
        datasBiens: [],
        startTime: '',
        chargeFichier1 : 0,
        chargeFichier2 : 0,
        chargeFichier3 : 0,
        chargeFichier4 : 0,
        petit_dej: false,
        langue: false,
        endTime: '',
        reductionjour: 0,
        journee: 0,
        active: 0,
        stepper: null,
        eqpm_parking: 'Non',
        data_r: {
        libelle: '',
        type_item: '',
        nm_prop_item: '',
        pren_prop_item: '',
        cnt_prop_item: '',
        eml_prop_item: '',
        adresse_item: '',
        ville_item: '',
        commune_item: '',
        quartier_item: '',
        zone_item: '',
        contact_item: '',
        apt_item: '',
        nb_apt_item: '',
        nb_chb_item: '1',
        nb_sal_item: '0',
        nb_sb_item: '1',
        tarif_jour: '',
        tarif_journee: '',
        tarif_nuit: '',
        nb_jour_reduction: '',
        tarif_jour_reduction: '',
        description: '',
        eqpm_parking: 0,
        eqpm_petit_dej: 0,
        eqpm_langue1: 'Langue 1',
        eqpm_langue2: 'Langue 2',
        eqpm_langue3: 'Langue 3',
        eqpm_evenement: 0,
        event_anniversaire: 0,
        event_mariage: 0,
        event_bapteme: 0,
        event_tournage: 0,
        event_festivite: 0,
        eqpm_climatisation: 0,
        eqpm_piscine_pb: 0,
        eqpm_piscine_pv: 0,
        eqpm_seche_linge: 0,
        eqpm_armoire: 0,
        eqpm_moquette: 0,
        eqpm_dressing: 0,
        eqpm_ventilateur: 0,
        eqpm_chauffage: 0,
        eqpm_fer_repasse: 0,
        eqpm_mt_repasse: 0,
        eqpm_moustiquaire: 0,
        eqpm_canape_chambre: 0,
        eqpm_balcon: 0,
        eqpm_lave_linge: 0,
        eqpm_bureau: 0,
        eqpm_bar: 0,
        eqpm_baignoire: 0,
        eqpm_peignoire: 0,
        eqpm_jacuzzi: 0,
        eqpm_sauna: 0,
        eqpm_seche_cheveu: 0,
        eqpm_papier_toilette: 0,
        eqpm_ordinateur: 0,
        eqpm_lecteur_dvd: 0,
        eqpm_telephone: 0,
        eqpm_internet: 0,
        eqpm_fax: 0,
        eqpm_chaine_sat: 0,
        eqpm_tv: 0,
        eqpm_table_mange: 0,
        eqpm_ustensile: 0,
        eqpm_machine_cafe: 0,
        eqpm_barbecue: 0,
        eqpm_four: 0,
        eqpm_lave_vaiselle: 0,
        eqpm_micro_ondes: 0,
        eqpm_kitchenette: 0,
        eqpm_bouilloir_electrique: 0,
        eqpm_refrigerateur: 0,
        eqpm_vue_ville: 0,
        eqpm_vue_piscine: 0,
        eqpm_vue_riviere: 0,
        eqpm_vue_mer: 0,
        eqpm_jardin: 0,
        eqpm_terasse: 0,
        eqpm_vue_lac: 0,
        eqpm_jeux_puzzles: 0,
        eqpm_livres: 0,
        agent_securite: 0,
        video_surveillance: 0,
        capteur_presence: 0,
        antivol: 0,
        barbele: 0,
        localisation_longitude: '',
        localisation_latitude: '',
        image1: 'http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1708450283/2024120173149422.jpg',
        image2: 'http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1708450290/2024120173175629.jpg',
        image3: 'http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1708450296/2024120173195235.jpg',
        image4: 'http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1708450305/2024120173196943.jpg',
        user: '',
        date_item: '',
        autorisation: '',
        statut: '',
        autoriseur: '',
        chb_1_nb_lit: '',
        chb_1_lit: '',
        chb_1_nb_personne: '',
        chb_2_nb_lit: '',
        chb_2_lit: '',
        chb_2_nb_personne: '',
        chb_3_nb_lit: '',
        chb_3_lit: '',
        chb_3_nb_personne: '',
        chb_4_nb_lit: '',
        chb_4_lit: '',
        chb_4_nb_personne: '',
        chb_5_nb_lit: '',
        chb_5_lit: '',
        chb_5_nb_personne: '',
        horaire_jour_entre: '',
        horaire_jour_sorti: '',
        tarif_parking: 0,
        peti_dej_1: '',
        peti_dej_2: '',
        peti_dej_3: '',
    }
      }
    },
    created() {
    // Mettre à jour numRooms avec la valeur de this.biens.nb_chb_item si disponible
    if (this.data_r && this.biens.nb_chb_item) {
      this.numRooms = parseInt(this.biens.nb_chb_item);
    }
  },
    methods: {
        Back() {
                this.$router.back()
            },
    showNonWhatsAppField() {
      this.isWhatsApp = true;
    },
    showWhatsAppField() {
      this.isWhatsApp = false;
    },

        sakone() {
            alert('aa');
        },

      next() {
        if(this.active === 0) {
            if(this.biens.libelle.length < 5) {
            this.erreurLibelle = true;
            } else {
                this.erreurLibelle = false;
            }
            if(this.biens.nm_prop_item < 3) {
                this.erreurNom = true;
            }else {
                this.erreurNom = false;
            }
            if(this.biens.cnt_prop_item.length < 10) {
                this.erreurContact = true;
            }else {
                this.erreurContact = false;
            }
            if(this.biens.adresse_item.length < 5) {
                this.erreurAdresse = true;
            }else {
                this.erreurAdresse = false;
            }
            if(this.biens.ville_item.length < 5) {
                this.erreurVille = true;
            }else {
                this.erreurVille = false;
            }
            if(!this.erreurLibelle && !this.erreurNom && !this.erreurContact && !this.erreurAdresse && !this.erreurVille) {
                if (this.active++ > 2) this.active = 0;
                this.$store.commit('BiensAjout', this.biens);
                this.scrollToTop();
                this.$store.commit('ActiveForm', this.active);
            } else {
                this.$message({
                    message: 'Veuillez renseiller tous les champs',
                    type: 'error'
                    });
                this.scrollToTop();
            }
        }
        
        else if(this.active === 1) {

            if(this.biens.tarif_jour.length < 4) {
                this.erreurTarif = true;
                this.$store.commit('BiensAjout', this.biens);

                this.$message({
                    message: 'Veuillez renseiller tous les champs',
                    type: 'error'
                    });
                this.scrollToTop();
            } else {
                this.$store.commit('BiensAjout', this.biens);
                this.erreurTarif = false;
                if (this.active++ > 2) this.active = 0;
                this.scrollToTop();
            }
        }

        else if(this.active === 2) {
            this.$store.commit('BiensAjout', this.biens);
            if (this.active++ > 2) this.active = 0;
            this.scrollToTop();
        }

        else if(this.active === 3) {
            if(this.biens.image1 === 'http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1708450283/2024120173149422.jpg' || this.biens.image2 === 'http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1708450290/2024120173175629.jpg' || this.biens.image3 === 'http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1708450296/2024120173195235.jpg' || this.biens.image4 === 'http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1708450305/2024120173196943.jpg') {
                this.erreurImage = true;
                this.$store.commit('BiensAjout', this.biens);
                this.$message({
                    message: 'Veuillez ajouter les quartres images',
                    type: 'error'
                    });
                this.scrollToTop();
            } else {
                this.$store.commit('BiensAjout', this.biens);
                this.erreurImage = false;
                if (this.active++ > 2) this.active = 0;
                this.scrollToTop();
            }
        }
        
      },

      prec() {
        this.active--;
        this.$store.commit('BiensAjout', this.biens);
      },

      scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Permet un défilement fluide
        });
        },

      VideChamp() {
        this.$store.commit('BiensAjout', this.data_r);
      },

      uploadImage(e, a) {
        console.log('choix');

            if(a === 'a') {
              this.chargeFichier1 = 1;
            }
            if(a === 'b') {
              this.chargeFichier2 = 1;
            }
            if(a === 'c') {
              this.chargeFichier3 = 1;
            }
            if(a === 'd') {
              this.chargeFichier4 = 1;
            }
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.image = files[0]; 

            let formData = new FormData();
            let uploadPreset = "dsegjq9c"
            let cloudinaryUrl = "https://api.cloudinary.com/v1_1/r-sidence-meubl-e/upload"
            this.annee = this.printYear();
            formData.append('file', this.image);
            formData.append('public_id', this.annee);
            formData.append('upload_preset', uploadPreset)

            this.$axios.post(cloudinaryUrl, formData)
            .then(res => {
                if(a === 'a') {
                  this.chargeFichier1 = 2;
                  this.biens.image1 = res.data.url;
                }
                if(a === 'b') {
                  this.chargeFichier2 = 2;
                  this.biens.image2 = res.data.url;
                }
                if(a === 'c') {
                  this.chargeFichier3 = 2;
                  this.biens.image3 = res.data.url;
                  //this.sendPhotoToServer();
                }
                if(a === 'd') {
                  this.chargeFichier4 = 2;
                  this.biens.image4 = res.data.url;
                  //this.sendPhotoToServer();
                }
            })
            .catch(err => {
                console.log(err)
            })
        },

        printYear: function () {
                return new Date().getFullYear() + 
                '' + new Date().getMonth()+ 
                '' + new Date().getDate()+
                '' + new Date().getHours()+
                '' + new Date().getMinutes()+
                '' + new Date().getMilliseconds()+
                '' + new Date().getSeconds();
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

      getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition);
            } else {
                console.log("La géolocalisation n'est pas prise en charge par ce navigateur.");
            }
        },
        showPosition(position) {
            this.biens.localisation_latitude = position.coords.latitude;
            this.biens.localisation_longitude = position.coords.longitude;
        },

    submitForm() {
        if(this.active === 3) {
            if(this.biens.image1 === 'http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1708450283/2024120173149422.jpg' || this.biens.image2 === 'http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1708450290/2024120173175629.jpg' || this.biens.image3 === 'http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1708450296/2024120173195235.jpg' || this.biens.image4 === 'http://res.cloudinary.com/r-sidence-meubl-e/image/upload/v1708450305/2024120173196943.jpg') {
                this.erreurImage = true;
                this.$vs.notify({title:'Image Manquant',text:'Ajoutez les quatres (4) Images',color:'danger',position:'top-center'})
                this.scrollToTop();
            } else {
                this.erreurImage = false;
                
                this.$vs.loading();

                // Envoyer la requête au serveur
                this.biens.user = this.users.id;
                this.$axios.post('/biens.php', this.biens)
                .then(response => {
                // Traitement de la réponse du serveur
                console.log(response);
                this.$vs.loading.close();
                this.$vs.notify({title:'Succès',text:'Ajouté avec Succès',color:'danger',position:'top-center'})
                this.$router.push({ path: '/biens' });
                })
                .catch(error => {
                // Gestion des erreurs
                console.error(error);
                this.$vs.loading.close()
                });
                }
            }
        
        },

    routeVerif() {
        if(this.users.id.length < 1) {
            this.$router.push({ path: '/login' });
            }
        }

    },
    mounted() {
      this.routeVerif();
      new Dropzone(".dropzone-custom", {
            maxFiles: 5,
            addRemoveLinks: false,
            // Autres options Dropzone...
        });
        this.stepper = new Stepper(document.querySelector('.bs-stepper'));

    // Exemple d'utilisation de flatpickr
    flatpickr(this.$refs.myDatePicker, {
      // Options de configuration ici
    });
    const select = new Choices(this.$refs.mySelect, {
      // Options de configuration ici
      
    });
    console.log(select);
  }
}
  </script>
  
