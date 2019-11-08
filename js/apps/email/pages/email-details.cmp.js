
export default {
    props:['mail'],
    template: `
        <section class="container mail-details">
            <h2>
                {{mail.body}}
            </h2>
        </section>
    `,
}
