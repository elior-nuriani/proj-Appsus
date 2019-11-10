import {keepService} from '../services/keep-service.js'
import keepList from '../cmps/keep-list.cmp.js'
import keepHeader from '../cmps/keep-header.cmp.js'
import addKeep from '../cmps/add-keep.cmp.js'


export default {

    name: 'keep-app',
    template: `
    <section class="keep-app-container flex column center wrap">
    <div class="flex column center">
        <keep-header @search="queryKeeps(e)"></keep-header>
        <add-keep></add-keep>
    </div>
        
        <keep-list :keeps="keeps" v-if></keep-list>
    </section>
    `,
    data(){
        return{
            keeps: []
        }
    },
    computed: {
        keepsToShow() {
            if (!this.filterBy) return this.keeps;
            var regex = new RegExp(`${this.filterBy.txt}`, 'i');
            return this.keeps.filter(keep => {
                    // console.log(keep)
                    return regex.test(this.filterBy.txt) === regex.test(keep.content)
                }
            )
        },
        queryKeeps(str){
            if(!str) return this.keeps;
            return this.keeps.filter(keep => {
                return keep.content.includes(str)
            })
        }
    },
    methods: {
        filteredKeeps(str) {
            this.keeps = this.queryKeeps(str);
        },
        
    },
    components: {
        keepList,
        keepHeader,
        addKeep,
        keepService,
    },   
    created() {
        this.keeps = this.keepsToShow();
    },
    //     computed:{
        //             keepToShow(){
            //                 return this.keeps
            
            // }
            
            //     }
            
            
            
        }