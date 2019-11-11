'use strict'
export default {
    template: `
            <section class ="header">
            <div class="nav-bar base-container flex row align-center space-between">
               <div class="logo-name">
                  APPSUS 
               </div>
               <button v-if="!isOpenMenu" class="menu-btn" @click="toggleMenu" >☰</button>
               <nav class="main-nav" :class="isOpen">
                    <div class="menu-cancel" @click="toggleMenu">X</div>
                    <router-link to="/" class="link">Home</router-link> 
                    <router-link to="/email/list" class="link">Email App</router-link> 
                    <router-link to="/keep" class="link">Keep App</router-link>
               </nav>
               </div>
            </section>`,
   data(){
      return{
         isOpenMenu:false
      }
   },
   methods:{
      toggleMenu(){
      this.isOpenMenu = !this.isOpenMenu;
      }
   },
   computed:{
      isOpen(){
         return {'open-menu':this.isOpenMenu}
      }
   }
}