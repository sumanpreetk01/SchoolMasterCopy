const newFormHandler = async (event) => {
  event.preventDefault();
  const course_name = document.querySelector('#new-course').value.trim();
  const description = document.querySelector('#new-description').value.trim();
  const department = document.querySelector('#new-department').value.trim();
  const semester = document.querySelector('#new-semester').value.trim();
  const fees = document.querySelector('#new-fees').value.trim();

  if (course_name && description && department && semester && fees) {
    const response = await fetch('/addcourse', {
      method: 'POST',
      body: JSON.stringify({ course: course_name, course_description: description, department, semester, fees }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/courses');
    } else {
      alert('Failed to create course');
    }
  }
};

document.querySelector('.new-course-form').addEventListener('submit', newFormHandler);
  