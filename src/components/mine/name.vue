<style soped>
  li,ul{list-style: none}
  .name{
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
  .name_title{
    font-size: 20px;
    color: #fff;
    line-height: 1.8;
    margin-left: 6.6%;
    margin-top: 20px;
  }
  .name_main ul{
    width: 100%;
    overflow: hidden;
  }
  .name_main ul li{
    display: block;
    box-sizing: border-box;
    width: 20%;
    float: left;
    border: 2px solid #999999;
    position: relative;
    margin: 20px 6.6%;
  }
  .name_main ul li.active{
    border: 2px solid #2F9ED9;
  }
  .name_main ul li .name_img_bg{
    width: 100%;
    display: block;
  }
  .name_main ul li .name_img{
    width: 90%;
    display: block;
    position: absolute;
    top: 14%;
    left: 50%;
    margin-left: -45%;
  }
 .name_main ul li p{
  font-size: 12px;
  height: 24px;
  line-height: 24px;
  color: #999;
  width: 92%;
  position: absolute;
  left: 50%;
  margin-left: -46%;
  overflow: hidden;
 }
 .name_main ul li p:nth-of-type(2){
    bottom: 0;
 }
 .name_main ul li p:nth-of-type(1){
    bottom: 24px;
    height: 16px;
    line-height: 16px;
 }
 .name_main ul li i{
  display: block;
  background: url(../../images/name_ico.png) no-repeat;
  background-size: 100% 100%;
  width: 35px;
  height: 24px;
  position: absolute;
  right: 0;
  bottom: 0;
 }
 .name_main ul li.active i{
  background: url(../../images/name_ico_on.png) no-repeat;
  background-size: 100% 100%;
 }
 .name h1{
    width: 100%;
    text-align: center;
    line-height: 4;
    font-size: 18px;
    color: #fff;
 }
</style>
<template>
    <div class="name">
        <h3 class="set_til"><span></span>{{nametil}}</h3>
        <div class="name_main">
            <p class="name_title" v-if="namedatas.length <= 0 ? false : true">{{nametip}}</p>
            <ul id="name-ul">
              <li v-for="(index,namedata) in namedatas" :class="namedata.status ? 'active' : ''" @click="change(namedata.status,index,namedata.tag_id,$event)">
                <a>
                    <img :src="namedata.cover"  class="name_img" />
                    <img src="../../images/name_img_bg.png" class="name_img_bg" />
                    <span class="name_ico"></span>
                    <p>{{namedata.match_title}}</p>
                    <p>{{namedata.create_time}}</p>
                    <i></i>
                </a>
              </li>
            </ul>
        </div>
        <h1 v-if="namedatas.length <= 0 ? true : false">你还没有称号，参与比赛赢取冠军称号</h1>
    </div>
</template>

<script>
var Vue = require('Vue');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');

var name = Vue.extend({
    name: 'name',
    data: function() {
        return {
          nametil:'修改称号',
          nametip:'称号最多选两个：',
          namedatas: {},
          status: 1
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
    created: function(){
        var _this = this;

        $.ajax({
            url: ROOTPATH + '/match/tags.lg' + QUERY,
            type: 'POST',
            dataType: 'json',
            beforeSend:function(){
                $(".loading-1").show();
            },
            success: function(data) {
              console.log(data)
              $(".loading-1").hide();
                _this.namedatas = data.data;
            }
        })

    },
    methods: {
        change: function(status,index,tagId,event){

            let _this = this;
            let actLength = $("#name-ul li").filter(".active").length;
            let st = _this.namedatas[index];

            if (status == 1) {

                st.status = 0;

            } else if (status == 0 && actLength >= 2) {

                alert("最多只能选择两个称号")
                return false;

            } else if (status == 0 && actLength < 2) {

                st.status = 1;

            }
            console.log(tagId,st.status)
            $.ajax({
                url: ROOTPATH + '/match/settags.lg' + QUERY,
                type: 'POST',
                dataType: 'json',
                data: {tag_id: tagId,status: st.status},
                beforeSend:function(){
                    $(".loading-1").show();
                },
                success: function(data) {
                    if (data.code == 0) {
                        $(".loading-1").hide();
                        actions.alert(store,{show:true,msg:data.msg})
                    } else if (data.code < 0) {
                        actions.alert(store,{show:true,msg:data.msg})
                    }
                }
            })
        }
    }
});

module.exports = name;
</script>
