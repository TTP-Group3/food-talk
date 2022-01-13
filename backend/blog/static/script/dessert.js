// func for heart icon
function changeHeart() {
    // initializing var heartId to 'heart' id in html file
     var heartId = document.getElementById("heart");
     // if src of heart img is regular then change to solid
     if (heartId.src.match("heart-regular.svg")) {    
       heartId.src = "heart-solid.svg";
     } else {
       // change back to regular
       heartId.src = "heart-regular.svg";
     }
   }
   
   var button = document.getElementById("button");
   button.addEventListener("click", function () {
     var value = document.getElementById("comment_box").value;
     var li = document.createElement("li");
     var text = document.createTextNode(value);
     li.appendChild(text);
     document.getElementById("unordered").appendChild(li);
    
   });