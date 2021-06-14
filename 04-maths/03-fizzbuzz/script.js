



function number () {
    for (let i = 1; i < 100; i++) {
        if (i % 3) {
            console.log("FIZZ");
        } else if (i % 5) {
            console.log("BUZZ");
        } else if (i % 15) {
            console.log("FIZZBUZZ");
        } else {
            console.log(i);
        }
    }

}


number(3);