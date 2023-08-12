# Документация компонента ChipsListVar2

Компонент  `ChipsListVar2`  является React компонентом, который отображает список чипсов. Он позволяет показывать определенное количество чипсов изначально и переключать видимость остальных чипсов.

## Props

Компонент  `ChipsListVar2`  принимает следующие параметры (props):

-  `className`  (необязательно): Строка, представляющая дополнительные CSS-классы, которые будут применены к компоненту.
-  `chipses` : Массив объектов типа  `ChipsType` , представляющий чипсы, которые будут отображены.

## Использование
```jsx
import { ChipsListVar2 } from 'путь/к/ChipsListVar2';

const chipses = [
{ name: 'Чип 1' },
{ name: 'Чип 2' },
{ name: 'Чип 3' },
// Добавьте больше чипсов при необходимости
];

const MyComponent = () => {
    return (
        <ChipsListVar2 chipses={chipses} />
    );
};
```
## Как это работает

- Компонент  `ChipsListVar2`  использует хук  `useLayoutEffect`  для вычисления ширины родительского элемента и обновления списка видимых и скрытых чипсов на основе этой ширины.
- При изменении размеров окна браузера, компонент пересчитывает ширину родительского элемента и обновляет список видимых и скрытых чипсов.
- Компонент отображает видимые чипсы и кнопку для переключения видимости скрытых чипсов.
- При нажатии на кнопку, меняется состояние  `isVisible` , которое управляет видимостью скрытых чипсов.
- Компонент перерисовывается при изменении значений  `chipses` ,  `firstInvisibleChips` ,  `listWidth`  и  `childrenWidth` , обновляя видимые и скрытые чипсы соответственно.

## Зависимости

- React: Компонент использует React для создания пользовательского интерфейса.
- classNames: Вспомогательная функция для условного объединения CSS-классов.
- ChipsType: Тип данных, представляющий чипсы.
- ChipsVar2: Пользовательский компонент  `ChipsVar2` , используемый для отображения отдельных чипсов.
- treeDots: SVG-изображение, представляющее кнопку для переключения видимости скрытых чипсов.

## Пример

Вот пример использования компонента  `ChipsListVar2` :
```jsx
import { ChipsListVar2 } from 'путь/к/ChipsListVar2';

const chipses = [
{ name: 'Чип 1' },
{ name: 'Чип 2' },
{ name: 'Чип 3' },
// Добавьте больше чипсов при необходимости
];

const MyComponent = () => {
    return (
        <ChipsListVar2 chipses={chipses} className="my-chips-list" />
    );
};
```
В этом примере компонент  `ChipsListVar2`  отображается с массивом  `chipses`  и пользовательским CSS-классом "my-chips-list".