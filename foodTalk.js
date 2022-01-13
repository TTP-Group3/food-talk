
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

var mottoAppend = function(textElements,index){
    this.allEls = textElements;
    this.elementIndex = index;
    this.loopNum = 0;
    this.currentEl = textElements[this.elementIndex];
    this.text = JSON.parse(this.currentEl.getAttribute('data-type'))[0];
    this.tick();
}

mottoAppend.prototype.tick = function(){
    var addingChar = this.text[this.loopNum];

    if(this.currentEl.querySelector('span') != null){
        this.currentEl.querySelector('span').innerHTML += addingChar;
    }else{
        this.currentEl.innerHTML += addingChar;
    }

    if(addingChar === ' '){
        this.currentEl.innerHTML += '<span></span>';
    }

    if(this.loopNum === this.text.length - 1){
        if(this.allEls[this.elementIndex + 1] !== undefined){
            new mottoAppend(this.allEls, this.elementIndex+1);
            return;
        }else{
            return;
        }
    }

    this.loopNum += 1;
    var that = this;
    // var delta = 150 - Math.random() * 150;
    setTimeout(() => {
        that.tick();
    }, 50);
};

function displayMotto(){
    var textCont = document.getElementsByClassName("previewText")[0];
    var textElements = textCont.querySelectorAll('h1');

    new mottoAppend(textElements,0);
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

window.addEventListener("load", ()=>{
    displayMotto();
});
