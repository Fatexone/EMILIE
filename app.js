const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;  // Utilise le port fourni par l'environnement ou le port 3000 par défaut

// Définir le moteur de rendu sur EJS
app.set('view engine', 'ejs');

// Définir le dossier des vues
app.set('views', path.join(__dirname, 'views'));

// Middleware pour servir les fichiers statiques et analyser les données du formulaire
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Route pour la page d'accueil (index)
app.get('/', (_req, res) => {
    res.render('index');  // Charge le fichier index.ejs
});

// Route pour la page Services
app.get('/services', (_req, res) => {
    res.render('services');  // Charge le fichier services.ejs
});

// Route pour la page Alphaboxe
app.get('/alphaboxe', (_req, res) => {
    res.render('alphaboxe');  // Charge le fichier alphaboxe.ejs
});

// Route pour la page Contact
app.get('/contact', (_req, res) => {
    res.render('contact');  // Charge la page contact.ejs
});

// Route pour la page Séminaire
app.get('/seminaire', (_req, res) => {
    res.render('seminaire');  // Charge le fichier seminaire.ejs
});

// Gestion des pages non trouvées (404)
app.use((_req, res) => {
    res.status(404).render('404', { message: 'Page non trouvée' });  // Assure-toi d'avoir un fichier 404.ejs
});

// Middleware de gestion des erreurs (500)
app.use((err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).render('500', { message: 'Erreur du serveur' });  // Assure-toi d'avoir un fichier 500.ejs
});

// Démarrage du serveur sur le port défini
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
