'use strict';
var Vue = require('Vue');
var $ = require('jQuery');
var VueRouter = require('vue-router');
var AwesomeSwiper = require('vue-awesome-swiper')


// use
Vue.use(AwesomeSwiper)
Vue.use(VueRouter);

// for jq plugin and debug
window.jQuery = $;
window.$ = $;


var App = Vue.extend({});

var Index = require('./components/index.vue');

var MatchContainer = require('./components/match/container.vue');
var Match = require('./components/match/main.vue');
var Offline1 = require('./components/match/offline1.vue');
var Offline2 = require('./components/match/offline2.vue');
var Online = require('./components/match/online.vue');
var Rules = require('./components/match/rules.vue');
var Team = require('./components/match/team.vue');



var MineContainer = require('./components/mine/container.vue');
var Mine = require('./components/mine/main.vue');
var Bind = require('./components/mine/bind.vue');
var Gamedetail = require('./components/mine/gamedetail.vue');
var Gamerank = require('./components/mine/gamerank.vue');
var Mygame = require('./components/mine/mygame.vue');
var Name = require('./components/mine/name.vue');
var Opinion = require('./components/mine/opinion.vue');
var Rankrules = require('./components/mine/rank-rules.vue');
var Setcof = require('./components/mine/set.vue');
var Tips = require('./components/mine/tips.vue');


var RankContainer = require('./components/rank/container.vue');
var Rank = require('./components/rank/main.vue');
var Teamrank = require('./components/rank/teamrank.vue');


var Rule = require('./components/common/rule.vue');


var Erro = require('./components/404.vue');


var Swiper = require('./components/match/swiper.vue');

var router = new VueRouter({hashbang: false});
router.mode = 'html5';

var store = require('./store/store.js');
var actions = require('./store/actions.js');

window.store = store;
window.actions = actions;

router.map({
	'*': {
		component: Erro
	},
	'/': {
		component: Index,
		subRoutes: {
			'/match': {
				component: MatchContainer,
				subRoutes: {
					'/': {
						component: Match
					},
					'/offline1': {
						component: Offline1
					},
					'/offline2': {
						component: Offline2
					},
					'/online': {
						component: Online
					},
					'/rules': {
						component: Rules
					},
					'/team': {
						component: Team
					}
				}
			},
			'/mine': {
				component: MineContainer,
				subRoutes: {
					'/': {
						component: Mine
					},
					'/setcof': {
						component: Setcof
					},
					'/bind': {
						component: Bind
					},
					'/gamedetail': {
						component: Gamedetail
					},
					'/gamerank': {
						component: Gamerank
					},
					'/mygame': {
						component: Mygame
					},
					'/name': {
						component: Name
					},
					'/opinion': {
						component: Opinion
					},
					'/rankrules': {
						component: Rankrules
					},
					'/tips': {
						component: Tips
					}
				}
			},
			'/rank': {
				component: RankContainer,
				subRoutes: {
					'/perrank': {
						name: 'perrank',
						component: Rank
					},
					'/teamrank': {
						component: Teamrank
					}
				}
			},
			'/rule/:userid': {
				name: 'rule',
				component: Rule
			}
		}
	}
});
router.redirect({
    '/': '/match',
    '/rank': '/rank/perrank'
})

router.start(App, '#app');

// $.ajaxSetup({
// 	global: true,
// 	complete: function(XMLHttpRequest, status) {
// 		var res = {};
// 		try {
// 			res = JSON.parse(XMLHttpRequest.responseText);
// 		} catch (e) {};
// 		if (res.iserro) {
// 			router.go('/error');
// 		}
// 	}
// });
