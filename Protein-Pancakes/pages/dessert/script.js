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