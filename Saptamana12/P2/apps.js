//1. Creati o clasa Person care sa aiba firstName si lastName in constructor

class Person {
    constructor (name,lastname){
       this.name; 
       this.lastname;
    }    
}

const displayPersonName= function(){
    return `${this.name} ${this.lastname}`
}
displayPersonName('Mama', 'Mia');


//2.aduagati o metoda displayPersonName care sa returneze numele complet
//3. creati o persoana cu noua clasa unde dati un nume si-un prenume si apelati metoda respectiva



//Ex2
//1. Creati o clasa Animal care sa aiba in constructor name si weight
//2. Creati urmatoarele metode: eatFood, sleep, weakingUp - fiecare metoda o sa returneze un string '$name is eating' '$name is sleeping' '$name is weaking up'
//3. Creati o clasa noua care sa faca extend la clasa Animal si sa ia numele si weight-ul de la el(tip: super) - ex: class Elephant, class Lion etc
//4. Adaugati 4 metode noi:
//   walking - $name is walking
//   rage - $name is rageing 
//   showBehaviour - returnati metodele eatFood si rage
//   dailyRoutine - returnati metodele weakingUp, rage, eatFood si sleep

//5. Creati o constanta noua din clasa cu numele de animal pe care ati scris-o mai sus( NU DIN clasa Animal ci din clasa Elephant, Monkey, Lion etc etc);
//6. Accesati toate cele 4 metode de pe noul animal. 








//EX3
//1. creati o clasa Account care sa aiba location si name la constructor
//2. creati o clasa Transaction care sa iba sender, bank, amount si reference la constructor
//2.1 - clasa Transaction sa aiba un getter finalSum() care sa scada din amount 10;
//3. creati o clasa Table care sa aiba in cunstructor un array gol transactions
//3.1 Clasa Table sa aiba o metoda addTransaction unde sa putem adauga tranzactiile pe care o sa le creem mai tarziu


// const bankAccount = ...;
// const transaction1 = ...;
// const transaction2 = ...;
// const table = ...;
// table.addTransaction(...)
// console.log(table)

class Account{
    constructor(name, location) {
      this.location = location;
      this.name = name;
    }
  }
  class Transaction{
    constructor(sender, bank, amount, reference) {
      this.sender = sender;
      this.bank = bank;
      this.amount = amount;
      this.reference = reference;
    }
    get finalSum(){
      return `${this.amount} - 10`;
    }
  }
  class Table{
    constructor(){
      this.transactions = [];
    }
    addTransaction(...elem){
      this.transactions.push(...elem)
    }
  }
  const bankAccount = new Account('Bubulina', 'iasi')
  const transaction1 = new Transaction('Dorinel', 'Ing', 20, 'benzina')
  const transaction2 = new Transaction('Viorel' , 'BRD', 30, 'carti')
  const table = new Table();
  table.addTransaction(transaction1, transaction2)
  console.log(table)