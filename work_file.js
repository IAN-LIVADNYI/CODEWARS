function getDay(day,isLeap) {
    let arrMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const leapYear = new Date(2020, 0, 1);
    const regYear = new Date(2021, 0, 1);
    if (isLeap) {
        leapYear.setDate(day);
        return res = `${arrMonth[leapYear.getMonth()]}, ${leapYear.getDate()}`;
    }
    else {
        regYear.setDate(day);
        return res = `${arrMonth[regYear.getMonth()]}, ${regYear.getDate()}`;
    }
}
console.log(getDay(60,false))