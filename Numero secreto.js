function adivinar() {
    let numero1 = prompt("Ingresa el número:");
    numero1 = Number(numero1);
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    if (intento == numeroSecreto) {
        alert("El número es correcto.");
    } else {
        alert("El número no es correcto, era" + numeroSecreto);
    }
});
}
