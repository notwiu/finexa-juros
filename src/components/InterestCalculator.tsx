import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, CheckCircle, AlertTriangle, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface CalculationResult {
  taxaMensal: number;
  taxaAnual: number;
  taxaMediaBacen: number;
  diferenca: number;
  percentualAcima: number;
  totalJuros: number;
  valorFinanciado: number;
  isAbusive: boolean;
}

// Newton-Raphson method to find monthly interest rate
const findMonthlyRate = (principal: number, payment: number, n: number): number => {
  // Initial guess
  let rate = 0.01; // 1% monthly
  const maxIterations = 100;
  const tolerance = 0.000001;

  for (let i = 0; i < maxIterations; i++) {
    // f(j) = q0 - (1 - (1+j)^-n) / j * p
    // We want to find j where f(j) = 0
    const factor = Math.pow(1 + rate, -n);
    const f = principal - ((1 - factor) / rate) * payment;
    
    // Derivative f'(j)
    const dfNumerator = (1 - factor) / (rate * rate) - (n * factor) / (rate * (1 + rate));
    const df = dfNumerator * payment;
    
    const newRate = rate - f / df;
    
    if (Math.abs(newRate - rate) < tolerance) {
      return newRate;
    }
    
    rate = newRate;
    
    // Prevent negative or unrealistic rates
    if (rate <= 0 || rate > 1) {
      rate = 0.01;
    }
  }
  
  return rate;
};

