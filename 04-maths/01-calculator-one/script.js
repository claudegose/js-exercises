function firstOne () {
    var a = parseInt(document.getElementById("number1").value);
    var b = parseInt(document.getElementById("number2").value);
    document.getElementById("result").innerHTML = (a + b);

}



function secondOne () {
    var a = parseInt(document.getElementById("number1").value);
    var b = parseInt(document.getElementById("number2").value);
    document.getElementById("result").innerHTML = ( a - b);
}


function thirdOne () {
    var a = parseInt(document.getElementById("number1").value);
    var b = parseInt(document.getElementById("number2").value);
    document.getElementById("result").innerHTML = (a * b);
}

function fourthOne () {
    var a = parseInt(document.getElementById("number1").value);
    var b = parseInt(document.getElementById("number2").value);
    document.getElementById("result").innerHTML = (a / b );
}