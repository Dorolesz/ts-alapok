import './style.css'

type Student = {
  name: string;
  grade: number;
};

const students: Student[] = [];

const gradeInput = document.getElementById('gradeNumber') as HTMLInputElement;
const nameInput = document.getElementById('studentName') as HTMLInputElement;
const gradeList = document.getElementById('gradeList') as HTMLInputElement;
const searchGrade = document.getElementById('searchGrade') as HTMLInputElement;
const addGradeButton = document.getElementById('addGrade') as HTMLInputElement;

function displayGrades(filteredStudents: Student[] = students) {
  gradeList.innerHTML = '';
  filteredStudents.forEach(student => {
    const li = document.createElement('li');
    li.textContent = `${student.name}: ${student.grade}`;

    if (student.grade === 1) {
      li.classList.add('fall');
    }

    gradeList.appendChild(li);
  });
}

addGradeButton.addEventListener('click', () => {
  const grade = Number(gradeInput.value);
  const name = nameInput.value.trim();

  if (grade >= 1 && grade <= 5 && name) {
    students.push({ name, grade });
    displayGrades();
    gradeInput.value = '';
    nameInput.value = '';
  } else {
    console.log("Hibás értékek");
  }
});

searchGrade.addEventListener('input', () => {
  const searchValue = Number(searchGrade.value);
  if (searchValue >= 1 && searchValue <= 5) {
    const filteredStudents = students.filter(student => student.grade === searchValue);
    displayGrades(filteredStudents);
  } else {
    displayGrades();
  }
});

console.log(gradeList);
console.log(students);
