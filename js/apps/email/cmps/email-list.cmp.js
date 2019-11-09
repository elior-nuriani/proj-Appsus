'use strict'
import {eventBus} from '../../services/eventbus-service.js'
import { mailService } from '../services/email-service.JS'
import mailPreview from './email-preview.cmp.js';
import emailStatus from './email-status.cmp.js';
import emailFilter from './email-filter.cmp.js';



export default {
    template: `
    <section class="mails-list-container">
        <email-filter v-if="!isSentMail" @filterTxt="setFilter" @search="setSearch" @filterType="setFilterType"></email-filter>
        <email-status v-if="!isSentMail" :mailsInfo="mailsInfo"></email-status>
        <ul class="mail-list" v-if="!isSentMail">
            <mail-preview v-for="(currMail, idx) in mailsToShow" :key="currMail.id" :mail="currMail" 
            @remove="removeMail" @setProp="editProp" >
            </mail-preview>
            {{searchBy}}
        </ul>
        <ul v-else>
            ddddd
        </ul>
    </section>
    `,
    data() {
        return {
            mails: [],
            mailInfo: {},
            filterBy: null,
            filterType: 'All',
            searchBy: 'subject',
            isSentMail:false
        }
    },
    created() {
        mailService.getMails()
            .then(mails => this.mails = mails)
        .then(eventBus.$on('isSent', (decision) => {
            this.isSentMail = decision;
        }))
    },
    methods: {
        removeMail(id) {
            mailService.removeMail(id)
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        setSearch(searchBy) {
            this.searchBy = searchBy;
        },
        setFilterType(type){
            this.filterType = type;
        },
        editProp(mailId,key){
            mailService.setProp(mailId,key)
        }

    },
    computed: {
        mailsInfo() {
            let total = this.mails.length;
            let mailRead = this.mails.filter((mail) => {
                return mail.isRead
            })
            let read = mailRead.length
            let unread = total - read;
            return { read, unread, total}
        },
        mailsToShow() {
            //Check For if its List of sent mails....
            if(this.isSentMail) {
                return mailService.getSentMails().then( (mails) => {
                    return mails;
                })
            }
            let filterdTypeMails;
            if (!this.filterBy && this.filterType.toLowerCase() === 'all' ||
                !this.filterBy) 
                return this.mails;

            filterdTypeMails = this.mails;

            if(this.filterType.toLowerCase() !== 'all'){
                filterdTypeMails = this.mails.filter( (mail) =>{
                    let type = this.filterType.toLowerCase();
                    if(type === 'read') return mail.isRead;
                    if(type === 'unread') return !mail.isRead;
                    return mail.isMark
                })
            } 
            // console.log(filterdTypeMails,'filter type')

            var regex = new RegExp(`${this.filterBy.txt}`, 'i');
            if (this.searchBy !== 'both') {
                return filterdTypeMails.filter(mail => {
                    return regex.test(mail[this.searchBy])
                })
            }
            else{
                return filterdTypeMails.filter(mail => {
                    return regex.test(mail.subject) || regex.test(mail.body)
                })
            }
        }
    },
    components: {
        mailPreview,
        emailStatus,
        emailFilter,
        eventBus
    }
}

