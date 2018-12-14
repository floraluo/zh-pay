<template>
  <span class="table-operate">
      <a href="javascript:;"
         @click.stop.prevent="publishOperate(item)"
         v-for="(item, index) in operates"
         :key="index" :class="{data: item.type === 'rowData'}">

        <span v-if="item.type === 'rowData'" >{{rowData[item.name]}}</span>
        <span v-else>{{item.name}}</span>

      </a>
  </span>
</template>

<script>

  export default {
    name: 'BaseTableOperation2',
    props: {
      rowData: {
        type: Object
      },
      field: {
        type: Array
      },
      index: {
        type: Number
      }
    },
    computed: {
      operates () {
        return this.field;
      },
      control() {
        return this.field.split("|")[1];
      }
    },
    methods: {
      publishOperate(operate) {
        // publish(`${type}.table.operate.${this.field.split("|")[0]}`, {
        //   type: type,
        //   index: this.index,
        //   rowData: this.rowData
        // })
        let params = {type: operate.type, index: this.index, rowData: this.rowData, callback: operate.callback};
        this.$emit('on-custom-comp', params)
      }
    }
  }
</script>
<style scoped lang="scss">
  .data{
    color: #3ac27e;
  }
</style>
<style lang="scss">
  .table-operate {
    a + a{
      margin-left: 5px;
    }
  }
</style>
