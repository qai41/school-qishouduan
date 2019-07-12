
function HTTP(obj,config){
	
	return new Promise((resolve,reject) => {
		let token = uni.getStorageSync('token') || ''
		let options = {
			url: '',
			method: 'GET',
			dataType: 'json',
			data:{},
			header:{
				"content-type": "application/x-www-form-urlencoded",
				"Authorization": 'Bearer '+`${token}`
			},
			success:(res) => {
				// console.log('请求结果为',JSON.stringify(res))
				// 状态码200表示成功
				if(res.data.status_code == 200 && res.data.status == 'success'){
					resolve(res.data);
				}else if(res.data.status == 'failed'){ 
					let failMsg = res.data.errors.message;
					if(res.data.status_code == 406){  //状态码为406
						let arr = Object.keys(failMsg);
						arr.map(item => {
							failMsg = failMsg[item][0]
						})
					}
					uni.showToast({title: failMsg,icon: 'none'})
				}else{
					uni.redirectTo({
						url: '/pages/loding/loding'
					})
					reject("HTTP 状态码异常");
					
				}
			},
			fail:(err)  => {
				console.log('err++++++++',JSON.stringify(err));
				uni.showToast({
					title: '网络异常',
					icon: 'none',
					duration: 2000
				})
				reject('网络异常,请稍后尝试');				
			}
		}
		
		options = {...options,...obj};
		console.log('options+++++',JSON.stringify(options))
		
		if(options.url && options.method){
			uni.request(options)
		}else{
			uni.showToast({
				title: 'HTTP 缺少参数',
				icon:'none',
				duration: 2000
			})
		}
		
	})
}

export default {
	POST(url, data = {}, config){
		return HTTP({url,data,method:"POST"},config)
	},
	
	GET(url, data={}, config){
		return HTTP({url,data,method:"GET"},config)
	}
}