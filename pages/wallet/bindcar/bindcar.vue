<template>
	<view class="bindcar grace-columns">
		<text>请绑定持卡人本人的银行卡</text>
		<view class="cantainer">
			<view class="grace-rows grace-space-between grace-flex-vcenter row">
				<view style="width: 200upx; margin-left: 30upx; line-height:36upx; margin-top:10upx">持卡人</view>
				<input type="text"  v-model="bank_card_name" placeholder="请输入银行卡号">
			</view>
			<view class="grace-rows  grace-space-between grace-flex-vcenter row">
				<view style="width: 200upx; margin-left: 30upx; line-height:36upx; margin-top:10upx">卡号</view>
				<input type="text"  v-model="bank_card_number"  placeholder="请输入银行卡号">
			</view>
			<view class="grace-rows grace-space-between grace-flex-vcenter row">
				<view style="width: 200upx; margin-left: 30upx; line-height:36upx; margin-top:10upx">开户行</view>
				<input type="text" v-model="bank_number" placeholder="请输入银行卡号">	
			</view>
		</view>
		<text class="msg">*一个账号只能绑定一张银行卡</text>
		<button @click="bincar" class="btn-bind">确定绑定</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bank_card_name: '',
				bank_card_number: '',
				bank_number: ''
			}
		},
		methods: {
			bincar(){
				this.$api.bindcar({bank_card_name:this.bank_card_name,vbank_card_number:this.vbank_card_number,bank_number:this.bank_number}).then(res => {
					console.log(JSON.stringify(res))
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F2F2F2;
	}
	.bindcar{
		width: 100%;
		padding-top: 30upx;
		overflow: hidden;
		text{
			font-size: 26upx;
			color: #777777;
			text-indent: 20upx;
			line-height: 30upx;
		}
		.msg{
			color: #DE3535;
		}
		.cantainer{
			width: 100%;
			height: 244upx;
			background-color: #fff;
			margin: 30upx 0;
			.row{
				height: 80upx;
				border-bottom: 2upx solid #CCCCCC;
				input{
					margin-left: 110upx;
				}
			}
		}
		.btn-bind{
			background-color: #1A7AFC;
			color: #fff;
			width: 702upx;
			height: 88upx;
			line-height: 88upx;
			margin-top: 80upx;
		}
	}
	
</style>
