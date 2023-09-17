console.log("lets begin!!");
let music = new Audio("music.mp3")
let gameover = new Audio("gameover.mp3")
let ting = new Audio("ting.mp3")
let turn ="X";
let gameOver = false;

//Function to change player turn
const changeTurn =()=>{
    return turn==="X"?"O":"X" ;
}

//Function check on wins:
const checkWin=()=>{
    let boxtext = document.getElementsByClassName("boxText");
        let win = [
            [0,1,2,5,4.4,0],
            [3,4,5,5,14.4,0],
            [6,7,8,5,24.4,0],
            [0,3,6,-5,15,90],
            [1,4,7,5,15,90],
            [2,5,8,15,15,90],
            [0,4,8,5,14.3,45],
            [2,4,6,5,14.3,135]

        ]
        win.forEach((e) => {
            if((boxtext[e[0]].innerText=== boxtext[e[1]].innerText) && (boxtext[e[2]].innerText=== boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
                document.querySelector('.info').innerText = boxtext[e[0]].innerText + " is the winner!" 
                gameOver = true;
                music.pause();
                gameover.play();
                document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "230px";
                document.querySelector('.line').style.width = "20vw" ;
                document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw)rotate(${e[5]}deg)`;
                return;
            }
        });
}
//reset button
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll(".boxText");
    Array.from(boxtext).forEach(element => {
        element.innerText = '' ;
    })
    turn = "X";
    gameOver=false;
    music.play();
    document.querySelector('.line').style.width = "0vw" ;
    document.getElementsByClassName("info")[0].innerText = "Turn of " + turn + "-";
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
    
})



//Main logic of the game...
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) =>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', ()=>{
            if(boxText.innerText ===''){
                boxText.innerText = turn;
                turn = changeTurn();
                ting.play();
                checkWin();
                if(!gameOver){
                    document.getElementsByClassName("info")[0].innerText = "Turn of " + turn + "-";
                } 

            }
    })
})

