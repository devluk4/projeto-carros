document.querySelectorAll('.filme').forEach(filme => {
    filme.addEventListener('mouseenter', function() {
        const descricao = filme.getAttribute('data-descricao');
        const infoBox = filme.querySelector('.info');
        infoBox.textContent = descricao;
        infoBox.style.display = 'block';
    });

    filme.addEventListener('mouseleave', function() {
        const infoBox = filme.querySelector('.info');
        infoBox.style.display = 'none';
    });
});
