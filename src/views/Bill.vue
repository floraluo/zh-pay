<template>
  <div class="bill">
    <div class="panel-filter">
      <div class="filter-group">
        <label>按时间筛选：</label>
        <ul class="list-inline">
          <li class="active"><a href="javascript:;">本月</a></li>
          <li><a href="javascript:;">今日</a></li>
          <li>
            <date-picker v-model="filter.startTime" :width="'120'" :editable="true" :format="'YYYY-MM-DD'" placeholder="开始时间"></date-picker>
            至
            <date-picker v-model="filter.endTime" :not-before="filter.startTime" :width="'120'" :editable="true" :format="'YYYY-MM-DD'" placeholder="结束时间"></date-picker>
          </li>
        </ul>
      </div>
      <div class="filter-group">
        <label>按应用筛选：</label>
        <ul class="list-inline">
          <li class="active"><a href="javascript:;">全部</a></li>
          <li><a href="javascript:;">应用1</a></li>
        </ul>
      </div>
      <div class="filter-group">
        <label>按类型筛选：</label>
        <ul class="list-inline">
          <li class="active"><a href="javascript:;">全部</a></li>
          <li><a href="javascript:;">进账</a></li>
          <li><a href="javascript:;">退账</a></li>
        </ul>
      </div>
    </div>
    <div class="panel panel-data">
      <div class="panel-body row">
        <div class="col-xs-6 col-md-3">
          <i class="iconfont icon-paper"></i>
          <div class="data">
            <span>订单数</span>
            <strong>123123单</strong>
          </div>
        </div>
        <div class="col-xs-6 col-md-3">
          <i class="iconfont icon-gold-coin"></i>
          <div class="data">
            <span>进账</span>
            <strong>123123单</strong>
          </div>
        </div>
        <div class="col-xs-6 col-md-3">
          <i class="iconfont icon-charge-back"></i>
          <div class="data">
            <span>退单数</span>
            <strong>123123单</strong>
          </div>
        </div>
        <div class="col-xs-6 col-md-3">
          <i class="iconfont icon-refund"></i>
          <div class="data">
            <span>退款</span>
            <strong>123123单</strong>
          </div>
        </div>
      </div>
    </div>
    <div class="table-group" v-for="(item, index) in tables" :key="index">
      <div class="table-time-row">
        <span class="time">2018年02月17日1</span>
        <button class="btn btn-link toggle-collapse" type="button" @click="item.show = !item.show">
          <span v-if="item.show">收起</span>
          <span v-else>展开</span>
          <i class="iconfont" :class="{'icon-arrow-up': item.show, 'icon-arrow-down': !item.show}"></i>
        </button>
      </div>
      <div class="table-statistics-row row">
        <div class="col-xs-6"><span class="name">订单数：</span><span class="data">5810单</span></div>
        <div class="col-xs-6"><span class="name">进账：</span><span class="data">125480.00元</span></div>
        <div class="col-xs-6"><span class="name">退单数：</span><span class="data">5810单</span></div>
        <div class="col-xs-6"><span class="name">退款：</span><span class="data">100000.00元</span></div>
      </div>
      <div class="table-row " v-if="item.show">
        <v-table is-horizontal-resize
                 style="width:100%"
                 title-bg-color="#f0f2f9"
                 row-hover-color="#f7f7f7"
                 :title-row-height="44"
                 :columns="columns"
                 :table-data="tableData"
                 :show-vertical-border="false"
                 @on-custom-comp="someOperate"
        ></v-table>
      </div>
    </div>
  </div>
</template>

