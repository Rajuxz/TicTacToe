flag = 1;
// Function to check who wins the game.
function func(){
    // Accessing the value of input fields.
    var b1,b2,b3,b4,b5,b6,b7,b8,b9;
    b1 = document.getElementById("btn-1").value;
    b2 = document.getElementById("btn-2").value;
    b3 = document.getElementById("btn-3").value;
    b4 = document.getElementById("btn-4").value;
    b5 = document.getElementById("btn-5").value;
    b6 = document.getElementById("btn-6").value;
    b7 = document.getElementById("btn-7").value;
    b8 = document.getElementById("btn-8").value;
    b9 = document.getElementById("btn-9").value;

    // if (b1,b2,b3) == "X"
   if((b1=="X") && (b2=="X") && (b3=="X")){
    document.getElementById("print").innerHTML = "❤✨Player X Wins";
    document.getElementById("btn-1").disabled = true;
    document.getElementById("btn-2").disabled = true;
    document.getElementById("btn-3").disabled = true;
    document.getElementById("btn-4").disabled = true;
    document.getElementById("btn-5").disabled = true;
    document.getElementById("btn-6").disabled = true;
    document.getElementById("btn-7").disabled = true;
    document.getElementById("btn-8").disabled = true;
    document.getElementById("btn-9").disabled = true;
   }
   else if((b4=="X") && (b5=="X") && (b6=="X")){
    document.getElementById("print").innerHTML = "❤✨Player X Wins";
    document.getElementById("btn-1").disabled = true;
    document.getElementById("btn-2").disabled = true;
    document.getElementById("btn-3").disabled = true;
    document.getElementById("btn-4").disabled = true;
    document.getElementById("btn-5").disabled = true;
    document.getElementById("btn-6").disabled = true;
    document.getElementById("btn-7").disabled = true;
    document.getElementById("btn-8").disabled = true;
    document.getElementById("btn-9").disabled = true;
   }
   else if((b7=="X") && (b8=="X") && (b9=="X")){
    document.getElementById("print").innerHTML = "❤✨Player X Wins";
    document.getElementById("btn-1").disabled = true;
    document.getElementById("btn-2").disabled = true;
    document.getElementById("btn-3").disabled = true;
    document.getElementById("btn-4").disabled = true;
    document.getElementById("btn-5").disabled = true;
    document.getElementById("btn-6").disabled = true;
    document.getElementById("btn-7").disabled = true;
    document.getElementById("btn-8").disabled = true;
    document.getElementById("btn-9").disabled = true;
   }
   else if((b1=="X") && (b4=="X") && (b7=="X")){
    document.getElementById("print").innerHTML = "❤✨Player X Wins";
    document.getElementById("btn-1").disabled = true;
    document.getElementById("btn-2").disabled = true;
    document.getElementById("btn-3").disabled = true;
    document.getElementById("btn-4").disabled = true;
    document.getElementById("btn-5").disabled = true;
    document.getElementById("btn-6").disabled = true;
    document.getElementById("btn-7").disabled = true;
    document.getElementById("btn-8").disabled = true;
    document.getElementById("btn-9").disabled = true;
   }
   else if((b2=="X") && (b5=="X") && (b8=="X")){
    document.getElementById("print").innerHTML = "❤✨Player X Wins";
    document.getElementById("btn-1").disabled = true;
    document.getElementById("btn-2").disabled = true;
    document.getElementById("btn-3").disabled = true;
    document.getElementById("btn-4").disabled = true;
    document.getElementById("btn-5").disabled = true;
    document.getElementById("btn-6").disabled = true;
    document.getElementById("btn-7").disabled = true;
    document.getElementById("btn-8").disabled = true;
    document.getElementById("btn-9").disabled = true;
   }
   else if((b3=="X") && (b6=="X") && (b9=="X")){
    document.getElementById("print").innerHTML = "❤✨Player X Wins";
    document.getElementById("btn-1").disabled = true;
    document.getElementById("btn-2").disabled = true;
    document.getElementById("btn-3").disabled = true;
    document.getElementById("btn-4").disabled = true;
    document.getElementById("btn-5").disabled = true;
    document.getElementById("btn-6").disabled = true;
    document.getElementById("btn-7").disabled = true;
    document.getElementById("btn-8").disabled = true;
    document.getElementById("btn-9").disabled = true;
   }
   else if((b1=="X") && (b5=="X") && (b9=="X")){
    document.getElementById("print").innerHTML = "❤✨Player X Wins";
    document.getElementById("btn-1").disabled = true;
    document.getElementById("btn-2").disabled = true;
    document.getElementById("btn-3").disabled = true;
    document.getElementById("btn-4").disabled = true;
    document.getElementById("btn-5").disabled = true;
    document.getElementById("btn-6").disabled = true;
    document.getElementById("btn-7").disabled = true;
    document.getElementById("btn-8").disabled = true;
    document.getElementById("btn-9").disabled = true;
   }
   else if((b3=="X") && (b5=="X") && (b7=="X")){
    document.getElementById("print").innerHTML = "❤✨Player X Wins";
    document.getElementById("btn-1").disabled = true;
    document.getElementById("btn-2").disabled = true;
    document.getElementById("btn-3").disabled = true;
    document.getElementById("btn-4").disabled = true;
    document.getElementById("btn-5").disabled = true;
    document.getElementById("btn-6").disabled = true;
    document.getElementById("btn-7").disabled = true;
    document.getElementById("btn-8").disabled = true;
    document.getElementById("btn-9").disabled = true; 
   }

    //For Player O 
   else if((b1=="O") && (b2=="O") && (b3=="O")){
        document.getElementById("print").innerHTML = "❤✨Player O Wins";
        document.getElementById("btn-1").disabled = true;
        document.getElementById("btn-2").disabled = true;
        document.getElementById("btn-3").disabled = true;
        document.getElementById("btn-4").disabled = true;
        document.getElementById("btn-5").disabled = true;
        document.getElementById("btn-6").disabled = true;
        document.getElementById("btn-7").disabled = true;
        document.getElementById("btn-8").disabled = true;
        document.getElementById("btn-9").disabled = true;
        }
    else if((b4=="O") && (b5=="O") && (b6=="O")){
        document.getElementById("print").innerHTML = "❤✨Player O Wins";
        document.getElementById("btn-1").disabled = true;
        document.getElementById("btn-2").disabled = true;
        document.getElementById("btn-3").disabled = true;
        document.getElementById("btn-4").disabled = true;
        document.getElementById("btn-5").disabled = true;
        document.getElementById("btn-6").disabled = true;
        document.getElementById("btn-7").disabled = true;
        document.getElementById("btn-8").disabled = true;
        document.getElementById("btn-9").disabled = true;
       }
    else if((b7=="O") && (b8=="O") && (b9=="O")){
        document.getElementById("print").innerHTML = "❤✨Player O Wins";
        document.getElementById("btn-1").disabled = true;
        document.getElementById("btn-2").disabled = true;
        document.getElementById("btn-3").disabled = true;
        document.getElementById("btn-4").disabled = true;
        document.getElementById("btn-5").disabled = true;
        document.getElementById("btn-6").disabled = true;
        document.getElementById("btn-7").disabled = true;
        document.getElementById("btn-8").disabled = true;
        document.getElementById("btn-9").disabled = true;
       }
    else if((b1=="O") && (b4=="O") && (b7=="O")){
        document.getElementById("print").innerHTML = "❤✨Player O Wins";
        document.getElementById("btn-1").disabled = true;
        document.getElementById("btn-2").disabled = true;
        document.getElementById("btn-3").disabled = true;
        document.getElementById("btn-4").disabled = true;
        document.getElementById("btn-5").disabled = true;
        document.getElementById("btn-6").disabled = true;
        document.getElementById("btn-7").disabled = true;
        document.getElementById("btn-8").disabled = true;
        document.getElementById("btn-9").disabled = true;
       }
    else if((b2=="O") && (b5=="O") && (b8=="O")){
        document.getElementById("print").innerHTML = "❤✨Player O Wins";
        document.getElementById("btn-1").disabled = true;
        document.getElementById("btn-2").disabled = true;
        document.getElementById("btn-3").disabled = true;
        document.getElementById("btn-4").disabled = true;
        document.getElementById("btn-5").disabled = true;
        document.getElementById("btn-6").disabled = true;
        document.getElementById("btn-7").disabled = true;
        document.getElementById("btn-8").disabled = true;
        document.getElementById("btn-9").disabled = true;
       }
    else if((b3=="O") && (b6=="O") && (b9=="O")){
        document.getElementById("print").innerHTML = "❤✨Player O Wins";
        document.getElementById("btn-1").disabled = true;
        document.getElementById("btn-2").disabled = true;
        document.getElementById("btn-3").disabled = true;
        document.getElementById("btn-4").disabled = true;
        document.getElementById("btn-5").disabled = true;
        document.getElementById("btn-6").disabled = true;
        document.getElementById("btn-7").disabled = true;
        document.getElementById("btn-8").disabled = true;
        document.getElementById("btn-9").disabled = true;
       }
    else if((b1=="O") && (b5=="O") && (b9=="O")){
        document.getElementById("print").innerHTML = "❤✨Player O Wins";
        document.getElementById("btn-1").disabled = true;
        document.getElementById("btn-2").disabled = true;
        document.getElementById("btn-3").disabled = true;
        document.getElementById("btn-4").disabled = true;
        document.getElementById("btn-5").disabled = true;
        document.getElementById("btn-6").disabled = true;
        document.getElementById("btn-7").disabled = true;
        document.getElementById("btn-8").disabled = true;
        document.getElementById("btn-9").disabled = true;
       }
    
    else if((b3=="O") && (b5=="O") && (b7=="O")){
        document.getElementById("print").innerHTML = "❤✨Player Y Wins";
        document.getElementById("btn-1").disabled = true;
        document.getElementById("btn-2").disabled = true;
        document.getElementById("btn-3").disabled = true;
        document.getElementById("btn-4").disabled = true;
        document.getElementById("btn-5").disabled = true;
        document.getElementById("btn-6").disabled = true;
        document.getElementById("btn-7").disabled = true;
        document.getElementById("btn-8").disabled = true;
        document.getElementById("btn-9").disabled = true;
       }
       else if(((b1 == 'X' || b1 == 'O') && 
       (b2 == 'X'|| b2 == 'O') && 
       (b3 == 'X' || b3 == 'O') &&
       (b4 == 'X' || b4 == 'O') && 
       (b5 == 'X' || b5 == 'O') &&
       (b6 == 'X' || b6 == 'O') &&
       (b7 == 'X' || b7 == 'O') && 
       (b8 == 'X' || b8 == 'O') && 
       (b9 == 'X' || b9 == 'O'))){
           document.getElementById("print").innerHTML = "😫Match Tie";
        }
        else{
            if(flag==1){
                document.getElementById("print").innerHTML = "Player X turn.";
            }else{
                document.getElementById("print").innerHTML = "Player O turn.";
            }
       } 

}
// Function check turn of player and put accordingly value X or O
function func_1(){
    if(flag==1){
        document.getElementById("btn-1").value="X";
        document.getElementById("btn-1").disbled = true;
        flag = 0;
    }else{
        document.getElementById("btn-1").value = "O";
        document.getElementById("btn-1").disbled = true;
        flag = 1;
    }

}
function func_2(){
    if (flag==1){
        document.getElementById("btn-2").value="X";
        document.getElementById("btn-2").disbled = true;
        flag = 0;
    }
    else{
        document.getElementById("btn-2").value = "O";
        document.getElementById("btn-2").disbled = true;
        flag = 1;
    }
}
function func_3(){
    if(flag==1){
        document.getElementById("btn-3").value="X";
        document.getElementById("btn-3").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("btn-3").value = "O";
        document.getElementById("btn-3").disbled = true;
        flag = 1;
    }
}
function func_4(){
    if(flag==1){
        document.getElementById("btn-4").value="X";
        document.getElementById("btn-4").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("btn-4").value = "O";
        document.getElementById("btn-4").disbled = true;
        flag = 1;
    }
}
function func_5(){
    if(flag==1){
        document.getElementById("btn-5").value="X";
        document.getElementById("btn-5").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("btn-5").value = "O";
        document.getElementById("btn-5").disbled = true;
        flag = 1;
    }
}
function func_6(){
    if(flag==1){
        document.getElementById("btn-6").value="X";
        document.getElementById("btn-6").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("btn-6").value = "O";
        document.getElementById("btn-6").disbled = true;
        flag = 1;
    }
}
function func_7(){
    if(flag==1){
        document.getElementById("btn-7").value="X";
        document.getElementById("btn-7").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("btn-7").value = "O";
        document.getElementById("btn-7").disbled = true;
        flag = 1;
    }
}
function func_8(){
    if(flag==1){
        document.getElementById("btn-8").value="X";
        document.getElementById("btn-8").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("btn-8").value = "O";
        document.getElementById("btn-8").disbled = true;
        flag = 1;
    }
}
function func_9(){
    if(flag==1){
        document.getElementById("btn-9").value="X";
        document.getElementById("btn-9").disabled = true;
        flag = 0;
    }
    else{
        document.getElementById("btn-9").value = "O";
        document.getElementById("btn-9").disbled = true;
        flag = 1;
    }
}

// Function to reset the game:
function reset(){
    location.reload();
    document.getElementById("btn-1").value = '';
    document.getElementById("btn-2").value = '';
    document.getElementById("btn-3").value = '';
    document.getElementById("btn-4").value = '';
    document.getElementById("btn-5").value = '';
    document.getElementById("btn-6").value = '';
    document.getElementById("btn-7").value = '';
    document.getElementById("btn-8").value = '';
    document.getElementById("btn-9").value = '';
}