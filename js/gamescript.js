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
    },
    {
        front: 'E',
        visible: false,
        complete: false
    },
    {
        front: 'E',
        visible: false,
        complete: false
    },
    {
        front: 'F',
        visible: false,
        complete: false
    },
    {
        front: 'F',
        visible: false,
        complete: false
    },
    {
        front: 'G',
        visible: false,
        complete: false
    },
    {
        front: 'G',
        visible: false,
        complete: false
    },
    {
        front: 'H',
        visible: false,
        complete: false
    },
    {
        front: 'H',
        visible: false,
        complete: false
    }

]

var deckOfCardsLevel2 = [
    {
        front: 'I',
        visible: false,
        complete: false
    },
    {
        front: 'I',
        visible: false,
        complete: false
    },
    {
        front: 'J',
        visible: false,
        complete: false
    },
    {
        front: 'J',
        visible: false,
        complete: false
    },
    {
        front: 'K',
        visible: false,
        complete: false
    },
    {
        front: 'K',
        visible: false,
        complete: false
    },
    {
        front: 'L',
        visible: false,
        complete: false
    },
    {
        front: 'L',
        visible: false,
        complete: false
    },
    {
        front: 'M',
        visible: false,
        complete: false
    },
    {
        front: 'M',
        visible: false,
        complete: false
    },
    {
        front: 'N',
        visible: false,
        complete: false
    },
    {
        front: 'N',
        visible: false,
        complete: false
    },
    {
        front: 'O',
        visible: false,
        complete: false
    },
    {
        front: 'O',
        visible: false,
        complete: false
    },
    {
        front: 'P',
        visible: false,
        complete: false
    },
    {
        front: 'P',
        visible: false,
        complete: false
    },
    {
        front: 'R',
        visible: false,
        complete: false
    },
    {
        front: 'R',
        visible: false,
        complete: false
    },
    {
        front: 'S',
        visible: false,
        complete: false
    },
    {
        front: 'S',
        visible: false,
        complete: false
    }
]

var gameBoard = document.getElementById('game-board-id')

// var deckOfCardsAfterShuffle = shuffleCards(deckOfCards)

var deckOfCardsGAME = JSON.parse(JSON.stringify(deckOfCards))

function cardsForLevel2() {

    deckOfCardsGAME = deckOfCards.concat(deckOfCardsLevel2)

// deckOfCardsGAME = shuffleCards(deckOfCardsGAME)
}

var moves_clicks = 1
var hs_counter = 0;


function mouseClick() {
    var clicks = document.getElementById("clicks").innerHTML = "Twoje ruchy: " + moves_clicks
    moves_clicks++

}

var level = 1

var pairCount = 0


function buttonStart() {
    document.getElementById('start')
        .addEventListener('click', function () {
            render();
        });


    document.getElementById('instrukcja')
        .addEventListener('click', function () {

            console.log("Naciśnięto Instukcja");
        });


    document.getElementById('wyniki')
        .addEventListener('click', function (x) {

            checkScore()
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

                    console.log(moves_clicks)
                    flipCard(i)
                    cardCompare()
                    mouseClick()


                })
                break
            case true:
                div.classList.add('cardfront')
                break
        }
    }
    return div

}


function createCardLevel2(card, i) {
    var div = document.createElement('div')
    var span = document.createElement('span')
    div.appendChild(span)
    span.innerText = card.front
    div.classList.remove('cardfront')
    div.classList.remove('complete')

    if (card.complete == true) {
        div.classList.add('complete-l2')
    } else {

        switch (card.visible) {
            case false:

                div.classList.add('cardback-l2')
                div.setAttribute('onclick', '')
                div.addEventListener('click', function () {

                    console.log(moves_clicks)
                    flipCard(i)
                    cardCompare()
                    mouseClick()


                })
                break
            case true:
                div.classList.add('cardfront-l2')
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

function renderLevel2(card, i) {
    if (level == 2) {
        cardsForLevel2()
        level++
    }
    gameBoard.innerHTML = ''
    deckOfCardsGAME.forEach(function (card, i) {
        gameBoard.appendChild(createCardLevel2(card, i))

    })
    console.log('renderLevel2')
    console.log(deckOfCardsGAME)
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
            endGame()

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

    hs_counter++;

    if (level === 1) {
        if (countVisibleCards() > 1) {
            hideAllVisbleCards()
        }

        deckOfCardsGAME[index] = Object.assign({}, deckOfCardsGAME[index], {visible: true})
        render()

        return deckOfCardsGAME
    } else {
        if (countVisibleCards() > 1) {
            hideAllVisbleCards()
        }

        deckOfCardsGAME[index] = Object.assign({}, deckOfCardsGAME[index], {visible: true})
        renderLevel2()

        return deckOfCardsGAME
    }
}


function endGame() {


    if (pairCount == deckOfCardsGAME.length / 2) {
        if (pairCount < 16) {
            pairCount = 0
            console.warn(pairCount)
            console.warn(deckOfCardsGAME)
            level = 2
            renderLevel2()
        }
        else
            sendScore();
        alert("ukończyłeś grę ! " + "Twój wynik to " + moves_clicks)
    }

}


/////////////////////////  HIGHSCORES  //////////////////////////////

function sendScore() {

    var bestScore = localStorage.getItem('bestscore');


    if (hs_counter < bestScore || bestScore === null) {
        localStorage.setItem('bestscore', hs_counter);

    }
}


function checkScore() {


    var bestScore = localStorage.getItem('bestscore');


    if (bestScore === null) {

        alert(" Upss. It seems there is no any highscores yet.")

    }
    else {

        alert("Highscore: " + bestScore)

    }

}


////////////////////////////////////////////////////////////////


//FUNKCJE - KONIEC

//WYWOłANIE GRY

// render(gameBoard, deckOfCardsAfterShuffle)

buttonStart()

// endGame()
