const cardsGrid = document.querySelector('.cardsgrid')
const cards = ['Arya', 'Brienne', 'Cersei', 'Daenerys', 'Grey-Worm', 'Jon', 'Missandei', 'Ned', 'nitgh-king', 'Samwell', 'Tormund', 'Tyrion']


function createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

function createCard() {
    const card = createElement('div', 'cards')
    const frontCard = createElement('div', 'face frontcard');
    const backCard = createElement('div', 'face backcard');

    card.appendChild(frontCard);
    card.appendChild(backCard);
    
    return card
}

function createGame() {
    
}

