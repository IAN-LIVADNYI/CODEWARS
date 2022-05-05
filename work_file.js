function getDay(day,isLeap) {
    let arrMonth = [['January', 31], ['February', 28], ['March', 30], ['April',31], ['May',30], ['June',31], 'July', 'August', 'September', 'October', 'November', 'December'];
    let res, month;
    if (day > 31) {
        if (isLeap === false) {
            for (let i = 0; day > arrMonth[i][1]; i++) {
                res = day - arrMonth[i][1];
                month = i;
            }
            return `${arrMonth[month][0]},${res - arrMonth[month][1] + 1}`
        }
        else if(isLeap === true) {
            arrMonth[1][1] = 29;
            for (let i = 0; day > arrMonth[i][1]; i++) {
                res = day - arrMonth[i][1];
                month = i;
            }
            return `${arrMonth[month][0]},${res - arrMonth[month][1] + 1}`
        }

    }
    return `January, ${day}`
}
console.log(getDay(166,false))