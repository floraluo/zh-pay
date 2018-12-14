<template>
  <div class="row layer-shop-withdraw-detail">
    <i class="iconfont icon-shoukuanchenggong"></i>
    <div class="col-xs-12 col-sm-6"><span class="name">提现金额：</span><span class="value">{{withdraw.amount}}元</span></div>
    <div class="col-xs-12 col-sm-6"><span class="name ls">手续费：</span><span class="value"></span></div>
    <div class="col-xs-12 col-sm-6"><span class="name">提现费率：</span><span class="value"></span></div>
    <div class="col-xs-12 col-sm-6"><span class="name">提现时间：</span><span class="value"></span></div>
    <div class="col-xs-12 col-sm-6"><span class="name ">预计到账时间：</span><span class="value"></span></div>
    <div class="col-xs-12 col-sm-6"><span class="name">到账时间：</span><span class="value"></span></div>
    <div class="col-xs-12 col-sm-6"><span class="name">备注说明：</span><span class="value"></span></div>
  </div>
</template>

<script>
  let vm
  export default {
    name: 'ShopWithdrawDetail',
    data () {
      return {
        withdraw: {}
      }
    },
    methods: {},
    created () {
      vm = this
      this.withdraw = this.$parent.detail
    }
  }
</script>

<style scoped lang='scss'>
  @import "../sass/variables";
  .layer-shop-withdraw-detail {
    position: relative;
    padding-top: 10px;
    .iconfont{
      position: absolute;
      right: 10px;
      top: -20px;
      font-size: 74px;
      color: #3ac27e;
    }
    > div{
      margin-bottom: 25px;
      .name{
        color: $text-light;
        &.ls{
          letter-spacing: .33em;
        }
      }
      .vlaue{
        color: $text;
      }
    }
  }
</style>