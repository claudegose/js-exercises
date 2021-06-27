


document.getElementById("run").onclick = () =>
{

    var msg="";
    var res= "0";

    for(x= 1; x<=21; x++)
    {
        res = x * x;
        msg = msg + " " + x + " * "+ x + " = " + res + "\n";
    }
alert(msg)
}


