'use strict'
import { eventBus } from '../../services/eventbus-service.js'
import { mailService } from '../services/email-service.JS'
import mailPreview from './email-preview.cmp.js';
import emailStatus from './email-status.cmp.js';
import emailFilter from './email-filter.cmp.js';
import emailSentPreview from './email-sent-preview.js';



export default {
    template: `
    <section class="mails-list-container flex column center wrap">
        <email-filter v-if="!isSentMail" @filterTxt="setFilter" @search="setSearch" @filterType="setFilterType"></email-filter>
        <email-status v-if="!isSentMail" :mailsInfo="mailsInfo"></email-status>
        <ul class="mail-list" v-if="!isSentMail">
            <mail-preview v-for="(currMail, idx) in mailsToShow" :key="currMail.id" :mail="currMail" 
            @remove="removeMail" @setProp="editProp">
            </mail-preview>
        </ul>
        <ul v-else class="mail-list">
            <email-sent-preview :mails="sentMails"></email-sent-preview>
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
            isSentMail: false,
            // sentMails: []
        }
    },
    created() {
        mailService.getMails()
            .then(mails => this.mails = mails)
            .then(eventBus.$on('isSent', (decision) => {
                this.isSentMail = decision;
            }))
        // mailService.getSentMails().then( (mails) => {
        //     this.sentMails = mails;
        // })
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
        setFilterType(type) {
            this.filterType = type;
        },
        editProp(mailId, key) {
            mailService.setProp(mailId, key)
        }
    },
    computed: {
        // sentMails(){
        //     return mailService.getSentMails().then( (mail) => {
        //         console.log(mail)
        //         return mail
        //     })
        // },
        mailsInfo() {
            let total = this.mails.length;
            let mailRead = this.mails.filter((mail) => {
                return mail.isRead
            })
            let read = mailRead.length
            let unread = total - read;
            return { read, unread, total }
        },
        mailsToShow() {
            let filterdTypeMails;
            if (!this.filterBy && this.filterType.toLowerCase() === 'all' ||
                !this.filterBy)
                return this.mails;

            filterdTypeMails = this.mails;

            if (this.filterType.toLowerCase() !== 'all') {
                filterdTypeMails = this.mails.filter((mail) => {
                    let type = this.filterType.toLowerCase();
                    if (type === 'read') return mail.isRead;
                    if (type === 'unread') return !mail.isRead;
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
            else {
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
        emailSentPreview,
        eventBus
    }
}

