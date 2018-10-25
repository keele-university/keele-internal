# accordion notes and future dev

add data-parent="#uniq-accordion-" to make the accordions only open one at a time

to show or hide all look at a JavaScript loop

```js
var test = document.querySelectorAll('.collapse');

_.forEach(test, (t) => {
    t.classList.add('show');

})
```