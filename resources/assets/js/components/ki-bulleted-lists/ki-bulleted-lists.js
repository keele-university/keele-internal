const vh = require('../../utils/vanilla-helper');
const svg = '<svg viewBox="0 0 16 16" width="16" height="16" class="icon-arrow"><path d="M7.2 12.73l-1.41-1.41 3.29-3.29-3.29-3.29L7.2 3.32l4.71 4.71-4.71 4.7z"/></svg>';

function init() {

    //////////////////////    
    // col-3 MAIN quicklinks
    const quickLinks = document.querySelectorAll('.ki-utility-links ul');

    if(quickLinks){
        _.forEach(quickLinks, quickLink => {
            quickLink.classList.add('list-unstyled');
        }
    );
    }
    // end .col-3 MAIN quicklins

    //////////////////////
    // homepage developments columns- strategy, campus and twitter three col full width
    const developmentsUls = document.querySelectorAll('.js-ki-home-3-1 ul, .js-ki-home-3-2 ul');
    // const developmentsUlsLi = document.querySelectorAll('.js-ki-home-3-1 ul li, .js-ki-home-3-2 ul li');

    if(developmentsUls){
        _.forEach(developmentsUls, (oneUl) => {
            oneUl.classList.add('list-unstyled');

            // now get th lis and add classes
            const devLis = oneUl.querySelectorAll('li');
            if(devLis) {
                _.forEach(devLis, (devLi) => {
                    devLi.classList.add('mb-4');

                })
            }

        });
    }

    //////////////////////
    // add svg arrow to all links
    const lisAhrefs = document.querySelectorAll('.js-ki-home-3-1 ul li a, .js-ki-home-3-2 ul li a');

    // now loop through all links
    for (var i = 0; i < lisAhrefs.length; i++) {
        let el = lisAhrefs[i];
        const old_str = el.innerHTML;

        // add the link arrow class
        vh.addClass(el, 'link-arrow');
        // insert the svg arrows
        el.innerHTML = old_str + svg;
    }
    
    vh.wrap('<h5>', '.js-ki-home-3-1 ul a, .js-ki-home-3-2 ul a', '</h5>')
    // end homepage developments panel
}

module.exports = {
    init: init,
};