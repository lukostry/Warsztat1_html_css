document.addEventListener ("DOMContentLoaded", function() {
    function hideImageDescription(){
        var thirdRowColumns = document.querySelector(".row3 .main-width").children;
        for (var i = 0; i < (thirdRowColumns.length) - 1; i++) {
            thirdRowColumns[i].addEventListener("mouseover", function() {
//                console.log(this);
                this.firstChild.classList.add("hidden");
            });
            thirdRowColumns[i].addEventListener("mouseout", function() {
                this.firstChild.classList.remove("hidden");
            });
        }
    }
    hideImageDescription();
    
    function slidePictures(){
        var sliderList = document.querySelector(".slider");
        var prevButton = document.querySelector("#prevPicture");
        var nextButton = document.querySelector("#nextPicture");
        var listItems = document.querySelectorAll (".slider li");
        var visiblePictureIndex = 0;
//        console.log(listItems.length);
        
        listItems[visiblePictureIndex].classList.add("visible");
        
        prevButton.addEventListener("click", function(){
            listItems[visiblePictureIndex].classList.remove("visible");
            visiblePictureIndex--;
            if (visiblePictureIndex < 0) {
                visiblePictureIndex = (listItems.length) - 1;
            }
            listItems[visiblePictureIndex].classList.add("visible");
        });
        nextButton.addEventListener("click", function(){
            listItems[visiblePictureIndex].classList.remove("visible");
            visiblePictureIndex++
            if (visiblePictureIndex >= listItems.length) {
                visiblePictureIndex = 0;
            }
            listItems[visiblePictureIndex].classList.add("visible");
        });
    }
    slidePictures();
    
    //funckja zmieniająca wygląd kursora dla przycisków przy sliderze
    
    function changeCursor() {
        var prevButton = document.querySelector("#prevPicture");
        var nextButton = document.querySelector("#nextPicture");
        
        prevButton.addEventListener("mouseover", function(){
            prevButton.classList.add("pointer");
        });
        prevButton.addEventListener("mouseout", function(){
            prevButton.classList.remove("pointer");
        });
        
        nextButton.addEventListener("mouseover", function(){
            nextButton.classList.add("pointer");
        });
        nextButton.addEventListener("mouseout", function(){
            nextButton.classList.remove("pointer");
        });
    }
    changeCursor();
    
    //Jedno z submenu jest celowo wysuwane jedynie za pomocą CSS-a, poniższa funkcja dotyczy drugiegu z elementów menu i jego podmenu
    
    function showHideSubMenu() {
        var gallery = document.querySelector(".gallery");
        var submenu = gallery.children[0];
        
        gallery.addEventListener("mouseover", function(){
            submenu.classList.add("visible");
        });
        
        gallery.addEventListener("mouseout", function(){
            this.children[0].classList.remove("visible");
        }); 
        
        submenu.addEventListener("mouseout", function(){
            submenu.classList.remove("visible");
        });
    }
    showHideSubMenu();
});