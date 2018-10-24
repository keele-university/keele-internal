// const vh = require('./vanilla-helper');

function init() {    

    var kiSectionHeader = document.querySelector('.ki-section-header');

    if (kiSectionHeader) {
        var kiSectionHeaderSectionLink = document.querySelector('h2 a');
        // kiSectionHeaderSectionLink.text // gives the text in the link if it exists

        // if there Level 2 text exists then remove d-none from the markup. Else remove the whole header block from the DOM.
        if (kiSectionHeaderSectionLink.text !== "") {
            kiSectionHeader.classList.remove('d-none');
        } else {
            console.log('removing kiSectionHeader: ');
            console.log(kiSectionHeader);
            kiSectionHeader.outerHTML = (""); // can't use remove() because of IE.
        }
    }

}

module.exports = {
    init: init,
}