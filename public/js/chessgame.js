var board = null;
var game = new Chess();
var phrases = [
    "La stratégie est la clé de toute victoire.",
    "Réfléchissez à long terme avant d'agir.",
    "Soyez adaptable face aux défis.",
    "Chaque coup doit avoir une intention claire.",
    "Un petit risque bien calculé peut conduire à de grandes victoires.",
    "Chaque mouvement rapproche d'une meilleure opportunité.",
    "L'anticipation est l'arme secrète de tout leader.",
    "Ne sous-estimez jamais l'importance de l'adaptation.",
    "Un bon leader prévoit plusieurs coups à l’avance.",
    "La patience est parfois la meilleure stratégie.",
    "Ne laissez jamais vos émotions guider vos actions.",
    "Les défis révèlent la vraie capacité à innover.",
    "Un sacrifice intelligent peut ouvrir de nouvelles perspectives.",
    "La gestion des risques est essentielle pour maîtriser l’incertitude.",
    "Le contrôle du centre est aussi vrai dans la vie que sur un échiquier.",
    "Cherchez toujours l'avantage caché dans chaque situation.",
    "Le timing est aussi important que la stratégie elle-même.",
    "Prenez des décisions basées sur des faits, pas sur des suppositions.",
    "Le véritable leadership consiste à voir des opportunités là où d'autres voient des obstacles.",
    "Un plan à long terme reste toujours adaptable.",
    "L'initiative doit être saisie, pas attendue.",
    "Le changement rapide n'est pas un signe de faiblesse, mais de flexibilité.",
    "Chaque échec est une leçon pour mieux réussir.",
    "La préparation élimine la surprise.",
    "La simplicité est souvent la clé de la clarté.",
    "Réduisez la complexité pour accroître l'efficacité.",
    "Le doute est normal, mais il ne doit jamais paralyser.",
    "Chaque action doit avoir une raison claire derrière elle.",
    "Celui qui maîtrise son environnement maîtrise son avenir.",
    "Les petites victoires mènent aux grandes réussites.",
    "Chaque pièce a son rôle; ne négligez aucun atout.",
    "La persévérance dans l’adversité définit les vrais leaders.",
    "Dans chaque situation difficile, il y a une issue positive.",
    "Savoir quand ne pas agir est aussi important que savoir quand agir.",
    "L'équilibre entre attaque et défense est essentiel.",
    "Prenez le temps de lire les signes avant d'agir.",
    "Un bon entrepreneur crée ses propres opportunités.",
    "Le silence avant l’action est souvent le plus puissant.",
    "Construisez vos décisions sur des fondations solides, pas sur des impulsions.",
    "L'innovation vient souvent de la gestion des contraintes.",
    "L’intuition et l’analyse rationnelle doivent coexister.",
    "La capacité à changer de cap est une force, pas une faiblesse.",
    "Apprenez à tirer profit des imprévus.",
    "La stratégie est inutile sans une exécution impeccable.",
    "Le succès durable repose sur des ajustements constants.",
    "La vue d'ensemble est plus importante que les détails.",
    "N'ayez pas peur de sortir des sentiers battus.",
    "L'évolution est la seule constante dans toute stratégie.",
    "Les meilleures décisions sont prises avec une vision claire du futur.",
    "Ne laissez jamais une défaite vous définir.",
    "Tout obstacle cache une opportunité de croissance.",
    "Ce n'est pas la rapidité du succès qui compte, mais sa durabilité.",
    "La force vient de la capacité à se réinventer constamment.",
    "Un bon leader sait comment transformer la pression en motivation."
];

var bonneReponse;

function genererOperation() {
    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;
    var operation = `${num1} x ${num2}`;
    document.getElementById('operation').textContent = operation;
    bonneReponse = num1 * num2;
}

function afficherPhraseCoaching() {
    var phrase = phrases[Math.floor(Math.random() * phrases.length)];
    var coachingElement = document.getElementById('coaching-phrase');
    coachingElement.innerHTML = `<strong style="color: black;">${phrase}</strong>`;
}

function mettreAJourStatut(message) {
    document.getElementById('status').textContent = message;
}





