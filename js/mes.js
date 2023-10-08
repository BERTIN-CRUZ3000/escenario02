function calcularDias() {
    // Obtener el valor del mes y el año ingresados por el usuario
    const mes = parseInt(document.getElementById("mes").value);
    const anio = parseInt(document.getElementById("anio").value);

    // Febrero: Verificar si es un año bisiesto
    if (mes >= 1 && mes <= 12 && anio >= 0) {
        let diasEnElMes;

        switch (mes) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                diasEnElMes = 31; // los meses de dia 31
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                diasEnElMes = 30;// los meses de dia 30
                break;
            case 2:
                // Febrero: Verificar si es un año bisiesto
                if ((anio % 4 == 0 && anio % 100 != 0) || (anio % 400 == 0)) {
                    // Año bisiesto
                    diasEnElMes = 29;
                } else {
                    diasEnElMes = 28;
                }
                break;
        }
        // Mostrar el resultado
        document.getElementById("resultado").textContent = `El mes ${mes} en el año ${anio} tiene ${diasEnElMes} días.`;
    } else {
        // Mostrar un mensaje de error si la entrada es inválida
        document.getElementById("resultado").textContent = "Ingrese valores válidos para el mes (1-12)";
    }
}