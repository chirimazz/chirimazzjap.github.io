document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });

    document.getElementById('registrado').innerHTML=localStorage.getItem('user'); /*llamar al elemento del logalSorge*/
});

function cerrarSesion(){

    localStorage.removeItem("user");
    window.location = "login.html";
    //document.getElementById('registrado').innerHTML="Ingresar";


}