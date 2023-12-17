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
  
    // Change the color of the 5th "li" tag to blue
    var fifthLi = document.getElementsByTagName("li")[4];
    if (fifthLi) {
      fifthLi.style.color = "blue";
    }
  
    // Make all "li" tags italic
    var allLiTags = document.getElementsByTagName("li");
    for (var i = 0; i < allLiTags.length; i++) {
      allLiTags[i].style.fontStyle = "italic";
    }
  });
  