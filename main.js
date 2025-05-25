
var player_playing = false;
var robot_playing = true;
var turns = 1;
let n = 1;

//turns works
//initial gameplay works!

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("playbutton").addEventListener("click", () => {
        reset_game();
        game_gameplay(1);
        
    });

    document.getElementById("end_message").addEventListener("click", () => {
        reset_game();
        game_gameplay(1);
    })
    turns = 1;
    for(let i=1; i<=9; i++){
        const buttonId = `but${i}`;
        //const buttonId = `but${i}`;

        document.getElementById(buttonId).addEventListener("click", () => {
            player_gameplay(i);
            
        });

    }
});
//gotta add the checking to make sure no duplciates method

function player_gameplay(i){
    if(!player_playing || robot_playing) return;

    if(turns < 10){
        const x = document.getElementById(`x${i}`);
        if(x && x.style.opacity !== "1"){
            x.style.opacity = "1";
        }
        player_playing = false;
        robot_playing = true;
        setTimeout(() => {
         //   if(i === 7){
         //       const oo = document.getElementById(`o2`);
          //      n=2;
           // }
           // if(i != 7){
                const oo = document.getElementById(`o7`);
           // }
            if(oo && oo.style.opacity !== "1"){
                oo.style.opacity = "1";
            }

        }, 500);
        player_playing = true;
        robot_playing = false;
        turns+=15;
      //  setTimeout(game_gameplay, 500, 2);
    }
   // else if(turns >= 15)
   // {   
   else{
    const xx = document.getElementById(`x8`)
    if(xx && xx.style.opacity !== "1"){
        xx.style.opacity = "1";
    }

    setTimeout(() => {
        const ooo = document.getElementById(`o3`);
        
         if(ooo && ooo.style.opacity !== "1"){
             ooo.style.opacity = "1";
         }

         setTimeout(() => {  
         const end_message = document.getElementById(`end_message`);
         end_message.style.opacity = "1";
         end_message.style.position = 'fixed'; // or 'absolute' if you prefer
         end_message.style.top = '50%';
         end_message.style.left = '50%';
         end_message.style.transform = 'translate(-50%, -50%)';  
         }, 650);

    }, 500);
   }
   // }   

}

function game_gameplay(c){
    if(c === 1){
      const o = document.getElementById(`o5`);
        if(o && o.style.opacity !== "1"){
            o.style.opacity = "1";
        }

        
    }
/*
    if(c === 2){


    }

    if(c === 3){
        if(n == 2){
            const ooo = document.getElementById(`o8`);
        }
        if(n != 2){
            const ooo = document.getElementById(`o3`);
        }

        if(ooo && ooo.style.opacity !== "1"){
            ooo.style.opacity = "1";
        }
        const end_message = document.getElementById(`end_message`);
        end_message.style.opacity = "1";

    }
    player_playing = true;
    robot_playing = false;
*/
}

function reset_game(){
    player_playing = true;
    robot_playing = false;

    turns = 9;

    const end_message = document.getElementById(`end_message`);
    end_message.style.opacity = "1";
    end_message.style.position = 'fixed';
    end_message.style.top = '10%';
    end_message.style.left = '-90%';

 


    for(let i = 1; i<=9; i++){
        document.getElementById(`x${i}`).style.opacity = "0";
        document.getElementById(`o${i}`).style.opacity = "0";
    }
}




//--if close to tic tac toe, redact his move


/*
function player_gameplay(i){
    

    //allows for the x to show when pressed

    const x = document.getElementById(`x${i}`);
    turns = 1;
    
    if(x && !robot_playing){
        console.log(turns);
        if(player_playing == true && turns == 1){
            x.style.opacity = "1";
            //turn_possibilities.remove(x);
            turn_remover_number = x+1;
            turn_possibilities.splice(turn_remover_number, 1);
            player_playing = false;
            if(!player_playing){


                setTimeout(game_gameplay, 200);
            }
            turns +=1;
        }

    }

}
*/

/*
if(document.getElementById('playbutton').clicked == true){
    reset_game()
    document.getElementById("x1").style.opacity = "1";
    turns = 9;
    console.log("so it's getting pressed???");
    //or 8?
    start_message = true;
    turn_possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    //might need to fix inheritence issues
    for(let i=0; i<turns;i++){
        if(player_playing==true){
            player_gameplay();
        }
        if(robot_playing == true){
            program_gameplay();
        }

 
    }
    endgame()
}
//x is turnn, o is turn

function player_gameplay(){


    //have it visible
    //remove it from turn_possibilities
    player_playing = false;
    robot_playing = true;


    function_working = true;
    document.getElementById('x1').style.visibility = 'visible';

    //check if spot is already visible


    // for(let i=0; i<9; i++){
    //     //String('but' + i)
    //     if(document.getElementById(String('but1').clicked == true)){
    //         const element = document.getElementById('x1');
    //         element.style.visibility = 'visible';


    //         delete turn_possibilities[i]
    //         player_playing = false;
    //         robot_playing = true;
    //     }
    //     else{
    //         //make message appear
    //         try_again_message_shown  = true
    //     }
    // }

}

    //initialize what turn each block is 
function program_gameplay(){
    //might need to add a checking function

    player_playing = true;
    robot_playing = false;

    program_turn = turn_possibilities.random(1,9);
    if(program_turn == turn){
        o_shown = true
        turn_possibilities.remove(program_turn) //might need to make it -1
    }
}

function endgame(){
    end_message_shown = true
    //play button show again?
}



function reset_game(){
    turns = 9;
    //or 8?
    start_message = true;
    turn_possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    player_playing = true;
    robot_playing = false;

*/

