
export default{
    name: 'keep-txt',
    props:['content'],

template:` 
    <section class="keep-preview-container flex">
    <p>{{content}}</p>
    </section> 

`,
created(){
// console.log('content', this.content);

}

}