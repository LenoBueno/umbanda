import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="logo">Ylê Axé Xangô & Oxum</div>
        <ul className="nav-links">
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#frentes">Frentes</a></li>
          <li><a href="#ervas">Ervas</a></li>
        </ul>
      </nav>
      <main className="main">
        <div className="content">
          <section className="hero">
            <h1>Bem-vindo ao nosso Terreiro</h1>
            <p className="subtitle">Um espaço de acolhimento, fé e ancestralidade</p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App; 