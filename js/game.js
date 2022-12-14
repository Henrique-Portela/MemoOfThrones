const cardsGrid = document.querySelector('.cardsgrid')
const characterArr = ['Arya', 'Brienne', 'Cersei', 'Daenerys', 'Grey-Worm', 'Jon', 'Missandei', 'Ned', 'nitgh-king', 'Samwell', 'Tormund', 'Tyrion']
const playerName = document.querySelector('.player')
const gameAudio = document.querySelector('.game-audio')

gameAudio.volume = .15
gameAudio.play()

this.gameTimer = document.querySelector('.timer');
this.doubleCharacter = [...characterArr, ...characterArr]


this.timeCount = setInterval(() => {
    this.gameTimer.innerHTML --
    if(this.gameTimer.innerHTML < 1 ) {
        clearInterval(this.timeCount)
        setTimeout(() => {
            alert('GAME OVER!')
        }, 1000)
        gameAudio.pause()
        
        return setTimeout(() => {
            cardsGrid.innerHTML = null
        }, 1000) 
    }
    
}, 1000);

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
    card.setAttribute('data-character', character);
    
    
    return card
    
}

function createGame() {
    
    const randomCharacter = this.doubleCharacter.sort(function(a, b) {
        return 0.5 - Math.random()
    })

    for(let i=0; i<randomCharacter.length; i++){
   
    const cardGame = createCard(randomCharacter[i]);
    cardsGrid.appendChild(cardGame)
    }
    
}

let cardOne = ''
let cardTwo = ''

function endGame() {
    
    const cardsOff = document.querySelectorAll('.card-disable')
    
    if(cardsOff.length === 24) {
        clearTimeout(this.timeCount);
        setTimeout(() => {
            alert('Congratulations!!! The iron throne belongs to you')
            
        }, 1000)
    }

    if(cardsOff.length === 24) {
        setInterval(() => {
            gameAudio.pause()
        }, 1000)
        
    }
}

function verifyCards() {
    const characterOne = cardOne.getAttribute('data-character');
    const characterTwo = cardTwo.getAttribute('data-character');

    if(characterOne === characterTwo) {
        cardOne.firstChild.classList.add('card-disable');
        cardTwo.firstChild.classList.add('card-disable');
        cardOne = '';
        cardTwo = '';
        
        endGame()

    } else {
        setTimeout(() => {
            cardOne.classList.remove('card-reveal');
            cardTwo.classList.remove('card-reveal');
            cardOne = '';
            cardTwo = '';

        }, 900)
        
    }
    
}

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

        verifyCards();
    }
}

    


window.onload = () => {
    const saveName = localStorage.getItem('Player');
    playerName.innerHTML = `Player: ${saveName}`
    
    createGame()
}







