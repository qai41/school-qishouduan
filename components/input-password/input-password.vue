<template>
	<view class="phone-input grace-flex grace-flex-vcenter">
		<input type="password" v-model="password"  :placeholder="placeholder">
		<image @click="remove" :class="password?'active':'' " src="../../../static/LoginImg/dow.png"></image>
	</view>
</template>

<script>
	export default {
		props:{
			placeholder:{
				type: String,
				default: '请输入新密码 (最少8位,字母加数字)'
			}
		},
		data() {
			return {
				password:''
			};
		},
		methods:{
			remove(){
				this.password=""
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
