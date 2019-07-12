<template>
	<view class="content" @click="hidemsk">
		<view class="select grace-columns" @click.stop="aa">
			<view class="grace-columns">
				<text class="checkCar">选择到账方式</text>
				<text class="msg">请留意各银行到账时间</text>
			</view>
			<view :class="[isWx?'active':'', 'grace-space-between', 'grace-flex-vcenter']" @tap="wxPay">
				<text>建设银行储蓄卡</text>
				<view class="ckeck grace-columns grace-flex-vcenter"><text></text></view>
			</view>
			<view :class="[isCar?'active':'','grace-space-between' ,'grace-flex-vcenter']" @tap="checkcar">
				<text>微信支付</text>
				<view class="ckeck grace-columns grace-flex-vcenter"><text></text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				isckeck: false,
				isWx: false,
				isCar: false
				
			}
		},
		methods:{
			checkcar(){ //绑定银行卡
				this.$mRouterConfig.push({router:this.$mRouter.bindcar})
			},
			wxPay(){//提现
				this.isWx = !this.isWx;
				this.$parent.hidemsk();
				this.$emit('payWay','银行卡支付')
			},
			carrPay(){//提现
				this.isCar = !this.isCar;
				this.$parent.hidemsk();
				this.$emit('payWay','微信支付')
			},
			hidemsk(){
				this.$emit('hidemsk',false)
			},
			aa(){
				this.$emit('aa')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(88, 88, 88, .7);
		z-index: 999;
		.select{
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			height: 394upx;
			background-color: #fff;
			border-top-left-radius: 20upx;
			border-top-right-radius: 20upx;
			padding: 30upx;
			padding-bottom: 0;
			view{
				font-size: 28upx;
				color: #777777;
				border-bottom: 2upx solid  #E6E6E6;
				line-height: 86upx;
				.ckeck{
					width: 40upx;
					height: 40upx;
					border: 2upx solid #AAAAAA;
					border-radius: 50%;
					text{
						display: block;
						width: 25upx;
						height: 25upx;
						border-radius: 50%;
						background-color: #ffffff;
						margin-top: 8upx;
					}
				}
			}
			view.active{
				.ckeck{
					border: 2upx solid #137BFC;
					text{
						background-color: #137BFC;
					}
				}
			}
			.checkCar{
				font-weight: 800;
				line-height: 36upx;
				margin-bottom: 20upx;
			}
			.msg{	
				font-size: 22upx;
				line-height: 36upx;
				margin-bottom: 30upx;
			}
			.wx{
				border: none;
			}
		}
	}
</style>
