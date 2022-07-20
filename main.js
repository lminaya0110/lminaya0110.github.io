const words = [
    'ABYSS',
    'ABHOR',
    'ABIDE',
    'ABODE',
    'CABIN',
    'CABLE',
    'DANCE',
    'DAISY',
    'DAIRY',
    'FABLE',
    'FAIRY',
    'FAITH',
    'HABIT',
    'HEDGE',
    'HARSH',
    'JOINT',
    'JEWEL',
    'JAZZY',
    'SHINE',
    'SCOPE',
    'TREAT',
    'JUDGE',
    'KNIFE',
    'MEDAL',
    'MERCY',
    'NASAL',
    'NOVEL',
    'OASIS',
    'OMEGA',
    'OUNCE',
    'PAINT',
    'PATIO',
    'PAUSE',
    'PIANO',
    'PILOT',
    'PULSE',
    'QUERY',
    'QUOTE',
    'QUEST',
    'RADIO',
    'RAPID',
    'REBEL',
    'ROBOT',
    'ROUTE',
    'RURAL',
    'SATIN',
    'SEWER',
    'SHELF',
    'SPACE',
    'SWING',
    'TRIAL',
    'TRIBE',
    'TWIST',
    'TOWER',
    'USUAL',
    'UNITY',
    'VAGUE',
    'VOCAL',
    'VAPOR',
    'VENUE',
    'VINYL',
    'VIVID',
    'VIRUS',
    'WAGON',
    'WHEAT',
    'WRIST',
    'WRATH',
    'YACHT',
    'YOUNG',
    'YOUTH'
]

const numOfGuesses = 5
const guessesRemaining = numOfGuesses
let currentGuess = []
let nextLetter = 0
let rightGuessString = words[Math.floor(Math.random() * words.length)]

function readyBoard() {
    let board = document.querySelector('.gameBoard')

    for(let i = 0; i < numOfGuesses; i++) {
        let row = document.createElement('div')
        row.className = 'letter-row'

        for(let j = 0; j < 5; j++) {
            let tile = document.createElement('div')
            tile.className = 'letter-tile'
            row.appendChild(tile)
        }

        board.appendChild(row)
    }
}

readyBoard()