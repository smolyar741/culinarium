document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Инициализация хранилища пользователей, если его нет
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify([]));
    }

    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Сброс сообщений об ошибках
        usernameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';

        // Получение данных формы
        const firstName = document.getElementById('id_first_name').value;
        const lastName = document.getElementById('id_last_name').value;
        const username = document.getElementById('id_username').value;
        const email = document.getElementById('id_email').value;
        const password = document.getElementById('id_password').value;

        // Валидация пароля
        if (password.length < 6) {
            passwordError.textContent = 'Пароль должен содержать не менее 6 символов';
            return;
        }

        // Получение списка пользователей
        const users = JSON.parse(localStorage.getItem('users'));

        // Проверка на существующее имя пользователя
        const usernameExists = users.some(user => user.username === username);
        if (usernameExists) {
            usernameError.textContent = 'Это имя пользователя уже занято';
            return;
        }

        // Проверка на существующий email
        const emailExists = users.some(user => user.email === email);
        if (emailExists) {
            emailError.textContent = 'Этот email уже зарегистрирован';
            return;
        }

        // Создание нового пользователя
        const newUser = {
            first_name: firstName,
            last_name: lastName,
            username: username,
            email: email,
            password: password // В реальном приложении пароль должен быть хеширован
        };

        // Добавление пользователя в хранилище
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        // Автоматический вход после регистрации
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        
        // Перенаправление на авторизованную страницу
        window.location.href = 'indexAuth.html';
    });
});