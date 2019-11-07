export default {
    name: 'keep-img',
    template: `
        <section class="keep-preview-container flex">
        <img :src="content" alt="">
        </section>
    `,
    props: ['content'],
    created() {
        console.log('this.content', this.content);
    },
    computed: {
        imgUrl() {
            return this.content;
        }
    }

}