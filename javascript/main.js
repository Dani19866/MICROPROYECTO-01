// Variables in HTML document Menu/
const GAMES_HISTORIAL_BUTTON = document.getElementById("seeHistorial");
const RETURN_MENU_ICON_BUTTON = document.getElementById("returnMenu")
const GAME_FORM = document.getElementById("form_game")

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
    e.preventDefault()
    console.log(e)
})