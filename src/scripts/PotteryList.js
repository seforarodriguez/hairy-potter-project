export const PotteryList = (potteryArray) => {
    let theHTMLstring = 
    `<section class="pottery" id="pottery--1">`
    for (let pottery of potteryArray) {
        theHTMLstring += 
        `<h2 class="pottery__shape">${pottery.shape}</h2>
        <div class="pottery__properties">
            Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
        </div>
        <div class="pottery__price">
            Price is $${pottery.price}`
    }
        theHTMLstring +=
        `</div>
    </section>` 
    return theHTMLstring
}