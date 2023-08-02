const updateFormHandler = async (event) => {
    event.preventDefault();
    const courseId = document.querySelector('#course-id').value;
  
    const course_name = document.querySelector('#update-course').value.trim();
    const description = document.querySelector('#update-description').value.trim();
    const department = document.querySelector('#update-department').value.trim();
    const semester = document.querySelector('#update-semester').value.trim();
    const fees = document.querySelector('#update-fees').value.trim();
  
    if (course_name && description && department && semester && fees) {
      try {
        const response = await fetch(`/updatecourse/${courseId}`, {
          method: 'PUT',
          body: JSON.stringify({ course: course_name, course_description: description, department, semester, fees }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          document.location.replace('/courses'); 
          alert('Course added successfully!');
        }
      } catch (error) {
        console.error('Error updating course:', error);
        alert('Failed to update course');
      }
    } else {
      alert('Please fill out all fields');
    }
  };
  
  
  document.querySelector('.update-course-form').addEventListener('submit', updateFormHandler);
  