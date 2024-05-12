<template>
  <div>
    <!-- Responsive offcanvas body START -->
    <div class="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasSidebar">
      <!-- Offcanvas header -->
      <div class="offcanvas-header justify-content-end pb-2">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          data-bs-target="#offcanvasSidebar"
          aria-label="Close"
        ></button>
      </div>

      <!-- Offcanvas body -->
      <div class="offcanvas-body p-3 p-lg-0">
        <div class="card bg-white w-100 menu-account">
          <!-- Edit profile button -->
          <div class="position-absolute top-0 end-0 p-3">
            <router-link
              to="/profile_agent"
              class="text-primary-hover"
              data-bs-title="Edit profile"
            >
              <i class="bi bi-pencil-square"></i>
            </router-link>
          </div>

          <!-- Card body START -->
          <div class="card-body p-3">
            <!-- Avatar and content -->
            <div class="text-center mb-3">
              <!-- Avatar -->
              <div class="avatar avatar-xl mb-2">
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
              </div>
              <h6 class="mb-2" v-if="users.nom.length > 1">
                {{ users.nom }} {{ users.prenom }}
              </h6>
              <h6 v-else>
                Bonjour cher(e) membre, veuillez complèter votre profil
              </h6>
              <img :src="users.flag" style="height:12px; margin-top: -4px" class="me-2" />  <h6 style="font-size: 13px"> {{ users.pays }}</h6>


              <h6>
                <vs-tooltip
                  style="font-size: 13px"
                  text="Votre adresse email a été vérifié"
                >
                  <i class="bi bi-patch-check-fill text-success me-1"></i>
                  {{ users.email }}
                </vs-tooltip>
              </h6>

              <h6>
                <vs-tooltip
                  v-if="users.contact"
                  style="font-size: 13px;"
                  text="Votre numéro n'est pas vérifié"
                >
                  <i class="bi bi-patch-exclamation-fill text-danger me-1"></i>
                  {{ users.contact }}
                </vs-tooltip>
              </h6>

              <hr />
            </div>

            <ul class="nav nav-pills-primary-soft flex-column">
              <!-- Menu items for Administration -->
              <div class="menu mb-4">
                <h5 class="mx-0">Menu Administrateur</h5>
                <div class="bg-white mx-0 py-1 menu-account">
                  <h6 class="mx-3 mt-3" style="font-size: 14px; color: grey">
                    Administration
                  </h6>
                  <!-- Define router-links for each menu item -->
                  <div class="mx-2">
                    <router-link
                      to="/admin_validation_residences"
                      class="d-flex justify-content-between mb-3 align-items-center"
                      :class="{
                        'menu-active': isActive('/admin_validation_residences'),
                      }"
                    >
                      <p class="fw-normal fs-6 mb-0">
                        Résidences en cours de validation
                      </p>
                      <i class="fa-solid fa-suitcase-rolling me-2"></i>
                    </router-link>
                    <router-link
                      to="/admin_validation_reservations"
                      class="d-flex justify-content-between mb-3 align-items-center"
                      :class="{
                        'menu-active': isActive(
                          '/admin_validation_reservations'
                        ),
                      }"
                    >
                      <p class="fw-normal fs-6 mb-0">Liste des réservations</p>
                      <i class="fa-solid fa-paper-plane me-2"></i>
                    </router-link>
                  </div>
                  <!-- Add more menu items as needed -->
                </div>
              </div>
              <!-- Menu items for User Account -->
              <div class="menu mb-4">
                <h5 class="mx-1">Menu</h5>
                <div class="bg-white mx-0 py-1 menu-account">
                  <h6 class="mx-3 mt-3" style="font-size: 14px; color: grey">
                    Compte
                  </h6>
                  <!-- Define router-links for each menu item -->
                  <div class="mx-3">
                    <router-link
                      to="/reservations_clients"
                      class="d-flex justify-content-between mb-3 align-items-center"
                      :class="{
                        'menu-active': isActive('/reservations_clients'),
                      }"
                    >
                      <p class="fw-normal fs-6 mb-0">Mes réservations</p>
                      <i class="fa-solid fa-suitcase-rolling me-2"></i>
                    </router-link>
                    <router-link
                      to="/reservation_id"
                      class="d-flex justify-content-between mb-3 align-items-center"
                      :class="{ 'menu-active': isActive('/reservation_id') }"
                    >
                      <p class="fw-normal fs-6 mb-0">Suivre ma réservation</p>
                      <i class="fa-solid fa-paper-plane me-2"></i>
                    </router-link>
                    <router-link
                      to="/notification_client"
                      class="d-flex justify-content-between mb-3 align-items-center"
                      :class="{ 'menu-active': isActive('/notification_client') }"
                    >
                      <p class="fw-normal fs-6 mb-0">Notifications</p>
                      <i class="bi bi-app-indicator me-2"></i>
                    </router-link>
                    <router-link
                      to="/code_parrainage"
                      class="d-flex justify-content-between mb-3 align-items-center"
                      :class="{ 'menu-active': isActive('/code_parrainage') }"
                    >
                      <p class="fw-normal fs-6 mb-0">Mon code parrainage</p>
                      <i class="fa-solid fa-ticket me-2"></i>
                    </router-link>
                  </div>
                  <!-- Add more menu items as needed -->
                </div>
              </div>
              <!-- Menu items for User Preferences -->
              <div class="preference mb-4">
                <div class="bg-white mx-0 py-1 menu-account">
                  <h6 class="mx-3 mt-3" style="font-size: 14px; color: grey">
                    Préférences
                  </h6>
                  <div class="mx-3">
                    <!-- Define router-links for each menu item -->
                    <router-link
                      to="/favoris_clients"
                      class="d-flex justify-content-between mb-3 align-items-center"
                      :class="{ 'menu-active': isActive('/favoris_clients') }"
                    >
                      <p class="fw-normal fs-6 mb-0">
                        Mes établissements favoris
                      </p>
                      <i class="fa-solid fa-heart me-2"></i>
                    </router-link>
                    <router-link
                      to="/recherche_sauvegarde"
                      class="d-flex justify-content-between mb-3 align-items-center"
                      :class="{ 'menu-active': isActive('/recherche_sauvegarde') }"
                    >
                      <p class="fw-normal fs-6 mb-0">
                        Mes recherches sauvegardées
                      </p>
                      <i class="fa-solid fa-floppy-disk me-2"></i>
                    </router-link>
                    <!-- Add more menu items as needed -->
                    <router-link
                      to="/parametres"
                      class="d-flex justify-content-between mb-3 align-items-center"
                      :class="{ 'menu-active': isActive('/parametres') }"
                    >
                      <p class="fw-normal fs-6 mb-0">Mes paramètres</p>
                      <i class="fa-solid fa-gear me-2"></i>
                    </router-link>
                  </div>
                </div>
              </div>
              <!-- Menu items for Partners -->
              <div class="partners mb-4">
                <div class="bg-white mx-0 py-1 menu-account">
                  <h6 class="mx-3 mt-3" style="font-size: 14px; color: grey">
                    Partenaires
                  </h6>
                  <div class="mx-3">
                    <!-- Define router-links for each menu item -->
                    <router-link
                      to="/ajout_residence"
                      class="d-flex justify-content-between mb-3 align-items-center"
                      :class="{ 'menu-active': isActive('/ajout_residence') }"
                    >
                      <p class="fw-normal fs-6 mb-0">
                        Inscrire mon établissement
                      </p>
                      <span class="material-icons me-2" style="font-size: 18px"
                        >add_home_work</span
                      >
                    </router-link>
                    <router-link
                      to="/biens"
                      class="d-flex justify-content-between mb-3 align-items-center"
                      :class="{
                        'menu-active': isActive('/biens'),
                      }"
                    >
                      <p class="fw-normal fs-6 mb-0">Mes établissements</p>
                      <i class="bi bi-buildings-fill me-2 mb-0"></i>
                    </router-link>
                    <router-link
                      to="/reservations_agent"
                      class="d-flex justify-content-between mb-3 align-items-center"
                      :class="{
                        'menu-active': isActive('/reservations_agent'),
                      }"
                    >
                      <p class="fw-normal fs-6 mb-0">Réservations</p>
                      <i class="bi bi-bookmark-heart fa-fw me-1"></i>
                    </router-link>
                    <router-link
                      to="/activites"
                      class="d-flex justify-content-between mb-3 align-items-center"
                      :class="{ 'menu-active': isActive('/activites') }"
                    >
                      <p class="fw-normal fs-6 mb-0">Activités</p>
                      <i class="bi bi-bell fa-fw me-1"></i>
                    </router-link>
                  </div>
                </div>
              </div>
              <!-- Menu items for User Profile and Account Settings -->

           
            </ul>
          </div>
          <!-- Card body END -->
        </div>
      </div>
    </div>
    <!-- Responsive offcanvas body END -->
  </div>

  <!-- Sidebar END -->
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },

  },
};
</script>
