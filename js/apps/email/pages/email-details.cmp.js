
export default {
    props:['mail'],
    template: `
        <section class="mail-details">
                {{mail.body}}
        </section>
    `,
}
