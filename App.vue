<script>
	export default {
		onLaunch: function () {
			console.log(this.$store.getters.hasLogin)
			if(this.$store.getters.hasLogin){  //判断是否登陆
				console.log('我现在是登陆状态')
				this.$mRouterConfig.redirectTo({router:this.$mRouter.home})
			}else{//没登陆就定向到登陆页
				console.log('我现在是没登录的状态')
				this.$mRouterConfig.redirectTo(this.$mRouter.codeL)
			}
		},
		onShow: function () {
			
		},
		onHide: function () {
			
		}
	}
</script>

<style>
	@import "./graceUI/graceIcons.css";
	@import "./graceUI/graceUI.css";
	@import "./static/comm/iconfont.css";
</style>
