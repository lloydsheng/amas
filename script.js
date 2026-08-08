// 测试 files 预览静态资源引用：本文件由 preview-test.html 通过相对路径引用
// 页面加载完成后动态写入内容，验证 JS 是否执行
document.addEventListener('DOMContentLoaded', function () {
  var output = document.getElementById('js-output');
  if (output) {
    output.textContent = 'JS loaded ok ✓ — script.js 已成功执行！';
  }
});
