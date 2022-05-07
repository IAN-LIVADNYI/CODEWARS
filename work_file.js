//https://www.codewars.com/kata/602afedfd4a64d0008eb4e6e/train/javascript
function getDay(day,isLeap) {
    let arrMonth = [['January', 31, 31], ['February', 28, 29], ['March', 30, 30], ['April', 31, 31], ['May',30,30], ['June',31,31], 'July', 'August', 'September', 'October', 'November', 'December'];
    let printRes,res;
        if (day > 31 && isLeap === false) {
            for (let i=0; res > arrMonth[i][1]; i++) {
                res = day - arrMonth[i][1];
                printRes = `${arrMonth[i+1][2]},${day}`;
            }
            return printRes;
        }
        else if (day > 31 && isLeap === true) {
            for (let i=0; ostatok > arrMonth[i][2]; i++) {
                ostatok = ostatok - arrMonth[i][2];
                printRes = `${arrMonth[i+1][0]},${ostatok}`;
            }
            return printRes;
        }
    return `January, ${day}`
}
console.log(getDay(60, false))