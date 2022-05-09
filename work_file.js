//https://www.codewars.com/kata/602afedfd4a64d0008eb4e6e/train/javascript
function getDay(day,isLeap) {
    let arrMonth = [['January', 31, 31], ['February', 28, 29], ['March', 31, 31], ['April', 30, 30], ['May', 31, 31], ['June', 30, 30], ['July',31,31], ['August',31,31], ['September',30,30], ['October',31,31], ['November',30,30], ['December',31,31], ['December',0,0]];
    if (day > 31 && isLeap === false) {
        let printRes;
        for (let i = 0; day > 0 || i > arrMonth.length-1; i++) {
            day = day - arrMonth[i][1];
            if ((day - arrMonth[i + 1][1]) < 0) {
                printRes = `${arrMonth[i][0]}, ${day+arrMonth[i][1]}`;
            }
            else if ((day - arrMonth[i + 1][1]) === 0) {
                printRes = `${arrMonth[i][0]}, ${arrMonth[i][1]}`
            }
            else {
                printRes = `${arrMonth[i + 2][0]}, ${day - arrMonth[i + 1][1]}`
            }
        }
        return printRes;
    }
    return `January, ${day}`
}
console.log(getDay(182, false))

//(arrMonth[i+1][1]
// for (let i = 0; day > 0; i++) {
