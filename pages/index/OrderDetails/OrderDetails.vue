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
				<text>#1</text>
				<text>尽快送达</text>
				<text>￥3.5</text>
			</view>
			<!-- 地址 -->
			<view class="adderss grace-columns">
				<view class="grace-rows">
					<view class="ad_left">
						<view>取货</view>
						<view>送货</view>
					</view>
					<view class="ad_right">
						<view>潮佳兴（肠粉王）</view>
						<view class="ac">彩田路3067号财富大厦惠福阁门口</view>
						<view>黄河科技信息大楼</view>
					</view>
				</view>
			</view>
			<!-- 物品 -->
			<view class="article grace-columns">
				<view class="items grace-space-between">
					<text class="article_name">
						正宗老北京烤鸭卷饼 套餐超长标题正宗老北京烤鸭卷饼 套餐超长标题......
					</text>
					<text class="article_count">*1</text>
					<text class="article_pir">￥125</text>
				</view>
				<view class="items grace-space-between">
					<text class="article_name">
						正宗老北京烤鸭卷饼
					</text>
					<text class="article_count">*1</text>
					<text class="article_pir">￥125</text>
				</view>
			</view>
			<!-- 备注 -->
			<view class="rm remarks grace-space-between">
				<text class="marks_b">备注</text>
				<text class="marks_s">少辣</text>
			</view>
			<!-- 订单号 -->
			<view class="rm order_num grace-space-between">
				<text>订单号</text>
				<text>20170719003</text>
			</view>
			<!-- 下单时间 -->
			<view class="rm dow_time grace-space-between">
				<text>下单时间</text>
				<view class="grace-rows">2019-04-03<view></view>09:47</view>
			</view>
		</view>
		<view class="option grace-rows">
			<view>联系商家</view>
			<view>联系顾客</view>
			<view>确定送达</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
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
				font-weight: Bold;
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
						font-weight: 800;
					}
					.ac{
						margin-top: 12upx;
						margin-bottom: 30upx;
						font-size: 24upx;
						color: #777777;
						font-weight: 500;
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
				font-weight: bold;
				line-height: 88upx;
			}
		}
	}

</style>
