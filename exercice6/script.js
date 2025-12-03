// // - Créer une variable pour le nom de la boutique (shopName)
let shopName = "shop";
// // - Créer une variable pour la ville (city)
let city = "Lyon";
// // - Créer une variable booléenne pour savoir si la boutique est ouverte (isOpen)
let isOpen = true;
// // - Créer une variable pour le nombre de produits (productCount)
let productCount = 100;
// // - Créer une variable pour le slogan (slogan)
let slogan = "Quand c'est trop c'est tropico";

// // - Afficher un message de bienvenue dans la console
// //   (indice : concaténer texte + variables)
console.log("bienvenue");


// // - Afficher le slogan dans la console
console.log(slogan);

// // - Selon la variable qui indique si la boutique est ouverte :
// //   - afficher dans la console un message “ouverte”
console.log("c'est ouvert");

// //   - ou un message “fermée”
// //   (indice : utiliser une condition simple avec if / else)


// // ----exo 2----

// //     - Partir du slogan déjà créé à l’exercice 1
let slogann = "Quand c'est trop c'est tropico";
// // - Créer un premier message de bienvenue en collant du texte et des variables
// //   (indice : utiliser l’opérateur pour concaténer des chaînes)
let bienvenue = " bienvenue à ";
console.log(`${bienvenue} ${shopName}`);

// // - Créer un deuxième message de bienvenue en utilisant une autre syntaxe
// //   qui permet d’injecter des variables dans une chaîne
// //   (indice : pensez au gabarit de chaîne avec ${...})


// // - Calculer la longueur du slogan
console.log(slogan.length);


// // - Créer une version en majuscules du slogan
let nomMAJ = slogan.toUpperCase();
console.log(nomMAJ);

// // - Créer une version du slogan où un mot est remplacé par un autre
// //   (indice : il existe une méthode pour remplacer une partie d’un texte)
let modif = slogan.replace("tropico", "chaudare");
console.log(modif);
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

// // const shopName = "Ma Boutique JS";
// // const city = "Lyon";
// // let isOpen = true;
// // let productCount = 3;
// // let slogan = "Des goodies pour développeurs passionnés !";

// // const taglineElement = document.querySelector(".site-tagline");
// // if (taglineElement) {
// //     taglineElement.textContent =
// //         "Bienvenue dans " + shopName + " à " + city + " 👋";
// // }

// // const yearSpan = document.getElementById("year");
// // if (yearSpan) {
// //     yearSpan.textContent = new Date().getFullYear();
// // }

// // let welcomeMessage =
// //     "Bienvenue dans " + shopName + " située à " + city + " !";
// // let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;
// // let sloganLength = slogan.length;
// // let sloganUppercase = slogan.toUpperCase();
// // let sloganModified = slogan.replace("goodies", "trésors");

// /* --- Nouveautés Exercice 3 --- */

// // Prix d'exemple et TVA


// let examplePriceHT = 20;
// const TVA = 0.2;

// let examplePriceTTC = examplePriceHT + (examplePriceHT * TVA);

// console.log("Prix HT exemple :", examplePriceHT);
// console.log("Prix TTC exemple :", examplePriceTTC);

// // Compteur de ventes
// let salesCount = 0;
// salesCount++;
// salesCount++;

// console.log("Nombre de ventes :", salesCount);















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






/*************************************************
 * EXERCICE 4 - Fonctions de prix
 * Notions : function, paramètres, return, toFixed
 *************************************************/

/* --- Correction Exercice 1, 2 & 3 --- */

// const shopName = "Ma Boutique JS";
// const city = "Lyon";
// let isOpen = true;
// let productCount = 3;
// let slogan = "Des goodies pour développeurs passionnés !";

// const taglineElement = document.querySelector(".site-tagline");
// if (taglineElement) {
//   taglineElement.textContent =
//     "Bienvenue dans " + shopName + " à " + city + " 👋";
// }

// const yearSpan = document.getElementById("year");
// if (yearSpan) {
//   yearSpan.textContent = new Date().getFullYear();
// }

// let welcomeMessage =
//   "Bienvenue dans " + shopName + " située à " + city + " !";
// let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;
// let sloganLength = slogan.length;
// let sloganUppercase = slogan.toUpperCase();
// let sloganModified = slogan.replace("goodies", "trésors");

// const TVA = 0.2;
// let examplePriceHT = 20;
// let examplePriceTTC = examplePriceHT + examplePriceHT * TVA;
// let salesCount = 2;

// /* --- Nouveautés Exercice 4 --- */

// // Fonction qui calcule un prix TTC à partir d'un prix HT
// function calculatePriceTTC(priceHT) {
//   return priceHT + priceHT * TVA;
// }

