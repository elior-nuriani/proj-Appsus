'use strict'

import emailList from '../cmps/email-list.cmp.js'
import emailNav from '../cmps/email-nav.cmp.js'



export default {
    template: `<section class="mail-main-section flex row space-between align-start base-container">
                    <email-nav></email-nav>
                    <router-view></router-view>
               </section>`,
    data(){
        return {
            isListShow:true
        }
    },
    methods:{
        showList(){
            this.isListShow = !this.isListShow
        }
    },
    components: {
        emailList,
        emailNav
    }
}