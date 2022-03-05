// get get delete review button element
const deleteReviewButton = document.querySelector('#delete-review-button');

async function deleteReviewHandler(event) {
    event.preventDefault();
    const id = deleteReviewButton.dataset.id;

    const response = await fetch(`/api/reviews/${id}`,{
        method: 'Delete'
    });
    if(response.ok) {
        document.location.replace('/admin/dashboard');
    }else {
        alert(response.statusText);
    }

};

deleteReviewButton.addEventListener('click',deleteReviewHandler);