// Find the middle of a given linked list

function printMiddle(head) {
    var count = 0;
    var mid = head;
    while (head != null) {
        if ((count % 2) == 1)
            mid = mid.next;
        ++count;
        head = head.next;
    }
    console.log(mid.data);

    // If empty list is provided
    if (mid != null)
        console.log(mid.data);
}