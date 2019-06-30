<template>
	<view class="phone-input grace-flex grace-flex-vcenter">
		<input type="text" :maxlength="maxlength" v-model="code" :placeholder="placeholder">
		<image @click="remove" :class="code?'active':'' " src="../../../static/LoginImg/dow.png"></image>
	</view>
</template>

<script>
	export default {
		props:{
			maxlength:{
				type: Number,
				default: 6
			},
			placeholder:{
				type: String,
				default: '请输入短信验证码'
			}
		},
		data() {
			return {
				code:''
			};
		},
		methods:{
			remove(){
				this.code = ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	.phone-input{
		border-bottom: 2upx solid #ccc;
		input{
			width: 650upx;
			font-size: 30upx;
			padding: 20upx 0;
		}
		image{
			display: none;
			width: 20upx;
			height: 20upx;
		}
		image.active{
			display: block;
		}
	}
</style>
