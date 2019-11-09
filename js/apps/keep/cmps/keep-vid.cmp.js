
export default {
    name: 'keep-vid',
    props: ['content'],
    template: `
        <section class="keep-preview-container flex">
        <iframe  :src="vidUrl" alt=""></iframe>
        </section>
    `,
    created() {
        console.log('this.content', this.content);
    },
    computed: {
        vidUrl() {
            let url =this.content
            let vidKey = url.substr(url.indexOf('?v=') + 3)
            return `https://www.youtube.com/embed/${vidKey}`
        }
    }

}