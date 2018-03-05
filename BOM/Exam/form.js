var select = document.querySelector('.add-subject').options[select.selectedIndex].value;
var inputNameSurname = document.querySelector('.add-student-name').value;
var inputGrade = document.querySelector('.add-grade').value;
var outputMessage = document.getElementById('output1');
var addButton = document.querySelector('.add-btn');
var nameInput = function () {
    for (var i = 0; i < inputNameSurname.length; i++) {
        var a = "";
        if (inputName[i] == " ") {
            a = inputName.slice(0, i);

        }
    }
    return a;
}

var surnameInput = function () {
    for (var j = 0; j < inputNameSurname.length; j++) {
        var b = "";
        if (inputName[j] == " ") {
            b = inputName.slice(j + 1);
        }
    }
    return b;
}

var error = {
    OK: 'OK',
    MISSING_DATA: 'Insert name and surname',
}

var arrOfStudents = [];

function validator() {
    if (inputName == '') {
        outputMessage.innerHTML = error.MISSING_DATA;
    } else {
        outputMessage.innerHTML = error.OK;
    }
}

addButton.addEventListener('click', function () {
    arrOfStudents.push(exam1);
    if(exam1.hasPassed() == true) {      // TODO
        var p = document.createElement('p');
        var text = document.createTextNode(exam1.student.getStudentData());
        p.appendChild(text);
        document.getElementById('passed').appendChild(p);


    }

    

})





