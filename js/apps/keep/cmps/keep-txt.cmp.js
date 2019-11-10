
export default{
    name: 'keep-txt',
    props:['content'],

template:` 
    <section class="keep-preview-container flex">
    <h1  >{{content}}</h1>
    </section> 

`,
created(){
// console.log('content', this.content);

}

}