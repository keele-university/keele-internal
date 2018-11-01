
// const vh = require('./vanilla-helper');

function init() {   
    
    
    var topButton = document.querySelector('.back-to-top-button');


    window.addEventListener('scroll', _.throttle(updatePosition, 400));

    function updatePosition(){
        var height = window.innerHeight;
        console.log('ScrollY: '+scrollY + ', Visible height: ' + height );

        // if user scrolls past the height of the visible window
        if ( scrollY > height ) {
            topButton.classList.add('is-visible');
        } else { 
            topButton.classList.remove('is-visible');
        }
    }

}

module.exports = {
    init: init,
}