// Optional Parameter =>  key ?: type
// Compile Code To JS => tsc filename [-w]

// fetch todos
// declare TODO_TYPE
// create todos array || TODO_TYPE[]
// create function take string and add todo to todos array
// create function take id and delete the todo
// create function take id, doneState and update todo with that id
// create function to print todos as "todoId - todoTitle - doneOrNot"

const userName: string = 'ahmed'
const age: number = 15;
const playSport: boolean = true


const strArray: string[] = []
const numArray: number[] = [];

// type (any) can take any value type

type STUDENT_TYPE = {
  userName: string,
  age: number,
  playSport: boolean,
  address ?: string | number
}


const users: STUDENT_TYPE[] = [];




let user: STUDENT_TYPE;

user = {
  userName: 'ahmed',
  age: 15,
  playSport: true,
  address: 15
}

function sayHiToUser(customUser: STUDENT_TYPE) {

  console.log("hi " + customUser.userName);
}


sayHiToUser({
  userName: 'ali',
  age: 29,
  playSport: true
})



function plus(x: number, y: number, byTwo: boolean = true): number {

  let result = x + y;
  if (byTwo) {
    result = result * 2
  }
  return result
}


const result = plus(1, 2,)

console.log(result)



// type USER_ROLE = string | number
type USER_ROLE = "admin" | "publisher" | "user";

const role: USER_ROLE = 'publisher'


