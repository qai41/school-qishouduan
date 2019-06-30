 
 // 跳转方式
 
 class Router {
	 constructor(arg){
		 this.callBack = ()=>{}
	 }
	 
	 beforeEach(callBack){
		 if(callBack instanceof Function) return this.callBack = callBack;
	 }
	 
	 push(to){
		 this.callBack('navigateTo',to)
	 }
	 
	redirectTo(to){
		this.callBack('redirectTo',to)
	}

 }
 
 export default new Router()