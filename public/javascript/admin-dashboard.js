//view student profile"
async function viewStudentprofile(event) {
  event.preventDefault();

  res.render('/singlestudentprofile');
};
document.querySelector('#student-profile').addEventListener('click', viewStudentprofile);

//view student courses
async function viewStudentcourses(event) {
  event.preventDefault();

  res.render('/courses');
};
document.querySelector('#student-courses').addEventListener('click', viewStudentcourses);

//view faculty profile
async function viewfacultyprofile(event) {
  event.preventDefault();

  res.render('/singlefacultyprofile');
};

document.querySelector('#faculty-profile').addEventListener('click', viewfacultyprofile);

//view  department
async function viewdepartment(event) {
  event.preventDefault();

  res.render('/');
};

document.querySelector('#view-department').addEventListener('click', viewdepartment);


