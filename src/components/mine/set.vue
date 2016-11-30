<style soped>
.set{
  width: 100%; 
  position: relative;
}
.set_til{
  height: 32px;
  text-align: center;
  line-height: 32px;
  background: #1a212e;
  color: #fff;
  font-size: 16px;
  font-weight: normal;
}
.set_main{
  font-size: 14px;
  width: 95%;
  margin: 0 auto;
  padding: 10px 0;
  color: #5b6b8c;
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
    padding: 18px 0 7px;
}
.set_main p a .set_ico{
    display: inline-block;
   position: relative;
   top: 3px;
   margin-right: 8px;
}
.set_main p:nth-of-type(1) .set_ico{
   background: url(../../images/setico1.png) no-repeat left center;
   background-size: 100% 100%;
   width: 11.6px;
   height: 14px;
}
.set_main p:nth-of-type(2) .set_ico{
   background: url(../../images/setico2.png) no-repeat left center;
   background-size: 100% 100%;
   width: 9.3px;
   height: 14px;
   margin-right: 12px;
}
.set_main p:nth-of-type(3) .set_ico{
   background: url(../../images/setico3.png) no-repeat left center;
   background-size: 100% 100%;
   width: 12.4px;
   height: 14px;
}
.set_main p a span{
    display: inline-block;
}
.set_main p a em{
    position: absolute;
    top: 18px;
    right: 0;
    color: #678cd7;
    font-style: normal;
}
.set_main p a em i{
    display: inline-block;
    background:url(../../images/prank-ico.png) no-repeat right center;
    background-size: 100% 100%;
    width: 7.7px;
    height: 14px;
    margin-left: 14px;
    position: relative;
    top: 5px;
}
</style>
<template>
    <div class="set">
        <h3 class="set_til"><span></span>设置</h3>
        <div class="set_main">
            <p>
              <a v-link="{path:'/mine/name'}">
                <i class="set_ico"></i><span>称号管理</span><em><i></i></em>
              </a>
            </p>
            <p>
              <a v-link="{path:'/mine/bind'}">
                <i class="set_ico"></i><span>绑定手机号{{phone}}</span><em>{{userMsg.iphone == '' ? '' : "更换"}}<i></i></em>
              </a>
            </p>
            <p>
              <a v-link="{path:'/mine/opinion'}">
                <i class="set_ico"></i><span>意见反馈</span><em><i></i></em>
              </a>
            </p>
        </div>
    </div>
</template>

<script>
var Vue = require('Vue');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');


var setcof = Vue.extend({
    name: 'setcof',
    data: function() {
        return {
            setdata:{}
        };
    },
    store: store,
    vuex: {
        getters: {
            userMsg: function() {
                return store.state.userMsg;
            }
        },
        actions: actions
    },
    computed: {
        phone: function() {
          var phone = this.userMsg.iphone;
          if (typeof phone == 'number') {
              phone = phone.toString();
          }
          if (phone == '') {
              return phone;
          }
          return phone.substr(0, 3) + '****' + phone.substr(7, 11);
        }
    },
    created: function() {
      var _this = this;
    },
    ready: function() {
        $(".loading-1").hide();

    }
});

module.exports = setcof;
</script>
