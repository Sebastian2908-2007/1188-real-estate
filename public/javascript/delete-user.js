const deleteUserBtn = document.querySelector('#delete-user-btn');

async function deleteUserHandler(event) {
    event.preventDefault();
    
   
    // get user Id from the data attribute "id" on the "id='delete-user-btn'"
    const userId = deleteUserBtn.dataset.id;
  

    // fetch request for deleteing the user
    const response = await fetch(`/api/users/${userId}`, {
        method: 'Delete'
    });
    if(response.ok) {
        document.location.replace('/admin/dashboard');
    }else{
        alert(response.statusText);
    }


};

deleteUserBtn.addEventListener('click',deleteUserHandler);