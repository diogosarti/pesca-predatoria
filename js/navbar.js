const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      alterarModo = document.querySelector(".dark-light"),
      abrirMenu = document.querySelector(".abrirMenu"),
      fecharMenu = document.querySelector(".fecharMenu")

let getMode = localStorage.getItem("mode")

if(getMode && getMode === "dark-mode"){
    body.classList.add("dark")
    alterarModo.classList.toggle("active")
}

// alternar o modo escuro e claro
alterarModo.addEventListener("click" , () =>{
    alterarModo.classList.toggle("active")
    body.classList.toggle("dark")
    // js para manter o modo selecionado pelo usuário, mesmo atualização de página ou reabertura de arquivo
    if(!body.classList.contains("dark")){
        localStorage.setItem("mode" , "light-mode")
    }else{
        localStorage.setItem("mode" , "dark-mode")
    }
})
      
// alternar a barra lateral
abrirMenu.addEventListener("click" , () =>{
    nav.classList.add("active")
})

body.addEventListener("click" , e =>{
    let clickedElm = e.target

    if(!clickedElm.classList.contains("abrirMenu") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active")
    }
})