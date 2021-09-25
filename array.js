var arr = [3, 4, 1, 2, 8];
var max = arr[0],
    min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i];
    }
    if (min > arr[i]) {
        min = arr[i];
    }
}
console.log(max);
console.log(min);