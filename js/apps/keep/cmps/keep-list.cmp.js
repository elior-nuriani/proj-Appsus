

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
        <h1>{{keep.id}}</h1> ||
        {{keep.type}} ||
        {{keep.content}}
        <div class="keep-btn" >
        <i @click.stop="removeKeep(keep)" class="fa fa-trash"></i>
        <i @click.stop="keepEdit(id)"  class="far fa-edit"></i>
        <button colorbutton >⬤</button> 
        </div>
        </li>
        </ul>
        `,
        data() {
            return {
                keeps: []
            }
    },
    methods: {
        getKeeps() {
            keepService.getKeeps().then(keeps => this.keeps = keeps);
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