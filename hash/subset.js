function isSubset(arr1, arr2) {
    let i = 0,
        j = 0;
    for (i = 0; i < arr2.length; i++) {
        for (j = 0; j < arr1.length; j++)
            if (arr2[i] == arr1[j])
                break;

        if (j == arr1.length)
            return false;
    }
    return true;
}


let arr1 = [11, 1, 13, 21, 3, 7];
let arr2 = [11, 3, 7, 1];


if (isSubset(arr1, arr2))
    console.log("Yes");
else
    console.log("No");