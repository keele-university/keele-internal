
// const vh = require('./vanilla-helper');

function init() {    

    // Add .nav-link dynamically to links within the t4 rendered .nav-item class
    var kiNavItems = document.querySelectorAll('.ki-nav-bar-primary .nav-item, .ki-nav-bar-secondary .nav-item');
    _.forEach( kiNavItems, (item) => {
        var childSection = item.firstElementChild;
        childSection.classList.add('nav-link');
    })

    // PRIMARY
    // find current branch from t4
    var kiNavBarPrimaryBranch = document.querySelector('.ki-nav-bar-primary .currentbranch0');
    if (kiNavBarPrimaryBranch) {
        // find parent node (should be the surrounding li
        var kiNavBarPrimaryBranchParent = kiNavBarPrimaryBranch.parentNode;
        
        // now add the custom class to it
        kiNavBarPrimaryBranchParent.classList.add('js-currentbranch0-parent');
    }

    // SECONDARY
    // find current branch from t4
    var kiNavBarSecondaryBranch = document.querySelector('.ki-nav-bar-secondary .currentbranch0');
    if (kiNavBarSecondaryBranch){
        // find parent node (should be the surrounding li
        var kiNavBarSecondaryBranchParent = kiNavBarSecondaryBranch.parentNode;
        
        // now add the custom class to it
        kiNavBarSecondaryBranchParent.classList.add('js-currentbranch0-parent-secondary');
    }
    
    // To avoid jumpiness on page load, the nav is hidden with CSS by default
    // now the above JS has added the classes that give padding etc, let's show the nav again
    var kiNavBarPrimary = document.querySelector('.ki-main-navs');
    if (kiNavBarPrimary){
        kiNavBarPrimary.style.visibility = 'visible'
    }

}

module.exports = {
    init: init,
}