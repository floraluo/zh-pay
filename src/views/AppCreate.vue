<template>
  <div>
    <head-tip parentTmp="create"></head-tip>
    <info-setting></info-setting>
  </div>
</template>

<script>
  import HeadTip from '../components/AppHeadTip'
  import InfoSetting from '../components/AppInfoSetting'
  let vm
  export default {
    name: 'AppCreate',
    components: { HeadTip, InfoSetting },
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

</style>