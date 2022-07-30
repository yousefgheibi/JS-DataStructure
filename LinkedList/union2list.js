class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    push(new_data) {
        var new_node = new Node(new_data);
        new_node.next = this.head;
        this.head = new_node;
    }

    isPresent(head, data) {
        var t = head;
        while (t != null) {
            if (t.data == data)
                return true;
            t = t.next;
        }
        return false;
    }

    getUnion(head1, head2) {
        var t1 = head1,
            t2 = head2;

        while (t1 != null) {
            this.push(t1.data);
            t1 = t1.next;
        }

        while (t2 != null) {
            if (!this.isPresent(this.head, t2.data))
                this.push(t2.data);
            t2 = t2.next;
        }
    }

    getIntersection(head1, head2) {
        var result = null;
        var t1 = head1;

        while (t1 != null) {
            if (this.isPresent(head2, t1.data))
                this.push(t1.data);
            t1 = t1.next;
        }
    }
}