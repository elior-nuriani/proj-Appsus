

import {keepServices} from '../services/keep-service.cmp.js'
import notesPreview from './notes-preview.cmp.cmp.js'

export default {

template:`
<section class"notes-list-container">
<ul class"= notes-list"
<notes-preview v-for="currNote in notes" :note="currNote" @click.native="onSelectNote(currNote.id)" :key="currNote.id">
</notes-preview>
</ul>
</section>

`
,

data()  {
return{}
}
}