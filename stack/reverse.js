let st = [];

function insert_at_bottom(x) {
    if (st.length == 0)
        st.push(x);
    else {
        // All items are held in Function Call Stack until we reach end of the stack. 
        //When the stack becomes empty, the st.size() becomes 0
        let a = st.pop();
        insert_at_bottom(x);

        // push all the items held in Function Call Stack
        st.push(a);
    }


}


function reverse() {
    if (st.length > 0) {
        // Hold all items in Function Call Stack until we reach end of the stack
        let x = st.pop();
        reverse();
        // Insert all the items held in Function Call Stack one by one from the bottom to top.
        insert_at_bottom(x);
    }
}