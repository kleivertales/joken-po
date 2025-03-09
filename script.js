
const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {

    const choices = ['paper', 'rock', 'iscissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}
const playTheGame = (human, machine) => {
    console.log('maquna:' + machine + ' humano:' + human)
    if (human === machine) {
        result.innerHTML = 'Empate'
    }
    else if((human === 'paper' && machine === 'rock') ||
        (human === 'scissors' && machine === 'paper') ||
        (human === 'paper' && machine === 'rock')) {
        result.innerHTML = "Você venceu!! &#128540"
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
    } else {
        result.innerHTML = "Perdeu!!&#128545"
        machineScoreNumber++ 
        machineScore.innerHTML = machineScoreNumber
    }
}

