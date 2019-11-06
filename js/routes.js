'use strict'
import home from './apps/pages/homepage.cmp.js'
import emailApp from './apps/email/pages/email-app.cmp.js'
import keepApp from './apps/keep/pages/keep-app.cmp.js'

const myRoutes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/email',
        component: emailApp
    },
    {
        path: '/keep',
        component: keepApp
    },

]
const myRouter = new VueRouter({routes: myRoutes})
export default myRouter;