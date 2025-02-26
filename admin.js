// Função para alternar entre as tabs
function switchTab(tab) {
    const umbandaForm = document.getElementById('umbandaForm');
    const nacaoForm = document.getElementById('nacaoForm');
    const tabs = document.querySelectorAll('.tab-button');

    tabs.forEach(t => {
        t.classList.remove('active');
        t.classList.add('inactive');
    });
    
    tab.classList.add('active');
    tab.classList.remove('inactive');

    if (tab.textContent === 'Frentes Umbanda') {
        umbandaForm.classList.remove('hidden');
        nacaoForm.classList.add('hidden');
    } else {
        umbandaForm.classList.add('hidden');
        nacaoForm.classList.remove('hidden');
    }
}

// Função para atualizar contador de caracteres
function updateCharCount(textarea) {
    const counter = textarea.nextElementSibling;
    counter.textContent = `${textarea.value.length}/1000`;
}

// Função para lidar com o envio do formulário Sobre
function handleSobreSubmit(event) {
    event.preventDefault();
    // Implementar lógica de salvamento
    alert('Conteúdo salvo com sucesso!');
}

// Função para lidar com o envio do formulário Frentes
function handleFrenteSubmit(event, tipo) {
    event.preventDefault();
    // Implementar lógica de salvamento
    alert(`Frente ${tipo} salva com sucesso!`);
    event.target.reset();
}

// Função para lidar com o envio do formulário de Ervas
function handleErvaSubmit(event) {
    event.preventDefault();
    // Implementar lógica de salvamento
    alert('Erva salva com sucesso!');
    event.target.reset();
    
    // Resetar contador de caracteres
    const counter = event.target.querySelector('.char-counter');
    if (counter) {
        counter.textContent = '0/1000';
    }
}

// Adicionar listeners quando o documento carregar
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar listeners para contadores de caracteres
    document.querySelectorAll('textarea').forEach(textarea => {
        textarea.addEventListener('input', () => updateCharCount(textarea));
    });

    // Adicionar listeners para as tabs
    document.querySelectorAll('.tab-button').forEach(tab => {
        tab.addEventListener('click', function() {
            switchTab(this);
        });
    });
}); 