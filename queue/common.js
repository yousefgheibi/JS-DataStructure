// Function to find common element of stack and queue
const findCommonElement = (St, Q) => {
    // Initialize size of queue Q to 0
    let Size = 0;
    let v = [];

    // Put every element of queue into stack and calculate size of queue
    while (Q.length != 0) {
        St.push(Q[0]);
        Q.shift();
        Size++;
    }

    // Put extra element of stack into queue again extra element of stack is the element coming from queue. 
    // Now, the queue is reverse
    while (Size != 0) {
        Q.push(St[St.length - 1]);
        St.pop();
        Size--;
    }

    // Traverse while stack and queue is not empty
    while (St.length != 0 && Q.length != 0) {
        // Top element of stack
        let a = St[St.length - 1];
        // Front element of queue
        let b = Q[0];
        // Push the common element in vector if a = b
        if (a == b)
            v.push(a);
        // Else pop the larger value from its container
        (a > b) ? St.pop(): Q.shift();
    }
    return v;
}