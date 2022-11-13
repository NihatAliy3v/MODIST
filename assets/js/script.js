var header = document.querySelector(".header");
var productCount1 = document.querySelector(".count1");
var productCount2 = document.querySelector(".count2");
var productBtn1 = document.querySelector(".btn1");
var productBtn2 = document.querySelector(".btn2");
var totalSalary1 = document.querySelector(".total-salary1")
var totalSalary2 = document.querySelector(".total-salary2")
var price1 = document.querySelector(".body-price1");
var price2 = document.querySelector(".body-price2");



// header
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

// product
productBtn1.addEventListener("click",function(event){
    
    totalSalary1.innerHTML = productCount1.value*price1.innerHTML;
    
    event.preventDefault();
});
productBtn2.addEventListener("click",function(event){
    
    totalSalary2.innerHTML = productCount2.value*price2.innerHTML;
    
    event.preventDefault();
});