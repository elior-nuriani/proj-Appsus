

import { keepService } from '../services/keep-service.js'
import keepPreview from './keep-preview.cmp.js'
import keepTxt from './keep-txt.cmp.js'
import keepImg from './keep-img.cmp.js'

export default {
    name: 'keep-list',
    template: `
        <ul v-if="keeps" class="keep-list-container ">
        <li class= "container keep-list clean-list " v-for="keep in keeps" :key=keep.id :keep="keep" >
        <component :is="keep.type" content="keep.content"></component>
        <h1>{{keep.id}}</h1> ||
        {{keep.type}} ||
        {{keep.content}}
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
    },
    created() {
        this.getKeeps();
        // console.log('keeps', keep.type);

    }
}