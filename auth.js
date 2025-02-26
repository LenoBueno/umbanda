// Dados de usuários (em produção, isso deveria estar em um banco de dados seguro)
const users = {
    'user@user.com': {
        password: '148750',
        role: 'user'
    },
    'root@admin.com': {
        password: '148750',
        role: 'admin'
    }
};

// Função para verificar login
function authenticate(email, password) {
    const user = users[email];
    if (user && user.password === password) {
        // Armazenar informação do usuário logado (não seguro, apenas para exemplo)
        sessionStorage.setItem('currentUser', JSON.stringify({
            email: email,
            role: user.role
        }));
        
        // Redirecionar baseado no tipo de usuário
        if (user.role === 'admin') {
            window.location.href = 'admin.html';
        } else {
            window.location.href = 'home.html';
        }
        return true;
    }
    return false;
}

// Função para verificar se usuário está logado
function isAuthenticated() {
    return sessionStorage.getItem('currentUser') !== null;
}

// Função para verificar se é admin
function isAdmin() {
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    return user && user.role === 'admin';
}

// Função para logout
function logout() {
    sessionStorage.removeItem('currentUser');
    window.location.href = 'index.html';
} 