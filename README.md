# zhpay-web

> 支付商户前端代码

## 开发环境
* [NodeJS](`https://nodejs.org/en/`), `v8.9 `及以上版本（推荐`8.11.0+`）

## 项目介绍
1. 通过[vue cli 3](https://cli.vuejs.org/zh/guide/installation.html)工具创建基本架构。
如果你已经全局安装了旧版本的` vue-cli `(1.x 或 2.x)，你需要先通过 `npm uninstall vue-cli -g` 或 `yarn global remove vue-cli` 卸载它。
可使用如下命令查看`vue cli`版本号
    ```
    vue --version
    ```
2. 使用了`bootstrap v3`的sass源码作为项目样式库，可修改源码定制我们项目的基础全局样式
    ``` css
    // button新增outline 样式（目前只有btn-outline-success）
    // 新增btn-round样式：设置圆角按钮
    <button class="btn btn-outline-success btn-round">圆角绿色轮廓按钮</button>
    ```
3. - 单色图标采用阿里巴巴矢量库字体图标
   - 彩色图标使用图片精灵方案。用`webpack`插件`webpack-spritesmith`管理彩色图标。

    图标命名方式：`icon-xxx`
    
    图标存储路径：`src/assets/img/icons/`
    
    图标使用方式：
    ``` html
    <i class="iconsprite icon-xxx"></i>
    ```
     
## 项目搭建
```
# 安装依赖包
npm install

# 开发时，编译和热加载命令 (已配置默认端口号9090 http://localhost:9090/ )
npm run serve

# 生产环境构建
npm run build

# Run your tests
npm run test

# Lints and fixes files
npm run lint
```

## 项目依赖插件

### dev工具
- [webpack-spritesmith](https://github.com/mixtur/webpack-spritesmith#readme)<sup>webpack生成图片精灵</sup>

### 插件
- [vue-layer](https://github.com/zuoyanart/vue-layer)<sup>弹层组件</sup>
- [datepicker](https://github.com/mengxiong10/vue2-datepicker)<sup>日历</sup>
- [moment](https://github.com/moment/moment/)<sup>格式化时间</sup>
- [VeeValidate](https://github.com/baianat/vee-validate)<sup>表单验证</sup>
- [Vue MultiSelect](https://vue-multiselect.js.org/)<sup>选项多选</sup>
