const number_cardinality = my_number =>{
    if(my_number % 10 !== 0 && my_number % 2 === 0) return 'even';
    if(my_number % 10 === 0) return 'zero';
    if(my_number % 2 !== 0 && my_number % 5 !== 0) return 'odd';
    if(my_number % 5 === 0) return 'five'
}

console.log(number_cardinality(205))