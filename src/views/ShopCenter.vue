<template>
  <div class="main-shop-center">
    <div class="panel">
      <div class="panel-head">
        <p>账户信息</p>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <router-link :to="{path: '/shop/info'}" class="content-block">
              <i class="iconsprite s-icon-house"></i>
              <div class="info">
                <strong>商户信息</strong>
                <span>xxx有限公司</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="panel-head">
        <p>提现信息</p>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-12 col-sm-4 ">
            <router-link :to="{path: '/shop/withdraw'}" class="content-block">
              <i class="iconsprite s-icon-money"></i>
              <div class="info">
                <strong>提现记录</strong>
                <span>共提现123笔</span>
              </div>
            </router-link>
          </div>
          <div class="col-xs-12 col-sm-4 ">
            <router-link :to="{path: '/shop/signed'}" class="content-block">
              <i class="iconsprite s-icon-cooperation"></i>
              <div class="info">
                <strong>签约信息</strong>
                <span>费率到账相关信息</span>
              </div>
            </router-link>
          </div>
          <div class="col-xs-12 col-sm-4 ">
            <router-link :to="{path: '/shop/card'}" class="content-block">
              <i class="iconsprite s-icon-cards"></i>
              <div class="info">
                <strong>提现银行卡</strong>
                <span>中国农业银行</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="panel-head">
        <p>安全设置</p>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-12 col-sm-4 ">
            <router-link :to="{path: '/shop/phone'}" class="content-block">
              <i class="iconsprite s-icon-phone"></i>
              <div class="info">
                <strong>绑定手机</strong>
                <span>0000000000</span>
              </div>
            </router-link>
          </div>
          <div class="col-xs-12 col-sm-4 ">
            <router-link :to="{path: '/shop/paymentPwd'}" class="content-block">
              <i class="iconsprite s-icon-calculator"></i>
              <div class="info">
                <strong>支付密码</strong>
                <span>***</span>
              </div>
            </router-link>
          </div>
          <div class="col-xs-12 col-sm-4 ">
            <router-link :to="{path: '/shop/loginPwd'}" class="content-block">
              <i class="iconsprite s-icon-computer"></i>
              <div class="info">
                <strong>登录密码</strong>
                <span>***</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <button class="btn btn-outline-success btn-round btn-block btn-lg" type="button">退出登录</button>
  </div>
</template>

<script>
  let vm
  export default {
    name: 'ShopCenter',
    data () {
      return {}
    },
    methods: {},
    created () {
      vm = this
    }
  }
</script>

<style scoped lang='scss'>
  @import "../sass/variables";
  .main-shop-center{
    .btn-outline-success{
      margin-top: 40px;
    }
  }
  .content-block{
    display: block;
    padding-top: 40px;
    padding-bottom: 40px;
    margin-bottom: 15px;
    text-decoration: none;
    text-align: center;
    border-radius: 6px;
    background-color: #f0f2f5;
    transition: all .2s;
    &:hover{
      box-shadow: 0 0 9px 6px rgba(172, 189, 180, .35);
      background-color: #fff;
    }
    .info{
      margin-top: 15px;
      strong{
        display: block;
        font-size: 16px;
        color: #4dc588;
      }
      span{
        font-size: 13px;
        color: $text;
      }
    }
  }
  @media (min-width: $screen-sm-min) {
    .content-block{
      .info{
        display: inline-block;
        vertical-align: bottom;
        margin-left: 15px;
        margin-top: 0;
      }
    }
  }
  @media (min-width: $screen-sm-min) and (max-width: $screen-sm-max) {
    .content-block .info{
      display: block;
      margin-left: 0;
    }
  }
</style>