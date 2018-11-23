function init(){

    var storyBlockquote = document.querySelectorAll('.fulltext-main-story blockquote');

    _.forEach(storyBlockquote, function(t){
        t.classList.add('blockquote', 'bg-primary', 'text-white', 'rounded', 'p-4', 'mr-4', 'my-4');
    })
}

module.exports = {
    init: init,
}