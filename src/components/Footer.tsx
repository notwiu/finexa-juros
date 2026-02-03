import { Phone, Mail, MessageCircle } from "lucide-react";
import logoFinexa from "@/assets/logo-finexa-new.png";

const Footer = () => {
  return (
    <footer className="footer-section py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoFinexa} alt="FINEXA Soluções" className="h-12 w-auto brightness-0 invert" />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-primary-foreground tracking-tight">FINEXA</span>
                <span className="text-xs text-primary-foreground/70 -mt-1">Soluções Financeiras</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-md mb-4">
              Referência em revisão contratual e renegociação bancária. Com uma trajetória sólida de mais de 12 anos, nossa missão é combater cobranças indevidas e devolver a saúde financeira a milhares de brasileiros.
            </p>
            <p className="text-primary-foreground/50 text-xs">
              CNPJ: 54.415.069/0001-05
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                  Início
                </a>
              </li>
              <li>
                <a href="#calculadora" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                  Calculadora
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs text-primary-foreground/50">WhatsApp</div>
                  <a href="https://wa.me/5583998463595" className="text-sm text-primary-foreground hover:text-gold transition-colors">
                    (83) 99846-3595
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs text-primary-foreground/50">Telefone</div>
                  <a href="tel:+5583998463595" className="text-sm text-primary-foreground hover:text-gold transition-colors">
                    (83) 99846-3595
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs text-primary-foreground/50">E-mail</div>
                  <a href="mailto:finexarevisional@gmail.com" className="text-sm text-primary-foreground hover:text-gold transition-colors">
                    finexarevisional@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} FINEXA Soluções Financeiras. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
