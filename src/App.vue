<template>
  <div id="app">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <Navbar v-if="!isMobile"/>
    <router-view/>
    <Footer v-if="!isMobile"/>
    <button id="installButton" style="display: none;">Installer</button>
  </div>
</template>
<script>
import { isMobile } from 'mobile-device-detect';
import Navbar from './components/Navbar.vue'; // Importez le composant Navbar
import Footer from './components/Footer.vue'; // Importez le composant Navbar

export default {
  components: {
    Navbar,
    Footer // Enregistrez le composant VueB pour pouvoir l'utiliser dans l'application
  },
  data() {
    return {
      datas: [],
      isMobile: isMobile,
    }
  },
  // Logique de l'application principale
}
</script>
<!-- Vendors -->

<!-- ThemeFunctions -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
