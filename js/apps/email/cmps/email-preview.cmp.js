import emailDetails from '../pages/email-details.cmp.js'
export default {
    props: ['mail'],
    template: `
        <li :class="boldText" @click="toggleShow()" class="mail-list-container clean-list">
        <div class= "flex align-center space-around">
            <i @click.stop="toggleStar"class="fas fa-star" :class="starDetailClass"></i>
            <div>{{mail.name}}</div>
            <div class="mail-main-info flex row center">
                <div>{{mail.subject}}</div>
            </div>
            <div> {{time}} </div>
            <div class="flex row space-between">
                <div @click.stop="toggleMailRead">
                    <i v-if="isRead" class="fas fa-envelope-open-text"></i>
                    <i v-else class="fas fa-envelope"></i>
                </div>
                <div @click="removeMail(mail.id)">
                    <i class="fas fa-trash-alt"></i>
                </div>
            </div>
        </div>
        <email-details v-if="isShowDetails" :mail="mail" class="flex center"></email-details>
        </li>
        
    `,
    data() {
        return {
            isRead: this.mail.isRead,
            isShowDetails : false,
            isMark: this.mail.isMark
        }
    },
    methods:{
        toggleShow(){
            this.isShowDetails = !this.isShowDetails;
        },
        toggleMailRead(){
            this.isRead = !this.isRead
            this.$emit('setProp',this.mail.id,'isRead')
        },
        toggleStar(){
            this.isMark = !this.isMark
            this.$emit('setProp',this.mail.id,'isMark')
        },
        removeMail(id){
            this.$emit('remove',id)
        }
    },

    computed: {
        boldText() {
            return { boldText: !this.isRead }
        },
        time() {
            let displayHours = '';
            let displayMinutes = '';

            let convertTime = {
                hours: new Date(this.mail.sentAt).getHours(),
                minutes: new Date(this.mail.sentAt).getMinutes()
            }
            displayHours = convertTime.hours;
            displayMinutes = convertTime.minutes;
            console.log(displayMinutes)
            if (convertTime.hours < 10) displayHours = '0' + displayHours;
            if (convertTime.minutes < 10) displayMinutes = '0' + displayMinutes;

            return `${displayHours} : ${displayMinutes}`
        },
        starDetailClass() {
            return {'mail-important': this.isMark}
        }

    },
    components:{
        emailDetails,
    }   
}