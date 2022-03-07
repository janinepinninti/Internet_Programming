function myLoadFunction() {
    var element = document.getElementById ('pageheading');
    element.firstChild.nodeValue = 'NEW HEADING';
} 

document.addEventListener ('DOMContentLoaded', myLoadFunction);
