function obliczRate() {
    var checkbox1 = document.getElementById("kurs1");
    var checkbox2 = document.getElementById("kurs2");
    var raty = parseInt(document.getElementById("raty").value);
    var miasto = document.getElementById("lista").value;

    var suma = 0;


    if (checkbox1.checked) {
        suma += 5000;
    }

    if (checkbox2.checked) {
        suma += 3000;
    }

    var rata = suma / raty;

    rata = Math.round(rata);

    var wynik = 'Kurs odbędzie się w ' + miasto + '. Koszt całkowity: ' + suma + ' zł. Płacisz ' + raty + ' rat po ' + rata + ' zł.';

    document.getElementById("wynik").innerText = wynik;
}
