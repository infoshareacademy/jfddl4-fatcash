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
    }
]

var gameBoard = document.getElementById('game-board-id')

var deckOfCardsAfterShuffle = shuffleCards(deckOfCards)

var deckOfCardsGAME = JSON.parse(JSON.stringify(deckOfCardsAfterShuffle))

var moves_clicks = 0

var compereCards = []

// ZMIENNE -KONIEC

//FUNKCJE

function buttonStart () {
    document.getElementById('start')
        .addEventListener('click', function(){

            render(gameBoard, deckOfCardsGAME);});


    document.getElementById('instrukcja')
        .addEventListener('click', function(){

            console.log("Naciśnięto Instukcja");});



    document.getElementById('wyniki')
        .addEventListener('click', function()
        {

            console.log("Naciśnięto Wyniki");});



    document.getElementById('zamknij')
        .addEventListener('click', function(){

            console.log("Naciśnięto Zamknij");});

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
                // makeVisible(card)
                // console.log(deckOfCardsGAME)
                // stan_Gry()
                // countVisibleCards()
                // console.log(deckOfCardsGAME)

                // makeCompleted()
                flipCard(i)
                makeCompleted()

            })
            break
        case true:
            div.classList.add('cardfront')
            break
    }
    }
        return div

}

function render(board, cards) {
    gameBoard.innerHTML = ''

    deckOfCardsGAME.forEach(function (card, i) {
        gameBoard.appendChild(createCard(card, i))
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
    // console.log(deckOfCardsAfterShuffle)
    console.log(deckOfCardsGAME)
    render(gameBoard, deckOfCardsGAME)
    moves_clicks++
    // console.log(moves_clicks)


}



function countVisibleCards() {
    var visibleCardsCount = deckOfCardsGAME.filter(function (el) {
        return el.visible === true && el.complete === false
    }).length
    // console.log(deckOfCardsGAME)

    return visibleCardsCount
}


function makeCompleted () {
    if(countVisibleCards() > 1) {
        var visibleCards = []
        var frontComplete = ''
        function asd() {
            visibleCards = deckOfCardsGAME.filter(function (el) {
                return el.visible == true
            })
        }
        asd()
        if (visibleCards[0].front == visibleCards[1].front) {
            frontComplete = visibleCards[0].front
            console.log(frontComplete)
        }
        deckOfCardsGAME.forEach(function (card) {
            if (card.front == frontComplete) {
                card.complete = true
            }
        })
    }
}



// var visibleCards = []
// function asd() {
//     visibleCards = deckOfCardsGAME.filter(function (el) {
//         return el.visible == true
//     })
// }
//
// var front_complite = ''
// if (visibleCards[0].front == visibleCards[1].front) {var front_complite = visibleCards[0].front}
//
// deckOfCardsGAME.forEach(function(card) {if (card.front == front_complite) {card.complite = true}})


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
    if(countVisibleCards() > 1){
        hideAllVisbleCards()
    }

    deckOfCardsGAME[index] =  Object.assign({}, deckOfCardsGAME[index], {visible: true})

    render()

    return deckOfCardsGAME
}



//FUNKCJE - KONIEC

//WYWOłANIE GRY

// render(gameBoard, deckOfCardsAfterShuffle)

buttonStart()


