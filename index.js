//document.querySelector("button").addEventListener("click",onclick);
for(var i=0;i<7;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

var buttonl = this.innerHTML;
makeSound(buttonl);
buttonAnimation(buttonl);
});}
document.addEventListener("keypress",function(){
  makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound(key)
     {switch (key) {
       case "w":
       var soundw = new Audio("tom-1.mp3");
       soundw.play();
         break;
         case "a":
         var sound2 = new Audio("tom-2.mp3");
         sound2.play();
           break;
           case "s":
           var sound3 = new Audio("tom-3.mp3");
           sound3.play();
             break;
          case "d":
          var sound4 = new Audio("tom-4.mp3");
          sound4.play();
            break;
         case "j":
         var sound5 = new Audio("snare.mp3");
         sound5.play();
           break;
        case "k":
        var sound6 = new Audio("crash.mp3");
        sound6.play();
          break;
       case "l":
       var sound7 = new Audio("kick-bass.mp3");
       sound7.play();
         break;

       default: console.log(this.innerHTML);
}}
function buttonAnimation(currentkey)
{
var saku= document.querySelector("." + currentkey);
saku.classList.add("pressed");
setTimeout(function(){
  saku.classList.remove("pressed");
},100);
}
