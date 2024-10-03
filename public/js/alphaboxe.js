// Génération de l'opération mathématique et démarrage du jeu
function genererOperation() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    bonneReponse = num1 + num2;  // Calcul de la bonne réponse
    document.getElementById('operation').textContent = `${num1} + ${num2} = ?`;
}

// Validation de la réponse à l'opération mathématique
document.getElementById('validate').onclick = function () {
    var reponse = parseInt(document.getElementById('reponse').value);

    if (reponse === bonneReponse) {
        // Cacher l'opération et montrer l'échiquier
        document.getElementById('operation-container').style.display = 'none';
        document.getElementById('board-container').style.display = 'block';
        mettreAJourStatut("C'est à vous de jouer. Déplacez une pièce.");
        initialiserEchiquier();  // Initialisation de l'échiquier
    } else {
        alert('Mauvaise réponse, essayez encore !');
    }
};

// Initialisation de l'échiquier avec Chess.js
function initialiserEchiquier() {
    const board = Chessboard('board', {
        draggable: true,
        position: 'start',
        onDrop: handleMove  // Gestion du déplacement des pièces
    });

    game = new Chess();
}

// Fonction pour gérer les déplacements des pièces
function handleMove(source, target) {
    const move = game.move({
        from: source,
        to: target,
        promotion: 'q' // Promotion par défaut en dame
    });

    if (move === null) return 'snapback';  // Mouvement invalide

    mettreAJourStatut("À vous de jouer.");
    setTimeout(faireJouerIA, 250);  // L'IA joue après un délai
}

// Mettre à jour le statut
function mettreAJourStatut(message) {
    document.getElementById('status').textContent = message;
}

// Logique de l'IA (optionnelle)
function faireJouerIA() {
    const moves = game.moves();
    const move = moves[Math.floor(Math.random() * moves.length)];
    game.move(move);
    board.position(game.fen());
}
