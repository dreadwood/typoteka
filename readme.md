# Проект «Типотека» 

**Опубликованная версия доступна [тут](http://82.148.29.131/)**

<details>
<summary>Данные <a href="#roles">автора</a> для демо</summary>

```
test@test.ru — логин
test@test.ru — пароль
```
</details>


## О проекте

Типотека — приложение для публикации заметок. Это не только создание контента, любой желающий читатель может зарегистрироваться и оставить комментарии. Создавайте заметки, общайтесь с читателями, модерируйте контент вместе с «Типотека».

![Главный экран](doc/screenshot-typoteka.jpg)


## Основные функции

- Просмотр публикаций
- Добавление и управление публикациями
- Обсуждение публикаций
- Поиск публикаций по наименованию

### <span id="roles">Роли пользователей</span>

- **автор** (первый зарегистрировавшийся пользователь после заполнения базы данных) — добавление, удаление, редактирование статей и комментариев
- **читатели** (авторизованные пользователи) - просмотр статей, добавления комментариев
- **гости** (неавторизованные пользователи) — просмотр статей


## Используемые технологии

- [Node.js](https://nodejs.org/en/) и [express.js](https://expressjs.com/) для создания REST API сервиса и SSR
- [PostgreSQL](https://www.postgresql.org/) для хранения данных пользователей и сеанса
- [Sequelize](https://sequelize.org/) для работы с моделями
- [eslint](https://eslint.org/), [jest](https://jestjs.io/ru/) для линтинга и тестирования, [husky](https://www.npmjs.com/package/husky) запуска тестов перед отправкой кода на github
- [pug.js](https://pugjs.org/) для шаблонизации
- [socket.io](https://socket.io/) для работы с WebSocket
- [pino](https://www.npmjs.com/package/pino) для создания логов
- [multer](https://www.npmjs.com/package/multer) для загрузки и обработки файлов
- [joi](https://www.npmjs.com/package/joi) — для валидации данных
- [csurf](https://www.npmjs.com/package/csurf) — защита CSRF, [bcrypt](https://www.npmjs.com/package/bcrypt) — генерация хеш-паролей

### Deploy

Демо размещено на VDS от [Selectel](https://selectel.ru/) на Ubuntu 22 c использованием [Nginx](https://nginx.org/) и менеджер процессов [PM2](https://pm2.keymetrics.io/)


## Разработка

Основные команды:

- `npm start` — запуск REST и SSR сервисов
- `npm test` — запуск линтера и тестов (eslint и jest)
- `npm run start-servers::debug` — запуск REST и SSR сервисов в режиме разработки
- `npm run cli` — консольное приложение для генерации моковых данных в виде json или заполнение в базу данных (PostgreSQL)
- `npm run css` — генерация css (используется sass) для SSR


## Файлы

- `environments.md` — описание переменных окружения


## Каталоги:

- `src/service` — REST и CLI приложения
- `src/express` — SSR приложение
- `data` — данные для создания моковых данных
- `markup` — первоначальный макет (html, css, js, fonts)
