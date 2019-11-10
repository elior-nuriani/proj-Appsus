export default {
    name: 'keep-img',
    props: ['content'],
    template: `
        <section class="keep-preview-container flex ">
        <img :src="content" alt="" class="keep-img">
        </section>
    `,
    created() {
        // console.log('this.content', this.content);
    },
    computed: {
        imgUrl() {
            return this.content;
        }
    }

}