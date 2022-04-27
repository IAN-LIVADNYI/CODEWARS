let arr = [1,2,6,8,6,8,9,5,4,6,5,3,9,4,4,5,4,5,8,9,5,6,3,5,4,7,5,6,3,3,10];
function findFirstDuplicate(arr){
    for(let i = 0; i < arr.length; i++){
        for(let k = i+1; k < arr.length; k++){
            if(arr[i] === arr[k]) return arr[k];
        }
    }
return "no doubles";
};
console.log(findFirstDuplicate(arr))



