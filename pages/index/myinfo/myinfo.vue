<template>
	<view class="my-info">
		<view class="setting grace-rows grace-space-between grace-flex-vcenter" @click="jumppage">
			<texr>客服反馈</texr>
			<image src="../../../static/LoginImg/back.png"></image>
		</view>
		<button type="primary" @click="logout">退出登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			logout(){
				console.log('我执行了吗')
				this.$store.commit('set_logout')
			},
			jumppage(){
				console.log('w j ')
				this.$mRouterConfig.push({router:this.$mRouter.kefu})
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #F2F2F2;
}
.my-info{
	.setting{
		margin-top: 30upx;
		margin-bottom: 90upx;
		background-color: #FFFFFF;
		font-size: 30upx;
		font-weight: 800;
		line-height: 80upx;
		padding: 0 30upx;
	}
	image{
		width: 20upx;
		height: 36upx;
	}
	button{
		margin: 0 30upx;
	}
}
</style>
