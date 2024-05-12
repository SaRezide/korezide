<template>
  <div v-if="isMobile">
    <div class="align-items-center">
      <div class="login-content mt-6 mb-6 mx-4">
        <div class="login-logo me-4">
          <div style="text-align: center;">
            <img class="mb-4" style="height: 150px;" src="@/assets/images/sarezide-2.png" alt="logo">
          </div>
        </div>
        <div class="login-title">
          <h2 class="mb-2 h3">Réinitialiser le mot de passe</h2>
          <p class="mb-0" style="font-size: 14px;">Veuillez saisir votre email et un nouveau mot de passe</p>
        </div>
        <div class="login-info">
          <!-- Form START -->
          <el-alert v-show="erreur" :title="connexionMessage" type="error"></el-alert>
          <el-alert v-show="success" :title="connexionMessage" type="success"></el-alert>
          <!-- Form START -->
          <form class="mt-4 text-start">
            <!-- Email -->
            <div class="mb-3">
              <label class="form-label">Adresse e-mail</label>
              <input type="email" class="form-control" placeholder="Veuillez saisir votre adresse e-mail" v-model="user">
            </div>
            <!-- Password -->
            <div class="mb-3 position-relative">
              <label class="form-label">Nouveau mot de passe</label>
              <input :type="inputType" class="form-control" placeholder="Saisissez un nouveau mot de passe" v-model="pass">
              <i class="field-icon" :class="showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'" @click="togglePassword"></i>
            </div>
            <!-- Confirm Password -->
            <div class="mb-3">
              <label class="form-label">Confirmez le nouveau mot de passe</label>
              <input type="password" class="form-control" placeholder="Confirmez le nouveau mot de passe" v-model="pass_verif">
            </div>
            <!-- Button -->
            <div>
              <p class="btn btn-primary w-100 mb-0" @click="ChangePassword()">Réinitialiser le mot de passe</p>
            </div>
          </form>
          <!-- Form END -->
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <!-- Main banner START -->
    <section class="vh-xxl-100">
      <div class="container h-100 d-flex px-0">
        <div class="row justify-content-center align-items-center m-auto">
          <div class="col-12">
            <div class="bg-mode shadow rounded-3 overflow-hidden">
              <div class="row g-0">
                <!-- Vector Image -->
                <div class="col-lg-6 d-md-flex align-items-center order-2 order-lg-1">
                  <div class="p-3 p-lg-5">
                    <img src="@/assets/images/element/signin.svg" alt="">
                  </div>
                  <!-- Divider -->
                  <div class="vr opacity-1 d-none d-lg-block"></div>
                </div>

                <!-- Information -->
                <div class="col-lg-6 order-1">
                  <div class="p-4 p-sm-6">
                    <!-- Logo -->
                    <a href="#">
                      <img class="h-50px mb-4" src="@/assets/images/icon.png" alt="logo">
                    </a>
                    <!-- Title -->
                    <h2 class="mb-2 h3">Réinitialiser le mot de passe</h2>

                    <el-alert v-show="erreur" :title="connexionMessage" type="error"></el-alert>
                    <el-alert v-show="success" :title="connexionMessage" type="success"></el-alert>

                    <!-- Form START -->
                    <form class="mt-4 text-start">
                      <!-- Email -->
                      <div class="mb-3">
                        <label class="form-label">Adresse e-mail</label>
                        <input type="email" class="form-control" placeholder="Veuillez saisir votre adresse e-mail" v-model="user">
                      </div>
                      <!-- Password -->
                      <div class="mb-3 position-relative">
                        <label class="form-label">Nouveau mot de passe</label>
                        <input :type="inputType" class="form-control" placeholder="Saisissez un nouveau mot de passe" v-model="pass">
                        <i class="field-icon" :class="showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'" @click="togglePassword"></i>
                      </div>
                      <!-- Confirm Password -->
                      <div class="mb-3">
                        <label class="form-label">Confirmez le nouveau mot de passe</label>
                        <input type="password" class="form-control" placeholder="Confirmez le nouveau mot de passe" v-model="pass_verif">
                      </div>
                      <!-- Button -->
                      <div>
                        <p class="btn btn-primary w-100 mb-0" @click="ChangePassword()">Réinitialiser le mot de passe</p>
                      </div>
                      <div class="position-relative my-4">
                        <hr style="color: gray">
                      </div>
                      <!-- Copyright -->
                      <div class="text-primary-hover mt-3 text-center">Copyrights ©2024 SaRezide.</div>
                    </form>
                    <!-- Form END -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { isMobile } from 'mobile-device-detect';

export default {
  name: 'ChangePassword',
  components: {},
  data() {
    return {
      isMobile: isMobile,
      showPassword: false,
      user: '',
      pass: '',
      pass_verif: '',
      userEmail: this.$route.params.email,
      connexionMessage: '',
      erreur: false,
      success: false,
    };
  },
  computed: {
    inputType() {
      return this.showPassword ? 'text' : 'password';
    },
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    ChangePassword() {

      if (!this.user || !this.pass || !this.pass_verif) {
        this.erreur = true;
        this.connexionMessage = 'Veuillez remplir tous les champs.';
        return;
      }
      if (this.user !== this.userEmail) {
        this.erreur = true;
        this.connexionMessage = "L'e-mail saisi ne correspond pas à celui pour lequel la réinitialisation de mot de passe a été demandée.";
        return;
      }

      if (this.pass !== this.pass_verif) {
        this.erreur = true;
        this.connexionMessage = 'Les mots de passe ne correspondent pas.';
        return;
      }

      const requestData = {
        email: this.user,
        mdp: this.pass,
      };

      this.$vs.loading();

      this.$axios
        .post('/change_password.php', requestData)
        .then((response) => {
          this.verif(response);
          this.$vs.loading.close();

          if (response.data.valide === 1) {
            this.$router.push({ name: 'Login' });
          }
        })
        .catch((error) => {
          console.error(error);
          this.$vs.loading.close();
        });
    },
    verif(data) {
      console.log(data);
      if (data.data.valide == 2) {
        this.erreur = true;
        this.connexionMessage = data.data.mes;
      }
      if (data.data.valide == 1) {
        this.erreur = false;
        this.success = true;
        this.connexionMessage = data.data.mes;
      }
    },
  },
  mounted() {
    if (!this.$route.params.fromTokenVerify) {
      this.$router.push({ name: 'TokenVerify' });
    }
  },
};
</script>
