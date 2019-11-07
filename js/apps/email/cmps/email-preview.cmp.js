import emailDetails from '../pages/email-details.cmp.js'
export default {
    props: ['mail'],
    template: `
        <li :class="boldText" class="mail-list-container clean-list">
        <div class= "flex align-center space-around">
            <div>{{mail.name}}</div>
            <div class="mail-main-info flex row center">
                <div>{{mail.subject}}</div>
            </div>
            <div> {{time}} </div>
            <div>
                <button @click="toggleShow()">Show</button>
                <button @click="removeMail(mail.id)">Delete</button>
            </div>
        </div>
        <email-details v-if="isShowDetails" class="flex center"></email-details>
        </li>
        
    `,
    data() {
        return {
            isRead: this.mail.isRead,
            isShowDetails : false
        }
    },
    methods:{
        toggleShow(){
            this.isShowDetails = !this.isShowDetails;
        },
        removeMail(id){
            this.$emit('remove',id)
        }
    },

    computed: {
        boldText() {
            return { boldText: this.isRead }
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
        mailDetailsLink() {
            return `/mail/details/${this.mail.id}`
        }

    },
    components:{
        emailDetails
    }   
}