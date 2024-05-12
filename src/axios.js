import Vue from 'vue';
import axios from 'axios';

// Configurer l'URL de base pour les requêtes (si nécessaire)
axios.defaults.baseURL = 'https://korezide.com/appi_sarezide';

// Ajouter un intercepteur pour inclure le code d'autorisation dans chaque requête
const authorizationCode = 'votre_code_d_autorisation';

// Ajouter une fonction utilitaire pour ajouter le code d'autorisation aux requêtes
function addAuthorizationCode(config) {
  // Inclure le code d'autorisation dans les paramètres de chaque requête GET
  if (config.method === 'get') {
    config.params = config.params || {};
    config.params.authorization_code = authorizationCode;
  }
  return config;
}
// Ajouter un intercepteur pour gérer les erreurs globalement
axios.interceptors.response.use(
  response => response,
  error => {
    // Gérer les erreurs ici
    console.error('Erreur Axios:', error);
    return Promise.reject(error);
  }
);

axios.interceptors.request.use(addAuthorizationCode);

// Attacher Axios à l'instance Vue pour un accès global dans les composants
Vue.prototype.$axios = axios;