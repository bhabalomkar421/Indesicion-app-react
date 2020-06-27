const add = (a,b) => {
    // console.log(arguments);
    return a + b;
}

// console.log(add(5,4));

//this

const user = {
    name : "omkar",
    cities : ['dombivli','thane','vashi'],
    printPlaceLived() {
        // const that = this;
        return this.cities.map((city) =>  this.name + ' has lived in ' + city + '!!!');
    }
};

// console.log(user.printPlaceLived());

const multiplier = {
    numbers : [1,2,3],
    multiplyby : 4,
    multiply() {
        return this.numbers.map((no) => this.multiplyby * no);
    }
};

console.log(multiplier.multiply());

