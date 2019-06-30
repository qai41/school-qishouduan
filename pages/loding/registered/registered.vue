<template>
	<view class="page">
		<view class="content">
			<view class="username grace-flex grace-flex-vcenter">
				<input type="text" v-model="name" placeholder="请输入你的名字">
				<image @click="remove" :class="name?'active':'' " src="../../../static/LoginImg/dow.png"></image>
			</view>
			<mycodeinput ref="codePhone"></mycodeinput>
			<myPhoneinput ref="code"></myPhoneinput>
			<mypassword ref="password"></mypassword>
			<!-- 工作类型 -->
			<view class="work_title grace-space-between">
				<text>请选择工作类型</text>
				<text :class="[full?'active':'','title1']" @click="changefull">兼职</text>
				<text :class="[full?'':'active','title1']" @click="changefull">全职</text>
			</view>
			<!-- 身份证验证 -->
			<view class="user-car">
				请上传身份证正反面
			</view>
			<!-- 正反 -->
			<view class="card grace-rows">
				<view class="vice grace-columns">
					<image @click="anti(true)" src="../../../static/LoginImg/user-car.png"></image>
					<text>正面</text>
				</view>
				<view class="vice grace-columns">
					<image @click="anti(false)" src="../../../static/LoginImg/user-car.png"></image>
					<text>反面</text>
				</view>
			</view>
			<!-- 政策 -->
			<view class="msg grace-rows">
				<view :class="ok?'ojbk':''"  @click="agree"></view>
				<text grace-rows>点击“立即注册”按钮即同意<text>《校餐宝隐私政策》</text>及<text>《校餐 宝用户服务协议》</text></text>
			</view>
			<!-- 注册 -->
			<button class="btn-reg active" @click="login">登陆</button>
		</view>
	</view>
</template>

<script>
	import mycodeinput	from '../../../components/input-code/input-code.vue'
	import myPhoneinput from '../../../components/input-phone/input-phone.vue'
	import mypassword from '../../../components/input-password/input-password.vue'
	export default {
		name: 'regisrered',
		data() {
			return {
				full: false,
				ok: false,
				photo1:'',
				photo2:'',
				name: ''
			}
		},
		computed:{
			full_time(){
				if(this.full){
					return '1'
				}else{
					return '2'
				}
			}
		},
		components: {
			myPhoneinput,
			mycodeinput,
			mypassword
		},
		methods: {
			agree(){
				this.ok = !this.ok
			},
			changefull(){
				this.full = !this.full
			},
			anti(iszheng){
				uni.chooseImage({ //获取图片
					count: 1, //默认9
					sizeType: ['original', 'compressed'],
					sourceType: ['album','camera'], 
					success: res => {
						iszheng?this.photo1 = res.tempFilePaths[0]:this.photo2 = res.tempFilePaths[0]
					}
				});
			},
			login(){ //发送注册信息
				let arr = [{name:'photo1',uri:this.photo1},{name:'photo2',uri:this.photo2}]
				uni.uploadFile({
					url: 'http://xchl.utobang.com/api/courier',
					files:arr,
					formData: {
						name: this.name,
						phone: this.$refs.codePhone.phone,
						code: this.$refs.code.code,
						password: this.$refs.password.password,
						full_time: this.full_time,
						school_id: 1
					},
					success: (uploadFileRes) => {
						if(uploadFileRes.status_code == '200' ){
							this.$mUtils.msg({title:'注册成功'},function(){
								uni.redirectTo({
									url:'/pages/index/index'
								})
							})
						} 
					}
				});
			},
			remove(){
				this.name = ''
			}
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
		.content{
			height: 100%;
			padding: 0 30upx;
			.username{
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
			.work_title{
				font-size: 32upx;
				height: 100upx;
				border-bottom: 2upx solid #CCCCCC;
				color: #333;
				line-height: 100upx;
				.title1{
					width: 132upx;
					height: 56upx;
					margin-top: 20upx;
					background-color: #ffffff;
					border-radius: 10upx;
					border: 2upx solid #333333;
					text-align: center;
					line-height: 56upx;
				}
				.title1.active{
					background-color: #1A7AFC;
				}
			}
			.user-car{
				font-size: 30upx;
				color: #333333;
				line-height: 130upx;
			}
			.card{
				width: 100%;
				height: 244upx;
				.vice{
					width: 144upx;
					font-size: 32upx;
					line-height: 100upx;
					color: #333333;
					text-align: center;
					font-weight: 600;
					image{
						width: 144upx;
						height: 144upx;
						&:after{
							display: block;
							content: "正面";
							font-size: 32upx;
							text-align: center;
							z-index: 9;
						}
					}
					&:first-child{
						margin-left: 92upx;
					}
					&:last-child{
						margin-left: 220upx;
					}
					
				}
			}
			.msg{
				height: 60upx;
				view{
					width: 54upx;
					height: 48upx;
					background-color: rgba(219, 230, 243, .5);
					margin-right: 30upx;
				}
				.ojbk{
					background: url(../../../static/LoginImg/ok.png) no-repeat center;
					background-size: 48upx 48upx;
				}
				text{
					font-size: 24upx;
					color: #AAAAAA;
					line-height: 24upx;
				}
			}
			.btn-reg{
				height: 88upx;
				margin-top: 120upx;
				text-align: center;
				color: #ffffff;
				font-weight: 600;
				background-color: #AAAAAA;
			}
			.btn-reg.active{
				background-color: rgba(26, 122, 252, 1);
			}
		}
	}
</style>
