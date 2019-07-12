// 跳转路径
export default{
	//没权限的路径
	codeL:{
		name: '手机快速登陆',
		path: '/pages/loding/loding',
	},
	pwdL:{
		name:'账号密码登陆',
		path: 'AccountLogin/AccountLogin'
	},
	reg:{
		name: '注册',
		path: '/pages/loding/registered/registered'
	},
	zpwd:{
		name: '找回密码',
		path: '../wangji/wangji'
	},
	
	// 权限路径
	home:{
		name: '首页',
		path: '/pages/index/index'
	},
	OrderDetails:{
		name: '订单详情',
		path: '/pages/index/OrderDetails/OrderDetails'
	},
	wallet:{
		name: '钱包',
		path: '/pages/wallet/wallet'
	},
	walletdetail:{
		name: '钱包明细',
		path: '/pages/wallet/walletdetail/walletdetail'
	},
	withdraw:{
		name: '申请提现页面',
		path: '/pages/wallet/withdraw/withdraw'
	},
	ordertoday:{
		name: '申请提现页面',
		path: '/pages/wallet/ordertoday/ordertoday'
	},
	bindcar:{
		name: '绑定银行卡',
		path: '/pages/wallet/bindcar/bindcar'
	},
	myinfo:{
		name: '个人中心',
		path: '/pages/index/myinfo/myinfo'
	},
	kefu:{
		name: '个人中心',
		path: '/pages/index/myinfo/customer/customer'
	}
}