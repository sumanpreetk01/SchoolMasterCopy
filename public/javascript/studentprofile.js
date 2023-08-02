const newstudentFormHandler = async (event) => {
    event.preventDefault();
  
    const full_name = document.querySelector('#new-student-name').value.trim();
    const email = document.querySelector('#new-student-email').value.trim();
    console.log(email);
    const address = document.querySelector('#new-student-address').value.trim();
    const parent = document.querySelector('#new-student-parent-name').value.trim();
    
 
    if (full_name && email && address && parent) {
      const response = await fetch(`/newstudentprofile`, {
        method: 'POST',
        body: JSON.stringify({ full_name, email, address , parent }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/studentprofile');
      } else {
        alert('Failed to create project');
      }
    }
  };
  

  
  document
    .querySelector('.new-student-profile-form')
    .addEventListener('submit', newstudentFormHandler);
  
  