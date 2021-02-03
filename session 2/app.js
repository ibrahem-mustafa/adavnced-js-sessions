

// let
// const
// arrow function
// for of
// for in
// JavaScript Classes
// JavaScript Promises
// JavaScript Symbol
// string
// number
// boolean
// null
// object
// Symbol
// Function Rest Parameter
// Array.find()
// Array.findIndex()

///////////////////////////////////////////////////////////////////////////
/////////////////////////// FIND & FIND INDEX /////////////////////////////
///////////////////////////////////////////////////////////////////////////

// const users = [
//   {
//     id: 1,
//     name: 'ahmed', 
//     age: 15
//   },
//   {
//     id: 2,
//     name: 'mohammed', 
//     age: 25
//   },
//   {
//     id: 3,
//     name: 'ziad', 
//     age: 26
//   },
//   {
//     id: 4,
//     name: 'magdy', 
//     age: 30
//   },
  
// ]


// const user = users.find(function (user) {
//   return user.id === 3
// })

// console.log(user)

// const userIndex = users.findIndex(function (user) {
//   return user.id === 3
// })

// console.log(userIndex)


///////////////////////////////////////////////////////////////////////////
//////////////////////// Function Rest Parameter //////////////////////////
///////////////////////////////////////////////////////////////////////////

// function withRestParameter(numberOne, numberTwo, ...arg) {
//   console.log(arg)
// }


// withRestParameter(1, 2, 3, 4, 5)


// function call(index, ...numbers) {
//   if (index === 'all') {
//     numbers.forEach(number => console.log('Call Number: ' + number))
//   } else if (index >= 0) {
//     console.log('Call Number: ' + numbers[index])
//   }
// }


// call('all', '0101894561', '0564651310', '015565123132');


///////////////////////////////////////////////////////////////////////////
//////////////////////////////// Symbol //////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// const user1 = {
//   id: Symbol('1'),
//   name: 'ahmed'
// }

// const user2 = {
//   id: Symbol('1'),
//   name: 'ibrahem'
// }

// currentUser = {id, name, role}

// post => send => currentUser ? send(currentUser.id) : false


// const usersArray = [
//   {
//     id: Symbol('1'),
//     name: 'ahmed'
//   },
//   {
//     id: Symbol('1'),
//     name: 'ibrahem'
//   }
// ]

// const userIds = usersArray.map(user => user.id)

// console.log(userIds);


// const idArr = [ user2.id, user1.id]

// idArr.forEach(id => {
//   if (user1.id === id) {
//     console.log(user1)
//   } else {
//     console.log(user2)
//   }
// })


// console.log(user1.id == user2.id)



///////////////////////////////////////////////////////////////////////////
//////////////////////// SetTimeout & SetInterval /////////////////////////
///////////////////////////////////////////////////////////////////////////

// setTimeout
//  setInterval

// setTimeout(function () {
//   console.log('One Second Passed')
// }, 1000);

// let seconds = 0;
// const interval = setInterval(() => {
//   seconds++
//   console.log(seconds + ' seconds Passed')

//   if (seconds === 10) {
//     clearInterval(interval)
//   }
// }, 1000);


///////////////////////////////////////////////////////////////////////////
//////////////////////////////// promise //////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// New Promise takes a function with two arguments called [ resolve & reject ] || function (resolve, reject) {//your code} || (resolve, reject) => {//your code}
// {resolve} is standard of completing the process successfully
// {reject} is standard of failing in proceed the process
// each one of the [resolve , reject] is a function we can call at attach to it the result
// in case of resolve we pass the data we want to use in the nest step || resolve(data) || EX: resolve({status: 'success', code: 200})
// in case of reject we pass the error that represent what's gone wrong || reject(error) || Ex:  reject({status 'failed', code: 404})
// 
// promise body is to process some logic and wait until it finished to proceed the rest
/** 
 * new Promise((resolve, reject) => {
 *  do some login 
 * 
 * when logic is done and the result is what we need call the resolve function || resolve(data)
 * else we call the reject || reject(error)
 * 
 * })
 * **/


/**
 * new Promise((resolve, reject) => {
 *  
 * 
 * some code
 * process
 * process
 * process
 * process
 * process
 * process
 * process
 * finish
 * [result]
 * 
 * result is Ok ? resolve(result) : reject(error)
 * 
 * })
 *  */  



//  const isOk = new Promise(function (resolve, reject) {
//    const loadingSuccess = false;
//    setTimeout(function () {
//      if (loadingSuccess) {
//        resolve({
//          status: 'success',
//          loaded: true,
//        })
//      } else {
//        reject('Can not load')
//      }
//    }, 1000);
//  })


//  isOk.then(function (result) {
//    console.log(result)
//  }).catch(function (error) {
//    console.log(error)
//  })

// const isOk = new Promise((resolve, reject) => {
//   const statusOk = true
//   setTimeout(() => {
//     statusOk ? resolve({
//       status: 'success',
//       isSuccess: true
//     }) : reject('status Is Not Ok')
//   }, 1000);
// })

// isOk.then(result => console.log(result)).catch(err => console.log(err))


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


// function fetchClone(url) {
//   return new Promise((resolve, reject) => {


    
//     const loaded = true;
//     let data;
//     // get data from url;
//     setTimeout(() => {
//       if (loaded) {
//         data = [1,2, 3]
//         resolve(data)
//       }else {
//         reject('Can Not Load Numbers')
//       }
//     }, 1000);
//   })
// }

// fetchClone('https://getSomeData').then(result => console.log(result)).catch(err => console.log(err))



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


// const usersData = [
//   {
//     id: 1,
//     name: 'ibrahem',
//     age: 30,
//     role: 'admin',
//   },
//   {
//     id: 2,
//     name: 'ahmed',
//     age: 31,
//     role: 'teacher'
//   },
//   {
//     id: 3,
//     name: 'mario',
//     age: 23,
//     role: 'student'
//   },
//   {
//     id: 4,
//     name: 'mohammed',
//     age: 35,
//     role: 'student'
//   },
//   {
//     id: 5,
//     name: 'salah',
//     age: 39,
//     role: 'student'
//   },
// ]


// class User {
//   id;
//   name;
//   age;
//   role;
//   balance;

//   constructor(id, name, age, role) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
//     this.role = role;
//     this.balance = 10000;
//   }


//   isOld() {
//     return this.age > 38
//   }

//   inc(amount) {
//     this.balance += amount;
//   } 


//   print() {
//     console.log('User With Id: ' + this.id + ' -Name: ' + this.name + ' -Age: ' + this.age + ' -WithRole: '+ this.role)
//   }
// }

// const users = [
// ];

// for (userData of usersData) {
//   const newUserClass = new User(userData.id, userData.name, userData.age, userData.role)
//   users.push(newUserClass)
// }

// console.log(users)

// const admin = users.find(user => user.role === 'admin');


// users.forEach(user => {
//   user.inc(500);
//   console.log(user.balance)
//   user.print()
// })








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

 

// const normalFunction = argument1 =>  console.log(argument1);



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