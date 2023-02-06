const pizzaToppings = ["pepperoni", "mushrooms", "sausage", "peppers"];

function greetCustomer() {
  let message = "Welcome to Doc's Pizza! We offer the following toppings ";
for (let topping of pizzaToppings) {
message += `${topping}, `;
}
console.log(message);
}
greetCustomer();

function getPizzaOrder(size, crust, ...toppings) {
console.log(`One ${size}, ${crust} crust pizza with ${toppings} coming up!`);
return [size, crust, toppings];
}

let preparePizza = ([size, crust, toppings]) => {
console.log(`...Cooking Pizza...`);
let pizzaObject = {
  size: size,
  crust: crust,
  toppings: toppings
};
return pizzaObject;
};

servePizza = (pizzaObject) => {
console.log( `Pizza is ready, you got a ${pizzaObject.size}, ${pizzaObject.crust} crust pizza, with ${pizzaObject.toppings}`);
return pizzaObject;
}

servePizza(preparePizza(getPizzaOrder('Small', 'hand tossed', 'pepperoni', 'mushrooms', 'sausage', 'peppers')))
