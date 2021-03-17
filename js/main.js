var aside = document.querySelector('aside');
var origOffsetY = aside.offsetTop;
var navBTN = document.getElementById("hamburger");

var navlist = document.getElementById("navList")
function onScroll(e) {
  window.scrollY >= origOffsetY ? aside.classList.add('fixed') :
                                  aside.classList.remove('fixed');
}

document.addEventListener('scroll', onScroll);


navBTN.addEventListener('click', ()=>{
  if(navlist.style.right < "-20vw"){
    navlist.style.right = "-5vw"
    navBTN.innerHTML ="<h1>X</h1>"
  }else{
    navlist.style.right = "-110vw"
    navBTN.innerHTML ="<div id='hamburger1'></div><div id='hamburger2'></div><div id='hamburger3'></div>"
  }
});