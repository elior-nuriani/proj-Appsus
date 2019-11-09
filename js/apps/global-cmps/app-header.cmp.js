'use strict'
export default {
    template: `
            <section class ="header">
            <div class="nav-bar base-container flex row align-center space-between">
               <div class="logo-name">
                  APPSUS  
               </div>
               <nav>
                    <router-link to="/" class="link">Home</router-link> 
                    <router-link to="/email/list" class="link">Email App</router-link> 
                    <router-link to="/keep" class="link">Keep App</router-link>
               </nav>
               </div>
            </section>`
}