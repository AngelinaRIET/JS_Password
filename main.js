/*
 * L'objectif de l'exercice est d'avoir un champ de saisie de mot de passe
 * qui donne la possibilité d'afficher la saisie par le biais d'une icône sur
 * laquelle on clique (typiquement un oeil qui s'ouvre puis se ferme). C'est
 * important d'un point de vue UX afin de permettre l'utilisateur de vérifier
 * sa saisie surtout lorsque celle-ci est complexe (majuscules puis minuscules, etc).
 */

// ---- VARIABLES ET CONSTANTES GLOBALES

let icon = document.querySelector("i");       // L'objet DOM représentant la balise <i>
let input = document.getElementById("login");      // L'objet DOM représentant la balise <input>


// ---- FONCTIONS

function switchEye() 
{
    icon.classList.toggle("fa-eye-slash");
    if(input.type =="password")
    {
        // icon.classList.add("fa-eye-slash");
        // icon.classList.remove("fa-eye");
        input.type = "text";
    }
    else
    {
        // icon.classList.add("fa-eye");
        // icon.classList.remove("fa-eye-slash");
        input.type = "password";
    }
}


// ---- CODE PRINCIPAL

icon.addEventListener("click", switchEye)
