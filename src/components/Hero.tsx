import { motion } from "framer-motion";
import { Shield, Handshake, FileSearch, BadgeCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "80%", label: "Redução na dívida" },
  { value: "5k+", label: "Clientes atendidos" },
  { value: "R$ 250M+", label: "Economizados" },
  { value: "98%", label: "Taxa de sucesso" },
];

const benefits = [
  { icon: Shield, text: "Proteção jurídica completa" },
  { icon: Handshake, text: "Negociação direta com bancos" },
  { icon: FileSearch, text: "Análise gratuita do contrato" },
  { icon: BadgeCheck, text: "Sem custos iniciais" },
];

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="bg-accent/90 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
              Especialistas em Revisão de Contratos e Juros Abusivos
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
          >
            Chega de perder dinheiro com{" "}
            <span className="text-gold">juros abusivos</span>.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto"
          >
            Identificamos cobranças indevidas no seu contrato e lutamos por você. 
            Com nossa negociação direta junto aos bancos, conseguimos reduzir o valor da sua dívida em até 80%.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a href="#calculadora" className="btn-gold w-full sm:w-auto text-center">
              Calcule sua Economia
            </a>
            <a href="https://wa.me/5583998463595" target="_blank" rel="noopener noreferrer" className="btn-outline-light w-full sm:w-auto text-center">
              Solicitar Análise Gratuita
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="text-2xl md:text-3xl font-bold text-gold">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-badge">
                <benefit.icon size={18} className="text-gold" />
                <span>{benefit.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
