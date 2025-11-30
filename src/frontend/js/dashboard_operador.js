// =============================================
// DASHBOARD OPERADOR - SCRIPT DE NAVEGAÇÃO
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // Navegação entre abas
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const tab = this.getAttribute('data-tab');
            
            // Remover classe 'active' de todos os links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Adicionar 'active' ao link clicado
            this.classList.add('active');
            
            // Esconder todos os conteúdos
            tabContents.forEach(content => content.classList.add('d-none'));
            
            // Mostrar conteúdo da aba selecionada
            if (tab) {
                const content = document.getElementById(tab + '-content');
                if (content) {
                    content.classList.remove('d-none');
                }
            }
        });
    });

    // Logout
    const logoutLink = document.querySelector('a[href="#logout"]');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Tem certeza que deseja sair?')) {
                // Aqui você pode redirecionar para a página de logout
                window.location.href = '../PHP/logout.php';
            }
        });
    }

    // Toggle sidebar em dispositivos móveis
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('show');
        });
    }

    // Fecha sidebar ao clicar em um link (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('show');
            }
        });
    });

    // Exemplo: Buscar saldo de usuário
    const formBuscaSaldo = document.querySelector('#saldo-content form');
    if (formBuscaSaldo) {
        formBuscaSaldo.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const input = this.querySelector('input[type="text"]');
            const resultado = document.getElementById('saldo-resultado');
            
            if (input.value.trim()) {
                // Aqui você faria uma requisição AJAX para buscar o saldo
                resultado.classList.remove('d-none');
                console.log('Buscando saldo para:', input.value);
            } else {
                alert('Digite um CPF ou Email válido');
            }
        });
    }

    // Exemplo: Formulário de tickets
    const formTickets = document.querySelector('#visitantes-content form');
    if (formTickets) {
        const duracao = formTickets.querySelector('input[type="number"]');
        const valor = formTickets.querySelector('input[readonly]');
        
        if (duracao && valor) {
            duracao.addEventListener('change', function() {
                // R$ 10 por hora (exemplo)
                const preco = 10 * this.value;
                valor.value = preco.toFixed(2);
            });
        }

        formTickets.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Ticket emitido com sucesso!');
            this.reset();
        });
    }

    // Exemplo: Botões de operação manual
    const btnAbrirEntrada = document.querySelector('#operacao-content .btn-success');
    const btnAbrirSaida = document.querySelector('#operacao-content .btn-danger');
    
    if (btnAbrirEntrada) {
        btnAbrirEntrada.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Cancela de entrada aberta manualmente!');
            // Aqui você faria uma requisição para abrir a cancela
        });
    }

    if (btnAbrirSaida) {
        btnAbrirSaida.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Cancela de saída aberta manualmente!');
            // Aqui você faria uma requisição para abrir a cancela
        });
    }

    // Exemplo: Registrar ocorrência
    const formOcorrencias = document.querySelector('#ocorrencias-content form');
    if (formOcorrencias) {
        formOcorrencias.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Ocorrência registrada com sucesso!');
            this.reset();
        });
    }

    // Animação ao carregar
    console.log('Dashboard carregado com sucesso!');
});
