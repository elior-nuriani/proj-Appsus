'use strict'
import mailPreview from  './email-preview.cmp.js';

export default {
    props: ['mails'],
    template: `
    <section class="mails-list-container">
        <ul class="mail-list">
            <mail-preview v-for="(currMail, idx) in mails" :key="currMail.id" :mail="currMail">
            </mail-preview>
        </ul>
    </section>
    `,
    components: {
        mailPreview
    }
}


