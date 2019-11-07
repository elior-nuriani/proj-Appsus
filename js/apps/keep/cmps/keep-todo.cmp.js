
export default{
    name: 'keep-todo',
    props:['content'],
    template: `
    <section class="keep-todo">
        <div v-for="todo in data" @click="toggleIsDone(todo)">
            <input type="checkbox" :id="todo.id" :checked="!!todo.isDone" />
            <label for="todo.id" :class="{ marked: todo.isDone }">{{todo.txt}}</label>
    </div>
    </section>
    `,

    methods:{
        toggleIsDone(todo){
            var isDone = ! todo.isDone
            todo.isDone = isDone
        }
    }

}
