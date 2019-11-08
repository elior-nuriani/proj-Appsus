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
        
    },
    {
        id: 102,
        type: 'keepTxt',
        content: 'note 2'
        
    },
    {
        id:103,
        type: 'keepTxt',
        content: 'note 3'
        
    },
    {
        id:104,
        type: 'keepTxt',
        content: [
            {
                id:1041,
                content: 'keepTxt',
                isActive: 'false'
            },
            {
                id:1042,
                type: 'keepImg',
                content: 'note 5',
                isActive: true,
                
            }
        ]
        
    },
    {
        id:105,
        type: 'keepImg',
        content: 'https://i0.wp.com/psychedelic.support/wp-content/uploads/2019/03/CarlJung.jpg?fit=681%2C714&ssl=1'
        
    },
]

window.keeps = gKeeps;

function getKeeps() {
  return Promise.resolve(gKeeps);
}