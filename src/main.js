import Vue from 'vue';
//import App from './views/AskFeedbackChooseSource.vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = true;
Vue.config.devtools = true;
class isItLittleFriday {
	widget;
	
	constructor(selector) {
		this.widget = new Vue({
			vuetify,
			render: (h) => h(App),
		  }).$mount(selector);
		  
	}
}
export default isItLittleFriday;
