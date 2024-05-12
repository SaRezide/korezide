import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResultList from '../views/Result-liste.vue'
import ResultGrid from '../views/Result-grid.vue'
import DetailResult from '../views/Details-result.vue'
import DetailTest from '../views/Details-test.vue'

import AjoutResidence from '../components/dashboard/Ajout_residence.vue'
import ModifResidence from '../components/dashboard/Modif_residence.vue'


/* DASHBOARD ADMINISTRATEUR */
import AdminValidationResidences from '../components/admin/Validation_residences.vue'
import AdminValidationReservations from '../components/admin/Validation_reservations.vue'


/* DASHBOARD AGENT */
import Dashboard from '../components/dashboard/Dashboard.vue'
import Biens from '../components/dashboard/Biens.vue'
import ReservationAgent from '../components/dashboard/Reservations.vue'
import ProfileAgent from '../components/dashboard/Profile.vue'

/* DASHBOARD CLIENT */
import DashboardClient from '../components/client/Dashboard.vue'
import ReservationClients from '../components/client/Reservations.vue'
import FavorisClient from '../components/client/Favoris.vue'


import ValidationResidence from '../views/Validation_residence.vue'
import ValidationReservation from '../views/Validation_reservation.vue'
import Reservation from '../views/Reservation.vue'
import Reservation_id from '../views/Reservation_id.vue'

import Login from '../components/authentification/Login.vue'
import LoginClient from '../components/client/Login.vue'

import Inscription from '../components/authentification/Inscription.vue'
import InscriptionClient from '../components/client/Inscription.vue'

import PassForget from '../components/authentification/Login_oublie.vue'
import PassForgetClient from '../components/client/Login_oublie.vue'

import TokenVerify from '@/components/authentification/Token_verify.vue'
import ChangePassword from '@/components/authentification/ChangePassword.vue'

import HelpCenter from '@/views/HelpCenter.vue'

import ContactView from '@/views/ContactView.vue'

import AboutView from '../views/AboutView.vue'

import PrivacyPolicy from '@/views/PrivacyPolicy.vue'

import TermsOfService from '@/views/TermsOfService.vue'

import CodeParrainage from '@/components/dashboard/CodeParrainage.vue'

import ParametreView from '@/components/dashboard/ParametreView.vue'

import RechercheSauvegarde from '@/components/client/RechercheSauvegarde.vue'

import NotificationClient from '@/components/client/NotificationClient.vue'

import ActiviteView from '@/components/dashboard/ActiviteView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: ContactView
  },
  {
    path: '/help-center',
    name: 'HelpCenter',
    component: HelpCenter
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
  {
    path: '/terms-of-service',
    name: 'TermsOfService',
    component: TermsOfService
  },
  {
    path: '/resultat-list',
    name: 'ResultList',
    component: ResultList
  },
  {
    path: '/resultat-grid',
    name: 'ResultGrid',
    component: ResultGrid
  },
  {
    path: '/details-resultat/:param',
    name: 'DetailResult',
    component: DetailResult,
    props: true
  },
  {
    path: '/details-test/:param',
    name: 'DetailTest',
    component: DetailTest,
    props: true
  },
  {
    path: '/validation_reservation',
    name: 'ValidationReservation',
    component: ValidationReservation,
    props: true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    props: true
  },
  {
    path: '/login_client',
    name: 'LoginClient',
    component: LoginClient,
    props: true
  },
  {
    path: '/inscription', 
    name: 'Inscription',
    component: Inscription,
    props: true
  },
  {
    path: '/inscription_client',
    name: 'InscriptionClient',
    component: InscriptionClient,
    props: true
  },
  {
    path: '/mot_de_passe_oublie',
    name: 'PassForget',
    component: PassForget,
    props: true
  },
  {
    path: '/mot_de_passe_oublie_client',
    name: 'PassForgetClient',
    component: PassForgetClient,
    props: true
  },
  {
    path: '/token_verify',
    name: 'TokenVerify',
    component: TokenVerify,
    props: true
  },

  {
    path: '/change_password',
    name: 'ChangePassword',
    component: ChangePassword,
    props: true
  },

  /* DASHBOARD ROUTES */ 

  {
    path: '/ajout_residence',
    name: 'AjoutResidence',
    component: AjoutResidence,
    props: true
  },
  {
    path: '/modif_residence',
    name: 'ModifResidence',
    component: ModifResidence,
    props: true
  },

  /* DASHBOARD AGENT */ 
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    props: true
  },
  {
    path: '/biens',
    name: 'Biens',
    component: Biens,
    props: true
  },
  {
    path: '/reservations_agent',
    name: 'ReservationAgent',
    component: ReservationAgent,
    props: true
  },
  {
    path: '/profile_agent',
    name: 'ProfileAgent',
    component: ProfileAgent,
    props: true
  },

  /* DASHBOARD CLIENT */ 
  {
    path: '/dashboard_client',
    name: 'DashboardClient',
    component: DashboardClient,
    props: true
  },
  {
    path: '/reservations_clients',
    name: 'ReservationClients',
    component: ReservationClients,
    props: true
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: Reservation,
    props: true
  },
  {
    path: '/reservation_id',
    name: 'Reservation_id',
    component: Reservation_id,
    props: true
  },
  {
    path: '/favoris_clients',
    name: 'FavorisClient',
    component: FavorisClient,
    props: true
  },

  {
    path: '/recherche_sauvegarde',
    name: 'RechercheSauvegarde',
    component: RechercheSauvegarde,
    props: true
  },

  {
    path: '/validation_residence',
    name: 'ValidationResidence',
    component: ValidationResidence,
    props: true
  },

  {
    path: '/code_parrainage',
    name: 'CodeParrainage',
    component: CodeParrainage,
    props: true
  },

  {
    path: '/parametres',
    nema: 'Parametres',
    component: ParametreView,
    props: true

  },

  {
    path: '/notification_client',
    nema: 'NotificationClient',
    component: NotificationClient,
    props: true

  },

  {
    path: '/activites',
    nema: 'Activites',
    component: ActiviteView,
    props: true

  },

   /* DASHBOARD ADMINISTRATEUR */ 
   {
    path: '/admin_validation_residences',
    name: 'AdminValidationResidences',
    component: AdminValidationResidences,
    props: true
  },
  {
    path: '/admin_validation_reservations',
    name: 'AdminValidationReservations',
    component: AdminValidationReservations,
    props: true
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
