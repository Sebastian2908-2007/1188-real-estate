const deletePostBtn = document.querySelector('#delete-post-button');

async function deletePostHandler(event) {
    const id = deletePostBtn.dataset.id;

    const response = await fetch(`/api/posts/${id}`,{
        method: 'Delete'
    });
    if(response.ok) {
        document.location.replace('/admin/dashboard');
    }else {
        alsert(response.statusText);
    }
};

deletePostBtn.addEventListener('click',deletePostHandler);