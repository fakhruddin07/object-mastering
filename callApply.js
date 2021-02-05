const normalPerson = {
    firstName : 'Fakhruddin',
    lastName : 'Ahmed',
    salary : 30000,
    getFullName : function(){
        console.log(this.firstName, this.lastName)
    },
    chargeBill : function(amount, tax, tips){
        // console.log(this)
        this.salary = this.salary - amount - tax - tips;
        return this.salary;
    }
}


const heroPerson = {
    firstName : 'Hero',
    lastName : 'Alam',
    salary : 40000
}


const friendlyPerson = {
    firstName : 'Friendly',
    lastName : 'Noman',
    salary : 50000
}


// call method
// for heroPerson
normalPerson.chargeBill.call(heroPerson, 5000, 250, 100);
normalPerson.chargeBill.call(heroPerson, 4000, 600, 50);
console.log(heroPerson.salary);

// // for friendlyPerson
// normalPerson.chargeBill.call(friendlyPerson, 5000, 250, 100);
// normalPerson.chargeBill.call(friendlyPerson, 4000, 600, 50);
// console.log(friendlyPerson.salary);


// // apply method
// // for heroPerson
// normalPerson.chargeBill.apply(heroPerson, [4000, 400, 50]);
// normalPerson.chargeBill.apply(heroPerson, [5000, 500, 50]);
// console.log(heroPerson.salary);

// for friendlyPerson
normalPerson.chargeBill.apply(friendlyPerson, [3000, 200, 50]);
normalPerson.chargeBill.apply(friendlyPerson, [2000, 200, 50]);
console.log(friendlyPerson.salary);