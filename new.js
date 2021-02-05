class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person ('Hero', 'Alom', 40000);
console.log(heroPerson);

const friendlyPerson = new Person ('Fakhruddin', 'Ahmed', 50000);
console.log(friendlyPerson);


// old method
function personProfile (firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const profile = new personProfile ( 'Noman', 'Ahmed', 100000);
console.log(profile);