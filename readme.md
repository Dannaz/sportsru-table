##Тестовое задание для младшего разработчика пользовательских интерфейсов

###Использование
Подготовка проекта:
```
$ npm init
```
Сборка:
```
$ gulp
```
###Коментарии к решению задачи
Реализована сортировка с помощью сторонней  [библиотеки](http://www.kryogenix.org/code/browser/sorttable/).
Для корректного отображения макета сортировки ширина столбцов с информацией о количестве побед, поражений, игр в ничью, количестве пропущенных и забитых мячей, и общем количестве мячей была увеличина относительно макета на 20px и составляет 70px.

###Постановка задачи
Отобразить на веб-странице турнирную таблицу чемпионата на основе данных, содержащихся в [JSON-файле seriea.json](https://github.com/sportsru/table-task/blob/master/seriea.json). HTML-код таблицы должен формироваться динамически на стороне браузера при загрузке страницы. Внешний вид таблицы должен соответствовать [макету](https://github.com/sportsru/table-task/blob/master/table.psd).

Таблица должна корректно отображаться в двух последних версиях наиболее распространенных браузеров (Edge, Chrome, Firefox, Safari, iOS Safari).

Не допускается использование фреймворков (таких как Angular, React). Возможно использование DOM-библиотек типа jQuery без дополнительных плагинов. Также допускается использование шаблонизаторов (handlebars, ejs, jade и др.).

Таблица должна занимать всю ширину экрана. При этом все столбцы таблицы, кроме столбца с названием команды, должны иметь фиксированную ширину в соответствии с макетом. Минимальная ширина столбца с названием команды - 150 пикселей.

Таблица должна корректно отображаться на экранах с небольшой шириной. На таких экранах допускается не показывать колонки количества забитых и пропущенных голов, а также колонки количества выигрышей, ничьих и поражений, если таблица не умещается на экране по ширине.

Название команды должно быть оформлено в виде ссылки, ведущей на страницу этой команды (поле `tag_url` в JSON-файле).

Описание полей в JSON-файле:
JSON-файл содержит в себе объект, в котором по ключу teams хранится массив данных о командах турнира.
Каждый элемент этого массива является объектом, содержащим следующие поля:

* `name` - название команды (**Команда**)

* `flag_country` - название страны, которую представляет команда

* `tag_url` - URL страницы команды

* `matches` - количество сыгранных командой матчей в турнире (**М**)

* `win` - количество выигрышей (**В**)

* `draw` - количество ничьих (**Н**)

* `lose` - количество поражений (**П**)

* `score` - количество набранных очков (**О**)

* `goals` - количество забитых мячей (**Заб**)

* `conceded_goals` - количество пропущенных мячей (**Проп**)

* `place` - место команды в турнирной таблице 

* `color` - поле, показывающее, необходимо ли выделять цветом место команды в таблице. Может иметь значения `"1"` (зелёный), `"2"` (светло-зелёный), `"4"` (красный), пустая строка `""` (отсутствие выделения).


При наличии свободного времени кандидат может реализовать дополнительный функционал таблицы – сортировку строк таблицы по различным показателям: по месту в таблице, названию (в алфавитном порядке), количеству выигрышей, ничьих, поражений, забитых и пропущенных мячей, очков. Вид и реализация необходимого для осуществления сортировки пользовательского интерфейса остаётся на усмотрение кандидата.

Готовое задание должно быть [оформлено в виде репозитория на Github](https://guides.github.com/activities/forking/). Дополнительно можно разместить задание на хостинге, например, [Github Pages](https://pages.github.com/).
