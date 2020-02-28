function init() {    

    const mainContent = document.querySelector('#js-k-nav ~ .container');
    mainContent.setAttribute('tabindex', -1);
    const skipButton = document.querySelector('.js-k-skip');
    
    skipButton.addEventListener('click', function(){
    
            mainContent.scrollIntoView({
                behavior: 'smooth'
            });
            mainContent.focus(); // tabindex should take care of this but just for edge cases
    })

}    

module.exports = {
    init: init,
}    

