<script>
	export default {
		onLaunch: function () {
			// uni.clearStorageSync();	
			if(this.$store.getters.hasLogin){  //判断是否登陆
				setTimeout(()=>{	
					this.$mRouterConfig.switchTab({router:this.$mRouter.home}) 
				},1000)
			}else{//没登陆就定向到登陆页
				setTimeout(()=> {
					this.$mRouterConfig.redirectTo({router:this.$mRouter.codeL})
				}, 1000);
			}
			// 全局刷新令牌
		},
		onShow: function () {
			
		},
		onHide: function () {
			
		},
		computed: {
			
		},
		methods:{
			
		}
	}
</script>

<style>
	@import "./graceUI/graceIcons.css";
	@import "./graceUI/graceUI.css";
</style>
