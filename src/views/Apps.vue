<template>
  <div class="app-main">
    <head-tip></head-tip>
    <div class="table-row">
      <v-table is-horizontal-resize
               style="width:100%"
               title-bg-color="#f0f2f9"
               row-hover-color="#f2f6f9"
               :title-row-height="50"
               :row-height="60"
               :columns="columns"
               :table-data="tableData"
               :show-vertical-border="false"
               :show-horizontal-border="false"
               @on-custom-comp="someOperate"
      ></v-table>
    </div>
  </div>
</template>

<script>
  import Moment from 'moment'
  import HeadTip from '../components/AppHeadTip'
  let vm
  export default {
    name: 'Apps',
    components: { HeadTip },
    data () {
      return {
        tableData: [
          {orderSn: '臻合小程序', payment: "1214646asdf234asd23", amount: 'https://www.wrw3.com', type: '电商', status: 1, time: '2018-09-25T12:25:01'},
          {orderSn: '臻合PC支付', payment: "1214646asdf234asd23", amount: 'https://www.wrw3.com', type: '电商', status: 2, time: '2018-09-25T12:25:01'},
          {orderSn: '赚翻啦', payment: "1214646asdf234asd23", amount: 'https://www.wrw3.com', type: '电商', status: 3, time: '2018-09-25T12:25:01'},
          {orderSn: '赚翻啦', payment: "1214646asdf234asd23", amount: 'https://www.wrw3.com', type: '电商', status: 3, time: '2018-09-25T12:25:01'},
          {orderSn: '赚翻啦', payment: "1214646asdf234asd23", amount: 'https://www.wrw3.com', type: '电商', status: 3, time: '2018-09-25T12:25:01'},
          {orderSn: '臻合App支付', payment: "1214646asdf234asd23", amount: 'https://www.wrw3.com', type: '电商', status: 1, time: '2018-09-25T12:25:01'},
        ],
        columns: [
          {field: [
              {name: 'orderSn', type: "rowData", callback: this.openDetail}
            ], title:'应用名称', width: 100, titleAlign: 'left',columnAlign:'left', isResize: true, componentName: 'BaseTableOperation'},
          {field: 'payment', title: 'AppId', width: 80, titleAlign: 'center',columnAlign:'center', isResize: true},
          {field: 'amount', title: '备案网址', width: 120, titleAlign: 'center',columnAlign:'center', isResize: true, overflowTitle: true},
          {field: 'type', title: '行业类别', width: 80, titleAlign: 'center',columnAlign:'center', isResize: true},
          {field: 'status', title: '状态', width: 80, titleAlign: 'left',columnAlign:'left', isResize: true,
            formatter(rowData, rowIndex, pagingIndex, field) {
              if (rowData[field] === 1) return `<i class="spread-circle green"></i>已上线`;
              if (rowData[field] === 2) return `<i class="spread-circle orange"></i>审核中`;
              if (rowData[field] === 3) return `<i class="spread-circle red"></i>审核失败`;
            }
          },
          {field: 'time', title: '创建时间', width: 100, titleAlign: 'center',columnAlign:'center', isResize: true,
            formatter(rowData, rowIndex, pagingIndex, field) { return rowData[field] ? Moment(rowData[field]).format('YYYY-MM-DD HH:mm:ss') : '--' }
          }
        ]
      }
    },
    methods: {
      someOperate(params) {
        if (params.callback) {
          params.callback(params);
        }
      },
      openDetail(params) {
        this.$layer.msg("打开详情页："+ params.rowData.orderSn)
      }
    },
    created () {
      vm = this
    }
  }
</script>
<style lang="scss">
  .app-main{
    .v-table-class{
      border-color: transparent;
    }
    .v-table-title-class{
      font-weight: bold;
      td:first-child .v-table-title-cell{
        padding-left: 20px;
      }
    }
    .v-table-body-class td:first-child .v-table-body-cell{
      padding-left: 20px;
    }
  }
</style>
<style scoped lang='scss'>

</style>