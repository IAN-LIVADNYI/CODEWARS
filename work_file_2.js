function strongCoder(number) {
    let int = number.toString().split('').map(el => Number(el));
    let index_1 = int.indexOf(1);
    if (index_1 === -1) {
        console.log('No digit 1');
    } else {
        let value_1 = int[index_1 - 1] + int[index_1 + 1];
        let newArr = [];
        newArr.push(value_1);
        for (let i = 0; i < int.length; i++) {
            let box = [];
            if (i === index_1) continue;
            for (let j = 1; j <= int[i]; j++) {
                if (int[i - j] > 0) {
                    box.push(int[i - j])
                }
                if (int[i + j] <= int.length) {
                    box.push(int[i + j])
                }
            }
            let count = 0;
            for (let i = 0; i < box.length; i++) {
                count += box[i];
            }
            newArr.push(count);
        }
        for (let i = 1; i < newArr.length; i++) {
            if (newArr[0] > newArr[i])
                return false;
        }
        return true;
    }
}
strongCoder(9935)

