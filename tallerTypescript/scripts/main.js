import { dataCourses } from './dataCourses.js';
import { dataStudents } from './dataStudents.js';
var coursesTbody = document.getElementById('courses');
var studnetTbody = document.getElementById('student');
var btnfilterByName = document.getElementById("button-filterByName");
var btnfilterByName2 = document.getElementById("button-filterByName2");
var inputSearchBox = document.getElementById("search-box");
var inputSearchBox1 = document.getElementById("search-box1");
var inputSearchBox2 = document.getElementById("search-box2");
var totalCreditElm = document.getElementById("total-credits");
btnfilterByName.onclick = function () { return applyFilterByName(); };
renderCoursesInTable(dataCourses);
renderStudentInTable(dataStudents);
totalCreditElm.innerHTML = "" + getTotalCredits(dataCourses);
function renderCoursesInTable(courses) {
    console.log('Desplegando cursos');
    courses.forEach(function (course) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + course.name + "</td>\n                           <td>" + course.professor + "</td>\n                           <td>" + course.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
}
function renderStudentInTable(students) {
    console.log('Desplegando estudiantes');
    students.forEach(function (student) {
        var trElement1 = document.createElement("tr");
        trElement1.innerHTML = "<td>C\u00F3digo</td>\n                             <td>" + student.codigo + "</td>";
        studnetTbody.appendChild(trElement1);
        var trElement2 = document.createElement("tr");
        trElement2.innerHTML = "<td>C\u00E9dula</td>\n                             <td>" + student.cedula + "</td>";
        studnetTbody.appendChild(trElement2);
        var trElement3 = document.createElement("tr");
        trElement3.innerHTML = "<td>Edad</td>\n                             <td>" + student.edad + "</td>";
        studnetTbody.appendChild(trElement3);
        var trElement4 = document.createElement("tr");
        trElement4.innerHTML = "<td>Direcci\u00F3n</td>\n                             <td>" + student.direccion + "</td>";
        studnetTbody.appendChild(trElement4);
        var trElement5 = document.createElement("tr");
        trElement5.innerHTML = "<td>Tel\u00E9fono</td>\n                             <td>" + student.telefono + "</td>";
        studnetTbody.appendChild(trElement5);
    });
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) {
        return c.name.match(nameKey);
    });
}
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
function applyFilterByCredits() {
    var numero1 = inputSearchBox1.valueAsNumber;
    var numero2 = inputSearchBox2.valueAsNumber;
    numero1 = (numero1 == null) ? -1 : numero1;
    numero2 = (numero2 == null) ? -1 : numero2;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByCredits(numero1, numero2, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByCredits(nameKeyInf, nameKeySup, courses) {
    return nameKeyInf === -1 || nameKeySup == -1 ? dataCourses : courses.filter(function (c) {
        return c.credits >= nameKeyInf && c.credits <= nameKeySup;
    });
}
btnfilterByName2.onclick = function () { return applyFilterByCredits(); };
