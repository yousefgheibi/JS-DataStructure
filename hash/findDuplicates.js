function findDuplicates(arr) {

    // initialize ifPresent as false
    let ifPresent = false;

    // ArrayList to store the output
    let al = new Array();

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                // checking if element is
                // present in the ArrayList
                // or not if present then break
                if (al.includes(arr[i])) {
                    break;
                }

                // if element is not present in the
                // ArrayList then add it to ArrayList
                // and make ifPresent at true
                else {
                    al.push(arr[i]);
                    ifPresent = true;
                }
            }
        }
    }

    // if duplicates is present
    // then print ArrayList
    if (ifPresent == true) {

        console.log(`[${al}]`);
    } else {
        console.log("No duplicates present in arrays");
    }
}

// Driver Code

let arr = [12, 11, 40, 12, 5, 6, 5, 12, 11];

findDuplicates(arr);