<template>
    <div class="online-wrap">
        <match-schedule :msdata="msdata"></match-schedule>
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
            }],
            msdata: {
                msType: 2,       //'1'代表双败淘汰赛败者组，'2'代表双败淘汰赛胜者组，'3'代表单败淘汰赛
                mslists: [{       //对应不同淘汰赛class不同，''代表单败淘汰赛，'loser'代表双败淘汰赛败者组，'win'代表双败淘汰赛胜者组
                    title: '胜者组第一轮',
                    row: [{
                        team: [{
                            name: '焦作人',
                            score: '2'
                        },{
                            name: '焦作人',
                            score: '0'
                        }],
                        inf: '11月11日 11:11',
                        link: '/match/team',
                        result: 0  // 0代表team[0]胜，1代表team[1]胜，2代表未开始
                    },{
                        team: [{
                            name: '焦作人',
                            score: '2'
                        },{
                            name: '焦作人',
                            score: '0'
                        }],
                        inf: '11月11日 11:11',
                        link: '/match/team',
                        result: 1  // 0代表team[0]胜，1代表team[1]胜，2代表未开始
                    },{
                        team: [{
                            name: '焦作人',
                            score: '2'
                        },{
                            name: '焦作人',
                            score: '0'
                        }],
                        inf: '11月11日 11:11',
                        link: '/match/team',
                        result: 2  // 0代表team[0]胜，1代表team[1]胜，2代表未开始
                    },{
                        team: [{
                            name: '焦作人',
                            score: '2'
                        },{
                            name: '焦作人',
                            score: '0'
                        }],
                        inf: '11月11日 11:11',
                        link: '/match/team',
                        result: 0  // 0代表team[0]胜，1代表team[1]胜，2代表未开始
                    }]},{
                    title: '胜者组第二轮',
                    row: [{
                        team: [{
                            name: '焦作人',
                            score: '2'
                        },{
                            name: '焦作人',
                            score: '0'
                        }],
                        inf: '11月11日 11:11',
                        link: '/match/team',
                        result: '0'  // 0代表team[0]胜，1代表team[1]胜，2代表未开始
                    },{
                        team: [{
                            name: '焦作人',
                            score: '2'
                        },{
                            name: '焦作人',
                            score: '0'
                        }],
                        inf: '11月11日 11:11',
                        link: '/match/team',
                        result: '0'  // 0代表team[0]胜，1代表team[1]胜，2代表未开始
                    },{
                        team: [{
                            name: '焦作人',
                            score: '2'
                        },{
                            name: '焦作人',
                            score: '0'
                        }],
                        inf: '11月11日 11:11',
                        link: '/match/team',
                        result: '0'  // 0代表team[0]胜，1代表team[1]胜，2代表未开始
                    },{
                        team: [{
                            name: '焦作人',
                            score: '2'
                        },{
                            name: '焦作人',
                            score: '0'
                        }],
                        inf: '11月11日 11:11',
                        link: '/match/team',
                        result: '0'  // 0代表team[0]胜，1代表team[1]胜，2代表未开始
                    }]},{
                    title: '胜者组第三轮',
                    row: [{
                        team: [{
                            name: '焦作人',
                            score: '2'
                        },{
                            name: '焦作人',
                            score: '0'
                        }],
                        inf: '11月11日 11:11',
                        link: '/match/team',
                        result: '0'  // 0代表team[0]胜，1代表team[1]胜，2代表未开始
                    },{
                        team: [{
                            name: '焦作人',
                            score: '2'
                        },{
                            name: '焦作人',
                            score: '0'
                        }],
                        inf: '11月11日 11:11',
                        link: '/match/team',
                        result: '0'  // 0代表team[0]胜，1代表team[1]胜，2代表未开始
                    }]},{
                    title: '胜者组第四轮',
                    row: [{
                        team: [{
                            name: '焦作人',
                            score: '2'
                        },{
                            name: '焦作人',
                            score: '0'
                        }],
                        inf: '11月11日 11:11',
                        link: '/match/team',
                        result: '0'  // 0代表team[0]胜，1代表team[1]胜，2代表未开始
                    },{
                        team: [{
                            name: '焦作人',
                            score: '2'
                        },{
                            name: '焦作人',
                            score: '0'
                        }],
                        inf: '11月11日 11:11',
                        link: '/match/team',
                        result: '0'  // 0代表team[0]胜，1代表team[1]胜，2代表未开始
                    }]},{
                    title: '胜者组第五轮',
                    row: [{
                        team: [{
                            name: '焦作人',
                            score: '2'
                        },{
                            name: '焦作人',
                            score: '0'
                        }],
                        inf: '11月11日 11:11',
                        link: '/match/team',
                        result: '0'  // 0代表team[0]胜，1代表team[1]胜，2代表未开始
                    }]},{
                    title: '胜者组第六轮',
                    row: [{
                        team: [{
                            name: '焦作人',
                            score: '2'
                        },{
                            name: '焦作人',
                            score: '0'
                        }],
                        inf: '11月11日 11:11',
                        link: '/match/team',
                        result: '0'  // 0代表team[0]胜，1代表team[1]胜，2代表未开始
                    }]},{
                    title: '胜者组第七轮',
                    row: [{
                        team: [{
                            name: '焦作人',
                            score: '2'
                        },{
                            name: '焦作人',
                            score: '0'
                        }],
                        inf: '11月11日 11:11',
                        link: '/match/team',
                        result: '0'  // 0代表team[0]胜，1代表team[1]胜，2代表未开始
                    }]
                }]
            }
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
    created: function(){
        var _this = this;
    },
    ready: function() {
        
    },
    methods: {
        
    }
});

module.exports = online;
</script>
