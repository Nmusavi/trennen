function work(){
    var comText= document.getElementById("text").value;
    var cutPosition = document.getElementById("cutPosition").value; 
        if(document.getElementById("danach").checked ){
        document.getElementById("answerhin").innerHTML = comText.slice(cutPosition.length + comText.search(cutPosition));
        }
        if(document.getElementById("davor").checked){
        document.getElementById("answervor").innerHTML = comText.slice(0,comText.search(cutPosition));
        }
}

