'use strict'


import {storageService} from '../../services/utils-service.js'


export const keepService = {
    keepQuery,
    getKeeps,
    createKeep,
    
}
const KEEPS_KEY = 'keepsKey'

function createKeep(type, content) {
    // gKeeps = storageService.load(KEEPS_KEY)
    console.log('content', content);
    let newKeep = {
        id: makeId(),
        isPinned: false,
        type,
        content,
        color: 'white'
    };
    console.log('newKeep', newKeep);
    gKeeps.unshift(newKeep);
    console.log('gkeeps', gKeeps);
    storageService.store(KEEPS_KEY, gKeeps)
}

function keepQuery() {
    let keeps = storageService.load(KEEPS_KEY)
    if (!keeps) {
        keeps = gKeeps
        storageService.store(KEEPS_KEY, keeps)
    }
    gKeeps = keeps
    return Promise.resolve(gKeeps)
}



let gKeeps = [
    {
        id: 101,
        type: 'keepTxt',
        content: 'note 1',
        isPinned: false,
        color: 'black',

    },
    {
        id: 102,
        type: 'keepTxt',
        content: 'note 2',
        isPinned: false,
        color: 'red',
    },
    {
        id: 103,
        type: 'keepTxt',
        content: 'note 3',
        isPinned: false,
        color: 'blue',
    },
    {
        id: 104,
        type: 'keepTxt',
        content: [
            {
                id: 1041,
                content: 'keepTxt',
                isActive: 'false'
            },
            {
                id: 1042,
                content: 'note 5',
                isActive: true,

            }
        ],
        isPinned: false,
        color: 'white',

    },
    {
        id: 105,
        type: 'keepImg',
        content: 'https://i0.wp.com/psychedelic.support/wp-content/uploads/2019/03/CarlJung.jpg?fit=681%2C714&ssl=1',
        isPinned: false,
        color: 'pink',
    },
    {
        id: 106,
        type: 'keepVid',
        content: 'https://www.youtube.com/watch?v=EuPSibuIKIg',
        isPinned: false,
        color: 'yellow',
    },
]




// window.keeps = gKeeps;

function getKeeps() {
    return Promise.resolve(gKeeps);
}

function makeId(length = 4) {
    var text = '';
    var possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}