
const btns = document.querySelectorAll("[data-game-id]");
const games = Array.from(document.getElementsByClassName("game"));

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        games.forEach((game) => {
            game.classList.remove("activeGame");
        });
        const gameId = btn.dataset.gameId;
        const game = document.getElementById(gameId);
        game.classList.add("activeGame");
    });
});
