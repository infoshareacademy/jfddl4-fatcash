// ZMIENNE

var deckOfCards2 = [
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
    },
    {
        front: 'I',
        visible: false,
        complete: false
    },
    {
        front: 'I',
        visible: false,
        complete: false
    }
]

var gameBoard = document.getElementById('game-board-id')

var deckOfCardsAfterShuffle2 = shuffleCards2(deckOfCards2)

var deckOfCardsGAME2 = JSON.parse(JSON.stringify(deckOfCardsAfterShuffle2))

// function level() {
//     if (pairCount <= 4) {
//         deckOfCards = deckOfCards.slice(4)
//     }
//     return deckOfCards
// }


// var pairCount = 0

// var moves_clicks = 0

// var visibleCards = []

// ZMIENNE -KONIEC

//FUNKCJE


// function init() {
//
//     deckOfCardsAfterShuffle = shuffleCards(deckOfCards)
//
//     return deckOfCardsAfterShuffle
// }

// function buttonStart() {
//     document.getElementById('start')
//         .addEventListener('click', function () {
//             render();
//             // endGame()
//         });
//
//
//     document.getElementById('instrukcja')
//         .addEventListener('click', function () {
//             console.log("instrukcja");
//         });
//
//
//     document.getElementById('wyniki')
//         .addEventListener('click', function () {
//
//             console.log("Naciśnięto Wyniki");
//         });
//
//
//     document.getElementById('zamknij')
//         .addEventListener('click', function () {
//
//             console.log("Naciśnięto Zamknij");
//         });
//
// }


function createCard2(card2, i2) {
    var div = document.createElement('div')
    var span = document.createElement('span')
    div.appendChild(span)
    span.innerText = card2.front

    if (card2.complete == true) {
        div.classList.add('complete')
    } else {

        switch (card2.visible) {
            case false:
                div.classList.add('cardback')
                div.setAttribute('onclick', '')
                div.addEventListener('click', function () {


                    flipCard2(i2)
                    cardCompare2()


                })
                break
            case true:
                div.classList.add('cardfront')
                break
        }
    }
    return div

}

function levelup(card2, i2) {
    gameBoard.innerHTML = ''
    deckOfCardsGAME2.forEach(function (card2, i2) {
        gameBoard.appendChild(createCard2(card2, i2))
    })
    console.log('levelup')
}

function shuffleCards2(arr) {
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


function countVisibleCards2() {
    var visibleCardsCount = deckOfCardsGAME2.filter(function (el) {
        return el.visible === true && el.complete === false
    }).length

    return visibleCardsCount
}


function cardCompare2() {
    var visibleCards = deckOfCardsGAME2.filter(function (el) {
        return el.visible == true && el.complete == false
    })

    if (visibleCards.length == 2) {
        if (visibleCards[0].front === visibleCards[1].front) {
            console.log('match');
            pairCount++
            endGame()

            deckOfCardsGAME2 = deckOfCardsGAME2.map(function (card2) {

                if (card2.visible == true) {
                    card2.complete = true

                    console.log(card2)
                }

                return card2;
            })
        }
    }
}


function hideAllVisbleCards2() {
    deckOfCardsGAME2 = deckOfCardsGAME2.map(function (el) {
        if (el.complete === true)
            return el
        else
            return Object.assign({}, el, {visible: false})
    })

    return deckOfCardsGAME2
}


function flipCard2(index2) {
    if (countVisibleCards2() > 1) {
        hideAllVisbleCards2()
    }

    deckOfCardsGAME2[index2] = Object.assign({}, deckOfCardsGAME2[index2], {visible: true})

    levelup()

    return deckOfCardsGAME2

}


function endGame() {

    if (pairCount == 13) {
        alert('You are awesome!!')
    }

}

//FUNKCJE - KONIEC

//WYWOłANIE GRY

// render(gameBoard, deckOfCardsAfterShuffle)

// buttonStart()