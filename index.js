const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDis(){
    display.value = "";

}

function calc(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    

}