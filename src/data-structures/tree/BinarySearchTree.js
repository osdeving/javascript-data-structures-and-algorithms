import Node from "./Node.js";

export default class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    
    insert(key) {
        if(this.root == null) {
            this.root = new Node(key);
        } else {
            this.insertNode(this.root, key);
        }
    }
    
    insertNode(node, key) {
        if(key < node.key) {
            if(node.left == null) {
                node.left = new Node(key);
            } else {
                this.insertNode(node.left, key);
            }
        } else {
            if(node.right == null) {
                node.right = new Node(key);
            } else {
                this.insertNode(node.right, key);
            }
        }
    }

    // in order
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback);
    }

    inOrderTraverseNode(node, callback) {
        if(node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    // pre order
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback);
    }


    preOrderTraverseNode(node, callback) {
        if(node != null) {
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }

    preOrderIterative(root) {
        let stack = [];
        let result = [];
    
        if (root) {
            stack.push(root);
        }
    
        while (stack.length > 0) {
            let node = stack.pop();
            result.push(node.key);
    
            if (node.right) {
                stack.push(node.right);
            }
            if (node.left) {
                stack.push(node.left);
            }
        }
    
        return result;
    }
    

    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback);
    }


    postOrderTraverseNode(node, callback) {
        if(node != null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }


    getHeight(node) {
        if (node === null) {
            return 0;
        }
        
        let leftHeight = this.getHeight(node.left);
        let rightHeight = this.getHeight(node.right);
        
        return Math.max(leftHeight, rightHeight) + 1;
    }

    bfs(callback) {
        if (this.root == null) {
            return;
        }
    
        const queue = [];
        queue.push(this.root);
    
        while (queue.length > 0) {
            const node = queue.shift(); // Remove o nó da frente da fila
            callback(node.key); // Processa o nó atual
    
            if (node.left != null) {
                queue.push(node.left); // Adiciona o filho esquerdo na fila, se existir
            }
            if (node.right != null) {
                queue.push(node.right); // Adiciona o filho direito na fila, se existir
            }
        }
    }

    
    printTree() {
        if (!this.root) {
            console.log('Árvore vazia');
            return;
        }

        const queue = [{ node: this.root, level: 0, position: 'root' }];
        let currentLevelNodes = { left: [], right: [], root: [] };
        let currentLevel = 0;

        while (queue.length > 0) {
            const { node, level, position } = queue.shift();

            if (node.left) {
                queue.push({ node: node.left, level: level + 1, position: 'left' });
            }
            if (node.right) {
                queue.push({ node: node.right, level: level + 1, position: 'right' });
            }

            if (level === currentLevel) {
                currentLevelNodes[position].push(node.key);
            } else {
                this.printLevelNodes(currentLevelNodes, currentLevel);
                currentLevelNodes = { left: [], right: [], root: [] };
                currentLevelNodes[position].push(node.key);
                currentLevel = level;
            }
        }

        this.printLevelNodes(currentLevelNodes, currentLevel);  // Para imprimir o último nível
    }

    printLevelNodes(levelNodes, level) {
        console.log(`Nível ${level}:`);
        console.log("  Esquerda: " + levelNodes.left.join(' '));
        console.log("  Direita: " + levelNodes.right.join(' '));
    }
}
