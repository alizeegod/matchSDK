'use strict';
var Vue = require('Vue');
var $ = require('jQuery');
var VueRouter = require('vue-router');
var vueDrapload =  require('vue-drapload');
Vue.use(vueDrapload)
//自定义过滤器
import * as filter from './js/filter'
//工具js
var tool = require('./js/Tool.js');

var common = require('./js/common.js');

var wsCache = require('./js/web-storage-cache.min.js');
var wsCache = new wsCache();

window.wsCache = wsCache;

common.init();  

// 生产环境||开发环境
var ROOTPATH,QUERY;
var ENV = 'build';

if (ENV == 'build') {
	ROOTPATH = gload_conf.api;
	QUERY = '?token=1003834ec09628a76bea2e33d2372848&gameid=1';
} else {
	ROOTPATH = gload_conf.api;
	QUERY = '';
}

window.ROOTPATH = ROOTPATH;
window.QUERY =QUERY;

// use
Vue.use(VueRouter);

// for jq plugin and debug
window.jQuery = $;
window.$ = $;
window.tool = tool;
Object.keys(filter).forEach(k => Vue.filter(k, filter[k])) //注册过滤器

var App = Vue.extend({});

var Index = require('./components/index.vue');


// 赛事
var MatchContainer = require('./components/match/container.vue');
var Match = require('./components/match/main.vue');
var Rules = require('./components/match/rules.vue');
var Team = require('./components/match/team.vue');
var lineTeamInt = require('./components/match/lineTeamInt.vue');
var lineLive = require('./components/match/lineLive.vue');
var lineEvent = require('./components/match/lineEvent.vue');
var lineSchedule = require('./components/match/lineSchedule.vue');
var lineProc = require('./components/match/lineProc.vue');
var linejj = require('./components/match/linejj.vue');
var lineComment = require('./components/match/lineComment.vue');

// 我的主页
var MineContainer = require('./components/mine/container.vue');
var Mine = require('./components/mine/main.vue');
var Bind = require('./components/mine/bind.vue');
var Gamedetail = require('./components/mine/gamedetail.vue');
var Gamerank = require('./components/mine/gamerank.vue');
var Mygame = require('./components/mine/mygame.vue');
var Name = require('./components/mine/name.vue');
var Opinion = require('./components/mine/opinion.vue');
var Setcof = require('./components/mine/set.vue');
var Tips = require('./components/mine/tips.vue');

// 榜单
var RankContainer = require('./components/rank/container.vue');
var Rank = require('./components/rank/main.vue');
var Teamrank = require('./components/rank/teamrank.vue');
var Rule = require('./components/common/rule.vue');

// 404
var Erro = require('./components/404.vue');

// 路由模式--H5的history
var router = new VueRouter({hashbang: false});
router.mode = 'html5';

// 应用级状态管理
var store = require('./store/store.js');
var actions = require('./store/actions.js');

window.store = store;
window.actions = actions;

// 路由
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
					 '/rules/:id': {
					 	component: Rules
					 },
					'/team/:id': {
					 	component: Team
					}
				}
			},
			'/mine': {
				component: MineContainer,
				subRoutes: {
					'/': {
						name: 'mine',
						component: Mine
					},
					'/setcof': {
						name: 'setcof',
						component: Setcof
					},
					'/bind': {
						name: 'bind',
						component: Bind
					},
					'/gamedetail': {
						name: 'gamedetail',
						component: Gamedetail
					},
					'/gamerank': {
						name: 'gamerank',
						component: Gamerank
					},
					'/mygame': {
						name: 'mygame',
						component: Mygame
					},
					'/name': {
						name: 'name',
						component: Name
					},
					'/opinion': {
						name: 'opinion',
						component: Opinion
					},
					'/tips': {
						name: 'tips',
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
						name: 'teamrank',
						component: Teamrank
					}
				}
			},
			'/rule': {
				name: 'rule',
				component: Rule
			}
		}
	}
});
// 路由重定向
router.redirect({
    '/': '/match',
    '/rank': '/rank/perrank'
})
// 挂载
router.start(App, '#app');

