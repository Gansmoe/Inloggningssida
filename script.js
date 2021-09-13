const body = document.getElementById("body");



function loginPage() {
    body.innerHTML = ""
    let user = document.createElement("input");
    user.type = "text";
    user.id = "user";
    body.appendChild(user);

    let psw = document.createElement("input");
    psw.type = "text";
    psw.id = "psw";
    body.appendChild(psw);

    let btn = document.createElement("button");
    btn.id = "inBtn";
    btn.innerHTML = "Logga in";
    body.appendChild(btn);

    const inBtn = document.getElementById("inBtn");

    inBtn.addEventListener("click", function () {
        const user = document.getElementById("user").value;
        const psw = document.getElementById("psw").value;

        logIn(user, psw);

    });

};

function logOutReset() {
    localStorage.removeItem("username");
    loginPage();
}

function checkUser() {
    const user = localStorage.getItem("username");

    if (user) {
        const psw = "1234";
        logIn(user, psw);
    }
    else {
        loginPage();
    }
};

function logIn(user, psw) {
    if (user == "test" && psw == "1234") {

        body.innerHTML = ""
        let myText = document.createElement("p");
        myText.innerText = "Du är inloggad";
        body.appendChild(myText);

        let logOut = document.createElement("button");
        logOut.id = "logOut";
        logOut.innerText = "Logga ut";
        body.appendChild(logOut);

        localStorage.setItem("username", user);

        let logOutBtn = document.getElementById("logOut");

        logOutBtn.addEventListener("click", logOutReset)

    }
    else {
        body.innerHTML = "<p>Fel lösenord eller användarnamn, vänligen försök igen</P>";

        const backBtn = document.createElement("button");
        backBtn.innerText = "Tillbaka";
        body.appendChild(backBtn);
        backBtn.addEventListener("click", loginPage)
    }
};

checkUser();