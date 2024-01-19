// We exploit that the information about the size of the
// number is encoded in the number of digits.
// First, look at the first digit and group the numbers based on it.
// Then, put them in order of ascending last digit. In the order that 
// they are in, group them by the second digit, and repeat the 
// process, until we hit the last digit of the greatest number.

Math.getDigit = function (num, idx) {
    return parseFloat((num).toString().split('').reverse().join('')[idx] || 0)
}

function radixsort(arr) {
    const maxDigits = arr => Math.max(...arr).toString().length;

    for (let k = 0; k < maxDigits(arr); k++) {
        let newArr = [[], [], [], [], [], [], [], [], [], []];

        arr.forEach(val => {
            let dig = Math.getDigit(val, k);
            newArr[dig].push(val);
        });
        arr = [].concat(...newArr);
    }
    return arr;
}

console.log(radixsort([23, 65, 109, 3, 6, 233]))