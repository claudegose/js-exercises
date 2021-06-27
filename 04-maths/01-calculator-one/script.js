

document.getElementById("addition").addEventListener("click", () => {
    let a = parseInt(document.getElementById("number1").value);
    let b = parseInt(document.getElementById("number2").value);
    document.getElementById("result").innerHTML = (a + b)
})

document.getElementById("substraction").onclick = () => {
   let a =  document.getElementById("number1").value;
   let b = document.getElementById("number2").value;
   document.getElementById("result").innerHTML = (a-b);
}

document.getElementById("multiplication").onclick = () => {
    let a =  document.getElementById("number1").value;
    let b = document.getElementById("number2").value;
    document.getElementById("result").innerHTML = (a*b);
}

document.getElementById("division").onclick = () => {
    let a =  document.getElementById("number1").value;
    let b = document.getElementById("number2").value;
    document.getElementById("result").innerHTML = (a/b);
}