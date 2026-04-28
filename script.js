function SUMA() {
    let a = parseInt(prompt("Podaj pierwszą liczbę całkowitą:"));
    let b = parseInt(prompt("Podaj drugą liczbę całkowitą:"));
    alert("Suma: " + (a + b));
}

function PODSTAWY() {
    let a = parseFloat(prompt("Podaj liczbę a:"));
    let b = parseFloat(prompt("Podaj liczbę b:"));
    console.log("Różnica:", a - b);
    console.log("Iloczyn:", a * b);
    console.log("Iloraz:", b !== 0 ? a / b : "Nie dziel przez zero!");
}

function KALKULATOR() {
    let a = parseFloat(prompt("Podaj pierwszą liczbę:"));
    let b = parseFloat(prompt("Podaj drugą liczbę:"));
    let operacja = prompt("Wybierz działanie (+, -, *, /):");
    let wynik;

    switch(operacja) {
        case '+': wynik = a + b; break;
        case '-': wynik = a - b; break;
        case '*': wynik = a * b; break;
        case '/': wynik = b !== 0 ? a / b : "Błąd (dzielenie przez 0)"; break;
        default: wynik = "Nieznana operacja";
    }
    document.getElementById("wynik").innerHTML = "Wynik: " + wynik;
}

function MAKS() {
    let a = parseFloat(prompt("Podaj pierwszą liczbę:"));
    let b = parseFloat(prompt("Podaj drugą liczbę:"));
    let c = parseFloat(prompt("Podaj trzecią liczbę:"));
    let max = Math.max(a, b, c);
    alert("Największa liczba to: " + max);
}

function WZROST() {
    let h = parseInt(prompt("Podaj wzrost w cm:"));
    if (h < 150) alert("Niski");
    else if (h > 180) alert("Wysoki");
    else alert("Średni");
}

function BMI() {
    let h = parseFloat(prompt("Podaj wzrost w cm:")) / 100;
    let w = parseFloat(prompt("Podaj wagę w kg:"));
    let bmi = w / (h * h);
    let komentarz = "";

    if (bmi < 18.5) komentarz = "za mało!";
    else if (bmi > 25) komentarz = "za dużo!";
    else komentarz = "OK!";

    document.getElementById("wynik").innerHTML = `BMI: ${bmi.toFixed(2)} - ${komentarz}`;
}

function STARSZY() {
    let d1 = new Date(document.getElementById("data1").value);
    let d2 = new Date(document.getElementById("data2").value);

    if (d1 < d2) alert("Pierwsza osoba jest starsza");
    else if (d1 > d2) alert("Druga osoba jest starsza");
    else alert("Są w tym samym wieku");
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
    let info = document.getElementById("info");
    let msg = "hasło mocne";

    if (h.length < 8) msg = "hasło średnie";
    if (h.length <= 4) msg = "hasło słabe";

    let hasDigit = /\d/.test(h);
    let hasUpper = /[A-Z]/.test(h);
    let hasLower = /[a-z]/.test(h);
    let hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(h);

    if (!hasDigit || !hasUpper || !hasLower || !hasSpecial) {
        msg = "hasło słabe";
    }

    info.innerText = "Siła: " + msg;
}

function TROJKAT() {
    let a = parseInt(prompt("Bok a:"));
    let b = parseInt(prompt("Bok b:"));
    let c = parseInt(prompt("Bok c:"));

    if (a + b > c && a + c > b && b + c > a) {
        console.log("Można utworzyć trójkąt");
    } else {
        console.log("Nie można utworzyć trójkąta");
    }
}

function SZYFR() {
    let input = document.getElementById("tekst").value;
    let wynik = "";
    let alfabet = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < input.length; i++) {
        let litera = input[i].toLowerCase();
        let index = alfabet.indexOf(litera);

        if (index !== -1) {
            let nowyIndex = (index + 2) % 26;
            wynik += alfabet[nowyIndex];
        } else {
            wynik += litera;
        }
    }
    document.getElementById("zaszyfrowane").innerText = wynik;
}