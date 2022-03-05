async function  editPostHandler(event) {
    event.preventDefault();
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    const post_text = document.querySelector('#post-text').value;

    const response = await fetch(`/api/posts/${id}`,{
        method: 'PUT',
        body: JSON.stringify({post_text}),
        headers: {'Content-Type': 'application/json'}
    });
    if(response.ok) {
        document.location.replace('/admin/dashboard');
    }else {
        alert(response.statusText);
    }
};

document.querySelector('#edit-post-form').addEventListener('submit',editPostHandler);