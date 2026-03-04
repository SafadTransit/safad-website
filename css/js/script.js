/* ========================================
   SAFAD GROUP SARL - JAVASCRIPT
   ======================================== */

// ========== SMOOTH SCROLLING POUR LES LIENS DE NAVIGATION ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// ========== ANIMATION AU SCROLL (INTERSECTION OBSERVER) ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Appliquer l'animation à tous les éléments à animer
document.querySelectorAll('.service-card, .zone-card, .info-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========== GESTION DU FORMULAIRE DE CONTACT ==========
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupérer les valeurs du formulaire
        const nom = document.getElementById('nom').value;
        const email = document.getElementById('email').value;
        const telephone = document.getElementById('telephone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        
        // Validation simple
        if (!nom || !email || !telephone || !service || !message) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }
        
        // Message de confirmation
        alert(`Merci ${nom} ! Votre message a été envoyé avec succès. Nous vous contacterons très bientôt.`);
        
        // Réinitialiser le formulaire
        this.reset();
        
        // ICI : Vous pouvez ajouter le code pour envoyer les données à un serveur
        // Exemple avec fetch() ou AJAX
        /*
        fetch('votre-script-backend.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nom: nom,
                email: email,
                telephone: telephone,
                service: service,
                message: message
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Succès:', data);
        })
        .catch((error) => {
            console.error('Erreur:', error);
        });
        */
    });
}

// ========== CHANGEMENT DE STYLE DE LA NAVIGATION AU SCROLL ==========
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(30, 58, 95, 1)';
        nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.2)';
    } else {
        nav.style.background = 'rgba(30, 58, 95, 0.95)';
        nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
});

// ========== ANIMATION DES COMPTEURS (OPTIONNEL) ==========
// Si vous voulez ajouter des statistiques animées plus tard
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// ========== CONSOLE MESSAGE ==========
console.log('%c🚚 SAFAD GROUP SARL', 'color: #ff6b35; font-size: 20px; font-weight: bold;');
console.log('%cVotre partenaire logistique de confiance', 'color: #1e3a5f; font-size: 14px;');
console.log('%cSite web développé avec ❤️', 'color: #2c5f8d; font-size: 12px;');