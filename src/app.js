'use strict';
var Vue = require('Vue');
var $ = require('jQuery');
var VueRouter = require('vue-router');
var vueDrapload =  require('vue-drapload');
Vue.use(vueDrapload)


<<<<<<< .mine
=======
var wsCache = require('./js/web-storage-cache.min.js');
var wsCache = new wsCache();

window.wsCache = wsCache;

common.init();

>>>>>>> .r16506
// use
//Vue.use(AwesomeSwiper)
Vue.use(VueRouter);

// for jq plugin and debug
window.jQuery = $;
window.$ = $;
window.tool = tool;
Object.keys(filter).forEach(k => Vue.filter(k, filter[k])) //注册过滤器
//console.log(Object.keys(filter))

<<<<<<< .mine
var ROOTPATH = 'http://match.hsdk.dev.yingxiong.com';
window.ROOTPATH = ROOTPATH;
=======
var App = Vue.extend({});
>>>>>>> .r16506

<<<<<<< .mine


var App = Vue.extend({});
 
=======
>>>>>>> .r16506
var Index = require('./components/index.vue');



var MatchContainer = require('./components/match/container.vue');
<<<<<<< .mine
// var Match = require('./components/match/main.vue');
// var Offline1 = require('./components/match/offline1.vue');
// var Offline2 = require('./components/match/offline2.vue');
// var Online = require('./components/match/online.vue');
// var Rules = require('./components/match/rules.vue');
// var Team = require('./components/match/team.vue');
=======
var Match = require('./components/match/main.vue');
//var Offline1 = require('./components/match/offline1.vue');
var Offline2 = require('./components/match/offline2.vue');
var Online = require('./components/match/online.vue');
var Rules = require('./components/match/rules.vue');
var Team = require('./components/match/team.vue');
>>>>>>> .r16506
var lineTeamInt = require('./components/match/lineTeamInt.vue');
var lineLive = require('./components/match/lineLive.vue');
var lineEvent = require('./components/match/lineEvent.vue');
var lineSchedule = require('./components/match/lineSchedule.vue');

var lineProc = require('./components/match/lineProc.vue');
var linejj = require('./components/match/linejj.vue');
var lineComment = require('./components/match/lineComment.vue');



//var comment = require('./components/match/comment.vue');


// var MineContainer = require('./components/mine/container.vue');
// var Mine = require('./components/mine/main.vue');
// var Bind = require('./components/mine/bind.vue');
// var Gamedetail = require('./components/mine/gamedetail.vue');
// var Gamerank = require('./components/mine/gamerank.vue');
// var Mygame = require('./components/mine/mygame.vue');
// var Name = require('./components/mine/name.vue');
// var Opinion = require('./components/mine/opinion.vue');
// var Rankrules = require('./components/mine/rank-rules.vue');
// var Setcof = require('./components/mine/set.vue');
// var Tips = require('./components/mine/tips.vue');


var RankContainer = require('./components/rank/container.vue');
var Rank = require('./components/rank/main.vue');


var Erro = require('./components/404.vue');


//var Swiper = require('./components/match/swiper.vue');

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
<<<<<<< .mine
				// subRoutes: {
				// 	'/': {
				// 		component: Match
				// 	},
				// 	// '/offline1': {
				// 	// 	component: Offline1
				// 	// },
				// 	// '/offline2': {
				// 	// 	component: Offline2
				// 	// },
				// 	// '/online': {
				// 	// 	component: Online
				// 	// },
				// 	// '/rules': {
				// 	// 	component: Rules
				// 	// },
				// 	// '/team': {
				// 	// 	component: Team
				// 	// }
				// }
			},
			'/mine': {
				component: MineContainer,
				subRoutes: {
=======
				subRoutes: {
>>>>>>> .r16506
					'/': {
						component: Match
					},
					//赛事种类 线下赛（淘汰赛，积分赛）
					//'/offline1/:id/': {
					//	component: Offline1
					//},
					'/lineLive/:id': {
						component: lineLive
					},
					'/lineTeamInt/:id': {
						component: lineTeamInt
					},
					'/lineEvent/:id': {
						component: lineEvent
					},
					'/lineSchedule/:id': {
						component: lineSchedule
					},
					'/lineProc/:id': {
						component: lineProc
					},
					'/linejj/:id': {
						component: linejj
					},
					'/lineComment/:id': {
						component: lineComment
					},
					// '/offline1/:id/lineTeamInt': {
					// 	component: lineTeamInt
					// },
					// '/offline2': {
					// 	component: Offline2
					// },
					// '/online': {
					// 	component: Online
					// },
					 '/rules/:id': {
					 	component: Rules
					 },
					'/team/:id': {
					 	component: Team
					}
				}
			}//,
			// '/mine': {
			// 	component: MineContainer,
			// 	subRoutes: {
			// 		'/': {
			// 			component: Mine
			// 		},
			// 		'/setcof': {
			// 			component: Setcof
			// 		},
			// 		'/bind': {
			// 			component: Bind
			// 		},
			// 		'/gamedetail': {
			// 			component: Gamedetail
			// 		},
			// 		'/gamerank': {
			// 			component: Gamerank
			// 		},
			// 		'/mygame': {
			// 			component: Mygame
			// 		},
			// 		'/name': {
			// 			component: Name
			// 		},
			// 		'/opinion': {
			// 			component: Opinion
			// 		},
			// 		'/rankrules': {
			// 			component: Rankrules
			// 		},
			// 		'/tips': {
			// 			component: Tips
			// 		}
			// 	}
			// },
			// '/rank': {
			// 	component: RankContainer,
			// 	subRoutes: {
			// 		'/': {
			// 			component: Rank
			// 		},
			// 	}
			// }
		}
	}
});
router.redirect({
    '/': '/match'
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