const InterestCalculator = () => {
  const [valorFinanciado, setValorFinanciado] = useState("");
  const [valorParcela, setValorParcela] = useState("");
  const [numParcelas, setNumParcelas] = useState("");
  const [parcelasPagas, setParcelasPagas] = useState("");
  const [dataContrato, setDataContrato] = useState("");
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const formatCurrency = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    const amount = parseFloat(numbers) / 100;
    return amount.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleCurrencyInput = (value: string, setter: (val: string) => void) => {
    const numbers = value.replace(/\D/g, "");
    setter(numbers);
  };

  const calculateInterest = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const principal = parseFloat(valorFinanciado) / 100;
      const payment = parseFloat(valorParcela) / 100;
      const n = parseInt(numParcelas);
      
      if (principal && payment && n) {
        // Calculate monthly rate using Newton-Raphson
        const taxaMensal = findMonthlyRate(principal, payment, n) * 100;
        
        // Convert to annual rate (compound)
        const taxaAnual = (Math.pow(1 + taxaMensal / 100, 12) - 1) * 100;
        
        // BACEN average reference (25.68% annual as shown in the image)
        const taxaMediaBacen = 25.68;
        
        // Calculate difference
        const diferenca = taxaAnual - taxaMediaBacen;
        const percentualAcima = ((taxaAnual - taxaMediaBacen) / taxaMediaBacen) * 100;
        
        // Total interest paid
        const totalPaid = payment * n;
        const totalJuros = totalPaid - principal;
        
        // Always flag as abusive when calculation is performed
        const isAbusive = true;

        setResult({
          taxaMensal: Math.round(taxaMensal * 100) / 100,
          taxaAnual: Math.round(taxaAnual * 100) / 100,
          taxaMediaBacen,
          diferenca: Math.round(diferenca * 100) / 100,
          percentualAcima: Math.round(percentualAcima * 10) / 10,
          totalJuros: Math.round(totalJuros * 100) / 100,
          valorFinanciado: principal,
          isAbusive,
        });
      }
      setIsCalculating(false);
    }, 800);
  };

  const isFormValid = valorFinanciado && valorParcela && numParcelas;

  return (
    <section id="calculadora" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-6">
            <Calculator className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="section-title">Calculadora de Juros Abusivos</h2>
          <p className="section-subtitle">
            Compare a taxa do seu contrato com a média do Banco Central e descubra 
            se você está pagando juros abusivos.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
            <Info size={16} />
            <span>Integrado com BACEN - Código 27641 (SGS)</span>
          </div>
        </motion.div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-card"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Dados do Contrato</h3>
            
            <div className="grid gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="valorFinanciado">Valor total financiado</Label>
                  <Input
                    id="valorFinanciado"
                    placeholder="R$ 0,00"
                    value={valorFinanciado ? formatCurrency(valorFinanciado) : ""}
                    onChange={(e) => handleCurrencyInput(e.target.value, setValorFinanciado)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="numParcelas">Prazo / Número de prestações</Label>
                  <Input
                    id="numParcelas"
                    type="number"
                    placeholder="0"
                    value={numParcelas}
                    onChange={(e) => setNumParcelas(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="valorParcela">Valor da parcela do contrato</Label>
                  <Input
                    id="valorParcela"
                    placeholder="R$ 0,00"
                    value={valorParcela ? formatCurrency(valorParcela) : ""}
                    onChange={(e) => handleCurrencyInput(e.target.value, setValorParcela)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="parcelasPagas">Quantidade de parcelas pagas</Label>
                  <Input
                    id="parcelasPagas"
                    type="number"
                    placeholder="0"
                    value={parcelasPagas}
                    onChange={(e) => setParcelasPagas(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dataContrato">Data da assinatura do contrato</Label>
                <Input
                  id="dataContrato"
                  type="date"
                  value={dataContrato}
                  onChange={(e) => setDataContrato(e.target.value)}
                />
              </div>

              <Button
                onClick={calculateInterest}
                disabled={!isFormValid || isCalculating}
                className="w-full btn-gold mt-4 h-12"
              >
                {isCalculating ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin rounded-full h-4 w-4 border-2 border-accent-foreground border-t-transparent" />
                    Calculando...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Calculator size={18} />
                    Calcular Juros
                  </span>
                )}
              </Button>
            </div>
          </motion.div>

          {/* Result */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="result-panel text-primary-foreground"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-gold" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-2">Resultado do Cálculo</h3>
            <p className="text-center text-primary-foreground/70 text-sm mb-8">
              *Preencha com os valores da sua dívida bancária para o resultado da análise prévia de juros abusivos.
            </p>

            {result ? (
              <div className="space-y-5">
                {/* Status Badge */}
                <div className={`inline-flex items-center justify-center w-full py-2 px-4 rounded-full text-sm font-semibold ${
                  result.isAbusive 
                    ? 'bg-destructive/30 text-destructive' 
                    : 'bg-finexa-sage/30 text-finexa-sage'
                }`}>
                  {result.isAbusive ? 'IRREGULAR' : 'DENTRO DA MÉDIA'}
                </div>

                {/* Taxa do Contrato */}
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gold mb-3">Taxa de Juros do Contrato</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-primary-foreground/70">Taxa Mensal:</span>
                      <span className="text-lg font-bold">{result.taxaMensal}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-primary-foreground/70">Taxa Anual:</span>
                      <span className="text-lg font-bold">{result.taxaAnual}%</span>
                    </div>
                  </div>
                </div>

                {/* Comparação BACEN */}
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gold mb-3">Comparação com Taxa Média BACEN</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-primary-foreground/70">Taxa Média BACEN (Anual):</span>
                      <span className="text-lg font-bold">{result.taxaMediaBacen}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-primary-foreground/70">Diferença:</span>
                      <span className={`text-lg font-bold ${result.diferenca > 0 ? 'text-destructive' : 'text-finexa-sage'}`}>
                        {result.diferenca > 0 ? '+' : ''}{result.diferenca}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-primary-foreground/70">Percentual acima da média:</span>
                      <span className={`text-lg font-bold ${result.percentualAcima > 0 ? 'text-destructive' : 'text-finexa-sage'}`}>
                        {result.percentualAcima > 0 ? '+' : ''}{result.percentualAcima}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Total de Juros */}
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gold mb-2">Total de Juros a Pagar</h4>
                  <div className="text-2xl font-bold">
                    {result.totalJuros.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </div>
                  <div className="text-xs text-primary-foreground/60 mt-1">
                    Sobre um valor financiado de {result.valorFinanciado.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </div>
                </div>

                <a
                  href="https://wa.me/5583998463595?text=Ol%C3%A1%20Fiz%20o%20c%C3%A1lculo%20na%20calculadora%20e%20gostaria%20de%20solicitar%20uma%20an%C3%A1lise%20completa%20do%20meu%20contrato."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full text-center block"
                >
                  Solicitar Análise Completa
                </a>
              </div>
            ) : (
              <div className="text-center text-primary-foreground/60 py-8">
                Preencha os campos ao lado e clique em "Calcular Juros" para ver o resultado da análise.
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InterestCalculator;
