alert('Press R for ✊, P for 🖐, S for ✌ and A to reset game.')
let computerMove = ''
let outocme = ''

const score = JSON.parse(localStorage.getItem('score'))

localStorage.setItem('score',JSON.stringify(score))
console.log()


function pickComputerMove(move){
    let numberGenerated = Math.random()
    if(numberGenerated < 1/3 && numberGenerated >= 0 ){
        computerMove = 'Rock';
    }else if(numberGenerated < 2/3 && numberGenerated >= 1/3){
        computerMove = 'Paper';
    }else if(numberGenerated < 1 && numberGenerated >= 2/3){
        computerMove = 'Scissors';
    }
    console.log(computerMove);
    console.log(numberGenerated);
}
function printout(move){
    document.querySelector('#score').innerHTML = `Wins : ${score.win}  Ties : ${score.tie}  Losses : ${score.lose}`;
    document.querySelector('#outcome').innerHTML = `You ${outcome}`;
    document.querySelector('#moves').innerHTML= `You ⏩ <img src="pics/${move}-emoji.png" class="clicks">  <img src="pics/${computerMove}-emoji.png" class="clicks"> ⏪ Computer`

}

    function downkey(){
        if(event.key == 'r' || event.key == 'R'){
            rock();
        }else if(event.key == 's' || event.key == 'S'){
            scissors();
        }else if(event.key == 'p' || event.key == 'P'){
            paper();
        }else if(event.key == 'a' || event.key == 'A'){
            reset();
        }
        else{
            null
        }
    }

    function scissors(){
        move = 'Scissors'
        pickComputerMove();
        if(computerMove === 'Paper'){
            outcome = 'Win 😍'
            score.win = score.win + 1
        }else if(computerMove === 'Scissors'){
            outcome = 'Tie 😶'
            score.tie = score.tie + 1
        }else if(computerMove === 'Rock'){ 
            outcome = 'Lose 😥'
            score.lose = score.lose + 1
        }          
        printout(move);
        localStorage.setItem('score',JSON.stringify(score))



    }

    function rock(){
        pickComputerMove();
        let move = 'Rock'
        if(computerMove === 'Scissors'){
            outcome = 'Win 😍'
            score.win = score.win + 1
        }else if(computerMove === 'Rock'){
            outcome = 'Tie 😶'
            score.tie = score.tie + 1
        }else if(computerMove === 'Paper'){ 
            outcome = 'Lose 😥'
            score.lose = score.lose + 1
        }
        printout(move);
        localStorage.setItem('score',JSON.stringify(score))

    }


    function paper(){
        move = 'Paper'
        pickComputerMove();
        if(computerMove === 'Rock'){
            outcome = 'Win 😍'
            score.win = score.win + 1
        }else if(computerMove === 'Paper'){
            outcome = 'Tie 😶'
            score.tie = score.tie + 1
        }else if(computerMove === 'Scissors'){ 
            outcome = 'Lose 😥'
            score.lose = score.lose + 1
        }           
        printout(move);
        localStorage.setItem('score',JSON.stringify(score))


    }

    function reset(){
        score.win = 0
        score.tie = 0
        score.lose = 0
        document.querySelector('#score').innerHTML = `Wins : ${score.win} Ties : ${score.tie} Losses : ${score.lose}`;
        document.querySelector('#outcome').innerHTML = 'Game Reset ✅'
        document.querySelector('#moves').innerHTML = 'Pick Move 🃏'
        localStorage.setItem('score',JSON.stringify(score))

    }