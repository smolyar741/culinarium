document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    
    // Проверяем, есть ли сохраненные пользователи в localStorage
    if (!localStorage.getItem('users')) {
        // Создаем тестового пользователя, если нет зарегистрированных
        const testUser = {
            username: 'testuser',
            password: 'Test1234' // В реальном приложении пароль должен быть хеширован
        };
        localStorage.setItem('users', JSON.stringify([testUser]));
    }
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('id_username').value;
        const password = document.getElementById('id_password').value;
        
        // Получаем список пользователей из localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Ищем пользователя с введенными данными
        const user = users.find(u => u.username === username && u.password === password);
        
        if (user) {
            // Успешный вход
            errorMessage.textContent = '';
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = 'indexAuth.html';
        } else {
            // Неверные данные
            errorMessage.textContent = 'Имя пользователя и пароль не совпадают. Введите правильные данные.';
        }
    });
});