#### Ссылка для примера: [tuychin.github.io](https://tuychin.github.io/)

#### Стэк

- React / Redux / Router

#### Получение данных

- XMLHttpRequest + Promise

## Дополнительный функционал

- Отображение объявлений по частям. Кнопка "Больше объявлений"
- Сохранение значений сортировки после перехода по страницам, и перезагрузки
- Поиск объявлений по заголовкам
- Избранные объявления выделяются в любой категории
- При добавлении или удалении избранного объявления, появляется оповещение 

## Тестовое задание

#### Разработать упрощенную версию сайта Авито
На странице показывается список объявлений, загружаемых по API. Ссылки доступны по адресу https://avito.dump.academy.

#### Каждое объявление отображается в виде блока, который содержит:
- заголовок объявления;
- главное фото (первое в списке) + количество дополнительных;
- цену (каждые 3 разряда разделять пробелом);
- дату размещения объявления в формате `10 октября 10:37`;
- имя продавца и его рейтинг.

#### Фильтровать объявления можно:
- по категории (недвижимость — `immovable`, фотоаппараты — `cameras`, автомобили — `auto`, ноутбуки — `laptops`);
- по цене (возможность ввести цену «с» и «до»);
- по избранным объявлениям.

#### Сортировать объявления можно:
- по популярности - как в ответе сервера;
- по возрастанию цены (от меньшей к большей);
- по дате размещения объявлений (от новых к старым).

#### Избранное
Любое объявление можно добавить в избранное. Список избранных объявлений хранятся в браузере и не синхронизируются с сервером. Способ хранения произвольный, но реализован таким образом, чтобы при перезагрузке страницы данные не терялись.

#### Дизайн и технологии
Дизайн, framework и библиотеки могут быть выбраны на ваше усмотрение. Финальную версию разработанного приложения выложить на github.com.
