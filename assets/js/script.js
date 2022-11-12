var header = document.querySelector(".header");


window.onscroll = function() {headerFunction()}


function headerFunction() {
    if (window.pageYOffset > 250) {
      header.classList.add("sticky-first");
    } else {
      header.classList.remove("sticky-first");
    }
     if (window.pageYOffset > 430) {
        header.classList.add("sticky-second");
      } else {
        header.classList.remove("sticky-second");
      }
}

