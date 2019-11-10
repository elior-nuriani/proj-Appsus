import { mailService } from '../services/email-service.js'
import { eventBus } from '../../services/eventbus-service.js'


export default {
    template:
        `<section class="mail-compose-container">
            <div class="mail-compose-header flex row space-between align-center">
                <h5> New Messsage</h5>
                <i class="fas fa-times exit" @click="exit"></i>
            </div>  
            
            <form @submit.prevent="sentMail" class="flex column">
                <input type="email" placeholder=" To :" v-model.trim="info.email" required />
                <input type="text" placeholder=" Subject :" v-model.trim="info.subject" required/>
                <input type="email" placeholder=" Cc :" v-model.trim="info.Cc" />
                <input type="email" placeholder=" Bcc :" v-model.trim="info.Bcc" />
                
                <textarea rows="10" cols="50" placeholder="Message :" v-model.trim="info.msg" required></textarea>

                <input type="submit" value="Send" class="btn btn-outline-primary"/>

            </form>
        </section>`
    ,
    data() {
        return {
            info: {
                subject: null,
                email: null,
                Cc: null,
                Bcc: null,
                msg: null
            }
        }
    },
    methods: {
        exit() {
            let key;
            for (key in this.info) {
                this.info[key] = null
            }
            this.$router.push('/email/list');
        },
        sentMail() {
            // this.$emit('sent',1)
            mailService.saveSentMail(this.info);
            Swal.fire(
                'Mail Has Been Sent Succesfuly',
                '',
                'success',
            )
            let key;
            for (key in this.info) {
                this.info[key] = null
            }
        }
    },
    components: {
        mailService,
        eventBus
    }
}