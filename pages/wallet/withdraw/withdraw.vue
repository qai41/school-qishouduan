<template>
	<view class="withdrwa">
		<view class="aa">
			<view class="select grace-space-between" @tap="withdraw">
				<text>提取到</text>
				<text >{{paywap}}</text>
				<text >></text>
			</view>
			<view class="money grace-columns">
				<text class="title">提现金额</text>
				<view class="grace-rows money_inp">
					<text>￥</text>
					<input type="text" placeholder="请输入金额" v-model="much">
				</view>
			</view>
			<button type="primary" class="whithmoney" @tap="withdrawmoney">提现</button>
		</view>
		<selecta v-if="iswhithdrwa" @hidemsk = "hidemsk" @payWay="payWay" @aa= "aa"></selecta>
	</view>
</template>
 
<script>
	import selecta from './select.vue'
	export default{
		data(){
			return{
				iswhithdrwa: false,
				paywap: '请选择提现到微信或银行卡',
				much: null
			}
		},
		components:{
			selecta
		},
		methods:{
			withdrawmoney(){
				this.$api.withdraw({amount:this.much}).then(res => {
					console.log(JSON.stringify(res))
				})
			},
			payWay(way){
				this.paywap = way
			},
			withdraw(){
				this.iswhithdrwa = true;
			},
			hidemsk(hide){
				this.iswhithdrwa = hide
			},
			aa(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{background: #f2f2f2;color: #333;position: absolute; top: 0; bottom: 0; left: 0; right: 0;}
	.withdrwa{
		height:  calc(100% - 44px);
		padding: 30upx;
		border-color: #fff;
		.aa{
			height: 476upx;
			background-color: #ffffff;
			font-size: 24upx;
			color: #333;
			border-radius: 10upx;
			.select{
				padding: 0 30upx;
				line-height: 100upx;
				color: #777777;
				border-bottom: 2upx solid #CCCCCC;
				text{
					&:first-child{
						color: #333;
						font-weight: 800;
					}
					&:nth-child(2){
						font-weight: 800;
						font-size: 22upx;
					}
				}
			}
			.money{
				height: 176upx;
				margin: 0 30upx;
				border-bottom: 2upx solid #cccccc;
				line-height: 36upx;
				.title{
					margin-top: 50upx;
					font-weight: 800;
					margin-bottom: 30upx;
				}
				.money_inp{
					font-size: 60upx;
					line-height: 36upx;
					input{
						width: 650upx;
						font-size: 30upx;
						// padding: 20upx 0;
						padding-left: 30upx;
					}
				}
			}
		}
		.whithmoney{
			color: #fff;
			font-size: 40upx;
			font-weight: 800;
			line-height: 88upx;
			margin: 0 30upx;
			margin-top: 80upx;
		}
	}
</style>