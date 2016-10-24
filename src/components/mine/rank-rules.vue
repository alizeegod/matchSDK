<template>
<h3 class="gamer_til">{{rankrtil}}</h3>
<div class="rankr_main">
  <h3>{{rankrules_t1}}</h3>
  <p>{{rankrules_dea1}}</p>
  <h3>{{rankrules_t2}}</h3>
  <p>{{rankrules_dea2}}</p>
</div>
</template>
<style soped>
.gamer_til{
  height: 80px;
  text-align: center;
  line-height: 80px;
  background: #1d2532;
  color: #fff;
  font-size: 32px;
}
.rankr_main{
  font-size: 30px;
}
.rankr_main h3{
  color: #889ec7;
}
.rankr_main p{
  color: #666;
}
</style>
<script>
var Vue = require('Vue');
var $ = require('jQuery');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');

var rankrules = Vue.extend({
    name: 'rankrules',
    data: function() {
        return {
          rankrtil:'积分说明',
          rankrules_t1:'什么是积分',
          rankrules_dea1:'积分是玩家参与比赛',
          rankrules_t2:'积分有什么用',
          rankrules_dea2:'积分是玩家积分是玩家参与比赛参与比赛'
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
    ready: function() {

    },
    methods: {

    }
});

module.exports = rankrules;
</script>
