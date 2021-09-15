const body = document.getElementById("body");



function loginPage() {
    createDiv();
    const div = document.getElementById("div");

    const user = document.createElement("input");
    user.type = "text";
    user.id = "user";
    div.appendChild(user);

    const psw = document.createElement("input");
    psw.type = "text";
    psw.id = "psw";
    div.appendChild(psw);

    const btn = document.createElement("button");
    btn.id = "inBtn";
    const text = document.createTextNode("Logga in");
    btn.appendChild(text);
    div.appendChild(btn);

    const inBtn = document.getElementById("inBtn");

    inBtn.addEventListener("click", function () {
        const user = document.getElementById("user").value;
        const psw = document.getElementById("psw").value;

        deleteDiv();
        logIn(user, psw);


    })
}
// Kod för att generera inloggningssidan och göra inloggningsförsök

function logOutReset() {
    localStorage.removeItem("username");
    loginPage();
}
// Kod för att logga ut från sidan och ta bort användarnamnet ur localstorage

function checkUser() {
    const user = localStorage.getItem("username");

    if (user) {
        const psw = "1234";
        logIn(user, psw);
    }
    else {
        loginPage();
    }
}
// Kontroll om användaren är inloggad redan, är den inte det skickas den till inloggningssidan

function logIn(user, psw) {
    if (user == "test" && psw == "1234") {

        createDiv();
        const div = document.getElementById("div");

        const myText = document.createElement("p");
        const text = document.createTextNode("Du är inloggad");
        myText.appendChild(text);
        div.appendChild(myText);

        const logOut = document.createElement("button");
        logOut.id = "logOut";
        const btnText = document.createTextNode("Logga ut");
        logOut.appendChild(btnText);
        div.appendChild(logOut);

        localStorage.setItem("username", user);

        const logOutBtn = document.getElementById("logOut");

        logOutBtn.addEventListener("click", function () {
            deleteDiv();
            logOutReset();
        }) // Genererar en sida vid lyckad inloggning

    }
    else {

        createDiv();
        const div = document.getElementById("div");

        const failedText = document.createElement("p");
        const text = document.createTextNode("Fel lösenord eller användarnamn, vänligen försök igen");
        failedText.appendChild(text);
        div.appendChild(failedText);

        const backBtn = document.createElement("button");
        const btnText = document.createTextNode("Tillbaka");
        backBtn.appendChild(btnText); 
        div.appendChild(backBtn);

        backBtn.addEventListener("click", function () {
            deleteDiv();
            loginPage();

        })// Genererar en sida för misslyckad inloggning
    }
};

function deleteDiv() {
    const divDelete = document.getElementById("div");
    divDelete.remove();
} // Funktion för att ta bort HTML

function createDiv() {
    let createDiv = document.createElement("div");
    createDiv.id = "div";
    body.appendChild(createDiv);
} // Funktion för att lägga till en div

checkUser();