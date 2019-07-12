<template>
	<view class="customer">
		<view class="header">
			<image src="../../../../static/kefu.png"></image>
			<text>Hi,有什么需要反馈？</text>
		</view>
		<view class="container">
			
		</view>
		<view class="name">
			<view>姓名(必填)</view>
			<input type="text" placeholder="请输入您的姓名以方便我们搜到反馈后联系您！" v-model="name">
		</view>
		<view class="name">
			<view>联系方式(必填)</view>
			<input type="text" placeholder="请输入您的电话以方便我们搜到反馈后联系您！" v-model="phone">
		</view>
		<button class="btn" @tap="Feedback">提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: 'qweeqw',
				phone: '',
				name: ''
			}
		},
		methods: {
			Feedback(){
				let data = {content:this.content,phone:this.phone,name:this.name}
				this.$api.feedback(data).then(res => {
					if(res.status == 'success' && res.status_code ==200){
						this.$mUtils.msg({title:res.data.message})
						this.content = '',
						this.phone = '',
						this.name = ''
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.customer{
		padding: 30upx;
		padding-top: 50upx;
		.header{
			height: 120upx;
			margin-bottom: 30upx;
			image{
				float: left;
				width: 120upx;
				height: 120upx;
				border-radius: 50%;
				margin-right: 50upx;				
			}
			text{
				float: left;
				font-weight: bold;
				font-size: 36upx;
				line-height: 120upx;
			}
		}
		.container{
			height: 280upx;
			border: 2upx solid #CCCCCC;
		}
		.name{
			font-size: 28upx;
			view{
				font-size: 30upx;
				margin: 30upx 0;
			}
			input{
				box-sizing: border-box;
				height: 86upx;
				border: 2upx solid #CCCCCC;
				padding: 5upx;
				line-height: 36upx;
				// text-indent: 30upx;
				padding-left: 30upx;
			}
		}
		.btn{
			height: 80upx;
			margin: 30upx;
			background-color: #137BFC;
			color: #fff;
		}
	}
</style>
