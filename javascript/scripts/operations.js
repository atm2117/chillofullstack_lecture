var entier;
entier = 10;
console.log(typeof entier, entier);

let reel = 10.5;
console.log(typeof reel, reel);

let chaine = "Bonjour";
console.log(typeof chaine, chaine);

const PI = 22 / 7;
console.log(typeof PI, PI);

let is_trainer = true;
console.log(typeof is_trainer, is_trainer);

let numbers = [10, 5, 8];
console.log(typeof numbers, numbers);

//Single line comment

/*
    Multi-line
    Comments
*/

let resultat;
let numOne = 20;
let numTwo = 10;

resultat = numOne + numTwo;
console.log("Somme: " + resultat);

resultat = numOne * numTwo;
console.log("Produit: " + resultat);

// lire une balise h1
const contentsOfH1Tags = document.getElementsByTagName("h1");

// Afficher le contenu des balises H1
// getElementsByTagName returns an object
console.log(contentsOfH1Tags);

//Contenu de la premiere balise h1
const firstH1 = contentsOfH1Tags[0];
console.log(firstH1.innerText);

// lire une balise par id
const buttonCalculer = document.getElementById("calculer");
const buttonLabel = buttonCalculer.innerText;
console.log(buttonLabel);

const calculer = () => {
  let result = document.getElementById("result");
  let firstNumber = Number(document.getElementById("firstNumber").value);
  let secondNumber = Number(document.getElementById("secondNumber").value);
  let sum = firstNumber + secondNumber;

  console.log("La somme: " + sum);
  result.innerText = result;
};
