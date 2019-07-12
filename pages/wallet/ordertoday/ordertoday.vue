<template>
	<view>
		<view class="dan-list">
			<view class="dan-date f32">{{today}}</view>
			<view class="items" v-for="title of carrylist" :key="title.id" @click="gopage(title)">
				<view class="grace-space-between dan-a grace-flex-vcenter">
					<view class="g_floor">
						#{{title.id}}
					</view>
					<view class="f25">已完成</view>
					<view class="price f40 cred">￥{{title.total/100}}</view>
				</view>
				<view class="dan-b grace-relative">
					<view class="cell grace-space-between grace-flex-vcenter">
						<view class="vtags f22 c77">
							取货
						</view>
						<view class="desc flex_box_1">
							<view class="f28">{{title.store.name}}</view>
							<view class="f24 c77">{{title.store.address}}</view>
						</view>
					</view>
					<view class="cell grace-space-between grace-flex-vcenter">
						<view class="vtags f22 c77">
							送货
						</view>
						<view class="desc flex_box_1">
							<view class="f28">{{title.customer_address.school_building.name}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				carrylist: []
			}
		},
		computed:{
			today(){
				var now = new Date();
				var year = now.getFullYear(); //得到年份
				var month = now.getMonth()+1;//得到月份
				var date = now.getDate();//得到日期
				String(month).length < 2 ? (month = "0" + month): month;
				String(date).length < 2 ? (date = "0" + date): date;
				let today = year+'-'+month+'-'+date
				return today
			}
		},
		methods: {
			//获取今日订单
			async ordertoday(){
				await this.$api.refreshToken().then(res => {
					this.$store.commit('set_token',res.data.access_token)
				})
				this.$api.courier_order({status:6}).then(res => {
					if(res.status == 'success' && res.status_code == 200){
						for(let item in res.data.orders){
							res.data.orders[item].created_at.split(' ')[0] == this.today?this.carrylist.push(res.data.orders[item]):''
						}
					}
				})
			}
		},
		created(){
			this.ordertoday()
		}
	}
</script>

<style>
page{background: #f2f2f2;color: #333; position: relative;}
.f22{font-size: 22upx;}
.f24{font-size: 24upx;}
.f25{font-size:26upx;}
.f28{font-size: 28upx;}
.f32{font-size: 32upx;}
.f40{font-size: 40upx;}
.cblue{color: #1A7AFC;}
.cred{color: #DE3535;}
.c77{color: #777;}
.flex_box_1{flex-grow:1;flex-shrink:1}
.dan-a,.dan-b{padding:2upx 30upx;}
.grace-margin{margin:0upx;}
.demo-img{padding:8upx 0;}
.demo-img image{width:100%; border-radius:8upx;}
.grace-tab-title {background: #fff;}
.grace-tab-title uni-view{margin:0;border-bottom: none;width:50%;padding:0;font-weight: normal;text-align: center;position: relative;}
.grace-tab-title uni-view.nums{position: absolute;width: 26upx;height: 26upx;line-height: 26upx;font-size: 20upx;  background: #DE3535;color: #fff;border-radius: 50%;left: auto;top:14upx;;}
.grace-tab-title .grace-tab-current{border-bottom: none !important;color: #1A7AFC;}
#tabTag-1 .nums{display: none;}
.dan-list{height: 100%;}
.dan-list{height: 100%;}
.dan-list .items{background: #fff;margin: 20upx 0;}
.g_floor{font-size:40upx;color: #333;position: relative;padding-left: 36upx;}
.g_floor:after{width: 12upx;height: 12upx;border-radius: 50%; background: #1A7AFC;content: '';position: absolute;left: 0;top:50%;margin-top:-6upx;}
.dan-b .desc{padding-left: 57upx;}
.dan-b .cell{margin-bottom: 40upx;}
.dan-b:after{content: '';border-left:1px dashed rgba(204,204,204,1);width: 1px;left:47upx;top:35upx;bottom: 55upx;position: absolute;content: '';}
.vtags{background: #fff;position: relative;z-index: 2;}
.dan-c{border-top: 1upx solid #E6E6E6;}
.dan-c .cell{ width: 100%;text-align: center;height:88upx; border-left: 1upx solid #E6E6E6;line-height: 88upx;}
.dan-c .cell:first-child{border-left: none;}
.grace-tab-swiper{height: calc(150vh - 44px - 80upx);}
.swiper-item,scroll-view{overflow-y: auto;height: 100%;}
.dan-date{color: #aaa;padding:0upx 30upx;}
.dan-list:first-child .dan-date{padding:15upx 30upx;margin-bottom: -20upx;}
</style>
