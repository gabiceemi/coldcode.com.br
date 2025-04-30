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
            <h2 className="title typing-animation">Bem-vindo a Cold Code!</h2>
            <p>Conectando tecnologia e inovação com a essência da Serra Catarinense.</p>
            <button className="btn-primary">FALE COM UM ESPECIALISTA</button>
          </div>
          <div className="home-image">
            <img src="/images/banner.png" alt="Banner da Cold Code" />
          </div>
        </section>

        <section id="sobre" className="section fade-in">
          <h2 className="section-title">Quem Somos</h2>
          <p>
            Na <strong>Cold Code</strong>, somos mais do que uma empresa de tecnologia: somos uma força inovadora com raízes profundas na <strong>Serra Catarinense</strong>. Com sede em <strong>São Joaquim, SC</strong>, uma cidade famosa por suas paisagens geladas e clima rigoroso, nossa inspiração vem do <strong>frio da serra</strong> — assim como a nossa abordagem tecnológica: <strong>sólida</strong>, <strong>precisa</strong> e de <strong>alto impacto</strong>.
          </p>
          <br></br>
          <p>
            Nossa missão é fornecer soluções personalizadas e de <strong>alta qualidade</strong> para empresas que buscam <strong>evolução</strong> e <strong>inovação</strong>. Oferecemos desde o <strong>desenvolvimento de software sob medida</strong> até <strong>consultoria estratégica</strong>, com um compromisso inabalável com a <strong>excelência</strong>.
          </p>
          <br></br>
          <p>
            <strong>Por que Cold Code?</strong> Assim como o frio da serra exige <strong>resistência</strong> e <strong>adaptação</strong>, a Cold Code traz soluções tecnológicas robustas, pensadas para enfrentar os desafios do mercado digital com <strong>inteligência</strong> e <strong>performance</strong>. Estamos aqui para ajudar sua empresa a se destacar, seja no <strong>desenvolvimento de novos produtos</strong>, na <strong>otimização de processos</strong> ou na construção de um <strong>futuro mais digital</strong>.
          </p>
        </section>

        <section id="services" className="section fade-in">
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

        <section id="clients" className="section fade-in">
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
          <p>Estamos prontos para entender suas necessidades e desenvolver a solução ideal para o seu negócio.</p>
          <div className="contact-info">
            <p>Santa Catarina</p>
            <p>@coldcodeltda</p>
            <p>(47) 92002-0928</p>
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