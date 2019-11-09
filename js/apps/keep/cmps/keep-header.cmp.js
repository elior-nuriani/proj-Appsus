export default {
    template: `
        <header class="keep-header-container">
            <h1>Search area</h1>
            <input type="text" placeholder="Search In your keep" v-model="filterBy.txt" @input="onFilterInput()" />
            <select>
                <option>All</option>
                <option>Text</option>
                <option>Images</option>
                <option>Videos</option>
                <option>Todo Items</option>
            </select>
           
        </header>
    `,
    data() {
        return {
            keeps: null,
            filterBy: {
                txt: ''
            }
        }
    },
    methods: {
        onFilterInput() {
            this.$emit('filtered', this.filterBy)
        }
    },
}