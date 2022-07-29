// Remove all occurrences of duplicates from a sorted Linked List

class Node {
    constructor(val, next = null) {
        this.data = val;
        this.next = next;
    }
}

const node1 = new Node(11);
const node2 = new Node(11);
const node3 = new Node(11);
const node4 = new Node(75);
const node5 = new Node(75);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const removeDuplicate = (head) => {
    let current = head;
    let prev = null;
    while (current) {
        if (current.next && current.data == current.next.data) {
            let pivot = current;
            let newCurrent = current.next
            while (newCurrent && pivot.data === newCurrent.data) {
                // removing current;
                pivot.next = newCurrent.next;
                // increment
                newCurrent = newCurrent.next;
            }
            // removing first duplicate element
            if (prev) prev.next = pivot.next;
            else head = pivot.next

            current = pivot.next
        } else {
            prev = current;
            current = current.next;
        }
    }
    return head;
}

console.log(JSON.stringify(removeDuplicate(node1)));