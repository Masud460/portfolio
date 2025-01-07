const myName = 'Masud       ';

const myArr = ['Spiderman', 'Thor']

const heroPower = {
    spiderman: 'sling',
    thor: 'hammer',

    getSpiderPower: function () {
        console.log(`spidy power is: ${this.spiderman}`);
    }
}

Object.prototype.masud = function () {
    console.log(`Masud is present in all objects`)
}

Array.prototype.testArr = function () {
    console.log(`Only array method`);
}

// myArr.masud()
// heroPower.masud()

// myArr.testArr()
// heroPower.testArr()


// inheritance
const teacher = {
    makeVideo: true
}

const teachingAssistent = {
    isAvailable: false,
}

const TASupport = {
    doAssignment: 'JS Assignment',
    fullTime: true,

    // __proto__: teacher
}
// TASupport.__proto__ = teacher;

// modern

Object.setPrototypeOf(TASupport, teacher)

const newName = 'Ataullah      '

// Object.prototype.trueLength = function () {
//     console.log(this);
//     console.log(`The real length is: ${this.trim().length}`);
// }

String.prototype.trueLength = function () {
    console.log(this);
    console.log(`The real length is: ${this.trim().length}`);
}

newName.trueLength()