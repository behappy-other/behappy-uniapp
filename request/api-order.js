import request from './request.js'

// 预支付(获取防重令牌)
export function prepayment() {
	return request({
		url: 'http://localhost:8002/pay/prepayment',
		method: 'GET'
	})
}

// 支付
export function submitOrder(params) {
	return request({
		url: 'http://localhost:8002/pay/submit',
		method: 'POST',
		params
	})
}