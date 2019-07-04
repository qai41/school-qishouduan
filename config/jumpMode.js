 
 // 跳转方式
 
 class Router {
	 constructor(arg){
		 this.callBack = ()=>{}
	 }
	 
	beforeEach(callBack) {
		if (callBack instanceof Function) this.callBack = callBack;
	}
	 
	push(to) { //保留当前页面跳转
		this.callBack("navigateTo", to);
	}
	 
	 
	redirectTo(to) { //关闭当前页面,跳转到某个页面
		this.callBack("redirectTo", to);
	}

	reLaunch(to) {//关闭所有页面，打开到应用内的某个页面。
		this.callBack("reLaunch", to);
	}
	
	switchTab(to) {//跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
		this.callBack("switchTab", to);
	}
 }
 
 export default new Router()