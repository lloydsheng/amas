// preview-test 额外脚本：由 index.html 通过相对路径引用
// 验证外部 JS 文件能加载执行
document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('js-file');
  if (el) {
    el.textContent = 'JS_FILE_OK';
  }
});
