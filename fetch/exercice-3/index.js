let url = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/create-user"
);

let url2 = "https://maridoucet.sites.3wa.io/user-api/users";


let formData = new FormData();
formData.append('username', "Smimoon");
formData.append('firstName', "Simon");
formData.append('lastName', "Laroche");
formData.append('email', "simon.laroche@3wa.io");

let body = {
    method: 'POST',
    body: formData
};

fetch(url2, body)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));