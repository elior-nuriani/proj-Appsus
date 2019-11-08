'use strict'

import { mailService } from '../services/email-service.JS'
import mailPreview from './email-preview.cmp.js';
import emailStatus from './email-status.cmp.js';
import emailFilter from './email-filter.cmp.js';



export default {
    template: `
    <section class="mails-list-container">
        <email-filter @filterTxt="setFilter" @search="setSearch" @filterType="setFilterType"></email-filter>
        <email-status :mailsInfo="mailsInfo"></email-status>
        <ul class="mail-list">
            <mail-preview v-for="(currMail, idx) in mailsToShow" :key="currMail.id" :mail="currMail"
            @remove="removeMail" @setProp="editProp" >
            </mail-preview>
            {{searchBy}}
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
        
        }
    },
    created() {
        mailService.getMails()
            .then(mails => this.mails = mails)
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
            return { read, unread, total }
        },
        mailsToShow() {
            if (!this.filterBy && this.filterType.toLowerCase() === 'all') 
                return this.mails;
        


            var regex = new RegExp(`${this.filterBy.txt}`, 'i');
            if (this.searchBy !== 'both') {
                return this.mails.filter(mail => {
                    return regex.test(mail[this.searchBy])
                })
            }
            else{
                return this.mails.filter(mail => {
                    return regex.test(mail.subject) || regex.test(mail.body)
                })
            }
        }
    },
    components: {
        mailPreview,
        emailStatus,
        emailFilter
    }
}