<script>
  import DatePicker from 'vue2-datepicker'
  import Moment from 'moment'

  import BillOrderDetail from '../components/BillOrderDetail'
  let vm
  export default {
    name: 'Bill',
    components: { DatePicker, BillOrderDetail },
    data () {
      return {
        layerId: null,
        detail: {payment: '支付宝', amount: '10000.00'},
        filter: {
          startTime: null,
          endTime:null
        },
        tables: [
          {show: true},
          {show: false},
          {show: false}
        ],
        collapse: [false, true, true],
        tableData: [
          {orderSn: '12344560', payment: "微信支付", amount: 120, time: '2018-09-25T12:25:01', status: 1, appName: '应用名称'},
          {orderSn: '12344561', payment: "微信支付", amount: 120, time: '2018-09-25T12:25:01', status: 2, appName: '应用名称'},
          {orderSn: '12344562', payment: "微信支付", amount: 120, time: '2018-09-25T12:25:01', status: 2, appName: '应用名称'},
          {orderSn: '12344563', payment: "微信支付", amount: 120, time: '2018-09-25T12:25:01', status: 1, appName: '应用名称'},
          {orderSn: '12344564', payment: "微信支付", amount: 120, time: '2018-09-25T12:25:01', status: 1, appName: '应用名称'}
        ],
        columns: [
          {title: '序号', width: 50, titleAlign: 'center', columnAlign: 'center', isResize: true, formatter: (rowData, rowIndex) => { return rowIndex + 1 }},
          {field: [
              {name: 'orderSn', type: "rowData", callback: this.openOrderDetail}
            ], title:'订单号', width: 100, titleAlign: 'center',columnAlign:'center', isResize: true, componentName: 'BaseTableOperation'},
          {field: 'payment', title: '支付方式', width: 80, titleAlign: 'center',columnAlign:'center', isResize: true,},
          {field: 'amount', title: '金额', width: 50, titleAlign: 'center',columnAlign:'center', isResize: true,},
          {field: 'time', title: '时间', width: 80, titleAlign: 'center',columnAlign:'center', isResize: true,
            formatter(rowData, rowIndex, pagingIndex, field) { return rowData[field] ? Moment(rowData[field]).format('HH:mm:ss') : '--' }
            },
          {field: 'status', title: '状态', width: 80, titleAlign: 'center',columnAlign:'center', isResize: true,
            formatter(rowData, rowIndex, pagingIndex, field) {
              if (rowData[field] === 1) return `<i class="spread-circle green"></i>支付完成`;
              if (rowData[field] === 2) return `<i class="spread-circle red"></i>退款成功`;
            }
            },
          {field: 'appName', title: '应用', width: 80, titleAlign: 'center',columnAlign:'left', isResize: true,}
        ]
      }
    },
    methods: {
      someOperate(params) {
        if (params.callback) {
          params.callback(params);
        }
      },
      openOrderDetail(params) {
        // this.$layer.msg("打开订单详情面板" + params.rowData.orderSn)
        this.$layer.iframe({
          content: {
            content: BillOrderDetail, //传递的组件对象
            parent: this,//当前的vue对象
            data:{
            }
            //props
          },
          area:['700px','410px'],
          title: '订单详情'
        });
        // vm.layerId = this.$layer.open({
        //   type: 1,
        //   title: '订单详情',
        //   area: ['700px', '410px'],
        //   content: document.getElementById('orderDetail')
        // })
      }
    },
    created () {
      vm = this
    }
  }
</script>
<style lang="scss">
  .bill{
    .filter-group .mx-input{
      border-radius: 50px;
      height: 28px;
      font-size: 12px;
    }
    .v-table-class{
      max-height: 445px;
    }
    .v-table-body-class{
      max-height: 400px;
    }
  }
</style>
<style scoped lang='scss'>
  /*@import "../sass/bootstrap/variables";*/
  @import "../sass/variables";
  $filter-group-color: #5a758b;
  .filter-group{
    label{
      color: $filter-group-color;
    }
    ul{
      display: inline-block;
      margin-left: 10px;
      li{
        padding-left: 10px;
        padding-right: 10px;
      }
      li + li{
        &:before{
          content: '';
          display: inline-block;
          vertical-align: middle;
          margin-left: -10px;
          margin-right: 10px;
          width: 1px;
          height: 25px;
          background-color: $filter-group-color;
        }
      }
      a{
        padding: 4px 13px;
        color: $filter-group-color;
        text-decoration: none;
        border: 1px solid transparent;
        border-radius: 50px;
        transition: border-color .2s;
      }
      li.active a{
        background-color: $theme-color;
        color: #fff;
      }
      li:hover a{
        border-color: $theme-color;
      }
    }
  }
  .panel-data{
    margin-top: 10px;
    padding-top: 50px;
    box-shadow: 0 0 10px 2px rgba(211, 218, 248, .6);
    .row > div{
      padding-bottom: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      .iconfont{
        margin-right: 10px;
        display: inline-block;
        font-size: 26px;
        width: 44px;
        height: 44px;
        line-height: 44px;
        text-align: center;
        color: #faaa1e;
        border-radius: 50%;
        background-color: #eef2fb;
      }
      .data{
        span{
          color: #8799a9;
        }
        strong{
          display: block;
          color: $text-dark;
          font-size: 18px;
          font-weight: bold   ;
        }
      }
    }
  }
  .table-group{
    .table-time-row{
      position: relative;
      padding-top: 10px;
      margin-bottom: 5px;
      .time{
        color: #647c91;
      }
      .toggle-collapse{
        position: absolute;
        right: 0;
        margin-top: -11px;
        color: $text;
        &:hover, &:focus{
          color: $text-dark;
          text-decoration: none;
        }
      }
    }
    .table-statistics-row{
      margin-bottom: 15px;
      font-size: 12px;
      color: $text-light;
    }
    .table-row{
      margin-bottom: 15px;
    }
  }
  @media (min-width: $screen-md-min) {
    .table-time-row{
      margin-bottom: 15px !important;
    }
    .table-group{
      position: relative;
      .table-statistics-row{
        position: absolute;
        top: 12px;
        left: 10em;
        right: 7em;
        > div{
          width: auto;
        }
      }
    }
  }
</style>