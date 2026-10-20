function sumar(){
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;
    const resultado = document.getElementById("resultado");

    console.log("Número 1:", numero1);
    console.log("Número 2", numero2);

    const suma = parseFloat (numero1) + parseFloat (numero2);
    console.log("Resultado suma:", suma);
    resultado.value = suma;
}

function restar(){
    const numero1 =document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;
    const resultado = document.getElementById("resultado");

    console.log("Número 1:", numero1);
    console.log("Número2", numero2);

    const resta = parseFloat (numero1) - parseFloat (numero2);
    console.log ("Resultado resta:", resta);
    resultado.value = resta; 
}

function division(){
    const numero1 = document.getElementById("numero1").value;
    const numero2= document.getElementById("numero2").value;
    const resultado = document.getElementById("resultado");

    console.log ("Número 1", numero1);
    console.log ("Número 2", numero2);

    const division = parseFloat (numero1) / parseFloat (numero2);
    console.log ("Resultado division:", division);
    resultado.value = division;
}

function multiplicacion(){
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;
    const resultado = document.getElementById("resultado");

    console.log ("Número 1", numero1);
    console.log("Número 2", numero2);

    const multiplicacion = parseFloat (numero1) * parseFloat (numero2);
    console.log("Resultado multiplicacion:", multiplicacion);
    resultado.value = multiplicacion;

}