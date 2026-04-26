document.querySelectorAll('.ajudaTopico').forEach(function(ajuda) {
    ajuda.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();

        document.querySelectorAll('.ajudaTopico.is-active').forEach(function(aberta) {
            if (aberta !== ajuda) {
                aberta.classList.remove('is-active');
            }
        });

        ajuda.classList.toggle('is-active');
        ajuda.focus();
    });

    ajuda.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            ajuda.click();
        }
    });
});

document.addEventListener('click', function() {
    document.querySelectorAll('.ajudaTopico.is-active').forEach(function(aberta) {
        aberta.classList.remove('is-active');
    });
});
