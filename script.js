if (!isAuthenticated() || !isAdmin()) {
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Site carregado com sucesso!');
}); 