import {
  Button,
  Input,
  Message,
  MessageBox,
  Notification,
  Loading,
} from 'element-ui';

export const ElementUI = {
  install: function (Vue) {
    // 配置默认设置
    Vue.prototype.$ELEMENT = { zIndex: 666 };

    // 组件的注册
    Vue.use(Button);
    Vue.use(Input);

    // Loading 还可以以服务的方式调用。引入 Loading 服务：
    // https://element.eleme.io/#/zh-CN/component/loading
    Vue.use(Loading.directive);

    // 部分功能组件直接挂载到Vue原型上 方便后续在组件实例中直接调用
    Vue.prototype.$loading = Loading.service;
    Vue.prototype.$message = Message;
    Vue.prototype.$msgBox = MessageBox;
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$prompt = MessageBox.prompt;
    Vue.prototype.$notify = Notification;

    // 服务方式调用loading模块, 在模板实例中调用:
    // VM.$loading({
    //   fullscreen: true
    // });

    // 更多内容挂载...
    // Vue.prototype.$author = 'rexhanggu';
  }
}
