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

// let arr = [1,2,3,4,5]

// for (item in arr) {
//   console.log(item)
// }
// for (item of arr) {
//   console.log(item)
// }


///////////////////////////////////////////////////////////////////////////
////////////////////////// FOR OF & FOR IN ////////////////////////////////
///////////////////////////////////////////////////////////////////////////