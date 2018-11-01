
const vh = require('../../utils/vanilla-helper');
const tinysort = require('tinysort');

function init() {
    // x.charAt(0)
    // console.log('testing kiAZ file is loaded');

    const azWrapper = document.querySelector('.js-ki-az-wrapper');
    // const azWrapper = document.querySelectorAll('.js-ki-az-wrapper');

    // for(var i = 0; i < azWrapper.length; i++){
    //     const azWrapperInstance = azWrapper[i];
    //     console.log(azWrapperInstance);

    // }

    const initUl = azWrapper.querySelector('ul');
    const initLi = initUl.querySelectorAll('li');
    
    
    // bootstrap class the UL
    vh.addClass(initUl, 'list-unstyled list-group');
    // add id for the filter function to hook into
    var uniqueId = azWrapper.dataset.unique;
    initUl.id = uniqueId;

    // bootstrap class the LIs
    _.forEach(initLi, (li) => vh.addClass(li, 'list-group-item'));

    // sort the items in the DOM first
    var toSort = initLi;
    tinysort(toSort);
    
    // now get the input and listen on it. Note that the class here just outputs
    // e.g. '.unique217336 input'. uniqueXXXXXX is on the wrapper
    const inputElement = document.querySelector(`.unique${uniqueId} input`);
    console.log(inputElement)

    // console.log(inputElement.value);
    inputElement.addEventListener('keyup',function(){
        filterText(inputElement);
    });


// SIMPLY ADD A LETTER BEFORE EACH GROUP AND SCROLL TO IT


    function filterText(input) { // input could be called anything
        // console.log(input);
        var filter, ul, li, a, i;
        // input = document.getElementById("kiAzInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById(uniqueId);
        console.log(uniqueId)
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

        //  MOVE THIS TO EXTERNAL SCRIPT
        // perhaps wrap the above with a span around the content type
        // and then pick up the input and add an event listener e.g.
//         <input id="input">
//          <script>
//              var input = document.getElementById('input');
//              input.addEventListener('keyup',function(){alert(input.value);});
//          <\/script>

    
}

module.exports = {
    init: init,
};