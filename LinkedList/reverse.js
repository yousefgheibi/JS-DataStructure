function reverseUtil(curr, prev) {
    if (head == null)
        return head;

    if (curr.next == null) {
        head = curr;
        curr.next = prev;
        return head;
    }
    var next1 = curr.next;
    curr.next = prev;

    reverseUtil(next1, curr);
    return head;
}

function printList(node) {
    while (node != null) {
        console.log(node.data + " ");
        node = node.next;
    }
}

var head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

printList(head);
var res = reverseUtil(head, null);
printList(res);