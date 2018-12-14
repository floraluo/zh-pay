<template>
  <div>
    <div class="shop-info-head">
      <div class="img-box">logo</div>
      <div class="info-box">
        <strong>xxxx公司</strong>
        <span>社会统一信用代码：1234124</span>
      </div>
      <div class="btn-group-box">
        <router-link :to="{path: '/shop/info/detail', query: {showType: 'modify'}}" class="btn btn-success btn-round" type="button">修改企业信息</router-link>
        <router-link :to="{path: '/shop/info/detail', query: {showType: 'check-fail'}}" class="btn btn-danger btn-round" type="button">审核失败</router-link>
        <router-link :to="{path: '/shop/info/detail', query: {showType: 'check'}}" class="btn btn-warning btn-round" type="button">审核中...</router-link>
        <button class="btn btn-round btn-outline-success" type="button">结算销户</button>
      </div>
    </div>
    <div class="panel">
      <div class="panel-head">
        <p>基本信息</p>
      </div>
      <div class="panel-body">
        <table class="table table-bordered table-shop-info">
          <tbody>
            <tr><td>联系人</td><td>xxx</td></tr>
            <tr><td>联系方式</td><td>111111</td></tr>
            <tr><td>法人归属地</td><td></td></tr>
            <tr><td>公司邮箱</td><td></td></tr>
            <tr><td>公司地址</td><td>浙江杭州西湖区教工路23号百脑汇大厦</td></tr>
            <tr><td>业务简介</td><td></td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="panel panel-shop-license-info">
      <div class="panel-head">
        <p>法人/营业信息</p>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-12 col-lg-6">
            <div class="form-group">
              <label>法人身份证照片</label>
              <div class="img-group">

              </div>
            </div>
          </div>
          <div class="col-xs-12 col-lg-6">
            <div class="form-group">
              <label>营业执照照片</label>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  let vm
  export default {
    name: 'ShopInfo',
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
  .shop-info-head{
    position: relative;
    display: flex;
    padding: $gutter;
    margin-bottom: 30px;
    background-color: #f6f7fd;
    .img-box{
      width: 80px;
      height: 80px;
      background-color: #3382fd;
    }
    .info-box{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding: 10px 20px;
      strong{
        width: 100%;
        font-size: 20px;
        font-weight: bold;
        color: $text-dark;
      }
      span{

        width: 100%;
        font-size: 14px;
        color: $text;
      }
    }
    .btn-group-box{
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      .btn{
        margin-right: 15px;
      }
    }
  }
  .table-shop-info{
    td{
      padding: 16px;
    }
    td:first-child{
      padding-left: 25px;
      color: #5a758b;
      background-color: #f6f7fd;
    }
  }
  .panel-shop-license-info{
    label{
      font-weight: initial;
      font-size: 14px;
      color: $text;
    }
  }
</style>