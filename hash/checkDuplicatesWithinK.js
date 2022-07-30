function checkDuplicatesWithinK(arr, k) {
    // Creates an empty hashset
    let myset = [];
    // Traverse the input array
    for (let i = 0; i < arr.length; i++) {
        // If already present n hash, then we found
        // a duplicate within k distance
        if (arr.includes(arr[i])) {
            return true;
        }
        // Add this item to hashset
        myset.add(arr[i]);

        // Remove the k+1 distant item
        if (i >= k) {
            index = array.indexOf(arr[i - k]);
            array.splice(index, 1);
        }
    }
    return false;
}

let arr = [10, 5, 3, 4, 3, 5, 6];
if (checkDuplicatesWithinK(arr, 3)) {
    console.log("Yes");
} else {
    console.log("No");
}