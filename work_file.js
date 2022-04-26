// let arr = [1,2,6,8,6,8,9,5,4,6,5,3,1,4,4,2,5,4,5,8,9,5,6,3,1,4,7,5,6,3,3];
// function findFirstDuplicate(arr){
//
// };
// console.log(findFirstDuplicate(arr))
//
//
//
//
// let str = ['fshsklooejebcijbckclsmsbssllltuwopqqnabzvxxp']
// const ascendantArr = str =>{
//
// };

function mergeArrays(arr1, arr2) {
   let newArr = [...arr1].concat(...arr2).sort((a,b) => a-b);
   let resArr = [];
   for(let i = 0; i < newArr.length; i++){
      if(newArr[i] !== newArr[i + 1]){
         resArr.push(newArr[i])
      }
   }
   return resArr;
}
console.log(mergeArrays([2, 2, 8, 2, 2, 2], [1, 8, 1]))

