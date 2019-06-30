import Vue from 'vue'
import App from './App'
import store from './store'					 //vuex
import $mConfig from './common/index.config.js'  //开发模式/生产模式配置
import $api from './api/index.js'				//所有的请求
import $mRouterConfig from './config/jumpMode.js'//所有的跳转方式
import $mRouter from './common/routers.js'		 //所有页面的配置

import $mUtils from './common/utils.js'			//公共方法



Vue.config.productionTip = false

Vue.prototype.$mConfig = $mConfig
Vue.prototype.$api = $api
Vue.prototype.$mRouterConfig = $mRouterConfig
Vue.prototype.$mRouter = $mRouter
Vue.prototype.$store = store
Vue.prototype.$mUtils = $mUtils


/*
*	navType  跳转的方式
* 	to       单个页面的配置信息
*/
$mRouterConfig.beforeEach((navType,to) => {
	if(to.router == undefined ) return ('请配置跳转页面的名字',JSON.stringify(to));
	if(to.router.requiresAuth){//需要权限的页面
		if(store.getters.hasLogin){ //登陆状态:已登录
			uni[navType]({
				url: $mUtils.objParseUrlAndParam(to.router.path, to.query)
			})
		}else{//登陆状态: 没登陆
			$mUtils.msg({title:'登陆后才能访问'},function(){
				uni.navigateTo({url:'/pages/loding/loding'})
			})
			
		}		
	}else{//没权限的页面
		uni[navType]({
			url: $mUtils.objParseUrlAndParam(to.router.path,to.query)
		})
	}
	
})




App.mpType = 'app'

const app = new Vue({
    ...App
})





app.$mount()
