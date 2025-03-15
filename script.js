
const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanchoice) => {
    playTheGame(humanchoice, playMachine())
}

const playMachine = () => {

    const choice = ['paper', 'rock', 'iscissors']
    const randomNumber = Math.floor(Math.random()) * 3
    return choice[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('eu: ' + human + ' maquina: ' + machine)
    if (human === machine) {
        result.innerHTML = "Deu empate!!"

    }
    if ((machine === 'paper' && human === 'iscissors') ||
        (machine === 'iscissors' && human === 'rock') ||
        (machine === 'rock' && human === 'paper')) {
        result.innerHTML = "você Ganhou!!"
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
    } else {
        result.innerHTML = "Você Perdeu!!"
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
    }
}