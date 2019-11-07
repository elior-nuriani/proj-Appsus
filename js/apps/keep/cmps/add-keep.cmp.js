import keepService from '../services/keep-service.js';

export default{
    template:`
        <section>
        <div> 
        <input v-model ="content.text"nv-if="keepTxt" type="text" placeholder = "Enter your text"/>

        <button @click="onAddKeep()">ADD</button>
        
    `,

    Data() {
        return
    },

    methods: {
        changeInput(){
            return
        }
    },

    onAddKeep(){
        createKeep()

        },
    }






