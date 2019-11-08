'use strict'




export const keepService ={
    getKeeps,
    // createKeeps

}

function createKeep(type, content) {
    console.log('content', content);
    let newKeep = {
        id: utilService.makeId(),
        isPinned: false,
        type,
        content
    };
    console.log('newKeep', newKeep);
    gKeeps.unshift(newKeep);
}

let gKeeps =[
    {
        id: 101,
        type: 'keepTxt',
        content: 'note 1',
        isPinned: false,
        
    },
    {
        id: 102,
        type: 'keepTxt',
        content: 'note 2',
        isPinned: false,
    },
    {
        id:103,
        type: 'keepTxt',
        content: 'note 3',
        isPinned: false,
    },
    {
        id:104,
        type: 'keepTxt',
        content: [
            {
                id:1041,
                content: '',
                isActive: 'false'
            },
            {
                id:1042,
                content: 'note 5',
                isActive: true,
                
            }
        ],
        isPinned: false,
        
    },
    {
        id:105,
        type: 'keepImg',
        content: 'https://www.youtube.com/watch?v=EuPSibuIKIg',
        isPinned: false,
    },
]

window.keeps = gKeeps;

function getKeeps() {
  return Promise.resolve(gKeeps);
}