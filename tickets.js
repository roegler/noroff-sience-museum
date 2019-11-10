// [.ticket-button, .ticket-button, .ticket-button, .ticket-button]
var ticketButtonContainers = document.getElementsByClassName('ticket-button')

for (var i = 0; i < ticketButtonContainers.length; i++) {
    var container = ticketButtonContainers[i]
    console.log(container)

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