'use strict'
import { eventBus } from '../../services/eventbus-service.js'

export default {
   template: `
            <div class="email-nav flex column center">
               <div class="user-details flex column center">
                  <div class="aside-title"> Welcome Back </div>
                  <div> lorem ipusem uita nirra</div>
               </div>
               <div class="mail-aside-container flex column space-around">
                  <div class="flex row align-center mail-link">
                    <i class="fas fa-inbox"></i>
                    <router-link to="/email/list" 
                    @click.native="filterSentMails(false)">Inbox</router-link>
                  </div>
                  <div class="flex row align-center mail-link">
                    <i class="fas fa-envelope-open"></i>
                    <router-link to="/email/list" @click.native="filterSentMails(true)">Sent Mails</router-link>
                  </div>
                  <div class="compose flex row center">
                    <i class="fas fa-plus"></i>
                    <router-link to="/email/compose">Compose</router-link>
                  </div>
                  <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
               </div>
            </div>`,
   methods: {
      filterSentMails(val) {
         eventBus.$emit('isSent', val)
      }
   },
   components: {
      eventBus
   }
}