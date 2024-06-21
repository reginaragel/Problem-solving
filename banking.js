

const person={
    personName:'vijay',
    acc:34556,
    amt:15000
};
const person1={
    personName:'rahel',
    acc:34566,
    amt:10000
};
const arrPersons = []
arrPersons.push(person)
arrPersons.push(person1)
const deposit=(acc,ammount)=>{
   const person =  findByAccountNumber(acc,arrPersons)
  //let currentAmnt = person.amt
//    person.amt = ammount
//    console.log(person)
}





const findByAccountNumber = (acctNumber, ...arrPerson) => {

const foundPerson =  arrPerson.find(person => person.acc === acctNumber)
 return  foundPerson 

}




deposit(34556,1000)