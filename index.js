document.addEventListener("DOMContentLoaded", function () {
    // Get the elements with the class 'fruit'
    var fruitElements = document.querySelectorAll(".fruit");
  
    // Make the 3rd element in the list have yellow background color
    if (fruitElements.length >= 3) {
      fruitElements[2].style.backgroundColor = "yellow";
    }
  
    // Change the orange background color to yellow using querySelector
    var headerElement = document.querySelector("#header");
    if (headerElement) {
      headerElement.style.backgroundColor = "yellow";
    }
  
    // Make all the elements in the list have bold font
    fruitElements.forEach(function (element) {
      element.style.fontWeight = "bold";
    });
  
    // Change the color of the 5th "li" tag to blue using querySelector
    var fifthLi = document.querySelector("li:nth-child(5)");
    if (fifthLi) {
      fifthLi.style.color = "blue";
    }
  
    // Make all "li" tags italic using querySelectorAll
    var allLiTags = document.querySelectorAll("li");
    allLiTags.forEach(function (li) {
      li.style.fontStyle = "italic";
    });
  
    // Use id as query to select the basket heading and set its color to brown
    var basketHeading = document.querySelector("#basket-heading");
    if (basketHeading) {
      basketHeading.style.color = "brown";
    }
  
    // Change the background color of even fruit items to red and text color to white
    fruitElements.forEach(function (element, index) {
      if (index % 2 === 1) {
        element.style.backgroundColor = "red";
        element.style.color = "white";
      }
    });
  });
  