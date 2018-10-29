const vh = require('../../utils/vanilla-helper');
const svg = '<svg viewBox="0 0 16 16" width="16" height="16" class="icon-arrow d-none d-md-inline-block"><path d="M7.2 12.73l-1.41-1.41 3.29-3.29-3.29-3.29L7.2 3.32l4.71 4.71-4.71 4.7z"/></svg>';
// const svg = '<i class="fas fa-angle-right ml-2 align-middle d-none d-md-inline-block"></i>';

function init() {

    // grab all links from the ki-navbox-grid-auto-children content-type
    const autoChildLinks = document.querySelectorAll('.ki-auto-child-sections a');
    // loop through, get text and replace it with template string below.
    for (i = 0; i < autoChildLinks.length; i++) {
        // console.log(autoChildLink);
        let el = autoChildLinks[i];
        var autoChildLinktext = el.innerText;

        // console.log(el);

        vh.addClass(el, 'h-100');
        
        // template string:
        var newInsideLink =
            `<div class="card-body">
                <div class="card-title">
                    <h5 class="card-title">${autoChildLinktext} <svg viewBox="0 0 16 16" width="16" height="16" class="icon-arrow d-none d-md-inline-block"><path d="M7.2 12.73l-1.41-1.41 3.29-3.29-3.29-3.29L7.2 3.32l4.71 4.71-4.71 4.7z"></path></svg>
                    </h5>
                </div>
            </div>`;

        // now replace element in DOM
        el.innerHTML = newInsideLink;
    }

    // finally wrap what we have in the reuqired col surrounder
    const wrapTop = `<div class="col-sm-6 col-md-4 mb-3 d-none d-block"><div class="card">`;
    const wrapBottom = `</div><!-- .card -->  </div><!-- .col-x -->`;

    vh.wrap(wrapTop, '.ki-auto-child-sections a', wrapBottom);

}

module.exports = {
    init: init,
};