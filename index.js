document.addEventListener("DOMContentLoaded", function () {
    // Get the elements with the class 'fruit'
    var fruitElements = document.getElementsByClassName("fruit");
  
    // Make the 3rd element in the list have yellow background color
    if (fruitElements.length >= 3) {
      fruitElements[2].style.backgroundColor = "yellow";
    }
  
    // Change the orange background color to yellow
    var headerElement = document.getElementById("header");
    if (headerElement) {
      headerElement.style.backgroundColor = "yellow";
    }
  
    // Make all the elements in the list have bold font
    for (var i = 0; i < fruitElements.length; i++) {
      fruitElements[i].style.fontWeight = "bold";
    }
  });