function init() {

    var quickLinks = document.querySelectorAll('.ki-utility-links ul');

    if(quickLinks){
        _.forEach(quickLinks, quickLink => {
            quickLink.classList.add('list-unstyled');
        }
    );
    }
}

module.exports = {
    init: init,
};