var aside = document.querySelector('aside');
var origOffsetY = aside.offsetTop;

function onScroll(e) {
  window.scrollY >= origOffsetY ? aside.classList.add('fixed') :
                                  aside.classList.remove('fixed');
}

document.addEventListener('scroll', onScroll);