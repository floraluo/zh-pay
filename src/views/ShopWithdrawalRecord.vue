<template>
  <div class="main-shop-withdraw">
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
        <label>按状态筛选：</label>
        <ul class="list-inline">
          <li class="active"><a href="javascript:;">全部</a></li>
          <li><a href="javascript:;">处理中</a></li>
          <li><a href="javascript:;">成功</a></li>
          <li><a href="javascript:;">失败</a></li>
        </ul>
      </div>
    </div>
    <div class="table-row ">
      <v-table is-horizontal-resize
               style="width:100%"
               title-bg-color="#f0f2f9"
               even-bg-color="#f0f2f9"
               row-hover-color="#f7f7f7"
               :title-row-height="44"
               :columns="columns"
               :table-data="tableData"
               :show-vertical-border="false"
               @on-custom-comp="someOperate"
      ></v-table>
    </div>
  </div>
</template>

<script>
  import DatePicker from 'vue2-datepicker'
  import Moment from 'moment'
  import ShopWithdrawDetail from '../components/ShopWithdrawDetail'

  let vm
  export default {
    name: 'ShopWithdrawalRecord',
    components: { DatePicker, ShopWithdrawDetail },
    data () {
      return {
        layerId: null,
        detail: {amount: '10000.00'},
        filter: {
          startTime: null,
          endTime:null
        },
        tableData: [
          {orderSn: '12344560', pattern: "微信支付", amount: 120, time: '2018-09-25T12:25:01', status: 'T+1', appName: '应用名称'},
          {orderSn: '12344561', pattern: "微信支付", amount: 120, time: '2018-09-25T12:25:01', status: 'T+1', appName: '应用名称'},
          {orderSn: '12344562', pattern: "微信支付", amount: 120, time: '2018-09-25T12:25:01', status: 'T+1', appName: '应用名称'},
          {orderSn: '12344563', pattern: "微信支付", amount: 120, time: '2018-09-25T12:25:01', status: 'T+1', appName: '应用名称'},
          {orderSn: '12344564', pattern: "微信支付", amount: 120, time: '2018-09-25T12:25:01', status: 'T+1', appName: '应用名称'}
        ],
        columns: [
          {title: '序号', width: 50, titleAlign: 'center', columnAlign: 'center', isResize: true, formatter: (rowData, rowIndex) => { return rowIndex + 1 }},
          {field: [
              {name: 'orderSn', type: "rowData", callback: this.openWithdrawDetail}
            ], title:'单据号', width: 100, titleAlign: 'center',columnAlign:'center', isResize: true, componentName: 'BaseTableOperation'},
          {field: 'time', title: '提现时间', width: 80, titleAlign: 'center',columnAlign:'center', isResize: true,
            formatter(rowData, rowIndex, pagingIndex, field) { return rowData[field] ? Moment(rowData[field]).format('HH:mm:ss') : '--' }
          },
          {field: 'amount', title: '金额', width: 50, titleAlign: 'center',columnAlign:'center', isResize: true,},
          {field: 'serviceCharge', title: '手续费', width: 50, titleAlign: 'center',columnAlign:'center', isResize: true,},
          {field: 'pattern', title: '到账模式', width: 50, titleAlign: 'center',columnAlign:'center', isResize: true,},
          {field: 'status', title: '状态', width: 80, titleAlign: 'center',columnAlign:'center', isResize: true,
            formatter(rowData, rowIndex, pagingIndex, field) {
              return `<span class="table-tag">${rowData[field]}</span>`;
            }
          },
          {field: 'appName', title: '说明', width: 80, titleAlign: 'center',columnAlign:'left', isResize: true,}
        ]
      }
    },
    methods: {
      someOperate(params) {
        if (params.callback) {
          params.callback(params);
        }
      },
      openWithdrawDetail(params) {
        this.detail = params.rowData
        this.$layer.iframe({
          content: {
            content: ShopWithdrawDetail, //传递的组件对象
            parent: this,//当前的vue对象
            data: {}
          },
          area:['700px','410px'],
          title: '提现详情'
        });
      }
    },
    created () {
      vm = this
    }
  }
</script>
<style lang="scss">
  .main-shop-withdraw{
    .tag{
      background-color: #fcf3e5;
    }
  }
</style>
<style scoped lang='scss'>
  @import "../sass/variables";
  $filter-group-color: #5a758b;
  .filter-group{
    margin-bottom: 15px;
    label{
      color: $filter-group-color;
    }
    ul{
      display: inline-block;
      margin-left: 10px;
      margin-bottom: 0;
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

        padding: 4px 0;
        display: inline-block;
        width: 4em;
        text-align: center;
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
  .table-row{
    margin-top: 25px;
    margin-bottom: 15px;
  }
</style>