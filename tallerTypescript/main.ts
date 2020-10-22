import { Course } from './course.js';

import { dataCourses } from './dataCourses.js';

import { Student } from './student.js';

import { dataStudents } from './dataStudents.js';

let coursesTbody: HTMLElement = document.getElementById('courses')!;
let studnetTbody: HTMLElement = document.getElementById('student')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const btnfilterByName2: HTMLElement = document.getElementById("button-filterByName2")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const inputSearchBox1: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box1")!;
const inputSearchBox2: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box2")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;


btnfilterByName.onclick = () => applyFilterByName();


renderCoursesInTable(dataCourses);
renderStudentInTable(dataStudents);

totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`


function renderCoursesInTable(courses: Course[]): void {
  console.log('Desplegando cursos');
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.name}</td>
                           <td>${course.professor}</td>
                           <td>${course.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
}

function renderStudentInTable(students: Student[]): void {
    console.log('Desplegando estudiantes');
    students.forEach((student) => {
    let trElement1 = document.createElement("tr");
    trElement1.innerHTML = `<td>Código</td>
                             <td>${student.codigo}</td>`;
    studnetTbody.appendChild(trElement1);
    let trElement2 = document.createElement("tr");
    trElement2.innerHTML = `<td>Cédula</td>
                             <td>${student.cedula}</td>`;
    studnetTbody.appendChild(trElement2);
    let trElement3 = document.createElement("tr");
    trElement3.innerHTML = `<td>Edad</td>
                             <td>${student.edad}</td>`;
    studnetTbody.appendChild(trElement3);
    let trElement4 = document.createElement("tr");
    trElement4.innerHTML = `<td>Dirección</td>
                             <td>${student.direccion}</td>`;
    studnetTbody.appendChild(trElement4);
    let trElement5 = document.createElement("tr");
    trElement5.innerHTML = `<td>Teléfono</td>
                             <td>${student.telefono}</td>`;
    studnetTbody.appendChild(trElement5);
    });
  }
 

 

function applyFilterByName() { 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter( c => 
    c.name.match(nameKey));
}


function getTotalCredits(courses: Course[]): number {
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.credits);
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
  let numero1 = inputSearchBox1.valueAsNumber;
  let numero2 = inputSearchBox2.valueAsNumber;
  numero1 = (numero1 == null) ? -1 : numero1;
  numero2 = (numero2 == null) ? -1 : numero2;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByCredits(numero1,numero2, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByCredits(nameKeyInf: number, nameKeySup: number, courses: Course[]) {
  return nameKeyInf === -1 || nameKeySup == -1? dataCourses : courses.filter( c => 
    c.credits >= nameKeyInf && c.credits <= nameKeySup);
}
btnfilterByName2.onclick = () => applyFilterByCredits();
