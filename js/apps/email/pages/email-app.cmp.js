'use strict'

import emailList from '../cmps/email-list.cmp.js'


export default {
    template: `<section class="mail-app flex row space-between container">
                    <email-list></email-list>
               </section>`,
    components: {
        emailList
    }
}