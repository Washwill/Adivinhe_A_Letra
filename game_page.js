player1Name = localStorage.getItem("player1Name");
player2Name = localStorage.getItem("player2Name");

player1Score = 0;
player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

document.getElementById("player1Score").innerHTML = player1Score ;
document.getElementById("player2Score").innerHTML = player2Score ;

document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name ;
document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name ;

function send() {
	getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();

    charAt1 = word.charAt(1);

    lengthDivide1 = Math.floor(word.length - 2);
    charAt2 = word.charAt(lengthDivide1);

    lengthMinus1 = word.length - 1;
    charAt3 = word.charAt(lengthMinus1);

    removeCharAt1 = word.replace(charAt1, "_");
    removeCharAt2 = removeCharAt1.replace(charAt2, "_");
    removeCharAt3 = removeCharAt2.replace(charAt3, "_");

    question_word = "<h4 id='wordDisplay'> P. "+removeCharAt3+"</h4>";
    inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row =  question_word + inputBox + checkButton ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}


questionTurn = "player1";
answerTurn = "player2";


function check()
{
    getAnswer = document.getElementById("inputCheckBox").value;
    answer = getAnswer.toLowerCase();

    if(answer == word){
        if(answerTurn == "player1"){
            player1Score = player1Score + 1;
            document.getElementById("player1Score").innerHTML = player1Score;
        }
        else{
            player2Score = player2Score + 1;
            document.getElementById("player2Score").innerHTML = player2Score;
        }
    }

    if(questionTurn == "player1"){
        questionTurn = "player2";
        document.getElementById("playerQuestion").innerHTML = "Turno De Pergunta: " + player2Name;
    }
    else{
        questionTurn = "player1";
        document.getElementById("playerQuestion").innerHTML = "Turno De Pergunta: " + player1Name;
    }
    
    if(answerTurn == "player1"){
        answerTurn = "player2";
        document.getElementById("playerAnswer").innerHTML = "Turno De Resposta: " + player2Name;
    }
    else{
        answerTurn = "player1";
        document.getElementById("playerAnswer").innerHTML = "Turno De Resposta: " + player1Name; 
    }

    document.getElementById("output").innerHTML = "";
}
