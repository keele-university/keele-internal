
const vh = require('../../utils/vanilla-helper');
const tinysort = require('tinysort');

function init() {
    // x.charAt(0)

    // const azWrapper = document.querySelector('.js-ki-az-staff-wrapper');
    const azWrapper = document.querySelectorAll('.js-ki-az-staff-wrapper');

    _.forEach(azWrapper, azWrapperInstance => {
        console.log(azWrapperInstance);
        // const azWrapperInstance = azWrapper[i];
        // console.log(azWrapperInstance);

        const initUl = azWrapperInstance.querySelector('ul');
        const initLi = initUl.querySelectorAll('li');
        
        
        // bootstrap class the UL
        vh.addClass(initUl, 'list-unstyled list-group');
        // add id for the filter function to hook into
        var uniqueId = azWrapperInstance.dataset.unique;
        initUl.id = uniqueId;

        // bootstrap class the LIs, group items and add flex for full width click zones
        _.forEach(initLi, (li) => {
            vh.addClass(li, 'list-group-item');
            console.log(li);
            var linkToStaff = li.querySelector('a');
            var linkToStaffHref = li.querySelector('a').href;
            linkToStaff.remove();
            var content = li.innerHTML;
            li.innerHTML = `<a href="${linkToStaffHref}">${content}</a>`;

        });


        // sort the items in the DOM first
        var toSort = initLi;
        // tinysort(toSort);
        tinysort(toSort, 'span.ki-staff-az-lastname');
        
        // var inputsList = [];
        // now get the input and listen on it. Note that the class here just outputs
        // e.g. '.unique217336 input'. uniqueXXXXXX is on the wrapper
        let inputElement = document.querySelector(`.unique${uniqueId} input`);
        // console.log(inputElement)
        // console.log(inputElement.value);

        // console.log(inputElement.value);
        inputElement.addEventListener('keyup',function(){
            filterText(inputElement, uniqueId);
        });
    })
    // for(var i = 0; i < azWrapper.length; i++){




//  } // end FOR loop

// SIMPLY ADD A LETTER BEFORE EACH GROUP AND SCROLL TO IT

    function filterText(input, uniqueId) { // input could be called anything
        // console.log(input.value);
        console.log(uniqueId);
        var filter, ul, li, a, i;
        // input = document.getElementById("kiAzInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById(uniqueId);
        // console.log(uniqueId)
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

    

}

module.exports = {
    init: init,
};