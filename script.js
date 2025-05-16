function obliczRate() {
    var checkbox1 = document.getElementById("kurs1");
    var checkbox2 = document.getElementById("kurs2");
    var ratyInput = document.getElementById("raty");
    var miasto = document.getElementById("lista").value;
    var wynikElement = document.getElementById("wynik");

    var suma = 0;

    if (!checkbox1.checked && !checkbox2.checked) {
        wynikElement.innerText = "Wybierz jeden z kursów";
        return;
    }

    var raty = parseInt(ratyInput.value);
    if (isNaN(raty) || raty < 2) {
        wynikElement.innerText = "Wpisz conajmniej 2";
        return;
    }

    if (checkbox1.checked) {
        suma += 5000;
    }

    if (checkbox2.checked) {
        suma += 3000;
    }

    var rata = Math.round(suma / raty);

    var wynik = 'Kurs odbędzie się w ' + miasto + '. Koszt całkowity: ' + suma + ' zł. Płacisz ' + raty + ' rat po ' + rata + ' zł.';
    wynikElement.innerText = wynik;
}
