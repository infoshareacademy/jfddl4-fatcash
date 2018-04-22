// ZMIENNE

var deckOfCards = [
    {
        front: 'A',
        visible: false,
        complete: false
    },
    {
        front: 'A',
        visible: false,
        complete: false
    },
    {
        front: 'B',
        visible: false,
        complete: false
    },
    {
        front: 'B',
        visible: false,
        complete: false
    },
    {
        front: 'C',
        visible: false,
        complete: false
    },
    {
        front: 'C',
        visible: false,
        complete: false
    },
    {
        front: 'D',
        visible: false,
        complete: false
    },
    {
        front: 'D',
        visible: false,
        complete: false
    }
]

var gameBoard = document.getElementById('game-board-id')

var deckOfCardsAfterShuffle = shuffleCards(deckOfCards)

var deckOfCardsGAME = JSON.parse(JSON.stringify(deckOfCardsAfterShuffle))


var pairCount = 0

var moves_clicks = 0

// var visibleCards = []

// ZMIENNE -KONIEC

//FUNKCJE


function buttonStart() {
    document.getElementById('start')
        .addEventListener('click', function () {
            render();
            // endGame()
        });


    document.getElementById('instrukcja')
        .addEventListener('click', function () {
            // console.log("instrukcja");
            levelup()
        });


    document.getElementById('wyniki')
        .addEventListener('click', function () {

            console.log("Naciśnięto Wyniki");
        });


    document.getElementById('zamknij')
        .addEventListener('click', function () {

            console.log("Naciśnięto Zamknij");
        });

}


function createCard(card, i) {
    var div = document.createElement('div')
    var span = document.createElement('span')
    div.appendChild(span)
    span.innerText = card.front

    if (card.complete == true) {
        div.classList.add('complete')
    } else {

        switch (card.visible) {
            case false:
                div.classList.add('cardback')
                div.setAttribute('onclick', '')
                div.addEventListener('click', function () {


                    flipCard(i)
                    cardCompare()


                })
                break
            case true:
                div.classList.add('cardfront')
                break
        }
    }
    return div

}

function render(card, i) {
    gameBoard.innerHTML = ''
    deckOfCardsGAME.forEach(function (card, i) {
        gameBoard.appendChild(createCard(card, i))
    })
    console.log('render')
}

function shuffleCards(arr) {
    var tmpArr = JSON.parse(JSON.stringify(arr))

    var counter = tmpArr.length

    while (counter > 0) {
        var ind = Math.floor(Math.random() * counter)
        counter--
        var temp = tmpArr[counter]
        tmpArr[counter] = tmpArr[ind]
        tmpArr[ind] = temp
    }

    return tmpArr
}


function countVisibleCards() {
    var visibleCardsCount = deckOfCardsGAME.filter(function (el) {
        return el.visible === true && el.complete === false
    }).length

    return visibleCardsCount
}


function cardCompare() {
    var visibleCards = deckOfCardsGAME.filter(function (el) {
        return el.visible == true && el.complete == false
    })

    if (visibleCards.length == 2) {
        if (visibleCards[0].front === visibleCards[1].front) {
            console.log('match');
            pairCount++
            endLevel()

            deckOfCardsGAME = deckOfCardsGAME.map(function (card) {

                if (card.visible == true) {
                    card.complete = true

                    console.log(card)
                }

                return card;
            })
        }
    }
}


function hideAllVisbleCards() {
    deckOfCardsGAME = deckOfCardsGAME.map(function (el) {
        if (el.complete === true)
            return el
        else
            return Object.assign({}, el, {visible: false})
    })

    return deckOfCardsGAME
}


function flipCard(index) {
    if (countVisibleCards() > 1) {
        hideAllVisbleCards()
    }

    deckOfCardsGAME[index] = Object.assign({}, deckOfCardsGAME[index], {visible: true})

    render()

    return deckOfCardsGAME

}


function endLevel() {

    if (pairCount == 4) {
        levelup()
        alert('Level 1 completed. Time to level 2...')

    }

}

//FUNKCJE - KONIEC

//WYWOłANIE GRY

// render(gameBoard, deckOfCardsAfterShuffle)

buttonStart()


