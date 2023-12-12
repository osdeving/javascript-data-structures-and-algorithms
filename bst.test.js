class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BstTree {
    constructor() {
        this.root = null;
    }

    preOrder(node = this.root, callback = console.log) {
        if (!node) return;

        callback(node.key);
        this.preOrder(node.left, callback);
        this.preOrder(node.right, callback);
    }

    inOrder(node = this.root, callback = console.log) {
        if (!node) return;

        this.inOrder(node.left, callback);
        callback(node.key);
        this.inOrder(node.right, callback);
    }

    postOrder(node = this.root, callback = console.log) {
        if (!node) return;

        this.postOrder(node.left, callback);
        this.postOrder(node.right, callback);
        callback(node.key);
    }


    preOrderIterative(node = this.root, callback = console.log) {
        const stack = [];

        if (node) stack.push(node);

        while (stack.length > 0) {
            let n = stack.pop();

            callback(n.key);

            if (n.right) stack.push(n.right);
            if (n.left) stack.push(n.left);
        }
    }

    inOrderIterative(node = this.root, callback = console.log) {
        const stack = [];

        while (true) {
            while (node) {
                stack.push(node);
                node = node.left;
            }

            if (stack.length <= 0)
                break;

            node = stack.pop();

            callback(node.key);

            node = node.right;
        }
    }

    // postOrderIterative(node = this.root, callback = console.log) {
    //     const stack = [];
    //     let prev = null;
    
    //     while (node || stack.length > 0) {
    //         while (node) {
    //             stack.push(node);
    //             node = node.left;
    //         }
    
    //         node = stack[stack.length - 1];
    
    //         if (!node.right || node.right == prev) {
    //             callback(node.key);
    //             stack.pop();
    //             prev = node;
    //             node = null;
    //         } else {
    //             node = node.right;
    //         }
    //     }
    // }

    postOrderIterative(node = this.root, callback = console.log) {
        let prev = null;
        const stack = [];
        
        stack.push(node);

        while(stack.length > 0) {
            const curr = stack[stack.length - 1];

            if(!prev || (prev != curr.left && prev != curr.right)) {
                if(curr.left) {
                    stack.push(curr.left);
                } else if(curr.right) {
                    stack.push(curr.right);
                } else {
                    callback(curr.key);
                    stack.pop();
                }
            } else if(prev == curr.left) {
                if(curr.right) {
                    stack.push(curr.right);
                } else {
                    callback(curr.key);
                    stack.pop();
                }
            } else if(prev == curr.right) {
                callback(curr.key);
                stack.pop();
            }

            prev = curr;
        }
    }
    
    

    // levelOrder(node = this.root, callback = console.log) {
    //     const stack = [];

    //     if(node) stack.push(node);

    //     while(stack.length > 0) {
    //         let n = stack.pop();

    //         callback(n.key);

    //         if(n.right) stack.push(n.right);
    //         if(n.left) stack.push(n.left);
    //     }
    // }
}


describe('BinarySearchTree', () => {
    const bst = new BstTree();

    beforeEach(() => {
        bst.root = new Node(1);
        bst.root.left = new Node(2);
        bst.root.right = new Node(3);
        bst.root.left.left = new Node(4);
        bst.root.left.right = new Node(5);
        bst.root.right.left = new Node(6);
        bst.root.right.right = new Node(7);
    });

    it('should print preOrder recursive', () => {
        bst.preOrder();
        bst.inOrder();
        bst.postOrder();
    });

    it('should visit pre order traversal recursive', () => {
        const result = [];
        const expected = [1, 2, 4, 5, 3, 6, 7];
        bst.preOrder(bst.root, key => result.push(key));

        expect(result).toEqual(expected);
    });

    it('should visit pre order traversal iterative', () => {
        const result = [];
        const expected = [1, 2, 4, 5, 3, 6, 7];

        bst.preOrderIterative(bst.root, key => result.push(key));

        expect(result).toEqual(expected);
    });

    it('should visit in order traversal recursive', () => {
        const result = [];
        const expected = [4, 2, 5, 1, 6, 3, 7];

        bst.inOrder(bst.root, key => result.push(key));

        expect(result).toEqual(expected);
    })


    it('should visit in order traversal iterative', () => {
        const result = [];
        const expected = [4, 2, 5, 1, 6, 3, 7];

        bst.inOrderIterative(bst.root, key => result.push(key));

        expect(result).toEqual(expected);
    })

    it('should visit post order traversal recursive', () => {
        const result = [];
        const expected = [4, 5, 2, 6, 7, 3, 1];

        bst.postOrder(bst.root, key => result.push(key));

        expect(result).toEqual(expected);
    })

    it('should visit post order traversal iterative', () => {
        const result = [];
        const expected = [4, 5, 2, 6, 7, 3, 1];

        bst.postOrderIterative(bst.root, key => result.push(key));

        expect(result).toEqual(expected);
    })
});
