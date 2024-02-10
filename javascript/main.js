// Global
const CONTROLLER = document.getElementById("controller")

// Variables in Menu
const GAMES_HISTORIAL_BUTTON = document.getElementById("seeHistorial");
const RETURN_MENU_ICON_BUTTON = document.getElementById("returnMenu")
const GAME_FORM = document.getElementById("form_game")
const MENU_CONTROLLER = document.getElementById("menuController")

// Variables in Game
const GAME_CONTROLLER = document.getElementById("gameController")
const IDPLAYER = document.getElementById("idPlayer")
const HISTORIALMOVEMENTS = document.getElementById("historialMovements")
const GIVE_NUMBER_BUTTON = document.getElementById("giveNumber")
const CHANGE_PLAYER_BUTTON = document.getElementById("changePlayer")

GAMES_HISTORIAL_BUTTON.addEventListener("click", (e) => {
    controller = false
    // Logic
    let reg_container = document.getElementById("reg")
    let score_container = document.getElementById("sco")

    reg_container.style.display = "none";
    score_container.style.display = "block"
})

RETURN_MENU_ICON_BUTTON.addEventListener("click", (e) => {
    controller = true
    // Logic
    let reg_container = document.getElementById("reg")
    let score_container = document.getElementById("sco")

    reg_container.style.display = "block";
    score_container.style.display = "none"
})

GAME_FORM.addEventListener("submit", (e) => {
    // Reset behavior
    e.preventDefault()

    // Changes state
    MENU_CONTROLLER.style.display = "none"
    GAME_CONTROLLER.style.display = "block"
    CONTROLLER.className = "";

    // Logic
})