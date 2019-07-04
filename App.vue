<script>
	export default {
		onLaunch: function () {
			// uni.removeStorageSync('token')
			if(this.$store.getters.hasLogin){  //判断是否登陆
				setTimeout(()=>{	
					this.$mRouterConfig.redirectTo({router:this.$mRouter.home}) 
				},1000)
			}else{//没登陆就定向到登陆页
				setTimeout(()=> {
					this.$mRouterConfig.redirectTo({router:this.$mRouter.codeL})
				}, 1000);
			}
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
	@import "./static/iconfont.css";
</style>
