import { keepService } from '../services/keep-service.js';

export default {
    name: 'addKeep',

    template: `
        <section class="keep-add flex align-center ">
        
        <input type="text" refs="keepInput" :placeholder="inputPlaceholder" @keyup.enter="keepAdd" v-model="keep.content"/>
        <div class = "keys-input">
        <button @click="selectKeyType('keepTxt')"><i class="fa fa-font"></i></button>
        <button @click="selectKeyType('keepImg')"><i class="fa fa-image"></i></button>
        <button @click="selectKeyType('keepVid')"><i class="fab fa-youtube"></i></button>
        <button @click="selectKeyType('keepTodo')"><i class="fa fa-list"></i></button>
        </div>
        </section>
     `,

    data() {
        return {
            keep: {
                type: '',
                content: '',
            }
        }
    },

    methods: {
        getKeeps() {
            keepService.getKeeps().then(keeps => this.keeps = keeps);
        },

        selectKeyType(type) {
            this.keep.type = type
            this.keep.content = ''
            // // this.$refs['keepInput'].focus()
            // return
        },
        // createKeep(){
        //     return
        // }

        keepAdd() {
            //    if (!this.$refs.input.content) return
            let type = this.keep.type;
            let content;
            if (type === 'keepTxt') content = this.keep.content;
            else if (type === 'keepImg') content = this.keep.content;
            else if (type === 'keepVid') content = this.keep.content;
            else if (type === 'keepTodo') content = this.keep.content;
            keepService.createKeep(type, content)
            // console.log('add-keep type', type);
            this.$refs['keepInput'] = '';
            

        }
    },
    computed: {
        inputPlaceholder() {
            if (this.keep.type === 'keepTxt') return `What's on your mind?`;
            if (this.keep.type === 'keepImg') return `Enter image URL`;
            if (this.keep.type === 'keepVid') return `Enter Youtube URL`;
            if (this.keep.type === 'keepTodo') return `Enter comma seperated list`;

        }
    },
    mounted() {
        this.selectKeyType('keepTxt')
    },
    components: {
        keepService,

    },
    created() {
        this.getKeeps();
        // // console.log('keeps', keep.type);

    },


}



