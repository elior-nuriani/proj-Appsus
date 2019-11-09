export default{
    props:['mails'],
    template: `<div>
                    {{mails}}
                     <h1 v-for="mail in mails" :key="mail"> 
                        Hello
                     </h1>
                </div>`,
}