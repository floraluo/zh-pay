<template>
  <div class="row layer-bill-order-detail">
    <i class="iconfont icon-shoukuanchenggong"></i>
    <div class="col-xs-12 col-sm-6">
      <span class="name">实收金额：</span>
      <span class="value">{{order.amount}}元</span>
    </div>
    <div class="col-xs-12 col-sm-6"><span class="name">交易金额：</span><span class="value"></span></div>
    <div class="col-xs-12 col-sm-6"><span class="name">支付方式：</span><span class="value">{{order.payment}}</span></div>
    <div class="col-xs-12 col-sm-6"><span class="name">交易时间：</span><span class="value"></span></div>
    <div class="col-xs-12 col-sm-6"><span class="name ls">付款人：</span><span class="value"></span></div>
    <div class="col-xs-12 col-sm-6"><span class="name">收款账号：</span><span class="value"></span></div>
    <div class="col-xs-12 col-sm-6"><span class="name">臻合单号：</span><span class="value"></span></div>
    <div class="col-xs-12 col-sm-6"><span class="name">银行单号：</span><span class="value"></span></div>
    <div class="col-xs-12 col-sm-6"><span class="name">备　　注：</span><span class="value"></span></div>
  </div>
</template>

<script>
  let vm
  export default {
    name: 'BillOrderDetail',
    data () {
      return {
        order: {}
      }
    },
    methods: {},
    created () {
      vm = this
      this.order = this.$parent.detail
    }
  }
</script>

<style scoped lang='scss'>
  @import "../sass/variables";
  .layer-bill-order-detail {
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