import keepList from '../cmps/keep-list.cmp.js'


export default {
    
    template: `
    <section class="keep-app-container">
    <h1> keep app</h1>
    <header>second header</header>
    <keep-list ></keep-list>
    </section>
    
    `,
   
    components: {
        keepList
    },   
//     computed:{
//             keepToShow(){
//                 return this.notes

// }

    // }



}