function reversequeue() {
    let stack = [];
    while (queue.length > 0) {
        stack.push(queue[0]);
        queue.shift();
    }
    while (stack.length > 0) {
        queue.push(stack[stack.length - 1]);
        stack.pop();
    }
    return stack;
}



// Recursive function
function reverseQueue(queue) {
    if (queue.length == 0)
        return;

    // Dequeue current item (from front)
    let data = queue[0];
    queue.shift();

    // Reverse remaining queue
    reverseQueue(q);

    // Enqueue current
    // item (to rear)
    q.push(data);
}