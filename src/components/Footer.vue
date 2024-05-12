<template>
    <div class="hello">
        <!-- =======================
        Footer START -->
        <footer class="bg-white py-7">
            <div class="container">
                <div class="row mx-auto">
                    <div class="col-lg-9 mx-auto text-center">
                        <!-- Logo -->
                        <img class="mx-auto h-60px" src="@/assets/images/new-logo.png" alt="logo">
                        <p class="mt-3 text-dark">Leader de la réservation de résidences meublées et d'hôtels en Côte d'ivoire.</p>
                        <!-- Links -->
                        <ul class="nav justify-content-between text-primary-hover mt-3 mt-md-0">
                            <li class="nav-item"><router-link class="nav-link p-2 text-dark text-decoration-underline" to="/about">Qui sommes-nous ?</router-link></li>
                            <li class="nav-item"><router-link class="nav-link p-2 text-dark text-decoration-underline" to="/terms-of-service" title="Conditions générales d'utilisation">Conditions générales d'utilisation</router-link></li>
                            <li class="nav-item"><router-link class="nav-link p-2 text-dark text-decoration-underline" to="/privacy-policy" title="Politique de confidentialité">Politique de confidentialité</router-link></li>
                            <li class="nav-item"><router-link class="nav-link p-2 text-dark text-decoration-underline" to="/contact">Contactez-nous</router-link></li>
                        </ul>
                        <!-- Social media button -->
                        <ul class="list-inline mt-3 mb-0">
                            <li class="list-inline-item"> 
                                <a class="btn btn-white btn-sm shadow px-2 text-facebook" href="#">
                                    <i class="fab fa-fw fa-facebook-f"></i>
                                </a> 
                            </li>
                            <li class="list-inline-item"> 
                                <a class="btn btn-white btn-sm shadow px-2 text-instagram" href="#">
                                    <i class="fab fa-fw fa-instagram"></i>
                                </a> 
                            </li>
                            <li class="list-inline-item"> 
                                <a class="btn btn-white btn-sm shadow px-2 text-twitter" href="#">
                                    <i class="fab fa-fw fa-twitter"></i>
                                </a> 
                            </li>
                            <li class="list-inline-item"> 
                                <a class="btn btn-white btn-sm shadow px-2 text-linkedin" href="#">
                                    <i class="fab fa-fw fa-linkedin-in"></i>
                                </a> 
                            </li>
                        </ul>
                        <!-- copyright text -->
                        <div class="text-muted mt-3" style="color: #000000 !important"> Tous droits réservés 2024 <span class="sarezide-text"> <span class="sarezide-text"> <span class="sarezide-text"> SaRezide.com</span></span></span> </div>
                    </div>
                </div>
                
            </div>
        </footer>
        <!-- =======================
        Footer END -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
    props: {
      msg: String
    }
  }
  </script>
  