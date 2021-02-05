const personalInfo = {
    firstName : 'Fakhruddin',
    lastName : 'Ahmed',
    nickName : 'Noman',
    salary : 30000,
    getFullName : function(){
        console.log(this.firstName, this.lastName, this.nickName)
    },
    chargeBill : function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

personalInfo.chargeBill(2000);
personalInfo.chargeBill(3000);
console.log(personalInfo.salary);