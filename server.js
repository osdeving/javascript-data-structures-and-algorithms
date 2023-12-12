import express from "express";
import BinarySearchTree from './src/data-structures/tree/BinarySearchTree.js';

const app = express();
const port = 3000;

app.use(express.static('public'));

const tree = new BinarySearchTree();

tree.insert(12);
tree.insert(20);
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(14);
tree.insert(25);
tree.insert(6);
tree.insert(18);
tree.insert(23);
tree.insert(60);
tree.insert(122);
tree.insert(40);
tree.insert(37);
tree.insert(1);
tree.insert(2);
tree.insert(32);
tree.insert(21);
tree.insert(42);


app.get('/tree', (req, res) => {
    res.json(tree.toObject()); // Envia a árvore como um objeto
  });
 
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
