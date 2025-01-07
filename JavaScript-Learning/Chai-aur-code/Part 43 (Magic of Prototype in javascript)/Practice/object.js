// function multyplyByFive(num) {
//     return num * 5;
// }
// multyplyByFive.power = 5;

// console.log(multyplyByFive(5));
// console.log(multyplyByFive.power)


// function user(username, loginCount, isLoggedIn) {
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn;

//     return this
// }


// console.log(user('Masud', 32, false));


function user(username, score) {
    this.username = username;
    this.score = score;

    return this
}

user.prototype.incresse = function () {
    this.score++;
}

user.prototype.printMe = function () {
    console.log(this);
    console.log(`${this.username} bougth a tea with ${this.score} taka`);
}

const userOne = new user('Masud', 24);
const userTwo = new user('Mahfuj', 12)

userOne.printMe()
userTwo.printMe()
userOne.incresse()
userTwo.incresse()