const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})
document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // 阻止表单默认提交行为
            alert('登录失败，请检查你的用户名和密码'); // 弹出警告框
        });