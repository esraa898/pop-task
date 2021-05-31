var myImages =  Array.from(document.querySelectorAll(".content img"));
var layout = document.querySelector(".layout");
var layoutcont =document.querySelector(".cont-layout");
  var prev = document.getElementById("prev");
   var next = document.getElementById("next");
   var close = document.getElementById("close");
  var imgeIndex=0;

for (var i=0 ; i < myImages.length ; i++)
{
   myImages[i].addEventListener ( "click",show)
  
};


function show (e){
      var imgSrc = e.target.src;
      layoutcont.style.display="flex";
      layout.firstElementChild.style.backgroundImage ="url("+imgSrc+") ";
     imgIndex= myImages.indexOf(e.target);             
   }

   close.addEventListener( "click", function(){
    layoutcont.style.display="none";
   });

   next.addEventListener( "click", nextImg);
function nextImg(){
      var x= imgeIndex++ ;
      
       layout.firstElementChild.style.backgroundImage ="url("+myImages[imgeIndex].src+")";}

 



