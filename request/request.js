// import store from '../store/index.js';	//vuex
const url_all = {'DEV':'http://localhost:8001','BUILD':'https://****api'}	 // Request baseUrl
let server_url = '';
let token;

process.env.NODE_ENV === 'development' ? server_url = url_all['DEV'] : server_url = url_all['BUILD'];

function service(options = {}) {
	if(store.state.token) token = store.state.token;
	// Default configuration
	options.url = `${options.url}`;
	options.data = options.params;
	options.header = token ? {
		'content-type': 'application/json;charset=UTF-8',	
		'Authorization': `${token}`
	}:{
		'content-type': 'application/json;charset=UTF-8'
	};
	return new Promise((resolved, rejected) => {
		options.success = (res) => {
			let code = Number(res.data.code);
			// Do something with response data
			switch (code) {	
				case 0:	
					resolved(res.data.data);
					break;
				case 402:	
					rejected(res.data.msg);
					break;
				default:	
					rejected(res.data.msg);
					break;
			}
		}
		options.fail = (err) => {
			//Do something with request error
			rejected(err)
		}
		uni.request(options);
	});
}
export default service;
