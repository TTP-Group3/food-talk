function showSideMenu(){
    var sideMenu = document.getElementsByClassName("sideMenu")[0];

    if(!sideMenu.classList.contains("showSideMenu")){
        sideMenu.classList.add("showSideMenu");
    }else{
        sideMenu.classList.remove("showSideMenu");
    }
    displayBackDrop();
}