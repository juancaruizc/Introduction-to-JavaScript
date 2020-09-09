/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 21;
    if (votingAge > 18) {
        console.log ('true')
    } else {
        console.log('false')
    }

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

function converter () {
    let number1 = 3
    let number2 = 5
if (number1 == number1) {
    return number1 == number2
    }
}

console.log(converter());

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let string = '1999'
Number(string)

console.log(string);

//Task d: Write a function to multiply a*b 

function multiply(a, b) {
    return a * b
}
console.log(multiply(5,2));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function humanToDogYears (humanYears) {
    return humanYears * 7
}

console.log(humanToDogYears(4));


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996


function dogFeeder(pounds, years) {
    let dailyFood = 0;
if (years < 1 && years >= 0.2 && years < 0.4) {
    return dailyFood = (pounds * 0.1)
} else if (years < 1 && years > 0.4 && years < 0.7) {
    return dailyFood = (pounds * 0.05)
} else if (years < 1 && years > 0.7) {
    return dailyFood = (pounds * 0.04)
} else if (years >= 1 && pounds <= 5) {
    return dailyFood = (pounds * 0.05) 
} else if (years >= 1 && pounds >= 6 && pounds <= 10) {
    return dailyFood = (pounds * 0.04)
} else if (years >= 1 && pounds >= 11 && pounds <= 15) {
    return dailyFood = (pounds * 0.03)
} else if (years >= 1 && pounds >= 15) {
    return dailyFood = (pounds * 0.02)
}
    return dailyFood
}

console.log(dogFeeder(15, 1));

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

//   function rockPaperScissors(move) {
//       const rock = 1
//       const paper = 2
//       const scissors = 3
//       if(move == 'rock')
//       return Math.round()
//   }

function rockPaperScissors (myChoice) {
    computerChoice = Math.random();
    if (myChoice = "rock" && computerChoice <= 0.33) {
      return ("The computer chooses rock and you tie")
    } else if (myChoice = "rock" && computerChoice <= 0.67) {
      return ("The computer chooses paper and you lose") 
    } else if (myChoice = "rock" && computerChoice > 0.67) {
      return ("The computer chooses scissors and you win")
    } else if (myChoice = "paper" && computerChoice <= 0.33) {
      return ("The computer chooses paper and you tie")
    } else if (myChoice = "paper" && computerChoice <= 0.67) {
      return ("The computer chooses scissors and you lose") 
    } else if (myChoice = "paper" && computerChoice >0.67) {
      return ("The computer chooses rock and you win")
    } else if (myChoice = "scissors" && computerChoice <= 0.33) {
      return ("The computer chooses scissors and you tie")
    } else if (myChoice = "scissors" && computerChoice <= 0.67) {
      return ("The computer chooses rock and you lose") 
    } else if (myChoice = "scissors" && computerChoice >0.67) {
      return ("The computer chooses paper and you win")
    } 
  }

  console.log(rockPaperScissors('rock'));
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kilometerToMiles(kilometers) {
    let miles = Math.round(kilometers * 0.621371)
    return miles;
}
console.log(kilometerToMiles(10))

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function feetToCentimeters(feet) {
    let centimeters = Math.round(feet * 30.48)
    return centimeters;
}
console.log(feetToCentimeters(10))


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(number) {
    return `${number} bottles of soda on the wall, ${number} bottles of soda, take one down pass it around ${number - 1} bottles of soda on the wall`
}
console.log(annoyingSong(3))


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
 
function grade (grade) {
    if (grade <= 100 && grade >= 90) {
        return 'A'
    } else if (grade <= 89 && grade >= 80) {
        return 'B'
    } else if (grade <= 79 && grade >= 70) {
        return 'C'
    } else if (grade <= 69 && grade >= 60) {
        return 'D'
    } else if (grade < 59)
        return 'F'
}

console.log(grade(75));

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object


