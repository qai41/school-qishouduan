<template>
	<view class="graceIconClasses">
		<navigator :url="item.path" :opopen-type="item.openType" class="item" :style="{background:item.bgColor}" v-for="(item, index) in classes" :key="index">
			<image :src="item.icon" mode="widthFix"></image>
			<view class="content">
				<view>
					<view class="image"><image :src="item.icon" mode="widthFix"></image></view>
					<view class="txt">
						{{item.txt}}<text>{{item.smallTxt}}</text>
					</view>
				</view>
			</view>
		</navigator>
	</view>
</template>
<script>
export default {
	props: {
		classes:{
			type : Array,
			default : function(){return [];}
		}
	}
}
</script>
<style>
.graceIconClasses{display:flex; flex-direction:row; flex-wrap:wrap;}
.graceIconClasses > .item{width:31.3%; height:168upx; display:flex; border-radius:5px; background:#6DCD70; color:#FFF; position:relative; margin:5px 1%; overflow:hidden;}
.graceIconClasses > .item > image{width:40%; position:absolute; z-index:1; opacity:0.15; height:auto; right:3px; bottom:3px;}
.graceIconClasses > .item > .content{width:100%; height:168upx; display:flex; flex-wrap:wrap; align-items:center !important;}
.graceIconClasses > .item > .content view{width:100%;}
.graceIconClasses > .item > .content .txt{font-size:32upx !important; color:#FFFFFF; text-indent:10px; line-height:40upx; margin-top:5px;}
.graceIconClasses > .item > .content .txt text{font-size:11px; margin-left:3px; opacity:0.8;}
.graceIconClasses > .item > .content .image{font-size:0;}
.graceIconClasses > .item > .content .image image{width:30%; height:auto; margin-left:10px;}
</style>