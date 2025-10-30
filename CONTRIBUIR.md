# Guia de Contribuição

## 🙏 Obrigado por Contribuir!

Este documento descreve como contribuir para o projeto Sistema de Gestão de Doações.

## 📋 Tabela de Conteúdo

- [Código de Conduta](#código-de-conduta)
- [Como Contribuir](#como-contribuir)
- [Enviando Mudanças](#enviando-mudanças)
- [Padrões de Código](#padrões-de-código)
- [Testes](#testes)

## 📜 Código de Conduta

### Nosso Compromisso

Em prol de um ambiente aberto e acolhedor, nos comprometemos a tornar a participação em nosso projeto uma experiência livre de assédio para todos, independentemente da idade, tamanho corporal, deficiência, etnia, características sexuais, identidade e expressão de gênero, nível de experiência, educação, status sócio-econômico, nacionalidade, aparência pessoal, raça, religião ou identidade e orientação sexual.

## 🚀 Como Contribuir

### Reportando Problemas

Antes de criar uma issue:

1. Verifique se o problema já foi reportado
2. Atualize para a versão mais recente
3. Colete informações sobre o problema

### Sugerindo Melhorias

Use o template de issue para sugerir melhorias, incluindo:
- Descrição clara da melhoria
- Casos de uso
- Benefícios esperados

### Corrigindo Bugs

1. Fork o projeto
2. Crie uma branch para sua correção
3. Implemente a correção
4. Adicione testes
5. Envie um Pull Request

## 💻 Enviando Mudanças

### Processo

1. **Fork o repositório**
   ```bash
   git clone https://github.com/seu-usuario/sistema-gestao-doacoes.git
   cd sistema-gestao-doacoes
   ```

2. **Crie uma branch**
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```

3. **Faça suas mudanças**
   - Siga os padrões de código
   - Adicione testes se necessário
   - Atualize documentação

4. **Commit suas mudanças**
   ```bash
   git add .
   git commit -m "feat: adiciona nova funcionalidade"
   ```

5. **Push para seu fork**
   ```bash
   git push origin feature/nova-funcionalidade
   ```

6. **Abra um Pull Request**

### Pull Request

Seu PR deve incluir:

- Descrição clara das mudanças
- Issue relacionada (se aplicável)
- Screenshots (se houver mudanças visuais)
- Lista de verificação:

```markdown
- [ ] Código segue os padrões do projeto
- [ ] Testes passam
- [ ] Documentação atualizada
- [ ] Acessibilidade verificada
- [ ] Sem breaking changes (ou documentado)
```

## 📐 Padrões de Código

### HTML

- Semântico e acessível
- Atributos ARIA adequados
- Indentação consistente (2 espaços)

```html
<section aria-labelledby="titulo">
  <h2 id="titulo">Título</h2>
  <p>Conteúdo...</p>
</section>
```

### CSS

- BEM naming convention
- Variáveis CSS para cores
- Responsivo

```css
.card {
  padding: 1rem;
}

.card__title {
  font-size: 1.5rem;
}
```

### JavaScript

- ES6+
- Nomes descritivos
- Comentários úteis
- Funções pequenas

```javascript
/**
 * Valida formato de email
 * @param {string} email 
 * @returns {boolean}
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
```

## ✅ Testes

### Manual

- [ ] Navegação por teclado funciona
- [ ] Todas as páginas responsivas
- [ ] Modos de tema funcionam
- [ ] Formulários validam corretamente
- [ ] Leitores de tela anunciam corretamente

### Acessibilidade

Execute verificações:

1. **Navegue apenas com teclado**
2. **Use leitor de tela** (NVDA/VoiceOver)
3. **Verifique contraste** (WCAG AA)
4. **Valide HTML** (W3C Validator)
5. **Teste em dispositivos móveis**

## 🏷️ Commits

Siga o padrão Conventional Commits:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Tipos

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação
- `refactor`: Refatoração
- `test`: Testes
- `chore`: Manutenção

### Exemplos

```bash
feat(accessibility): adiciona modo alto contraste
fix(form): corrige validação de telefone
docs(readme): atualiza instruções de instalação
refactor(theme): reorganiza lógica de temas
test(form): adiciona testes de validação
style(css): ajusta indentação
```

## 📚 Documentação

Atualize documentação quando:

- Adicionar nova funcionalidade
- Mudar comportamento existente
- Adicionar dependências
- Mudar processo de build

## 🔍 Revisão de Código

Seu PR será revisado em:

- ✅ Qualidade do código
- ✅ Conformidade com padrões
- ✅ Testes adicionados
- ✅ Documentação atualizada
- ✅ Acessibilidade mantida
- ✅ Performance não degradada

## 📞 Suporte

Dúvidas? Entre em contato:

- Abra uma issue
- E-mail: contato@adejo.dev
- Discord: (se disponível)

## 🙏 Reconhecimento

Contribuidores serão:

- Creditados no README
- Listados nas release notes
- Reconhecidos no site (se aplicável)

---

**Obrigado por tornar este projeto melhor!** ❤️
