document.addEventListener("DOMContentLoaded", function() {
   fetch('/tree')
        .then(response => response.json())
        .then(treeData => {
            const formattedData = transformToD3Format(treeData);
            drawTree(formattedData);
        })
        .catch(error => console.error('Error:', error));

    function transformToD3Format(node) {
        if (!node) return null;
        let d3Node = { name: node.key.toString() };
        d3Node.children = [];
        if (node.left) d3Node.children.push(transformToD3Format(node.left));
        if (node.right) d3Node.children.push(transformToD3Format(node.right));
        if (d3Node.children.length === 0) delete d3Node.children;
        return d3Node;
    }

    function drawTree(treeData) {
        const margin = { top: 20, right: 90, bottom: 30, left: 90 };
        const width = 960 - margin.left - margin.right;
        const height = 500 - margin.top - margin.bottom;

        const treemap = d3.tree().size([height, width]);
        const nodes = d3.hierarchy(treeData, d => d.children);
        const tree = treemap(nodes);

        const svg = d3.select("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // Desenha os links (arestas)
        svg.selectAll(".link")
            .data(tree.links())
            .enter().append("path")
            .attr("class", "link")
            .attr("d", d3.linkHorizontal()
                .x(d => d.y)
                .y(d => d.x));

        // Desenha cada nó
        const node = svg.selectAll(".node")
            .data(nodes.descendants())
            .enter().append("g")
            .attr("class", d => "node" + (d.children ? " node--internal" : " node--leaf"))
            .attr("transform", d => "translate(" + d.y + "," + d.x + ")");

        // Desenha o círculo para cada nó
        node.append("circle")
            .attr("r", 10);

        // Adiciona o texto a cada nó
        node.append("text")
            .attr("dy", ".35em")
            .attr("x", d => d.children ? -13 : 13)
            .style("text-anchor", d => d.children ? "end" : "start")
            .text(d => d.data.name);
    }
});
