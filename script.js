const body = document.getElementById("body");



function loginPage() {
    let createDiv = document.createElement("div");
    createDiv.id = "div";
    body.appendChild(createDiv);
    const div = document.getElementById("div");

    let user = document.createElement("input");
    user.type = "text";
    user.id = "user";
    div.appendChild(user);

    let psw = document.createElement("input");
    psw.type = "text";
    psw.id = "psw";
    div.appendChild(psw);

    let btn = document.createElement("button");
    btn.id = "inBtn";
    btn.innerHTML = "Logga in";
    div.appendChild(btn);

    const inBtn = document.getElementById("inBtn");

    inBtn.addEventListener("click", function () {
        const user = document.getElementById("user").value;
        const psw = document.getElementById("psw").value;

        deleteDiv();
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

        let createDiv = document.createElement("div");
        createDiv.id = "div";
        body.appendChild(createDiv);
        const div = document.getElementById("div");

        let myText = document.createElement("p");
        myText.innerText = "Du är inloggad";
        div.appendChild(myText);

        let logOut = document.createElement("button");
        logOut.id = "logOut";
        logOut.innerText = "Logga ut";
        div.appendChild(logOut);

        localStorage.setItem("username", user);

        let logOutBtn = document.getElementById("logOut");

        logOutBtn.addEventListener("click", function () {
            deleteDiv();
            logOutReset();
        })

    }
    else {
        let createDiv = document.createElement("div");
        createDiv.id = "div";
        body.appendChild(createDiv);
        const div = document.getElementById("div")

        const failedText = document.createElement("p");
        failedText.innerText = "Fel lösenord eller användarnamn, vänligen försök igen"
        div.appendChild(failedText);
        const backBtn = document.createElement("button");
        backBtn.innerText = "Tillbaka";
        div.appendChild(backBtn);
        backBtn.addEventListener("click", function () {
            deleteDiv();
            loginPage();

        });
    }
};

function deleteDiv() {
    const divDelete = document.getElementById("div");
    divDelete.remove();
}

function createDiv() {
    let createDiv = document.createElement("div");
    createDiv.id = "div";
    body.appendChild(createDiv);
}

checkUser();