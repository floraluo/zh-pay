<template>
  <div>
    <div class="base-setting-head">
      <div class="info-box">
        <img src="../assets/img/ipone.png" alt="">
        <div class="info">
          <p>绑定手机号 <small>（绑定的手机号用于用户登录，请谨慎修改）</small></p>
          <strong> mu***122</strong>
        </div>
      </div>
      <div class="btn-box">
        <button class="btn btn-round btn-success" type="button">修改手机号</button>
      </div>
    </div>
    <div class="base-setting-form">
      <form class="form-horizontal">
        <div class="form-group">
          <label>原绑定手机号：</label>
          <div class="input-box">
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label>新绑定手机号：</label>
          <div class="input-box">
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label>手机号：</label>
          <div class="input-box">
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label>短信验证码：</label>
          <div class="input-box-group">
            <input type="text" class="form-control">
            <button class="btn btn-link" type="button">获取验证码</button>
          </div>
        </div>
        <div class="btn-row">
          <button class="btn btn-success btn-round" type="button">确认</button>
          <button class="btn btn-default btn-round" type="button">取消</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  let vm
  export default {
    name: 'ShopPhone',
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
  .form-group{
    label{
      width: 8em;
    }
    .input-box, .input-box-group{
      width: calc(100% - 8em);
    }
    .input-box-group{
      display: flex;
      input{
      }
    }
  }
  .btn-row .btn{
    width: calc((100% - 15px) / 2);
  }
</style>