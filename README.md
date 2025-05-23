# Кулинариум (Culinarium)

## 🌐 Ссылка на проект

Проект размещён на Vercel:  
👉 [Открыть сайт](https://culinarium-eta.vercel.app/)

---

Это онлайн-сервис, где пользователи смогут публиковать рецепты, подписываться на публикации других пользователей, добавлять понравившиеся рецепты в список «Избранное», а перед походом в магазин скачивать сводный список продуктов, необходимых для приготовления одного или нескольких выбранных блюд.

## 📌 Оглавление

- [Функционал](#-функционал)
- [Технологии](#-технологии)
- [Установка](#-установка)
- [Структура проекта](#-структура-проекта)
- [API](#-api)
- [Дорожная карта](#-дорожная-карта)
- [Лицензия](#-лицензия)

## 🌟 Функционал

## 🔧 Функциональность проекта

Проект доступен по IP-адресу или доменному имени и реализует полноценный пользовательский интерфейс с разграничением прав доступа.

---

### 👥 Пользовательские роли

Все страницы и действия доступны пользователям в соответствии с их правами (авторизованным или неавторизованным).

---

### 🗂 Общие возможности

- 📌 **Сортировка рецептов**: на всех страницах рецепты отсортированы по дате публикации (новые — выше).
- 🏷 **Фильтрация по тегам**: работает на всех страницах, включая «Избранное» и рецепты одного автора.
- 📄 **Пагинация**: реализована на всех страницах, включая фильтрацию по тегам.
- 🧪 **Демо-данные**: предзагружены тестовые пользователи и рецепты.

---

### 🔐 Для авторизованных пользователей

- ✅ Доступ к:
  - Главной странице
  - Странице любого пользователя
  - Странице отдельного рецепта
  - Странице «Мои подписки»
  - Странице «Избранное»
  - Странице «Список покупок»
  - Странице создания рецепта

- 🤝 **Подписки**:
  - Подписка/отписка на автора на его странице и со страницы рецепта
  - Рецепты подписанных авторов отображаются в разделе «Мои подписки»

- ❤️ **Избранное**:
  - Добавление/удаление рецептов в/из «Избранного» как со страницы рецепта, так и из общего списка

- 🛒 **Список покупок**:
  - Добавление/удаление рецептов в/из списка покупок
  - Выгрузка списка покупок в `.txt` или `.pdf`
  - Объединение одинаковых ингредиентов и корректный подсчёт общего количества

- ✍️ **Работа с рецептами**:
  - Создание рецепта
  - Редактирование своего рецепта
  - Удаление своего рецепта

- 🔑 **Настройки аккаунта**:
  - Изменение пароля
  - Выход из системы (разлогин)

---

### 👤 Для неавторизованных пользователей

- 📄 Доступ к:
  - Главной странице
  - Страницам рецептов
  - Страницам пользователей

- 🔐 Доступны формы:
  - Авторизации
  - Восстановления пароля
  - Регистрации

---

### ✅ Итого

Проект охватывает все ключевые функции современной платформы публикации рецептов: от взаимодействия между пользователями до персонализированных списков покупок. Удобен как для чтения рецептов, так и для ведения собственного кулинарного блога.


## 💻 Технологии

**Frontend:**
- Чистый HTML5 (семантическая верстка)
- CSS3 (Flexbox/Grid, CSS-переменные)
- Vanilla JavaScript (ES6+)
- Web Storage API (localStorage)

**Методологии:**
- Компонентный подход
- Event-Driven Architecture
- Mobile-First дизайн

## 🛠 Установка

1. Клонировать репозиторий:
```bash
git clone https://github.com/username/culinarium.git
cd culinarium