const boton = document.getElementById("mi_boton");

boton.addEventListener('click', () =>{
    boton.textContent = "Si funciona";
    boton.style.backgroundColor = "red"

    console.log("Clic:", new Date().toLocaleDateString());
}
);