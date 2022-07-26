// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("round", "1 onz", "1 cm");
let mug2 = makePottery("squared", "3 onz", "2 cm");
let mug3 = makePottery("funky", "5 onz", "4 cm");
let mug4 = makePottery("wavy", "4 onz", "3 cm");
let mug5 = makePottery("huge", "8 onz", "9 cm");

// Fire each piece of pottery in the kiln
mug = firePottery(mug, 1500)
console.log(mug);
mug2 = firePottery(mug2, 2200)
console.log(mug2);
mug3 = firePottery(mug3, 3000)
console.log(mug3);
mug4 = firePottery(mug4, 2000)
console.log(mug4);
mug5 = firePottery(mug5, 2100)
console.log(mug5);

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



