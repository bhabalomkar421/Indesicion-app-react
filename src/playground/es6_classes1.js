class Person{
    constructor(name = 'Annonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi , I am ${this.name}`;
    }
    getDescription(){
        return this.name + ' is ' + this.age +' years old';
   }
}

// const me = new Person('omkar');
// console.log(me);

// const me2 = new Person();
// console.log(me2.getDescription());

class Student extends Person{
    constructor(name, age, stream){
        super(name,age);
        this.stream = stream;
    }
    hasStream(){
        return !!this.stream;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasStream()){
            description += ` and his stream is ${this.stream}`;
        }
        return description;

    }
}

const stud1 = new Student('omkar', 20, 'Computer Science');
console.log(stud1);
console.log(stud1.hasStream());
console.log(stud1.getDescription());


class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let greet = super.getGreeting();
        if(this.homeLocation){
            greet += ` from ${this.homeLocation}`;
        }
        return greet;
    }
}

const t1 = new Traveler('omkar', 20,'Dombivli');
console.log(t1)
console.log(t1.getGreeting());

const t2 = new Traveler('omkar', 20);
console.log(t2)
console.log(t2.getGreeting());

// class User{
//     constructor(name, age = 0){
//         this.name = name || 'Anonmynous';
//         this.age = age;
//     }
//     getDescription(){
//         return this.name + ' is ' + this.age +' years old';
//     }
// }

// const user = new User('omkar', 20);
// console.log(user.getDescription());

// const user1 = new User();
// console.log(user1.getDescription());
