// Javascript program to check if there exists a pair in array whose sum results in x.

function chkPair(arr, x) {
    for (i = 0; i < (arr.length - 1); i++) {
        for (j = (i + 1); j < arr.length; j++) {
            if (arr[i] + arr[j] == x) {
                console.log("Pair with a given sum " + x + " is (" + arr[i] + ", " + arr[j] + ")");
                return true;
            }
        }
    }
    return false;
}

let A = [0, -1, 2, -3, 1];
let x = -2;

if (chkPair(A, x)) {
    console.log('Valid pair exists')
} else {
    console.log('No valid pair exists for' + x);
}