# MyLibrary

# Документация 

## 1. $
#### `$(selector)` - возвращает объект со всеми найденными по переданному селектору элементы, например:
```javascript
$('div');
{  
  0: <div>  
  1: <div class="class">  
  length: 2  
}
``` 
#### Так же в функцию можно передать html элемент `$(element)` для применения доступных методов на этом элементе
### 1.1 Свойства 
#### `$(selector).length` - количество найденных элементов

### 1.2 Методы
#### 1.2.1 Работа с отображением элемента (свойство `display`)
#### • `$(selector).hide()` - скрывает элементы со страницы
#### • `$(selector).show()` - показывает элементы на странице. Принимает необязательный агрумент `display`(пример: `$(selector).show('flex')`), определающий тип отображения элементов, по умолчанию `block`. Так же, если элемент уже показан на странице, то метод `$(selector).show()` можно применить для того, чтобы поменять тип его отображения
#### • `$(selector).toggleDisplay()` - переключает отображение элемента (если элемент показан на странице - скрывает его, если элемент скрыт - показывает). Принимает необязательный агрумент `display`(пример: `$(selector).toggleDisplay('flex')`), определающий тип отображения элементов, по умолчанию подставляется `display: block`
#### 1.2.2 Работа с классами элемента 
#### • `$(selector).addClass(className)` - добавляет элементу все переданные классы
#### • `$(selector).removeClass(className)` - удаляет у элемента все переданные классы
#### • `$(selector).toggleClass(className)` - принимает любое количество классов. добавляет элементу те классы, которых у него не было и удаляет те, которые были
#### 1.2.3 Работа с событиями 
#### • `$(selector).on(eventName, callback)` - назначает на элемент обработчик события, тип события передается первым аргументом `eventName`, коллбэк передается вторым аругментом `callback`, третьим необязательным аргументом передается объект настроек события (настройки те же, что и у метода `addEventListener`)
#### • `$(selector).off(eventName, callback)` - удаляет обработчик события с элемента. ВАЖНО!! Если при назначении обработчика передавалась анонимная коллбэк функция, то такой обработчик нельзя будет удалить, используйте именнованые функции при назначении обработчика, если в будущем хотите удалять его 
#### • `$(selector).click()` - если в функцию не передавать ничего, то вызывает срабатывание события клика мышкой, если передать коллбэк функцию `$(selector).click(callback)`, то в таком случае назначает обработчик события клика. Так же принимает второй необязательный аргумент с объектом настроек обработчика `$(selector).click(callback, options)` (настройки те же, что и у метода `addEventListener`)
#### 1.2.4 Работа с элементами 
#### • `$(selector).html()` - если ничего не передавать, то возвращает внутернний html код элемента. Если передать аргумент `content` (`$(selector).html(content)`), то перезаписывает внутренний html элемента на `content`
#### • `$(selector).eq(index)` - возвращает объект, с единственным элементом, который находился в объекте `$(selector)` под индексом `index`
#### • `$(selector).find(selector)` - возвращает объект с элементами, найденные по селектору `selector` внутри всех элементов объекта `$(selector)`
