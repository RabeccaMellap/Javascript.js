  var slide_index = 1;  
        displaySlides(slide_index);  
  
        function nextSlide(n) {  
            displaySlides(slide_index += n);  
        }  
  
        function currentSlide(n) {  
            displaySlides(slide_index = n);  
        } 
        function next(n) {
            displaySlides(slide_index = n);
        }
  

        function displaySlides(n) {  
            var i;  
            var itemActive = document.getElementsByClassName("carousel-inner");  
            if (n > itemActive.length) { slide_index = 1 }  
            if (n < 1) { slide_index = itemActive.length }  
            for (i = 0; i < itemActive.length; i++) {  
                itemActive[i].style.display = "none";  
            }  
            itemActive[slide_index - 1].style.display = "block"; 

        } 
        function next(n) {
            var i;
            var itemActive = document.getElementsByClassName("next");
            if (n > itemActive.length) { slide_index = 1 }
                if (n < 1) { slide_index = itemActive.length }
                    for (i = 0; i < itemActive.length; i++ ) {
                        itemActive[i].style.display = "none"
                    }
                    itemActive[slide_index - 1].style.display ="block"
        }