import notesList from '../cmps/notes-list.cmp.js'


export default {
    props: ['notes'],
    template: `
    <section class="keep-app-container">
    <h1> keep app</h1>
    <header></header>
    <notes-list :notes="notesToShow">{{}}</notes-list>
    </section>
    
    `,
   
      components: {
        notesList
    },   
    computed:{
            notesToShow(){
                return this.notes

}

    }



}
