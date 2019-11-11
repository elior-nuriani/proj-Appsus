

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
            <div class= "keep-list flex row center wrap " v-for="(keep, idx) in keeps" :keep="keep" :style="{'background-color': keep.color}" >
            <p class="pinned" v-if="keep.isPinned"><i class="fa fa-thumbtack"></i></p>
                <component :is="keep.type" :content="keep.content"></component>
            
                <div class="keep-btn" >
                    <button @click.stop="removeKeep(keep.id)"><i  class="fa fa-trash"></i></button>
                    <button @click="showColorPicker = !showColorPicker"><i class="fa fa-palette"></i></button>
                    <button @click="togglePin(keep.id)"><i class="fas fa-thumbtack"></i></button> 
                    <button @click.stop ="editKeep" ><i class="fa fa-edit"></i></button> 
                <div v-if="showColorPicker" class="color-picker">
                    <button class="btn-color" @click="changeKeep(keep.id,'white')" style="background: white"></button>
                    <button class="btn-color" @click="changeKeep(keep.id,'#ff888a')" style="background:#ff888a"></button>
                    <button class="btn-color" @click="changeKeep(keep.id,'#ffcc87')" style="background: #ffcc87"></button>
                    <button class="btn-color" @click="changeKeep(keep.id,'#fffd8e')" style="background: #fffd8e"></button>
                    <button class="btn-color" @click="changeKeep(keep.id,'#cbffa0')" style="background: #cbffa0"></button>
                    <button class="btn-color" @click="changeKeep(keep.id,'#acffef')" style="background: #acffef"></button>
                    <button class="btn-color" @click="changeKeep(keep.id,'#88ddfd')" style="background: #88ddfd"></button>
                    <button class="btn-color" @click="changeKeep(keep.id,'#88bbff')" style="background: #88bbff"></button>
                    <button class="btn-color" @click="changeKeep(keep.id,'#dfbbff')" style="background: #dfbbff"></button>
                </div>
                    </div>
                    </div>
                    </div>
                    `,
                    data() {
                        return {
                            keeps: [],
                            showColorPicker: false,
                            
                        }
                        
                        // <input ref="colorInput" style="display:none" type="color" @change="changeKeep(keep.id, 'color',$event.target.value)">
                        // <button @click="openColorPicker(idx)"><i class="fa fa-palette"></i></button>
    },
    methods: {
        getKeeps() {
            keepService.getKeeps().then(keeps => this.keeps = keeps);
        },
        removeKeep(id){
            keepService.removeKeep(id).then(() => this.getKeeps());
        },
        changeKeep(keepId, key, value){
            console.log('whitecolor id',keepId);
            console.log('whitecolor key',key);
            // console.log('whitecolor value',value);
            
            keepService.updateKeep(keepId, key, value).then(() => this.getKeeps());
        },
        // openColorPicker(idx){
        //     this.$refs.colorInput[idx].click()
        // },
        // changeColor(color) {
        //     this.showColorPicker = false;
        // //     this.$emit('changeColor', this.keep.id, 'color', color);
        // },
        // // updateKeep(id, key, value) {
        //     keepService.updateNote(id, key, value).then(() => {

        //     })
            

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