document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('resetPasswordForm');
    const emailError = document.getElementById('emailError');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        emailError.textContent = '';
        
        const email = document.getElementById('id_email').value;
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Проверяем существование пользователя
        const user = users.find(u => u.email === email);
        
        if (user) {
            // Сохраняем email для сброса пароля
            localStorage.setItem('resetPasswordEmail', email);
            // Перенаправляем на страницу изменения пароля
            window.location.href = 'changePassword.html?reset=true';
        } else {
            emailError.textContent = 'Пользователь с таким email не найден';
        }
    });
});