# Finexa Juros 💸

**Finexa Juros** é uma landing page e calculadora de juros construída com **React + TypeScript**, usando **Vite**, **Tailwind CSS** e componentes baseados em **shadcn / Radix UI**. O objetivo do projeto é demonstrar uma interface moderna, responsiva e acessível para calcular juros e apresentar serviços relacionados.

---

## 🚀 Tecnologias

- **Framework:** React 18 + Vite
- **Linguagem:** TypeScript
- **Estilo:** Tailwind CSS (+ tailwind-animate)
- **UI:** Componentes shadcn / Radix UI
- **State & Data Fetch:** @tanstack/react-query
- **Formulários / Validação:** react-hook-form, zod
- **Testes:** Vitest + Testing Library
- **Ferramentas:** ESLint, PostCSS


## 📁 Estrutura do projeto (resumo)

- `src/components/` — componentes da UI (Hero, Header, Footer, InterestCalculator, etc.)
- `src/components/ui/` — primitives e componentes shadcn (botões, inputs, dialog, etc.)
- `src/hooks/` — hooks reutilizáveis
- `src/lib/` — utilitários (`utils.ts`)
- `src/pages/` — rotas/páginas (Index, NotFound)
- `src/test/` — testes de exemplo e setup


## ⚙️ Scripts úteis

- `npm run dev` — inicia a aplicação em modo desenvolvimento
- `npm run build` — gera build de produção
- `npm run build:dev` — build em modo development
- `npm run preview` — preview do build local
- `npm run lint` — executa ESLint
- `npm run test` — executa testes com Vitest (run)
- `npm run test:watch` — executa Vitest em modo watch

> Dica: você pode usar `pnpm`, `npm` ou `yarn` conforme sua preferência.


## 📥 Instalação e execução (rápido)

1. Clone o repositório:
   ```bash
   git clone <repo-url>
   cd finexa-juros
   ```
2. Instale dependências:
   ```bash
   npm install
   # ou: pnpm install
   ```
3. Rode em desenvolvimento:
   ```bash
   npm run dev
   # abra http://localhost:5173
   ```


## 🧪 Testes

- Testes são escritos com **Vitest**. Rode `npm run test` para executar os testes uma vez ou `npm run test:watch` para modo watch.


## 🤝 Contribuição

- Abra issues para discutir mudanças.
- Envie pull requests com descrições claras do que foi alterado.
- Siga o padrão de lint e escreva testes para novas funcionalidades.
