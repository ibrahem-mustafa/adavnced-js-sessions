
/////////////////////////// STRING ////////////////////////
// includes => 4
// trim => 3
// substr => 2
// repeat => 2
// replace => 2
///////////////////////////////////////////////////////////

//////////////////////////// (include) //////////////////////////// 

// const userName = 'ibrahem mustafa';

// console.log(userName.includes('mustafa'))

// const usersNames = [
  // 'ahmed mohammed',
// 'mario',
// 'ibrahem',
// 'isam ahmed'
// ]

// let counter = 0;

// usersNames.forEach(name => {
  //   if (name.includes('mario')) {
//     counter++
//   }
// })

// console.log(counter)

//////////////////////////// (trim) //////////////////////////// 

// const input = ' ahmed mostafa '
// const username = 'ahmed mostafa'
// console.log(input.trim() === username)

//////////////////////////// (SUB_STR) //////////////////////////// 

// const userName = 'ahmed ibrahem';
// const date = new Date();
// console.log(date.toLocaleDateString().substr())
// console.log(userName.substr(0, 4))

//////////////////////////// (REPEAT) //////////////////////////// 

// console.log('ha'.repeat(10))

//////////////////////////// (REPLACE) //////////////////////////// 

// const inputValue = 'ibrahem says hi';

// console.log(inputValue.replace('ibrahem', 'name'))

///////////////////////////////////////////////////////////

/////////////////////////// ARRAY ////////////////////////

// filter
// new Array(10)
// fill => all
// includes => 6
// every => 6
// reduce => 6
// map => 4
// concat => 2
// splice vs slice
// spread operator (...)

///////////////////////////////////////////////////////////


//////////////////////// FILTER //////////////////////////
// const users = [
  //   {
    //     id: 1,
    //     name: 'ahmed',
    //     age: 15
    //   },

    //   {
  //     id: 2,
  //     name: 'mohammed',
//     age: 15
//   },
//   {
  //     id: 3,
  //     name: 'max',
  //     age: 21
//   },
//   {
//     id: 4,
//     name: 'salah',
//     age: 32
//   },
//   {
//     id: 5,
//     name: 'mohammed',
//     age: 19
//   },
// ]

// const teenAgers = users.filter(user => user.age < 18)
// console.log(teenAgers);


//////////////////// NEW ARRAY & FILL //////////////////////

// const lights = new Array(3).fill(1)

// console.log(lights)

// lights.fill(0)

// console.log(lights)


//////////////////////// INCLUDES //////////////////////////

// const ages = [15, 20, 21];

// console.log(ages.includes(15))

//////////////////////// EVERY //////////////////////////

// const ages = [15, 16, 15];

// console.log(ages.every(number => number < 18))

///////////////////////// REDUCE ///////////////////////////


// const users = [
//   // 0
//   {
//     id: 1,
//     name: 'ahmed',
//     balance: 2000
//   },
//   //  0 + 2000 = 2000
//   {
//     id: 2,
//     name: 'mohammed',
//     balance: 2000
//   },

//   // 2000 + 2000 = 4000
//   {
//     id: 3,
//     name: 'max',
//     balance: 5000
//   },

//   // 4000 + 5000 = 9000
//   {
//     id: 4,
//     name: 'salah',
//     balance: 200
//   },
//   // 9000 + 200 = 9200
//   {
//     id: 5,
//     name: 'mohammed',
//     balance: 90000
//   },
//   //  9200 + 90000 = 99200
// ]

// map
// for
// reduce

// const balance = users.reduce(function (prev, current) {
//   return prev + current.balance
// }, 0)

// console.log(balance);


///////////////////////// MAP ///////////////////////////


// const users = [
//   {
//     id: 1,
//     name: 'ahmed',
//     balance: 2000
//   },
//   {
//     id: 2,
//     name: 'mohammed',
//     balance: 2000
//   },
//   {
//     id: 3,
//     name: 'max',
//     balance: 5000
//   },
//   {
//     id: 4,
//     name: 'salah',
//     balance: 200
//   },
//   {
//     id: 5,
//     name: 'mohammed',
//     balance: 90000
//   },
// ]

// const usersNames = [];

// users.forEach(user => usersNames.push(user.name));
// console.log(usersNames);

// let usersNames = mapUsers(users)

// function mapUsers(users) {
//   return users.map(
//     user => ({
//       id: user.id,
//       name: 'user ' + user.name,
//       balance: user.balance + 200
//     })
//   );
// }


// users.push({
//   id:15,
//   name: 'ali',
//   balance: 6000
// })

// usersNames = mapUsers(users);


// console.log(usersNames)


///////////////////////// CONCAT ///////////////////////////


// const arr1 = [1, 2, 3, 4]
// const arr2 = [5, 6, 7, 8]
// const arr3 = [234, 435, 643, 453]
// const arr4 = [233, 234, 234, 2453]


// const fullArray = arr2.concat(arr1, arr3, arr4);
// console.log(fullArray)
// console.log(arr1)

/////////////////////// SLICE VS SPLICE ////////////////////

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const withSlice = arr.slice(0, 5); 

// console.log(withSlice)
// console.log(arr)

