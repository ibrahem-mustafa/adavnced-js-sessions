// console.log('Hello World')

// Var
// Function
// Every Thing Is An Object 1
// Array
// Loops
// Switch
// r function
// Self Invoking


// function arguments
// this keyword
// Every Thing Is An Object 2
// fetch from api




// ///////////////////////////// SELF INVOKING (function) /////////////////////////// //
var views = 0;


// function selfInvoke() {
//   views++
// }

// selfInvoke();


(function () {
  views++
})()

console.log(views)  

// ///////////////////////////// END SELF INVOKING /////////////////////////// //



// ///////////////////////////// R FUNCTION /////////////////////////// //
// function count(x) {
  
//   // if (x < 100) {
//   //   console.log(++x)
//   //   count(x);
//   // }
//   // try to connect ======> request =====> true || truConnect(5) 
// }

// while(x < 100) {
//   console.log(++x)
//     // count();
// }

// count(0);

// ///////////////////////////// END R FUNCTION /////////////////////////// //






// ///////////////////////////// ARRAY & LOOPS /////////////////////////// //


// const responseStatue = 200;
// switch (responseStatue) {
//   case 200:
//   case 401:
//     console.log('Success');
//     break;
//   case 404:
//     console.log('Not Found');
//     break;
//   default:
//     console.error('Status Code Not Found')
//     break;
// }

// const array = [1, 2, 3, 4];
// const array2 = Array.from('ahmed mohammed');

// console.log('ahmed mohammed'.split(' '))

// array2.push(true);
// console.log(array);
// console.log(array2);

// const x = {
//   value: 100
// }

// var str = 'sdsdc'

// console.log(str.toUpperCase())

// str = 15

// console.log(str)

// const users = [
//   {
//     name: 'ahmed',
//     balance: 100
//   },
//   {
//     name: 'ibrahem',
//     balance: 150
//   },
//   {
//     name: 'max',
//     balance: 1000
//   },
//   {
//     name: 'mohammed',
//     balance: 2000
//   },
// ]


// var ibrahem = users.find(function(user) {
//   return user.name == 'ibrahem';
// })

// ibrahem.balance = 150000;

// console.log(ibrahem);

// console.log(users);

// user[1].balance = 10000;




// const state = {
//   balance: 100
// };


// const newState = state;


// var str = 'ahmed'

// var newStr = str;
// console.log(str);
// console.log(newStr)

// newStr = 'ibrahem';


// console.log(str);
// console.log(newStr);

// newState.balance = 150;

// 0 str = ''
// 1 newStr = 'changed'
// 2
// 3 arr = [a,b,c]
// 4 arr2 = arr
// 5


// var arr = [1, 2, 3, 4];
// var arr2 = arr;
// arr2.push(true);
// console.log(arr)
// console.log(arr2)

// var tags = 'math,mplus,mtrick'
// console.log(tags)
// console.log(tags.split('m'))
// var str = 'ahmed mohammed';
// var splitter = str.split('');
// console.log(splitter);
// var combine = splitter.join('')
// console.log(combine)

// var user = {
//   firstName: 'ahmed', 
//   lastName: 'ibrahem'
// }

// console.log(user.firstName + ' ' + user.lastName + ' and his age is : ' + 14)


// var lastValue = '';

// for (var i =0; i < splitter.length; i++) {
//   lastValue += splitter[i];
// }

// console.log(lastValue)


// var arr = [1, 2,3,4,5];

// for (var i= 0; i < arr.length; i++) {
  //   console.log(arr[i]);
  // }
  
  
  // arr.forEach(function (i) {
    //   console.log(i)
    // })
    // { }
// ///////////////////////////// END ARRAY & LOOPS /////////////////////////// //

// ///////////////////////////// EVERY THING IS AN OBJECT 1 /////////////////////////// //
    
// var isAlive;
//  if (health > 80) {
  //  isAlive = 'alive'
  // } else {
//  isAlive = 'not alive'
// }
// var health = 81;

// const obj = {
  //   value: 'sdsd',
//   number: 1231133,
//   bool: true,
//   sayHi: function () {
  //     // ....
//     console.log('hi')
//   },
//   isAlive : health > 80 ? 'alive' : 'not alive'
// }


// console.log('//////////////////////////')
// const nameObj = {
  //   value: 'ahmed',
  //   toUpperCase: function() {
    //     console.log(this.value)
//     console.log('AHMED')
//   }
// }

// nameObj.toUpperCase()
// console.log('//////////////////////////')

// ///////////////////////////// END EVERY THING IS AN OBJECT 1 /////////////////////////// //
// ///////////////////////////// FUNCTION /////////////////////////// //
// var userName = 'ahmed'


// console.log(userName)

// sayHi()

// function sayHi() {
//   console.log("Hi")
// }


// sayHello()

// const sayHello = () => {
//   console.log('hello')
// }

// ///////////////////////////// END FUNCTION /////////////////////////// //

// ///////////////////////////// VAR /////////////////////////// //
// var currentUser = {name: 'ahmed', age: 21};

// if (currentUser) {
//   console.log(currentUser.name);
//   // USE UNDEFINED
//   currentUser = undefined;
// } else {
  //   console.log('User Not Found');
  // }

  // MEMORY 
// currentUser
// currentUser = null '' 1213

// console.log(currentUser)


// console.log(name);

// var name = 'ahmed'

// console.log(name)

// var name = 'mohammed'


// let name = 'max'

// console.log(name)

// console.log(name)

// HOISTING

// ///////////////////////////// END VAR /////////////////////////// //





