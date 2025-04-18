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

        <button className="menu-toggle" onClick={() => {
          document.querySelector('.nav-links').classList.toggle('active');
        }}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </header>

      <main className="content">
        {/* Home */}
        <section id="home" className="section home-section">
          <div className="home-content">
            <h2 className="title">Se dá pra imaginar, a gente programa.</h2>
            <p>Soluções digitais inteligentes para acelerar o crescimento da sua empresa com performance, escalabilidade e inovação.</p>
            <blockquote className="quote">
              Ideias são o software que roda no hardware da nossa mente.
              <span className="author">E reflexão é como fazemos deploy de algo melhor.</span>
            </blockquote>
            <button className="btn-primary">Solicite uma proposta</button>
          </div>
          <div className="home-image">
            <img src="/images/banner.png" alt="Banner da Cold Code" />
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="section about-section">
          <h2 className="section-title">Quem Somos</h2>
          <p>A <strong>Cold Code Ltda</strong> é uma empresa especializada no desenvolvimento de soluções digitais sob medida que impulsionam a transformação tecnológica de negócios.</p>
          <p>Com sede em Criciúma/SC, atuamos com foco em <strong>performance, escalabilidade e experiência do usuário</strong>. Desenvolvemos sistemas robustos e personalizados, preparados para crescer junto com nossos clientes.</p>
          <p>Combinamos <strong>expertise técnica</strong>, <strong>metodologias ágeis</strong> e <strong>visão estratégica</strong> para entregar softwares de alta qualidade, com prazos consistentes, total transparência e foco em resultados reais.</p>
        </section>

        {/* Serviços */}
        <section id="servicos" className="section">
          <h2 className="section-title">Nossos Serviços</h2>
          <div className="grid">
            {["Desenvolvimento de sistemas personalizados",
              "Aplicações web e mobile",
              "Integrações com APIs e sistemas legados",
              "Consultoria em tecnologia e inovação",
              "Suporte e manutenção de software",
              "Aplicação de metodologias ágeis (Scrum, Kanban)"
            ].map((servico, idx) => (
              <div key={idx} className="card">{servico}</div>
            ))}
          </div>
        </section>

        {/* Clientes */}
        <section id="clientes" className="section">
          <h2 className="section-title">Clientes</h2>
          <div className="grid">
            <div className="client-project">
              <div className="project-images">
                <img src="/images/live-desktop.jpeg" alt="Versão desktop do site LIVE!" className="project-image" />
              </div>
              <div className="project-description">
                <h3>LIVE! Moda Fitness</h3>
                <p>
                  A Cold Code atuou no desenvolvimento de soluções digitais para a LIVE!, contribuindo com tecnologias robustas e estratégias eficientes.
                  Entregamos um sistema de checkout 3.0, integração de estoque físico, métodos de pagamento personalizados e projetos inovadores, como soluções omnichannel e integrações de entrega em tempo real.
                </p>
                <p><strong>Tecnologias usadas:</strong> React, Laravel, Redis, Docker, PostgreSQL, MySQL, PHP.</p>
              </div>
            </div>
            <div className="client-project">
              <div className="project-images">
                <img
                  src="/images/papaya-desktop.jpeg"
                  alt="Site institucional Brasil Papaya"
                  className="project-image"
                />
              </div>
              <div className="project-description">
                <h3>Brasil Papaya</h3>
                <p>
                  Criamos o site institucional da <strong>Brasil Papaya</strong>, com foco em performance e acessibilidade.
                  Também desenvolvemos um app exclusivo de afinador de notas para os músicos da banda, com design intuitivo e suporte multiplataforma.
                </p>
                <a href="https://www.brasilpapaya.com.br" target="_blank" rel="noreferrer">
                  brasilpapaya.com.br
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="section">
          <h2 className="section-title">Fale com a gente</h2>
          <p>Estamos prontos para entender suas necessidades e desenvolver a solução ideal para o seu negócio.</p>
          <div className="contact-info">
            <p>Criciúma - SC</p>
            <p>@coldcodeltda</p>
            <p>(47) 92002-0928</p>
            <p>www.coldcode.com.br</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} Cold Code Ltda. Todos os direitos reservados.
      </footer>
    </div>
  );
}
