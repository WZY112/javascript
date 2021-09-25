let arr = [3, 46, 1, 2, 4, 0, 2];
let change;
for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length; j > i; j--) {
        if (arr[j] < arr[j - 1]) {
            change = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = change;
        }
    }
}
// console.log(arr);
console.log(`最小：${arr[0]},第二小：${arr[1]}`);