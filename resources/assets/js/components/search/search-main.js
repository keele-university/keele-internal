// added using a script tag in t4 rather than codesplitting this out for one page
// const instantsearch = require('instantsearch.js');


function init() {

    const search = instantsearch({
        appId: 'HT7VYJG3KU',
        apiKey: 'd37bbf3291b226676c9f3f1937e865d3',
        indexName: 'keele_internal_SITE',
        routing: true
    });


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
                // empty: 'No results',
                empty: 'File darwin not exist 😜',
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

}

module.exports = {
    init: init,
};