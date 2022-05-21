window.addEventListener('load', () => {AOS.init({duration: 1000,easing: 'ease-in-out',once: true,mirror: false})});
const onscroll = (el, listener) => {el.addEventListener('scroll', listener)}
let backtotop = document.querySelector('.back-to-top')
if (backtotop) {const toggleBacktotop = () => {if (window.scrollY > 100) {backtotop.classList.add('active')} else {backtotop.classList.remove('active')}};window.addEventListener('load', toggleBacktotop);onscroll(document, toggleBacktotop);}
const body = document.querySelector("body"),nav = document.querySelector("nav"),alterarModo = document.querySelector(".dark-light"),abrirMenu = document.querySelector(".abrirMenu"),fecharMenu = document.querySelector(".fecharMenu");
let getMode = localStorage.getItem("mode");
if(getMode && getMode === "dark-mode"){body.classList.add("dark");alterarModo.classList.toggle("active")}
alterarModo.addEventListener("click" , () =>{alterarModo.classList.toggle("active");body.classList.toggle("dark");
if(!body.classList.contains("dark")){localStorage.setItem("mode" , "light-mode")}
else{localStorage.setItem("mode" , "dark-mode")}})
abrirMenu.addEventListener("click" , () =>{nav.classList.add("active")})
body.addEventListener("click" , e =>{let clickedElm = e.target;
if(!clickedElm.classList.contains("abrirMenu") && !clickedElm.classList.contains("menu")){nav.classList.remove("active")}})