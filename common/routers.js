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
		path: '/pages/index/index',
		requiresAuth: true
	},
	OrderDetails:{
		name: '订单详情',
		path: '/pages/index/OrderDetails/OrderDetails',
		requiresAuth: true
	},
	wallet:{
		name: '钱包',
		path: '/pages/wallet/wallet',
		requiresAuth: true
	},
	walletdetail:{
		name: '钱包明细',
		path: '/pages/wallet/walletdetail/walletdetail',
		requiresAuth: true
	}
}