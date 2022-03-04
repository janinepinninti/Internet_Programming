function myClickFunction() {
    var element = document.getElementById ('myinput');
    alert (element.value);
} 

function myLoadFunction() {
    var element = document.getElementById ('mybutton');
    element.addEventListener('click', myClickFunction);
} 

document.addEventListener ('DOMContentLoaded', myLoadFunction);
