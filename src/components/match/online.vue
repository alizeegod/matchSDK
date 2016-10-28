<template>
    <div class="online-wrap">
        <match-schedule></match-schedule>
        <match-intro :matchintro="matchintro"></match-intro>
        <match-prize :matchprizes="matchprizes"></match-prize>
        <match-team :matchteams="matchteams"></match-team>
    </div>
</template>
<style soped>
.online-wrap{
    width: 100%;
    overflow: hidden;
}
</style>
<script>
var Vue = require('Vue');
var $ = require('jQuery');

var matchIntro = require('./matchintro.vue');
var matchPrize = require('./matchprize.vue');
var matchTeam = require('./matchteam.vue');
var matchSchedule = require('./matchschedule.vue');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');

var online = Vue.extend({
    name: 'online',
    data: function() {
        return {
            matchintro: {
                ruleurl: '/rule/:userid=2',
                micon: '肯德基桂林市地方了看过了啥地方了世界观都流口水的减肥了开始的寄过来看山东省的两个考试的',
                mitime: '08月21日19:00开始',
                mitype: '线下赛：',
                miaddress: '是考虑到吉林省地方了'
            },
            matchprizes: [{
                ranking: '冠军',
                imgurl: 'http://10.0.11.19/svn/match/2.0/src/images/mp-img01.png',
                prize: '1元'
            },{
                ranking: '冠军',
                imgurl: 'http://10.0.11.19/svn/match/2.0/src/images/mp-img01.png',
                prize: '1元'
            },{
                ranking: '冠军',
                imgurl: 'http://10.0.11.19/svn/match/2.0/src/images/mp-img01.png',
                prize: '1元'
            },{
                ranking: '冠军',
                imgurl: 'http://10.0.11.19/svn/match/2.0/src/images/mp-img01.png',
                prize: '1元'
            },{
                ranking: '冠军',
                imgurl: 'http://10.0.11.19/svn/match/2.0/src/images/mp-img01.png',
                prize: '1元'
            },{
                ranking: '冠军',
                imgurl: 'http://10.0.11.19/svn/match/2.0/src/images/mp-img01.png',
                prize: '1元'
            },{
                ranking: '冠军',
                imgurl: 'http://10.0.11.19/svn/match/2.0/src/images/mp-img01.png',
                prize: '1元'
            },{
                ranking: '冠军',
                imgurl: 'http://10.0.11.19/svn/match/2.0/src/images/mp-img01.png',
                prize: '1元'
            }],
            matchteams: [{
                imgurl: 'http://10.0.11.19/svn/match/2.0/src/images/mt-img01.png',
                name: 'IG',
                teamurl: '/match/team'
            },{
                imgurl: 'http://10.0.11.19/svn/match/2.0/src/images/mt-img01.png',
                name: 'IG',
                teamurl: '/match/team'
            },{
                imgurl: 'http://10.0.11.19/svn/match/2.0/src/images/mt-img01.png',
                name: 'IG',
                teamurl: '/match/team'
            },{
                imgurl: 'http://10.0.11.19/svn/match/2.0/src/images/mt-img01.png',
                name: 'IG',
                teamurl: '/match/team'
            },{
                imgurl: 'http://10.0.11.19/svn/match/2.0/src/images/mt-img01.png',
                name: 'IG',
                teamurl: '/match/team'
            },{
                imgurl: 'http://10.0.11.19/svn/match/2.0/src/images/mt-img01.png',
                name: 'IG',
                teamurl: '/match/team'
            },{
                imgurl: 'http://10.0.11.19/svn/match/2.0/src/images/mt-img01.png',
                name: 'IG',
                teamurl: '/match/team'
            },{
                imgurl: 'http://10.0.11.19/svn/match/2.0/src/images/mt-img01.png',
                name: 'IG',
                teamurl: '/match/team'
            }]
        };
    },
    components: {
        "match-team" : matchTeam,
        "match-intro" : matchIntro,
        "match-prize" : matchPrize,
        "match-schedule" : matchSchedule
    },
    store: store,
    vuex: {
        getters: {
            alertConfig: function() {
                return store.state.alertConfig;
            }
        },
        actions: actions
    },
    created: function() {

    },
    ready: function() {
        
    },
    methods: {
        
    }
});

module.exports = online;
</script>
