<template>
	<view class="page">
		<image :src="logo"></image>
		<view class="user grace-columns">
			<image class="user_img" src="../../static/logo.png"></image>
			<text>校餐宝骑手版</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logo: '/static/LoginImg/bg-img.png'
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.page{
		position: relative;
		width: 100%;
		height: 440upx;
		background-image: linear-gradient(0deg, #1A7AFC 0%,#5DA1FD 100%);
		image{
			// position: absolute;
			// top: 0;
			width: 100%;
			height: 100%;
			z-index: 9;
		}
		.user{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-60px ,-30upx);
			width: 226upx;
			height: 350upx;
			text-align: center;
			font-size: 38upx;
			color: #fff;
			font-weight: 500;
			line-height: 36upx;
			.user_img{
				width: 140upx;
				height: 140upx;
				margin: 0 auto;
				background-color: aliceblue;
			}
			text{
				margin-top: 40upx;
			}
		}
	}

</style>
