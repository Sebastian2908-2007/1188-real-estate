async function adminLogoutHandler(event) {
    event.preventDefault();
    const response = await fetch('/api/admin/logout',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    });
    if(response.ok) {
        document.location.replace('/admin/login');
    }else {
        alert(response.statusText);
    }
};

document.querySelector('#admin-logout').addEventListener('click',adminLogoutHandler);