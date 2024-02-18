document.addEventListener('DOMContentLoaded', () => {
    const slides = document.getElementById('slides');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let index = 0;

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % slides.children.length;
        slides.style.transform = `translateX(-${index * 100}%)`;
    });

    prevBtn.addEventListener('click', () => {
        index = index - 1 < 0 ? slides.children.length - 1 : index - 1;
        slides.style.transform = `translateX(-${index * 100}%)`;
    });
});
// Fonction pour ouvrir/fermer le volet
function togglePanel() {
    const currentRight = loginPanel.style.right;
    loginPanel.style.right = currentRight === '0px' ? '-250px' : '0px';
  }
  
  // Sélectionnez le bouton et le volet
  const loginBtn = document.querySelector('.login-link');
  const loginPanel = document.getElementById('login-panel');
  
  // Initialise le volet comme fermé
  loginPanel.style.right = '-250px';
  
  // Écouteur d'événement pour le bouton pour ouvrir/fermer le volet
  loginBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le lien de suivre son URL
    togglePanel(); // Appelle la fonction pour ouvrir/fermer
  });
  
  // Écouteur d'événement pour le document pour fermer le volet si l'utilisateur clique en dehors
  document.addEventListener('click', function(event) {
    const isClickInsidePanel = loginPanel.contains(event.target);
    const isClickOnButton = loginBtn.contains(event.target);
  
    if (!isClickInsidePanel && !isClickOnButton && loginPanel.style.right === '0px') {
      loginPanel.style.right = '-250px';
    }
  });
  
  // Arrête la propagation du clic à l'intérieur du volet pour empêcher sa fermeture
  loginPanel.addEventListener('click', function(event) {
    event.stopPropagation();
  });
  document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');

    // Fonction pour ouvrir une modale
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            overlay.style.display = 'block';
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    // Fonction pour fermer toutes les modales
    function closeModals() {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => modal.style.display = 'none');
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Écouteurs pour les boutons ouvrir/fermer modales
    document.querySelectorAll('.login-link').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('login-form');
        });
    });

    document.querySelectorAll('.signup-link').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('signup-form');
        });
    });

    overlay.addEventListener('click', closeModals);

    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            closeModals();
        });
    });

    document.querySelectorAll('.toggle').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            closeModals(); // Ferme la modale actuelle
            const targetModal = link.dataset.modal;
            openModal(targetModal); // Ouvre la nouvelle modale demandée
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.getElementById('slides');
    const carouselNav = document.querySelector('.carousel-nav');
    const numOfImages = slides.children.length;
    const originalNumOfImages = 4; // Définir le nombre d'images originales du carrousel
    let currentIndex = 0;

    // Clonez les premières images et ajoutez-les à la fin du carrousel
    for (let i = 0; i < numOfImages; i++) {
        const clone = slides.children[i].cloneNode(true);
        slides.appendChild(clone);
    }

    // Générer les points de navigation uniquement pour les images originales
    for (let i = 0; i < originalNumOfImages; i++) {
        const span = document.createElement('span');
        span.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel();
        });
        carouselNav.appendChild(span);
    }

    function updateCarousel() {
        currentIndex = currentIndex % originalNumOfImages; // Modulo pour assurer le défilement en boucle
        slides.style.transition = 'transform 1s ease-in-out'; // Transition fluide
        slides.style.transform = `translateX(-${currentIndex * (100 / originalNumOfImages)}%)`;

        const dots = carouselNav.children;
        for (let dot of dots) {
            dot.classList.remove('active');
        }
        dots[currentIndex].classList.add('active');
    }

    // Initialise le carrousel
    updateCarousel();

    // Auto-défilement
    setInterval(() => {
        currentIndex++;
        updateCarousel();
    }, 2000); // Défilement automatique toutes les 5 secondes
});




let modeNuitActive = false; // Variable pour suivre l'état du mode nuit

// Fonction pour basculer le mode nuit
function toggleModeNuit() {
    // Vérifiez l'état actuel du mode nuit
    if (modeNuitActive) {
        // Si le mode nuit est déjà actif, désactivez-le
        document.body.classList.remove('mode-nuit');
        // Supprimez la classe spécifique aux modales en mode nuit
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('mode-nuit');
        });
    } else {
        // Si le mode nuit n'est pas encore actif, activez-le
        document.body.classList.add('mode-nuit');
        // Ajoutez la classe spécifique aux modales en mode nuit
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.add('mode-nuit');
        });
    }
    // Inversez l'état du mode nuit après le basculement
    modeNuitActive = !modeNuitActive;
}

// Sélectionnez le lien "Mode Nuit" dans la section de connexion
const modeNuitLinkConnexion = document.querySelector('#login-panel .login-panel-link:nth-of-type(3)');

// Sélectionnez le lien "Mode Nuit" dans la section d'inscription
const modeNuitLinkInscription = document.querySelector('#inscription-panel .login-panel-link:nth-of-type(3)');

// Ajoutez un écouteur d'événements pour le clic sur le lien "Mode Nuit" dans la section de connexion
modeNuitLinkConnexion.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    toggleModeNuit(); // Basculez le mode nuit
});

// Ajoutez un écouteur d'événements pour le clic sur le lien "Mode Nuit" dans la section d'inscription
modeNuitLinkInscription.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    toggleModeNuit(); // Basculez le mode nuit
});
