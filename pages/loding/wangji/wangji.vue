 <template>
	 <view class="retrieve">
		<mycodeinput ref="code"></mycodeinput>
		<myphoneinput ref="phone"></myphoneinput>
		<mypasswordinput ref="password"></mypasswordinput>
		<button class="active" @click="submit">提交</button>
	 </view>
 </template>
 
 <script>
	import mycodeinput	from '../../../components/input-code/input-code'
	import myphoneinput	from '../../../components/input-phone/input-phone'
	import mypasswordinput	from '../../../components/input-password/input-password'
	import GraceChack from '../../../config/graceChecker.js'
	import Inputfule from '../../../common/inputfule.js'
	 
	 export default{
		 name:'findpwd',
		 components:{
			 mycodeinput,
			 myphoneinput,
			 mypasswordinput
		 },
		 methods:{
			 submit(){
				 let data = {code:this.$refs.phone.code,phone:this.$refs.code.phone,password:this.$refs.password.password};
				 let checkRes = GraceChack.check(data,Inputfule.findpwd);
				 if(checkRes){//验证成功
					 this.$api.retrieve(data).then(res => {
						if(res.status == 'success'&&res.status_code == 200){
							this.$store.commit('set_token',res.data.token.access_token); //保存token至本地
							this.$store.commit('set_info',res.data.courier) //保存用户信息至本地
							this.$mUtils.msg({title:'修改成功'})
							this.$mRouterConfig.redirectTo({router:this.$mRouter.home})
						}
						console.log('修改成功',JSON.stringify(res.data))
					 }) 
				 }else{
					 uni.showToast({
					 	title: GraceChack.error,
						icon: 'none'
					 })
				 }
				 
				 
				 
				
			 }
		 }
	 }
 </script>
 
 <style lang="scss" scoped>
	 .retrieve{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		padding:30upx 30upx 0 48upx;
		padding-top: 100upx;
		background-color: #F2F2F2;
		overflow: hidden;
		button{
			width: 690upx;
			height: 88upx;
			background-color: #AAAAAA;
			margin-top: 120upx;
		}
		button.active{
			background-color: #1A7AFC;
			color: #fff;
		}
	 }
 </style>