import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'
import {
	getAdresses
} from '@/request/api-member.js'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		store: {},
		cart: [],
		orderType: 'takein',
		address: {},
		addresses: [],
		member: {},
		order: {},
		token: ''
	},
	getters: {
		isLogin: state => Object.keys(state.member).length > 0 //是否登录
	},
	mutations: {
		SET_ORDER_TYPE(state, type) {
			state.orderType = type
		},
		SET_MEMBER(state, member) {
			state.member = member
		},
		SET_ADDRESS(state, address) {
			state.address = address
		},
		SET_ADDRESSES(state, addresses) {
			state.addresses = addresses
		},
		SET_STORE(state, store) {
			state.store = store
		},
		SET_CART(state, cart) {
			state.cart = cart
		},
		REMOVE_CART(state) {
			state.cart = []
		},
		SET_ORDER(state, order) {
			state.order = order
		}
	},
	actions: {
		// todo store模块
		async getStore({
			commit
		}) {
			const store = await api('store')
			commit('SET_STORE', store)
		}
		//获取登录者地址信息
		async getAdresses({
			commit
		}) {
			const addresses = await getAdresses()
			commit('SET_ADDRESSES', addresses)
		}
	}
})

export default store
