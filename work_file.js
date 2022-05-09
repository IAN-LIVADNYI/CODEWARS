//https://www.codewars.com/kata/602afedfd4a64d0008eb4e6e/train/javascript
function getDay(day,isLeap) {
    let arrMonth = [['January', 31, 31], ['February', 28, 29], ['March', 30, 30], ['April', 31, 31], ['May', 30, 30], ['June', 31, 31], 'July', 'August', 'September', 'October', 'November', 'December'];
    if (day > 31 && isLeap === false) {
        let printRes;
        let res;
   for(let i = 0;res < 0;i++){
       res = day - arrMonth[i][1];
       printRes = `${arrMonth[i][0]}, ${res}`
   }
        return printRes;
    }
    return `January, ${day}`
}
console.log(getDay(32, false))