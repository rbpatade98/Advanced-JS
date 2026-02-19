// Check which page is loaded
document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('studentForm')) {
    handleFormPage();
  }
  if (document.getElementById('studentTable')) {
    displayStudents();
  }
});

/* ---------- Form Page Logic ---------- */
function handleFormPage() {
  const form = document.getElementById('studentForm');
  const nameInput = document.getElementById('name');
  const ageInput = document.getElementById('age');
  const emailInput = document.getElementById('email');
  const contactInput = document.getElementById('contact');

  // Check if editing
  const editId = localStorage.getItem('editStudentId');
  if (editId) {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    let student = students.find(s => s.id == editId);
    if (student) {
      nameInput.value = student.name;
      ageInput.value = student.age;
      emailInput.value = student.email;
      contactInput.value = student.contact;
    }
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let students = JSON.parse(localStorage.getItem('students')) || [];

    if (editId) {
      // Update existing student
      students = students.map(s => {
        if (s.id == editId) {
          return {
            id: s.id,
            name: nameInput.value,
            age: ageInput.value,
            email: emailInput.value,
            contact: contactInput.value
          };
        }
        return s;
      });
      localStorage.removeItem('editStudentId');
    } else {
      // Add new student
      const student = {
        id: Date.now(),
        name: nameInput.value,
        age: ageInput.value,
        email: emailInput.value,
        contact: contactInput.value
      };
      students.push(student);
    }

    localStorage.setItem('students', JSON.stringify(students));
    alert(editId ? 'Student updated!' : 'Student added!');
    form.reset();
    window.location.href = 'viewStudents.html';
  });
}

/* ---------- View Page Logic ---------- */
function displayStudents() {
  const tableBody = document.querySelector('#studentTable tbody');
  let students = JSON.parse(localStorage.getItem('students')) || [];
  tableBody.innerHTML = '';

  students.forEach(student => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.email}</td>
      <td>${student.contact}</td>
      <td>
        <button class="edit" onclick="editStudent(${student.id})">Edit</button>
        <button class="delete" onclick="deleteStudent(${student.id})">Delete</button>
      </td>
    `;
    tableBody.appendChild(tr);
  });
}

function deleteStudent(id) {
  let students = JSON.parse(localStorage.getItem('students')) || [];
  students = students.filter(s => s.id !== id);
  localStorage.setItem('students', JSON.stringify(students));
  displayStudents();
}

function editStudent(id) {
  localStorage.setItem('editStudentId', id);
  window.location.href = 'studentForm.html';
}
