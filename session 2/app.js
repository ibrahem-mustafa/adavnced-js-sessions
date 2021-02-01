// let
// const

// arrow function
// for of
// for in

// JavaScript Classes
// JavaScript Promises
// JavaScript Symbol
// Function Rest Parameter
// Array.find()
// Array.findIndex()



///////////////////////////////////////////////////////////////////////////
///////////////////////////////// CLASS ///////////////////////////////////
///////////////////////////////////////////////////////////////////////////


// Object
// const carObj = {
//   name: 'lancer',
//   model: 2021,
//   price: 15000,
//   print: function () {
//     console.log('this car is ' + this.name + ' with model ' + this.model + ' and it\'s price is ' + this.price)
//   }
// }

// carObj.print();


// function CarAsObject(name, model, price) {
//   const holder = {
//     name: undefined,
//     model: undefined,
//     price: undefined,
//     print() {
//       console.log('this car is ' + this.name + ' with model ' + this.model + ' and it\'s price is ' + this.price)
//     }
//   };

//   holder.name = name;
//   holder.model = model;
//   holder.price = price;

//   return holder;
// }
// const lancerAsObject = CarAsObject('lancer', 2021, 150000);

// lancerAsObject.print();


// class Car {
//   name;
//   model;
//   price;

//   constructor(name, model, price = 200000) {
//     this.name = name;
//     this.model = model;
//     this.price = price;
//   }

//   print() {
//     console.log('this car is ' + this.name + ' with model ' + this.model + ' and it\'s price is ' + this.price)
//   }
// }

// const lancer = new Car('lancer', 2021, 150000);
// const bmw = new Car('BMW', 2022, 10000000000000);


const usersData = [
  {
    id: 1,
    name: 'ibrahem',
    age: 30,
    role: 'admin',
  },
  {
    id: 2,
    name: 'ahmed',
    age: 31,
    role: 'teacher'
  },
  {
    id: 3,
    name: 'mario',
    age: 23,
    role: 'student'
  },
  {
    id: 4,
    name: 'mohammed',
    age: 35,
    role: 'student'
  },
  {
    id: 5,
    name: 'salah',
    age: 39,
    role: 'student'
  },
]


class User {
  id;
  name;
  age;
  role;
  balance;

  constructor(id, name, age, role) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.role = role;
    this.balance = 10000;
  }


  isOld() {
    return this.age > 38
  }

  inc(amount) {
    this.balance += amount;
  } 


  print() {
    console.log('User With Id: ' + this.id + ' -Name: ' + this.name + ' -Age: ' + this.age + ' -WithRole: '+ this.role)
  }
}

const users = [
];

for (userData of usersData) {
  const newUserClass = new User(userData.id, userData.name, userData.age, userData.role)
  users.push(newUserClass)
}

console.log(users)

const admin = users.find(user => user.role === 'admin');


users.forEach(user => {
  user.inc(500);
  console.log(user.balance)
  user.print()
})








///////////////////////////////////////////////////////////////////////////
//////////////////////// { LET, CONST } VS {VAR} //////////////////////////
///////////////////////////////////////////////////////////////////////////

// var variable1 = 'var1'
// No Hoisting => no overwrite
// let variable2;
// No Assign
// const pi = Math.PI;


///////////////////////////////////////////////////////////////////////////
//////////////////////////// Arrow Functions //////////////////////////////
///////////////////////////////////////////////////////////////////////////


// global this (window) => [object] object one => [arrow] function one => this (global)
// global this (window) => [arrow] function one => [arrow] function two => this (global)
// global this (window) => [default] function one => [arrow] function two => this (function one)
// global this (window) => [default] function one => [default] function two => this (function two)



// const state = {
//   user: {
//     id: 1,
//     name: 'ahmed',
//     age: 23,
//     salary: 5000
//   },

//   todos: [
//     {
//       id: 1,
//       userId: 1,
//       text: 'Work Hard'
//     },
//   ],

//   match:  function () {
//     console.log(this);


//     const count = () => {
//       return this.todos.length

//     }
//     // function count() {
//     //   return this.todos.length
//     // }

//     console.log(count())
    
//     start()
//   }
// }

// state.match();




// const arrowFunction = msg => console.log(msg)
// const arrowFunction = (msg, name) => console.log(msg, name)
// const arrowFunction = () => {
//   return console.log('arrowFunction')
// }

// arrowFunction('Hello From Arrow Function', 'mario');


///////////////////////////////////////////////////////////////////////////
////////////////////////// FOR OF & FOR IN ////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// let arr = ['one','two','three','four','five']


// // console.log()


// function  sayTwo(index) {
//   if (arr[index] == 'two') {
//     console.log('Yah it is two');
//   } else {
//     console.log('Not Matched')
//   }
// }

// Loop through Index
// for (index in arr) {
//   sayTwo(index)
// }

// console.log('=======================')

// Loop Through Items
// for (item of arr) {
//   console.log(item)
//   console.log(item == 'two')
// }


///////////////////////////////////////////////////////////////////////////
////////////////////////// FOR OF & FOR IN ////////////////////////////////
///////////////////////////////////////////////////////////////////////////