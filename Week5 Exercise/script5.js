function myClickFunction() {
    var element = document.getElementById ('circle');
    var circleOpacity = parseFloat (element.style.opacity);
    element.style.opacity = circleOpacity - 0.1;
}
function myLoadFunction() {
    var element = document.getElementById ('circle');
    element.addEventListener('click', myClickFunction);
    element.style.opacity = 1;
} 

document.addEventListener ('DOMContentLoaded', myLoadFunction);