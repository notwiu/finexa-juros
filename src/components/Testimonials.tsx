import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Fernanda Souza",
    savings: "R$ 28.500,00 economizados",
    text: "Eu sentia que estava pagando por dois carros, de tantos juros no meu contrato. A FINEXA analisou meu caso e me mostrou o quanto eu estava perdendo dinheiro. Renegociamos direto com o banco e quitei meu financiamento com um desconto que eu nem imaginava ser possível.",
    rating: 5,
  },
  {
    name: "Marcos Vinícius",
    savings: "R$ 54.000,00 economizados",
    text: "Minha dívida estava uma bola de neve e eu não via saída. A equipe da FINEXA analisou meu contrato e conseguiu um acordo incrível com o banco. Hoje meu carro está quitado e a economia foi surreal. Super indico!",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    savings: "Gravame baixado",
    text: "Já estou com o gravame baixado e estou muito feliz! Empresa responsável, sincera e, é isso aí!",
    rating: 5,
  },
];

const metrics = [
  { value: "+50 mil", label: "Contratos Revisados" },
  { value: "+12 anos", label: "de Experiência" },
  { value: "Até 80%", label: "de Economia" },
  { value: "100%", label: "Seguro" },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Histórias de Sucesso</h2>
          <p className="section-subtitle">
            Mais de 50 mil veículos quitados com redução de até 80% na dívida
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="testimonial-card"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-accent font-medium">{testimonial.savings}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
