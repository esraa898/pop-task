var myImages =  Array.from(document.querySelectorAll(".content img"));
var layout = document.querySelector(".cont-layout");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var closeX = document.getElementById("close");
var mouse = document.getElementById("mouse");
var up = document.getElementById("up");
var imgeIndex=0;

for (var i=0 ; i < myImages.length ; i++)
{
   myImages[i].addEventListener ( "click",show)
  
};

 closeX.addEventListener( "click",closeImg);
 prev.addEventListener( "click", prevImg);
 next.addEventListener( "click", nextImg);
 document.addEventListener("keydown", borad);
 document.addEventListener("mousemove" , move);
 window.onscroll = function (){
   if (window.pageYOffset >= 300){
     up.style.display= "block";}
     else {
      up.style.display= "none";
     }
 }
 up.addEventListener("click",scroll);


function show (e){
      var imgSrc = e.target.src;
      layout.style.transform="scale(1,1)";
      layout.firstElementChild.style.backgroundImage ="url("+imgSrc+") ";
      imgIndex= myImages.indexOf(e.target);      
   }

function closeImg(){
    layout.style.transform="scale(0,0)";
   };

function nextImg(){
       imgeIndex++ ;
      if ( imgeIndex == myImages.length){
            imgeIndex=0;
      }
       layout.firstElementChild.style.backgroundImage ="url("+myImages[imgeIndex].src+")";
      }

function prevImg (){
     imgeIndex--;
     if (imgeIndex < 0 ){
           imgeIndex=myImages.length-1
     }
     layout.firstElementChild.style.backgroundImage ="url("+myImages[imgeIndex].src+")";
 }
  
function borad(e){
   if (e.key == "ArrowLeft"){
       prevImg();
   }else if (e.key == "ArrowRight"){
     nextImg();
   }
   else if(e.key == " "){
       closeImg();
   }
   else if (e.key == "Escape"){
    closeImg();
   }
  };
function move(e){
var x = e.clientX;
var y = e.clientY;
mouse.style.top= y+"px";
mouse.style.left= x+"px";

}
function scroll(){
  window.scrollTo(0,0);}



