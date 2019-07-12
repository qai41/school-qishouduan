<template>
	<view class="page grace-columns">
		<view class="conten grace-columns">
			<view class="user-head ">
				<view class="grace-rows grace-space-between">
					<text>{{userinfo.is_work?'接单中':'休息中'}}</text>
					<view :class="[userinfo.is_work?'active':'','btn','grace-nowrap']" @tap="changework">
						<view></view>
					</view>
				</view>
			</view>
			<view class="user-content">
				<view class="title grace-wrap grace-flex-vcenter" @tap="jumppage('wallet')">
					<image src="../../static/whillt.png"></image>
					<text>钱包</text>
				</view>
				<view class="title acrive grace-wrap grace-flex-vcenter" @tap="jumppage('myinfo')">
					<image src="../../static/setting.png"></image>
					<text>设置</text>
				</view>
			</view>
		</view>
	</view>
</template>	

<script scoped>
	export default{
		data(){
			return{
				iswork: false,
				userinfo: ''
			}
		},
		methods:{
			changework(){ //修改工作状态
				this.userinfo.is_work = !this.userinfo.is_work;
				let data = {is_work: this.userinfo.is_work?1:0};
				this.$api.checkwork(data).then(res => {
					if(res.status == 'success' && res.status_code ==200){
						this.$mUtils.msg({title:res.data.message})
						this.getCurInfo()
					}
				})
			},
			jumppage(target){ //跳转钱包
				this.$mRouterConfig.push({router: this.$mRouter[`${target}`]})
			},
			getCurInfo(){ //获取骑手信息
				this.$api.courierinfo().then(res => {
					if(res.status == 'success' && res.status_code == 200){
						console.log(JSON.stringify(res.data))
						this.userinfo = res.data;
					}
				})
			}
		},
		created() {
			this.getCurInfo()
		}
	}
</script>
<style lang="scss" scoped>
	.page{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: rgba(51, 51, 51, .2);
		z-index: 99;
		.conten{
			padding-right: 142upx;
			overflow: hidden;
			.user-head{
				width: 100%;
				height: 320upx;
				background-color: #8590A2;
				padding-top: 78upx;
				padding-left: 30upx;
				padding-right: 60upx;
				box-sizing: border-box;
				text{
					color: #fff;
				}
				image{
					width: 98upx;
					height: 98upx;
					border-radius: 50%;
					margin-right: 28upx;
					margin-bottom: 68upx;
				}
				image + text{
					line-height: 108upx;
				}
				.btn{
					width: 80upx;
					height: 40upx;
					background-color: #fff;
					border-radius: 20upx;
					view{
						width: 40upx;
						height: 40upx;
						border-radius: 50%;
						box-sizing: border-box;
						box-shadow: #8590A2;
						background-color: #fff;
						box-shadow: 2upx 2upx 2upx #8590A2;
					}
				}
				.btn.active{
					background-color: #137BFC;
					justify-content: flex-end;
				}
			}
			.user-content{
				background-color: #F5F5F5;
				width: 100%;
				height: 974upx;
				.title{
					width: 100%;
					height: 120upx;
					margin-top: 30upx;
					background-color: #fff;
					line-height: 120upx;
					padding-left: 30upx;
					box-sizing: border-box;
					image{
						width: 42upx;
						height: 38upx;
						margin-right: 70upx;
					}
					&:nth-child(2){
						background-color: #F5F5F5; 
					}
				}
				
			}
		}
	}
	
</style>
