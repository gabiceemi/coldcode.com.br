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
          <div></div><div></div><div></div>
        </button>
      </header>

      <main className="content">
        <section id="home" className="section home-section fade-in">
          <div className="home-content">
            <h2 className="title typing-animation">Se dá pra imaginar, a gente programa.</h2>
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

        <section id="sobre" className="section fade-in">
          <h2 className="section-title">Quem Somos</h2>
          <p>
            A <strong>Cold Code</strong> nasceu da vontade de transformar ideias em experiências digitais de <strong>impacto</strong>.
            Não foi só uma decisão de empreender com tecnologia — foi um chamado pra <strong>criar</strong>, <strong>melhorar</strong> e <strong>facilitar a vida</strong> das pessoas com soluções que realmente fazem sentido.
          </p>
          <br></br>
          <p>
            A gente acredita que todo bom projeto começa com uma <strong>boa conversa</strong>. Antes de escrever qualquer linha de código, <strong>escutamos</strong>. <strong>Entendemos</strong>. Questionamos. Só depois partimos pro teclado — com <strong>estratégia</strong>, <strong>propósito</strong> e uma xícara de café por perto.
          </p>
          <br></br>
          <p>
            Nosso time é movido por <strong>desafios</strong> e pela <strong>curiosidade constante</strong>. Somos aquelas pessoas que adoram resolver problemas, testar ideias, aprender coisa nova e transformar <strong>complexidade em simplicidade</strong>. Se algo pode ser feito de um jeito melhor, mais rápido ou mais bonito, a gente vai querer descobrir como.
          </p>
          <br></br>
          <p>
            Mais do que entregar software, queremos construir <strong>relações duradouras</strong>. Trabalhamos com <strong>transparência</strong>, <strong>prazos reais</strong> e aquela sensação boa de <strong>“pode deixar que a gente resolve”</strong>.
            Porque no fim das contas, <strong>tecnologia</strong> é só a ferramenta — o que importa mesmo é <strong>o que ela é capaz de criar</strong>.
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