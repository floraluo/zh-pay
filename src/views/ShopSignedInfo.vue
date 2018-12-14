<template>
  <div>
    <div class="panel">
      <div class="panel-head">
        <p>订单允许提现时间</p>
      </div>
      <div class="panel-body">
        <table class="table table-bordered">
          <thead>
          <tr><td>项目名称</td><td>应用1</td><td>应用2</td><td>应用3</td><td>应用4</td></tr>
          </thead>
          <tbody>
          <tr><td>订单允许提现时间</td><td>T+1</td><td>T+3</td><td>T+5</td><td>T+7</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="panel">
      <div class="panel-head">
        <p>提现费率</p>
      </div>
      <div class="panel-body">
        <table class="table table-bordered">
          <thead>
          <tr><td>到账时间</td><td>T+1</td><td>T+3</td><td>T+5</td><td>T+7</td></tr>
          </thead>
          <tbody>
          <tr><td>提现费率</td><td>N1%</td><td>N2%</td><td>N3%</td><td>N4%</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="panel panel-3">
      <div class="panel-head">
        <p>退款保证金</p>
      </div>
      <div class="panel-body">
        <p>商户信用等级1级，保证金1000.00元</p>
        <small>提示：为了保证商户可以正常运转，特设立保证金，保证商户的支付退单</small>
      </div>
    </div>
  </div>
</template>

<script>
  let vm
  export default {
    name: 'ShopSignedInfo',
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
  .panel {
    td{
      padding-top: 12px;
      padding-bottom: 12px;
    }
    thead > tr > td{
      border-bottom-width: 1px;
      font-weight: bold;
      background-color: #f0f2f9;
    }
    tbody > tr > td:first-child{
      font-weight: bold;
    }
  }
  .panel-3{
    .panel-body{
      p{
        font-weight: bold;
        color: #5a758b;
      }
      small{
        font-size: 12px;
        color: $text-light;
      }
    }
  }
</style>