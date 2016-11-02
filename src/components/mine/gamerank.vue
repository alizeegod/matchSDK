<style soped>
.grk{
    width: 100%;
}
.grk .grk-til{
    width: 100%;
    background: #050D19;
    overflow: hidden;
}
.grk .grk-til p{
    float: left;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    color: #5d8ca3;
}
.grk .grk-til p.p1{
    width: 14%;
    text-align: center;
}
.grk .grk-til p.p2{
    width: 7%;
}
.grk .grk-til p.p3{
    width: 18%;
}
.grk .grk-til p.p4{
    width: 14%;
}
.grk .grk-til p.p5{
    width: 17%;
    text-align: center;
}
.grk .grk-til p.p6{
    width: 20%;
}
.grk .grk-til p.p7{
    width: 10%;
}
/*.grk-item.prank-mine{
    background: #2B3A58;
}*/
.grk-item{
    width: 100%;
    background: #050D19;
    overflow: hidden;
}
.grk-item p{
    float: left;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    color: #e1e1e1;
}
.grk-item.item:nth-of-type(1) p.p1 span{
    display: block;
    width: 28px;
    height: 28px;
    margin: 11px auto;
    color: transparent;
    background: url(../../images/prank-ico-01.png) no-repeat;
    background-size: 100% 100%;
}
.grk-item.item:nth-of-type(2) p.p1 span{
    display: block;
    width: 28px;
    height: 28px;
    margin: 11px auto;
    color: transparent;
    background: url(../../images/prank-ico-02.png) no-repeat;
    background-size: 100% 100%;
}
.grk-item.item:nth-of-type(3) p.p1 span{
    display: block;
    width: 28px;
    height: 28px;
    margin: 11px auto;
    color: transparent;
    background: url(../../images/prank-ico-03.png) no-repeat;
    background-size: 100% 100%;
}
.grk-item.item:nth-of-type(2n-1){
    background: #111A2B;
}
.grk-item p.p1{
    width: 14%;
    text-align: center;
    overflow: hidden;
    color: #7b99ad;
}
.grk-item p.p2{
    width: 7%;
    overflow: hidden;
}
.grk-item p.p2 img{
    width: 30px;
    height: 30px;
    margin: 8px auto;
    display: block;
    border: 1px solid #D1B25B;
}
.grk-item p.p3{
    width: 18%;
    overflow: hidden;
}
.grk-item p.p4{
    width: 14%;
}
.grk-item p.p5{
    width: 17%;
    text-align: center;
}
.grk-item p.p6{
    width: 20%;
}
.grk-item p.p6 img{
    max-width: 100%;
    height: 36px;
    margin: 7px 0;
    display: block;
}
.grk-item p.p7{
    width: 10%;
}
.grk-item p.p7 i{
    display: block;
    width: 12px;
    height: 21px;
    margin-top: 14.5px;
    background: url(../../images/prank-ico.png) no-repeat;
    background-size: 100% 100%;
}
</style>
<template>
    <div class="grk">
        <h3 class="grank_til">{{grktil}}</h3>
        <div class="grk-til">
            <p class="p1">{{grkkey[0]}}</p>
            <p class="p2">{{grkkey[1]}}</p>
            <p class="p3">{{grkkey[2]}}</p>
            <p class="p4">{{grkkey[3]}}</p>
            <p class="p5">{{grkkey[4]}}</p>
            <p class="p6">{{grkkey[5]}}</p>
            <p class="p7">{{grkkey[6]}}</p>
        </div>
        <div class="grk-con">
            <ul>
                <li class="grk-item item" v-link="{name:'mine',query:{id:grkdata.id}}"
                v-for="grkdata in grkdatas" transition="item">
                    <p class="p1"><span>{{grkdata.rank}}</span></p>
                    <p class="p2">
                        <image :src="grkdata.tImg"/>
                    </p>
                    <p class="p3"><span>{{grkdata.user}}</span></p>
                    <p class="p4"><span>{{grkdata.area}}</span></p>
                    <p class="p5"><span>{{grkdata.power}}</span></p>
                    <p class="p6"><img :src="grkdata.qImg"></p>
                    <p class="p7"><i></i></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
var Vue = require('Vue');
var $ = require('jQuery');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');
var Mock = require('mockjs');

Mock.Random.image('30*30');
Mock.Random.region();

Mock.mock('http://grk.cn',{
    "array|1-20":[{
        'rank|1-100'     : 1,
        'tImg'           : 'http://10.0.11.19/svn/match/2.0/dist/images/prank-timg.png',
        'user'           : '@name',
        'area'           : '@region',
        'power|1-1000'   : 1,
        'qImg'            : 'http://10.0.11.19/svn/match/2.0/dist/images/prank-timg.png',
        'id|2-10'         : 1
    }]
});
var gamerank = Vue.extend({
    name: 'gamerank',
    data: function() {
        return {
            grktil: '排位赛',
            grkkey: ['排名','','玩家','','积分','',''],
            grkdatas: {}
        };
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
      var _this = this;
      $.ajax({
          url: 'http://grk.cn',
          dataType: 'json',
          success: function(data) {
              _this.grkdatas = data.array;
          }
      })
    },
    ready: function() {
  		// this.msg = this.alertConfig.msg;

  	},
    methods: {

    }
});

module.exports = gamerank;
</script>
