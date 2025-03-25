
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
         end_message.style.position = 'absolute';
         end_message.style.left = '420px';
         end_message.style.top = '70px';
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
