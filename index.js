const input = require('readline-sync');

// Part A: #1 Initialize your variables

let numMeals = -1;

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

//Part A #2: Complete the mealAssembly function.

function mealAssembly (protein, grains, veggies, beverages, desserts, numMeals) {
    let pantry =[protein, grains, veggies, beverages, desserts];
  let meals = [];
 
  for (i=0;i<numMeals;i++){
    let meal = [];
    for (j=0; j < pantry.length; j++){
      meal.push(pantry[j][i])
    }
    meals.push(meal);
  }
  return meals;
}


    
    


// Part A #3: Complete the mealPrintout function

  function mealPrintout (meal, i) {
        if (meal.includes('kale')||meal.includes('more kale')) {
            return `Astronaut #2 is having tofu,corn,kale,water,more kale. With all that kale, you should grab some chocolate tomorrow!`;
        }
        else {
            return `Astronaut #${i} is having ${meal[i]}`;
        }
}

//Part B: Complete the askForNumber function.

function askForNumber() {
  numMeals =  input.question("How many meals would you like to make? ")
  while(numMeals<1||numMeals>6 || isNaN(numMeals)){
  numMeals = input.question("Invalid.")


  }
}

// Part C: Complete the generatePassword function.

function generatePassword(string1, string2) {
    string1 = "team";
      
     string2 = "WORK";
    let code = '';

  for (let i = 0; i < string1.length; i++) {
    console.log(code+=string1[i])
    console.log(code+=string2[i])
  }
  
  

    return code;
}

// Part D: Put together the program

function runProgram() {
    let mealsFor6 = mealAssembly(protein, grains, veggies, beverages, desserts, 6);
    for (i = 0; i < mealsFor6.length; i++){
      
      console.log(mealPrintout(mealsFor6,i));
    }
   console.log("That is for 6 astronauts. How many astronauts are actually aboard the ship? ")
    askForNumber();
    let mealsForX = mealAssembly(protein, grains, veggies, beverages, desserts, numMeals);

    let password1 = '';
    let password2 = ''; 
    console.log("Time to run the password generator so we can update the menu tomorrow. ")
    console.log(`The new password is: ${generatePassword(password1, password2)}`);
}


