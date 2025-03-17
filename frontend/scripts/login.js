document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar o envio do formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "12345") {
        alert("Login bem-sucedido!");
    } else {
        alert("Usuário ou senha incorretos.");
    }
});
