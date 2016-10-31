<template>
    <div class="set">
        <h3 class="set_til"><span></span>{{set_til}}</h3>
        <div class="set_main">
            <p>
              <a v-link="{path:'/mine/name'}">
                <i class="set_ico"></i><span>{{setdata.setName}}</span><em><i></i></em>
              </a>
            </p>
            <p>
              <a v-link="{path:'/mine/bind'}">
                <i class="set_ico"></i><span>{{setdata.setTel}}{{setdata.setTelnum}}</span><em>更换<i></i></em>
              </a>
            </p>
            <p>
              <a v-link="{path:'/mine/tips'}">
                <i class="set_ico"></i><span>{{setdata.settip}}</span><em><i></i></em>
              </a>
            </p>
        </div>
    </div>
</template>
<style soped>
.set{
  width: 100%;
  position: relative;
}
.set_til{
  height: 56px;
  text-align: center;
  line-height: 56px;
  background: #1a212e;
  color: #fff;
  font-size: 24px;
  font-weight: normal;
}
.set_main{
  font-size: 21px;
  width: 95%;
  margin: 0 auto;
  padding: 21px 0;
  color: #5b6b8c;
  font-size: 21px;
  padding-top: 7px;
}
.set_main p{
    border-bottom: 1px solid #323e56;
    position: relative;
    width: 100%;
}
.set_main p a{
    display: block;
    width: 100%;
    color: #5b6b8c;
    padding: 35px 0 14px;
}
.set_main p a .set_ico{
    display: inline-block;
   position: relative;
   top: 7px;
   margin-right: 8px;
}
.set_main p:nth-of-type(1) .set_ico{
   background: url(../../images/setico1.png) no-repeat left center;
   background-size: 100% 100%;
   width: 25px;
   height: 30px;
}
.set_main p:nth-of-type(2) .set_ico{
   background: url(../../images/setico2.png) no-repeat left center;
   background-size: 100% 100%;
   width: 20px;
   height: 30px;
   margin-right: 12px;
}
.set_main p:nth-of-type(3) .set_ico{
   background: url(../../images/setico3.png) no-repeat left center;
   background-size: 100% 100%;
   width: 27px;
   height: 30px;
}
.set_main p a span{
    display: inline-block;
}
.set_main p a em{
    position: absolute;
    top: 35px;
    right: 0;
    color: #678cd7;
    font-style: normal;
}
.set_main p a em i{
    display: inline-block;
    background:url(../../images/prank-ico.png) no-repeat right center;
    background-size: 100% 100%;
    width: 17px;
    height: 29px;
    margin-left: 14px;
    position: relative;
    top: 6px;
}
</style>
<script>
var Vue = require('Vue');
var $ = require('jQuery');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');
var Mock = require('mockjs');

Mock.mock('http://set.cn',{
    "array":{
        'setName':'称号管理',
        'setTel':'绑定手机号',
        'settip':'意见反馈',
        'setTelnum':'150****2689'
    }
});
var setcof = Vue.extend({
    name: 'setcof',
    data: function() {
        return {
            set_til:'设置',
            setdata:{}
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
          url: 'http://set.cn',
          dataType: 'json',
          success: function(data) {
             _this.setdata = data.array; 
          }
      })
    },
    ready: function() {
        // this.msg = this.alertConfig.msg;

    },
    methods: {
        
    }
});

module.exports = setcof;
</script>
