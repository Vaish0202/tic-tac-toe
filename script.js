console.log("welcome")
let music = new Audio("music.mp3")
let turn = new Audio("ting.mp3");
let suc = new Audio("clap.mp3");
let gameover = new Audio("gameover.mp3")
let turn1 = "X";
let isgameover = false;
//function to change turn of the player
const changeTurn = () => {
    return turn1 === "X" ? "0" : "X"
}

//function to check for win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]
    ]
    
    wins.forEach(e =>{
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "120px";
            suc.play();
            const lineElement = document.querySelector(".line");
            lineElement.style.display = "block";
            lineElement.style.width = "20vw";
            lineElement.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector('.imgbox img').classList.add('show');
               }


    })
}

//game starts
let boxes = document.getElementsByClassName("box");
document.querySelector(".line").style.display = "none";
    Array.from(boxes).forEach(element => {
        let boxtext = element.querySelector('.boxtext');
        element.addEventListener('click', () => {
            if (boxtext.innerText === '') {
                boxtext.innerText = turn1;
                turn1 = changeTurn();
                turn.play();
                checkWin();
                if (!isgameover) {
                    document.getElementsByClassName("info")[0].innerText = " Turn for " + turn1;
                }
            }
        })
    })

    //add onclick event listener to reset button
    reset.addEventListener('click', () => {
        let boxtexts = document.querySelectorAll('.boxtext');
        Array.from(boxtexts).forEach(element => {
            element.innerText = "";
        });
        turn1 = "X";
        isgameover = false;
        suc.pause();
        document.getElementsByClassName("info")[0].innerText = " Turn for " + turn1;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
        document.querySelector(".line").style.width = "0vw";
        // document.querySelector(".line").style.display = "none";
    })