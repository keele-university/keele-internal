# accordion notes and future dev

add data-parent="#uniq-accordion-" to make the accordions only open one at a time

to show or hide all look at a JavaScript loop

```js
var test = document.querySelectorAll('.collapse');

_.forEach(test, (t) => {
    t.classList.add('show');

})
```

Read the hash in the url and if it matches a accordion then add then close all tabs (remove show class) and then add show class only to the matching accordion.

## A default card before being chopped up by t4 is as so:

```html
                    <div class="card">
                        <div class="card-header bg-primary" id="uniq-headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-link btn-block text-white d-flex align-items-center" type="button" data-toggle="collapse" data-target="#uniq-collapseOne" aria-expanded="true" aria-controls="uniq-collapseOne">
                            Collapsible Group Item #1  <i class="fas fa-angle-down ml-auto"></i>
                            </button>
                        </h5>
                        </div>

                        <div id="uniq-collapseOne" class="collapse show" aria-labelledby="uniq-headingOne">
                        <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                        </div>
                    </div>
```