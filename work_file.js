// let arr = [1,2,6,8,6,8,9,5,4,6,5,3,1,4,4,2,5,4,5,8,9,5,6,3,1,4,7,5,6,3,3];
// function findFirstDuplicate(arr){
//
// };
// console.log(findFirstDuplicate(arr))
//
//


const ascendantArr = str => {
let arr = (str.split('').sort());
let res = [];
for (let i = 0; i < arr.length; i++){
    if(arr[i] !== arr[i + 1]){
        res.push(arr[i])
    }
}
return (res)
};

console.log(ascendantArr('fshsklooejebcijbckclsmsbssllltuwopdaaaaqqnabzvxxpa'))