# Документация компонента ChipsList

Компонент  `ChipsList`  является компонентом React, который отображает список чипсов. Он позволяет показывать определенное количество чипсов изначально и переключать видимость остальных чипсов.

## Props

Компонент  `ChipsList`  принимает следующие параметры (props):

-  `className`  (необязательно): Строка, представляющая дополнительные CSS-классы, которые будут применены к компоненту.
-  `chipsItems` : Массив объектов типа  `ChipsType` , представляющий чипсы, которые будут отображены.

## Использование
```jsx
import { ChipsList } from 'путь/к/ChipsList';

const chipsItems = [
{ name: 'Чип 1' },
{ name: 'Чип 2' },
{ name: 'Чип 3' },
// Добавьте больше чипсов при необходимости
];

const MyComponent = () => {
    return (
        <ChipsList chipsItems={chipsItems} />
    );
};
```
## Как это работает

- Компонент  `ChipsList`  вычисляет ширину своего родительского элемента с помощью  `ref`  и сохраняет ее в переменной  `elementWidth` .
- Он определяет количество видимых чипсов на основе вычисленной ширины по функции
```js
const sliceVisible = Math.floor(((elementWidth || 0) - 104) / 104);
```
* 104 - примерная ширина одного чипса с паддингами
* вычитание 104 из начальной длины из-за наличия кнопки для открытия дропдауна в этом же ряду дочерних компонентов 
- Компонент отображает видимые чипсы и кнопку для переключения видимости скрытых чипсов.
- При нажатии на кнопку изменяется состояние  `isVisible` , которое управляет видимостью скрытых чипсов.
- Компонент перерисовывается при изменении значений  `chipsItems`  или  `sliceVisible` , обновляя видимые и скрытые чипсы соответственно.

## Зависимости

- React: Компонент использует React для создания пользовательского интерфейса.
- treeDots: SVG-изображение, представляющее кнопку для переключения видимости скрытых чипсов.
- classNames: Вспомогательная функция для условного объединения CSS-классов.
- Chips: Пользовательский компонент  `Chips` , используемый для отображения отдельных чипсов.

## Пример

Вот пример использования компонента  `ChipsList` :
```jsx
import { ChipsList } from 'путь/к/ChipsList';

const chipsItems = [
{ name: 'Чип 1' },
{ name: 'Чип 2' },
{ name: 'Чип 3' },
// Добавьте больше чипсов при необходимости
];

const MyComponent = () => {
    return (
        <ChipsList chipsItems={chipsItems} className="my-chips-list" />
    );
};
```
В этом примере компонент  `ChipsList`  отображается с массивом  `chipsItems`  и пользовательским CSS-классом "my-chips-list".
