

import { keepService } from '../services/keep-service.js'
import keepPreview from './keep-preview.cmp.js'

export default {
    template: `
<section v-if="keeps" class="keep-list-container">
<div class= "keep-list" v-for="keep in keeps" :key=keep.id :keep="keep">
    {{keep.id}} ||
    {{keep.type}} ||
    {{keep.content}}
</div>
</section>
`,
// <component :is="keep.type" data="keep.data"></component>
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
    },
    created() {
        this.getKeeps();
    }
}