// const withSplice = arr.splice(0, 5, 15,20,21,90); 
// console.log(withSplice)
// console.log(arr)

/////////////////////// SPREAD OPERATOR ////////////////////
// ...

// const users = [
//   {
//     id: 1,
//     name: 'ahmed',
//     balance: 2000,
//     pastBalances: [1000, 2000]
//   },
//   {
//     id: 2,
//     name: 'mohammed',
//     balance: 2000,
//     pastBalances: [1000, 2000]
//   },
//   {
//     id: 3,
//     name: 'max',
//     balance: 5000,
//     pastBalances: [1000, 4000]
//   },
//   {
//     id: 4,
//     name: 'salah',
//     balance: 200,
//     pastBalances: [1000, 1500]
//   },
//   {
//     id: 5,
//     name: 'mohammed',
//     balance: 90000,
//     pastBalances: [1000, 2000, 15000]
//   },
// ]


// let fullEx = [[100, 200], [200, 1000], [1500, 1000], [100, 200], [200, 1000], [1500, 1000], [100, 200], [200, 1000], [1500, 1000], [100, 200], [200, 1000]]
// const fullPaidArray = users.map(user => (user.pastBalances))
// let fullPaid = [];
// fullPaidArray.forEach((arr, i) => fullPaid  = [...fullPaid, ...fullEx[i]])

// console.log(fullPaid)






// let arr1 = [1, 2, 3, 4]

// const arr2 = [5]
// const arr3 = [5, 6, 7, 8]


// // const newArray = arr1.concat(arr2, arr3);

// arr1 = [...arr1, null, ... arr2, null, ...arr3, ];

// console.log(arr1)


/////////////////////////// OBJECT ////////////////////////

// Object.keys
// Object.values
// Object.entries
// Rest operator

///////////////////////// Object.keys & Object.values //////////////////////

// const obj = {
//   name: 'Ahmed',
//   age: 18,
//   salary: 2000,
// };

// const keys = Object.keys(obj)

// console.log(keys)
// const values = Object.values(obj)

// console.log(keys)


// const strArray = ['one', 'two', 'three'];

// for (item of keys) {
//   console.log(obj[item])
// }

// console.log(keys)
// console.log(values)




///////////////////////// Object.entries //////////////////////

// const obj = {
//   name: 'Ahmed',
//   age: 18,
//   salary: 2000,
// }

// const toArr = Object.entries(obj)
// console.log(toArr)


///////////////////////// Rest Operator //////////////////////


// function withRest(...inputs) {
//   console.log(inputs)

//   inputs.forEach(input => console.log(input))
// }

// withRest('ahmed', 1, true)


///////////////////////// Rest Operator For {OBJECT} && OBJECT NOTATION //////////////////////

// OBJECT NOTATION

// const arr = ['ahmed', 21, 3000]

// const [name, age,] = arr;

// console.log(name, age)

// const response = {
//   statusCode: 200,
//   data: {
//     "id": "215",
//   "name": "mahrous",
//   "email": "mahos333345@gmail.com",
//   "national_id": "",
//   "image": "",
//   "subject": "",
//   "visa": "0",
//   "specialty": "sergry",
//   "user_type": "Doctor",
//   "university": "zag",
//   "phone": "0",
//   "subjects": []
//   }
// }

// const {
//   user_type,
//   id,
//   name,
//   email
// } = response.data;

// console.log(user_type, id, name, email)


// const settings = {
//   fullscreen: false,
//   loggedIn: false,
//   primaryColor: 'blue',
//   secondaryColor: 'red',
// }

// function printColors({primaryColor, secondaryColor, ...more}) {
//   console.log(primaryColor, secondaryColor)
//   console.log(more)
// }

// printColors(settings)

///////////////////////////////////////////////////////////


/////////////////////////// FUNCTION ////////////////////////

// async function and await


// console.log(typeof 'ahmed' === 'number')



// async function getData() {
//   const response 
// }
// const isOk1 = new Promise((resolve, reject) => {
//   const statusIsOk = true;
//   setTimeout(() => {
//     statusIsOk ? resolve('Promise 1') : reject('It is not Ok')
//   }, 1000);
// })


// const isOk2 = new Promise((resolve, reject) => {
//   const statusIsOk = true;
//   setTimeout(() => {
//     statusIsOk ? resolve('Promise 2') : reject('It is not Ok')
//   }, 2000);
// })
// const isOk3 = new Promise((resolve, reject) => {
//   const statusIsOk = false;
//   setTimeout(() => {
//     statusIsOk ? resolve('Promise 3') : reject('It is not Ok')
//   }, 3000);
// })


// isOk1.then((result1) => {
//   console.log(result1)
//   isOk2.then((result2) => {
//     console.log(result2)
//     isOk3.then((result3) => {
//       console.log(result3)
//     }).catch((error) => console.log(error))
//   }).catch((error) => console.log(error))
// }).catch((error) => console.log(error))


async function getResult() {
  try {
    const data = await isOk1

    // renderData(data)
    const result2 = await isOk2
    const result3 = await isOk3
  } catch (err) {
    console.log(err)
  }
}
getResult()