// Fonction améliorée pour Minimax avec Alpha-Beta Pruning
function minimax(game, depth, isMaximizingPlayer, alpha = -Infinity, beta = Infinity) {
    if (depth === 0 || game.game_over()) {
        return evaluateBoard();  // Utiliser l'état du jeu pour évaluer la position
    }

    var moves = game.moves();
    if (isMaximizingPlayer) {
        var bestValue = -Infinity;
        for (var i = 0; i < moves.length; i++) {
            game.move(moves[i]);
            var value = minimax(game, depth - 1, false, alpha, beta);
            game.undo();
            bestValue = Math.max(bestValue, value);
            alpha = Math.max(alpha, value);
            if (beta <= alpha) {
                break;  // Coupure alpha
            }
        }
        return bestValue;
    } else {
        var bestValue = Infinity;
        for (var i = 0; i < moves.length; i++) {
            game.move(moves[i]);
            var value = minimax(game, depth - 1, true, alpha, beta);
            game.undo();
            bestValue = Math.min(bestValue, value);
            beta = Math.min(beta, value);
            if (beta <= alpha) {
                break;  // Coupure beta
            }
        }
        return bestValue;
    }
}







function faireJouerIA() {
    var possibleMoves = game.moves();  
    if (possibleMoves.length === 0) return;

    var bestMove = null;
    var bestValue = -Infinity;

    // Test each move with Minimax
    for (var i = 0; i < possibleMoves.length; i++) {
        game.move(possibleMoves[i]);
        var boardValue = minimax(game, 3, false);  // Increase depth to 3 for better decisions
        game.undo();

        if (boardValue > bestValue) {
            bestValue = boardValue;
            bestMove = possibleMoves[i];
        }
    }

    if (!bestMove) {
        bestMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    }

    game.move(bestMove);
    board.position(game.fen());
    afficherPhraseCoaching();
    mettreAJourStatut(game.in_checkmate() ? "Échec et mat!" : "C'est à vous de jouer.");
}





// Fonction pour attribuer une valeur à chaque pièce d'échecs
function getPieceValue(pieceObject) {
    if (pieceObject === null || typeof pieceObject !== 'object') {
        return 0;  
    }

    var piece = pieceObject.type;  

    // Assigner une valeur aux pièces en fonction de leur type
    switch (piece.toLowerCase()) {
        case 'p': return 10;   
        case 'r': return 50;   
        case 'n': return 30;   
        case 'b': return 30;   
        case 'q': return 90;   
        case 'k': return 900;  
    }
    return 0;
}

function evaluateBoard() {
    var boardArray = game.board(); 
    var score = 0;

    for (var row = 0; row < boardArray.length; row++) {
        for (var col = 0; col < boardArray[row].length; col++) {
            var piece = boardArray[row][col];
            if (piece !== null) {
                var pieceValue = getPieceValue(piece);
                score += piece.color === 'w' ? pieceValue : -pieceValue;  
            }
        }
    }
    return score;
}

// Initialisation de l'échiquier
function initialiserEchiquier() {
    board = Chessboard('board', {
        draggable: true,
        position: 'start',
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png',
        onDrop: function (source, target) {
            var move = game.move({
                from: source,
                to: target,
                promotion: 'q'
            });

            if (move === null) return 'snapback';

            board.position(game.fen());
            afficherPhraseCoaching();

            if (game.in_checkmate()) {
                mettreAJourStatut("Échec et mat, vous avez gagné !");
            } else if (game.in_draw()) {
                mettreAJourStatut("Match nul !");
            } else {
                mettreAJourStatut("L'IA joue...");
                window.setTimeout(faireJouerIA, 1000);
            }
        }
    });
}

document.getElementById('validate').onclick = function () {
    var reponse = parseInt(document.getElementById('reponse').value);

    if (reponse === bonneReponse) {
        document.getElementById('operation-container').style.display = 'none';
        document.getElementById('board-container').style.display = 'block';
        mettreAJourStatut("C'est à vous de jouer. Déplacez une pièce.");
        initialiserEchiquier();
    } else {
        alert('Mauvaise réponse, essayez encore !');
    }
};

// Générer l'opération mathématique au démarrage
genererOperation();
