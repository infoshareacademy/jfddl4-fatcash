// ZMIENNE

var deckOfCards = [
    {
        front: 'A',
        visible: false,
        complete: true
    },
    {
        front: 'A',
        visible: true,
        complete: true
    },
    {
        front: 'B',
        visible: true,
        complete: false
    },
    {
        front: 'B',
        visible: true,
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
    }
]

var gameBoard = document.getElementById('game-board-id')

var deckOfCardsAfterShuffle = shuffleCards(deckOfCards)

var deckOfCardsGAME = JSON.parse(JSON.stringify(deckOfCardsAfterShuffle))

var moves_clicks = 0

// ZMIENNE -KONIEC

//FUNKCJE

function createCard(card) {
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
            div.addEventListener('click', function () {makeVisible(card)})
            break
        case true:
            div.classList.add('cardfront')
            break
    }
    }
        return div

}

function render(board, cards) {
    board.innerHTML = ''

    deckOfCardsAfterShuffle.forEach(function (card) {
        board.appendChild(createCard(card))
    })
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

function makeVisible (card) {
    card.visible = true
    console.log(deckOfCardsAfterShuffle)
    render(gameBoard, deckOfCardsGAME)
    moves_clicks++
    console.log(moves_clicks)
}

//FUNKCJE - KONIEC

//WYWOłANIE GRY

render(gameBoard, deckOfCardsAfterShuffle)

