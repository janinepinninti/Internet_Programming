function myClickFunction1() {
    var element1 = document.getElementById ('pageheading');
    element1.firstChild.nodeValue = 'This is the New Heading when click';
} 

function myClickFunction2() {
    var element2 = document.getElementById ('pagecontent');
    element2.firstChild.nodeValue = 'This is the New Content when click';
} 

function myLoadFunction1() {
    var element1 = document.getElementById ('pageheading');
    element1.addEventListener('click', myClickFunction1);

    var element2 = document.getElementById ('pagecontent');
    element2.addEventListener('click', myClickFunction2);
} 

function myHoverFunction1() {
    var element1 = document.getElementById ('pageheading');
    element1.firstChild.nodeValue = 'This is the New Heading when hover';
} 

function myHoverFunction2() {
    var element2 = document.getElementById ('pagecontent');
    element2.firstChild.nodeValue = 'This is the New Content when hover';
} 

function myLoadFunction2() {
    var element1 = document.getElementById ('pageheading');
    element1.addEventListener('mouseenter', myHoverFunction1);

    var element2 = document.getElementById ('pagecontent');
    element2.addEventListener('mouseenter', myHoverFunction2);
} 

function myMouseOut1() {
    var element1 = document.getElementById ('pageheading');
    element1.firstChild.nodeValue = 'This is the New Heading when mouse leave';
} 

function myMouseOut2() {
    var element2 = document.getElementById ('pagecontent');
    element2.firstChild.nodeValue = 'This is the New Content when mouse leave';
} 

function myLoadFunction3() {
    var element1 = document.getElementById ('pageheading');
    element1.addEventListener('mouseleave', myMouseOut1);

    var element2 = document.getElementById ('pagecontent');
    element2.addEventListener('mouseleave', myMouseOut2);
} 

document.addEventListener ('DOMContentLoaded', myLoadFunction1);
document.addEventListener ('DOMContentLoaded', myLoadFunction2);
document.addEventListener ('DOMContentLoaded', myLoadFunction3);
