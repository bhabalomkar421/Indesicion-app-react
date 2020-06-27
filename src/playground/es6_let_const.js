var nameVar = "omkar";
var nameVar = "monu";
console.log('namevar ', nameVar);

let name = 'jet';
name = 'ye';
console.log('name',name);

const nameConst = 'frank';
// const nameConst = 'jack';
// nameConst = 'jack';
console.log('nameConst', nameConst);

function getPetName(){
    let petname = "paneer";
    return petname;
}
var pet = getPetName();
console.log(pet);

const fullName = 'Omkar Bhabal';
let firstName;
if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);
