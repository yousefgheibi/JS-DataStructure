function mostFrequent(arr) {
    arr.sort();

    // find the max frequency using linear traversal
    let max_count = 1,
        res = arr[0];
    let curr_count = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == arr[i - 1])
            curr_count++;
        else
            curr_count = 1;

        if (curr_count > max_count) {
            max_count = curr_count;
            res = arr[i - 1];
        }

    }

    return res;
}


let arr = [40, 50, 30, 40, 50, 30, 30];
document.write(mostFrequent(arr));