'use strict'
import {eventBus} from './apps/services/eventbus-service.js'
import appHeader from './apps/global-cmps/app-header.cmp.js'
import theRouter from './routes.js'

Vue.config.productionTip = false;

let options = {
    el: '#my-app',
    template: `
                <div class="main">
                    <app-header></app-header>
                    <router-view></router-view>
                </div>
    `,
    router:theRouter,
    components:{
        appHeader,
        eventBus
    }
}
new Vue(options);