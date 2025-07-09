import './LandingPage.css';

import { FaGlobe, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import { services } from './services';
import { useEffect } from "react";

const contacts = [
  {
    id: 'site',
    title: 'Site',
    url: 'https://coldcode.com.br',
    display: 'www.coldcode.com.br',
    Icon: FaGlobe,
  },
  {
    id: 'instagram',
    title: 'Instagram',
    url: 'https://instagram.com/coldcodeltda',
    display: '@coldcodeltda',
    Icon: FaInstagram,
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    url: 'https://wa.me/5548988293408',
    display: '(48) 98829-3408',
    Icon: FaWhatsapp,
  },
];

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
          <div className="about-content">
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
          </div>
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
              href="http://medcloud.link"
              className="client-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/judite-desktop.jpeg"
                alt="Sistema Judite"
                className="project-image"
              />
              <div className="project-info">
                <h3>Judite</h3>
                <p>
                  🏥 Plataforma web para gestão de clínicas, pacientes e profissionais.
                  <br /><br />
                  🗂️ Cadastro de pacientes e profissionais de forma simples e organizada.
                  <br /><br />
                  📅 Agendamento de consultas e gerenciamento de horários.
                  <br /><br />
                  🚀 Base sólida para expansão de novos módulos de saúde.
                </p>
              </div>
            </a>

            <a
              href="#"
              className="client-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/bingo-desktop.jpeg"
                alt="Bingo Joaquinenese"
                className="project-image"
              />
              <div className="project-info">
                <h3>Bingo Joaquinenese</h3>
                <p>
                  🎉 Aplicativo online para venda e compra de cartelas de bingo.
                  <br /><br />
                  💸 Sistema seguro de pagamento e emissão de cartelas digitais.
                  <br /><br />
                  📺 Rodada de bingo transmitida em TVs de estabelecimentos parceiros.
                  <br /><br />
                  🔄 Sorteio automatizado para partidas justas e dinâmicas.
                </p>
              </div>
            </a>

            <a
              href="#"
              className="client-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/aries-desktop.jpeg"
                alt="Aries Eventos"
                className="project-image"
              />
              <div className="project-info">
                <h3>Aries Eventos</h3>
                <p>
                  🏃 Plataforma responsiva para inscrições em corridas, meias maratonas e triatlos.
                  <br /><br />
                  📄 Formulários personalizados para cadastro de atletas e pagamento online.
                  <br /><br />
                  📊 Painel administrativo para controle de inscritos e relatórios.
                  <br /><br />
                  🌐 Layout moderno, intuitivo e adaptável em qualquer tela.
                </p>
              </div>
            </a>

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

            <a
              href="http://calcmed.com.br"
              className="client-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/calcmed-desktop.jpeg"
                alt="Projeto CalcMed"
                className="project-image"
              />
              <div className="project-info">
                <h3>CalcMed</h3>
                <p>
                  🧮 Ferramenta online para cálculos médicos rápidos e precisos.
                  <br /><br />
                  🩺 Focado em profissionais de saúde para apoiar decisões clínicas.
                  <br /><br />
                  📱 Interface responsiva, fácil de usar em qualquer dispositivo.
                  <br /><br />
                  ⚙️ Estrutura flexível para novos cálculos e atualizações.
                </p>
              </div>
            </a>
          </div>
        </section>

        <section id="contato" className="section contact-section fade-in">
          <h2 className="section-title">Contato</h2>
          <p>
            Entre em contato e vamos juntos desenvolver a melhor solução para sua empresa.
          </p>
          <div className="contact-grid">
            {contacts.map(info => (
              <a
                key={info.id}
                className="contact-card"
                href={info.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon-wrapper">
                  <info.Icon size={24} />
                </div>
                <div className="text-wrapper">
                  <h3>{info.title}</h3>
                  <p>{info.display}</p>
                </div>
              </a>
            ))}
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
    </div >
  );
}