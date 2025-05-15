
document.addEventListener('DOMContentLoaded', function () {
    const products = {
        thyristors: [
            {
                name: "Tiristor STT 55A 1600V",
                description: "Tiristor de alta potência para controle de fase e retificação controlada com corrente de 55A e tensão de 1600V.",
                image: "https://readdy.ai/api/search-image?query=professional%20product%20photography%20of%20black%20thyristor%20semiconductor%20component%20with%20white%20label%20and%20technical%20specifications%2C%20industrial%20electronic%20component%2C%20isolated%20on%20dark%20background%2C%20high%20quality%20product%20shot%2C%20detailed%20view%20of%20connection%20terminals&width=600&height=400&seq=7&orientation=landscape"
            },
            {
                name: "Tiristor STT 100A 1200V",
                description: "Tiristor robusto para aplicações industriais com corrente de 100A e tensão de 1200V, ideal para controle de motores.",
                image: "https://readdy.ai/api/search-image?query=professional%20product%20photography%20of%20black%20thyristor%20semiconductor%20component%20with%20white%20label%20and%20technical%20specifications%2C%20industrial%20electronic%20component%2C%20isolated%20on%20dark%20background%2C%20high%20quality%20product%20shot%2C%20different%20model&width=600&height=400&seq=8&orientation=landscape"
            },
            {
                name: "Tiristor STT 150A 1600V",
                description: "Tiristor de alta performance para sistemas de potência com corrente de 150A e tensão de 1600V, excelente para aplicações de alta demanda.",
                image: "https://readdy.ai/api/search-image?query=professional%20product%20photography%20of%20black%20thyristor%20semiconductor%20component%20with%20white%20label%20and%20technical%20specifications%2C%20industrial%20electronic%20component%2C%20isolated%20on%20dark%20background%2C%20high%20quality%20product%20shot%2C%20third%20variation&width=600&height=400&seq=9&orientation=landscape"
            }
        ]
    };
/**
 * Create a product card component for the given product.
 *
 * @param {Object} product
 * @param {string} product.name
 * @param {string} product.description
 * @param {string} product.image
 * @returns {string} The HTML for the product card component.
 */
    function createProductCard(product) {
        return `
<div class="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
<div class="h-64 bg-gray-800 flex items-center justify-center p-6">
<img src="${product.image}" alt="${product.name}" class="max-h-full object-contain">
</div>
<div class="p-6">
<h3 class="text-xl font-semibold mb-2">${product.name}</h3>
<p class="text-gray-400 mb-4">${product.description}</p>
<div class="flex justify-between items-center">
<a href="#" class="text-primary hover:underline flex items-center">
<span>Ver detalhes</span>
<i class="ri-arrow-right-line ri-lg ml-1"></i>
</a>
<button class="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-button whitespace-nowrap">Solicitar cotação</button>
</div>
</div>
</div>
`;
    }
    const categoryButtons = document.getElementById('categoryButtons');
    const productsGrid = document.getElementById('productsGrid');
    let currentCategory = 'all';
    categoryButtons.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            const category = e.target.dataset.category;
            categoryButtons.querySelectorAll('button').forEach(btn => {
                btn.className = 'bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-button whitespace-nowrap';
            });
            e.target.className = 'bg-primary text-white px-4 py-2 rounded-button whitespace-nowrap';
            if (category === 'thyristors') {
                productsGrid.innerHTML = products.thyristors.map(product => createProductCard(product)).join('');
            } else if (category === 'all') {
                location.reload();
            }
        }
    });
    // Mobile menu toggle
    const menuButton = document.querySelector('button.md\\:hidden');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'fixed inset-0 bg-gray-900 z-50 transform translate-x-full transition-transform duration-300 ease-in-out';
    mobileMenu.innerHTML = `
<div class="flex justify-end p-4">
<button class="text-white w-10 h-10 flex items-center justify-center">
<i class="ri-close-line ri-lg"></i>
</button>
</div>
<div class="px-4 py-6">
<nav class="flex flex-col space-y-6">
<a href="#" class="text-white text-xl hover:text-primary transition-colors">Início</a>
<a href="#produtos" class="text-white text-xl hover:text-primary transition-colors">Produtos</a>
<a href="#sobre" class="text-white text-xl hover:text-primary transition-colors">Sobre Nós</a>
<a href="#atuacao" class="text-white text-xl hover:text-primary transition-colors">Onde Atuamos</a>
<a href="#contato" class="text-white text-xl hover:text-primary transition-colors">Contato</a>
</nav>
</div>
`;
    document.body.appendChild(mobileMenu);
    menuButton.addEventListener('click', function () {
        mobileMenu.classList.remove('translate-x-full');
    });
    mobileMenu.querySelector('button').addEventListener('click', function () {
        mobileMenu.classList.add('translate-x-full');
    });
    // Close mobile menu when clicking on a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.add('translate-x-full');
        });
    });
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Código JavaScript para a animação de circuitos
const canvas = document.getElementById('circuit-animation');
const ctx = canvas.getContext('2d');

let width, height, points;

/**
 * Inicializa a animação de circuitos.
 *
 * Define as dimensões do canvas e gera um array de objetos com as
 * propriedades necessárias para a animação: posição x e y, velocidade
 * x e y e cor.
 */

function init() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = 400; // Altura fixa para a seção

    points = [];
    const numPoints = 300; // Número de pontos (nós) do circuito
    for (let i = 0; i < numPoints; i++) {
        points.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.1, // Velocidade x
            vy: (Math.random() - 0.5) * 0.5, // Velocidade y
            color: '#fff' // Cor primária (verde)
        });
    }
}

/**
 * Updates the positions of points in the animation.
 *
 * Iterates over an array of points, adjusting each point's position
 * based on its velocity. If a point crosses the boundaries of the
 * canvas, its velocity is inverted to simulate a bounce effect.
 */

function updatePoints() {
    for (let i = 0; i < points.length; i++) {
        let p = points[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
    }
}

/**
 * Draws lines between points on a canvas based on their proximity.
 *
 * Iterates over pairs of points and calculates the distance between each pair.
 * If the distance is less than 120, it draws a line between the points.
 * The transparency of the line is inversely proportional to the distance,
 * creating a fading effect as points are further apart. The color of the line
 * is determined by the color of the first point in the pair.
 * The function resets the global alpha to 1 after drawing all lines.
 */

function drawLines() {
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            let dist = Math.sqrt((points[i].x - points[j].x) ** 2 + (points[i].y - points[j].y) ** 2);
            if (dist < 120) { // Comprimento das linhas
                ctx.beginPath();
                ctx.moveTo(points[i].x, points[i].y);
                ctx.lineTo(points[j].x, points[j].y);
                ctx.strokeStyle = points[i].color;
                ctx.globalAlpha = 1 - dist / 150;
                ctx.stroke();
            }
        }
    }
    ctx.globalAlpha = 1;
}

/**
 * Draws points (nodes) on a canvas based on their positions.
 *
 * Iterates over an array of points and draws a circle at each point's
 * position. The color of the circle is determined by the color of the
 * point. The function is used to draw the points in the animation.
 */
function drawPoints() {
    for (let i = 0; i < points.length; i++) {
        let p = points[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
    }
}

/**
 * Animation loop for the circuit animation.
 *
 * Clears the canvas, updates the positions of the points, draws lines
 * between them, draws the points, and then requests the next animation
 * frame.
 */
function animate() {
    ctx.clearRect(0, 0, width, height);
    updatePoints();
    drawLines();
    drawPoints();
    requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener('resize', init);
