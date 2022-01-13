

function expandMenu(){
    contentMenu = document.getElementsByClassName("contentMenu")[0];
    contentMenu.classList.add("showContentMenu");
}

function displayBackDrop(){
    var blur = document.getElementsByClassName("pageBackDrop")[0];
    
    if(!blur.classList.contains("displayBackDrop")){
        blur.classList.add("displayBackDrop");
    }else{
        blur.classList.remove("displayBackDrop");
    }
}
function clickedBackDrop(){
    var blur = document.getElementsByClassName("pageBackDrop")[0];
    var sideMenu = document.getElementsByClassName("sideMenu")[0];

    blur.classList.remove("displayBackDrop");

    if(sideMenu.classList.contains("showSideMenu")){
        sideMenu.classList.remove("showSideMenu");
    }
}

function showSideMenu(){
    var sideMenu = document.getElementsByClassName("sideMenu")[0];

    if(!sideMenu.classList.contains("showSideMenu")){
        sideMenu.classList.add("showSideMenu");
    }else{
        sideMenu.classList.remove("showSideMenu");
    }
    displayBackDrop();
}

//Justins comment section code
function changeHeart() {
  // func for heart icon
  var heartId = document.getElementById("heart");
  // initializing var heartId to 'heart' id in html file
  if (heartId.src.match("file:///C:/Users/13479/OneDrive/Desktop/coconut%20noodle%20soup/heart-regular.svg")) {
    // if src of heart img is regular then change to solid
    heartId.src = "file:///C:/Users/13479/OneDrive/Desktop/coconut%20noodle%20soup/heart-solid.svg";
  } else {
    // change back to regular
    heartId.src = "file:///C:/Users/13479/OneDrive/Desktop/coconut%20noodle%20soup/heart-regular.svg";
  }
}
function changeComment() {
  // func for comment icon
  var commentId = document.getElementById("comment");
  // initializing var commentId to 'comment' id in html file
  if (commentId.src.match("file:///C:/Users/13479/OneDrive/Desktop/coconut%20noodle%20soup/comment-regular.svg")) {
    // if src of comment img is regular then change to solid
    commentId.src = "file:///C:/Users/13479/OneDrive/Desktop/coconut%20noodle%20soup/comment-solid.svg";
  } else {
    // change back to regular
    commentId.src = "file:///C:/Users/13479/OneDrive/Desktop/coconut%20noodle%20soup/comment-regular.svg";
  }
}
function show_n_hide() {
  if (document.getElementById("dialog").style.display == "none") {
    document.getElementById("dialog").style.display = "block";
  } else {
    document.getElementById("dialog").style.display = "none";
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