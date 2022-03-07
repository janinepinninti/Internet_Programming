function myClickFunction() {
    alert('The button was pressed');
}
function myLoadFunction() {
    var element = document.getElementById ('circle');
    element.addEventListener('click', myClickFunction)
} 

document.addEventListener ('DOMContentLoaded', myLoadFunction);