// // Fonction qui formate un prix en "xx,xx €"
// function formatPrice(price) {
//   return price.toFixed(2).replace(".", ",") + " €";
// }

// // Tests dans la console
// console.log("Prix TTC pour 10€ HT :", formatPrice(calculatePriceTTC(10)));
// console.log(
//   "Prix TTC pour 19,99€ HT :",
//   formatPrice(calculatePriceTTC(19.99))
// );

// /* --- Rendu visuel Exo 4 --- */

const cartMessageElement = document.getElementById("cart-message");
if (cartMessageElement) {
    cartMessageElement.textContent =
        "Les fonctions de calcul et de formatage des prix sont prêtes ✅";
}

console.log("Exercice 4 chargé ✅");












// let nom ="pull";
// let prix=20;
// let description="un pull en cachemir pas en cachir"
// let image="https://media.istockphoto.com/id/1347250222/fr/photo/pile-de-trois-pulls.jpg?s=612x612&w=0&k=20&c=f9eFKjCkqKSlbrHQfIPHDlei_S-2lLR5Q4WroDseG3I="


// let div=document.getElementById("product-list")

// function createFeaturedProductCard () {
//    const article=document.createElement("article")
//    article.classList.add(" carte produit")

//    let image=document.createElement("img")
//    image.src="https://media.istockphoto.com/id/1347250222/fr/photo/pile-de-trois-pulls.jpg?s=612x612&w=0&k=20&c=f9eFKjCkqKSlbrHQfIPHDlei_S-2lLR5Q4WroDseG3I="
//    image.alt= produitpresenténom
//    image.classList.add("image produit")

//    const titre= document.createElement("h3")
//    titre.textcontenu= produitpresenténom
//    titre.classList.add=("titre du produit")

//     const priceElt = document.createElement("p");
//   const priceTTC = calculatePriceTTC(featuredProductPriceHT);
//   priceElt.textContent = formatPrice(priceTTC);
//   priceElt.classList.add("product-price");


//   article.appendChild(img);
//   article.appendChild(title);
//   article.appendChild(priceElt);
//   article.appendChild(desc);

//   return article;
// }




















//  - Créer des variables pour :
//   nom du produit (featuredProductName), prix HT (featuredProductPriceHT), description (featuredProductDescription), image (featuredProductImage)



// // - Récupérer la section HTML où afficher le produit
// //   (indice : utilisez une méthode du DOM qui sélectionne un élément par son id)

// let productlist= document.getElementById("product-list")

// // - Définir une fonction (createFeaturedProductCard()) qui :
// //     • crée un conteneur pour la carte  
// //       (indice : il existe une méthode du DOM pour créer un élément HTML)
// function createFeaturedProductCard() {
//     const article= document.createElement("article")
//     article.classList.add("product-card")
// }
// //     • crée une image :
// //         - lui donner la source de l'image
// //       (indice : pensez aux propriétés des balises <img>)

// let image = document.createElement("img")
// image.src=featuredProductImage
// image.alt=featuredProductImage
// image.classList.add("product-image")

// //     • crée un titre et lui mettre le nom du produit  
// //       (indice : une propriété permet d’écrire du texte dans un élément)

// const title = document.createElement("h3")
// title.textContent = featuredProductName
// title.classList.add = ("product-title")

// const priceElt= document.createElement("p")

// //     • calcule le prix TTC en utilisant la fonction vue dans l’exercice précédent
// //       (indice : vous avez déjà une fonction qui fait un calcul à partir du prix HT)
// function calculatePriceTTC(priceTTC) {
    
// }
//     • formate ce prix TTC avec la fonction prévue pour ça
//     • crée un paragraphe pour afficher le prix TTC
//     • crée un autre paragraphe pour la description
//     • assemble tous les éléments dans le conteneur
//       (indice : pensez à une méthode qui ajoute un enfant dans un élément)
//     • retourne ce conteneur

// - Avant d’afficher la carte, vider ce qu’il y a déjà dans la section
//   (indice : il existe une propriété qui permet de supprimer tout le contenu HTML d’un élément)

// - Appeler la fonction pour créer la carte

// - Ajouter le résultat dans la section prévue
//   (indice : même méthode que pour assembler les éléments dans la carte)





/*************************************************
 * EXERCICE 5 - Afficher un produit vedette
 * Notions : DOM, createElement, appendChild,
 *           réutilisation des fonctions de prix
 *************************************************/

/* --- Correction Exercices 1 à 4 --- */

/* Exercice 1 - Variables & infos de base */

// Mise à jour d'un élément de tagline (si présent dans la page)
const taglineElement = document.querySelector(".site-tagline");
if (taglineElement) {
  taglineElement.textContent = `Bienvenue dans ${shopName} à ${city} 👋`;
}

