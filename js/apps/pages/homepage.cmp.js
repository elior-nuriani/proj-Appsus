'use strict'

export default {
    template: `<section class="home flex row center">
                    <div class="homepage-main-box flex column">
                        <h3>Welcome To
                           <span class="logo-name"> APPSUS </span>
                        </h3>
                        <h2>Discover Our Latest Apps </h2>
                    </div>
                    <div class="offcanvas-btn" @click="toggleContact" :class="toggleClassBtn">
                        <i class="fas fa-pen"></i>
                    </div>
                    <aside class="offcanvas-aside" :class="toggleClassAside">
                        
                    </aside>
                </section>`
    ,
    data(){
        return{
            isOpenContact:false
        }
    },
    methods:{
        toggleContact(){
            this.isOpenContact = !this.isOpenContact
        }
    },
    computed:{
        toggleClassBtn(){
            return {'offcanvas-btn-open': this.isOpenContact}
        },
        toggleClassAside(){
            return {'offcanvas-aside-open': this.isOpenContact}
        }
    }
}