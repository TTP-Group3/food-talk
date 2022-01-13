function changeHeart() {
  // func for heart icon
  var heartId = document.getElementById("heart");
  // initializing var heartId to 'heart' id in html file
  if (heartId.src.match("/static/images/recipes/heart-regular.svg")) {
    // if src of heart img is regular then change to solid
    heartId.src = "/static/images/recipes/heart-solid.svg";
  } else {
    // change back to regular
    heartId.src = "/static/images/recipes/heart-regular.svg";
  }
}
function changeComment() {
  // func for comment icon
  var commentId = document.getElementById("comment");
  // initializing var commentId to 'comment' id in html file
  if (commentId.src.match("/static/images/recipes/comment-regular.svg")) {
    // if src of comment img is regular then change to solid
    commentId.src = "/static/images/recipes/comment-solid.svg";
  } else {
    // change back to regular
    commentId.src = "/static/images/recipes/comment-regular.svg";
  }
}
function show_n_hide() {
  // func to display the comment box
  if (document.getElementById("dialog").style.display == "none") {
    document.getElementById("dialog").style.display = "block";
    // when display is set to none then we will display block...dialog will reappear once we click on the chat icon
  } else {
    document.getElementById("dialog").style.display = "none";
    // display no div
  }
  return false;
}
function show_n_hide2() {
  // func to display the steps container
  if (document.getElementById("steps").style.display == "none") {
    document.getElementById("steps").style.display = "block";
    // when display is set to none then we will display block...steps div will reappear once we click on the steps button
  } else {
    document.getElementById("steps").style.display = "none";
    // display no div
  }
  return false;
}
function show_n_hide3() {
  // func to display the tips container
  if (document.getElementById("tips").style.display == "none") {
    document.getElementById("tips").style.display = "block";
    // when display is set to none then we will display block...tips div will reappear once we click on the tips button
  } else {
    document.getElementById("tips").style.display = "none";
    // display no div
  }
  return false;
}
var postBtn = document.getElementById("postBtn");
postBtn.addEventListener("click", function () {
  // using an event listener so that whenever I click...func is called
  var value = document.getElementById("comment_box").value;
  // initializing var value to return the value the user types
  var li = document.createElement("li");
  // initializing var li to new element 'li'
  var text = document.createTextNode(value);
  // creating a node for every text. text is the node...value is the data
  li.appendChild(text);
  // appending input text to our newly created list (li)
  document.getElementById("unordered_list").appendChild(li);
  // lastly...appending the list to an unordered list
});
