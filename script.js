function startGame() {
    // Masquer le bouton play et afficher l'écran de chargement
    document.querySelector(".container").style.display = "none";
    document.getElementById("loading-screen").style.display = "block";
    
    let progress = 0;
    const progressBar = document.getElementById("diamond-progress");
    const diamond = document.getElementById("diamond");

    // Animation de la barre de progression et du diamant
    const interval = setInterval(() => {
        progress += 1;
        progressBar.style.width = progress + "%";
        diamond.style.left = (progress * 100 / 100) + "%";

        if (progress >= 100) {
            clearInterval(interval);
            // Redirection vers game.html une fois le chargement terminé
            setTimeout(() => {
                window.location.href = "game.html";
            }, 500); // Attendre un peu avant la redirection
        }
    }, 50); // Ajuste cette valeur pour contrôler la vitesse du chargement
}
