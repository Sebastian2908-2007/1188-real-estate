async function editReviewHandler(event) {
    event.preventDefault();
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    const review_text = document.querySelector('#review-text').value.trim();
console.log(id);

    const response = await fetch(`/api/reviews/${id}`,{
        method: 'PUT',
        body: JSON.stringify({
            review_text
        }),
        headers:{'Content-Type': 'application/json'}
    });
    if(response.ok) {
        document.location.replace('/admin/dashboard');
    }else {
        alert(response.statusText);
    }
};

document.querySelector('#edit-review-form').addEventListener('submit',editReviewHandler);