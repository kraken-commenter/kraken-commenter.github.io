// Create animated stars and shooting stars
function createStars() {
    const starsContainer = document.getElementById('stars');
    const numStars = 200;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }

    // Create nova effects
    const numNovas = 12;
    for (let i = 0; i < numNovas; i++) {
        const nova = document.createElement('div');
        nova.className = 'nova';
        nova.style.left = Math.random() * 100 + '%';
        nova.style.top = Math.random() * 100 + '%';
        nova.style.animationDelay = Math.random() * 4 + 's';
        starsContainer.appendChild(nova);
    }

    // Create shooting stars
    const numShootingStars = 5;
    for (let i = 0; i < numShootingStars; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.top = Math.random() * 50 + '%';
        shootingStar.style.animationDelay = Math.random() * 8 + 's';
        starsContainer.appendChild(shootingStar);
    }
}

// Smooth scrolling for navigation links
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll reveal animation
function scrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    function checkReveal() {
        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Check on load
}

// Parallax effect for galaxy background
function parallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        const galaxyBg = document.querySelector('.galaxy-bg');
        galaxyBg.style.transform = `translateY(${rate}px)`;
    });
}

// Animated counter for performance numbers
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number, .performance-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = counter.textContent;

                // Skip if not a number
                if (isNaN(target.replace(/[^\d]/g, ''))) return;

                const increment = parseInt(target.replace(/[^\d]/g, '')) / 100;
                let current = 0;

                const updateCounter = () => {
                    if (current < parseInt(target.replace(/[^\d]/g, ''))) {
                        current += increment;
                        counter.textContent = target.replace(/\d+/, Math.ceil(current));
                        setTimeout(updateCounter, 20);
                    } else {
                        counter.textContent = target;
                    }
                };

                updateCounter();
            }
        });
    });

    counters.forEach(counter => observer.observe(counter));
}

// Add floating animation to pricing cards
function floatingCards() {
    const cards = document.querySelectorAll('.pricing-card, .feature-card');

    cards.forEach((card, index) => {
        card.style.animationDelay = (index * 0.1) + 's';

        card.addEventListener('mouseenter', () => {
            card.style.animationPlayState = 'paused';
        });

        card.addEventListener('mouseleave', () => {
            card.style.animationPlayState = 'running';
        });
    });
}

// Add interactive hover effects for community stats
function communityInteractions() {
    const communityStats = document.querySelectorAll('.community-stat');

    communityStats.forEach(stat => {
        stat.addEventListener('mouseenter', () => {
            const icon = stat.querySelector('.stat-icon');
            icon.style.transform = 'scale(1.2) rotate(10deg)';
            icon.style.transition = 'transform 0.3s ease';
        });

        stat.addEventListener('mouseleave', () => {
            const icon = stat.querySelector('.stat-icon');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Add pulse animation to Discord join button
function discordButtonEffects() {
    const discordBtn = document.querySelector('.discord-join-btn');

    if (discordBtn) {
        // Add periodic pulse effect
        setInterval(() => {
            discordBtn.style.transform = 'scale(1.05)';
            setTimeout(() => {
                discordBtn.style.transform = 'scale(1)';
            }, 200);
        }, 5000);

        // Add click effect
        discordBtn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }
}

// Add CSS for ripple effect
function addRippleCSS() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Enhanced pricing card interactions
function enhancedPricingEffects() {
    const pricingCards = document.querySelectorAll('.pricing-card');

    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Pause other cards' animations
            pricingCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.style.opacity = '0.7';
                    otherCard.style.transform = 'scale(0.95)';
                }
            });
        });

        card.addEventListener('mouseleave', () => {
            // Restore other cards
            pricingCards.forEach(otherCard => {
                otherCard.style.opacity = '1';
                otherCard.style.transform = '';
            });
        });
    });
}

// Add loading animation
function addLoadingAnimation() {
    // Remove loading class after page loads
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');

        // Trigger entrance animations
        setTimeout(() => {
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }
        }, 100);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    smoothScroll();
    scrollReveal();
    parallaxEffect();
    animateCounters();
    floatingCards();
    communityInteractions();
    discordButtonEffects();
    addRippleCSS();
    enhancedPricingEffects();
    addLoadingAnimation();

    // Add some extra visual polish
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
