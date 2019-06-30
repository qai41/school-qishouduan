import http from '@/api/http.js';
import path from '@/common/index.config.js';

const url = path.production.apiPath;

const registered = (data) => http.POST(`${url}/api/courier`,data) 
	
const login = (data) => http.POST(`${url}/api/courier_auth`,data) 

const userinfo = (data) => http.GET(`${url}/api/courier`,data)  

const code = (data) => http.POST(`${url}/api/auth/sms`,data)

const phoneLong = (data) => http.POST(`${url}/api/courier_auth/phone_login`,data)

const retrieve = (data) => http.POST(`${url}/api/courier_auth/find`,data)

const refreshToken = () => http.GET(`${url}/api/courier_auth/refresh`)

export default{
	registered,  //注册
	login,		//登陆
	userinfo,	//获取骑手信息
	code,		//短信验证码
	phoneLong,	//短信登陆
	retrieve,	//找回密码
	refreshToken //刷新令牌
	
	
}	