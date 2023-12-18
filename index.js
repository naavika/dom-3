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

  // 1. Inside the first Div, after the main heading add a sub-heading (h3 tag) "Buy high-quality organic fruits online".
  var mainHeading = document.querySelector("h1");
  if (mainHeading) {
    var subHeading = document.createElement("h3");
    subHeading.textContent = "Buy high-quality organic fruits online";
    mainHeading.parentNode.insertBefore(subHeading, mainHeading.nextSibling);
  }

  // 2. Make the sub-heading text italic.
  var italicSubHeading = document.querySelector("h3");
  if (italicSubHeading) {
    italicSubHeading.style.fontStyle = "italic";
  }

  // 3. Inside the second Div, before the unordered list add a paragraph tag showing "Total fruits: 4".
  var secondDiv = document.querySelector("#div2");
  if (secondDiv) {
    var totalFruitsParagraph = document.createElement("p");
    totalFruitsParagraph.textContent = "Total fruits: 4";
    secondDiv.insertBefore(totalFruitsParagraph, secondDiv.firstChild);

    // Set the id of the paragraph tag to "fruits-total".
    totalFruitsParagraph.setAttribute("id", "fruits-total");
  }
});
