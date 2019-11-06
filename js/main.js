'use strict'
import appHeader from './apps/global-cmps/app-header.cmp.js'
import theRouter from './routes.js'

Vue.config.productionTip = false;

let options = {
    el: '#my-app',
    template: `
                <section>
                    <app-header></app-header>
                    <router-view></router-view>
                </section>
    `,
    router:theRouter,
    components:{
        appHeader
    }
}
new Vue(options);