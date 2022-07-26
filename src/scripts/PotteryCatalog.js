let potteryToSell = [];

export const toSellOrNotToSell = (potteryObject) => {
    if (potteryObject.cracked === false) {
        if (potteryObject.pWeight >= 6) {
            potteryObject.price = 40;
        } if (potteryObject.pWeight < 6) {
            potteryObject.price = 20;
        } 
        potteryToSell.push(potteryObject)
    } return potteryObject
};

export const usePottery = () => {
    return [].concat(potteryToSell);
}