'use strict'


import utilService from '../../services/utils-service.js'


export const keepService = {
    keepQuery,
    getKeeps,
    createKeep,
    removeKeep,
    updateKeep,
    togglePin

}
const KEEPS_KEY = 'keepsKey'

function createKeep(type, content) {
    if (type === 'keepTodo') {
        let todos = content.split(',')
        let fullTodos = todos.map(todo => ({txt: todo, isActive: false, id: makeId()}))
        content = fullTodos
    }
    let newKeep = {
        id: makeId(),
        isPinned: false,
        type,
        content,
        color: utilService.getRandomColor(true)
    };
    // console.log('newKeep', newKeep);
    gKeeps.unshift(newKeep);
    // console.log('gkeeps', gKeeps);
    utilService.store(KEEPS_KEY, gKeeps)
}

function togglePin(id){
    let currPin = gKeeps.find(keep => keep.id === id)
    let currPinIdx = gKeeps.findIndex(keep => keep.id === id);
    currPin.isPinned = !currPin.isPinned;
    if(currPin.isPinned){
        currPin.pinnedFrom = currPinIdx;
        gKeeps.splice(currPinIdx, 1);
        gKeeps.unshift(currPin);
    }else{
        gKeeps.splice(currPinIdx, 1);
        gKeeps.splice(currPin.pinnedFrom, 0, currPin);
        delete currPin.pinnedFrom
    }
    return Promise.resolve(gKeeps)
}

function getKeeps() {
    // console.log('gkkeps get keeps',gKeeps);

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

function removeKeep(id) {
    let keepIdx = gKeeps.findIndex(keep => keep.id === id)
    gKeeps.splice(keepIdx, 1)
    utilService.store(KEEPS_KEY, gKeeps)
    return Promise.resolve(gKeeps)
}

function updateKeep(keepId, key, value) {
    let keep = gKeeps.find(keep => keep.id === keepId);
    keep[key] =  value;
    utilService.store(KEEPS_KEY, gKeeps)
    return Promise.resolve(gKeeps)
}


let gKeeps = [
    {
        id: utilService.makeId(),
        type: 'keepTxt',
        content: 'note 1',
        isPinned: false,
        color: utilService.getRandomColor(true)

    },
    {
        id: utilService.makeId(),
        type: 'keepTxt',
        content: 'note 2',
        isPinned: false,
        color: utilService.getRandomColor(true)
    },
    {
        id: utilService.makeId(),
        type: 'keepTxt',
        content: 'note 3',
        isPinned: false,
        color: utilService.getRandomColor(true)
    },
    {
        id: utilService.makeId(),
        type: 'keepTodo',
        content: [
            {
                id: utilService.makeId(),
                txt: 'keepTxt',
                isActive: 'false'
            },
            {
                id: utilService.makeId(),
                txt: 'note 5',
                isActive: true,

            }
        ],
        isPinned: false,
        color: utilService.getRandomColor(true)

    },
    {
        id: utilService.makeId(),
        type: 'keepImg',
        content: 'https://i0.wp.com/psychedelic.support/wp-content/uploads/2019/03/CarlJung.jpg?fit=681%2C714&ssl=1',
        isPinned: false,
        color: utilService.getRandomColor(true)
    },
    {
        id: utilService.makeId(),
        type: 'keepVid',
        content: 'https://www.youtube.com/watch?v=EuPSibuIKIg',
        isPinned: false,
        color: utilService.getRandomColor(true)
    },
]


function makeId(length = 4) {
    var text = '';
    var possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}



console.log(gKeeps)