// // - Créer une variable pour le nom de la boutique (shopName)
// let shopName = "shop";
// // - Créer une variable pour la ville (city)
// let city = "Lyon";
// // - Créer une variable booléenne pour savoir si la boutique est ouverte (isOpen)
// let isOpen = true;
// // - Créer une variable pour le nombre de produits (productCount)
// let productCount = 100;
// // - Créer une variable pour le slogan (slogan)
// let slogan = "Quand c'est trop c'est tropico";

// // - Afficher un message de bienvenue dans la console
// //   (indice : concaténer texte + variables)
// console.log("bienvenue");


// // - Afficher le slogan dans la console
// console.log(slogan);

// // - Selon la variable qui indique si la boutique est ouverte :
// //   - afficher dans la console un message “ouverte”
// console.log("c'est ouvert");

// //   - ou un message “fermée”
// //   (indice : utiliser une condition simple avec if / else)


// // ----exo 2----

// //     - Partir du slogan déjà créé à l’exercice 1
// // let slogan="Quand c'est trop c'est tropico";
// // - Créer un premier message de bienvenue en collant du texte et des variables
// //   (indice : utiliser l’opérateur pour concaténer des chaînes)
// let bienvenue = " bienvenue à ";
// console.log(`${bienvenue} ${shopName}`);

// // - Créer un deuxième message de bienvenue en utilisant une autre syntaxe
// //   qui permet d’injecter des variables dans une chaîne
// //   (indice : pensez au gabarit de chaîne avec ${...})


// // - Calculer la longueur du slogan
// console.log(slogan.length);


// // - Créer une version en majuscules du slogan
// let nomMAJ = slogan.toUpperCase();
// console.log(nomMAJ);

// // - Créer une version du slogan où un mot est remplacé par un autre
// //   (indice : il existe une méthode pour remplacer une partie d’un texte)
// let modif = slogan.replace("tropico", "chaudare");
// console.log(modif);
// // - Afficher les deux messages, la longueur, la version majuscule
// //   et la version modifiée dans la console



// // - Créer une variable contenant un prix HT d’exemple
// let HT = 20
// // - Créer une variable contenant le taux de TVA
// //   (par exemple 0.2 pour 20%)
// const TVA = 0.2
// // - Calculer le prix TTC à partir du prix HT et de la TVA
// //   (indice : utiliser une addition et une multiplication)
// let TTC = HT + (HT * TVA);
// // - Afficher le prix HT et le prix TTC dans la console
// console.log(HT, TTC);

// // - Créer une variable pour compter le nombre de ventes
// //   (commencer à 0)
// let vente = 0;
// vente++;
// console.log(vente);

// // - Simuler une nouvelle vente en augmentant ce compteur
// //   (indice : utiliser l’opérateur pour ajouter 1)
// vente++;

// // - Afficher la nouvelle valeur du compteur dans la console
// console.log(vente)




// /*************************************************
//  * EXERCICE 3 - Nombres, calculs & TVA
//  * Notions : opérations mathématiques, incrémentation
//  *************************************************/

// /* --- Correction Exercice 1 & 2 --- */

// const shopName = "Ma Boutique JS";
// const city = "Lyon";
// let isOpen = true;
// let productCount = 3;
// let slogan = "Des goodies pour développeurs passionnés !";

// const taglineElement = document.querySelector(".site-tagline");
// if (taglineElement) {
//     taglineElement.textContent =
//         "Bienvenue dans " + shopName + " à " + city + " 👋";
// }

// const yearSpan = document.getElementById("year");
// if (yearSpan) {
//     yearSpan.textContent = new Date().getFullYear();
// }

// let welcomeMessage =
//     "Bienvenue dans " + shopName + " située à " + city + " !";
// let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;
// let sloganLength = slogan.length;
// let sloganUppercase = slogan.toUpperCase();
// let sloganModified = slogan.replace("goodies", "trésors");

/* --- Nouveautés Exercice 3 --- */

// Prix d'exemple et TVA


let examplePriceHT = 20;
const TVA = 0.2;

let examplePriceTTC = examplePriceHT + (examplePriceHT * TVA);

console.log("Prix HT exemple :", examplePriceHT);
console.log("Prix TTC exemple :", examplePriceTTC);

// Compteur de ventes
let salesCount = 0;
salesCount++;
salesCount++;

console.log("Nombre de ventes :", salesCount);















// /* --- Rendu visuel Exo 3 --- */

// const cartTotalHeader = document.getElementById("cart-total");
// const cartTotalAside = document.getElementById("cart-total-aside");

// if (cartTotalHeader) {
//     cartTotalHeader.textContent = examplePriceTTC.toFixed(2) + " €";
// }
// if (cartTotalAside) {
//     cartTotalAside.textContent = examplePriceTTC.toFixed(2) + " €";
// }

// const cartMessageElement = document.getElementById("cart-message");
// if (cartMessageElement) {
//     cartMessageElement.textContent =
//         "Exemple de prix TTC affiché dans le panier (exercice 3).";
// }

// console.log("Exercice 3 chargé ✅");






// function calculatePriceTTC(priceHT) {
//   return priceHT +("priceHT*TVA");

// }

// function formatPrice(price) {
    
// }

