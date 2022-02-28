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
    element1.addEventListener('mouseover', myHoverFunction1);

    var element2 = document.getElementById ('pagecontent');
    element2.addEventListener('mouseover', myHoverFunction2);
} 

function myMouseOut1() {
    var element1 = document.getElementById ('pageheading');
    element1.firstChild.nodeValue = 'This is the New heading when out';
} 

function myMouseOut2() {
    var element2 = document.getElementById ('pagecontent');
    element2.firstChild.nodeValue = 'This is the New Content when out';
} 

function myLoadFunction3() {
    var element1 = document.getElementById ('pageheading');
    element1.addEventListener('mouseout', myMouseOut1);

    var element2 = document.getElementById ('pagecontent');
    element2.addEventListener('mouseout', myMouseOut2);
} 

document.addEventListener ('DOMContentLoaded', myLoadFunction1);
document.addEventListener ('DOMContentLoaded', myLoadFunction2);
document.addEventListener ('DOMContentLoaded', myLoadFunction3);
