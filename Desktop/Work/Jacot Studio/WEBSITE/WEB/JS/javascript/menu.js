const burger_ic = document.getElementById("nav-mobile");
const mobile_menu = document.getElementById("menu-sm-active")
const social_ic_sm = document.getElementById("social_xs_sm")

burger_ic.addEventListener('click',togglemenu);
function togglemenu() {
    burger_ic.classList.toggle("is-active");
    mobile_menu.classList.toggle("menu-sm-active");
    social_xs_sm.classList.toggle("social_xs_sm_active");
}