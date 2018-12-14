<template>
  <div id="home">
    <div class="container">
      <nav>
        <ul class="nav">
          <li v-for="(item, index) in menus" :key="index">
            <router-link :to="{path: item.path}"  :class="{active: item.active}">
              <i :class="['iconfont', item.icon]"></i><span>{{item.name}}</span>
            </router-link>
          </li>
        </ul>
      </nav>
      <div id="mainContainer" class="">
        <div id="crumbs">
          <template v-for="(item, index) in crumbs">
            <!--<div v-if="crumbs.length > 0" v-for="(item, index) in crumbs" :key="index">-->
              <span v-if="crumbs.length > 1 && crumbs.length !== index+1"  :key="index">{{item.name}} / </span>
              <span v-else :key="index">{{item.name}}</span>
            <!--</div>-->
          </template>

        </div>
        <main>
          <keep-alive>
            <router-view/>
          </keep-alive>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

let vm;
export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      crumbs: [],
      menus: [
        { name: '首页', path: '/index', icon: 'icon-home', active: false },
        { name: '账单', path: '/bill', icon: 'icon-bill', active: false },
        { name: '应用', path: '/app', icon: 'icon-file', active: false },
        { name: '消息中心', path: '/msg', icon: 'icon-msg', active: false },
        { name: '商户中心', path: '/shop', icon: 'icon-person',active: false }
      ]
    }
  },
  watch: {
    '$route.path': function (val, oldVal) {
      _setActiveMenu();
      _setCrumb();
    }
  },
  created() {
    vm = this;
    _setCrumb()
    _setActiveMenu()
  }
}
function _setActiveMenu () {

  vm.menus.forEach(item => {
    if(vm.$route.path.search(item.path) > -1) {
      item.active = true;
    } else {
      item.active = false;
    }
  })
}
function _setCrumb () {
  // console.log(vm.$route)
  // console.log(vm.$router)
  //init crumb
  let currentPath = vm.$route.path.replace(/^\/|\/$/g,'');
  if (vm.crumbs.length === 0 && !vm.$route.meta.initCrumb) {
    _resetCrumb(currentPath)
  }
  if (vm.$route.meta.initCrumb) {
    vm.crumbs = [{ name: vm.$route.name, route: vm.$route,}];
  } else {
    let curmbLen = vm.crumbs.length;
    if (vm.crumbs[curmbLen - 1].route.path.search(currentPath) === -1 && currentPath.search(vm.crumbs[curmbLen - 1].route.path) > -1) {
      vm.crumbs.push({ name: vm.$route.name, route: vm.$route,});
    } else {
      _resetCrumb(currentPath)
    }
  }
}
function _resetCrumb (currentPath) {
  vm.crumbs = []
  let homeChild;
  vm.$router.options.routes.some(item => {
    if (item.name === 'home'){
      homeChild = item.children;
      return true
    }
  })
  if (homeChild) {
    homeChild.forEach(item => {
      if (currentPath.search(item.path) === 0) {
        vm.crumbs.push({name: item.name, route: item})
      }
    })
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
  @import "../sass/_variables.scss";
  @import "../sass/sprite.scss";
  @import "../sass/global";
  .iconsvg {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .iconsprite{
    display: inline-block;
    vertical-align: middle;
  }
  @include sprites($spritesheet-sprites);

  #home{
    min-height: calc(100vh - #{$header-height});
    padding: $gutter / 2;
    background-color: $bg-color;
    nav{
      float: left;
      width: $nav-width;
      min-height: calc(100vh - #{$header-height} - #{2 * $gutter});
      box-shadow: 0 0 5px rgba(214, 214, 214, .35);
      background-color: #fff;
    }
    .nav > li > a{
      padding-top: 20px;
      padding-bottom: 20px;
      text-align: center;
      font-size: 16px;
      color: $text;
      transition: all .3s;
      &:hover{
        color: $theme-color;
      }
      &:focus, &.active{
        color: #fff;
        background-color: $theme-color;
      }

      .iconfont{
        display: block;
        margin-bottom: 5px;
        font-size: 26px;
      }
    }
  }
  #mainContainer{
    float: right;
    width: calc(100% - #{$gutter} - #{$nav-width});
  }
  #crumbs{
    height: $crumbs-height;
    color: $text-light;
  }
  main{
    padding: $gutter / 2;
    min-height: calc(100vh - #{$header-height} - #{$crumbs-height} - #{2*$gutter});
    background-color: #fff;
  }
  @media (min-width: $screen-xs-min) {
    #home, main{
      padding: $gutter;
    }
  }
  @media (max-width: $screen-md-max) {
    #home nav{
      width: $nav-s-width;
    }
    #mainContainer{
      width: calc(100% - #{$gutter} - #{$nav-s-width});
    }
  }
</style>