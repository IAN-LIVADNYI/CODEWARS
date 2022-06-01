//1. Create 5 variables, initialize them with integers and find the average of variables. Print the result to console
let variables = [{a : 1}, {b : 2}, {c : 3}, {d : 4}, {e : 5}];
let sum = 0;
// for(let i = 0; i < variables.length; i++){
//     sum += Number(Object.values(variables[i]));
// }
variables.forEach(function (el) {
    sum += Number(Object.values(variables[el]))
})
    console.log(sum);

// console.log(a);
// arr.forEach(function(el) {
//     newArr.push(el + 2);
// });