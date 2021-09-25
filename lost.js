var arr = [1, 4, 5, 6];
let a = 0;

for (let i = 1; i < 101; i++) {

    if (i != arr[a]) {
        console.log(i);
    } else {
        a++;
    }
}