document.addEventListener("DOMContentLoaded", function() {
    // Estrutura de árvore de exemplo hardcoded
    const treeData = {
        name: "15",
        children: [
            {
                name: "7",
                children: [
                    { name: "3" },
                    { name: "9" }
                ]
            },
            {
                name: "20",
                children: [
                    { name: "18" },
                    { name: "25" }
                ]
            }
        ]
    };

    drawTree(treeData);

    function drawTree(treeData) {
        const margin = { top: 20, right: 120, bottom: 20, left: 120 };
        const width = 960 - margin.right - margin.left;
        const height = 500 - margin.top - margin.bottom;

        const treemap = d3.tree().size([height, width]);

        const nodes = d3.hierarchy(treeData, d => d.children);

        const svg = d3.select("svg")
            .attr("width", width + margin.right + margin.left)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        const tree = treemap(nodes);

        // Desenha os links (arestas)
        svg.selectAll(".link")
            .data(tree.links())
            .enter().append("line")
            .attr("class", "link")
            .attr("x1", d => d.source.y)
            .attr("y1", d => d.source.x)
            .attr("x2", d => d.target.y)
            .attr("y2", d => d.target.x)
            .attr("stroke", "black");

        // Desenha cada nó
        const node = svg.selectAll(".node")
            .data(nodes.descendants())
            .enter().append("g")
            .attr("class", "node")
            .attr("transform", d => "translate(" + d.y + "," + d.x + ")");

        // Desenha o círculo para cada nó
        node.append("circle")
            .attr("r", 10)
            .attr("fill", "lightblue");

        // Adiciona o texto a cada nó
        node.append("text")
            .attr("dy", ".35em")
            .attr("x", d => d.children ? -15 : 15)
            .attr("text-anchor", d => d.children ? "end" : "start")
            .text(d => d.data.name);
    }
});
