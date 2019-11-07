'use strict'




export const keepService ={
    getKeeps,

}



let gKeeps =[
    {
        id: 101,
        type: 'textNote',
        content: 'note 1',
        
    },
    {
        id: 102,
        type: 'textNote',
        content: 'note 2'
        
    },
    {
        id:103,
        type: 'videoNote',
        content: 'note 3'
        
    },
    {
        id:104,
        type: 'TodoNote',
        content: [
            {
                id:1041,
                content: 'todo 1',
                isActive: 'false'
            },
            {
                id:1042,
                type: 'imgNote',
                content: 'note 5',
                isActive: true,
                
            }
        ]
        
    },
    {
        id:105,
        type: 'imgNote',
        content: "note 5"
        
    },
]

window.keeps=gKeeps;

function getKeeps() {
  return Promise.resolve(gKeeps);
}