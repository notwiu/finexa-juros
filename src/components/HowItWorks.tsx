import { motion } from "framer-motion";
import { FileSearch, Bell, FileText, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1º",
    title: "Análise",
    description: "Avaliamos seu contrato e identificamos juros abusivos e taxas irregulares cobradas indevidamente.",
    icon: FileSearch,
  },
  {
    number: "2º",
    title: "Notificação",
    description: "Entramos em contato com o banco para notificar sobre as cobranças abusivas identificadas.",
    icon: Bell,
  },
  {
    number: "3º",
    title: "Proposta",
    description: "Negociamos melhores condições e uma nova proposta sem juros abusivos para você.",
    icon: FileText,
  },
  {
    number: "4º",
    title: "Regularizado!",
    description: "Dívida reduzida e contrato ajustado. Você paga apenas o valor justo.",
    icon: CheckCircle,
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Como Funciona</h2>
          <p className="section-subtitle">
            Um processo simples e transparente para reduzir sua dívida e proteger seu patrimônio
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="feature-card h-full">
                {/* Icon Header */}
                <div className="service-card-header rounded-xl mb-6">
                  <step.icon className="w-8 h-8 text-gold" />
                </div>

                {/* Step Number */}
                <div className="text-sm font-semibold text-accent mb-2">{step.number}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/3 -right-2 z-10">
                  <ArrowRight className="w-5 h-5 text-accent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a href="#contato" className="btn-gold inline-block">
            Começar Agora
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
