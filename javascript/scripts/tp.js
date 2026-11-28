const calcul = (event) => {
  event.preventDefault();
  let premierNombre = Number(document.getElementById("premierNombre").value);
  let secondNombre = Number(document.getElementById("secondNombre").value);
  let operation = document.getElementById("operation").value;
  let resultElement = document.getElementById("result");
  let result;

  console.log(premierNombre, operation, secondNombre);

  if (operation === "add") {
    result = add(premierNombre, secondNombre);
  } else if (operation == "sub") {
    result = sub(premierNombre, secondNombre);
  } else if (operation == "divide") {
    result = div(premierNombre, secondNombre);
  } else if (operation == "multiply") {
    result = multiply(premierNombre, secondNombre);
  } else {
    result = modulo(premierNombre, secondNombre);
  }

  resultElement.innerText = result;
};

const add = (num1, num2) => {
  let sum = num1 + num2;
  return sum;
};

const sub = (num1, num2) => {
  let diff = num1 - num2;
  return diff;
};

const div = (num1, num2) => {
  if (num2 == 0) {
    return 0;
  }
  let div = num1 / num2;
  return div;
};

const multiply = (num1, num2) => {
  let product = num1 * num2;
  return product;
};

const modulo = (num1, num2) => {
  let modulo = num1 % num2;
  return modulo;
};
