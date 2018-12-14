<template>
  <div id="app">
    <header>
      <div class="container">
        <!--<div class="row">-->
          <div class="h-info">
            <span class="highlight">您好！</span>
            <a href="javascript:;">退出</a>
          </div>
          <div class="h-function">
            <a href="javascript:;" class="notification-box"><i class="iconfont icon-bell"></i><span class="red-dot">99+</span></a>
            <a href="javascript:;"><i class="iconfont icon-help"></i>帮助</a>
          </div>
        <!--</div>-->
      </div>
    </header>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "sass/bootstrap";
  @import "sass/variables";
  .container{
    padding-left: 0;
    padding-right: 0;
  }
  header{
    height: $header-height;
    font-size: 14px;
    color: #fff;
    background-color: #333;
    /*.row{*/
      padding-top: 10px;
      padding-bottom: 10px;
    /*}*/
    a{
      color: #fff;
      &:hover, &:active{
        color: #3c8cd4;
        text-decoration: none;
      }
    }
    .h-info{
      float: left;
      .highlight{
        margin-right: 5px;
        color: $theme-color;
      }
    }
    .h-function{
      float: right;
      .iconfont{
        font-size: 16px;
      }
      .notification-box{
        margin-right: 40px;
        .red-dot{
          position: absolute;
          display: inline-block;
          margin-top: -5px;
          margin-left: -5px;
          padding: 2px 6px;
          font-size: 12px;
          line-height: 1;
          background-color: #f96767;
          border-radius: 25px;
          color: #fff;
        }
      }
      .icon-help{
        margin-right: 5px;
      }
    }
  }
</style>