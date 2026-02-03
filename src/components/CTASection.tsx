import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="contato" className="py-20 lg:py-28 cta-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Pare a bola de neve agora mesmo.
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            A demora custa caro: a cada dia, os juros compostos aumentam o valor que você deve.{" "}
            <strong className="text-gold">Encerre esse ciclo de pagamentos injustos.</strong>{" "}
            Nossos especialistas analisam seu caso e negociam diretamente com o banco para cortar até 80% da sua dívida.{" "}
            <strong className="text-gold">Tome uma atitude hoje</strong> e volte a ter paz.
          </p>

          <motion.a
            href="https://wa.me/5583998463595"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-gold text-lg px-10 py-5 inline-block"
          >
            Solicitar Análise Gratuita
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
