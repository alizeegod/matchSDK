<style soped>
.bind-content{
    width: 100%;
}
.bind-title{
    width: 100%;
   height: 32px;
  text-align: center;
  line-height: 32px;
  background: #1A212E;
  color: #e1e1e1;
  font-size: 16px;
}
.bind-if p{
  margin-left: 20px;
  margin-top: 15px;
  color: #e1e1e1;
  font-size: 16px;
  line-height: 1.5;
}
.bind-form{
  margin-left: 20px;
  color: #e1e1e1;
  font-size: 16px; 
}
.bind-form label{
  width: 100px;
  line-height: 40px;
  display: block;
  float: left;
}
.bind-form input{
  width: 235px;
  height: 40px;
  line-height: 40px;
  display: block;
  border: 0;
  background: #a9b3bf;
  color: #000;
  padding-left: 15px;
  float: left;
  outline: none;
}
.bind-form .bind-yzm,.bind-form .bind-iphone{
  margin: 15px 0;
  overflow: hidden;
}
.bind-form .bind-yzm input{
  width: 105px;
}
.bind-form .bind-yzm span{
  display: block;
  width: 100px;
  height: 40px;
  line-height: 40px;
  float: left;
  background: #2F9ED9;
  color: #fff;
  font-size: 14px;
  text-align: center;
  margin-left: 30px;
  border-radius: 5px;
}
.bind-btn{
  width: 350px;
  margin-top: 15px;
  overflow: hidden;
}
.bind-btn a{
  display: block;
  width: 80px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  text-decoration: center;
  border-radius: 5px;
  text-align: center;
}
.bind-btn a:nth-of-type(1){
  float: left;
  background: #2F9ED9;
}
.bind-btn a:nth-of-type(2){
  float: right;
  color: #555555;
  background: #a9b3bf;
}
</style>
<template>
  <div class="bind-content">
    <h3 class="bind-title">{{bindtil}}</h3>
    <div class="bind-if">
        <p v-if="isbing">你当前绑定的手机号:{{phone}}</p>
        <p v-else>绑定手机号</p>
    </div>
    <form action="post" class="bind-form">
        <div class="bind-iphone">
            <label>新的手机号：</label>
            <input number name="userIphone" v-model="userIphone">
        </div>
        <div class="bind-yzm">
            <label>短信验证码：</label>
            <input number name="userCode" v-model="userCode">
            <span id="bind-tel-code">获取验证码</span>
        </div>
        <div class="bind-btn">
            <a v-on:click="sureBtnTel" title="确定">完成</a> 
            <a v-on:click="closeBtnTel">取消</a>
        </div>
    </form>
  </div>
</template>

<script>
var Vue = require('Vue');
import tool from '../../js/Tool.js';
var store = require('../../store/store.js');
var actions = require('../../store/actions.js');


var bind = Vue.extend({
    name: 'bind',
    data: function() {
        return {
            bindtil:'修改绑定手机号',
            userIphone:'',
            userCode:''
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
    computed: {
        isbing: function(){
            if (this.userMsg.iphone == null) {
                return false;
            } else {
                return true;
            }
        },
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
    ready: function() {

        var _this = this;
        // 应用状态修改示例
        
        var oBtn = document.getElementById('bind-tel-code');
          var timer = null;
          var flag = 0;
          var t =60;
          oBtn.onclick = function(){
              if(flag == 0){
                  if(!tool.tel($("input[name=userIphone]"))){return}
                  flag = 1;
                  clearInterval(timer);
                  $.ajax({
                      url: ROOTPATH + '/ajaxsdk/sms/send.lg' + QUERY,
                      type:'POST',
                      dataType:'json',
                      data:{phone: _this.userIphone},
                      success:function(data){
                          //返回0 发送成功
                          //返回1 该号码已注册
                          //返回2 发送失败
                          $(".loading-1").hide();
                          console.log(data.code);
                          console.log(data.msg)
                          if(data.code==0){
                              timer = setInterval(tick,1000);
                              tick();
                          }else if(data.code<0){
                              actions.alert(store,{show:true,msg:data.msg})
                          }
                      }
                  });
                  
              }
          };
          function tick(){
              t--;
              oBtn.style.background = "gray";
              oBtn.style.fontSize = "14px";
              oBtn.textContent =t+ '秒后重发';
              oBtn.style.cursor = "default";
              if(t<=0){
                  oBtn.textContent ='获取验证码';
                  oBtn.style.fontSize = "14px";
                  oBtn.style.background = "#2F9ED9";
                  oBtn.style.cursor = "pointer";
                  clearInterval(timer);
                  flag = 0;
                  t = 60;
              }
          };
        
    },
    methods: {
        sureBtnTel: function(event){
            var _this = this;
              
            if(!tool.tel($("input[name=userIphone]"))){return}
            if(!tool.yzm($("input[name=userCode]"))){return}
                
            //$.ajax
            $.ajax({
                url:ROOTPATH + '/ajaxsdk/sdkuser/save.lg' + QUERY,
                type:'POST',
                dataType:'json',
                data:{phone: _this.userIphone,code:_this.userCode},
                success:function(data){
                    //返回0 注册成功
                    //返回1 该号码已注册
                    //返回2 验证码不对
                    $(".loading-1").hide();
                    if(data.code==0){
                        actions.set(store,{iphone:_this.userIphone})
                        setTimeout(function(){
                          _this.$route.router.go({path:'/mine/setcof/'})
                        },1000)
                    }else if(data.code<0){
                        actions.alert(store,{show:true,msg:data.msg})
                    }
                }
            });  
        },
        closeBtnTel: function(event){
          this.$route.router.go({path:'/mine/setcof/'})
        },
        arr: function(phone) {
          var self = this;
          self.userIphone = phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
        }
    }
});

module.exports = bind;
</script>
