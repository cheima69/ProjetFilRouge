// - Créer une variable pour le nom de la boutique (shopName)
let shopName="shop";
// - Créer une variable pour la ville (city)
let city="Lyon";
// - Créer une variable booléenne pour savoir si la boutique est ouverte (isOpen)
let isOpen=true;
// - Créer une variable pour le nombre de produits (productCount)
let productCount=100;
// - Créer une variable pour le slogan (slogan)
let slogan="Quand c'est trop c'est tropico";

// - Afficher un message de bienvenue dans la console
//   (indice : concaténer texte + variables)
console.log("bienvenue");


// - Afficher le slogan dans la console
console.log(slogan);

// - Selon la variable qui indique si la boutique est ouverte :
//   - afficher dans la console un message “ouverte”
console.log("c'est ouvert");

//   - ou un message “fermée”
//   (indice : utiliser une condition simple avec if / else)


    // ----exo 2----

//     - Partir du slogan déjà créé à l’exercice 1
// let slogan="Quand c'est trop c'est tropico";
// - Créer un premier message de bienvenue en collant du texte et des variables
//   (indice : utiliser l’opérateur pour concaténer des chaînes)
let bienvenue=" bienvenue à ";
console.log(`${bienvenue} ${shopName}`);

// - Créer un deuxième message de bienvenue en utilisant une autre syntaxe
//   qui permet d’injecter des variables dans une chaîne
//   (indice : pensez au gabarit de chaîne avec ${...})


// - Calculer la longueur du slogan
console.log(slogan.length);


// - Créer une version en majuscules du slogan
let nomMAJ = slogan.toUpperCase();
console.log(nomMAJ);

// - Créer une version du slogan où un mot est remplacé par un autre
//   (indice : il existe une méthode pour remplacer une partie d’un texte)
let modif= slogan.replace("tropico", "chaudare");
console.log(modif);
// - Afficher les deux messages, la longueur, la version majuscule
//   et la version modifiée dans la console


