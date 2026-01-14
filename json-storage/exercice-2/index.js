window.addEventListener("DOMContentLoaded", function(){
    let username = window.prompt("Quel est votre nom ?");
    
    
    sessionStorage.setItem("username", username);
    
    let name = sessionStorage.getItem("username");
    
    if(name !== "") {
        window.alert(`Bonjour ${username}`);
    }
});