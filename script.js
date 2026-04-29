function SUMA() {
    let a = Number(document.getElementById('liczba1').value);
    let b = Number(document.getElementById('liczba2').value);
    document.getElementById('wynik1').innerHTML = "Suma: " + (a + b);
}

function PODSTAWY() {///////////////
    let a = Number(document.getElementById('liczba3').value);
    let b = Number(document.getElementById('liczba4').value);
    document.getElementById('wynik2').innerHTML = "Różnica: " + (a - b);
    document.getElementById('wynik2').innerHTML += "<br>Iloczyn:  " + a * b;
    if (b !== 0) {
        let iloraz = a / b;
        return iloraz
    } else {
        "Błąd (dzielenie przez zero)";
    }
    document.getElementById("wynik2").innerHTML += "Iloraz:  " + iloraz;
}

function KALKULATOR() {//////////
    let a = Number(document.getElementById('liczba5').value);
    let b = Number(document.getElementById('liczba6').value);
    let operacja = prompt("Wybierz działanie (+, -, * , /):");
    let wynik;
    switch(operacja) {
        case '+': wynik = a + b; break;
        case '-': wynik = a - b; break;
        case '*': wynik = a * b; break;
        case '/': wynik = b !== 0 ? a / b : "Błąd (dzielenie przez 0)"; break;
        default: wynik = "Nieznana operacja";
    }
    document.getElementById("wynik3").innerHTML = "Wynik: " + wynik;
}

function MAKS() {
    let a = Number(document.getElementById('liczba7').value);
    let b = Number(document.getElementById('liczba8').value);
    let c = Number(document.getElementById('liczba9').value);
    let max = Math.max(a, b, c);
    document.getElementById("wynik4").innerHTML = "Największa liczba to: " + max;
}

function WZROST() {
    let h = Number(document.getElementById('liczba10').value);
    if (h < 150) {
        document.getElementById("wynik5").innerHTML = "Niski";
    } else if (h > 180) {
        document.getElementById("wynik5").innerHTML = "Wysoki";
    } else {
        document.getElementById("wynik5").innerHTML = "Średni";
    }
}

function BMI() {
    let h = Number(document.getElementById('liczba11').value);
    h = h / 100;
    let w = Number(document.getElementById('liczba12').value);
    let bmi = w / (h * h);
    let komentarz = "";
    if (bmi < 18.5) komentarz = "za mało!";
    else if (bmi > 25) komentarz = "za dużo!";
    else komentarz = "OK!";
    document.getElementById("wynik6").innerHTML = "BMI: " + bmi.toFixed(2) + " - " + komentarz;
}

function STARSZY() {////////////html
    let data1 = new Date(document.getElementById("data1").value);
    let data2 = new Date(document.getElementById("data2").value);
    if (data1 < data2) {
        document.getElementById("wynik7").innerHTML = "Pierwsza osoba jest starsza";
    } else if (data1 > data2) {
        document.getElementById("wynik7").innerHTML = "Druga osoba jest starsza";
    } else {
        document.getElementById("wynik7").innerHTML = "Są w tym samym wieku";
    }
}

function PRZESTEPNY(rok) {
    if ((rok % 4 === 0 && rok % 100 !== 0) || (rok % 400 === 0)) {
        console.log(rok + " jest przestępny");
    } else {
        console.log(rok + " nie jest przestępny");
    }
}

function SILA() {
    let h = document.getElementById("haslo").value;
    let msg = "hasło mocne";
    if (h.length < 8) {
        msg = "hasło średnie";
    } else if (h.length <= 4) {
        msg = "hasło słabe";
    }
    let hasDigit = /\d/.test(h);
    let hasUpper = /[A-Z]/.test(h);
    let hasLower = /[a-z]/.test(h);
    let hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(h);
    if (!hasDigit || !hasUpper || !hasLower || !hasSpecial) {
        msg = "hasło słabe";
    }
    document.getElementById("wynik9").innerText = "Siła: " + msg;
}

function TROJKAT() {
    let a = Number(document.getElementById('liczba13').value);
    let b = Number(document.getElementById('liczba14').value);
    let c = Number(document.getElementById('liczba15').value);
    if (a + b > c && a + c > b && b + c > a) {
        console.log("Można utworzyć trójkąt");
    } else {
        console.log("Nie można utworzyć trójkąta");
    }
}

function SZYFR() {
    let tekst = document.getElementById("tekst").value;
    let wynik = "";
    let alfabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < tekst.length; i++) {
        let litera = tekst[i].toLowerCase();
        let index = alfabet.indexOf(litera);
        if (index !== -1) {
            let nowyIndex = (index + 2) % 26;
            wynik += alfabet[nowyIndex];
        } else {
            wynik += litera;
        }
    }
    document.getElementById("wynik11").innerText = wynik;
}