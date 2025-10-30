# Guia de Otimização para Produção

## 📋 Visão Geral

Este documento descreve os processos de otimização implementados para garantir máxima performance e conformidade com requisitos de produção.

## 🎯 Objetivos de Otimização

1. **Minificação**: Reduzir tamanho de arquivos CSS e JavaScript
2. **Compressão**: Otimizar imagens para web
3. **Performance**: Melhorar velocidade de carregamento
4. **Acessibilidade**: Manter conformidade WCAG 2.1 AA

## 📦 Dependências Necessárias

Instale as dependências necessárias:

```bash
npm install --save-dev clean-css-cli terser
```

Ou instale todas as dependências:

```bash
npm install
```

## 🛠️ Processo de Build

### 1. Minificação de CSS

O CSS é minificado usando `clean-css`:

```bash
npm run minify:css
```

Este comando:
- Remove comentários
- Remove espaços em branco desnecessários
- Combina regras semelhantes
- Otimiza cores e unidades
- Gera: `css/styles.min.css`

### 2. Minificação de JavaScript

O JavaScript é minificado usando `terser`:

```bash
npm run minify:js
```

Este comando:
- Remove comentários
- Minifica nomes de variáveis (quando seguro)
- Remove código não utilizado
- Otimiza loops e condicionais
- Gera: `js/script.min.js`

### 3. Otimização de Imagens

Use Squoosh CLI para compressão de imagens:

```bash
# Instalar Squoosh CLI
npm install -g @squoosh/cli

# Otimizar todas as imagens para WebP
squoosh-cli --webp images/

# Ou otimizar imagem específica
squoosh-cli --webp -d images/ nome-imagem.jpg
```

### 4. Build Completo

Execute o build completo:

```bash
npm run build
```

Este comando irá:
1. Minificar CSS
2. Minificar JavaScript
3. Copiar arquivos HTML atualizados
4. Copiar assets
5. Gerar arquivo de versão

## 📊 Resultados Esperados

### Antes da Otimização
- `css/styles.css`: ~25KB
- `js/script.js`: ~15KB
- Total: ~40KB

### Após a Otimização
- `css/styles.min.css`: ~18KB (28% de redução)
- `js/script.min.js`: ~8KB (47% de redução)
- Total: ~26KB (35% de redução geral)

## 🔧 Configuração de Servidor

### Apache (.htaccess)

Adicione compressão GZIP:

```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache de arquivos estáticos
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
</IfModule>
```

### Nginx (nginx.conf)

```nginx
# Compressão GZIP
gzip on;
gzip_types text/css application/javascript application/json text/html;
gzip_min_length 1000;

# Cache
location ~* \.(css|js)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

## 📈 Verificação de Performance

### Lighthouse

Execute audit de performance:

```bash
# Com Chrome DevTools
# Ou use Lighthouse CLI
npm install -g lighthouse

lighthouse https://seu-site.com --view
```

### Metrica Esperadas

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 95+

## ✅ Checklist de Otimização

- [x] CSS minificado
- [x] JavaScript minificado
- [x] Imagens otimizadas (WebP)
- [x] Compressão GZIP habilitada
- [x] Cache de arquivos estáticos configurado
- [x] Headers de segurança configurados
- [x] Lazy loading de imagens implementado
- [x] Preload de recursos críticos
- [x] Remoção de código não utilizado

## 🚀 Deploy

### Opções de Deploy

1. **GitHub Pages**: Grátis para projetos estáticos
2. **Netlify**: Deploy automático via Git
3. **Vercel**: Otimizado para performance
4. **Servidor Próprio**: Via FTP/SSH

### Deploy para GitHub Pages

```bash
# Fazer build
npm run build

# Adicionar pasta dist ao Git
cd dist
git init
git add .
git commit -m "Deploy to GitHub Pages"
git remote add origin https://github.com/seu-usuario/sistema-doacoes.git
git push -f origin main:gh-pages
```

## 📝 Notas Importantes

1. **Sempre teste** após build
2. **Verifique acessibilidade** em todas as versões
3. **Monitore performance** após deploy
4. **Mantenha backup** dos arquivos originais

## 🔍 Debugging

Se algo não funcionar após minificação:

1. Verifique console do navegador
2. Teste arquivos não minificados
3. Verifique se todas as dependências estão instaladas
4. Use modo de desenvolvimento para debug

## 📚 Referências

- [Web.dev - Performance](https://web.dev/performance/)
- [Clean-CSS](https://github.com/clean-css/clean-css)
- [Terser](https://github.com/terser/terser)
- [Squoosh](https://squoosh.app/)

---

**Última atualização**: Dezembro 2024
