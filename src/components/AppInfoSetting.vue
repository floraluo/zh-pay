<template>
  <div class="">
    <div class="main-info-setting" v-show="!submitSuccess">
      <ul class="tabs">
        <li class="tab" :class="{active: showTab === 1}" @click="showTab = 1">
          <span class="step-num">1</span>
          <p>
            <strong class="title">基本信息</strong>
            <small>填写应用基本信息</small>
          </p>
        </li>
        <li class="tab" :class="{active: showTab === 2}" @click="showTab = 2">
          <span class="step-num">2</span>
          <p>
            <strong class="title">开发设置</strong>
            <small>设置应用开发信息</small>
          </p>
        </li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane" :class="{'active': showTab === 1}" id="info">
          <div class="panel panel-base-info">
            <div class="panel-head">
              <p>基础信息</p>
            </div>
            <div class="panel-body">
              <div class="form-group">
                <label>应用名称：</label>
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="输入名称">
                </div>
                <span class="value">京东到家</span>
                <button class="btn btn-link btn-update" type="button">修改</button>
                <button class="btn btn-link btn-save" type="button">保存</button>
                <button class="btn btn-link btn-cancel" type="button">取消</button>
              </div>
              <div class="form-group">
                <label>应用图标：</label>
              </div>
            </div>
          </div>
          <div class="panel panel-base-info">
            <div class="panel-head">
              <p>功能列表</p>
            </div>
            <div class="panel-body">
              <v-table is-horizontal-resize
                       style="width:100%"
                       title-bg-color="#f0f2f9"
                       row-hover-color="#f7f7f7"
                       :title-row-height="44"
                       :columns="columns"
                       :table-data="tableData"
                       :show-vertical-border="false"
              ></v-table>
            </div>
          </div>
          <div class="panel">
            <div class="panel-head">
              <p>备案信息</p>
            </div>
            <div class="panel-body">
              <div class="form-group">
                <label>备案网址：</label>
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="输入网址">
                </div>
                <span class="value">https://www.123.com</span>
                <button class="btn btn-link btn-update" type="button">修改</button>
                <button class="btn btn-link btn-save" type="button">保存</button>
                <button class="btn btn-link btn-cancel" type="button">取消</button>
              </div>
              <div class="form-group">
                <label>所属类别：</label>
                <div class="input-group">
                  <multi-select
                          value="id"
                          v-model="selectedCat"
                          label="name"
                          placeholder="选择类别"
                          track-by="id"
                          :maxHeight="250"
                          :showLabels="false"
                          :close-on-select="true"
                          :searchable="false"
                          :allow-empty="false"
                          open-direction="bottom"
                          :options="categoryList">
                  </multi-select>
                </div>
              </div>
            </div>
          </div>
          <div class="base-info-btn-row">
            <button class="btn btn-success btn-round" type="button"  @click="showTab = 2">下一步</button>
          </div>
        </div>
        <div class="tab-pane" :class="{'active': showTab === 2}" id="setting">
          <div class="panel panel-dev-setting">
            <div class="panel-head">
              <p>开发设置</p>
            </div>
            <div class="panel-body">
              <div class="form-group">
                <label>臻合网关：</label>
                <span class="value">https://www.123.com</span>
              </div>
              <div class="form-group">
                <label>应用网关：</label>
                <span class="value">暂无</span>
                <button class="btn btn-link btn-update" type="button">设置</button>
              </div>
              <div class="form-group">
                <label>授权对调地址：</label>
                <span class="value">暂无</span>
                <button class="btn btn-link btn-update" type="button">设置</button>
              </div>
              <div class="form-group">
                <label>加签方式：</label>
                <span class="value">XXX密钥</span>
                <button class="btn btn-link btn-update" type="button">查看应用密钥</button>
              </div>
              <div class="form-group">
                <label>授权内容加签方式：</label>
                <span class="value">AES密钥</span>
                <button class="btn btn-link btn-update" type="button">设置</button>
              </div>
            </div>
          </div>
          <div class="setting-btn-row">
            <button class="btn btn-success btn-round" type="button" @click="submitSuccess = true">提交</button>
          </div>
        </div>
      </div>
    </div>
    <div class="main-submit-success" v-show="submitSuccess">
      <i class="iconfont icon-circle-right"></i>
      <strong>提交成功</strong>
      <p>恭喜您，提交应用成功，请等待审核！</p>
      <div class="success-btn-row">
        <button class="btn btn-success btn-round" type="button" @click="returnApp">返回应用</button>
        <button class="btn btn-default btn-round" type="button" @click="submitSuccess = false; showTab = 1">继续添加</button>
      </div>
    </div>
  </div>
