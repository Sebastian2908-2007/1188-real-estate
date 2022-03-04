async function addReviewHandler(event) {
    event.preventDefault();
    const review_text = document.querySelector('#new-review').value;

    const response = await fetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify({review_text}),
        headers: {'Content-Type': 'Application/json'}
    });
    if(response.ok) {
        location.reload();
    }else{
        alert(response.statusText);
    }

};

document.querySelector('#new-review-form').addEventListener('submit',addReviewHandler);