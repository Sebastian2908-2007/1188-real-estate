// delete lead button
const leadDeleteBtn = document.querySelector('#delete-lead-btn');

async function leadDeleteHandler(event) {
   event.preventDefault();
   // this variable will get the id of the lead to send to server through a data attribute on the delete button
   const id = leadDeleteBtn.dataset.id;
const response = await fetch(`/api/leads/${id}`,{
    method: 'Delete'
});
if(response.ok) {
    document.location.replace('/admin/dashboard');
}else {
    alert(response.statusText);
}
};

leadDeleteBtn.addEventListener('click', leadDeleteHandler);