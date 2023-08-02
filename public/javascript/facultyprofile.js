const newFormHandler = async (event) => {
  event.preventDefault();

  const full_name = document.querySelector('#new-name').value.trim();
  const email = document.querySelector('#new-email').value.trim();
  console.log(email);
 const Bio = document.querySelector('#new-bio').value.trim();
  const qualification = document.querySelector('#new-qualification').value.trim();
  const current_position = document.querySelector('#new-current-position').value.trim();
  // const imageSrc = document.querySelector('#new-image').value;
  // const imageSrc = imageElement.getAttribute('src');
const address = document.querySelector('#new-address').value.trim();
  if (full_name && email && qualification && current_position && Bio && address) {
    const response = await fetch(`/newfacultyprofile`, {
      method: 'POST',
      body: JSON.stringify({ full_name, email, qualification , current_position, Bio, address }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/facultygallery');
    } else {
      alert('Failed to create project');
    }
  }
};

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/projects/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

document
  .querySelector('.new-profile-form')
  .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);
