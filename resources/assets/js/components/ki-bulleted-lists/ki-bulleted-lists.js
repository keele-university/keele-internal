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

    if(developmentsUls){
        _.forEach(developmentsUls, (oneUl) => {
            oneUl.classList.add('list-unstyled');
        });
    }
    // end homepage developments
}

module.exports = {
    init: init,
};