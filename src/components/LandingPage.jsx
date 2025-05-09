import { useEffect } from "react";
import './LandingPage.css';

import { services } from './services';
import { FaGlobe, FaInstagram, FaWhatsapp } from "react-icons/fa";



export default function LandingPage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    const el = document.querySelector(".typing-animation");
    if (el) {
      const text = el.textContent;
      el.textContent = '';
      let i = 0;
      const type = () => {
        if (i < text.length) {
          el.textContent += text.charAt(i);
          i++;
          setTimeout(type, 50);
        }
      };
      type();
    }
  }, []);

  return (
    <div className="landing-page">
      <header className="navbar">
        <div className="header">
          <img src="/logo.png" alt="Logo da Cold Code" className="logo" />
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
          <div></div><div></div><div></div>
        </button>
      </header>

      <main className="content">
        <section id="home" className="section home-section fade-in">
          <div className="home-image">
            <img src="/images/banner.png" alt="Cold Code - Tecnologia para empresas" />
          </div>

          <div className="home-content">
            <h2 className="title typing-animation">Cold Code Ltda</h2>
            <p>
              Automatizamos processos e reduzimos custos com sistemas sob medida, criados para ajudar sua empresa a vender mais, economizar tempo e ter total controle sobre as operações.
            </p>
            <a href="https://wa.me/5548988293408" target="_blank" rel="noopener noreferrer">
              <button className="btn-primary">Converse com um Especialista</button>
            </a>
          </div>
        </section>

        <section id="sobre" className="section fade-in">
          <h2 className="section-title">Quem Somos</h2>
          <p>
            Na <strong>Cold Code Ltda</strong>, somos movidos pela paixão de transformar desafios em soluções digitais de alta performance. Reunimos uma equipe de especialistas em <strong>React</strong>, <strong>Node.js</strong> e <strong>TypeScript</strong> para criar plataformas web e APIs que combinam inovação, segurança e escalabilidade.
          </p>
          <br /><br />
          <p>
            Com um histórico comprovado em projetos robustos — como o e-commerce de alta demanda da Live! Moda Fitness, com checkout otimizado, omnichannel e notificações via WhatsApp, e a plataforma multiplataforma da banda Brasil Papaya, unindo afinador, decibelímetro, metrônomo e site institucional — entregamos soluções que suportam grande volume de usuários e crescem junto com seu negócio.
          </p>
          <br /><br />
          <p>
            Adotamos práticas sólidas de qualidade de código (testes automatizados, code review e monitoramento contínuo) e uma abordagem colaborativa, garantindo entregas rápidas sem comprometer a estabilidade. Nosso compromisso é entregar softwares sob medida, preparados para os desafios do mercado digital e orientados pelo sucesso dos nossos clientes.
          </p>
        </section>

        <section id="servicos" className="section fade-in">
          <h2 className="section-title">Nossos Serviços</h2>
          <div className="services-grid">
            {services.map((service, idx) => (
              <div key={idx} className="card-service">
                <div className="icon">{service.icon}</div>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="clientes" className="section fade-in">
          <h2 className="section-title">Clientes</h2>
          <div className="project-grid">
            <a
              href="https://www.liveoficial.com.br"
              className="client-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/live-desktop.jpeg"
                alt="LIVE! site"
                className="project-image"
              />
              <div className="project-info">
                <h3>LIVE! Moda Fitness</h3>
                <p>
                  🛒 E-commerce & Checkout 3.0, painel administrativo e relatórios de vendas para gestão eficiente.
                  <br /><br />
                  🔔 Omnichannel com notificações via WhatsApp para lojas físicas.
                  <br /><br />
                  💳 Integração de Open Finance e split payment com PagBank.
                  <br /><br />
                  🌱 A solução elevou performance e experiência de compra, promovendo crescimento sustentável.
                </p>
              </div>
            </a>

            <a
              href="https://brasilpapaya.com.br"
              className="client-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/papaya-desktop.jpeg"
                alt="Brasil Papaya site"
                className="project-image"
              />
              <div className="project-info">
                <h3>Banda Brasil Papaya</h3>
                <p>
                  🎵 App Mobile com afinador de notas, decibelímetro e metrônomo, todos com interface intuitiva e performance nativa.
                  <br /><br />
                  🌐 Site Institucional para divulgação de álbuns, documentação sobre o app, agenda de shows e história da banda, tudo em layout moderno e responsivo.
                  <br /><br />
                  🤝 Projeto uniu tecnologia de ponta e design centrado no fã, permitindo à banda conectar-se de forma dinâmica e envolvente.
                </p>
              </div>
            </a>
          </div>
        </section>

        <section id="contato" className="section fade-in">
          <h2 className="section-title">Contato</h2>
          <p>Entre em contato e vamos juntos desenvolver a melhor solução para sua empresa.</p>
          <div className="contact-info">
            <div className="contact-item">
              <h3><FaGlobe size={18} /> Site</h3>
              <p>www.coldcode.com.br</p>
            </div>
            <div className="contact-item">
              <h3><FaInstagram size={18} /> Instagram</h3>
              <a href="https://instagram.com/coldcodeltda" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> @coldcodeltda
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Cold Code Ltda. Todos os direitos reservados.<br />
        CNPJ: 60.470.117/0001-60
      </footer>

      <a
        href="https://wa.me/5548988293408"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}