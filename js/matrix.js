const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();

const english = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const japanese = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
const chars = (english + japanese).split("");

const fontSize = 22;
let columns = Math.floor(window.innerWidth / fontSize);
let drops = Array.from({length: columns}, () => Math.random() * window.innerHeight / fontSize);

function draw() {
    ctx.fillStyle = "rgba(255,255,255,0.09)"; // Белый шлейф
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = fontSize + "px monospace";
    ctx.fillStyle = "#2563eb"; // синий

    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 33);

window.addEventListener('resize', () => {
    resizeCanvas();
    columns = Math.floor(window.innerWidth / fontSize);
    drops = Array.from({length: columns}, () => Math.random() * window.innerHeight / fontSize);
});