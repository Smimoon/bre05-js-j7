let url = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/users"
);

window.addEventListener("DOMContentLoaded", () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let body = document.querySelector("body");
        })
        .then(error => console.error(error));
    
})