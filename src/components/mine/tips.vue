<style soped>
.tips{
  width: 100%;
  position: relative;
}
.tips_til{
  height: 50px;
  text-align: center;
  line-height: 50px;
  background: #1a212e;
  color: #fff;
  font-size: 20px;
  font-weight: normal;
}
.tips_main{
  font-size: 16px;
  width: 95%;
  margin: 0 auto;
  padding: 21px 0;
  overflow: auto;
}
.tips_main ul li{
  color: #557fbd;
  margin-bottom: 21px;
}
.tips_main ul li a{
  color: #557fbd;
}
.tips_main ul li a p{
  margin-bottom: 10px;
  position: relative;
}
.tips_main ul li a .tips_reply{
  color: #e1e1e1;
}
.tips_main ul li a .tips_reply{
  color: #e1e1e1;
}
.tips_main ul li a p:nth-of-type(3){
  color: #999;
  background: #2f333d;
}
.tips_main ul li a .tips_replytxt span{
  display: inline-block;
  width: 93%;
}
.tips_main ul li a .tips_replytxt i{
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #f05922;
  position: absolute;
  right: 21px;
  top: 7px;
}
</style>
<template>
    <div class="tips">
      <h3 class="tips_til"><span></span>{{tips_til}}</h3>
      <div class="tips_main" v-drapload drapload-key="ascroll" drapload-initialize="true" drapload-down="down_a()">
        <ul>
          <li v-for='tiplist in tipslists'>
            <a @click.prevent="goto(tiplist)">
              <p v-if="tiplist.type == 1 ? false : true"><span class="tips_reply">{{tiplist.rolename}}</span>回复：</p>
              <p class="tips_replytxt"><span>{{tiplist.content}}</span><i v-show="tiplist.is_read"></i></p>
              <p v-if="tiplist.type == 1 ? false : true"><span class="tips_question">{{tiplist.main}}</span></p>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
var Vue = require('Vue');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');

var tips = Vue.extend({
    name: 'tips',
    data: function() {
        return {
          tips_til:'消息提醒',
          tipslists:[],
          page: 0
        };
    },
    store: store,
    vuex: {
        getters: {
            userMsg: function() {
                return store.state.userMsg;
            },
            alertConfig: function() {
                return store.state.alertConfig;
            }
        },
        actions: actions
    },
    created: function() {
      
    },
  	ready: function() {
  		let rH = document.documentElement.clientHeight - 92;
        $(".tips_main").height(rH);

        
        var me = this;
        me.$options.vue = me;
        console.log(me.page)

  	},
    loadListData: function (fn) {
        var me = this.vue;
        $.ajax({
            url: ROOTPATH + '/match/tips.lg' + QUERY,
            dataType: 'json',
            type: 'POST',
            data: {page: me.page,pageSize:30},
            success: function(data) {
                if (data.code == 0) {
                  fn(data)
                } else if (data.code < 0) {
                  actions.alert(store,{show:true,msg:data.msg})
                }
            }
        })
    },
    methods: {
        goto:function(tipslist){
            tipslist.type == 3 ? this.$route.router.go({path:'/match/lineComment/'+tipslist.match_id}) : alert('...')   
        },
        down_a: function () {
            var me = this;
            me.page += 1;
            me.$options.loadListData(function (data) {
                me.tipslists = me.tipslists.concat(data.data.list);
                console.log(data.data.totalPage)
                console.log(data.data.page)
                if (data.data.totalPage <= me.page) {
                    me.ascroll.noData();
                }
                // 通过设置的key 方法下拉对象方法
                // 如果没有更多数据。你可以 调用 me.ascroll.noData()
                me.ascroll.resetload(true);
            });
 
        }
    }
});

module.exports = tips;
</script>
