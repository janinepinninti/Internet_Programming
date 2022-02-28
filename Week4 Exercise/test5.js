function myLoadFunction() {
    var element1 = document.getElementById ('pageheading');
    element1.firstChild.nodeValue = 'This is the New Heading';

    var element2 = document.getElementById ('pagecontent');
    element2.firstChild.nodeValue = 'This is the New Content';
} 

document.addEventListener ('click', myLoadFunction);
