// Ustaw hasło
const PASSWORD = "11223344"; // Zmień na własne hasło

// Funkcja logowania
function login() {
    const passwordInput = document.getElementById("password").value;
    if (passwordInput === PASSWORD) {
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("appSection").style.display = "block";
    } else {
        alert("Błędne hasło. Spróbuj ponownie.");
    }
}

// Funkcja do obliczania dni do końca ubezpieczenia
function getDaysLeft(endDate) {
    const today = new Date();
    const end = new Date(endDate);
    const timeDiff = end - today;
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

// Funkcja do dodawania samochodu
function addCar() {
    const carName = document.getElementById("carName").value;
    const insuranceEndDate = document.getElementById("insuranceEndDate").value;

    if (!carName || !insuranceEndDate) {
        alert("Proszę wprowadzić nazwę samochodu oraz datę ubezpieczenia.");
        return;
    }

    const daysLeft = getDaysLeft(insuranceEndDate);
    const carList = document.getElementById("cars");
    const listItem = document.createElement("li");

    if (daysLeft > 0) {
        listItem.className = "green";
        listItem.textContent = `${carName}: ubezpieczenie kończy się za ${daysLeft} dni (do ${insuranceEndDate}).`;
    } else if (daysLeft === 0) {
        listItem.className = "orange";
        listItem.textContent = `${carName}: ubezpieczenie kończy się dzisiaj (${insuranceEndDate})!`;
    } else {
        listItem.className = "red";
        listItem.textContent = `${carName}: ubezpieczenie wygasło ${-daysLeft} dni temu (do ${insuranceEndDate}).`;
    }

    carList.appendChild(listItem);
    document.getElementById("carName").value = '';
    document.getElementById("insuranceEndDate").value = '';
}

// Ustawienie zdarzeń dla przycisków
document.getElementById("loginButton").addEventListener("click", login);
document.getElementById("addCarButton").addEventListener("click", addCar);
