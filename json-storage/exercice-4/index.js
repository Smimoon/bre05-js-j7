let user = {
    firstName: "Harry",
    lastName: "Bow",
    motto: "C'est beau la vie !"
};

document.addEventListener("DOMContentLoaded", function() {
    let userStorage = sessionStorage.getItem("user");
    if (!userStorage) {
        let objet = JSON.stringify(user);
        sessionStorage.setItem("user", objet);
    }
    else {
        let jsonUser = sessionStorage.getItem("user");
        let newUser = JSON.parse(jsonUser);
        console.log(newUser);
    }
});
