import BinarySearchTree from './BinarySearchTree.js';
import Node from './Node.js';

const tree = new BinarySearchTree();

tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(7);





tree.preOrderTraverse(console.log);
console.log()
tree.inOrderTraverse(console.log);
console.log()
tree.postOrderTraverse(console.log);

//tree.printTree();

// tree.bfs(console.log);


// class Graph {
//     constructor() {
//         this.nodes = new Map(); // Usamos um mapa para armazenar as listas de adjacências
//     }

//     // Método para adicionar um vértice ao grafo
//     addVertex(vertex) {
//         if (!this.nodes.has(vertex)) {
//             this.nodes.set(vertex, []);
//         }
//     }

//     // Método para adicionar uma aresta ao grafo
//     addEdge(vertex1, vertex2) {
//         if (this.nodes.has(vertex1) && this.nodes.has(vertex2)) {
//             this.nodes.get(vertex1).push(vertex2);
//             // Se o grafo for não-direcionado, adicione a aresta reversa também
//             this.nodes.get(vertex2).push(vertex1);
//         }
//     }

//     // Método para realizar a busca em largura (BFS)
//     bfs(startingNode, callback) {
//         if (!this.nodes.has(startingNode)) {
//             return;
//         }

//         const visited = new Set(); // Conjunto para manter o controle dos nós visitados
//         const queue = [startingNode]; // Fila para BFS

//         while (queue.length > 0) {
//             const currentNode = queue.shift(); // Remove o nó atual da fila

//             if (!visited.has(currentNode)) {
//                 visited.add(currentNode); // Marca o nó como visitado
//                 callback(currentNode); // Processa o nó

//                 const neighbors = this.nodes.get(currentNode);
//                 for (let neighbor of neighbors) {
//                     if (!visited.has(neighbor)) {
//                         queue.push(neighbor); // Adiciona vizinhos não visitados à fila
//                     }
//                 }
//             }
//         }
//     }
// }

// // Exemplo de uso
// const graph = new Graph();
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');

// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('B', 'D');
// graph.addEdge('C', 'E');

// graph.bfs('A', vertex => console.log(vertex));

