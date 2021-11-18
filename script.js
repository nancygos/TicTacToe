let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let form = document.getElementById('form');
let content = document.getElementById('content');
let player1Name = document.getElementById('player1Name');
let player2Name = document.getElementById('player2Name');



// Game box logic
let player1result = document.getElementById('player1result');
let player2result = document.getElementById('player2result');

let turn = 'X';

const changeTurn = () =>{
    return turn === 'X' ? turn = 'O': turn = 'X';
}

// if win
let counter = 1;

const checkWin = () => {
    let boxes = document.getElementsByClassName('box');

    let roundWin = false;
    let roundDraw = false;

    let win = [
        [0 , 1 , 2],
        [0 , 3 , 6],
        [0 , 4 , 8],
        [1 , 4 , 7],
        [2 , 5 , 8],
        [2 , 4 , 6],
        [3 , 4 , 5], 
        [6 , 7 , 8]  
    ]

    // checking logic
    for(let i=0 ; i<9 ; i++){

        for(let k = 0 ; k<8 ; k++){
            let a = boxes[win[k][0]].innerText;
            let b = boxes[win[k][1]].innerText;
            let c = boxes[win[k][2]].innerText;

            if(a === '' || b === '' || c === ''){
                continue;
            }
            if(a === b && b === c ){
                roundWin = true;
                break;
            }
            
        }

        if(roundWin){
            break;
        }
    }

    if(!roundWin && counter >= 9){
        roundDraw = true;
    }
    
    if(roundWin){
        if(counter%2 === 0){
            player2result.innerHTML = "WON";
            // player1result.innerHTML = "Lose";
        }
        else{
            player1result.innerHTML = "WON";
            // player2result.innerHTML = "Lose";
        }        
    }
    if(roundDraw){
        player1result.innerHTML = "DRAW";
        player2result.innerHTML = "DRAW";
    }
}

// Take all the boxes
let boxes = document.getElementsByClassName('box');

// convert it into array to use random access
Array.from(boxes).forEach(element =>{

    element.addEventListener('click' , ()=>{
        if(!element.innerText){
            element.innerText= turn ;
            changeTurn();

            checkWin();
            counter++;
        }
        
    });
});

// box logic finished


// reset logic
reset.addEventListener('click',()=>{
    location.reload();
});

// clear board logic
let clear = document.getElementById('clear');

clear.addEventListener('click' , ()=>{
    // let boxes = document.getElementsByClassName('box');

    for(let i=0 ; i<9 ; i++){
        boxes[i].innerText = '';
    }
    player1result.innerHTML = "";
    player2result.innerHTML = "";
    counter= 1;
    
    // alert ('ji');
});


// form logic
btn.addEventListener('click',()=>{
    if(player1.value && player2.value){
        // player1.value="";
        // player2.value="";
        player1Name.innerHTML=player1.value;
        player2Name.innerHTML=player2.value;

        form.classList.add('action');
        content.classList.add('no-blurring');
    }
    else{
        alert("Please fill the required details");
    }
});
