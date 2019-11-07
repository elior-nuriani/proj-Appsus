'use strict'
import { mailService } from '../services/email-service.js'

export default {
   props:['mails'],
   template: `
            <div class="email-nav flex column">
               <div class="compose-container">
                  Compose
               </div>
               <div class="email-info-container">
                    <router-link :to="{ name: 'List', params: { mails:mails }}">User</router-link>
                    <router-link :to="{ name: 'List', params: { star }}">Starred</router-link>
                    <router-link to="/email/list">Sent Mail</router-link>
                    <router-link to="/email/list">Draft</router-link>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
               </div>
            </div>`,
   data(){
      return{
         starMails:this.showStarMails()
      }
   },
   computed:{
      showStarMails(){
         let filteredMails = this.mails.filter( (mail) => {
            return mail.isMark === true;
         })
         return filteredMails;
      }
   }
}