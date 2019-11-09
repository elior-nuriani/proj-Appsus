import {keepService} from '../services/keep-service.js';

export default {
    name: 'addKeep',
    
    template:`
        <section class="keep-add flex align-center ">
        
        <input type="text" ref="keepInput" :placeholder="inputPlaceholder" @keyup.enter="keepAdd" v-model="keep.content"/>
        <div class = "keys-input">
        <button @click="selectKeyType('keepTxt')">TXT</button>
        <button @click="selectKeyType('keepImg')">Img</button>
        <button @click="selectKeyType('keepVid')">Vid</button>
        <button @click="selectKeyType('keepTodo')">Todo</button>
        </div>
        </section>
     `,

    data() {
        return {
            keep: {
                type:'',
                content:'',
            }
        }
    },

    methods: {
        getKeeps() {
            keepService.getKeeps().then(keeps => this.keeps = keeps);
        },

        selectKeyType(type){
            this.keep.type = type
            this.keep.content = ''
            this.$refs.keepInput.focus()
            return
        },
        // createKeep(){
        //     return
        // }
      
        keepAdd(){
           if (!this.$refs.input.value) return
            this.$refs.input.value = '';
            let type = this.type;
            let content;
            if (type === 'keepTxt') content = this.content;
            else if (type === 'keepImg') content = this.content;
            else if (type === 'keepVid') content = this.content;
            else if (type === 'keepTodo') content = this.content;
            keepService.createKeep(type, content);
            // console.log(content);
            
        }
        },
    computed:{
            inputPlaceholder(){
                if (this.keep.type === 'keepTxt') return `What's on your mind?`;
                if (this.keep.type === 'keepImg') return `Enter image URL`;
                if (this.keep.type === 'keepVid') return `Enter Youtube URL`;
                if (this.keep.type === 'keepTodo') return `Enter comma seperated list`;

            }
        },
    mounted(){
            this.selectKeyType('keepTxt')
        },
    components:{
            keepService,

        },
        created() {
            this.getKeeps();
            // // console.log('keeps', keep.type);
    
        },
    
            
        }



