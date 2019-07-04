<template>
	<view class="loding">
		<bgheader></bgheader>
		<view class="content">
			<view class="p_log grace-space-between">
				<text>账号密码登陆</text>
				<text class="registered" @click="jump('reg')">注册</text>				
			</view>
			<myphone ref="code"  :placeholder="plPhone" :maxlength="maxlength"></myphone>
			<mypwd ref="password" :placeholder="plpwd"  ></mypwd>
			<button class="login" @click="pwdlogin">登陆</button>
			<view class="option grace-flex grace-flex-vcenter grace-flex-center">
				<text @click="jump('codeL')">手机快捷登陆</text>
				<view></view>
				<text @click="jump('zpwd')">忘记面目</text>
			</view>
		</view>
	</view>
</template>

<script>
	import bgheader from '@/components/bg-login/bg-login'
	import myphone from '@/components/input-phone/input-phone'
	import mypwd from '@/components/input-password/input-password'
	import GraceChack from '@/config/graceChecker.js'  
	import Inputfule from '@/common/inputfule.js'
	
	export default{
		name: 'pwdlogin',
		data(){
			return{
				plPhone: '请输入手机号',
				plpwd: '请输入密码',
				maxlength: 11
			}
		},
		components:{
			bgheader,
			myphone,
			mypwd
		},
		methods:{
			pwdlogin(){ //登陆
				let params = {phone:this.$refs.code.code,password:this.$refs.password.password};//要验证/发送的数据
				let checkRes = GraceChack.check(params,Inputfule.pwdl);  						//验证是否通过
				if(checkRes){ //验证成功
					uni.showLoading({title: '登陆中'});
					this.$api.login(params).then(res => {
						// console.log(JSON.stringify(res))  //登陆成功 待处理
						if(res.status == 'success' && res.status_code == 200){
							uni.hideLoading()
							this.$store.commit('set_token',res.data.token.access_token); //保存token至本地
							this.$store.commit('set_info',res.data.courier) //保存用户信息至本地
							this.$mUtils.msg({title:'登陆成功'})
							this.$mRouterConfig.redirectTo({router:this.$mRouter.home})
						}
					})
				}
			},
			jump(path){//跳转事件
				this.$mRouterConfig.push({router: this.$mRouter[`${path}`]});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		background-color: #fff;
		border-top-left-radius: 20upx;
		border-top-right-radius: 20upx;
		transform: translateY(-10px);
		padding:30upx 30upx 0 48upx;
		overflow: hidden;
		.p_log{
			font-size: 46upx;
			color: #333333;
			font-weight: 600;
			margin-bottom: 30upx;
			.registered{
				color: #777777;
				font-size: 32upx;
				&:after{
					display: inline-block;
					content: '';
					width: 12upx;
					height: 20upx;
					background-color: #333333;
					margin-left: 20upx;
				}
			}
		}
		.login{
			height: 88upx;
			background-color: #1A7AFC;
			font-size: 46upx;
			line-height: 88upx;
			text-align: center;
			margin-top: 80upx;
			color: #fff;
		}
		.option{
			font-size: 36upx;
			line-height: 154upx;
			text-align: center;
			view{
				width: 2upx;
				height: 30upx;
				background-color: #333333;
				margin: 52upx;
				font-weight: 400;
			}
		}
	}
</style>
