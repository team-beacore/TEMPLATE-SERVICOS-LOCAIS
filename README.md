# Template — Serviços Locais

Template profissional e reutilizável para criação rápida de sites institucionais de empresas e prestadores de serviços locais.

O projeto foi desenvolvido com foco em velocidade de produção, personalização e reutilização. A mesma base pode ser adaptada para diferentes clientes alterando conteúdo, identidade visual e configurações sem reconstruir o site do zero.

## Demo

[Visualizar Demo](COLE_AQUI_O_LINK_DA_DEMO)

## Tecnologias

- React
- Vite
- TypeScript
- Tailwind CSS
- Git
- GitHub

## Objetivo

Este projeto funciona como um template comercial para criação de sites de empresas que precisam apresentar seus serviços e facilitar o contato com clientes.

Pode ser utilizado como base para:

- Barbearias
- Oficinas
- Assistências técnicas
- Eletricistas
- Encanadores
- Marcenarias
- Vidraçarias
- Empresas de limpeza
- Empresas de manutenção
- Instaladores
- Prestadores de serviços em geral

## Estrutura do Site

O template possui uma estrutura modular composta por:

- Navbar
- Hero
- Serviços
- Diferenciais
- Sobre a empresa
- Galeria
- Depoimentos
- FAQ
- Localização
- CTA
- Footer
- Botão flutuante de WhatsApp

A estrutura das seções pode ser adaptada de acordo com as necessidades de cada cliente.

## Personalização

O template foi desenvolvido para separar estrutura, conteúdo e configuração.

É possível personalizar:

- Nome da empresa
- Logo
- Cores
- Tipografia
- Textos
- Imagens
- Serviços
- Diferenciais
- Depoimentos
- FAQ
- WhatsApp
- Instagram
- Endereço
- Horários
- Google Maps
- CTAs

A ideia é permitir o seguinte fluxo:

```text
Template Base
      ↓
Duplicação do Projeto
      ↓
Configuração do Cliente
      ↓
Inserção de Conteúdo
      ↓
Personalização Visual
      ↓
Testes
      ↓
Deploy
```

## Estrutura do Projeto

```text
src/
├── components/
├── sections/
├── layouts/
├── pages/
├── data/
├── config/
├── assets/
├── hooks/
├── lib/
└── styles/

public/
└── assets/
```

### Components

Elementos reutilizáveis da interface.

### Sections

Seções completas utilizadas na composição das páginas.

### Data

Conteúdo que pode ser alterado de acordo com o cliente.

### Config

Configurações gerais do site e identidade do projeto.

### Assets

Imagens, ícones e demais arquivos estáticos.

### Lib

Funções auxiliares e integrações utilizadas pelo projeto.

## Requisitos

Antes de iniciar, tenha instalado:

- Node.js
- npm

Verifique:

```bash
node -v
npm -v
```

## Instalação

Clone o projeto:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta:

```bash
cd template-servicos-locais
```

Instale as dependências:

```bash
npm install
```

## Desenvolvimento

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite disponibilizará uma URL local, normalmente:

```text
http://localhost:5173
```

## Build

Para gerar a versão de produção:

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

## Deploy

O projeto foi estruturado para aplicações frontend estáticas e pode ser publicado em plataformas como Cloudflare Pages.

Fluxo recomendado:

```text
GitHub
   ↓
Cloudflare Pages
   ↓
Build
   ↓
Deploy
   ↓
Domínio do cliente
```

O domínio e a infraestrutura de produção devem, preferencialmente, permanecer sob propriedade do cliente.

## Configuração de Cliente

Ao utilizar este template para um novo projeto:

1. Faça uma cópia do projeto.
2. Altere os dados da empresa.
3. Substitua logo e imagens.
4. Ajuste cores e identidade visual.
5. Atualize serviços e textos.
6. Configure WhatsApp e redes sociais.
7. Configure endereço e localização.
8. Revise SEO.
9. Execute os testes.
10. Faça o build.
11. Publique o projeto.

## Checklist de Entrega

### Conteúdo

- [ ] Nome da empresa
- [ ] Logo
- [ ] Textos
- [ ] Serviços
- [ ] Fotos
- [ ] Contatos
- [ ] WhatsApp
- [ ] Instagram
- [ ] Endereço
- [ ] Horários

### Interface

- [ ] Desktop
- [ ] Tablet
- [ ] Mobile
- [ ] Navbar
- [ ] Botões
- [ ] Galeria
- [ ] FAQ
- [ ] Footer
- [ ] WhatsApp

### SEO

- [ ] Title
- [ ] Meta description
- [ ] Favicon
- [ ] Open Graph
- [ ] Headings
- [ ] Alt text das imagens

### Produção

- [ ] `npm run build`
- [ ] Console sem erros
- [ ] Links funcionando
- [ ] Formulários funcionando
- [ ] HTTPS funcionando
- [ ] Domínio configurado
- [ ] Testes finais realizados

## Princípios do Template

Este projeto segue alguns princípios para manter a produção rápida e escalável.

### Reutilização

Evitar reconstruir funcionalidades que já existem.

### Separação

Manter estrutura, conteúdo e configuração separados sempre que possível.

### Configuração

Preferir alterar dados e configurações em vez de modificar componentes diretamente.

### Responsividade

O site deve funcionar corretamente em dispositivos móveis, tablets e desktops.

### Performance

Evitar dependências e recursos desnecessários.

### Escopo

Funcionalidades específicas de um cliente não devem ser incorporadas ao template base sem avaliar se são realmente reutilizáveis.

## Uso Comercial

Este repositório funciona como base de produção para sites comerciais.

Ao criar um novo projeto para um cliente, recomenda-se duplicar o template e personalizar a nova instância, mantendo este repositório como referência e base.

## Status

Template em evolução.

Novos componentes, melhorias de UX, otimizações e recursos reutilizáveis podem ser incorporados conforme as necessidades identificadas nos projetos.

---

Desenvolvido como parte da estrutura de produção de sites comerciais.
