<template>
  <div class="index-main no-padding-main clearfix">
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-lg-3">公司名字</div>
      <div class="col-xs-12 col-sm-6 col-lg-4 col-lg-push-5">
        <div class="panel panel-latest-order">
          <div class="panel-head">
            <i class="iconfont icon-notification"></i>
            <b>最新订单</b>
            <a href="javascript:;" class="more"><i class="iconfont icon-more"></i></a>
          </div>
          <div class="panel-body">
            <base-no-data type="no-msg"></base-no-data>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-lg-5 col-lg-pull-4">
        <div class="panel withdraw">
          <div class="panel-body">
            <div class="col-xs-6 data">
              <strong>258700.00元</strong>
              <p>账户余额</p>
            </div>
            <div class="col-xs-6 data">
              <strong>258700.00元</strong>
              <p>可提现余额</p>
            </div>
            <div class="col-xs-12 btn-box">
              <router-link :to="{path: 'index/withdraw'}" class="btn btn-success">立即提现</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="panel shortcut-link clearfix">
      <router-link :to="{path: '/shop/withdraw'}" class="col-xs-6 col-md-3">
        <i class="iconsprite s-icon-tixianjilu"></i>
        <span>提现记录</span>
      </router-link>
      <router-link :to="{path: '/shop/card'}" class="col-xs-6 col-md-3">
        <i class="iconsprite s-icon-bank-card"></i>
        <span>收款账户修改</span>
      </router-link>
      <router-link :to="{path: '/shop/signed'}" class="col-xs-6 col-md-3">
        <i class="iconsprite s-icon-yue"></i>
        <span>签约信息</span>
      </router-link>
      <router-link :to="{path: '/shop/info'}" class="col-xs-6 col-md-3">
        <i class="iconsprite s-icon-identity-card"></i>
        <span>商户信息</span>
      </router-link>
    </div>
    <div class="panel graph">
      <div class="panel-head">
        <i class="iconfont icon-line-chart"></i>
        <b>收入变化趋势图</b>
        <a class="more" href="">更多报表 <i class="iconfont icon-more"></i></a>
      </div>
      <div class="panel-body">
        <div class="graph-time-shortcut">
          <div class="btn-wrap" v-for="(item, index) in timeShortcut" :key="index">
            <button>{{item.name}}</button>
          </div>
        </div>
        <div class="graph-box">
          <base-no-data></base-no-data>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  let vm
  export default {
    name: 'Index',
    data () {
      return {
        timeShortcut: [
          { name: '今天'},
          { name: '昨天'},
          { name: '最近7天'},
          { name: '最近30天'},
          { name: '本周'},
          { name: '上周'},
          { name: '本月'},
          { name: '上月'}
        ]
      }
    },
    methods: {},
    created () {
      vm = this
    }
  }
</script>

<style scoped lang='scss'>
  @import "../sass/variables";
  $first-row-height: 220px;
  .index-main{
    background-color: $bg-color;
  }
  .panel{
    border: none;
    border-radius: 0;
  }
  .panel-head{
    padding: 12px $gutter;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    position: relative;
    > .iconfont{
      margin-right: 10px;
      font-size: 20px;
      color: $text-light;
    }
    b{
      font-size: 15px;
      color: $text-dark;
    }
    .more, .icon-more{
      font-size: 12px;
    }
    .more{
      position: absolute;
      padding: 4px 6px;
      right: $gutter;
      color: $text-light;
      &:hover{
        text-decoration: none;
        color: $text-dark;
      }
    }
  }
  .panel-latest-order{
    .panel-body{
      height: 167px;
    }
  }
  .withdraw{
    height: $first-row-height;
    display: flex;
    align-items: center;
    .panel-body{
      flex: 1;
    }
    .data{
      text-align: center;
      strong{
        display: block;
        padding-top: 20px;
        font-size: 20px;
        color: #fd8025;
      }
      p{
        margin-top: 10px;
        margin-bottom: 30px;
      }
    }
    .btn-box{
      text-align: center;
      .btn-success{
        width: 80%;
        border-radius: 50px;
      }
    }
  }
  .shortcut-link{
    a{
      display: block;
      padding-top: 30px;
      padding-bottom: 30px;
      text-align: center;
      text-decoration: none;
      transition: background-color .2s;
      .iconsprite{
        margin-right: 15px;
      }
      span{
        font-size: 15px;
        color: $text;
      }
      &:hover{
        background-color: #cbffe5;
      }
    }
  }
  .graph{

  }
  .graph-time-shortcut{
    display: flex;
    > .btn-wrap{
      flex: auto;
      text-align: center;
      + .btn-wrap{
        border-left: 1px solid $border-color;
      }
      button{
        padding: 2px 10px;
        border: none;
        background-color: transparent;
        border-radius: 50px;
        transition: background-color .2s;
        &:hover{
          background-color: #eee;
          color: $theme-color;
        }
        &:focus, &.active{
          outline: none;
          background-color: $theme-color;
          color: #fff;
        }
      }
    }
  }
  .graph-box{
    height: 430px;
  }
</style>