function oddCount(n){
    let arr =[];
    let i = 1;
    while (i < n){
        if(i % 2 !== 0){
            arr.push(i);
        }
        i++
    }
    return arr.length;
}

console.log(oddCount(15023))