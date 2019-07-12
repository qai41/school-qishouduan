import http from '@/api/http.js';
import path from '@/common/index.config.js';

const url = path.production.apiPath;
console.log(url)

const registered = (data) => http.POST(`${url}/api/courier`,data) 
	
const login = (data) => http.POST(`${url}/api/courier_auth`,data) 

const userinfo = (data) => http.GET(`${url}/api/courier`,data)  

const code = (data) => http.POST(`${url}/api/auth/sms`,data)

const phoneLong = (data) => http.POST(`${url}/api/courier_auth/phone_login`,data)

const retrieve = (data) => http.POST(`${url}/api/courier_auth/find`,data)

const refreshToken = () => http.GET(`${url}/api/courier_auth/refresh`)

const courier_order = (data) => http.GET(`${url}/api/courier_order`,data)

const courierinfo = () => http.GET(`${url}/api/courier`)

const checkwork = (data) => http.POST(`${url}/api/courier/work`,data)  

const determine = (data) => http.GET(`${url}/api/courier_order/confirm/${data}`,)

const withdraw = (data) => http.POST(`${url}/api/withdrawal/courier`,data)

const bindcar = (data) => http.POST(`${url}/api/courier/binding_bank_card`,data)

const feedback = (data) => http.POST(`${url}/api/courier/feedback`,data)

export default{
	registered,  //注册
	login,		//登陆
	userinfo,	//获取骑手信息
	code,		//短信验证码
	phoneLong,	//短信登陆
	retrieve,	//找回密码
	refreshToken, //刷新令牌
	courier_order,  //获取订单列表
	courierinfo, 	//获取起手信息
	checkwork ,		//更改工作状态
	determine,		//确定送达
	withdraw,		//申请提现
	bindcar,		//绑定银行卡
	feedback		//意见反馈
}	