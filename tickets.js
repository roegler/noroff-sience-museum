// Adults tickets

var adultsPlusButton = document.getElementById('adults-ticket-qty-plus')
console.log(adultsPlusButton)

var adultsMinusButton = document.getElementById('adults-ticket-qty-minus')
console.log(adultsMinusButton)

var adultsQtyElement = document.getElementById('adults-qty')
console.log(adultsQtyElement)

adultsPlusButton.onclick = function() {
    console.log('Plus button clicked.')

    var currentQty = parseInt(adultsQtyElement.innerHTML)
    adultsQtyElement.innerHTML = currentQty + 1
}

adultsMinusButton.onclick = function() {
    console.log('Minus button clicked.')

    var currentQty = parseInt(adultsQtyElement.innerHTML)
    adultsQtyElement.innerHTML = currentQty - 1

    if (currentQty > 0) {
        adultsQtyElement.innerHTML = currentQty - 1
    }

}

// Seniors tickets

var seniorsPlusButton = document.getElementById('seniors-ticket-qty-plus')
console.log(seniorsPlusButton)

var seniorsMinusButton = document.getElementById('seniors-ticket-qty-minus')
console.log(seniorsMinusButton)

var seniorsQtyElement = document.getElementById('seniors-qty')
console.log(seniorsQtyElement)

seniorsPlusButton.onclick = function() {
    console.log('Plus button clicked.')

    var currentQty = parseInt(seniorsQtyElement.innerHTML)
    seniorsQtyElement.innerHTML = currentQty + 1
}

seniorsMinusButton.onclick = function() {
    console.log('Minus button clicked.')

    var currentQty = parseInt(seniorsQtyElement.innerHTML)
    seniorsQtyElement.innerHTML = currentQty - 1

    if (currentQty > 0) {
        seniorsQtyElement.innerHTML = currentQty - 1
    }

}

// Students tickets

var studentsPlusButton = document.getElementById('students-ticket-qty-plus')
console.log(studentsPlusButton)

var studentsMinusButton = document.getElementById('students-ticket-qty-minus')
console.log(studentsMinusButton)

var studentsQtyElement = document.getElementById('students-qty')
console.log(studentsQtyElement)

studentsPlusButton.onclick = function() {
    console.log('Plus button clicked.')

    var currentQty = parseInt(studentsQtyElement.innerHTML)
    studentsQtyElement.innerHTML = currentQty + 1
}

studentsMinusButton.onclick = function() {
    console.log('Minus button clicked.')

    var currentQty = parseInt(studentsQtyElement.innerHTML)
    studentsQtyElement.innerHTML = currentQty - 1

    if (currentQty > 0) {
        studentsQtyElement.innerHTML = currentQty - 1
    }

}

// Childens tickets

var childrensPlusButton = document.getElementById('childrens-ticket-qty-plus')
console.log(childrensPlusButton)

var childrensMinusButton = document.getElementById('childrens-ticket-qty-minus')
console.log(childrensMinusButton)

var childrensQtyElement = document.getElementById('childrens-qty')
console.log(childrensQtyElement)

childrensPlusButton.onclick = function() {
    console.log('Plus button clicked.')

    var currentQty = parseInt(childrensQtyElement.innerHTML)
    childrensQtyElement.innerHTML = currentQty + 1
}

childrensMinusButton.onclick = function() {
    console.log('Minus button clicked.')

    var currentQty = parseInt(childrensQtyElement.innerHTML)
    childrensQtyElement.innerHTML = currentQty - 1

    if (currentQty > 0) {
        childrensQtyElement.innerHTML = currentQty - 1
    }

}



/*
    var plusButton = container.getElementsByClassName('ticket-qty-plus')[0]
    console.log(plusButton)

    var minusButton = container.getElementsByClassName('ticket-qty-minus')[0]
    console.log(minusButton)

    var qtyElement = container.getElementsByClassName('qty')[0]
    console.log(qtyElement)

    plusButton.onclick = function() {
        console.log('Plus button clicked.')

        var currentQty = parseInt(qtyElement.innerHTML)
        qtyElement.innerHTML = currentQty + 1
    }

    minusButton.onclick = function() {
        console.log('Minus button clicked.')

        var currentQty = parseInt(qtyElement.innerHTML)

        if (currentQty > 0) {
            qtyElement.innerHTML = currentQty - 1
        }

    }


}
*/