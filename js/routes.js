'use strict'
import home from './apps/pages/homepage.cmp.js'
import emailApp from './apps/email/pages/email-app.cmp.js'
import keepApp from './apps/keep/pages/keep-app.cmp.js'
import mailDetails from './apps/email/pages/email-details.cmp.js'
import emailCompose from './apps/email/cmps/email-compose.cmp.js'
import emailList from './apps/email/cmps/email-list.cmp.js'




const myRoutes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/email',
        component: emailApp,
        children: [
            {
                path: 'compose',
                component: emailCompose
            },
            {
                path: 'list',
                component: emailList
            },
        ]
    },
    {
        path: '/keep',
        component: keepApp
    },

    {
        path: '/mail/details/:id?',
        component: mailDetails
    },

]
const myRouter = new VueRouter({ routes: myRoutes })
export default myRouter;