function myClickFunction() {
    var element = document.getElementById ('myinput');
    var div = document.getElementById ('result');
    div.firstChild.nodeValue = element.value;
} 

function myLoadFunction() {
    var element = document.getElementById ('mybutton');
    element.addEventListener('click', myClickFunction);
} 

document.addEventListener ('DOMContentLoaded', myLoadFunction);
