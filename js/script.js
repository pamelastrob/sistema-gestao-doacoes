/**
 * Sistema de Gestão de Doações - JavaScript
 * WCAG 2.1 Nível AA Compliance
 * 
 * Features:
 * - Navegação por teclado completa
 * - Validação de formulários acessível
 * - Toggle de tema (claro/escuro)
 * - Modo alto contraste
 * - Mensagens de acessibilidade para leitores de tela
 */

// ============================================
// DOM Content Loaded
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initAccessibility();
    initFormValidation();
    initKeyboardNavigation();
    initSmoothScrolling();
});

// ============================================
// Theme Management
// ============================================

function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const contrastToggle = document.getElementById('contrast-toggle');
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedContrast = localStorage.getItem('contrast') || 'normal';
    
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.setAttribute('aria-pressed', 'true');
        themeToggle.querySelector('.theme-icon').textContent = 'Sol';
    }
    
    if (savedContrast === 'high') {
        enableHighContrast();
    }
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    themeToggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleTheme();
        }
    });
    
    // Contrast toggle
    contrastToggle.addEventListener('click', toggleContrast);
    contrastToggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleContrast();
        }
    });
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const isHighContrast = document.documentElement.getAttribute('data-theme') === 'high-contrast' || 
                          document.documentElement.getAttribute('data-theme') === 'dark-high-contrast';
    
    const themeToggle = document.getElementById('theme-toggle');
    
    if (currentTheme === 'dark' || currentTheme === 'dark-high-contrast') {
        document.documentElement.setAttribute('data-theme', isHighContrast ? 'high-contrast' : 'light');
        themeToggle.setAttribute('aria-pressed', 'false');
        themeToggle.querySelector('.theme-icon').textContent = 'Lua';
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', isHighContrast ? 'dark-high-contrast' : 'dark');
        themeToggle.setAttribute('aria-pressed', 'true');
        themeToggle.querySelector('.theme-icon').textContent = 'Sol';
        localStorage.setItem('theme', 'dark');
    }
    
    // Announce to screen readers
    announceToScreenReader('Tema alterado');
}

function toggleContrast() {
    const contrastToggle = document.getElementById('contrast-toggle');
    const isEnabled = contrastToggle.getAttribute('aria-pressed') === 'true';
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (isEnabled) {
        disableHighContrast();
        contrastToggle.setAttribute('aria-pressed', 'false');
    } else {
        enableHighContrast();
        contrastToggle.setAttribute('aria-pressed', 'true');
    }
    
    // Announce to screen readers
    const message = isEnabled ? 'Modo de alto contraste desativado' : 'Modo de alto contraste ativado';
    announceToScreenReader(message);
}

function enableHighContrast() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark-high-contrast');
    } else {
        document.documentElement.setAttribute('data-theme', 'high-contrast');
    }
    localStorage.setItem('contrast', 'high');
}

function disableHighContrast() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark-high-contrast') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    localStorage.setItem('contrast', 'normal');
}

// ============================================
// Accessibility Features
// ============================================

function initAccessibility() {
    // Add skip link functionality
    const skipLink = document.querySelector('.skip-link');
    const mainContent = document.getElementById('main-content');
    
    if (skipLink && mainContent) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // ARIA live region for announcements
    createLiveRegion();
    
    // Keyboard accessible radio buttons
    initAccessibleRadioButtons();
}

function createLiveRegion() {
    // Check if live region already exists
    if (!document.getElementById('aria-live-region')) {
        const liveRegion = document.createElement('div');
        liveRegion.id = 'aria-live-region';
        liveRegion.className = 'visually-hidden';
        liveRegion.setAttribute('role', 'status');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        document.body.appendChild(liveRegion);
    }
}

function announceToScreenReader(message) {
    const liveRegion = document.getElementById('aria-live-region');
    if (liveRegion) {
        liveRegion.textContent = '';
        setTimeout(() => {
            liveRegion.textContent = message;
        }, 100);
    }
}

function initAccessibleRadioButtons() {
    const radioGroups = document.querySelectorAll('.radio-group');
    
    radioGroups.forEach(group => {
        const radios = group.querySelectorAll('input[type="radio"]');
        
        radios.forEach((radio, index) => {
            radio.addEventListener('keydown', function(e) {
                if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                    e.preventDefault();
                    const nextIndex = (index + 1) % radios.length;
                    radios[nextIndex].focus();
                    radios[nextIndex].checked = true;
                } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                    e.preventDefault();
                    const prevIndex = index === 0 ? radios.length - 1 : index - 1;
                    radios[prevIndex].focus();
                    radios[prevIndex].checked = true;
                }
            });
        });
    });
}

// ============================================
// Keyboard Navigation
// ============================================

