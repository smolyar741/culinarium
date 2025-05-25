document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('changePasswordForm');
    const oldPasswordGroup = document.getElementById('oldPasswordGroup');
    const oldPasswordError = document.getElementById('oldPasswordError');
    const newPasswordError = document.getElementById('newPasswordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const logoutButton = document.getElementById('logoutButton');

    // Проверяем, это сброс пароля (из письма) или изменение из личного кабинета
    const urlParams = new URLSearchParams(window.location.search);
    const isReset = urlParams.get('reset') === 'true';

    // Если это сброс пароля, скрываем поле старого пароля
    if (isReset) {
        oldPasswordGroup.style.display = 'none';
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Очищаем ошибки
        oldPasswordError.textContent = '';
        newPasswordError.textContent = '';
        confirmPasswordError.textContent = '';
        
        const oldPassword = document.getElementById('id_old_password').value;
        const newPassword = document.getElementById('id_new_password').value;
        const confirmPassword = document.getElementById('id_confirm_password').value;
        
        // Валидация пароля
        if (newPassword.length < 8) {
            newPasswordError.textContent = 'Пароль должен содержать минимум 8 символов';
            return;
        }
        
        if (/^\d+$/.test(newPassword)) {
            newPasswordError.textContent = 'Пароль не может состоять только из цифр';
            return;
        }
        
        if (newPassword !== confirmPassword) {
            confirmPasswordError.textContent = 'Пароли не совпадают';
            return;
        }
        
        // Получаем пользователей из localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        let user;
        
        if (isReset) {
            // Для сброса пароля - находим по email
            const email = localStorage.getItem('resetPasswordEmail');
            user = users.find(u => u.email === email);
            
            if (!user) {
                newPasswordError.textContent = 'Ошибка сброса пароля. Попробуйте снова.';
                return;
            }
        } else {
            // Для изменения пароля - находим текущего пользователя
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (!currentUser) {
                window.location.href = 'authForm.html';
                return;
            }
            
            user = users.find(u => u.email === currentUser.email);
            
            // Проверяем старый пароль
            if (user.password !== oldPassword) {
                oldPasswordError.textContent = 'Неверный старый пароль';
                return;
            }
        }
        
        // Обновляем пароль
        user.password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
        
        // Обновляем текущего пользователя (если он авторизован)
        if (!isReset) {
            localStorage.setItem('currentUser', JSON.stringify(user));
        } else {
            // Очищаем временные данные для сброса
            localStorage.removeItem('resetPasswordEmail');
        }
        
        // Показываем сообщение об успехе и перенаправляем
        alert('Пароль успешно изменен!');
        window.location.href = isReset ? 'authForm.html' : 'indexAuth.html';
    });

    // Обработчик кнопки выхода
    if (logoutButton) {
        logoutButton.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('currentUser');
            window.location.href = 'indexNotAuth.html';
        });
    }
});