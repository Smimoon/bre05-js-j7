let url = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/user/18"
);


    
    
    
window.addEventListener("DOMContentLoaded", () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let body = document.querySelector("body");
        let userName = document.createElement("h1");
        let firstName = document.createElement("h2");
        let lastName = document.createElement("h2");
        let mail = document.createElement("h3");
        let userNameText = document.createTextNode(data.data.username);
        let firstNameText = document.createTextNode(data.data.firstName);
        let lastNameText = document.createTextNode(data.data.lastName);
        let mailText = document.createTextNode(data.data.email);
        
        body.appendChild(userName);
        body.appendChild(firstName);
        body.appendChild(lastName);
        body.appendChild(mail);
        
        userName.appendChild(userNameText);
        firstName.appendChild(firstNameText);
        lastName.appendChild(lastNameText);
        mail.appendChild(mailText);
    })
    .catch(error => console.error(error));
});