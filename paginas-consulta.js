var menuBotao = document.getElementById('menuLateralBotao');
var menuPainel = document.getElementById('menuLateralPainel');
var menuOverlay = document.getElementById('menuLateralOverlay');
var menuFechar = document.getElementById('menuLateralFechar');

if (menuBotao && menuPainel && menuOverlay) {
    function alternarMenuLateral(aberto) {
        document.body.classList.toggle('menuLateralAberto', aberto);
        menuBotao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
        menuPainel.setAttribute('aria-hidden', aberto ? 'false' : 'true');
    }

    menuBotao.addEventListener('click', function() {
        var aberto = menuBotao.getAttribute('aria-expanded') === 'true';
        alternarMenuLateral(!aberto);
    });

    menuOverlay.addEventListener('click', function() {
        alternarMenuLateral(false);
    });

    if (menuFechar) {
        menuFechar.addEventListener('click', function() {
            alternarMenuLateral(false);
        });
    }

    menuPainel.querySelectorAll('[data-menu-toggle]').forEach(function(botaoToggle) {
        botaoToggle.addEventListener('click', function() {
            var grupo = botaoToggle.closest('.menuLateralAgrupador');
            var aberto = botaoToggle.getAttribute('aria-expanded') === 'true';
            botaoToggle.setAttribute('aria-expanded', aberto ? 'false' : 'true');
            if (grupo) {
                grupo.classList.toggle('is-open', !aberto);
            }
        });
    });

    menuPainel.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            alternarMenuLateral(false);
        });
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            alternarMenuLateral(false);
        }
    });
}

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
