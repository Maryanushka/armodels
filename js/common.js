jQuery(document).ready(function(){
   
    // change photos on home page
    var path = window.location.pathname;
    if(path == "/"){
        var changable = document.getElementsByClassName("change-image");

        setInterval(() => {
        var random = getRandomInt(4,9);
        var random1 = getRandomInt(0,3);
                // console.log(random,random1);

                if(changable[random] && changable[random1]){
                    changable[random].classList.remove("opacity");
                    changable[random1].classList.remove("opacity");
                }
                // changable[random].classList.remove("opacity");
                // changable[random1].classList.remove("opacity");
                add(random,random1);     
        }, 3000);
        function add(random,random1) {
            setTimeout(() => {
                if(changable[random] && changable[random1]){
                    changable[random].classList.add("opacity");
                    changable[random1].classList.add("opacity");
                }
                // changable[random].classList.add("opacity");
                // changable[random1].classList.add("opacity");
            }, 3000);
        }
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
    else if (path == "/works.html"){
        var a = document.querySelector(".tabs");
        a.addEventListener("click", function (e) {
            e.preventDefault()
           var ths = e.target;
           var tagname = ths.tagName;
           console.log(tagname)
           var id = ths.getAttribute("href");
        //    ths.classList.add("active-tab")
          if(tagname !== 'LI' && tagname !== 'UL'){
                if(id == "#man" && tagname == 'A'){
                    document.getElementById("man").classList.add("active");
                    document.getElementById("woman").classList.remove("active");
                    ths.parentNode.nextElementSibling.children[0].classList.remove("active-tab");
                    ths.classList.add("active-tab");
            }
            else if(id == "#woman" && tagname == 'A'){
                    document.getElementById("woman").classList.add("active");
                    document.getElementById("man").classList.remove("active");
                    ths.parentNode.previousElementSibling.children[0].classList.remove("active-tab");
                    ths.classList.add("active-tab");
                }  
          }
        });
    }
    //   include parts of html
    $("#header-html").load("module-html/header.html");
    $("#footer").load("module-html/footer.html");
      
   
   
         
       
       
       
    //    .classList
 
   var screen = window.screen.width;
//    if(screen < 576){
        // (function(){
            window.onload =  function () {
                var burger = document.getElementById('burger'),
                header = document.querySelector('.header'),
                dot = document.querySelector('span.active-item-pointer');
        
        
                burger.addEventListener("click", function () {
                    console.log("click")
                    header.classList.toggle('menu-opened');
                    dot.classList.toggle('display');
                });
            }
            
               
            
        // }());
//    }

});
  
    
