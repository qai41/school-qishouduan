<template>
	<view>
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
		</view>
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
		</view>
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
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
page{background-color: #F2F3F3}
.orderderails{
	padding: 0 30upx;
	padding-top: 30upx;
	background-color: #ffffff;
	margin-top: 20upx;
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
}
</style>
