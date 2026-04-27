function checkDiscount() {
    let age = document.getElementById('age').value;
    let isStudent = document.getElementById('isStudent').checked;

    if (age < 18) {
    //execute if age is less than 18
        if (isStudent) {
        //execute if under 18 and also a student
            alert("20% discount");
        }
        else {
        //execute if under 18 and not a student
            alert("10% discount");
        }
    }
    else {
    //execute this code customer 18 or over
        alert("Regular price");
    }
}