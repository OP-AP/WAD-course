let userName = "Andy"
let userAge = 22

//console.log("Text", variable) allows you to write to the console

console.log("User Name", userName)
console.log("User Age", userAge)

let userPets = ["Cat", "Dog"];
userPets.push ("Hamster")
userPets.pop ()

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

