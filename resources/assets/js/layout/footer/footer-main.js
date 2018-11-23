const svg = '<svg viewBox="0 0 16 16" width="16" height="16" class="icon-arrow"><path style="fill: #eee;" d="M7.2 12.73l-1.41-1.41 3.29-3.29-3.29-3.29L7.2 3.32l4.71 4.71-4.71 4.7z"/></svg>';

function init() {

    // Adding arrows to the t4 edit links
    const t4Edit = document.querySelectorAll('.t4Edit-page');
    
    _.forEach(t4Edit, (el) => {
        const old_str = el.innerHTML;
        el.innerHTML = old_str + svg;
    })
}

module.exports = {
    init: init,
};