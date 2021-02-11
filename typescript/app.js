// Optional Parameter =>  key ?: type
// Compile Code To JS => tsc filename [-w]
// fetch todos
// declare TODO_TYPE
// create todos array || TODO_TYPE[]
// create function take string and add todo to todos array
// create function take id and delete the todo
// create function take id, doneState and update todo with that id
// create function to print todos as "todoId - todoTitle - doneOrNot"
var userName = 'ahmed';
var age = 15;
var playSport = true;
var strArray = [];
var numArray = [];
var users = [];
var user;
user = {
    userName: 'ahmed',
    age: 15,
    playSport: true,
    address: 15
};
function sayHiToUser(customUser) {
    console.log("hi " + customUser.userName);
}
sayHiToUser({
    userName: 'ali',
    age: 29,
    playSport: true
});
function plus(x, y, byTwo) {
    if (byTwo === void 0) { byTwo = true; }
    var result = x + y;
    if (byTwo) {
        result = result * 2;
    }
    return result;
}
var result = plus(1, 2);
console.log(result);
var role = 'publisher';
