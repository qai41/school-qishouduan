 // {name:"数据名称", checkType: "验证类型", checkRule: "验证规则", errorMsg: "错误提示信息" },

export default{
	// 短信登陆验证规则
	codeL:[{
		name: 'phone',
		checkType: 'phoneno',
		checkRule: '',
		errorMsg: '请输入手机号'
	},{
		name: "code",
		checkType: "notnull",
		checkRule:"",
		errorMsg: "请输入短息验证码"
	}],
	// 账号密码登陆验证
	pwdl:[{
		name:'phone',
		checkType: 'phoneno',
		checkRule: '',
		errorMsg: '请输入手机号'
	},{
		name: 'password',
		checkType: 'notnull',
		checkRule: '',
		errorMsg: '密码不能为空'
	}],
	// 找回密码
	findpwd:[
		{
			name:'phone',
			checkType: 'phoneno',
			checkRule:'',
			errorMsg: '请输入手机号'
		},
		{
			name:'code',
			checkType: 'notnull',
			checkRule: '',
			errorMsg: '请填写验证码'
		},
		{
			name:'password',
			checkType: 'notnull',
			checkRule: '',
			errorMsg: '密码不能为空'
		}
	],
	// 注册验证
	reg:[
		{
			name: 'name',
			checkType: 'notnull',
			checkRule: '',
			errorMsg: '请填写名字'
		},
		{
			name: 'phone',
			checkType: 'phoneno',
			checkRule: '',
			errorMsg: '情输入正确的手机号'
		},
		{
			name: "code",
			checkType: "notnull",
			checkRule:"",
			errorMsg: "请输入短息验证码"
		},
		{
			name: 'password',
			checkType: 'notnull',
			checkRule: '',
			errorMsg: '密码不能为空'
		},
		{
			name: 'photo1',
			checkType: 'notnull',
			checkRule: '',
			errorMsg: '密码不能为空'
		},
		{
			name: 'photo2',
			checkType: 'notnull',
			checkRule: '',
			errorMsg: '密码不能为空'
		},
		{
			name: 'ok',
			checkType: 'same',
			checkRule: 'true',
			errorMsg: '点击ok'
		}
	],
	// 发送短信验证
	codePhone:[{
		name:'phone',
		checkType: 'phoneno',
		checkRule:"",
		errorMsg: '请输入正确的手机号'
	}]
}