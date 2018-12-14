<template>
  <div class="no-data">
    <div>
      <img src="../assets/img/no-data.png" alt="" v-if="type === 'no-data'">
      <img src="../assets/img/no-msg.png" alt="" v-if="type === 'no-msg'">
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script>
  let vm
  export default {
    name: 'BaseNoData',
    props: {
      type: {
        default: 'no-data',
        type: String
      },
      text: {
        default: '暂时没有数据',
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
  .no-data{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    p{
      padding-top: 20px;
      text-align: center;
    }
  }
</style>