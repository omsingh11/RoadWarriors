$(document).ready(function() {
    $(window).on("contextmenu",function(e){
       return false;
    });
});
 document.onkeydown = function (e) {
    e = e || window.event;//Get event
    if (e.ctrlKey) {
        var c = e.which || e.keyCode;//Get key code
        switch (c) {
            case 83://Block Ctrl+S
            case 87://Block Ctrl+W --Not work in Chrome
            case 85://Block Ctrl+U
            case 67: //Block Ctrl+C
                e.preventDefault();
                e.stopPropagation();
            break;
        }
    }
};
