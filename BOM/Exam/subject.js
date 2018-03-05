function Subject (name) {
    this.name = name;
}
Subject.prototype.getSubjectName = function() {
    return this.name;
} 

var subject1 = new Subject(select);