

import { keepService } from '../services/keep-service.js'
import keepPreview from './keep-preview.cmp.js'
import keepTxt from './keep-txt.cmp.js'
import keepImg from './keep-img.cmp.js'
import keepTodo from './keep-todo.cmp.js'
import keepVid from './keep-vid.cmp.js'

export default {
    name: 'keep-list',
    template: `
        <ul v-if="keeps" class="keep-list-container " >
            <li class= "container keep-list clean-list " v-for="keep in keeps" :key=keep.id :keep="keep" :style="{'background-color': keep.color}" >
            <component :is="keep.type" :content="keep.content" ></component>
            <h1>{{keep.id}}</h1> || {{keep.type}} ||
            {{keep.content}}
                <div class="keep-btn" >
                    <button @click.stop="removeKeep(keep.id)"><i  class="fa fa-trash"></i></button>
                    <button colorbutton ><i  class="fa fa-palette"></i></button> 
                </div>
            </li>
        </ul>
        `,
        data() {
            return {
                keeps: []
            }
            // <i @click.stop="keepEdit(id)"  class="far fa-edit"></i>
    },
    methods: {
        getKeeps() {
            keepService.getKeeps().then(keeps => this.keeps = keeps);
        },
        removeKeep(id){
            keepService.removeKeep(id).then(() => this.getKeeps());
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