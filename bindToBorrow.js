const normalPerson = {
    firstName : 'Fakhruddin',
    lastName : 'Ahmed',
    salary : 30000,
    getFullName : function(){
        console.log(this.firstName, this.lastName)
    },
    chargeBill : function(amount){
        // console.log(this)
        this.salary = this.salary - amount;
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

const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(10000);
console.log(friendlyPerson.salary);
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(3000);
// console.log(heroPerson.salary);