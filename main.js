let myQuestions = [
    {
        question: 'This Order of the Phoenix member is a metamorphmagus, an auror, a hufflpeuff, and is married to a werewolf. They prefer to go by this nickname',
        correctAnswer: 'TONKS'
    },
    {
        question: 'One of the fabled Deathly Hallows.. this item rendered its wearer invisible',
        correctAnswer: 'CLOAK'
    },
    {
        question: 'Name this Weasley family owl with very poor eyesight',
        correctAnswer: 'ERROL'
    }, 
    {
        question: 'Name the incantation for the summoning charm',
        correctAnswer: 'ACCIO'
    }, 
    {
        question: 'Out of the three unforgiveable curses, this one causes instant death. Name the first word of this incantation',
        correctAnswer: 'AVADA'
    },
    {
        question: 'This professor at Hogwarts served as Potions Master and head of Sytherin House',
        correctAnswer: 'SNAPE'
    }, 
    {
        question: 'This coveted magical profession works as a member of an elite unit of highly-trained, specialist officers. They protect the wizarding world from practitioners of the Dark Arts',
        correctAnswer: 'AUROR'
    }, 
    {
        question: 'A magical plant that can constrict or stangle anything in its surrounding environment. Two words, name the second word. HINT: It is deadly fun but will sulk in the sun.',
        correctAnswer: 'SNARE'
    }, 
    {
        question: 'Charm that illuminates the tip of the casters wand',
        correctAnswer: 'LUMOS'
    },
    {
        question: 'Popular wizarding pub. Located at the entrance to Diagon Alley. Two words. Name the first.',
        correctAnswer: 'LEAKY'
    },
    {
        question: 'Half brother to Hagrid, short by giant standards...',
        correctAnswer: 'GRAWP'
    },
    {
        question: 'Name for a non-magical person born to at least one magical parent.',
        correctAnswer: 'SQUIB'
    }
]

function showQuestions() {
    for(let i = 0; i < myQuestions.length; i++){
        document.getElementById('msg').innerHTML = (JSON.stringify(myQuestions[0].question))
    }
}

function keyboardEvents() {
    document.body.onkeydown = (e) => {
        const key = e.key

        if(key === 'Enter'){
            
        }

        if(key === 'Backspace'){}

        if(isLetter(key)){}
    }

    // updateTileRow()
}

// function updateTileRow()

// function isLetter() {}
    
// function showScore() {}

// function startGame() {}

console.log((JSON.stringify(myQuestions[0].correctAnswer)))

showQuestions()