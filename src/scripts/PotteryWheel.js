let pieceOfPottery = 1;

export const makePottery = (pshape, pweight, pheight) => {
    let pottery = {
        id: pieceOfPottery++,
        shape: pshape,
        weight: pweight,
        height: pheight
    } 
    return pottery
};