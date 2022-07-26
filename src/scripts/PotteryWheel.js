let pieceOfPottery = 1;

export const makePottery = (shape, weight, height) => {
    let pottery = {
        id: pieceOfPottery++,
        pShape: shape,
        pWeight: weight,
        pHeight: height
    } 
    return pottery
};