import {keepService} from '../services/keep-service.js'
import keepList from '../cmps/keep-list.cmp.js'
import keepHeader from '../cmps/keep-header.cmp.js'
import addKeep from '../cmps/add-keep.cmp.js'


export default {

    name: 'keep-app',
    template: `
    <section class="keep-app-container">
    <keep-header></keep-header>
    <add-keep></add-keep>
    
    <keep-list :keeps="keepsToShow" ></keep-list>
    </section>
    
    `,
    computed: {
        keepsToShow() {
            if (!this.filterBy) return this.keeps;
            console.log('this.filterBy', this.filterBy.txt);
            var regex = new RegExp(`${this.filterBy.txt}`, 'i');
            return this.keeps.filter(keep => {
                    console.log(keep)
                    return regex.test(this.filterBy.txt) === regex.test(keep.content)
                }

            )
        }
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy
        }
    },
    components: {
        keepList,
        keepHeader,
        addKeep,
        keepService,
    },   
    created() {
        this.keeps = keepService.keepQuery();
        console.log('keeps', this.keeps);
    },
//     computed:{
//             keepToShow(){
//                 return this.keeps

// }

//     }



}