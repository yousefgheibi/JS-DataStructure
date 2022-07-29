// Input:  1->10->30->14,  index = 2
// Output: 30  
// The node at index 2 is 30

// 1. Initialize count = 0
// 2. Loop through the link list
//      a. if the count is equal to the passed index then return the current
//          node
//      b. Increment count
//      c. change current to point to next of the current.



function GetNth(index) {
    var current = head;
    var count = 0;
    while (current != null) {
        if (count == index)
            return current.data;
        count++;
        current = current.next;
    }

    return 0;
}




function GetNth(head, n) {
    var count = 0;
    if (head == null) // edge case - if head is null
        return -1;
    // if count equal too n return node.data
    if (count == n)
        return head.data;

    // recursively decrease n and increase
    // head to next pointer
    return GetNth(head.next, n - 1);
}