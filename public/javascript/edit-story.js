async function editFormHandler(event) {
  event.preventDefault();

  const story_title = document.querySelector('input[name="post-title"]').value.trim();
  const story_body = document.querySelector('textarea[name="post-body"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      story_title,
      story_body
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-post-form').addEventListener('click', editFormHandler);