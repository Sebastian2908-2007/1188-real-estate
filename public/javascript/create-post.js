async function addPostHandler(event) {
    event.preventDefault();
    const post_text = document.querySelector('#new-post').value;
console.log(post_text);
    const response = await fetch('/api/posts',{
        method: 'POST',
        body: JSON.stringify({
            post_text
        }),
        headers: {'Content-Type': 'application/json'}
    });
    if(response.ok) {
        document.location.reload();
    }else {
        alert(response.statusText);
    }
};

document.querySelector('#new-post-form').addEventListener('submit', addPostHandler);