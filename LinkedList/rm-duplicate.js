class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}
/*
 * Function to remove duplicates from an unsorted linked list
 */
function removeDuplicate(head) {
    // Hash to store seen values
    var hs = new Set();

    /* Pick elements one by one */
    var current = head;
    var prev = null;
    while (current != null) {
        var curval = current.val;

        // If current value is seen before
        if (hs.has(curval)) {
            prev.next = current.next;
        } else {
            hs.add(curval);
            prev = current;
        }
        current = current.next;
    }

}