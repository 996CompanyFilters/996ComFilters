// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import { TweenMax, TimelineMax, CSSPlugin } from "gsap/TweenMax";
import Vuex from 'vuex'
import store from './store'
import jsonData from './data/996company.json'

import { XButton, Divider, Group, Cell, XHeader, FlexboxItem, Flexbox, Search, XTable } from 'vux'
Vue.component('divider', Divider)
Vue.component('group', Group)
Vue.component('cell', Cell)
Vue.component('x-button', XButton)
Vue.component('x-header', XHeader)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)
Vue.component('search', Search);
Vue.component('x-table', XTable)
Vue.config.productionTip = false
Vue.prototype.$jsonData = jsonData
Vue.prototype.$axios = axios
Vue.prototype.$host = '/api'
import packedAxios from "./http";
Vue.use(packedAxios); //使用this.$http代替封装好的axios
Vue.use(Vuex);
//移动端延迟配置
const FastClick = require('fastclick')
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})