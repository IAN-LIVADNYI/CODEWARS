function eachCons(array, n) {
    let arrNew = [];
    for(let k = 0; k < array.length-n+1; k++){
        let litleArr = []
        for(let i = k; i < n+k; i++){
            litleArr.push(array[i])
        }
        arrNew.push(litleArr)
    }
    return arrNew;
}

console.log(eachCons([1,2,3,4], 2));
//[[1,2,3],[2,3,4]]