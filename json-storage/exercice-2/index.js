window.addEventListener("DOMContentLoaded", function() {
   

    let name = sessionStorage.getItem("username");

    if (name) {
    let username = window.prompt("Quel est votre nom ?");
        sessionStorage.setItem("username", username);

    }
    else {
        window.alert(`Bonjour ${name}`);
    }
});
