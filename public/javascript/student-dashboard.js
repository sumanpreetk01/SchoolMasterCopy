//view student profile
async function viewStudentprofile(event) {
  event.preventDefault();
  res.render('/studentprofile');
};

document.querySelector('#student-profile').addEventListener('click', viewStudentprofile);

//view student courses
async function viewStudentcourses(event) {
  event.preventDefault();

  res.render('/courses');
};

document.querySelector('#student-courses').addEventListener('submit', viewStudentcourses);