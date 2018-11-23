function init(){

    var storyBlockquote = document.querySelectorAll('.fulltext-main-story blockquote');

    _.forEach(storyBlockquote, function(t){
        t.classList.add('blockquote', 'bg-primary', 'text-white', 'rounded', 'p-4', 'mr-0', 'mr-md-5', 'my-4');
    })
}

module.exports = {
    init: init,
}