var nowVersion = "v1.2.0";
var surl = "https://www.tsginkgo.cn/tools-kqy/sss/update/version/latest.json";

function version_check() {
    layer.open({
        type: 1, // page 层类型
        area: ['500px', '300px'],
        title: '检查更新',
        shade: 0.6, // 遮罩透明度
        shadeClose: true, // 点击遮罩区域，关闭弹层
        maxmin: true, // 允许全屏最小化
        anim: 0, // 0-6 的动画形式，-1 不开启
        content: '<div style="padding: 32px;">当前版本：v1.2.0 24w26a<br>请查看下列json文件中的"offline-gui"板块检查最新版本与当前版本是否一致</div><iframe width="100%" src="https://www.tsginkgo.cn/tools-kqy/sss/update/version/latest.json">请访问<a href="https://www.tsginkgo.cn/tools-kqy/sss/update/version/latest.json" target="_blank">https://www.tsginkgo.cn/tools-kqy/sss/update/version/latest.json</a>查看最新版本情况</iframe'
      });
}