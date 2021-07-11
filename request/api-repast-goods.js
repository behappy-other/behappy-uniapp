import request from './request.js'

// 获取品类及所属菜品信息
export function getCategoryAndGoods() {
	return request({
		url: 'http://localhost:8001/goods/all',
		method: 'GET'
	})
}
