

var mottoAppend = function(textElements,index){         //A function that display the motto of the webpage, takes two arguments in its parameters.  
    this.allEls = textElements;                         // h1 elements whose data attribute contains the characters that will be displayed on the home page
    this.elementIndex = index;                      
    this.loopNum = 0;
    this.currentEl = textElements[this.elementIndex];
    this.text = JSON.parse(this.currentEl.getAttribute('data-type'))[0];    //the text that will be displayed was saved in a json format, I must unformat it to regular text
    this.tick();                    
}

mottoAppend.prototype.tick = function(){              //A prototype object that will display each character of the motto, individually, creating a typewriting effect
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
        if(this.allEls[this.elementIndex + 1] !== undefined){       //this if statement checks to see if the last character of the motto has been displayed, if so, it checks to see if there is another 
            new mottoAppend(this.allEls, this.elementIndex+1);      //part of the motto waiting to be displayed, if so, it will call mottoAppend() again, if not, then all parts of the motto have been displayed
            return;
        }else{
            return;
        }
    }

    this.loopNum += 1;
    var that = this;
    // var delta = 150 - Math.random() * 150;
    setTimeout(() => {          //After the object has successfully posted the character onto the main page, it must wait a certain amount of time before posting the next character
        that.tick();
    }, 50);
};

function displayMotto(){            //A function that initiates the motto displaying process, passing the first part of the motto to the function mottoAppend()
    var textCont = document.getElementsByClassName("previewText")[0];
    var textElements = textCont.querySelectorAll('h1');

    new mottoAppend(textElements,0);
}

function displayRecipes(){          //A crucial function that displays recipes based on user selected filters
    var recipeCont = document.getElementsByClassName("recipeContainer")[0];     //A variable set to the container where the recipes are housed
    var recipeItems = recipeCont.getElementsByClassName("recipeItem");          //An array of recipe elements

    var filterCont = document.getElementsByClassName("filterBtns")[0];          //A variable set to the container where the filter buttons are housed
    var filterBtns = filterCont.getElementsByTagName('button');                 //An array of all the possible filter buttons
    var filterIndex = (()=>{                                            //A variable set to the return item of a function which loops through every filter button to check which filter was chosen by the user
        for(var i=0; i < filterBtns.length; i++){                       //loops through every button in the variable filterBtns
            if(filterBtns[i].classList.contains('selectedFilter')){     //if the button contains the class "selectedFilter", it is the chosen filter
                return i;                                               //return the index of the selected filter button
            }
        }
        return -1;                                                      //if no filter button is chosen, return -1
    })();

    if(!filterIndex){                                                   //if the filterIndex is 0, then the filter chosen is All, so all recipes should be displayed
        for(var j=0; j < recipeItems.length; j++){                      //loop through every recipe in the array recipeItems
            if(!recipeItems[j].classList.contains('displayRecipe')){    //if the recipeItem doesn't have the class 'displayRecipe', then add it to make the recipe shown
                recipeItems[j].classList.add('displayRecipe');          //add the class "displayRecipe" to the recipeItem to be shown
            }
        }
    }else{                                                              //for every other filter that isn't 0, must hide and show only certain recipes
        var selectedFilter = (()=>{                                         //A variable which is set to the return item of a function which returns a class name, correlating to the filterIndex
            switch (filterIndex) {
                case 1:
                    return "breakfastRecipe";
                case 2:
                    return "lunchRecipe";
                case 3:
                    return "dinnerRecipe";
                case 4:
                    return "dessertRecipe";
                default:
                    break;
            }
        })();

        for(var j=0; j < recipeItems.length; j++){                  //loop throght every recipeItem in recipeItems
            if(recipeItems[j].classList.contains(selectedFilter)){          //if the recipeItem contains the class assigned to selectedFilter, then make that recipe shown
                if(!recipeItems[j].classList.contains('displayRecipe')){    //If the recipe that should be shown, is not currently shown, then add the class "displayRecipe", to make it shown
                    recipeItems[j].classList.add('displayRecipe');
                }
            }else{                                                  //if the recipeItem does not contain the class assigned to selectedFilter, then hide the recipe
                if(recipeItems[j].classList.contains('displayRecipe')){     //If the recipe is currently shown, remove the class "displayRecipe" to make it hidden
                    recipeItems[j].classList.remove('displayRecipe');
                }
            }
        }
    }
}

function updateFilter(element){                                         //A function that updates the selected filter. The argument passed in the function is the element that called the function
    var filterCont = document.getElementsByClassName("filterBtns")[0];  //A variable that is set to the container housing all the filter buttons
    var filterBtns = filterCont.getElementsByTagName('button');         //An array that contains all the filter buttons

    for(var i=0; i < filterBtns.length; i++){                           //loop through every button in filterBtns
        if(filterBtns[i] === element){                                  //if a looping filter button is equal to the element that called the function, then that button should be set to the new filter
            if(!filterBtns[i].classList.contains('selectedFilter')){    //if the selected filter button is not already set to be the selected filter button then make it so
                filterBtns[i].classList.add('selectedFilter');          //add the class "selectedFilter" to the button that equals to the called element, essentially making it the new selected filter button
            }
        }else{                                                          //if the looping element is not equal to the element that called the function, then make sure it isn't set to selected filter
            if(filterBtns[i].classList.contains('selectedFilter')){     //if the looping element contains the class "selectedFilter", then remove it, no longer making it the selected filter button
                filterBtns[i].classList.remove('selectedFilter');       //remove the class "selectedFilter" from the looping element
            }
        }
    }
    displayRecipes();                                                   //After the new selected filter button is set, call the function displayRecipes()
}

window.addEventListener("load", ()=>{           //creates an eventlistener which is called when the page loads
    displayMotto();                 //call the function displayMotto()
    displayRecipes();               //call the function displayRecipes()
});
