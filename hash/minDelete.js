// Minimum delete operations to make all elements of array same

function minDelete(arr) {
    // Create an hash map and store frequencies of all array elements
    // in it using element as key and frequency as value
    let freq = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (freq.has(arr[i])) {
            freq.set(arr[i], freq.get(arr[i]) + 1)
        } else {
            freq.set(arr[i], 1)
        }
    }

    // Find maximum frequency among all frequencies.
    let max_freq = Number.MIN_SAFE_INTEGER;
    for (let entry of freq)
        max_freq = Math.max(max_freq, entry[1]);

    // To minimize delete operations, we remove all elements but the most frequent element.
    return arr.length - max_freq;
}

// Driver code
let arr = [4, 3, 4, 4, 2, 4];

console.log(minDelete(arr));