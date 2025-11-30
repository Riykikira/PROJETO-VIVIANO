// =============================================
// DASHBOARD FUNCIONÁRIO - NAVEGAÇÃO
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // Navegação entre abas
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Não fazer nada para logout
            if (this.classList.contains('logout-link')) {
                return;
            }

            e.preventDefault();
            const tab = this.getAttribute('data-tab');
            
            // Remover classe 'active' de todos os links
            navLinks.forEach(l => {
                if (!l.classList.contains('logout-link')) {
                    l.classList.remove('active');
                }
            });
            
            // Adicionar 'active' ao link clicado
            this.classList.add('active');
            
            // Esconder todos os conteúdos
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Mostrar conteúdo da aba selecionada
            if (tab) {
                const content = document.getElementById(tab + '-content');
                if (content) {
                    content.classList.add('active');
                }
            }

            // Fechar sidebar em mobile
            const sidebar = document.querySelector('.sidebar');
            if (sidebar && window.innerWidth <= 768) {
                sidebar.classList.remove('show');
            }
        });
    });

    // =============================================
    // FUNCIONALIDADES ESPECÍFICAS
    // =============================================

    // 1. Cálculo de valor do ticket
    const formVisitantes = document.querySelector('#visitantes-content form');
    if (formVisitantes) {
        const duraçaoInput = formVisitantes.querySelector('input[type="number"]');
        const valorInput = formVisitantes.querySelector('input[readonly]');
        
        if (duraçaoInput && valorInput) {
            duraçaoInput.addEventListener('change', function() {
                // R$ 10 por hora (exemplo)
                const preco = 10 * this.value;
                valorInput.value = parseFloat(preco).toFixed(2);
            });
        }
    }

    // 2. Formulário de tickets
    const formTickets = document.querySelector('#visitantes-content form');
    if (formTickets) {
        formTickets.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Ticket emitido com sucesso!');
            this.reset();
        });
    }

    // 3. Botões de operação manual
    const btnAbrirEntrada = document.querySelector('#operacao-content .btn-success');
    const btnAbrirSaida = document.querySelector('#operacao-content .btn-danger');
    
    if (btnAbrirEntrada) {
        btnAbrirEntrada.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Tem certeza que deseja abrir a cancela de entrada?')) {
                alert('Cancela de entrada aberta manualmente!');
                // Aqui você faria uma requisição AJAX para abrir a cancela
            }
        });
    }

    if (btnAbrirSaida) {
        btnAbrirSaida.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Tem certeza que deseja abrir a cancela de saída?')) {
                alert('Cancela de saída aberta manualmente!');
                // Aqui você faria uma requisição AJAX para abrir a cancela
            }
        });
    }

    // 4. Formulário de ocorrências
    const formOcorrencias = document.querySelector('#ocorrencias-content form');
    if (formOcorrencias) {
        formOcorrencias.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Ocorrência registrada com sucesso!');
            this.reset();
        });
    }

    // 5. Busca de saldo
    const formSaldo = document.querySelector('#saldo-content form');
    if (formSaldo) {
        formSaldo.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const input = this.querySelector('input[type="text"]');
            const resultado = document.getElementById('saldo-resultado');
            
            if (input.value.trim()) {
                resultado.classList.remove('d-none');
                console.log('Buscando saldo para:', input.value);
            } else {
                alert('Digite um CPF ou Email válido');
            }
        });
    }

    // 6. Toggle sidebar em mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('show');
        });
    }

    console.log('Dashboard carregado com sucesso!');
});
