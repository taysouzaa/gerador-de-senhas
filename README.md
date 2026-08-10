# Gerador de Senhas Seguras

> Gere senhas fortes e personalizadas diretamente do terminal, com critérios configuráveis e indicador de força.

![Status](https://img.shields.io/badge/status-concluído-22c55e)
![TypeScript](https://img.shields.io/badge/TypeScript-CLI-3178c6?logo=typescript)
![Node](https://img.shields.io/badge/runtime-Node.js-339933?logo=nodedotjs)
![Licença](https://img.shields.io/badge/licença-proprietária-red)

> **Estado:** ativo · **Última revisão:** 2026-08-10

## Visão geral

O **Gerador de Senhas Seguras** é uma ferramenta de linha de comando (CLI) escrita em TypeScript que cria senhas aleatórias com base em critérios configurados pelo usuário. Construído com foco em segurança, performance e simplicidade de uso.

### O que o sistema resolve

- Gera senhas verdadeiramente aleatórias com entropia controlada.
- Permite customizar comprimento, caracteres especiais, números e maiúsculas.
- Indica visualmente a força da senha gerada.
- Copia automaticamente a senha para a área de transferência.

## O que foi desenvolvido

### 1. Geração de Senhas
- Algoritmo de aleatoriedade com critérios configuráveis.
- Suporte a letras maiúsculas, minúsculas, números e símbolos.
- Comprimento ajustável pelo usuário.

### 2. Interface CLI
- Prompts interativos para configuração rápida.
- Indicador de força da senha (fraca / média / forte / muito forte).
- Cópia automática para área de transferência.

### 3. Qualidade de Código
- TypeScript estrito com tipagem completa.
- Módulos separados por responsabilidade.

## Stack

- **Linguagem:** TypeScript
- **Runtime:** Node.js
- **Interface:** CLI interativa

## Estrutura do projeto

```text
.
├─ src/
│  ├─ app.ts                    ← entrypoint: prompts com inquirer
│  ├─ cli.ts                    ← entrypoint alternativo: readline + cópia automática
│  ├─ index.ts                  ← tipos compartilhados (PasswordOptions)
│  └─ utils/
│     └─ passwordGenerator.ts   ← algoritmo de geração
├─ package.json
└─ tsconfig.json
```

São duas interfaces sobre o mesmo gerador: `app.ts` usa prompts do **inquirer**; `cli.ts` usa **readline** e copia a senha para a área de transferência ao final.

## Pré-requisitos

- **Node.js 18+**
- npm 9+

## Rodar local

```bash
npm install
npm start          # interface com inquirer
```

Interface alternativa, com cópia automática:

```bash
npm run cli
```

Outros comandos: `npm run typecheck` (`tsc --noEmit`) e `npm run build` (compila para `dist/`).

## Licença

Licença proprietária — todos os direitos reservados. O código pode ser lido para avaliação profissional ou estudo; qualquer reuso, cópia, modificação ou uso comercial exige autorização prévia e por escrito da autora. Ver [LICENSE](./LICENSE).