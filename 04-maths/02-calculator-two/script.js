



function first (){
    let a = parseInt(document.getElementById("op-one").value);
    let b = parseInt(document.getElementById("op-two").value);
    document.getElementById("result").innerHTML = (a + b);
}


function second () {
    let a = parseInt(document.getElementById("op-one").value);
    let b= parseInt(document.getElementById("op-two").value);
    document.getElementById("result").innerHTML = (a - b);
}


function third () {
    let a = parseInt(document.getElementById("op-one").value);
    let b = parseInt(document.getElementById("op-two").value);
    document.getElementById("result").innerHTML = (a * b);
}

function fourth () {
    let a = parseInt(document.getElementById("op-one").value);
    let b = parseInt(document.getElementById("op-two").value);
    document.getElementById("result").innerHTML = (a/b);
}