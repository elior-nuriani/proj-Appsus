
export default{
    name: 'keep-todo',
    props:['content'],
    template: `
    <section class="keep-todo">
        <div v-for="todo in content" ">
            <input type="checkbox" :id="todo.id" :checked="!!todo.isDone" />
            <label for="todo.id" :class="{ marked: todo.isDone }" @click="toggleIsDone(todo)>{{todo.txt}}</label>
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
