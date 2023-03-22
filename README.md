# Интернет-магазин

### Задание

**Подготовить часть интернет-магазина с использованием React и TypeScript**

[*Макет Фигма*](https://www.figma.com/file/UyRTxOVJvoMyjlcr70eH66)

**1. Подготовить JSON набор данных,**
чтобы удобно было проверять работу (17+ товаров должно быть в стартовом наборе)
  - Url картинки
  - название
  - тип размера (вес/объем)
  - размер
  - штрихкод
  - производитель
  - Бренд
  - описание
  - цена

**2. Подготовить страницу Каталога товаров (список товаров)**
   1. Здесь и в других местах верстку обеспечиваем в том числе адаптивную
   2. Шапка и подвал также должны быть сверстаны (но функциональный там только блок с корзиной)
   3. Сортировку делаем (4 варианта - по цене и по названию, по убыванию и возрастанию)
   4. Переключение способа карточек (рядом с сортировкой не делаем - можно даже не верстать)
   5. Фильтр уход за телом/ Уход за руками - делаем.
      1. Чтобы нормально тестировать, в карточке товара добавляем поле "тип ухода". 
      2. Один товар может подходить к нескольким типам (например, одновременно уход за руками и уход за лицом)
   6. В фильтре слева достаточно оставить только
     - фильтр по цене
     - по производителю (поиск, чекбоксы, показать все - поле поиск здесь фильтрует самих производителей)
     - Уход за телом (здесь пункты продублировать те же, что и в перечне над каталогом товаров (Уход за телом, уход за руками, уход за ногами...) - нажали сверху, выбралось и слева и наоборот.
     - остальное из левого столбца не надо
   7. Кнопки постраничного перехода
   8. Нажав на название можно перейти на карточку товара
  
**3. Страница карточки товара**
   - хлебные крошки пишем упрощенные (Главная - Каталог - Название товара)
   - картинка
   - блок справа (данные подставляются из JSON/ Local Stroage). Если данных не (Например, "в наличии"), то делаем просто статической версткой
     - поделиться и прайс-лист не активны
     - в корзину и +/- активно .
  - Похожие товары НЕ ДЕЛАЕМ
  - Недавно просмотренные НЕ ДЕЛАЕМ
  
**4. Корзина**
   1. Блок в шапке обновляется при действиях пользователя
   2. На странице корзины кнопки активны. +/-, удалить из корзины
   
**5.** В корзине после кнопки "оформить заказ" сразу отображаем "Спасибо за заказ" и очищаем корзину.

**6.** Предусмотреть микроадминку по управлению списком товаров.
   - редактировать, добавлять, удалять товары. Сохранять это в localStorage. Если список пуст (админ все удалил или с самого старта), то наполнение из json(см п 1)
   - отдельная возможность работать со списком типов ухода. При добавлении/редактировании тип ухода из выпадающего списка. Типов ухода должна быть возможность задать несколько. Какой именно способ ля этого выбрать - на выше усмотрение.
   
**7. Загрузить на githubPages**

**8.** Каждый товар должен открываться по своему url (можно использовать штрихкод в адресации, например)

#### ДОПОЛНИТЕЛЬНО

Выделение выбранного в фильтрах, изменения после нажатия на кнопку "в корзину" и прочие эффекты, если в макете не прорисовано делайте просто на свое усмотрение.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
