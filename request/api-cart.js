import request from './request.js'

// 添加购物车数据
export function addToCart(params) {
	return request({
		url: 'http://localhost:8002/cart/add_cart',
		method: 'POST',
		params
	})
}
// 获取购物车数据
export function cartListPage() {
	return request({
		url: 'http://localhost:8002/cart/cart_list',
		method: 'GET'
	})
}

// 清空购物车数据
export function clearCart() {
	return request({
		url: 'http://localhost:8002/cart/clear_cart',
		method: 'DELETE'
	})
}