</template>

<script>
  import MultiSelect from 'vue-multiselect'
  let vm
  export default {
    name: 'AppInfoSetting',
    components: { MultiSelect },
    data () {
      return {
        showTab: 1,
        submitSuccess: false,
        selectedCat: {id: 1, name: '类别1'},
        categoryList: [
          {id: 1, name: '类别1'},
          {id: 2, name: '类别2'}
          ],
        tableData: [
          {name: '线上支付', des: '什么线上支付线上支付线上支付线上支付功能名称什么功能名称什么功能名称什么功能名称什么功能名称'}],
        columns: [
          {width: 60, titleAlign: 'center',columnAlign:'center',type: 'selection'},
          {field: 'name', title: '功能名称', width: 80, titleAlign: 'center',columnAlign:'center', isResize: true,},
          {field: 'des', title: '功能介绍', width: 500, titleAlign: 'left',columnAlign:'left', isResize: true,}
        ]
      }
    },
    methods: {
      returnApp() {
        this.submitSuccess = false;
        this.showTab = 1
        this.$router.push({path: '/app'})
      }
    },
    created () {
      vm = this
    }
  }
</script>

<style scoped lang='scss'>
  @import "../sass/variables";
  $tab-active-color: #5ad497;
  $input-width: 330px;
  .input-group{
    width: $input-width;
  }
  .tabs{
    display: flex;
    padding-left: 0;
    margin-bottom: 20px;
    .tab{
      padding-left: 30px;
      padding-top: 10px;
      padding-bottom: 10px;
      flex: 1;
      display: flex;
      align-items: center;
      list-style: none;
      background-color: #f0f2f9;
      cursor: pointer;
      .step-num{
        display: inline-block;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        text-align: center;
        line-height: 32px;
        font-size: 16px;
        color: #fff;
        background-color: #98b0c1;
      }
      p{
        margin-left: 15px;
        margin-bottom: 0;
        strong{
          font-size: 16px;
          color: #52606a;
          display: block;
        }
        small{
          font-size: 12px;
          color: $text-light;
        }
      }
      &:hover{
        .step-num{
          color: #fff;
          background-color: $tab-active-color;
        }
        p > strong, p > small{
          color: $tab-active-color;
        }
      }
      &.active{
        background-color: $tab-active-color;
        .step-num{
          color: $tab-active-color;
          background-color: #fff;
        }
        p {
          strong, small{
            color: #fff;
          }
        }
      }
    }
  }
  .tab-content{
    .panel-body{
      .form-group{
        display: flex;
        align-items: center;
        > label{
          margin-bottom: 0;
          margin-right: 1em;
          color: $text-light;
          font-weight: initial;
        }
        .form-control{
          height: 32px;
          border-radius: 50px;
        }
        .btn-update{
          color: #fd8025;
        }
        .btn-save{
          color: #3ac27e;
        }
        .btn-cancel{
          color: #a0a0a0;
        }
      }
    }
  }
  .base-info-btn-row{
    padding: 15px;
    .btn{
      margin-left: 6em;
      width: $input-width;
    }
  }
  .panel-dev-setting{
    label{
      width: 9em;
    }
  }
  .setting-btn-row{
    padding: 15px;
    .btn{
      width: $input-width;
    }
  }
  .main-submit-success{
    padding-top: 100px;
    text-align: center;
    .icon-circle-right{
      font-size: 84px;
      color: #53c41a;
    }
    strong{
      /*margin-top: 20px;*/
      margin-bottom: 20px;
      display: block;
      font-size: 24px;
      color: $text-dark;
    }
    p{
      margin-bottom: 40px;
    }
    .btn + .btn{
      margin-left: 30px;
    }
  }
</style>