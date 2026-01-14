let data = {
    firstName : "Harry",
    lastName : "Bow",
    motto : "C'est beau la vie !"
};

let str = "{\"firstName\":\"Colonel\",\"lastName\":\"Sanders\",\"motto\":\"Il est bon mon poulet\"}";

document.addEventListener("DOMContentLoaded", function(){
    console.log( JSON.stringify(data));
    
    let chaine = JSON.parse(str);
    console.log(chaine);
    
});