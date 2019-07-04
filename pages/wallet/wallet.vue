<template>
	<view class="wallet-main">
		<view class="waller-top grace-columns grace-flex-center grace-flex-vcenter">
			<text>¥{{money}}</text>
			<button>提现</button>
		</view>
		<view class="waller-content grace-columns <grace-flex-center></grace-flex-center>">
			<view class="title grace-rows grace-flex-vcenter">
				<text>今日预计收入</text>
			</view>
			<view class="title active grace-rows grace-flex-vcenter grace-space-between">
				<text>完成订单</text>
				<text>共100单</text>
				<view class="money grace-rows" @tap="walletdetail">
					¥ 100 <view class="eosfont">&#xe615;</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				money: 29800
			}
		},
		methods:{//跳转零钱明细
			walletdetail(){
				this.$mRouterConfig.push({router: this.$mRouter.walletdetail})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background: #F2F3F3;
	}
	.wallet-main{
		width: 100%;
		overflow: hidden;
		.waller-top{
			height: 260upx;
			background-color: #1A7AFC;
			font-size: 70upx;
			color: #fff;
			button{
				width: 280upx;
				height: 80upx;
				font-size: 32upx;
				color: #1A7AFC;
				line-height: 80upx;
				
			}
		}
		.waller-content{
			width: 100%;
			overflow: hidden;
			margin-top: 20upx;
			background-color: #fff;	
			.title{
				border-bottom: 2upx solid #E6E6E6;
				height: 90upx;
				padding: 0 30upx;
				.money{
					font-size: 26upx;
					color: #DE3535;
					view{
						color: #9A9A9A;
						margin-left: 30upx;
						line-height: 44upx;
					}
				}
			}
			.title.active{
				font-size: 26upx;
			}
		}
	}
</style>
