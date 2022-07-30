// Input: arr[] = { 4, 1, 1, 2, 2, 1, 3, 3 }
// Output: 1, 1, 2, 2, 1

function smallestSubsegment(a, n) {
    // To store left most occurrence of elements
    let left = new Map();
    // To store counts of elements
    let count = new Map();
    // To store maximum frequency
    let mx = 0;
    // To store length and starting index of
    // smallest result window
    let mn = -1,
        strindex = -1;
    for (let i = 0; i < n; i++) {
        let x = a[i];
        // First occurrence of an element, store the index
        if (count.get(x) == null) {
            left.set(x, i);
            count.set(x, 1);
        }

        // increase the frequency of elements
        else
            count.set(x, count.get(x) + 1);

        // Find maximum repeated element and
        // store its last occurrence and first
        // occurrence
        if (count.get(x) > mx) {
            mx = count.get(x);

            // length of subsegment
            mn = i - left.get(x) + 1;
            strindex = left.get(x);
        }

        // select subsegment of smallest size
        else if ((count.get(x) == mx) &&
            (i - left.get(x) + 1 < mn)) {
            mn = i - left.get(x) + 1;
            strindex = left.get(x);
        }
    }

    // Print the subsegment with all occurrences of a most frequent element
    for (let i = strindex; i < strindex + mn; i++) {
        a[i] = a[i] + " ";
        console.log(a[i]);
    }

}

let A = [1, 2, 2, 2, 1];
smallestSubsegment(A);