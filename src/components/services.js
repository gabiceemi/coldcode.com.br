import { Monitor, Code, Server, ShoppingCart, Cloud, Users } from "lucide-react";

export const services = [
  {
    icon: <Monitor size={48} aria-label="Frontend e Mobile" />,
    text: "Frontend & Mobile: interfaces modernas em React e React Native",
  },
  {
    icon: <Code size={48} aria-label="Backend e APIs" />,
    text: "Backend & APIs: arquiteturas robustas em Node.js",
  },
  {
    icon: <Server size={48} aria-label="SaaS" />,
    text: "SaaS: soluções escaláveis com módulos de assinatura e gamificação",
  },
  {
    icon: <ShoppingCart size={48} aria-label="E-commerce" />,
    text: "E-commerce: plataformas de vendas customizadas com checkout otimizado",
  },
  {
    icon: <Cloud size={48} aria-label="DevOps e Cloud" />,
    text: "DevOps & Cloud: deploy contínuo e infraestrutura em AWS, Vercel e Railway",
  },
  {
    icon: <Users size={48} aria-label="Consultoria e Mentoria" />,
    text: "Consultoria & Mentoria: apoio técnico para elevar seus padrões de desenvolvimento",
  },
];
