'use strict'


import utilService from '../../services/utils-service.js'


export const keepService = {
    keepQuery,
    getKeeps,
    createKeep,
    removeKeep,
    
}
const KEEPS_KEY = 'keepsKey'

function createKeep(type, content) {
    // gKeeps = utilService.load(KEEPS_KEY)
    console.log('content', content);
    let newKeep = {
        id: makeId(),
        isPinned: false,
        type,
        content,
        color: utilService.getRandomColor(true)
    };
    console.log('newKeep', newKeep);
    gKeeps.unshift(newKeep);
    console.log('gkeeps', gKeeps);
    utilService.store(KEEPS_KEY, gKeeps)
}

function getKeeps() {
    console.log('gkkeps get keeps',gKeeps);
    
    return Promise.resolve(gKeeps);
}

function keepQuery() {
    let keeps = utilService.load(KEEPS_KEY)
    if (!keeps) {
        keeps = gKeeps
        utilService.store(KEEPS_KEY, keeps)
    }
    gKeeps = keeps
    return Promise.resolve(gKeeps)
}

function removeKeep(id){
    // gKeeps = utilService.load(KEEPS_KEY)
    // console.log('gkeeps ufter removal', gKeeps);
    let keepIdx = gKeeps.findIndex(keep => keep.id === id)
    gKeeps.splice(keepIdx, 1)
    utilService.store(KEEPS_KEY , gKeeps)
    
    return Promise.resolve(gKeeps)
}



let gKeeps = [
    {
        id: 101,
        type: 'keepTxt',
        content: 'note 1',
        isPinned: false,
        color: utilService.getRandomColor(true)

    },
    {
        id: 102,
        type: 'keepTxt',
        content: 'note 2',
        isPinned: false,
        color: utilService.getRandomColor(true)
    },
    {
        id: 103,
        type: 'keepTxt',
        content: 'note 3',
        isPinned: false,
        color: utilService.getRandomColor(true)
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
        color: utilService.getRandomColor(true)

    },
    {
        id: 105,
        type: 'keepImg',
        content: 'https://i0.wp.com/psychedelic.support/wp-content/uploads/2019/03/CarlJung.jpg?fit=681%2C714&ssl=1',
        isPinned: false,
        color: utilService.getRandomColor(true)
    },
    {
        id: 106,
        type: 'keepVid',
        content: 'https://www.youtube.com/watch?v=EuPSibuIKIg',
        isPinned: false,
        color: utilService.getRandomColor(true)
    },
]




// window.keeps = gKeeps;


function makeId(length = 4) {
    var text = '';
    var possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}