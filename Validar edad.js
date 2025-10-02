function calcular() {
    let numero1 = prompt("Ingresa el primer número:");
    let numero2 = prompt("Ingresa el segundo número:");
    numero1 = Number(numero1);
    numero2 = Number(numero2);
    if (!isNaN(numero1) && !isNaN(numero2)) {
    let suma = numero1 + numero2;
    if (suma < 18) {
        alert("Error: No tienes la suficiente edad!");
    } else if (suma > 18) {
        alert("Aceptado: Bienvenido a la página.");
    } else {
        alert("Aceptado: Bienvenido a la página.");
    }
} else {
    alert("Debes ingresar solo valores numéricos.");
}
}