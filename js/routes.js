'use strict'
import home from './apps/pages/homepage.cmp.js'
import emailApp from './apps/email/pages/email-app.cmp.js'
import keepApp from './apps/keep/pages/keep-app.cmp.js'
import mailDetails from './apps/email/pages/email-details.cmp.js'


const myRoutes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/email',
        component: emailApp,

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