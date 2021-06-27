

document.getElementById("run").onclick = () => {
    var i, num, f;
    f = 1;
    num = document.getElementById("number").value;
    for(i = 1; i <= num; i++)
    {
        ff = f * i;
    }
    ii = i - 1;
    document.getElementById("result").innerHTML = "The factorial is " + f ;
}