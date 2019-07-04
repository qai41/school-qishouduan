<template>
	<view class="walletdetail">
		<view class="income grace-rows">
			<view class="yue grace-columns">
				<text class="hao">23号</text>
				<text class="year">2019/03</text>
			</view>
			<view class="icon"></view>
		</view>
		<view class="reflect grace-rows">
			<view class="yue grace-columns">
				<text class="hao">23号</text>
				<text class="year">2019/03</text>
			</view>
			<view class="icon"></view>
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

<style lang="scss">
	page{
		background-color: #F2F3F3;
	}
	text{
		font-size: 26upx;
		color: #333333;
		line-height: 36upx;
		margin-top: 30upx;
	}
	.walletdetail{
		width: 100%;
		overflow: hidden;
		.reflect,
		.income{
			width: 100%;
			margin-top: 20upx;
			background-color: #FFFFFF;
			padding-left: 30upx;
			.yue{
				.hao{
					
					font-size: 32upx;
				}
				.year{
					color: #777777;
				}
			}
			.icon{
				width: 20upx;
				height: 20upx;
				background-color: #1A7AFC;
				border-radius: 50%;
				margin-top: 30upx;
				margin-left: 50upx;
				margin-right: 50upx;
			}
		}
	}
</style>
