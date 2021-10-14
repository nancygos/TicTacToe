let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let form = document.getElementById('form');
let content = document.getElementById('content');
let player1Name = document.getElementById('player1Name');
let player2Name = document.getElementById('player2Name');



// Game box logic

let turn = 'X';

const changeTurn = () =>{
    return turn === 'X' ? turn = 'O': turn = 'X';
}

// Take all the boxes
let boxes = document.getElementsByClassName('box');

// convert it into array to use random access
Array.from(boxes).forEach(element =>{

    element.addEventListener('click' , ()=>{
        if(!element.innerText){
            element.innerText= turn ;
            changeTurn();
        }
        
    });
});

// box logic finished






// reset logic
reset.addEventListener('click',()=>{
    location.reload();
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
