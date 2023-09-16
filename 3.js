console.log("pagina cargada...");

function message() {
    alert("A Ninja le gusto!");
}
function login(element) {
    if(element.innerText == "iniciar session") {
        element.innerText = "cerar session";
    } else {
        element.innerText = "entrar";
    }
}

function hide(el) {
    el.remove();
}
