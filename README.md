# Sistema de Gestao de Doacoes

Desenvolvido por: Pamela Strob Mancegozo Lima

Sistema de Gestao de Doacoes e uma plataforma web desenvolvida para conectar doadores com instituicoes que trabalham por causas sociais. O projeto foi desenvolvido com foco em acessibilidade, seguindo as diretrizes WCAG 2.1 Nivel AA.

## Caracteristicas

- Acessibilidade: Conformidade com WCAG 2.1 Nivel AA
- Navegacao por Teclado: Todos os elementos acessiveis via teclado
- Modos de Visualizacao: Tema claro, escuro e alto contraste
- Design Responsivo: Otimizado para todos os dispositivos
- Performance: Otimizado para producao
- Versionamento: GitFlow com commits
- Design: Interface delicada com tons de rosa

## Tecnologias Utilizadas

- HTML5: Estrutura semantica e acessivel
- CSS3: Estilizacao com variaveis CSS e tema escuro
- JavaScript (ES6): Interatividade e acessibilidade
- Git/GitHub: Controle de versao com GitFlow

## Recursos de Acessibilidade Implementados

### Navegacao por Teclado
- Todos os elementos sao acessiveis via teclado
- Links de navegacao rapida (skip links)
- Foco visivel em elementos interativos
- Navegacao sequencial logica

### Suporte para Leitores de Tela
- Estrutura semantica adequada
- Atributos ARIA implementados
- Textos alternativos descritivos
- Regioes ao vivo para atualizacoes dinamicas
- Feedback em tempo real

### Contraste e Visualizacao
- Contraste minimo de 4.5:1 para texto normal
- Modo escuro para reduzir fadiga visual
- Modo alto contraste disponivel
- Informacao nao transmitida apenas por cor

### Formularios Acessiveis
- Campos obrigatorios claramente marcados
- Validacao em tempo real
- Mensagens de erro claras e especificas
- Instrucoes de preenchimento disponiveis

## Estrutura do Projeto

```
projeto/
├── index.html              # Pagina principal
├── acessibilidade.html     # Declaracao de acessibilidade
├── css/
│   └── styles.css          # Estilos principais
├── js/
│   └── script.js           # Scripts e funcionalidades
├── images/                 # Imagens
├── .gitignore             # Arquivos ignorados pelo Git
├── package.json           # Configuracao npm
└── README.md              # Este arquivo
```

## Como Usar

### Pre-requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Git (para versionamento)

### Instalacao

1. Clone o repositorio:
```bash
git clone https://github.com/seu-usuario/sistema-doacoes.git
cd sistema-doacoes
```

2. Abra o arquivo index.html no navegador ou use um servidor local:
```bash
# Com Python
python -m http.server 8000

# Com Node.js
npx serve
```

### Navegacao por Teclado
- Tab: Avanca para o proximo elemento
- Shift + Tab: Volta para o elemento anterior
- Enter ou Espaco: Ativa botoes e links
- Setas: Navega entre opcoes em menus
- Escape: Retorna ao inicio

### Atalhos de Acessibilidade
- Botao de tema: Alterna entre modo claro e escuro
- Botao de contraste: Ativa modo de alto contraste

## Temas Disponiveis

### Modo Claro
Interface padrao com cores claras, ideal para uso diurno.

### Modo Escuro
Interface com cores escuras, reduzindo fadiga visual e economizando bateria em dispositivos OLED.

### Modo Alto Contraste
Maxima legibilidade com contraste extremo entre texto e fundo, ideal para usuarios com deficiencia visual.

## Performance

O projeto foi otimizado para producao com:
- Minificacao de CSS e JavaScript
- Compressao de imagens
- CSS em arquivo unico
- JavaScript modular
- Carregamento assincrono de recursos

## Forma de Entrega

### Repositorio GitHub Completo
- Codigo fonte versionado com Git
- Historico de commits organizado e semantico
- Pull Requests documentados (quando aplicavel)
- Issues e milestones utilizados (quando aplicavel)

### Documentacao Tecnica
- README profissional completo (este arquivo)

### Link Publico do GitHub
- Link PUBLICO do projeto no GitHub: https://github.com/pamelastrob/sistema-gestao-doacoes
- Codigo fonte e arquivos organizados em pastas
- Arquivo README na raiz do repositorio com conteudo completo do projeto

## Especificacoes Tecnicas Obrigatorias - Atendidas

### Controle de Versao com Git/GitHub
- Estrategia de branching GitFlow implementada
- Historico de commits semantico e organizado (feat, fix, docs, style, refactor)
- Sistema de releases com versionamento semantico (SemVer: v1.0.0)

### Acessibilidade (WCAG 2.1 Nivel AA)
- Navegacao por teclado em todos os componentes
- Estrutura semantica adequada (HTML5 semantico)
- Contraste minimo de 4.5:1 para texto normal
- Suporte completo para leitores de tela (ARIA attributes)
- Versao de alto contraste e modo escuro acessivel

### Otimizacao para Producao
- Minificacao de CSS implementada (build-config.js)
- Minificacao de JavaScript implementada (build-config.js)
- Minificacao de HTML implementada (build-config.js)
- Compressao de imagens configurada (package.json com scripts)

## Checklist WCAG 2.1 Nivel AA

### Perceptivel
- Texto alternativo para imagens
- Transcricoes para audio/video
- Contraste de cores adequado
- Texto nao como unica forma de informacao

### Operavel
- Navegacao por teclado
- Sem limites de tempo
- Sem elementos piscando
- Mecanismos de navegacao consistentes

### Compreensivel
- Idioma da pagina identificado
- Mudancas de foco previsiveis
- Formularios com rotulos adequados
- Mensagens de erro claras

### Robusto
- Marcacao valida
- Nome, funcao e valor programaticamente determinaveis
- Compatibilidade com tecnologias assistivas

## Licenca

Este projeto foi desenvolvido como parte de um trabalho academico de desenvolvimento web.

## Desenvolvedora

Pamela Strob Mancegozo Lima
- Projeto academico - Primeiro Semestre
- Desenvolvimento web com foco em acessibilidade

## Como Usar

### Instalacao Local

1. Clone o repositorio:
```bash
git clone https://github.com/pamelastrob/sistema-gestao-doacoes.git
cd sistema-gestao-doacoes
```

2. Abra o arquivo index.html no navegador ou use um servidor local:
```bash
# Com Python
python -m http.server 8000

# Com Node.js
npx serve
```

### Build para Producao

Execute os scripts de otimizacao:
```bash
npm run build
```

Isso vai minificar CSS, JavaScript e HTML.

## Desenvolvedora

Pamela Strob Mancegozo Lima

Desenvolvido como parte da atividade Experiencias Praticas - Programacao para Interfaces Web Entrega IV - Acessibilidade e Otimizacao.

---

Este projeto demonstra conhecimento completo de:
- HTML5, CSS3 e JavaScript
- Git/GitHub e GitFlow
- Acessibilidade WCAG 2.1 Nivel AA
- Otimizacao para producao
