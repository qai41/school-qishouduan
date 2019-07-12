<template>
	<view class="page-code grace-flex grace-nowrap">
		<view class="code  grace-flex grace-flex-vcenter grace-space-between">
			<input type="text" v-model="phone" placeholder="请输入手机号">
			<image @click="remove" :class="phone?'active':'' " src="../../../static/LoginImg/dow.png" mode=""></image>
		</view>
		<view :class="[sendCode?'active':'', 'hadcode']" @click="obtain">获取验证码  {{oneM}}</view>
	</view>
</template>

<script>
	import GraceChack from '@/config/graceChecker.js'
	import Inputfule from '@/common/inputfule.js'
	export default{
		data(){
			return{
				phone:'',   //绑定的手机号
				sendCode: false,
				oneM: ''
			}
		},
		methods:{
			remove(){
				this.phone = ''
			},
			obtain(){
				let params = {phone:this.phone}; 						 //要验证的数据
				let isSend = GraceChack.check(params,Inputfule.codePhone)//验证是否通过
				if(isSend){
					this.sendCode = true ;
					let countdown = 60;
					if(!this.oneM){
						let time = setInterval(()=>{
							countdown --
							if(countdown <= 0){
								countdown = '';
								clearInterval(time);
								this.sendCode = false;
								this.oneM = ''
								return 
							}
							this.oneM = `${countdown}s`
						},1000)
						this.$api.code({phone:this.phone}).then(res=>{
							uni.showToast({
								title: '短信发送成功',
								icon: 'none'
							})
						})
					}
				}else{
					uni.showToast({
						title: GraceChack.error,
						icon: 'none'
					})
				}
			}
		},
		onLoad(){
			this.remove()
		}
	}
</script>

<style lang="scss" scoped>
	.page-code{
		border-bottom: 2upx solid #ccc;
		height: 100upx;
		.code{
			width: 444upx;
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
		.hadcode{
			width: 276upx;
			line-height: 100upx;
			text-align: center;
			color: #1A7AFC;
		}
		.hadcode.active{
			color: #777777;
		}
		
	}
</style>
