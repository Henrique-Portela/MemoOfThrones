const cardsGrid = document.querySelector('.cardsgrid')
const characterArr = ['Arya', 'Brienne', 'Cersei', 'Daenerys', 'Grey-Worm', 'Jon', 'Missandei', 'Ned', 'nitgh-king', 'Samwell', 'Tormund', 'Tyrion']


function createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

function createCard(character) {
    const card = createElement('div', 'cards')
    const frontCard = createElement('div', 'face frontcard');
    const backCard = createElement('div', 'face backcard');

    frontCard.style.backgroundImage = `url('../Images/${character}.jpeg')`

    card.appendChild(frontCard);
    card.appendChild(backCard);
    card.addEventListener('click', cardReveal)
    
    return card

}

function createGame() {

    const doubleCharacter = [...characterArr, ...characterArr]
    const randomCharacter = doubleCharacter.sort(function(a, b) {
        return 0.5 - Math.random()
    })

    for(let i=0; i<randomCharacter.length; i++){
   
    const cardGame = createCard(randomCharacter[i]);
    cardsGrid.appendChild(cardGame)
    }
}

let cardOne = ''
let cardTwo = ''

const cardReveal = ({ target }) => {
    if(target.parentNode.className.includes('card-reveal')) {
        return;
    }

    if (cardOne === '') {
        target.parentNode.classList.add('card-reveal');
        cardOne = target.parentNode;
    } else if (cardTwo === '') {
        target.parentNode.classList.add('card-reveal');
        cardTwo = target.parentNode;
    }
    
   
}

createGame()





