let url = "https://maridoucet.sites.3wa.io/user-api/user/15";

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));


window.addEventListener("DOMContentLoaded", () => {
   fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err)); 
});
