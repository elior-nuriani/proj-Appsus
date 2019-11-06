'use strict'

import { mailService } from '../services/email-service.js'
import emailList from '../cmps/email-list.cmp.js'


export default {
    template: `<section class="mail-app">
                    <email-list :mails="mailsToShow"></email-list>
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
        }
    },
    components:{
        emailList
    }
}