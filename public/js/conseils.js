function verifierReponse(numero, bonneReponse, idConseil) {
    var input = document.getElementById('multiplication' + numero).value;
    var resultat = document.getElementById('reponse' + numero);
    
    if (parseInt(input) === bonneReponse) {
        resultat.style.display = 'block'; // Affiche le conseil
    } else {
        alert('Mauvaise réponse, essayez encore !');
    }
}
