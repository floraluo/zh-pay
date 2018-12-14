<template>
  <div :class="$route.query.showType">
    <div class="h-tips" v-if="$route.query.showType === 'check'">正在审核中，请耐心等待</div>
    <div class="h-tips" v-if="$route.query.showType === 'check-fail'">审核意见：营业执照不清晰</div>

    <div class="panel">
      <div class="panel-head">
        <p>企业信息</p>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="form-group col-xs-12 col-md-6">
            <label>企业名称：</label>
            <div class="input-group">
              <input type="text" class="form-control">
            </div>
            <span class="value">杭州臻合网络</span>
          </div>
          <div class="form-group col-xs-12 col-md-6">
            <label>社会信息代码：</label>
            <div class="input-group">
              <input type="text" class="form-control">
            </div>
            <span class="value">1231243</span>
          </div>
          <div class="form-group col-xs-12 col-md-6">
            <label>企业logo：</label>

          </div>
          <div class="form-group col-xs-12 col-md-6">
            <label>营业执照照片：</label>

          </div>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="panel-head">
        <p>法人信息</p>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="form-group col-xs-12"><label>法人归属地：</label></div>
          <div class="form-group col-xs-12"><label>法人身份证照片：</label></div>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="panel-head">
        <p>企业基础信息</p>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="form-group col-xs-12 col-md-6">
            <label>联系人：</label>
            <div class="input-group"><input type="text" class="form-control"></div>
            <span class="value">111</span></div>
          <div class="form-group col-xs-12 col-md-6">
            <label>联系方式：</label>
            <div class="input-group"><input type="text" class="form-control"></div>
            <span class="value">111</span></div>
          <div class="form-group col-xs-12 col-md-6">
            <label>企业邮箱：</label>
            <div class="input-group"><input type="text" class="form-control"></div>
            <span class="value">111</span></div>
          <div class="form-group col-xs-12 col-md-6">
            <label>企业地址：</label>
            <div class="input-group"><input type="text" class="form-control"></div>
            <span class="value">111</span></div>
          <div class="form-group col-xs-12">
            <label>业务简介：</label>
            <div class="textarea-group"><textarea class="form-control" rows="3" cols="80"></textarea></div>
            <span class="value"></span></div>
        </div>
      </div>
    </div>
    <div class="btn-row" v-if="$route.query.showType === 'modify'">
      <button class="btn btn-success btn-round" type="button">提交</button>
      <button class="btn btn-default btn-round" type="button">取消</button>
    </div>
  </div>
</template>

<script>
  let vm
  export default {
    name: 'ShopInfoDetail',
    props: {
      pageType: {
        default: 'modify',
        type: String
      }
    },
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
  .form-control, span.value{
    display: none;
  }
  .modify .form-control, .check span.value, .check-fail span.value{
    display: inline-block;
  }
  .h-tips{
    padding: 20px;
    margin-bottom: 30px;
    border: 1px solid transparent;
    border-radius: 4px;
    font-size: 14px;
    color: $text-light;
  }
  .check .h-tips{
    border-color: #fd8b85;
    background-color: #fdf3f2;
  }
  .check-fail .h-tips{
    border-color: #fac066;
    background-color: #fcf3e5;
  }
  .row{
    label{
      padding-top: 6px;
      font-size: 14px;
      font-weight: initial;
      float: left;
      min-width: 7em;
      text-align: right;
      color: $text-light;
    }
    .input-group{
      padding-left: 10px;
      input.form-control{
        height: 32px;
        border-radius: 50px;
      }
    }
    .textarea-group{
      padding-left: 10px;
      float: left;
      .form-control{
        border-radius: 10px;
      }
    }
    span.value{
      padding-top: 6px;
    }
  }

  .btn-row{
    text-align: center;
    .btn{
      width: 240px;
      margin-left: 15px;
      margin-bottom: 15px;
    }
  }
</style>