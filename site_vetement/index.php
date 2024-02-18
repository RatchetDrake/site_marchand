<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Votre Boutique en Ligne</title>
    <!-- Ajoutez ici vos feuilles de style CSS -->
    <link rel="stylesheet" href="./style/style.css">
    <!-- Ajoutez ici vos scripts JS si nécessaire -->
    <script src="./scripts/script.js" defer></script>
    <div class="top-bar">
        <a href="#" class="home-link">mon site internet</a>
        <a href="#" class="login-link">register / login</a>
    </div>
</head>

<body>
    <header>
        <!-- Navigation -->
        <nav>
            <ul>
                <li><a href="#">Pulls</a></li>
                <li><a href="#">Pantalons</a></li>
                <li><a href="#">T-Shirts</a></li>
                <li><a href="#">Pyjamas</a></li>
                <li><a href="#">Parkas</a></li>
                <li><a href="#">Vestes</a></li>
                <li><a href="#">Crampêts</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <!-- Carrousel d'images central -->
        <div>
            <h1 class="titre">Tendances du moment</h1>
        </div>
        <div id="carousel">
            <div id="slides">
                <!-- Vos images ici -->
                <img src="./img/Salopette 1.png" alt="Tendance 1">
                <img src="./img/Manteau Robe 1.png" alt="Tendance 2">
                <img src="./img/Blazer 1.png" alt="Tendance 3">
                <img src="./img/Famille 1.png" alt="Tendance 4">
                <img src="./img/Pyjama 1.png" alt="Tendance 5">
                <img src="./img/Ensemble Rouge 1.png" alt="Tendance 6">
                <!-- Ajoutez autant d'images que vous le souhaitez -->
            </div>
            <!-- Points de navigation pour le carrousel -->
            <div class="carousel-nav">
                <!-- Les points seront générés dynamiquement en JS -->
            </div>
        </div>
    </main>
    <!-- Volet-->
    <div id="login-panel" class="login-panel">
        <div class="login-panel-content">
            <div class="user-name">Nom d'utilisateur</div>
            <a href="#" class="login-panel-link">Profil</a>
            <a href="#" class="login-panel-link">Paramètres</a>
            <a href="#" class="login-panel-link">Mode Nuit</a>
            <a href="#" class="login-panel-link">Déconnexion</a>
        </div>
    </div>
    <!-- Superposition pour assombrir le reste de la page -->
    <div id="overlay"></div>

<!-- Formulaire d'inscription -->
<div id="signup-form" class="modal">
    <div class="modal-line">
        <h2>Inscription</h2>
    </div>
    <div class="modal-content">

        <form id="signup">
            <div class="form-group">
                <label for="signup-username" class="modal-label">Nom d'utilisateur:</label>
                <input type="text" id="signup-username" name="username" class="modal-input" required>
            </div>
            <div class="form-group">
                <label for="signup-email" class="modal-label">Adresse email:</label>
                <input type="email" id="signup-email" name="email" class="modal-input" required>
            </div>
            <div class="form-group">
                <label for="signup-password" class="modal-label">Mot de passe:</label>
                <input type="password" id="signup-password" name="password" class="modal-input" required>
            </div>
        </form>
        <div class="form-footer">
            <button type="submit" class="login-btn">S'inscrire</button>
            <a href="#" class="toggle" data-modal="login-form">Déjà un compte ?</a>
        </div>

    </div>
</div>


    <!-- Formulaire de connexion -->
    <div id="login-form" class="modal">
        <div class="modal-line">
            <h2>Connexion</h2>
        </div>
        <div class="modal-content">

            <form id="login">
                <div class="form-group">
                    <label for="login-username">Nom d'utilisateur:</label>
                    <input type="text" id="login-username" name="username" required>
                </div>
                <div class="form-group">
                    <label for="login-password">Mot de passe:</label>
                    <input type="password" id="login-password" name="password" required>
                </div>
            </form>
            <div class="form-footer">
                <button type="submit" class="login-btn">Se connecter</button>
                <span><a href="#" class="toggle" data-modal="signup-form">Aucun compte ?</a></span>
            </div>

        </div>
    </div>
    <!-- Structure similaire avec des champs différents si nécessaire -->

</body>

</html>