<template>
    <div class="name">
        <h3 class="set_til"><span></span>{{nametil}}</h3>
        <div class="name_main">
            <p>{{nametip}}</p>
            <ul>
              <li>
                <a>
                  <img :src="namedata.name_image1" />
                  <span class="name_ico"></span>
                  <p>{{namedata.name_who1}}</p>
                  <p>{{namedata.name_time1}}</p>
                  <i></i>
                </a>
              </li>
              <li>
                <a>
                  <img :src="namedata.name_image2" />
                  <span class="name_ico"></span>
                  <p>{{namedata.name_who2}}</p>
                  <p>{{namedata.name_time2}}</p>
                  <i></i>
                </a>
              </li>
              <li>
                <a>
                  <img :src="namedata.name_image3" />
                  <span class="name_ico"></span>
                  <p>{{namedata.name_who3}}</p>
                  <p>{{namedata.name_time3}}</p>
                  <i></i>
                </a>
              </li>
            </ul>
        </div>
    </div>
</template>
<style soped>
  li,ul{list-style: none}
  .name{
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
  .name_main ul{
    -webkit-display: flex;
    width: 100%;
    height: 147px;
  }
  .name_main ul li{
    -webkit-flex: 1;
    width: 178px;
    height: 141px;
    float: left;
    border: 3px solid #2f9ed9;
    position: relative;
  }
  .name_main ul li img{
    width: 100%;
    height: 34px;
    display: block;
    margin: 25px auto 35px;
  }
 .name_main ul li p{
  font-size: 16px;
  color: #999;
  margin-left: 7px;
 }
 .name_main ul li i{
  display: block;
  background: url(../../images/name_ico.png) no-repeat;
  background-size: 100% 100%;
  width: 71px;
  height: 48px;
  position: absolute;
  right: 0;
  bottom: 0;
 }
</style>
<script>
var Vue = require('Vue');
var $ = require('jQuery');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');
var Mock = require('mockjs');

Mock.mock('http://name.cn',{
    "array":{
        'name_image1': '@image',
        'name_who1':'排位赛-冷血杀神冠军',
        'name_time1':'2016.05.21获得',
        'name_image2': '@image',
        'name_who2':'排位赛-冷血杀神冠军',
        'name_time2':'2016.05.21获得',
        'name_image3': '@image',
        'name_who3':'排位赛-冷血杀神冠军',
        'name_time3':'2016.05.21获得',
    }
});
var name = Vue.extend({
    name: 'name',
    data: function() {
        return {
          nametil:'修改称号',
          nametip:'称号最多选两个：',
          namedata:''
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
      var _this = this;
      $.ajax({
          url: 'http://name.cn',
          dataType: 'json',
          success: function(data) {
              _this.namedata = data.array;
          }
      })
    },
    methods: {

    }
});

module.exports = name;
</script>
