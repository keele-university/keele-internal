const vh = require('../../utils/vanilla-helper');

function init() {

    // col-3 MAIN quicklinks
    const quickLinks = document.querySelectorAll('.ki-utility-links ul');

    if(quickLinks){
        _.forEach(quickLinks, quickLink => {
            quickLink.classList.add('list-unstyled');
        }
    );
    }
    // end .col-3 MAIN quicklins

    // homepage developments columns- strategy, campus and twitter three col full width
    const developmentsUls = document.querySelectorAll('.js-ki-home-3-1 ul, .js-ki-home-3-2 ul');
    const developmentsUlsLi = document.querySelectorAll('.js-ki-home-3-1 ul li, .js-ki-home-3-2 ul li');

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


    
    vh.wrap('<h5>', '.js-ki-home-3-1 ul a, .js-ki-home-3-2 ul a', '</h5>')
    // end homepage developments panel
}

module.exports = {
    init: init,
};