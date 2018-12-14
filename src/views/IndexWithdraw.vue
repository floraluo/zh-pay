<template>
  <div class="no-padding-main">
    <div class="top-amount">
      <span>可提现余额</span>
      <strong>28000.00元</strong>
    </div>
    <div class="main-form">
      <form>
        <div class="form-group">
          <label>提现账号：</label>
          <div class="info-group">
            <svg class="iconsvg" aria-hidden="true"><use xlink:href="#icon-abc"></use></svg>
            <span>中国农业银行</span>
            <span>尾号：3456</span>
            <small>每日限额50000.00元</small>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label">提现金额：</label>
          <div class="input-group">
            <input type="text" class="form-control" placeholder="输入金额">
            <span class="input-group-addin"><span class="addon">元</span>
              <button class="btn btn-link" type="button" @click="withdrawAll">全部提现</button></span>
          </div>
        </div>
        <div class="form-group">
          <label>到账时间：</label>
          <div class="tag-group">
            <span v-for="(item, index) in accountingDate" :key="index" :class="['tag',{active: item.value === defaultDay}]">T + {{item.value}}</span>
          </div>
        </div>
        <div class="form-group commission">
          <label class="ls">手续费：</label>
          <div class="info-group">0.15%</div>
        </div>
        <div class="form-group">
          <label class="control-label">支付密码：</label>
          <div class="input-group">
            <input type="password" class="form-control" placeholder="输入密码">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label">短信验证码：</label>
          <div class="input-group">
            <input type="text" class="form-control" placeholder="输入验证码">
            <span class="input-group-addin"><button class="btn btn-link" type="button">获取验证码</button></span>
          </div>
        </div>
        <div class="btn-group">
          <button class="btn btn-success btn-block" type="button">确认提现</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  let vm
  export default {
    name: 'IndexWithdraw',
    data () {
      return {
        route: this.$route,
        accountingDate: [{value: 1},{value: 3},{value: 5},{value: 7}],
        defaultDay: 1
      }
    },
    methods: {
      withdrawAll() {
        this.$layer.msg("没有可提现金额");
      }
    },
    created () {
      vm = this
      // console.log(this.$route)
    }
  }
</script>

<style scoped lang='scss'>
  @import "../sass/bootstrap/mixins/clearfix";
  @import "../sass/variables";
  $horizontal-padding: 30px;
  .top-amount{
    display: flex;
    align-items: center;
    color: #fff;
    padding-left: $horizontal-padding;
    height: 196px;
    background: linear-gradient(to right, #ff8261, #ff6f99);
    span{
      padding-top: 18px;
      padding-right: 25px;
      font-size: 18px;
    }
    strong{
      font-size: 48px;
    }
  }
  .main-form{
    padding: 40px $horizontal-padding;
    color: $text;
    .form-group{
      @include clearfix();
      margin-bottom: 30px;
      &.commission{
        label{
          letter-spacing: .3em;
        }
        .info-group{
          color: #5a758b;
        }
      }
      label{
        float: left;
        width: 7em;
        color: $text;
        font-weight: initial;
        &.control-label{
          padding-top: 6px;
        }
      }
      .info-group, .tag-group{
        float: left;
      }
      .info-group{
        .iconsvg{
          vertical-align: middle;
          font-size: 18px;
          margin-right: 10px;
        }
        span{
          margin-right: 20px;
        }
        small{
          color: $text-light;
        }
      }
      .input-group{
        width: 10em;
        .form-control{
          height: 32px;
          border-radius: 50px;
        }
      }
      .input-group-addin{
        position: absolute;
        display: flex;
        align-items: center;
        right: -100%;
        width: 100%;
        border: none;
        background-color: transparent;
        .addon{
          margin-left: 5px;
        }
        .btn-link{
          margin-left: 20px;
          color: #fd8025;
          &:focus, &:active{
            outline: none;
          }
        }
      }
      .tag-group{
        padding-left: 10px;
        .tag{
          position: relative;
          margin-right: 25px;
          font-size: 12px;
          padding: 2px 6px;
          border: 1px solid #dbdbdb;
          border-left: 0;
          color: $text-light;
          background-color: #e1e9ef;
          cursor: pointer;
          &:hover{
            color: #75a7c9;
            border-color: #75a7c9;
            /*border-left-color: #dbdbdb;*/
            &:before{
              border-right-color: #75a7c9;
            }
          }
          &:before, &:after{
            content: '';
            position: absolute;
            width: 0;
            height: 0;
          }
          &:before{
            top: -1px;
            left: -10px;
            border-right: 10px solid #dbdbdb;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
          }
          &:after{
            left: -9px;
            border-right: 9px solid #e1e9ef;
            border-top: 9px solid transparent;
            border-bottom: 9px solid transparent;
            top: 0;
          }
          &.active{
            color: #fff;
            border-color: #75a7c9;
            background-color: #75a7c9;
            &:before, &:after{
              border-right-color: #75a7c9;
            }
          }
        }
      }
    }
    .btn-group{
      width: 350px;
      .btn{
        border-radius: 50px;
      }
    }
  }

</style>