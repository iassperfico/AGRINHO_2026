document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. EFEITO NO CABEÇALHO AO ROLAR DA PÁGINA ---
    const header = document.querySelector("header");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // --- 2. MENU ATIVO CONFORME A SEÇÃO VISÍVEL (SCROLL SPY) ---
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-menu a");

    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        const scrollPosition = window.scrollY + 200; // Ajuste para detecção antecipada

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === #${currentSectionId}) {
                link.classList.add("active");
            }
        });
    });

    // --- 3. ANIMAÇÃO DE REVELAÇÃO AO ROLAR A PÁGINA (SCROLL REVEAL) ---
    // Adiciona automaticamente a classe de animação aos elementos-chave
    const elementosParaAnimar = [
        '.card', 
        '.split-text', 
        '.split-image', 
        '.stat-box',
        '.text-center'
    ];

    elementosParaAnimar.forEach(seletor => {
        document.querySelectorAll(seletor).forEach(el => {
            el.classList.add('scroll-reveal');
        });
    });

    const scrollRevealElements = document.querySelectorAll(".scroll-reveal");

    const checkVisibility = () => {
        const triggerBottom = window.innerHeight * 0.85; // Dispara quando o item atinge 85% da tela

        scrollRevealElements.forEach(el => {
            const boxTop = el.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                el.classList.add("active");
            }
        });
    };

    // Executa uma vez ao carregar e depois a cada scroll
    checkVisibility();
    window.addEventListener("scroll", checkVisibility);
});