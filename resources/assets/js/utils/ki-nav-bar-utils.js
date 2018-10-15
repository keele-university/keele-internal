
// const vh = require('./vanilla-helper');

function init() {    
    // find current branch from t4
    var kiNavBarPrimary = document.querySelector('.ki-nav-bar-primary .currentbranch0');
    // find parent node (should be the surrounding li
    var kiNavBarPrimaryParent = kiNavBarPrimary.parentNode;
    
    // now add the custom class to it
    kiNavBarPrimaryParent.classList.add('js-currentbranch0-parent');
}

module.exports = {
    init: init,
}