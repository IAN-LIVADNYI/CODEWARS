const split = str => {
    let newArr = str.split('');
    let ARR = [];
    for(let i = 0; i < newArr.length; i = i + 2){
        let smallStr = '';
        smallStr += newArr[i] + newArr[i+1]
        ARR.push(smallStr)
    }
    return ARR;
}
console.log(split('rabcdkflgghfkety'))




