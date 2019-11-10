'use strict'
import {data} from './email-data-util.js'

export const mailService = {
    getMails,
    removeMail,
    getMailById,
    getReadMails,
    setProp,
    saveSentMail,
    getSentMails
}
// var gNextId = 100;
var gMails = data
var gSentMails = ['1','2'];

window.ma = gSentMails;

// function _createMails() {
//     let mails = [_createMail('shoko', 'whatsup', 'I would like..', false, true, 323232323),
//     _createMail('luli', 'hey', 'my name', true, false, 192032093),
//     _createMail('Lucky', 'Job application', 'we like', false, true, 32832323),
//     ]
//     return mails;
// }

// function _createMail(name, subject, body, isRead, isMark, sentAt) {
//     return {
//         id: gNextId++,
//         name,
//         subject,
//         body,
//         isRead,
//         isMark,
//         sentAt
//     }
// }

function getMails() {
    return Promise.resolve(gMails)
}
function getSentMails(){
    return Promise.resolve(gSentMails)
}

function removeMail(id) {
    var idx = gMails.findIndex(mail => mail.id === id);
    if (idx !== -1) gMails.splice(idx, 1)
    return Promise.resolve();
}

function getMailById(id) {
    const mail = gMails.find(mail => mail.id === id)
    return Promise.resolve(mail);
}

function getReadMails(){
    return Promise.resolve (gMails.filter( mail => mail.isRead))
}

function setProp(mailId,key){
    getMailById(mailId).then( (mail) => {
        mail[key] = !mail[key]
    })
}

function saveSentMail(info){ 
    //Copy The info --- avoiding pointers
    let mail = Object.assign({}, info);
    gSentMails.push(mail)
}