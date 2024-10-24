// menu
let burger_icon= document.querySelector(".burger-icon");
let burger_menu = document.querySelector(".burger-menu");

burger_icon.addEventListener('click',function(){
  
if(burger_menu.style.display === 'none' ){
    burger_menu.style.display = 'flex';
    burger_icon.style.transform='rotate(90deg)'

    // burger_icon.classList.add("rotate-90-burger")
}else{
    burger_menu.style.display = 'none';
    burger_icon.classList.remove("rotate-90-burger")
    burger_icon.style.transform='rotate(0deg)'



}
})