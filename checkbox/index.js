/**
 * Created by youngwind on 16/8/2.
 */
var Vue = require('vue');
var VueTouch = require('vue-touch');
Vue.use(VueTouch);

require('../base/common.scss');
require('./index.scss');

var vCheckbox = Vue.extend({
    template: require('./index.html'),
    props: {
        checked: false
    },
    methods: {
        toggle: function () {
            this.checked = !this.checked;
        }
    }
});

Vue.component('v-checkbox', vCheckbox);