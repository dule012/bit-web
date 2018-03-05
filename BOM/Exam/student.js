function Student(name, surname) {
    this.name = name;
    this.surname = surname;
}
Student.prototype.getStudentData = function () {
    return this.name.charAt(0).toUpperCase() + ' ' + this.surname.charAt(0).toUpperCase();
}
var student1 = new Student(nameInput, surnameInput);