<template>
	<view class="loding">
		<bgLogin></bgLogin>
		<view class="content">
			<view class="p_log grace-space-between">
				<text>手机号快捷登陆</text>
				<text class="registered" @click="jump('reg')">注册</text>				
			</view>
			<mycodeinput ref="phone"></mycodeinput>
			<myphoneinput ref="code"></myphoneinput>
			<button class="login active" @click="login">登陆</button>
			<text class="pwd_login" @click="jump('pwdL')">账号密码登陆</text>
		</view>
	</view>
</template> 

<script>
	import bgLogin from '@/components/bg-login/bg-login.vue'
	import mycodeinput from '@/components/input-code/input-code.vue'
	import myphoneinput from '@/components/input-phone/input-phone.vue' 
	import GraceChack from '@/config/graceChecker.js'
	import Inputfule from '@/common/inputfule.js'
	import { mapMutations } from 'vuex'
	
	export default {
		data() {
			return {
				
			}
		},
		components:{
			bgLogin,
			mycodeinput,
			myphoneinput
		},
		methods: {
			
			login(){//登录
					//验证
					let data = {phone:this.$refs.phone.phone,code:this.$refs.code.code}
					let checkRes = GraceChack.check(data, Inputfule.codeL);
					if(!checkRes){
						uni.showToast({title: GraceChack.error,icon: 'none'})
						return
					}
					// 验证通过,发送请求
					uni.showLoading({title: '登陆中'});
					this.$api.phoneLong(data).then(res=>{
						// return res
						if(res.status == 'success'&&res.status_code == 200){
							console.log(JSON.stringify(res))
							uni.hideLoading()
							this.$store.commit('set_token',res.data.token.access_token); //保存token至本地
							this.$store.commit('set_info',res.data.courier) //保存用户信息至本地
							this.$mUtils.msg({title:'登陆成功'})
							this.$mRouterConfig.switchTab({router:this.$mRouter.home})
						}
					})
					
			},
			jump(path){//跳转事件
				this.$mRouterConfig.push({router: this.$mRouter[`${path}`]});
			}
		},
		onLoad() {

		}
	}
</script>

<style lang="scss">
	.loding{
		width: 100%;
		overflow: hidden;
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
				font-weight: 800;
				margin-bottom: 30upx;
				.registered{
					color: #777777;
					font-size: 32upx;
					&:after{
						display: inline-block;
						content: '';
						width: 28upx;
						height: 22upx;
						background-image: url('~@/static/LoginImg/back.png');
						background-repeat: no-repeat;
						background-position: center;
						background-size: 28upx 22upx;
						margin-left: 20upx;
					}
				}
			}
			.login{
				height: 88upx;
				background-color: #AAAAAA;
				font-size: 46upx;
				line-height: 88upx;
				text-align: center;
				margin-top: 80upx;
				color: #fff;
				&.active{
					background-color: #1A7AFC;
				}
			}
			.pwd_login{
				display: block;
				font-size: 36upx;
				line-height: 150upx;
				text-align: center;
				color: #333333;
			}
		}
	}

</style>
