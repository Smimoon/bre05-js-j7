window.addEventListener("DOMContentLoaded", function() {
   

    let name = sessionStorage.getItem("username");

    if (name) {
        window.alert(`Bonjour ${name}`);
    }
    else {
        
        let username = window.prompt("Quel est votre nom ?");
        sessionStorage.setItem("username", username);
    }
});
