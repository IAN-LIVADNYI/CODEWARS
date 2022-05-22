//1. Create 5 variables, initialize them with integers and
// find the average of variables. Print the result to console


//2. Create a variable, initialize it with a positive integer.
// Make it negative and print the result to console


//3. Write a code that calculates your BMI (Body Mass Index),
// where weight=<your_weight_in_kg> and height=<your_height_in_m>.
// Print the result to the console.
// BMI = kg/m2


//4. Дана сторона куба  5 см. Найти объем куба. Вывести ответ в виде строки: Объем куба составляет {вложить полученный результат} см.
const cubeVolume = n =>{
    let res = Math.pow(n,3);
    return `Объем куба составляет ${res} см.`
}
console.log(cubeVolume(8))