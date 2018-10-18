
// const vh = require('./vanilla-helper');

function init() {    

    // PRIMARY
    // find current branch from t4
    var kiNavBarPrimary = document.querySelector('.ki-nav-bar-primary .currentbranch0');
    if (kiNavBarPrimary) {
        // find parent node (should be the surrounding li
        var kiNavBarPrimaryParent = kiNavBarPrimary.parentNode;
        
        // now add the custom class to it
        kiNavBarPrimaryParent.classList.add('js-currentbranch0-parent');
    }

    // SECONDARY
    // find current branch from t4
    var kiNavBarSecondary = document.querySelector('.ki-nav-bar-secondary .currentbranch0');
    if (kiNavBarSecondary){
        // find parent node (should be the surrounding li
        var kiNavBarSecondaryParent = kiNavBarSecondary.parentNode;
        
        // now add the custom class to it
        kiNavBarSecondaryParent.classList.add('js-currentbranch0-parent-secondary');
    }
}

module.exports = {
    init: init,
}