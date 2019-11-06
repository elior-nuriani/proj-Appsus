'use strict'

import { mailService } from '../services/email-service.js'
import emailNav from '../cmps/email-nav.cmp.js'


export default {
    template: `<section class="mail-app flex row space-between container">
                    <email-nav></email-nav>
                    <router-view></router-view>
               </section>`,
    data() {
        return {
            mails: []
        }
    },
    created() {
        mailService.getMails()
            .then(mails => this.mails = mails)

    },
    methods:{

    },
    computed:{
        mailsToShow(){
            return this.mails;
        },
    },
    components:{
        emailNav
    }
}