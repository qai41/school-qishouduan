<template>
	<!-- 局部选项卡 -->
	<view class="grace-tab">
		<myinfo class="left-cart" v-if="showcar" style="z-index: 99;"></myinfo>
		<scroll-view class="grace-tab-title grace-space-between" :scroll-x="true" :scroll-into-view="titleShowId">
			<view 
			v-for="(tab, index) in tabs" :class="[tabCurrentIndex == index ? 'grace-tab-current' : '']" 
			:id="'tabTag-'+index" 
			@tap="tabChange" 
			:key="index">
			{{tab.name}}
				<view class="nums">{{dindanNum}}</view>
			</view>
		</scroll-view>
		<swiper class="grace-tab-swiper" :current="swiperCurrentIndex" @change="swiperChange">
			<swiper-item style="margin-top: 80upx;">
				<scroll-view scroll-y="true">
					<view class="dan-list">
						<view class="items" @click="gopage(item)" v-for="item of dingdandetail" :key="item.id">
							<view class="grace-space-between dan-a grace-flex-vcenter">
								<view class="g_floor">
									#{{item.id}} 
								</view>
								<view class="f25">尽快送达</view>
								<view class="price f40 cred">￥{{item.total/100}}</view>
							</view>
							<view class="dan-b grace-relative">
								<view class="cell grace-space-between grace-flex-vcenter">
									<view class="vtags f22 c77">
										取货
									</view>
									<view class="desc flex_box_1">
										<view class="f28">{{item.store.name}}</view>
										<view class="f24 c77">{{item.store.address}}</view>
									</view>
								</view>
								<view class="cell grace-space-between grace-flex-vcenter">
									<view class="vtags f22 c77">
										送货
							 		</view>
									<view class="desc flex_box_1">
										<view class="f28">{{item.customer_address.school_building.name}}</view>
									</view>
								</view>
							</view>
							<view class="grace-nowrap dan-c">
								<view class="cell">{{item.customer_address.phone}}</view>
								<view class="cell">{{item.store.phone}}</view>
								<view class="cblue cell" @click.stop="songda(item.id)">确认送达</view>
							</view>
						</view>
						
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item  style="margin-top: 80upx;">
				<scroll-view scroll-y="true">
					<view class="dan-list"  v-for="today in carryOut">
						<view class="dan-date f32">{{today[0].created_at}}</view>
						<view class="items" v-for="title of today" :key="title.id" @click="gopage(title)">
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
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
 <!-- 局部选项卡 -->
	
</template>
<script>
	import myinfo from './myinfo.vue'
	export default {
	data() {
		return {
			tabCurrentIndex: 0,
			swiperCurrentIndex: 0,
			tabs: [
				{ name: '待完成', id: 'daiwancheng',num:'2'},
				{ name: '已完成', id: 'yiwancheng',num:''}
				
			],
			titleShowId : 'tabTag-0',
			pending:[
				
			],
			showcar:false,
			dingdan:[],
			carrylist: [],
			iscarr: false
		}
	},
	components:{
		myinfo
	},
	computed:{
		dindanNum:function (){
			return this.dingdan.length
		},
		dingdandetail:function (){ //监听有订单
			return this.dingdan
		},
		carryOut:function(){ //完成订单
			let time = [];
			let dailylist = [];
			let dailys = []
			this.carrylist.map(item => {
				time.push(item.created_at.split(' ')[0]);
			})
			time = new Set(time)
			time = [...time];
			
			for(let i = 0 ; i < time.length; i++){
				dailylist = [];
				for(let j = 0; j < this.carrylist.length; j++){
					if(time[i] == this.carrylist[j].created_at.split(' ')[0]){
						dailylist.push(this.carrylist[j])
					}
				}
				dailys.unshift(dailylist)
			}
			
			return dailys
		}
	},
	methods:{
		tabChange: function (e) {
			var index = e.target.id.replace('tabTag-', '');
			this.swiperCurrentIndex = index;
			this.tabCurrentIndex    = index;
			this.titleShowId        = 'tabTag-'+index;
		},
		 swiperChange: async function (e) {
			var index = e.detail.current;
			this.tabCurrentIndex = index;
			this.titleShowId = 'tabTag-'+index;
			if(index){
				this.outList()
			}else{
				this.carrylist = []
			}
		},
		gopage(item){// 跳往详情
			let data = JSON.stringify(item);
			this.$mRouterConfig.push({router: this.$mRouter.OrderDetails,query:{titl1:data}})
		},
		outList(){ //获取完成订单
			this.$api.courier_order({status:6}).then(res => {
				if(res.status == 'success' && res.status_code == 200){
					for(let item in res.data.orders){
						this.carrylist.push(res.data.orders[item]);
					}
				}
			})
		},
		getList(){
			let that = this
			//获取订单
			this.$api.courier_order().then(res => {
				if(res.status == 'success' && res.status_code == 200){
					for(let item in res.data.orders){
						this.dingdan.push(res.data.orders[item]);
					}
				}

			}) 
			//长连接
			let token = this.$store.state.token;
			uni.connectSocket({
				url: 'ws://47.106.104.248:5555?token='+token+'&type=courier',
			});
			uni.onSocketMessage(function(res) {
				// console.log('订单信息',res.data)
				let data = JSON.parse(res.data);
				if(data.type == 'notice'){
					that.$mUtils.msg({title:data.message})
					that.dingdan.unshift(data.order_data);
				}
			});
		},
		songda(id){ //确定送达
			console.log(id)
			this.$api.determine(id).then(res=>{
				if(res.status == 'success' && res.status_code == 200){
					this.$mUtils.msg({title:res.data.message})
				}
			})
		}
	},
	onNavigationBarButtonTap(e) { //导航栏的点击事件
	   this.showcar = !this.showcar
	},
	created() {
		this.getList();
		uni.hideTabBar()
	}
}
</script>
<style lang="scss" >
page{background: #f2f2f2;color: #333; }
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
.grace-tab-title {
	background: #fff; 
	position: fixed;
	/* #ifdef APP-PLUS */
	top: 0;
	/* #endif */
	left: 0; 
	right: 0; 
	height: 40px; 
	z-index: 9;
}
.grace-tab-title uni-view{margin:0;border-bottom: none;width:50%;padding:0;font-weight: normal;text-align: center;position: relative;}
.grace-tab-title uni-view.nums{position: absolute;width: 26upx;height: 26upx;line-height: 26upx;font-size: 20upx;  background: #DE3535;color: #fff;border-radius: 50%;left: auto;top:14upx;;}
.grace-tab-title .grace-tab-current{border-bottom: none !important;color: #1A7AFC;}
#tabTag-1 .nums{display: none;}
.dan-list{padding-bottom: 80upx;}
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
.swiper-item,scroll-view{height: 100%; overflow-y: hidden;}
swiper-item scroll-view:last-child{padding-bottom: 20px;}
.dan-date{color: #aaa;padding:0upx 30upx;}
// .dan-list:first-child :;padding:15upx 30upx; 
</style>