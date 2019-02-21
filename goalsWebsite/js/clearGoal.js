var button = document.querySelector('button');
var ol = document.querySelector('ol');

    button.addEventListener('click', function() {

        localStorage.clear();
        while (ol.firstChild) {
            ol.removeChild(ol.firstChild);
        }
    });
