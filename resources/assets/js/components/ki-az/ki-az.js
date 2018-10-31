
const vh = require('../../utils/vanilla-helper');

function init() {
    // x.charAt(0)
    console.log('testing kiAZ file is loaded')

    var input = document.getElementById("kiAzInput");

    input.addEventListener('keyup',function(){
        filterText(input);
    });

// SIMPLY ADD A LETTER BEFORE EACH GROUP AND SCROLL TO IT


    function filterText() {
        console.log(input.value);
        var filter, ul, li, a, i;
        // input = document.getElementById("kiAzInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

        //  MOVE THIS TO EXTERNAL SCRIPT
        // perhaps wrap the above with a span around the content type
        // and then pick up the input and add an event listener e.g.
//         <input id="input">
//          <script>
//              var input = document.getElementById('input');
//              input.addEventListener('keyup',function(){alert(input.value);});
//          <\/script>

    
}

module.exports = {
    init: init,
};