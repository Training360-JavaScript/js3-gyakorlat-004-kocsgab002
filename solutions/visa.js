const checkVisa = (cardId) => {
    const cardIdPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
    return cardId.match(cardIdPattern) ? true : false;
}


export default checkVisa;

