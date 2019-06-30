import Vue from 'vue'
import Vuex from 'vuex'
import $mRouterConfig from '../config/jumpMode.js'  //跳转方式
import $mRouter from '../common/routers.js'		  //页面信息配置

Vue.use(Vuex)

const TONKEN = uni.getStorageSync('token') //获取本地的token
console.log(TONKEN)
const USER_INFO = uni.getStorageSync('user_info') //获取本地个人信息

const store = new Vuex.Store({
	state:{
		token: TONKEN,
		user_info: USER_INFO
	},
	getters:{
		hasLogin(state){  //是否登陆
			if(state.token){
				return true
			}else{
				return false
			}
		}
	},
	mutations:{
		set_token(state,token){//设置token
			state.token = token;
			uni.setStorageSync('token',token)
		},
		set_logout(state,token){//登出
			state.token = '';
			uni.setStorageSync('token',"")
		},
		set_info(state,info){
			state.user_info = info;
			uni.setStorageSync('user_info',info)
		}
	},
	actions:{
		// 登陆过期
		reLogin({commit},info){
			commit('set_token','');
			$mRouterConfig.redirectTo(
				{router: $mRouter.login}
			)
		}
	}
})



export default store


