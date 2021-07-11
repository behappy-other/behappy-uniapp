import request from './request.js'


// 获取登陆者所有地址信息
export function getAdresses() {
	return request({
		url: '/messageInfo/logout',
		method: 'GET'
	})
}