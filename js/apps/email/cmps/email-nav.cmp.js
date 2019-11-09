'use strict'
import {eventBus} from '../../services/eventbus-service.js'

export default {
   template: `
            <div class="email-nav flex column">
            &nbsp;
            <div>dffdfdfds</div>
               <div class="email-info-container">
                    <router-link to="/email/list" 
                    @click.native="filterSentMails(false)">Inbox</router-link>
                    <router-link to="/email/list" @click.native="filterSentMails(true)">Sent Mails</router-link>
                    <router-link to="/email/compose">Compose</router-link>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
               </div>
            </div>`,
   methods:{
      filterSentMails(val){
         eventBus.$emit('isSent',val)
      }
   },
   components:{
      eventBus
   }
}