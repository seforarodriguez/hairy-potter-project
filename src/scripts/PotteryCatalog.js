let potteryToSell = [];

export const toSellOrNotToSell = (potteryObject) => {
    if (potteryObject.cracked === false) {
        if (potteryObject.weight >= 6) {
            potteryObject.price = 40;
        } if (potteryObject.weight < 6) {
            potteryObject.price = 20;
        } 
        potteryToSell.push(potteryObject)
    } return potteryObject
};

export const usePottery = () => {
    return [].concat(potteryToSell);
};