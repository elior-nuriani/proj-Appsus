'use strict'

export const mailService = {
    getMails
}

// {subject: 'Wassap with Vue?', body: 'May I', isRead: false, sentAt : 1551133930594} 
var gNextId = 100;
var gMails = _createMails();

function _createMails() {
    let mails = [_createMail('whatsup', 'I would like..', false, 0),
    _createMail('hey', 'my name', false, 192032093),
    _createMail('Job application', 'we like', false, 328),
    ]
    return mails;
}

function _createMail(subject, body, isRead, sentAt) {
    return {
        subject,
        body,
        isRead,
        sentAt,
        id:gNextId++
    }
}

function getMails(){
    return Promise.resolve(gMails)
}