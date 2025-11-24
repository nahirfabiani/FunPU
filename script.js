const sentences = [
    "Modernizar la democracia",
    "Humanizar las ciudades", 
    "Impulsar el Progreso Urbano"
];

let currentSentence = 0;
let currentChar = 0;
let isDeleting = false;

function typeWriter() {
    const typedTextElement = document.getElementById('typed-text');
    if (!typedTextElement) return;
    
    const currentText = sentences[currentSentence];
    
    if (!isDeleting) {
        // Escribir
        typedTextElement.textContent = currentText.substring(0, currentChar + 1);
        currentChar++;
        
        if (currentChar === currentText.length) {
            // Pausa antes de empezar a borrar
            setTimeout(() => {
                isDeleting = true;
                typeWriter();
            }, 2000);
            return;
        }
    } else {
        // Borrar
        typedTextElement.textContent = currentText.substring(0, currentChar - 1);
        currentChar--;
        
        if (currentChar === 0) {
            isDeleting = false;
            currentSentence = (currentSentence + 1) % sentences.length;
        }
    }
    
    const speed = isDeleting ? 50 : 100;
    setTimeout(typeWriter, speed);
}

// Page title typewriter effect
function pageTypeWriter() {
    const titleElement = document.querySelector('.page-title');
    if (!titleElement) return;
    
    const text = titleElement.getAttribute('data-text');
    titleElement.textContent = '';
    
    let i = 0;
    function type() {
        if (i < text.length) {
            titleElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    
    setTimeout(type, 300);
}

// Iniciar el efecto cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('typed-text')) {
        setTimeout(typeWriter, 500);
    } else {
        pageTypeWriter();
    }
    initCarousel();
    initDocCarousel();
    initMobileMenu();
});

// Mobile menu functionality
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
}

// Carousel functionality
function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const items = document.querySelectorAll('#carouselTrack .carousel-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (!track || !items.length || !prevBtn || !nextBtn) return;
    
    let currentIndex = 0;
    let autoSlideInterval;
    
    function updateCarousel() {
        const itemWidth = items[0].offsetWidth + 32; // width + gap
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            // In mobile, current item is active
            items.forEach((item, index) => {
                item.classList.toggle('active', index === currentIndex);
            });
        } else {
            // Center the current item by offsetting by one item width
            track.style.transform = `translateX(-${(currentIndex - 1) * itemWidth}px)`;
            // Middle item (index 1 in visible set) is active
            items.forEach((item, index) => {
                item.classList.toggle('active', index === currentIndex);
            });
        }
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Touch/swipe support
    let startX = 0;
    let isDragging = false;
    
    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });
    
    track.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
    });
    
    track.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;
        
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', updateCarousel);
}

// Documents Carousel functionality
function initDocCarousel() {
    const track = document.getElementById('docCarouselTrack');
    const items = document.querySelectorAll('#docCarouselTrack .carousel-item');
    const prevBtn = document.getElementById('docPrevBtn');
    const nextBtn = document.getElementById('docNextBtn');
    
    if (!track || !items.length || !prevBtn || !nextBtn) return;
    
    let currentIndex = 0;
    let autoSlideInterval;
    
    function updateCarousel() {
        const itemWidth = items[0].offsetWidth + 32;
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        } else {
            track.style.transform = `translateX(-${(currentIndex - 1) * itemWidth}px)`;
        }
        
        items.forEach((item, index) => {
            item.classList.toggle('active', index === currentIndex);
        });
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Touch support
    let startX = 0;
    let isDragging = false;
    
    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });
    
    track.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;
        
        
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    });
    window.addEventListener('resize', updateCarousel);
}