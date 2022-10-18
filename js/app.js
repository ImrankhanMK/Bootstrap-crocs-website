var menuBtn= document.getElementById("menuBtn");
var sideNav= document.getElementById("sideNav");
var menu= document.getElementById("menu");
sideNav.style.right = "-250px";

menuBtn.onclick = function(){
    if(sideNav.style.right =="-250px"){
        sideNav.style.right = "0px";
        menu.src="images/close.png";
        menu.style.border = "3px solid black";
    }else{
        sideNav.style.right = "-250px";
        menu.src="images/menu.png"
        menu.style.border = "1px solid green";
    }
}