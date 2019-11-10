
export default{
    name: 'keep-todo',
    props:['content'],
    template: `
    <section class="keep-todo">
        <div v-for="item in content">
            <input type="checkbox" :id="item.id" :checked="!!item.isActive" />
            <label for="item.id" :class="{ marked: item.isActive }" @click="toggleIsActive(item)">{{item.txt}}</label>
        </div>
    </section>
    `,

    methods:{
        toggleIsActive(todo){
            var isActive = ! todo.isActive
            todo.isActive = isActive
        }
    },
    mounted(){
        console.log(this.content);
    }

}
