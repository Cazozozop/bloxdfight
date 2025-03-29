let languageData = {
    en: { play: "Play", shop: "Shop", fight: "Fight", upgrade: "Upgrade" },
    fr: { play: "Jouer", shop: "Boutique", fight: "Combat", upgrade: "Amélioration" },
    it: { play: "Gioca", shop: "Negozio", fight: "Combatti", upgrade: "Miglioramento" },
    es: { play: "Jugar", shop: "Tienda", fight: "Pelea", upgrade: "Mejorar" },
    ru: { play: "Играть", shop: "Магазин", fight: "Бой", upgrade: "Улучшение" },
    zh: { play: "玩", shop: "商店", fight: "战斗", upgrade: "升级" },
    ja: { play: "プレイ", shop: "ショップ", fight: "戦う", upgrade: "アップグレード" },
    de: { play: "Spielen", shop: "Shop", fight: "Kampf", upgrade: "Upgrade" },
    ar: { play: "لعب", shop: "متجر", fight: "قتال", upgrade: "ترقية" }
};

let currentLanguage = "en";  // Default language is English

function toggleLanguageMenu() {
    const languageMenu = document.getElementById("language-menu");
    languageMenu.classList.toggle("hidden");
}

function changeLanguage(language) {
    currentLanguage = language;
    document.getElementById("playButton").innerText = languageData[language].play;
    document.querySelectorAll('.main-button')[1].innerText = languageData[language].shop;
    document.querySelectorAll('.main-button')[2].innerText = languageData[language].fight;
    document.querySelectorAll('.main-button')[3].innerText = languageData[language].upgrade;
    toggleLanguageMenu();
}

function startGame() {
    document.querySelector(".container").classList.add("hidden");
    document.getElementById("loading-screen").classList.remove("hidden");
    
    let progress = 0;
    const progressBar = document.getElementById("diamond-progress");
    const diamond = document.getElementById("diamond");

    const interval = setInterval(() => {
        progress += 1;
        progressBar.style.width = progress + "%";
        diamond.style.left = (progress * 100 / 100) + "%";

        if (progress >= 100) {
            clearInterval(interval);
            window.location.href = "game.html"; // After loading, redirect to the game page.
        }
    }, 50); // Adjust this to control loading speed
}

function openShop() {
    console.log("Opening Shop");
}

function startFight() {
    console.log("Starting Fight");
}

function openUpgrade() {
    console.log("Opening Upgrade");
}
