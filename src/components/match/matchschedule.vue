<style soped>
.matchschedule{
    width: 100%;
    height: 300px;
    color: #fff;
    overflow: hidden;
}
.matchschedule p{
    width: 150%;
    font-size: 40px;
}
.ms-content{
    margin: 0 auto;
    text-align: center;
}
.ms-content .one-ms{
    padding: 10px 0;
    padding-left: 40px;
    white-space: nowrap;
}
.ms-content .ms-round{
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin: 0 -2px;
}
.ms-content .one-match{
    position: relative;
    width: 200px;
}
.ms-content .one-match:nth-of-type(2n-1):before{
    content: ' ';
    position: absolute;
    box-sizing: border-box;
    display: block;
    width: 20px;
    height: 50%;
    color: #7B99AD;
    border-style: solid;
    border-width: 0;
    right: 20px;
    bottom: -1px;
    border-right-width: 1px;
    border-top-width: 1px;
}
.ms-content .one-match:nth-of-type(2n-1):after{
    content: ' ';
    position: absolute;
    box-sizing: border-box;
    display: block;
    width: 20px;
    height: 1px;
    background: #7B99AD;
    right: 0;
    bottom: -2px;
}
.ms-content .one-match:nth-of-type(2n):before{
    content: ' ';
    position: absolute;
    box-sizing: border-box;
    display: block;
    width: 20px;
    height: 50%;
    color: #7B99AD;
    border-style: solid;
    border-width: 0;
    right: 20px;
    top: 0;
    border-right-width: 1px;
    border-bottom-width: 1px;
}
.ms-content .one-match:nth-of-type(2n):after{
    content: ' ';
    position: absolute;
    box-sizing: border-box;
    display: block;
    width: 20px;
    height: 1px;
    background: #7B99AD;
    right: 0;
    top: 0;
}
.ms-content .ms-row-1 .one-match{
    height: 80px;
}
.ms-content .ms-row-2 .one-match{
    height: 160px;
}
.ms-content .ms-row-3 .one-match{
    height: 320px;
}
.ms-content .players{
    position: absolute;
    left: 0;
    top: 50%;
    width: 160px;
    height: 60px;
    box-sizing: border-box;
    margin-top: -30px;
    z-index: 1;
}
.ms-content .player{
    display: block;
    height: 22px;
    line-height: 22px;
    font-size: 14px;
    background: #151E2A;
    color: #fff;
    text-align: center;
}
.ms-content .player-name {
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    width: 80%;
}
.ms-content .player-score {
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    width: 20%;
}
.ms-content .player-content {
    position: relative;
    display: block;
    height: 16px;
    line-height: 16px;
    text-align: center;
    background: #263646;
    font-size: 12px;
}
.toe {
    word-wrap: normal;
    white-space: nowrap;
    overflow-x: hidden;
    overflow-y: visible;
    text-overflow: ellipsis;
}
</style>
<template>
    <div class="matchschedule" id="iscroll">
        <div class="ms-content">
            <div class="one-ms normal-group">
                <div class="ms-round ms-row-1">
                    <div class="one-match" v-for="row1 in mslists.row1">
                        <div class="players">
                            <a class="player">
                                <span class="player-name toe">{{row1.team[0].name}}</span>
                                <span class="player-score">{{row1.team[0].score}}</span>
                            </a>
                            <div class="player-content">
                                <a class="match-video-link">{{row1.inf}}</a>
                            </div>
                            <a class="player">
                                <span class="player-name toe">{{row1.team[1].name}}</span>
                                <span class="player-score">{{row1.team[1].score}}</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="ms-round ms-row-2">
                    <div class="one-match" v-for="row2 in mslists.row2">
                        <div class="players">
                            <a class="player">
                                <span class="player-name toe">{{row2.team[0].name}}</span>
                                <span class="player-score">{{row2.team[0].score}}</span>
                            </a>
                            <div class="player-content">
                                <a class="match-video-link">{{row2.inf}}</a>
                            </div>
                            <a class="player">
                                <span class="player-name toe">{{row2.team[1].name}}</span>
                                <span class="player-score">{{row2.team[1].score}}</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="ms-round ms-row-3">
                    <div class="one-match" v-for="row3 in mslists.row3">
                        <div class="players">
                            <a class="player">
                                <span class="player-name toe">{{row3.team[0].name}}</span>
                                <span class="player-score">{{row3.team[0].score}}</span>
                            </a>
                            <div class="player-content">
                                <a class="match-video-link">{{row3.inf}}</a>
                            </div>
                            <a class="player">
                                <span class="player-name toe">{{row3.team[1].name}}</span>
                                <span class="player-score">{{row3.team[1].score}}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
var Vue = require('Vue');
var $ = require('jQuery');
var IScroll = require('iscroll');






var store = require('../../store/store.js');
var actions = require('../../store/actions.js');

var matchschedule = Vue.extend({
    name: 'matchschedule',
    data: function() {
        return {
            mslists: {
                row1: [{
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
                }],
                row2: [{
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
                }],
                row3: [{
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
            }
        };
    },
    props: ['matchschedule'],
    store: store,
    vuex: {
        getters: {
            alertConfig: function() {
                return store.state.alertConfig;
            }
        },
        actions: actions
    },
    ready: function() {
        var myScroll = new IScroll('#iscroll',{
             scrollX: true, freeScroll: true 
        });
    },
    methods: {
        
    }
});

module.exports = matchschedule;
</script>
