class BookingModel {
    constructor() {
        this.bookings = [];
    }
    getBooking() {
        return this.bookings;
    }
    setBooking(booking) {
        this.bookings.push(booking);
        return booking
    }
}

exports.BookingModel=BookingModel
