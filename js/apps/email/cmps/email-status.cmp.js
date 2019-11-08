export default{
    props:['mailsInfo'],
    template: `<div class="flex space-between">
                    <span class="badge badge-info" > Read Mails: {{mailsInfo.read}}</span>
                    <span class="badge badge-info"> Unread Mails:  {{mailsInfo.unread}} </span>
                    <span class="badge badge-info"> Overall: {{mailsInfo.total}} </span>
                </div>`
  ,
}