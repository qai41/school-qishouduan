<template>
	<!-- 局部选项卡 -->
	<view class="grace-tab">
		<myinfo class="left-cart" v-if="showcar"></myinfo>
		<scroll-view class="grace-tab-title grace-space-between" :scroll-x="true" :scroll-into-view="titleShowId">
			<view 
			v-for="(tab, index) in tabs" :class="[tabCurrentIndex == index ? 'grace-tab-current' : '']" 
			:id="'tabTag-'+index" 
			@tap="tabChange" 
			:key="index">{{tab.name}}<view class="nums">{{tab.num}}</view></view>
		</scroll-view>
		<swiper class="grace-tab-swiper" :current="swiperCurrentIndex" @change="swiperChange">
			<swiper-item class="">
				<scroll-view scroll-y="true">
					<view class="dan-list">
						<view class="items" @click="gopage">
							<view class="grace-space-between dan-a grace-flex-vcenter">
								<view class="g_floor">
									#2
								</view>
								<view class="f25">尽快送达</view>
								<view class="price f40 cred">￥3.5</view>
							</view>
							<view class="dan-b grace-relative">
								<view class="cell grace-space-between grace-flex-vcenter">
									<view class="vtags f22 c77">
										取货
									</view>
									<view class="desc flex_box_1">
										<view class="f28">潮佳兴（肠粉王）</view>
										<view class="f24 c77">彩田路3067号财富大厦惠福阁门口</view>
									</view>
								</view>
								<view class="cell grace-space-between grace-flex-vcenter">
									<view class="vtags f22 c77">
										送货
									</view>
									<view class="desc flex_box_1">
										<view class="f28">黄河科技信息大楼</view>
									</view>
								</view>
							</view>
							<view class="grace-nowrap dan-c">
								<view class="cell">联系商家</view>
								<view class="cell">联系顾客</view>
								<view class="cblue cell">确认送达</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true">
					<view class="dan-list">
						<view class="dan-date f32">2019/05/23</view>
						<view class="items">
							<view class="grace-space-between dan-a grace-flex-vcenter">
								<view class="g_floor">
									#2
								</view>
								<view class="f25">尽快送达</view>
								<view class="price f40 cred">￥3.5</view>
							</view>
							<view class="dan-b grace-relative">
								<view class="cell grace-space-between grace-flex-vcenter">
									<view class="vtags f22 c77">
										取货
									</view>
									<view class="desc flex_box_1">
										<view class="f28">潮佳兴（肠粉王）</view>
										<view class="f24 c77">彩田路3067号财富大厦惠福阁门口</view>
									</view>
								</view>
								<view class="cell grace-space-between grace-flex-vcenter">
									<view class="vtags f22 c77">
										送货
									</view>
									<view class="desc flex_box_1">
										<view class="f28">黄河科技信息大楼</view>
									</view>
								</view>
							</view>
							<view class="grace-nowrap dan-c">
								<view class="cell">联系商家</view>
								<view class="cell">联系顾客</view>
								<view class="cblue cell">确认送达</view>
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
			showcar:false
		}
	},
	components:{
		myinfo
	},
	methods:{
		tabChange: function (e) {
			console.log(e)
			var index = e.target.id.replace('tabTag-', '');
			this.swiperCurrentIndex = index;
			this.tabCurrentIndex    = index;
			this.titleShowId        = 'tabTag-'+index;
		},
		swiperChange: function (e) {
			var index = e.detail.current;
			this.tabCurrentIndex = index;
			this.titleShowId        = 'tabTag-'+index;
		},
		gopage(){// 跳往详情
			this.$mRouterConfig.push({route: this.$mRouter.OrderDetails})
		}
	},
	onNavigationBarButtonTap(e) { //导航栏的点击事件
	   this.showcar = !this.showcar
	},
	async onLoad() {  //获取订单详情待处理
		await this.$api.refreshToken().then(res => {
			this.$store.commit('set_token',res.data.access_token)
		})
		this.$api.courier_order().then(res => { 
			// console.log('获取订单详情',JSON.stringify(res))
		})
	}
}
</script>
<style>
page{background: #f2f2f2;color: #333; position: relative;}
/* .left-cart{position: absolute;left: 0; top: -200upx;z-index: 999;} */
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
.grace-tab-swiper{height: calc(100vh - 44px - 80upx);}
.swiper-item,scroll-view{overflow-y: auto;height: 100%;}
.dan-date{color: #aaa;padding:0upx 30upx;}
.dan-list:first-child .dan-date{padding:15upx 30upx;margin-bottom: -20upx;}
</style>