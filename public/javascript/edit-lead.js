async function editLeadHandler(event) {
    event.preventDefault();
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    const first_name = document.querySelector('input[name="first_name"]').value;
    const last_name = document.querySelector('input[name="last_name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const address = document.querySelector('input[name="address"]').value;

    const response = await fetch(`/api/leads/${id}`,{
        method: 'PUT',
        body: JSON.stringify({
            first_name,
            last_name,
            email,
            address
        }),
        headers: {'Content-Type': 'application/json'}
    });
    if(response.ok) {
        document.location.replace('/admin/dashboard');
    }else {
        alert(response.statusText);
    }
};

document.querySelector('#lead-edit-form').addEventListener('submit',editLeadHandler);