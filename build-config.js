/**
 * Build Configuration for Production
 * Otimizações: Minificação, Compressão, Build
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BUILD_DIR = 'dist';
const SRC_DIR = './';

// Limpar diretório de build anterior
function cleanBuild() {
    if (fs.existsSync(BUILD_DIR)) {
        fs.rmSync(BUILD_DIR, { recursive: true, force: true });
        console.log('📁 Diretório de build limpo');
    }
    fs.mkdirSync(BUILD_DIR, { recursive: true });
    fs.mkdirSync(path.join(BUILD_DIR, 'css'), { recursive: true });
    fs.mkdirSync(path.join(BUILD_DIR, 'js'), { recursive: true });
    fs.mkdirSync(path.join(BUILD_DIR, 'images'), { recursive: true });
}

// Minificar CSS
function minifyCSS() {
    try {
        execSync(`npx cleancss -o ${BUILD_DIR}/css/styles.css css/styles.css --level 2`, { stdio: 'inherit' });
        console.log('✅ CSS minificado com sucesso');
    } catch (error) {
        console.error('❌ Erro ao minificar CSS:', error.message);
    }
}

// Minificar JavaScript
function minifyJS() {
    try {
        execSync(`npx terser js/script.js -o ${BUILD_DIR}/js/script.js -c -m --comments false`, { stdio: 'inherit' });
        console.log('✅ JavaScript minificado com sucesso');
    } catch (error) {
        console.error('❌ Erro ao minificar JavaScript:', error.message);
    }
}

// Copiar arquivos HTML atualizados
function copyHTML() {
    const htmlFiles = ['index.html', 'acessibilidade.html'];
    
    htmlFiles.forEach(file => {
        let content = fs.readFileSync(file, 'utf8');
        
        // Atualizar links para arquivos minificados
        content = content.replace(/css\/styles\.css/g, 'css/styles.css');
        content = content.replace(/js\/script\.js/g, 'js/script.js');
        
        fs.writeFileSync(path.join(BUILD_DIR, file), content);
    });
    
    console.log('✅ Arquivos HTML copiados e atualizados');
}

// Copiar README e outros arquivos
function copyAssets() {
    const filesToCopy = ['README.md', '.gitignore'];
    
    filesToCopy.forEach(file => {
        if (fs.existsSync(file)) {
            fs.copyFileSync(file, path.join(BUILD_DIR, file));
        }
    });
    
    console.log('✅ Arquivos adicionais copiados');
}

// Criar arquivo de versão
function createVersionFile() {
    const version = {
        version: '1.0.0',
        buildDate: new Date().toISOString(),
        build: 'production',
        features: [
            'WCAG 2.1 Nível AA',
            'Navegação por teclado completa',
            'Modos: claro, escuro e alto contraste',
            'Responsivo',
            'Performance otimizada'
        ]
    };
    
    fs.writeFileSync(
        path.join(BUILD_DIR, 'version.json'),
        JSON.stringify(version, null, 2)
    );
    
    console.log('✅ Arquivo de versão criado');
}

// Executar build
function build() {
    console.log('🚀 Iniciando build para produção...\n');
    
    try {
        cleanBuild();
        minifyCSS();
        minifyJS();
        copyHTML();
        copyAssets();
        createVersionFile();
        
        console.log('\n✨ Build concluído com sucesso!');
        console.log(`📁 Arquivos em: ${BUILD_DIR}/`);
    } catch (error) {
        console.error('\n❌ Erro no build:', error.message);
        process.exit(1);
    }
}

// Executar se chamado diretamente
if (require.main === module) {
    build();
}

module.exports = { build, minifyCSS, minifyJS };
