function firstOne (){
    let a = parseInt(document.getElementById("number1").value);
    let b = parseInt(document.getElementById("number2").value);
    document.getElementById("results").innerHTML = (a + b);


}function secondOne() {
    let a = parseInt(document.getElementById("number1").value);
    let b = parseInt(document.getElementById("number2").value);
    document.getElementById("results").innerHTML = (a - b);
}

function thirdOne () {
    let a = parseInt(document.getElementById("number1").value);
    let b = parseInt(document.getElementById("number2").value);
    document.getElementById("results").innerHTML = (a * b);
}

function fourthOne () {
    let a = parseInt(document.getElementById("number1").value);
    let b = parseInt(document.getElementById("number2").value);
    document.getElementById("results").innerHTML = (a / b);
}