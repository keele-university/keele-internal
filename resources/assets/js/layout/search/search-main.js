// added using a script tag in t4 rather than codesplitting this out for one page
// const instantsearch = require('instantsearch.js');


function init() {

    const search = instantsearch({
        appId: 'HT7VYJG3KU',
        apiKey: 'd37bbf3291b226676c9f3f1937e865d3',
        indexName: 'keele_internal_SITE',
        routing: true
    });


    // Hide global search button top right as not needed on this page now
    var trButton = document.querySelector('.js-ki-search-overlay');
    if (trButton !== null ){
        trButton.classList.add('d-none'); // bootstrap display none
    }


    search.addWidget(
        instantsearch.widgets.searchBox({
            container: '#search-box',
            placeholder: 'Search the intranet'
        })
    );
    
    
    search.addWidget(
        instantsearch.widgets.hits({
            container: '#hits',
            templates: {
                empty: 'Your search did not match any documents',
                // empty: 'File darwin not exist 😜',
                item: `
            <a href="https://www.keele.ac.uk{{urlPath}}">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">{{{_highlightResult.sectionName.value}}}</h3>
                        <small>https://www.keele.ac.uk{{urlPath}}</small>
                        <div class="d-none">{{keywords}}</div>
                    </div>
                </div>
            </a>
                `
            }
        })
    );

    search.addWidget(
        instantsearch.widgets.pagination({
            container: '#pagination',
            maxPages: 20,
            // default is to scroll to 'body', here we disable this behavior
            scrollTo: true
        })
    );


    search.start();

    // If user wants to go to the main site search, they can click on 'search the external site'. So let's get the search input value and send that with them:

    // get search input value
    const externalLink = document.querySelector('#search-box-external');
    
    externalLink.addEventListener('click', function(e){
        e.preventDefault();

        // get user typed string
        const searchTerm = document.querySelector('.js-ki-trigger-main-searchmain input').value;
        
        var searchUrl = 'https://www.keele.ac.uk/search/?q='

        var destinationSearch = searchUrl + searchTerm;
        // console.log(destinationSearch)
        window.location = destinationSearch;
    })

    // add event listener to external site link



}

module.exports = {
    init: init,
};