'use strict'

import { mailService } from '../services/email-service.JS'
import mailPreview from './email-preview.cmp.js';
import emailStatus from './email-status.cmp.js';


export default {
    template: `
    <section class="mails-list-container">
        <email-status :mailsInfo="mailsInfo"></email-status>
        <ul class="mail-list">
            <mail-preview v-for="(currMail, idx) in mails" :key="currMail.id" :mail="currMail"
            @remove="removeMail">
            </mail-preview>
        </ul>
    </section>
    `,
    data(){
        return{
            mails:[],
            mailInfo :{}
        }
    },
    created() {
        mailService.getMails()
            .then(mails => this.mails = mails)
    },
    methods:{
        removeMail(id){
            console.log(id)
            mailService.removeMail(id)
        }
    },
    computed:{
        mailsInfo(){
            let total = this.mails.length;
            let read;
            let unread;
            return mailService.getReadMails()
            .then( mails => {
                read = mails.length;
                unread = total - read;
                return {read,unread,total}
            })
            
        }
    },
    components: {
        mailPreview,
        emailStatus
    }
}

