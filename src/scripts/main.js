// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { usePottery } from "./PotteryCatalog.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("round", 1, "1 cm");
let mug2 = makePottery("squared", 3, "2 cm");
let mug3 = makePottery("funky", 5, "4 cm");
let mug4 = makePottery("wavy", 9, "3 cm");
let mug5 = makePottery("huge", 8, "9 cm");

// Fire each piece of pottery in the kiln
mug = firePottery(mug, 1500)
// console.log(mug);
mug2 = firePottery(mug2, 2200)
// console.log(mug2);
mug3 = firePottery(mug3, 3000)
// console.log(mug3);
mug4 = firePottery(mug4, 2000)
// console.log(mug4);
mug5 = firePottery(mug5, 2100)
// console.log(mug5);

// Determine which ones should be sold, and their price

let finalMug1 = toSellOrNotToSell(mug);
let finalMug2 = toSellOrNotToSell(mug2);
let finalMug3 = toSellOrNotToSell(mug3);
let finalMug4 = toSellOrNotToSell(mug4);
let finalMug5 = toSellOrNotToSell(mug5);
// console.log(finalMug)
let theChosenMugs = usePottery()
console.log(theChosenMugs);
// console.log(usethis)
// Invoke the component function that renders the HTML list



