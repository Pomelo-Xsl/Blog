// 选择所有具有 'panel' 类的元素(获取五张图片)
const panels = document.querySelectorAll('.panel');

// 为每个面板添加点击事件监听器(遍历（点击）->移除->添加)
panels.forEach(panel => {
    // 点击面板时，移除所有面板的活动状态并将当前面板设置为活动
    panel.addEventListener('click', () => {
        removeActiveClass();
        panel.classList.add('active')
    });
});

// 移除所有面板的活动状态
function removeActiveClass() {
    // 遍历所有面板并移除其活动类
    panels.forEach(panel => {
        panel.classList.remove('active')
    });
}
