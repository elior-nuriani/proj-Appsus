

import { keepService } from '../services/keep-service.js'
import keepPreview from './keep-preview.cmp.js'
import keepTxt from './keep-txt.cmp.js'
import keepImg from './keep-img.cmp.js'
import keepTodo from './keep-todo.cmp.js'
import keepVid from './keep-vid.cmp.js'

export default {
    name: 'keep-list',
    template: `
        <div v-if="keeps" class="keep-list-container " >
            <div class= "container keep-list clean-list " v-for="(keep, idx) in keeps" :keep="keep" :style="{'background-color': keep.color}" >
            <component :is="keep.type" :content="keep.content"></component>
            
                <div class="keep-btn" >
                    <button @click.stop="removeKeep(keep.id)"><i  class="fa fa-trash"></i></button>

                    <input ref="colorInput" style="display:none" type="color" @change="changeKeep(keep.id, 'color',$event.target.value)">
                    <button @click="openColorPicker(idx)"><i class="fa fa-palette"></i></button>
                    <button @click="togglePin(keep.id)"><i class="fas fa-thumbtack"></i></button> 
                    <button @click.stop ="editKeep" ><i  class="fa fa-edit"></i></button> 
                   
                </section>
                </div>
            </div>
        </div>
        `,
        data() {
            return {
                keeps: [],
                
            }
            // <i @click.stop="keepEdit(id)"  class="far fa-edit"></i>
    },
    methods: {
        getKeeps() {
            keepService.getKeeps().then(keeps => this.keeps = keeps);
        },
        removeKeep(id){
            keepService.removeKeep(id).then(() => this.getKeeps());
        },
        changeKeep(keepId, key, value){
            keepService.updateKeep(keepId, key, value).then(() => this.getKeeps());
        },
        openColorPicker(idx){
            this.$refs.colorInput[idx].click()
        },
        // updateKeep(keep, id){
        // keepService.updateKeep(keep,id).then(() => this.getKeeps());
        // },
        togglePin(id){
            keepService.togglePin(id).then(keeps => this.keeps = keeps)
        }
    },
    components: {
        keepService,
        keepPreview,
        keepTxt,
        keepImg,
        keepTodo,
        keepVid,
    },
    created() {
        this.getKeeps();
        // console.log('keeps', keep.type);

    }
}