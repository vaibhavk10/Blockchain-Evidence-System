document.addEventListener('DOMContentLoaded', function() {
    const nodesContainer = document.querySelector('.nodes');
    const nodeCount = 15;
    const nodes = [];

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
        const node = document.createElement('div');
        node.className = 'node';
        node.style.left = `${Math.random() * 100}%`;
        node.style.top = `${Math.random() * 100}%`;
        nodesContainer.appendChild(node);
        nodes.push({
            element: node,
            x: Math.random() * 100,
            y: Math.random() * 100,
            speedX: (Math.random() - 0.5) * 0.1,
            speedY: (Math.random() - 0.5) * 0.1
        });
    }

    // Create connections
    const connections = [];
    nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach(targetNode => {
            const connection = document.createElement('div');
            connection.className = 'connection';
            nodesContainer.appendChild(connection);
            connections.push({
                element: connection,
                source: node,
                target: targetNode
            });
        });
    });

    // Animation loop
    function animate() {
        // Update node positions
        nodes.forEach(node => {
            node.x += node.speedX;
            node.y += node.speedY;

            // Bounce off edges
            if (node.x <= 0 || node.x >= 100) node.speedX *= -1;
            if (node.y <= 0 || node.y >= 100) node.speedY *= -1;

            node.element.style.left = `${node.x}%`;
            node.element.style.top = `${node.y}%`;
        });

        // Update connections
        connections.forEach(connection => {
            const rect1 = connection.source.element.getBoundingClientRect();
            const rect2 = connection.target.element.getBoundingClientRect();
            
            const length = Math.hypot(rect2.x - rect1.x, rect2.y - rect1.y);
            const angle = Math.atan2(rect2.y - rect1.y, rect2.x - rect1.x);

            connection.element.style.width = `${length}px`;
            connection.element.style.left = `${rect1.x}px`;
            connection.element.style.top = `${rect1.y}px`;
            connection.element.style.transform = `rotate(${angle}rad)`;
        });

        requestAnimationFrame(animate);
    }

    animate();
});
