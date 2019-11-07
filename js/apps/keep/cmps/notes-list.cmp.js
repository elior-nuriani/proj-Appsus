

import {keepService} from '../services/keep-service.js'
import notesPreview from './notes-preview.cmp.js'

export default {
    props: ['notes'],
template:`
<section class="notes-list-container">
<ul class= "notes-list">
<notes-preview v-for="currNote in notes" :note="currNote" @click.native="onSelectNote(currNote.id)" :key="currNote.id">
</notes-preview>
</ul>
</section>

`
,

data()  {
return{}
},
components:{
    keepService,
    notesPreview,
}
}