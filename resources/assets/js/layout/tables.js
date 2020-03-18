// add classes to tables automatically
// this is global and will apply to vanilla tables added by users in any content type

const vh = require('../utils/vanilla-helper');

function init(){
    var globTables = document.querySelectorAll('table');

    _.forEach(globTables, function(table){
        vh.addClass(table, 'table table-bordered table-striped table-responsive');
    })

}

module.exports = {
    init: init
}