// Année dans le footer (si span#year présent)
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/* Exercice 2 - Chaînes de caractères & messages */

// let welcomeMessage =
//   "Bienvenue dans " + shopName + " située à " + city + " !";

// let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;

// let sloganLength = slogan.length;
// let sloganUppercase = slogan.toUpperCase();
// let sloganModified = slogan.replace("goodies", "trésors");

// console.log("welcomeMessage :", welcomeMessage);
// console.log("welcomeMessage2 :", welcomeMessage2);
// console.log("Longueur du slogan :", sloganLength);
// console.log("Slogan en majuscules :", sloganUppercase);
// console.log("Slogan modifié :", sloganModified);

// // Utilisation du slogan modifié dans un éventuel message de panier
// const cartMessageElementEx2 = document.getElementById("cart-message");
// if (cartMessageElementEx2) {
//   cartMessageElementEx2.textContent =
//     sloganModified + ` (${sloganLength} caractères dans le slogan original)`;
// }

/* Exercice 3 - Nombres & calculs */

let priceHTExample = 20;
const TVA = 0.2;

let priceTTCExample = priceHTExample + priceHTExample * TVA;

console.log("Prix HT d'exemple :", priceHTExample);
console.log("Prix TTC d'exemple :", priceTTCExample);

let salesCount = 0;
salesCount++;
console.log("Nombre de ventes après incrémentation :", salesCount);

/* Exercice 4 - Fonctions de prix */

function calculatePriceTTC(priceHT) {
  return priceHT + priceHT * TVA;
}

function formatPrice(price) {
  return price.toFixed(2) + " €";
}

// Tests simples
const testPrice1 = calculatePriceTTC(10);
const testPrice2 = calculatePriceTTC(19.99);

console.log("Test 1 TTC formaté :", formatPrice(testPrice1));
console.log("Test 2 TTC formaté :", formatPrice(testPrice2));

/* --- Nouveautés Exercice 5 --- */
/* Afficher un produit vedette dans la page (sans objets) */

// 1) Variables du produit vedette

// 2) Récupération de la section qui accueillera le produit
const productList = document.getElementById("product-list");

// 3) Fonction de création de la carte produit

let featuredProductName = "pull";
let featuredProductPriceHT = 30.99;
let featuredProductDescription = "un pull en cachemir pas en cachir";
let featuredProductImage = "https://media.istockphoto.com/id/1347250222/fr/photo/pile-de-trois-pulls.jpg?s=612x612&w=0&k=20&c=f9eFKjCkqKSlbrHQfIPHDlei_S-2lLR5Q4WroDseG3I=";






function createFeaturedProductCard() {
  const article = document.createElement("article");
  article.classList.add("product-card");

  const img = document.createElement("img");
  img.src = featuredProductImage;
  img.alt = featuredProductName;
  img.classList.add("product-image");

  const title = document.createElement("h3");
  title.textContent = featuredProductName;
  title.classList.add("product-title");

  const priceElt = document.createElement("p");
  const priceTTC = calculatePriceTTC(featuredProductPriceHT);
  priceElt.textContent = formatPrice(priceTTC);
  priceElt.classList.add("product-price");

  const desc = document.createElement("p");
  desc.textContent = featuredProductDescription;
  desc.classList.add("product-description");

  article.appendChild(img);
  article.appendChild(title);
  article.appendChild(priceElt);
  article.appendChild(desc);

  return article;
}

// 4) Affichage du produit vedette dans la page
  productList.innerHTML = "";
  const card = createFeaturedProductCard();
  productList.appendChild(card);

console.log("Exercice 5 chargé ✅");






// Crée un tableau contenant les noms de plusieurs produits (au moins 3).productNames
productNames=["pull","chaussette","veste"];

// Crée un tableau contenant leurs prix HT, dans le même ordre.productPricesHT
productPricesHT=[30.99, 13.5, 70.9 ];

// Affiche dans la console la longueur du tableau .productNames
console.log(productNames.length);

// Crée une fonction qui : displayProductsInConsole()
// parcourt les deux tableaux avec une boucle for
// récupère le nom du produit avec productNames[i]
// récupère le prix HT avec productPricesHT[i]
// calcule le prix TTC grâce à calculatePriceTTC()
// formate le prix TTC grâce à formatPrice()
// affiche une ligne du type :
// "Produit 1 : Mug JS — 14,99 € TTC"
// console.log(productNames.length)

 

// displayProductsInConsole()


// Appelle la fonction.

// 💡 Cet exercice introduit la logique « deux tableaux synchronisés », avant de passer aux objets dans l’exercice suivant



