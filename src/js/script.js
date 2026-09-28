let userName = "Andy"
let userAge = 22

//console.log("Text", variable) allows you to write to the console

console.log("User Name", userName)
console.log("User Age", userAge)

let userPets = ["Cat", "Dog"];
userPets.push("Hamster")
userPets.pop()

let userBalance = 1200;
const EVERY_DAY_SPENDING = 15.3;
let everyDaySpendingPerPet = 6;

everyDaySpendingPerPet = 2.4

let daysSurvived = 0;

console.log("User Pets", userPets)
// console.log("User Balance", userBalance)
// console.log("Every Day Spending", EVERY_DAY_SPENDING)
// console.log("Spending Per Pet", everyDaySpendingPerPet)
// console.log("Days Survived", daysSurvived)


while (userBalance > 0) {
    let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length
    userBalance -= spending
    userBalance = userBalance - spending
    daysSurvived++
    daysSurvived = daysSurvived + 1
}

console.log("User have sufficient money for " + daysSurvived + " days")


function nameVertical(name) {
    console.log(name)
    for (let i = 0; i < name.length; i++) {
        console.log(name[i])
    }
}

nameVertical("Sarah")


function code(n) {
    return (n < 100) ? "Not a valid code" :
        (n < 200) ? "Informational responses (100–199)" :
        (n < 300) ? "Successful responses (200–299)" :
        (n < 400) ? "Redirection messages (300–399)" :
        (n < 500) ? "Client error responses (400–499)" :
        (n < 600) ? "Server error responses (500–599)" :
        "Not a valid code";
}
// for example n = 121
console.log(code(121))
console.log(code(404))
console.log(code(700));



// function compareVariables(var1, var2) {
//     console.log(var1)
//     console.log(var2)

//     if (var1 === var2) {
//         console.log("The two variables have the same value and type")
    
//     } else if (var1 == var2) {
//         console.log("The two variables have the same value but not the same type")
//         console.log("the type of var1 is " + typeof var1)
//         console.log("the type of var2 is " + typeof var2)
//     } else {
//         console.log("The two variables do not have the same value nor the same type")
//     }

// }

function compareVariables(var1, var2) {
    console.log(var1)
    console.log(var2)

    if (var1 === var2) {
        console.log("The two variables have the same value and type")
        return
    }
    if (var1 == var2) {
        console.log("The two variables have the same value but not the same type")
        console.log("the type of var1 is " + typeof var1)
        console.log("the type of var2 is " + typeof var2)
        return
    }
        console.log("The two variables do not have the same value nor the same type")

}

function fibonacci(n) {
    let a = 0
    let b = 1
    let result
    let sequence = "Fibonacci Sequence: " + a + ", " + b

    while (a + b <= n) {
        result = a + b
        sequence += ", " + result
        a = b
        b = result
    }

    console.log(sequence)
}

fibonacci(40)

// After completing the function pass different numbers instead of n and test the result.

fibonacci(2);


