
function HTTP(obj,config){
	return new Promise((resolve,reject) => {
		
		let options = {
			url: '',
			method: 'GET',
			dataType: 'json',
			data:{},
			header:{
				"content-type": "application/x-www-form-urlencoded",
				"content-type":"application/jsons"
			},
			success:(res) => {
				console.log('请求成功 结果: ',JSON.stringify(res))
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
					reject("HTTP 状态码异常");
				}
			},
			fail:(err)  => {
				console.log(err);
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