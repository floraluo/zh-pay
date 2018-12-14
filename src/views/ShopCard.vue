<template>
  <div>
    <div class="bankcard-head">
      <div class="bankcard-info">
        <img src="../assets/img/bankcard-bg.png" alt="">
        <div class="bank-name">
          <div class="bank-logo">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-icbc"></use>
            </svg>
          </div>
          <div class="name">中国xx银行</div>
        </div>
        <p class="card-num">6003 0092 1231 1234</p>
        <p class="client-name">刘欢</p>
        <span>默认提现到该银行卡</span>
      </div>
      <div class="bankcard-btn-group">
        <button class="btn btn-success btn-round" type="button">修改银行卡</button>
        <button class="btn btn-default btn-round" type="button">删除银行卡</button>
      </div>
    </div>
    <div class="base-setting-form">
      <form class="form-horizontal">
        <div class="form-group">
          <label>开卡银行选择：</label>

        </div>
        <div class="form-group">
          <label>开卡支行全称：</label>
          <div class="input-box">
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label>开户人姓名：</label>
          <div class="input-box">
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label>银行卡号：</label>
          <div class="input-box">
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label>手机号码：</label>
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
    name: 'ShopCard',
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
  .bankcard-head{
    padding: 30px 30px 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .bankcard-info{
      position: relative;
      .bank-name, .card-num, .client-name, > span{
        position: absolute;
        left: 10%;
      }
      .bank-name{
        top: 15%;
        display: flex;
        align-items: center;
        .bank-logo{
          margin-right: 15px;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          background-color: #fff;
          >svg{
            width: 80%;
            height: 80%;
          }
        }
        .name{
          font-size: 16px;
          color: #fff;
        }
      }
      .card-num{
        top: 40%;
        font-size: 20px;
        color: #fff;
      }
      .client-name{
        top: 60%;
        font-size: 14px;
        color: #fff;
      }
      > span{
        bottom: 12%;
        font-size: 12px;
        color: #cccccc;
      }
    }
    .bankcard-btn-group{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding-top: 30px;
      padding-bottom: 30px;
      > .btn{
        width: 100%;
        + .btn{
          margin-top: 15px;
        }
      }
    }
  }
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
        /*width: 50%;*/
        /*display: inline-block;*/
      }
    }
  }
  .btn-row .btn{
    width: calc((100% - 15px) / 2);
  }
</style>