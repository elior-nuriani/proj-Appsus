'use strict'
import { eventBus } from '../../services/eventbus-service.js'

export default {
   template: `
         <section class="aside-box">
            <div class="email-nav flex column center" >
               <div class="aside-head welcome flex column center">
                  <div class="aside-title"> Welcome Back </div>
                  <div class="aside-second"> lorem ipusem uita nirra</div>
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
               </div>
            </div>
            <div class="welcome user-details flex column center"> 
               <div class="user-title flex row center">
                  <img class="profile" src="/img/face.jpg">
                  <div class="user-mail">Jojo777@gmail.com</div>
               </div>
               <div >John Doe</div>
               <div >Executive Instructor</div>
               <div >Coding Academy</div>
            </div>
         </section>`,
   methods: {
      filterSentMails(val) {
         eventBus.$emit('isSent', val)
      },
      sentMail(sent) {
         console.log('dsad')
      }
   },
   computed: {
   },
   components: {
      eventBus
   }
}