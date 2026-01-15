let url = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/users"
);

window.addEventListener("DOMContentLoaded", () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let body = document.querySelector("body");
            let table = document.createElement("table");
            
            body.appendChild(table);
            
            for(let i=0; i<=data.data.length; i++ ) {
                let tr = document.createElement("tr");
                table.appendChild(tr);
                
                for(let j=0; j<5; j++) {
                    let td = document.createElement("td");
                    let id = document.createTextNode(data.data[i].id);
                    let username = document.createTextNode(data.data[i].username);
                    let lastName = document.createTextNode(data.data[i].lastName);
                    let firstName = document.createTextNode(data.data[i].firstName);
                    let mail = document.createTextNode(data.data[i].email);
                    
                    if(j === 0) {
                        tr.appendChild(td);
                        td.appendChild(id);
                    }
                    else if(j === 1) {
                        tr.appendChild(td);
                        td.appendChild(username);
                    }
                    else if(j === 2) {
                        tr.appendChild(td);
                        td.appendChild(lastName);
                    }
                    else if(j === 3) {
                        tr.appendChild(td);
                        td.appendChild(firstName);
                    }
                    else if(j === 4) {
                        tr.appendChild(td);
                        td.appendChild(mail);
                    }
                }
                
            }
        })
        .then(error => console.error(error));
    
})