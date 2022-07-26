const Questions = [{
    id: 0,
    q: "This Order of the Phoenix member is a metamorphmagus, an auror, and a hufflpeuff. They prefer to go by this nickname",
    a: [{ text: "Prongs", isCorrect: false },
        { text: "Padfoot", isCorrect: false },
        { text: "Tonks", isCorrect: true },
        { text: "Moody", isCorrect: false }
    ]

},
{
    id: 1,
    q: "One of the fabled Deathly Hallows.. this item rendered its wearer invisible",
    a: [{ text: "Horcrux", isCorrect: false, isSelected: false },
        { text: "Stone", isCorrect: false },
        { text: "Wand", isCorrect: false },
        { text: "Cloak", isCorrect: true }
    ]

},
{
    id: 2,
    q: "Name this Weasley family owl with very poor eyesight",
    a: [{ text: "Errol", isCorrect: true },
        { text: "Dobby", isCorrect: false },
        { text: "Scabbers", isCorrect: false },
        { text: "Hedwig", isCorrect: false }
    ]

},
{
    id: 3,
    q: "Name the incantation for the summoning charm",
    a: [{ text: "Aberto", isCorrect: false },
        { text: "Accio", isCorrect: true },
        { text: "Crucio", isCorrect: false },
        { text: "Lumos", isCorrect: false }
    ]

},
{
    id: 4,
    q: "Name the first word of the unforgiveable curse that causes instant death",
    a: [{ text: "Kedavra", isCorrect: false },
        { text: "Ascendio", isCorrect: false },
        { text: "Avifors", isCorrect: false },
        { text: "Avada", isCorrect: true }
    ]

},
{
    id: 5,
    q: "Hogwarts potion master and head of Sytherin House",
    a: [{ text: "Snape", isCorrect: true },
        { text: "Pomfrey", isCorrect: false },
        { text: "Sprout", isCorrect: false },
        { text: "Quirrell", isCorrect: false }
    ]

},
{
    id: 6,
    q: "This coveted profession protects the wizarding world from practitioners of the Dark Arts",
    a: [{ text: "Curse-breaker", isCorrect: false },
        { text: "Minister", isCorrect: false },
        { text: "Auror", isCorrect: true },
        { text: "Headmaster", isCorrect: false }
    ]

},
{
    id: 7,
    q: "A magical plant that constricts and strangles. It is deadly fun but will sulk in the sun.'",
    a: [{ text: "Basilisk", isCorrect: false },
        { text: "Mandrakes", isCorrect: false },
        { text: "Devil's Snare", isCorrect: true },
        { text: "Gillyweed", isCorrect: false }
    ]

},
{
    id: 8,
    q: "Charm that illuminates the tip of the casters wand",
    a: [{ text: "Portus", isCorrect: false },
        { text: "Lumos", isCorrect: true },
        { text: "Bombarda", isCorrect: false },
        { text: "Episkey", isCorrect: false }
    ]

}

]

var start = true;
function iterate(id) {
  
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
  
 
    const question = document.getElementById("question");
    question.innerText = Questions[id].q;
  
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');

        op1.innerText = Questions[id].a[0].text;
        op2.innerText = Questions[id].a[1].text;
        op3.innerText = Questions[id].a[2].text;
        op4.innerText = Questions[id].a[3].text;
      

        op1.value = Questions[id].a[0].isCorrect;
        op2.value = Questions[id].a[1].isCorrect;
        op3.value = Questions[id].a[2].isCorrect;
        op4.value = Questions[id].a[3].isCorrect;
      
        var selected = "";

    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "#7A7265";
        op2.style.backgroundColor = "#170312";
        op3.style.backgroundColor = "#170312";
        op4.style.backgroundColor = "#170312";
        selected = op1.value;
    })
  

    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "#170312";
        op2.style.backgroundColor = "#7A7265";
        op3.style.backgroundColor = "#170312";
        op4.style.backgroundColor = "#170312";
        selected = op2.value;
    })


        op3.addEventListener("click", () => {
            op1.style.backgroundColor = "#170312";
            op2.style.backgroundColor = "#170312";
            op3.style.backgroundColor = "#7A7265";
            op4.style.backgroundColor = "#170312";
            selected = op3.value;
        })
      

        op4.addEventListener("click", () => {
            op1.style.backgroundColor = "#170312";
            op2.style.backgroundColor = "#170312";
            op3.style.backgroundColor = "#170312";
            op4.style.backgroundColor = "#7A7265";
            selected = op4.value;
        })


    const evaluate = document.getElementsByClassName("evaluate");
  

    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "#81C14B";
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "#93032E";
        }
    })
}

if (start) {
    iterate("0");
}
  

const next = document.getElementsByClassName('next')[0];
var id = 0;
  
next.addEventListener("click", () => {
    start = false;
    if (id < 8) {
        id++;
        iterate(id);
        console.log(id);
    }
  
})