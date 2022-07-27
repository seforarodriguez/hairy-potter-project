export const PotteryList = (potteryArray) => {
    let theHTMLstring = 
    `<section class="pottery" id="pottery--1">`
    for (let pottery of potteryArray) {
        theHTMLstring += 
        `<h2 class="pottery__shape">${pottery.pShape}</h2>
        <div class="pottery__properties">
            Item weighs ${pottery.pWeight} grams and is ${pottery.pHeight} cm in height
        </div>
        <div class="pottery__price">
            Price is $${pottery.price}`
    }
        theHTMLstring +=
        `</div>
    </section>` 
    return theHTMLstring
}