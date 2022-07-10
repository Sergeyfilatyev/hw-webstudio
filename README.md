1) Создаем скрипт filter.js


const filterBox = document.querySelectorAll('.projects__item');

document.querySelector('.filter-menu').addEventListener('click', event => {
  if (event.target.tagName !== 'BUTTON') return false;
  let filterClass = event.target.dataset['f'];

  filterBox.forEach(elem => {
    elem.classList.remove('hide');
    if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
      elem.classList.add('hide');
    }
  });
});

Комментарии:
.projects__item - это имя класса li , карточка портфолио.
.filter-menu - это имя класса ul, список  кнопок.
 hide - это дополнительный класс , который вешается на .projects__item при отрабатывании скрипта.

2) Прописываем стили классу hide
.hide {
  display: none;
}


3) В фильтр меню прописываем data-f:

<ul class="filter-menu">
            <li class="filter-menu__item">
              <button data-f="all" class="filter-menu__btn" type="button">Все</button>
            </li>
            <li class="filter-menu__item">
              <button data-f="website" class="filter-menu__btn" type="button">Веб-сайты</button>
            </li>
            <li class="filter-menu__item">
              <button data-f="application" class="filter-menu__btn" type="button">
                Приложения
              </button>
            </li>
            <li class="filter-menu__item">
              <button data-f="disain" class="filter-menu__btn" type="button">Дизайн</button>
            </li>
            <li class="filter-menu__item">
              <button data-f="marketing" class="filter-menu__btn" type="button">Маркетинг</button>
            </li>
          </ul>


4) На каждую карточку вешаем дополнительный класс по названию data-f - website, disain, application, marketing:

 <ul class="projects">
            <li class="projects__item website">
             Карточка вебсайт
            </li>
            <li class="projects__item disain">
             Карточка дизайн
            </li>
            <li class="projects__item application">
              Карточка приложение
            </li>
            <li class="projects__item marketing">
              Карточка маркетинг
            </li>
            <li class="projects__item application">
              Карточка приложение
            </li>
            <li class="projects__item website">
             Карточка вебсайт
            </li>
            <li class="projects__item disain">
             Карточка дизайн
            </li>
            <li class="projects__item marketing">
              Карточка маркетинг
            </li>
            <li class="projects__item application">
              Карточка приложение
            </li>

5) Подключаем скрипт на страницу портфолио и все должно работать.

<script src="./js/filter.js"></script>


           
