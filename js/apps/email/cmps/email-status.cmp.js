export default{
    props:['mailsInfo'],
    template: `<div class="mails-status-container flex row wrap align-center space-evenly">  
                    <div class="mail-status">
                      <i class="fas fa-glasses"></i>
                      <span > Read Mails: {{mailsInfo.read}}</span>
                    </div>
                    <div class="mail-status">
                      <i class="fas fa-mail-bulk"></i>
                      <span> Unread Mails:  {{mailsInfo.unread}} </span>
                    </div>
                    <div class="mail-status"> 
                      <i class="fas fa-comments"></i>
                      <span> Overall Messages: {{mailsInfo.total}} </span>
                    </div>
                </div>`
  ,
}