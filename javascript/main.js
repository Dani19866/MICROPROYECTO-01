// Game variables
let numbers = []
let movements = 1
let players_info_menu = {}
let players_table = {}
let players_table_controller = {}

// Global
const CONTROLLER = document.getElementById("controller")

// Variables in Menu
const GAMES_HISTORIAL_BUTTON = document.getElementById("seeHistorial");
const RETURN_MENU_ICON_BUTTON = document.getElementById("returnMenu")
const GAME_FORM = document.getElementById("form_game")
const MENU_CONTROLLER = document.getElementById("menuController")

// Variables in Game
const GAME_CONTROLLER = document.getElementById("gameController")
const HISTORIALMOVEMENTS = document.getElementById("historialMovements")
const GIVE_NUMBER_BUTTON = document.getElementById("giveNumber")
const RESTART_BUTTON = document.getElementById("restart")
const LEAVE_BUTTON = document.getElementById("leave")
const TABLE_PLAYERS = document.getElementById("tablesPlayers")


// ------------------------------ | ------------------------------
// Eventos
document.addEventListener("DOMContentLoaded", (e) => {
    for (let i = 1; i <= 50; i++) {
        numbers.push(i);
    }
})

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
    CONTROLLER.className = "centerModified"

    // Logic: Saving data
    players_info_menu[e.target.jugador1.value.trim()] = e.target.tamano1.value
    players_info_menu[e.target.jugador2.value.trim()] = e.target.tamano2.value
    players_info_menu[e.target.jugador3.value.trim()] = e.target.tamano3.value
    players_info_menu[e.target.jugador4.value.trim()] = e.target.tamano4.value

    // Logic: Creating a matrix
    let namePlayers = Object.keys(players_info_menu)
    for (let i = 0; i < namePlayers.length; i++) {
        const name = namePlayers[i];
        const size = players_info_menu[name]

        players_table[name] = create_matriz(name, size)
        players_table_controller[name] = create_matriz_controller(name, size)
    }

    // Logic: Add matrix into a table viewer
    for (let i = 0; i < namePlayers.length; i++) {
        const name = namePlayers[i];
        const matriz_number = players_table[name]
        const matriz_controller = players_table_controller[name]
        add_matriz_into_table(name, matriz_number, matriz_controller)
    }
})

GIVE_NUMBER_BUTTON.addEventListener("click", (e) => {
    update_matriz(extract_number());
})

// ------------------------------ | ------------------------------
// Funciones
function create_matriz(name, size) {
    matriz = []

    for (let i = 0; i < size; i++) {
        matriz[i] = []

        for (let j = 0; j < size; j++) {
            const rndInt = Math.floor(Math.random() * 50) + 1
            matriz[i][j] = rndInt
        }
    }

    return matriz
}

function create_matriz_controller(name, size) {
    matriz = []

    for (let i = 0; i < size; i++) {
        matriz[i] = []

        for (let j = 0; j < size; j++) {
            matriz[i][j] = false
        }
    }

    return matriz
}

function add_matriz_into_table(name, matriz_number, matriz_controller) {
    let componentHTML = '<div>'
    componentHTML += '<h3 style="text-align: center;">'
    componentHTML += 'TABLA DEL JUGADOR "' + name + '"'
    componentHTML += '</h3></div>'
    componentHTML += '<table>';

    for (let i = 0; i < matriz_number.length; i++) {
        componentHTML += '<tr>';
        for (let j = 0; j < matriz_number.length; j++) {
            if (matriz_controller[i][j] == true) {
                componentHTML += `<td> <del> ${matriz_number[i][j]} </del> </td>`;
            }
            else {
                componentHTML += `<td> ${matriz_number[i][j]} </td>`;
            }
        }
        componentHTML += '</tr>';
    }

    componentHTML += '</table>';
    TABLE_PLAYERS.innerHTML += componentHTML

}

function reset_matriz_interface() {
    TABLE_PLAYERS.innerHTML = ""
}

function update_matriz(number) {
    // Control de sorteo
    let namePlayers = Object.keys(players_info_menu)
    for (let m = 0; m < namePlayers.length; m++) {
        const name = namePlayers[m];
        const size = players_info_menu[name]

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (players_table[name][i][j] == number) {
                    players_table_controller[name][i][j] = true
                }
            }
        }
    }

    // Actualizar interfaz frontend
    reset_matriz_interface()
    for (let i = 0; i < namePlayers.length; i++) {
        const name = namePlayers[i];
        const matriz_number = players_table[name]
        const matriz_controller = players_table_controller[name]
        add_matriz_into_table(name, matriz_number, matriz_controller)
    }

    // Add historial
    add_historial(number);
}

function add_historial(number) {
    if (movements <= 25) {
        let historialHTML = '<tr>'
        historialHTML += '<td class="reset_table_component">' + movements + '</td>'
        historialHTML += '<td class="reset_table_component">' + number + '</td>'
        historialHTML += '</tr>'

        HISTORIALMOVEMENTS.innerHTML += historialHTML
        movements += 1
    }
    else {
        alert("SE HA ACABADO LA PARTIDA!")
    }
}

function extract_number(arr) {
    const indiceAleatorio = Math.floor(Math.random() * numbers.length);
    const numeroAleatorio = numbers.splice(indiceAleatorio, 1)[0];
    return numeroAleatorio;
}