function myLoadFunction() {
    var element = document.getElementById ('pageheading');
    element.firstChild.nodeValue = 'This is the New Heading';

    var element = document.getElementById ('pagecontent');
    element.firstChild.nodeValue = 'This is the New Content';
} 

document.addEventListener ('DOMContentLoaded', myLoadFunction);
