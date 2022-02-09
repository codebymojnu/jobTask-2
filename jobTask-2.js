const cardDistribution = (personInfo) => {
    let cards = [];
    for (let i = 0; i < personInfo.length; i++) {
        const first2District = personInfo[i].district.substring(0, 2).toUpperCase();
        const last2CurrentYear = personInfo[i].currentYear.toString().slice(-2);
        const first2PostNo = personInfo[i].postNo.toString().substring(0, 2);
        const birthYear = personInfo[i].birthYear.toString();
        const priority = personInfo[i].priority;
        const leftPad = String(priority).padStart(6, '0');
        let gift = '';
        if (priority % 2 === 0) {
            gift = 'R';
        }
        else{
            gift = 'W';
        }
        const cardNumber = first2District + last2CurrentYear + first2PostNo + birthYear + leftPad;
        cards.push({ cardNumber: cardNumber, gift: gift, priority: priority });
    }

    // sorting cards by first charecter of card number
    let sortingCards = cards.sort((a, b) => a.cardNumber.substring(0, 1).localeCompare(b.cardNumber.substring(0, 1)));

    // sorting cards by the given priority
    sortingCards = cards.sort(({priority:a}, {priority:b}) => a-b);

    return sortingCards;
}