# Sistema de Gestao de Doacoes

## Sobre o Projeto

Sistema de Gestao de Doacoes e uma plataforma web desenvolvida para conectar doadores com instituicoes que trabalham por causas sociais. O projeto foi desenvolvido com foco em acessibilidade, seguindo as diretrizes WCAG 2.1 Nivel AA.

Desenvolvido por: Pamela Strob Mancegozo Lima

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

## Contribuindo

Este e um projeto academico. Para contribuir:

1. Faca um fork do projeto
2. Crie uma branch para sua feature (git checkout -b feature/NovaFeature)
3. Commit suas mudancas (git commit -m 'Adiciona nova feature')
4. Push para a branch (git push origin feature/NovaFeature)
5. Abra um Pull Request

## Versionamento

O projeto utiliza GitFlow:

```
v1.0.0 - Versao inicial
v1.1.0 - Novas funcionalidades
v1.1.1 - Correcoes de bugs
```

### Estrutura de Branches
- main: Producao
- develop: Desenvolvimento
- feature: Novas funcionalidades
- hotfix: Correcoes urgentes
- release: Preparacao para release

### Commits
- feat: Nova funcionalidade
- fix: Correcao de bug
- docs: Documentacao
- style: Formatacao
- refactor: Refatoracao
- test: Testes
- chore: Tarefas de manutencao

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

## Referencias

- WCAG 2.1 Guidelines
- MDN Web Docs
- WebAIM
- A11y Project

## Contato

- E-mail: contato@doacoessolidarias.org.br
- Telefone: (11) 9999-9999
- Website: Declaracao de Acessibilidade (acessibilidade.html)

---

Desenvolvido com dedicacao para acessibilidade e responsabilidade social