function initKeyboardNavigation() {
    // Handle Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Reset focus to first focusable element
            const skipLink = document.querySelector('.skip-link');
            if (skipLink) {
                skipLink.focus();
            }
        }
    });
    
    // Tab trapping in forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const focusableElements = form.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length > 0) {
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            form.addEventListener('keydown', function(e) {
                if (e.key === 'Tab') {
                    if (e.shiftKey && document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    } else if (!e.shiftKey && document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            });
        }
    });
}

// ============================================
// Smooth Scrolling
// ============================================

function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's empty
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                target.setAttribute('tabindex', '-1');
                target.focus();
                target.scrollIntoView({ behavior: 'smooth' });
                
                // Remove tabindex after scroll
                setTimeout(() => {
                    target.removeAttribute('tabindex');
                }, 1000);
            }
        });
    });
}

// ============================================
// Form Validation
// ============================================

function initFormValidation() {
    const form = document.querySelector('.donation-form');
    
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        if (isValid) {
            submitForm(form);
        } else {
            // Focus first error
            const firstError = form.querySelector('.error');
            if (firstError) {
                firstError.focus();
                announceToScreenReader('Por favor, corrija os erros no formulário');
            }
        }
    });
}

function validateField(field) {
    const fieldName = field.name;
    const errorElement = document.getElementById(fieldName + '-error');
    
    // Clear previous error
    field.classList.remove('error');
    if (errorElement) {
        errorElement.textContent = '';
    }
    
    let isValid = true;
    let errorMessage = '';
    
    // Required validation
    if (field.hasAttribute('required') && !field.value.trim()) {
        errorMessage = 'Este campo é obrigatório';
        isValid = false;
    }
    
    // Email validation
    if (field.type === 'email' && field.value.trim() && !isValidEmail(field.value)) {
        errorMessage = 'Por favor, digite um e-mail válido';
        isValid = false;
    }
    
    // Phone validation (basic)
    if (field.type === 'tel' && field.value.trim() && !isValidPhone(field.value)) {
        errorMessage = 'Por favor, digite um telefone válido';
        isValid = false;
    }
    
    // Value validation
    if (field.type === 'number' && field.value) {
        const value = parseFloat(field.value);
        if (field.hasAttribute('min') && value < parseFloat(field.getAttribute('min'))) {
            errorMessage = 'O valor mínimo é ' + field.getAttribute('min');
            isValid = false;
        }
    }
    
    // Message length validation
    if (fieldName === 'mensagem' && field.value.length > 500) {
        errorMessage = 'Mensagem deve ter no máximo 500 caracteres';
        isValid = false;
    }
    
    if (!isValid) {
        field.classList.add('error');
        if (errorElement) {
            errorElement.textContent = errorMessage;
        }
    }
    
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Accepts: (00) 00000-0000, (00) 0000-0000, 00000-0000, 00 00000-0000
    const phoneRegex = /^[\d\s\(\)\-]+$/;
    const digits = phone.replace(/\D/g, '');
    return phoneRegex.test(phone) && digits.length >= 10 && digits.length <= 11;
}

function submitForm(form) {
    const formStatus = document.getElementById('form-status');
    const formData = new FormData(form);
    
    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';
    
    // Simulate API call
    setTimeout(() => {
        // Clear form
        form.reset();
        
        // Show success message
        formStatus.textContent = 'Doação registrada com sucesso! Obrigado pela sua generosidade.';
        formStatus.className = 'form-status success';
        formStatus.setAttribute('role', 'alert');
        
        // Announce to screen readers
        announceToScreenReader('Formulário enviado com sucesso');
        
        // Reset button
        submitButton.disabled = false;
        submitButton.textContent = originalText;
        
        // Scroll to status
        formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Clear status after 5 seconds
        setTimeout(() => {
            formStatus.textContent = '';
            formStatus.className = '';
            formStatus.removeAttribute('role');
        }, 5000);
    }, 1500);
}

// ============================================
// Additional Accessibility Enhancements
// ============================================

// Handle Enter key on buttons and links
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const target = e.target;
        
        if (target.classList.contains('btn') || target.classList.contains('nav-menu') ||
            target.tagName === 'BUTTON' || target.tagName === 'A') {
            // Let the browser handle it naturally
            return;
        }
    }
});

// Notify screen reader users of dynamic content
function updateLiveRegion(element, message) {
    if (element && message) {
        element.textContent = '';
        setTimeout(() => {
            element.textContent = message;
        }, 100);
    }
}

// Log errors for accessibility
window.addEventListener('error', function(e) {
    console.error('Error:', e.message);
    announceToScreenReader('Ocorreu um erro. Por favor, tente novamente.');
});
