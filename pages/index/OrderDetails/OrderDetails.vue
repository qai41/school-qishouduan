<template>
	<view class="page">
		<!-- 正在配送 -->
		<view class="delivery">
			<text>正在配送</text>
			<text class="icon-arrow-right"></text>
		</view>
		<!-- 订单详情 -->
		<view class="orderderails grace-columns">
			<!-- 编号 -->
			<view class="few  grace-space-between ">
				<text>#{{detail.id}}</text>
				<text>尽快送达</text>
				<text>{{detail.total/100}}</text>
			</view>
			<!-- 地址 -->
			<view class="adderss grace-columns">
				<view class="grace-rows">
					<view class="ad_left">
						<view>取货</view>
						<view>送货</view>
					</view>
					<view class="ad_right">
						<view>{{detail.store.name}}</view>
						<view class="ac">{{detail.store.address}}</view>
						<view>{{detail.customer_address.school_building.name}}</view>
					</view>
				</view>
			</view>
			<!-- 物品 -->
			<view class="article grace-columns">
				<view class="items grace-space-between" v-for="tit of detail.products" :key="tit.id">
					<text class="article_name">
						{{tit.name}}
					</text>
					<text class="article_count">*{{tit.quantity}}</text>
					<text class="article_pir">￥{{tit.price/100}}</text>
				</view>				
			</view>
			<!-- 备注 -->
			<view class="rm remarks grace-space-between">
				<text class="marks_b">备注</text>
				<text class="marks_s">{{detail.comment}}</text>
			</view>
			<!-- 订单号 -->
			<view class="rm order_num grace-space-between">
				<text>订单号</text>
				<text>{{detail.order_number}}</text>
			</view>
			<!-- 下单时间 -->
			<view class="rm dow_time grace-space-between">
				<text>下单时间</text>
				<view>{{detail.created_at}}</view>
			</view>
		</view>
		<view class="option grace-rows" v-show="detail.status == 6? true:false">
			<view>{{detail.customer_address.phone}}</view>
			<view>{{detail.store.phone}}</view>
			<view style="color: #1A7AFC;" @click="songda(detail.id)">确定送达</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail1:null
			}
		},
		methods: {
			songda(id){ //确定送达
				console.log(id)
				this.$api.determine(id).then(res=>{
					if(res.status == 'success' && res.status_code == 200){
						this.$mUtils.msg({title:res.data.message})
						setTimeout(()=>{
							uni.navigateBack({
								delta: 1
							});
						},1500)
					}
				})
			}
		},
		computed:{
			detail:function(){
				return JSON.parse(this.detail1)
			}
		},
		onLoad:function(option){
			this.detail1 = option.titl1;
		}
	}
</script>

<style lang="scss" scoped>
	.page{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #F2F2F2;
		.delivery{
			width: 100%;
			font-size: 32upx;
			color: #333333;
			line-height: 88upx;
			background-color: #ffffff;
			text-align: center;
			margin-bottom: 20upx;
		}
		.orderderails{
			padding: 0 30upx;
			padding-top: 30upx;
			background-color: #ffffff;
			overflow: hidden;
			.few{
				color: #333333;
				font-weight: 400;
				text{
					font-size: 26upx;
					line-height: 36upx;
					&:first-child{
						font-size: 40upx;
						&::before{
							width: 12upx;
							height: 12upx;
							display: inline-block;
							content: '';
							background-color: #1A7AFC;
							position: relative;
							top: -12upx;
							margin-right: 30upx;
						}
					}
					&:last-child{
						font-size: 40upx;
						color: #DE3535;
					}
				}
			}
			.adderss{
				.ad_left{
					margin-top: 28upx;
					margin-bottom: 34upx;
					view{
						width: 64upx;
						font-size: 22upx;
						text-align: center;
						color: #777777;
						line-height: 36upx;
						overflow: hidden;
						&:first-child{
							&::after{
								position: relative;
								left: 32upx;
								margin: 12upx 0;
								display: block;
								content: '';
								width: 2upx;
								height: 56upx;
								background-color: #CCCCCC;
							}
						}
					}
				}
				.ad_right{
					padding: 30upx 30upx;
					overflow: hidden;
					clear: both;
					view{
						font-size: 28upx;
						color: #333333;
						line-height: 36upx;
						font-weight: 500;
					}
					.ac{
						margin-top: 12upx;
						margin-bottom: 30upx;
						font-size: 24upx;
						color: #777777;
						font-weight: 400;
					}
				}
			}
			.article{
				background-color: #F5F5F5;
				font-size: 30upx;
				color: #555555;
				padding-top:20upx;
				margin-bottom: 30upx;
				.items{
					padding-left: 20upx;
					padding-right: 86upx;
					margin-bottom: 30upx;
					line-height: 36upx;
					text{
						color: #555555;
					}
					.article_name{
						width: 268upx;
						height: 68upx;
						overflow: hidden;
					}
					.article_count{
						font-size: 32upx;
					}
					.article_pir{
						color: #DE3535;
						margin-left: 200upx;
					}
				}
			}
			.rm{
				color: #333333;
				line-height: 36upx;
				margin-bottom: 30upx;
			}
		}
		.option{
			height: 88upx;
			margin-bottom: 0;
			border-top: 2upx solid #E6E6E6;
			background-color: #ffffff;
			view{
				width: 33.33%;
				height: 100%;
				text-align: center;
				color: #333333;
				font-weight: 500;
				line-height: 88upx;
			}
		}
	}

</style>
