# MyLibrary

## Документация 

### 1. $
##### `$(selector)` - возвращает объект со всеми найденными по переданному селектору элементы, например:
```javascript
$('div');
{  
  0: <div>  
  1: <div class="class">  
  length: 2  
}
``` 
#### 1.1 Свойства 
##### `$(selector).length` - количество найденных элементов

#### 1.2 Методы
##### 1.2.1 
##### `$(selector).hide()` - скрывает элементы со страницы
##### 1.2.2 
##### `$(selector).show()` - показывает элементы на странице. Принимает необязательный агрумент `display`(пример: `$(selector).show('flex')`), определающий тип отображения элементов, по умолчанию `block`
##### P.S. Так же, если элемент уже показан на странице, то метод `$(selector).show()` можно применить для того, чтобы поменять тип его отображения
##### 1.2.3 
##### `$(selector).toggleDisplay()` - переключает отображение элемента (если элемент показан на странице - скрывает его, если элемент скрыт - показывает). Принимает необязательный агрумент `display`(пример: `$(selector).toggleDisplay('flex')`), определающий тип отображения элементов, по умолчанию подставляется `display: block`
##### 1.2.4 
##### `$(selector).addClass(className)` - добавляет элементу все переданные классы
##### 1.2.5 
##### `$(selector).removeClass(className)` - удаляет у элемента все переданные классы
##### 1.2.6 
##### `$(selector).toggleClass(className)` - принимает любое количество классов. добавляет элементу те классы, которых у него не было и удаляет те, которые были
