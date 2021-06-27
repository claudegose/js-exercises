
    var fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];


    document.getElementById("run").addEventListener("click", () => {
        for (i = 0; i < fruits.length; i++)
        console.log((i+1) + ": " + fruits[i])
    })



