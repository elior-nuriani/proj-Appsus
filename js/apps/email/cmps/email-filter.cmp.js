export default {
    template: `
    <section class="email-filter-container flex row space-around">
        <div class="search-box">
            <input type="text" placeholder="Search Mails" v-model="filterBy.txt"/>
            <i class="fas fa-filter" @click="setFilterSettings"></i>
        </div>
        <div v-if="isFilterClicked">
            <input @change="setSearch" type="radio" value="subject" v-model="searchBy"> Subject
            <input @change="setSearch" type="radio" value="body" v-model="searchBy"> Message Body
            <input @change="setSearch" type="radio" value="both" v-model="searchBy"> Both
        </div>
        <div>
             <button v-for="(filter, idx) in filters" type="button" class="btn btn-dark" @click="setFilterType($event)">{{filters[idx]}}</button>
        </div>
    </section>
    `,
    data() {
        return {
            filters : ['All','Read','Unread','Important'],
            filterBy: {
                txt : '',
                type: null
            },
            isFilterClicked:false,
            searchBy:'subject'
        }
    },
    created() {
        this.$emit('filterTxt', this.filterBy)
    },
    methods:{
        setFilterSettings(){
            this.isFilterClicked = !this.isFilterClicked;
        },
        setSearch(){
            this.$emit('search', this.searchBy)
        },
        setFilterType(ev){
            this.$emit('filterType',ev.target.textContent)
        }
    },
}