window.addEventListener("DOMContentLoaded", function(){
    let name = "Harry Bow";
    
    JSON.stringify(name);
    localStorage.setItem("name", "Harry Bow");
    sessionStorage.setItem("name", "Harry Bow");
});