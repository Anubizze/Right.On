  window.addEventListener('load', () => {
        const leftImage = document.querySelector('.parallax-container img.left');
        const rightImage = document.querySelector('.parallax-container img.right');

        setTimeout(() => {
            leftImage.classList.add('visible');
            rightImage.classList.add('visible');
        }, 500);
    });

    
    document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('h1, h2').forEach((heading, index) => {
        heading.style.animationDelay = `${index * 0.2}s`;
    });
});


