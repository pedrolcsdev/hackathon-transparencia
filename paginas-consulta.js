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

document.querySelectorAll('[data-toggle-avancado]').forEach(function(toggle) {
    var painel = toggle.closest('.painelConsulta');
    var conteudo = painel ? painel.querySelector('[data-conteudo-avancado]') : null;

    function atualizarBuscaAvancada() {
        if (!conteudo) {
            return;
        }

        conteudo.hidden = !toggle.checked;
    }

    toggle.addEventListener('change', atualizarBuscaAvancada);
    atualizarBuscaAvancada();
});

document.querySelectorAll('.formularioConsultaCompacta').forEach(function(formulario) {
    var painel = formulario.closest('.painelConsulta');
    var resultados = painel ? painel.querySelector('.dadosGrid') : null;

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        if (resultados) {
            resultados.hidden = false;
        }
    });

    formulario.addEventListener('reset', function() {
        if (resultados) {
            resultados.hidden = true;
        }
    });
});
