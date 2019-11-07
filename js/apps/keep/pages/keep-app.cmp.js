import keepList from '../cmps/keep-list.cmp.js'
import keepHeader from '../cmps/keep-header.cmp.js'
// import addKeep from '../cmps/add-keep.cmp.js'


export default {

    name: 'keep-app',
    template: `
    <section class="keep-app-container">
    <keep-header></keep-header>
    
    <keep-list ></keep-list>
    </section>
    
    `,
    // <add-keep></add-keep>
    
    components: {
        keepList,
        keepHeader,
        // addKeep,
    },   
//     computed:{
//             keepToShow(){
//                 return this.notes

// }

    // }



}