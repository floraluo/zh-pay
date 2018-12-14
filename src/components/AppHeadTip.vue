<template>
  <div class="h-tips">
    <p>截止到2018-02-06共有12个应用</p>
    <div class="link-group">
      <router-link :to="{path: 'app/create'}" class="btn btn-success btn-round" v-if="parentTmp === ''">创建应用</router-link>
      <router-link :to="{path: 'app/create'}" class="btn btn-outline-success btn-round">接口教程</router-link>
    </div>
  </div>
</template>

<script>
  let vm
  export default {
    name: 'AppHTips',
    props: {
      parentTmp: {
        default: '',
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
  .h-tips{
    position: relative;
    height: 60px;
    margin-bottom: $gutter * 1.5;
    border-radius: 4px;
    border: 1px solid #fac066;
    background-color: #fcf3e5;
    p{
      padding-left: 20px;
      color: $text-light;
      line-height: 58px;
      margin-bottom: 0;
    }
    .link-group{
      position: absolute;
      right: 0;
      top: 13px;
      .btn{
        margin-right: 15px;
      }
    }
  }
</style>