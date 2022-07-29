class Node {
    // constructor
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

function countNodes(n) {
    var res = 1;
    temp = n;
    while (temp.next != n) {
        res++;
        temp = temp.next;
    }
    return res;
}

function countNodesinLoop(list) {
    var slow_p = list,
        fast_p = list;

    while (slow_p != null && fast_p != null && fast_p.next != null) {
        slow_p = slow_p.next;
        fast_p = fast_p.next.next;
        if (slow_p == fast_p)
            return countNodes(slow_p);
    }

    return 0;
}

function newNode(key) {
    temp = new Node(key);

    return temp;
}


head = newNode(1);
head.next = newNode(2);
head.next.next = newNode(3);
head.next.next.next = newNode(4);
head.next.next.next.next = newNode(5);

head.next.next.next.next.next = head.next;

console.log(countNodesinLoop(head));