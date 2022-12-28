class SeatModel {
    constructor () {
        this.seats=[false,false,false,false,false,false,false,false,false]
    }
    getData() {
        return this.seats;
    }
    bookSeats(i) {
        if(this.seats[i] === true) {
            this.seats[i] = false;
        } else {
            this.seats[i] = true;
        }
    }
}

exports.SeatModel = SeatModel