async function adminLoginHandler(event) {
event.preventDefault();

    const admin = document.querySelector('#admin-name-login').value;
    const password = document.querySelector('#admin-password-login').value;

    const response = await fetch('/api/admin/login',{
        method: 'POST',
        body: JSON.stringify({
            admin,
            password 
        }),
        headers:{'Content-Type': 'application/json'}
    });
    if(response.ok) {
        document.location.replace('/admin/dashboard');
    }else {
        alert(response.statusText);
    }
};

document.querySelector('#user-login-form').addEventListener('submit',adminLoginHandler);