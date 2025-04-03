const book = function (name, seatNo) {
    console.log(`${name} booked a ticket in ${this.busName}, ticket ${this.bCode}-${seatNo}`)
    this.tickets.push({ticketInfo: `${this.bCode}-${seatNo}`, name: name})
    
}
const starline = {
    busName: 'Star Line Paribahan',
    bCode: 'SL',
    tickets: []
}


const sohagh = {
    busName: 'Sohagh Paribahan',
    bCode: 'SH',
    tickets: []
}

book.call(starline, 'Ataullah', 'A1')
book.call(sohagh, 'Masud', 'A1')