 // func for heart icon
function changeHeart() {
 // initializing var heartId to 'heart' id in html file
  var heartId = document.getElementById("heart");
  // if src of heart img is regular then change to solid
  if (heartId.src.match("/static/images/heart-regular.svg")) {    
    heartId.src = "/static/images/heart-solid.svg'}";
  } else {
    // change back to regular
    heartId.src = "/static/images/heart-regular.svg";
  }
}
// func for comment icon
function changeComment() {
  // initializing var commentId to 'comment' id in html file
  var commentId = document.getElementById("comment");
  // if src of comment img is regular then change to solid
  if (commentId.src.match("/static/images/comment-regular.svg")) {   
    commentId.src = "/static/images/comment-solid.svg";
  } else {
    // change back to regular
    commentId.src = "/static/images/comment-regular.svg";
  }
}
//icon not solid in another click
function show_n_hide() {
  if (document.getElementById("dialog").style.display == "none") {
    document.getElementById("dialog").style.display = "block";
  } else {
    document.getElementById("dialog").style.display = "none";
  }
  return false;
}
var postBtn = document.getElementById("postBtn");
// using an event listener so that whenever I click...func is called
postBtn.addEventListener("click", function () {
  // initializing var value to return the value the user types
  var value = document.getElementById("comment_box").value;
 // initializing var li to new element 'li'
  var li = document.createElement("li");
   // creating a node for every text. text is the node...value is the data
  var text = document.createTextNode(value);
 // appending input text to our newly created list (li)
  li.appendChild(text);
   // lastly...appending the list to an unordered list
  document.getElementById("unordered_list").appendChild(li);
 
});