import { motion } from "framer-motion";
import { 
  Car, 
  Wallet, 
  CreditCard, 
  TrendingDown, 
  Building2, 
  CircleDollarSign,
  Shield,
  FileWarning
} from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Redução de Financiamentos de Veículos",
    description: "Pague o valor justo pelo seu veículo. Atuamos diretamente na negociação com as financeiras para limpar seu contrato de cobranças indevidas. O resultado é uma economia real: conseguimos reduzir o saldo do seu financiamento em até 80%.",
  },
  {
    icon: Wallet,
    title: "Redução de Empréstimos Pessoais",
    description: "Diminua o peso das parcelas no seu bolso. Realizamos uma varredura completa no seu contrato de empréstimo para encontrar falhas e cobranças indevidas. Com isso em mãos, negociamos com o banco para reduzir o saldo total da sua dívida.",
  },
  {
    icon: CreditCard,
    title: "Redução de Dívidas com Cartão de Crédito",
    description: "Saia do rotativo e elimine a bola de neve. Não aceite os juros mais altos do mercado. Analisamos tecnicamente sua fatura e contrato para cortar excessos e conquistar um parcelamento justo e acessível para o seu orçamento.",
  },
  {
    icon: TrendingDown,
    title: "Revisão de Juros Abusivos",
    description: "Pague apenas o que é legal, segundo o Banco Central. Nossa equipe compara as taxas do seu contrato com a média de mercado estipulada pelo BACEN. Se houver divergência, contestamos a cobrança para readequar o valor do seu financiamento.",
  },
  {
    icon: Building2,
    title: "Redução de Dívidas Empresariais",
    description: "Recupere o fôlego financeiro da sua empresa. Especialistas em passivos corporativos: revisamos contratos bancários da sua empresa e renegociamos as dívidas para melhorar seu fluxo de caixa e garantir a saúde do negócio.",
  },
  {
    icon: CircleDollarSign,
    title: "Redução de Dívidas com Cheque Especial",
    description: "Livre-se dos juros abusivos do limite da conta. O cheque especial é uma das dívidas mais caras que existem. Auditamos as taxas aplicadas e renegociamos o valor total para que você saia do negativo com condições muito mais vantajosas.",
  },
  {
    icon: Shield,
    title: "Proteção contra Negativação e Restrição de CPF",
    description: "Recupere seu crédito e seu poder de compra. Atuamos tanto na prevenção quanto na remoção de restrições em órgãos como SPC e Serasa. Negociamos acordos estratégicos para limpar seu nome e mantê-lo ativo no mercado.",
  },
  {
    icon: FileWarning,
    title: "Evitar a Busca e Apreensão de Veículos",
    description: "Não perca seu veículo para o banco. Agimos de forma preventiva e rápida para blindar seu patrimônio. Negociamos acordos seguros que impedem o recolhimento do seu carro ou moto, garantindo que o bem continue com você.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="section-title">Soluções Completas para Suas Dívidas</h2>
          <p className="section-subtitle">
            Oferecemos serviços especializados em renegociação e revisão de contratos 
            bancários para reduzir suas dívidas e proteger seu patrimônio.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="service-card"
            >
              {/* Icon Header */}
              <div className="service-card-header">
                <service.icon className="w-10 h-10 text-gold" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
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
            Solicite uma Análise Gratuita
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
