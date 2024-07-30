// Função para descer a rolagem da página
function scrollDown() {
    window.scrollBy(0, 100); // Desce 100 pixels a cada chamada
    localStorage.setItem('scrollPosition', window.scrollY);
}

let scrollInterval = setInterval(scrollDown, 2000);

localStorage.setItem('scrollInterval', scrollInterval);
window.addEventListener('load', () => {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
    }

    const storedInterval = localStorage.getItem('scrollInterval');
    if (storedInterval) {
        clearInterval(storedInterval);
    }
    scrollInterval = setInterval(scrollDown, 2000);
    localStorage.setItem('scrollInterval', scrollInterval);
});

// Função para recarregar a página a cada 15 segundos
setInterval(() => {
    location.reload();
}, 15000);