# Guia GitFlow - Estratégia de Branching

## 📋 Visão Geral

Este projeto utiliza a estratégia de branching **GitFlow** para gerenciar desenvolvimento, releases e correções. GitFlow ajuda a manter o código organizado e facilita a colaboração em equipe.

## 🌳 Estrutura de Branches

```
main          ----x-------x---------x----------> (releases)
               /  |       |          \
develop       x---x---x---x----x---x--x---------- (integração)
                /   |    |   |   |    |
feature/*      x----x    |   |   |    |           (features)
              /    /    |   |   |    |           
release/*     x----x    |   |   |    |           (preparação release)
              |    |    |   |   |    |
hotfix/*      x----x    |   |   |    |           (correções urgentes)
```

### Branches Principais

#### `main`
- **Propósito**: Código em produção
- **Proteção**: Sempre estável e funcional
- **Merge**: Apenas de `release/*` ou `hotfix/*`

#### `develop`
- **Propósito**: Integração contínua
- **Proteção**: Código para próxima release
- **Merge**: A partir de `feature/*` e `hotfix/*`

## 🔀 Tipos de Branches

### 1. Feature Branches

Criadas para desenvolver novas funcionalidades.

```bash
# Criar feature branch
git checkout develop
git checkout -b feature/nova-funcionalidade

# Desenvolver...
git add .
git commit -m "feat: implementa nova funcionalidade"

# Finalizar e mergear
git checkout develop
git merge feature/nova-funcionalidade --no-ff
git branch -d feature/nova-funcionalidade

# Atualizar develop
git push origin develop
```

### 2. Release Branches

Criadas para preparar uma nova versão.

```bash
# Criar release branch
git checkout develop
git checkout -b release/v1.1.0

# Versão final e testes...
git add .
git commit -m "chore: versão 1.1.0"

# Mergear em main e develop
git checkout main
git merge release/v1.1.0 --no-ff
git tag -a v1.1.0 -m "Release version 1.1.0"

git checkout develop
git merge release/v1.1.0 --no-ff
git branch -d release/v1.1.0

# Push
git push origin main --tags
git push origin develop
```

### 3. Hotfix Branches

Criadas para correções urgentes em produção.

```bash
# Criar hotfix branch
git checkout main
git checkout -b hotfix/correcao-urgente

# Corrigir...
git add .
git commit -m "fix: corrige bug crítico"

# Mergear em main e develop
git checkout main
git merge hotfix/correcao-urgente --no-ff
git tag -a v1.0.1 -m "Hotfix version 1.0.1"

git checkout develop
git merge hotfix/correcao-urgente --no-ff
git branch -d hotfix/correcao-urgente

# Push
git push origin main --tags
git push origin develop
```

## 📝 Convenção de Commits

Utilizamos **Conventional Commits** para commits semânticos:

### Tipos

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação (não afeta código)
- `refactor`: Refatoração
- `test`: Adição/correção de testes
- `chore`: Tarefas de manutenção

### Formato

```
<tipo>(<escopo>): <assunto>

[corpo opcional]

[rodapé opcional]
```

### Exemplos

```bash
# Nova funcionalidade
git commit -m "feat(accessibility): adiciona modo alto contraste"

# Correção de bug
git commit -m "fix(form): corrige validação de telefone"

# Documentação
git commit -m "docs(readme): atualiza instruções de instalação"

# Refatoração
git commit -m "refactor(theme): reorganiza lógica de temas"

# Teste
git commit -m "test(form): adiciona testes de validação"

# Estilo
git commit -m "style(css): ajusta indentação"

# Configuração
git commit -m "chore(config): atualiza dependências"
```

## 🏷️ Versionamento Semântico

Seguimos **Semantic Versioning** (SemVer):

```
MAJOR.MINOR.PATCH
  ↑      ↑     ↑
  |      |     └── Correções de bugs
  |      └──────── Novas funcionalidades (backward compatible)
  └─────────────── Breaking changes
```

### Regras

- **MAJOR**: Mudanças incompatíveis
- **MINOR**: Novas funcionalidades compatíveis
- **PATCH**: Correções compatíveis

### Exemplos

```bash
# v1.0.0 -> v1.0.1 (correção de bug)
git tag -a v1.0.1 -m "Hotfix"

# v1.0.1 -> v1.1.0 (nova funcionalidade)
git tag -a v1.1.0 -m "Feature release"

# v1.1.0 -> v2.0.0 (breaking change)
git tag -a v2.0.0 -m "Major release"
```

## 🔄 Workflow Completo

### Desenvolvimento de Feature

```bash
# 1. Criar feature
git checkout develop
git pull origin develop
git checkout -b feature/acessibilidade

# 2. Desenvolver
git add .
git commit -m "feat: implementa navegação por teclado"
git commit -m "feat: adiciona modo escuro"

# 3. Atualizar develop
git checkout develop
git pull origin develop
git merge feature/acessibilidade --no-ff

# 4. Limpar
git branch -d feature/acessibilidade
git push origin develop
```

### Preparar Release

```bash
# 1. Criar release
git checkout develop
git checkout -b release/v1.1.0

# 2. Atualizar versão
# (editar package.json, etc)
git add .
git commit -m "chore: versão 1.1.0"

# 3. Mergear em main
git checkout main
git merge release/v1.1.0 --no-ff
git tag -a v1.1.0 -m "Release version 1.1.0"

# 4. Mergear em develop
git checkout develop
git merge release/v1.1.0 --no-ff

# 5. Push
git push origin main --tags
git push origin develop

# 6. Limpar
git branch -d release/v1.1.0
```

### Correção Urgente

```bash
# 1. Criar hotfix
git checkout main
git checkout -b hotfix/bug-critico

# 2. Corrigir
git add .
git commit -m "fix: corrige bug crítico"

# 3. Mergear em main
git checkout main
git merge hotfix/bug-critico --no-ff
git tag -a v1.0.1 -m "Hotfix version 1.0.1"

# 4. Mergear em develop
git checkout develop
git merge hotfix/bug-critico --no-ff

# 5. Push
git push origin main --tags
git push origin develop

# 6. Limpar
git branch -d hotfix/bug-critico
```

## 🛠️ Comandos Úteis

### Visualizar Branches

```bash
# Listar branches locais
git branch

# Listar branches remotas
git branch -r

# Listar todas branches
git branch -a

# Visualizar grafo
git log --graph --oneline --all --decorate
```

### Limpeza

```bash
# Remover branch local
git branch -d nome-branch

# Remover branch remota
git push origin --delete nome-branch

# Limpar branches mergeadas
git branch --merged | grep -v "\*\|main\|develop" | xargs git branch -d
```

### Tags

```bash
# Listar tags
git tag

# Criar tag anotada
git tag -a v1.0.0 -m "Release version 1.0.0"

# Push tags
git push origin --tags

# Deletar tag
git tag -d v1.0.0
git push origin --delete v1.0.0
```

## 📊 Status do Projeto

### Branches Atuais

- `main`: v1.0.0 (produção)
- `develop`: v1.1.0 (desenvolvimento)

### Próximas Releases

- v1.1.0: Novas funcionalidades de acessibilidade
- v1.2.0: Melhorias de performance
- v2.0.0: Refatoração major

## 📚 Referências

- [GitFlow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)

---

**Última atualização**: Dezembro 2024
