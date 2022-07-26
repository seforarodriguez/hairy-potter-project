

export const firePottery = (potteryObject, fireTemp) => {
    potteryObject.fired = true 
    if (fireTemp > 2200) {
        potteryObject.cracked = true
    } if (fireTemp <= 2200) {
        potteryObject.cracked = false
    }
    return potteryObject
};