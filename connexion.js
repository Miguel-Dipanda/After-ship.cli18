// CONNEXION
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const error = document.getElementById("loginError");

    if (email === "" || password === "") {
        error.textContent = "Tous les champs sont obligatoires.";
        return;
    }

   

    if (password.length < 6) {
        error.textContent = "Le mot de passe doit contenir au moins 6 caractères.";
        return;
    }

    error.style.color = "green";
    error.textContent = "Connexion réussie ✔";
});

// INSCRIPTION
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value.trim();
    const confirm = document.getElementById("confirmPassword").value.trim();
    const error = document.getElementById("registerError");

    if (name === "" || email === "" || password === "" || confirm === "") {
        error.textContent = "Tous les champs sont obligatoires.";
        return;
    }

   

    if (password.length < 6) {
        error.textContent = "Mot de passe trop court (min 6 caractères).";
        return;
    }

    if (password !== confirm) {
        error.textContent = "Les mots de passe ne correspondent pas.";
        return;
    }

    error.style.color = "green";
    error.textContent = "Inscription réussie ✔";
});
// BOUTONS
const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");

// FORMULAIRES
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

// ----- SWITCH CONNEXION / INSCRIPTION -----
loginTab.addEventListener("click", () => {
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
});

registerTab.addEventListener("click", () => {
    registerTab.classList.add("active");
    loginTab.classList.remove("active");
    registerForm.classList.add("active");
    loginForm.classList.remove("active");
});

// ----- VALIDATION CONNEXION -----
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const error = document.getElementById("loginError");

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
        error.textContent = "Aucun compte trouvé. Inscris-toi d’abord.";
        return;
    }

    if (email !== savedUser.email || password !== savedUser.password) {
        error.textContent = "Telephone ou mot de passe incorrect.";
        return;
    }

    error.style.color = "green";
    error.textContent = "Connexion réussie ✔ Redirection...";

    setTimeout(() => {
        window.location.href = "NumSuivi.html";
    }, 1000);
});

// ----- VALIDATION INSCRIPTION -----
registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value.trim();
    const confirm = document.getElementById("confirmPassword").value.trim();
    const error = document.getElementById("registerError");

    if (name === "" || email === "" || password === "" || confirm === "") {
        error.textContent = "Tous les champs sont obligatoires.";
        return;
    }

    if (password !== confirm) {
        error.textContent = "Les mots de passe ne correspondent pas.";
        return;
    }

    localStorage.setItem("user", JSON.stringify({ name, email, password }));

    error.style.color = "green";
    error.textContent = "Inscription réussie ✔ Redirection...";

    setTimeout(() => {
        window.location.href = "NumSuivi.html";
    }, 1500);
});