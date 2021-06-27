


function submitBirthday() {
    var minutes = 1000 * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;

    var birthday = Date.parse(document.getElementById("myBirthday").value);
    var dateNow = new Date();
    var YearsOld = Math.round((dateNow-birthday)/ years);

    document.getElementById("displayBirthday").innerHTML = ("You are " + YearsOld + " years old.");
}
