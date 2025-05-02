import React, { useEffect } from "react";
import './LandingPage.css';

import { Code, Smartphone, Link, Lightbulb, LifeBuoy, Workflow } from "lucide-react";

const services = [
  { text: "Desenvolvimento de sistemas personalizados", icon: <Code /> },
  { text: "Aplicações web e mobile", icon: <Smartphone /> },
  { text: "Integrações com APIs e sistemas legados", icon: <Link /> },
  { text: "Consultoria em tecnologia e inovação", icon: <Lightbulb /> },
  { text: "Suporte e manutenção de software", icon: <LifeBuoy /> },
  { text: "Aplicação de metodologias ágeis", icon: <Workflow /> }
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
          <div className="home-content">
            <h2 className="title typing-animation">Cold Code Ltda</h2>
            <p>
              Automatizamos processos e reduzimos custos com sistemas sob medida, criados para ajudar sua empresa a vender mais, economizar tempo e ter total controle sobre as operações.
            </p>
            <button className="btn-primary">Converse com um Especialista</button>
          </div>
          <div className="home-image">
            <img src="/images/banner.png" alt="Cold Code - Tecnologia para empresas" />
          </div>
        </section>

        <section id="sobre" className="section fade-in">
          <h2 className="section-title">Quem Somos</h2>
          <p>
            A <strong>Cold Code</strong> nasceu em <strong>São Joaquim, SC</strong>, no coração da <strong>Serra Catarinense</strong>, inspirada pelo frio intenso e pela força que ele representa. Assim como o clima da nossa terra, somos resilientes, precisos e determinados a entregar tecnologia que realmente faz a diferença.
          </p>
          <br />
          <p>
            Com mais de 5 anos de experiência, ajudamos empresas de diferentes setores a simplificar processos, otimizar operações e crescer de forma sustentável. Nossa equipe é especializada em <strong>desenvolvimento de software sob medida</strong>, <strong>automação de processos</strong> e <strong>consultoria estratégica</strong>, sempre com foco em resultados práticos e duradouros.
          </p>
          <br />
          <p>
            Acreditamos que tecnologia de verdade é aquela que resolve problemas reais. Por isso, trabalhamos lado a lado com nossos clientes para entender suas dores e criar soluções robustas, eficientes e preparadas para os desafios do mercado digital.
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
                  A Cold Code atuou no desenvolvimento de soluções digitais para a
                  LIVE!, com checkout 3.0, integração de estoque, pagamentos
                  personalizados, soluções omnichannel e entrega em tempo real.
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
                <h3>Brasil Papaya</h3>
                <p>
                  Criamos o site institucional da <strong>Brasil Papaya</strong>, com
                  foco em performance e acessibilidade. Também desenvolvemos um app
                  exclusivo de afinador de notas para os músicos da banda, com design
                  intuitivo e suporte multiplataforma.
                </p>
              </div>
            </a>
          </div>
        </section>

        <section id="contato" className="section fade-in">
          <h2 className="section-title">Fale com a gente</h2>
          <p>Entre em contato e vamos juntos desenvolver a melhor solução para sua empresa.</p>
            <div className="contact-info">
              <p>Santa Catarina</p>
              <a href="https://instagram.com/coldcodeltda" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> @coldcodeltda
              </a>
              <a href="https://wa.me/5547920020928" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i> (47) 92002-0928
              </a>
              <p>www.coldcode.com.br</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Cold Code Ltda. Todos os direitos reservados.
      </footer>
    </div>
  );
}