import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Vlado Stričko</p>
        <h1>Moderná stránka pripravená na Vercel</h1>
        <p className="lead">
          Túto ukážkovú stránku vytvoril pre Vlada jeho AI agent. Je uložená na GitHube a nasadená cez Vercel.
        </p>
        <div className="actions">
          <a href="https://github.com/Ikbenvlado" target="_blank" rel="noreferrer">GitHub profil</a>
          <a href="https://vercel.com" target="_blank" rel="noreferrer" className="secondary">Vercel</a>
        </div>
      </section>

      <section className="cards">
        <article>
          <span>01</span>
          <h2>Rýchly štart</h2>
          <p>Projekt používa React a Vite, takže sa dá jednoducho upravovať a rozširovať.</p>
        </article>
        <article>
          <span>02</span>
          <h2>GitHub</h2>
          <p>Kód je uložený v novom repozitári, aby sa dal spravovať cez verzie.</p>
        </article>
        <article>
          <span>03</span>
          <h2>Vercel</h2>
          <p>Nasadenie je pripravené na rýchle publikovanie ďalších zmien.</p>
        </article>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
