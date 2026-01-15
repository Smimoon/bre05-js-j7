function payLess(age) {
    return new Promise((resolve, reject) => {
        // Si l'âge (paramètre de la fonction) est inférieur ou égal à 25 ans, la Promise va appeler resolve (.then).
        if (age <= 25) {
            resolve("Réduction jeunes.");
        }
        // Si l'âge (paramètre de la fonction) est supérieur ou égal à 65 ans, la Promise appelle également resolve (.then)
        else if (age >= 65) {
            resolve("Réduction seniors.")
        }
        // En revanche si le paramètre ne rempli aucune des deux conditions précédentes, la Promise va appeler reject (.catch)
        else {
            reject("Aucune réduction possible.");
        }
    });
}

window.addEventListener("DOMContentLoaded", () => {
    // Appel de la fonction avec le paramètre 21.
    payLess(21)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    // Comme 21 est inférieur à 25, la fonction va retourner le .then et va donc afficher (console.log) "Réduction jeunes".
    
    // Appel de la fonction avec le paramètre 78.
    payLess(78)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    // Comme 78 est supérieur à 65, la fonction retourne aussi le .then et va afficher "Réduction senior".
    
    // Appel de la fonction avec le paramètre 34.
    payLess(34)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    // Comme 34 n'est ni inférieur à 25, ni supérieur à 65, la fonction va renvoyer le .catch et donc afficher "Aucune réduction possible".
});
