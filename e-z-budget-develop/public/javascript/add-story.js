async function newFormHandler(event) {
    event.preventDefault();
  
    const story_title = document.querySelector('input[name="post-title"]').value;
    const story_body = document.querySelector('textarea[name="post-body"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        story_title,
        story_body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  