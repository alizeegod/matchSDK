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
    height: 40px;
    line-height: 40px;
    font-size: 16px;
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
    font-size: 14px;
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
    width: 10px;
    height: 17px;
    margin-top: 16.5px;
    background: url(../../images/prank-ico.png) no-repeat;
    background-size: 100% 100%;
}
.grk .grk-con{
    overflow: auto;
}
</style>
<template>
    <div class="grk">
        <h3 class="grank_til">{{title}}</h3>
        <div class="grk-til">
            <p class="p1">排名</p>
            <p class="p2"></p>
            <p class="p3">玩家</p>
            <p class="p4"></p>
            <p class="p5">{{rankRule}}</p>
            <p class="p6"></p>
            <p class="p7"></p>
        </div>
        <div class="grk-con" v-drapload drapload-key="ascroll" drapload-initialize="true" drapload-down="down_a()">
            <ul>
                <li class="grk-item item" v-link="{name:'mine',query:{userid:grkdata.userid}}"
                v-for="grkdata in grkdatas" transition="item">
                    <p class="p1"><span>{{grkdata.rank}}</span></p>
                    <p class="p2">
                        <image :src="grkdata.avatar"/>
                    </p>
                    <p class="p3"><span>{{grkdata.rolename}}</span></p>
                    <p class="p4"><span>{{grkdata.servername}}</span></p>
                    <p class="p5"><span>{{grkdata.score}}</span></p>
                    <p class="p6"><img :src="grkdata.prizeImg" v-if="grkdata.prizeImg == '' ? false : true"></p>
                    <p class="p7"><i></i></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
var Vue = require('Vue');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');

var gamerank = Vue.extend({
    name: 'gamerank',
    data: function() {
        return {
            grkkey: ['积分','击杀','K/D'],
            grkdatas: [],
            title: '',
            page: 0,
            rankRule: ''
        };
    },
    store: store,
    vuex: {
        getters: {
            alertConfig: function() {
                return store.state.alertConfig;
            },
            alertConfig: function() {
                return store.state.alertConfig;
            }
        },
        actions: actions
    },
    created: function() {
        var _this = this;
        
    },
    ready: function() {
  		let rH = document.documentElement.clientHeight - 90;
        $(".grk .grk-con").height(rH);

        
        var me = this;
        me.$options.vue = me;
        console.log(me.page)

  	},
    loadListData: function (fn) {
        var me = this.vue;
        $.ajax({
            url: ROOTPATH + '/my/match-rank.lg' + QUERY,
            dataType: 'json',
            type: 'POST',
            data: {matchid: me.$route.query.matchid,page: me.page,pagesize:100},
            success: function(data) {
                $(".loading-1").hide();
                console.log(data)
                if (data.code == 0) {
                    fn(data)
                } else if (data.code < 0) {
                    actions.alert(store,{show:true,msg:data.msg})
                }
            }
        })
    },
    methods: {
        down_a: function () {
            var me = this;
            me.page += 1;
            me.$options.loadListData(function (data) {
                me.grkdatas = me.grkdatas.concat(data.data.lists);
                me.title = data.data.title;
                me.rankRule = gload_conf.rankRules[data.data.rankRule].name;
                console.log(data.data)
                if (data.data.totalpage <= me.page) {
                    me.ascroll.noData();
                }
                // 通过设置的key 方法下拉对象方法
                // 如果没有更多数据。你可以 调用 me.ascroll.noData()
                me.ascroll.resetload(true);
            });
 
        }
    }
});

module.exports = gamerank;
</script>
