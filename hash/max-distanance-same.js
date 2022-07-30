// Maximum distance between two occurrences of same element in array
function maxDistance(arr) {
    // Used to store element to first index mapping
    let map = new Map();
    // Traverse elements and find maximum distance between same occurrences with the help of map.
    let max_dist = 0;

    for (let i = 0; i < arr.length; i++) {
        // If this is first occurrence of element, insert its index in map
        if (!map.has(arr[i]))
            map.set(arr[i], i);
        else
            max_dist = Math.max(max_dist, i - map.get(arr[i]));
    }

    return max_dist;
}


let arr = [3, 2, 1, 2, 1, 4, 5, 8, 6, 7, 4, 2];
console.log(maxDistance(arr));


// maximum distance for 2 is 11-1 = 10 this is print
// maximum distance for 1 is 4-2 = 2 
// maximum distance for 4 is 10-5 = 5