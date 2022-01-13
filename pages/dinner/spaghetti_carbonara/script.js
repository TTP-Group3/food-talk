//////////////////////////////////////////////////////////////////
// script.js - Spaghetti Carbonara
//
// January 13, 2022
// - Adapted from Justin's javascript code in Pastelon Recipe
// - Refactored and commented by ilan rodriguez
//////////////////////////////////////////////////////

// This function finds the reference of a given object name and swaps between its respective solid and hollow icons
function toggleSolid(objectName) {
  var objectId = document.getElementById(objectName);

  if (objectId.src.match(`imgs/${objectName}-regular.svg`)) { // if the object points to the hollow image
    objectId.src = `imgs/${objectName}-solid.svg`;            // make it point to the solid image
  } else {
    objectId.src = `imgs/${objectName}-regular.svg`;          // else make it point back to the hollow image
  }
}

// This function finds the reference of a given object name and toggles its visibility
function toggleVisibility(objectName) {
  var objectId = document.getElementById(objectName); // get a reference to the object

  if (objectId.style.display == "none") {             // if the object is hidden,
    objectId.style.display = "block";                 // then make the object visible
  } else {
    objectId.style.display = "none";                  // else make it invisible
  }
}

// Since we are not modifying this reference, make it const
const postBtn = document.getElementById("postBtn");

// Add an event listener to the button and execute a lambda function
postBtn.addEventListener("click", function () {
  const value = document.getElementById("comment_box").value;      // get the raw text in the comment box
  const text = document.createTextNode(value);                     // create a TextNode object with that raw text
  var li = document.createElement("li");                           // create a new list item
  li.appendChild(text);                                            // append TextNode into list item
  document.getElementById("unordered_list").appendChild(li);       // insert this list item into the comment section "unordered_list"
});
