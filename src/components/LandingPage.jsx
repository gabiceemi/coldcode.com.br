import React from "react";

import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <header className="navbar">
        <div className="header">
          <img src="/logo.png" alt="Logo da Cold Code" className="logo" />
          <h1>Cold Code Ltda</h1>
        </div>
        <nav className="nav-links">
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#clientes">Clientes</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main className="content">
        {/* Home */}
        <section
          id="home"
          className="section home-section"
          style={{
            backgroundImage: `url('/wallpaper.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="background-overlay"></div>
          <div className="home-content">
            <h2 className="section-title">Engenharia de Software com Propósito</h2>
            <p>Soluções digitais sob medida, desenvolvidas com agilidade, transparência e foco em resultados.</p>
            <button className="btn-primary">Solicite uma proposta</button>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="section">
          <h2 className="section-title">Quem Somos</h2>
          <p>Somos a Cold Code Ltda, uma empresa de tecnologia sediada em Criciúma, Santa Catarina. Atuamos no desenvolvimento de soluções digitais que impulsionam negócios, combinando expertise técnica com metodologias ágeis para entregar software de alta qualidade.</p>
          <p>Adotamos práticas ágeis, como Scrum, para garantir entregas frequentes e valor contínuo aos nossos clientes. Nosso processo é colaborativo, transparente e orientado a resultados.</p>
        </section>

        {/* Serviços */}
        <section id="servicos" className="section">
          <h2 className="section-title">Nossos Serviços</h2>
          <div className="grid">
            {[
              "Desenvolvimento de sistemas personalizados",
              "Aplicações web e mobile",
              "Integrações com APIs e sistemas legados",
              "Consultoria em tecnologia e inovação",
              "Suporte e manutenção de software",
              "Metodologias ágeis (Scrum, Kanban)"
            ].map((servico, idx) => (
              <div key={idx} className="card">{servico}</div>
            ))}
          </div>
        </section>

        {/* Clientes */}
        <section id="clientes" className="section">
          <h2 className="section-title">Clientes</h2>
          <div className="grid">
            <div className="card">
              <h3 className="client-title">LIVE! Moda Fitness</h3>
              <p>Referência nacional em moda fitness, com produtos para academias, estúdios e lifestyle ativo. Um e-commerce robusto e moderno desenvolvido para alta performance.</p>
              <a href="https://www.liveoficial.com.br" target="_blank">liveoficial.com.br</a>
            </div>
            <div className="card">
              <h3 className="client-title">Brasil Papaya</h3>
              <p>Banda instrumental catarinense que mistura ritmos como rock, blues e choro. Um portal artístico focado na promoção da cultura musical independente.</p>
              <a href="https://www.brasilpapaya.com.br" target="_blank">brasilpapaya.com.br</a>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="section">
          <h2 className="section-title">Fale com a gente</h2>
          <p>Estamos prontos para entender suas necessidades e desenvolver a solução ideal para o seu negócio.</p>
          <p>📍 Criciúma - SC</p>
          <p>📧 contato@coldcode.com.br</p>
          <p>📞 (47) 92002-0928</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} Cold Code Ltda. Todos os direitos reservados.
      </footer>
    </div>
  );
}
