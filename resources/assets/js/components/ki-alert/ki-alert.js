const vh = require('../../utils/vanilla-helper');

function init() {
    let kiAlerts = document.querySelectorAll('.js-ki-alert a');
    // console.log(kiAlerts); // nodelist
    
    // spread to make nodelist a true array then forEach.
    [...kiAlerts].forEach( alert => {
        vh.addClass(alert, 'alert-link');
    });
}

module.exports = {
    init: init,
};