// Booking Provider
const bookTicket = function (name, seatNo) {
    this.tickets.push({ticketInfo: `${this.bCode}-${seatNo}`, name: name})
    console.log(`${name} is booked a ticket in ${this.busName}, ticket is ${this.bCode}-${seatNo}`);
}

// Clients
const starline = {
    busName: 'Star Line Paribahan Ltd.',
    bCode: 'SL',
    tickets: []
}

const sohagh = {
    busName: 'Sohagh Paribahan Ltd.',
    bCode: 'SH',
    tickets: []
}

const hanif = {
    busName: 'Hanif Paribahan Ltd.',
    bCode: 'HN',
    tickets: []
}

const greenline = {
    busName: 'Green Line Paribahan Ltd.',
    bCode: 'GL',
    tickets: []
}

// bookTicket.call(starline, 'Masud', 'C1')
// bookTicket.call(greenline, 'Meem', 'B3')
// bookTicket.call(sohagh, 'Mahfuj', 'C2')

bookTicket.apply(starline, ['Mahfuj', 'C2'])
bookTicket.apply(greenline, ['Noman', 'C3'])
bookTicket.apply(greenline, ['Jubaer', 'C3'])
bookTicket.apply(greenline, ['Rokeya', 'C3'])
console.log(greenline.tickets)
