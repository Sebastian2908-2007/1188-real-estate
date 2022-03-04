async function creatUserHandler(event) {
    event.preventDefault();
    const username = document.querySelector('#username-signup').value;
    const state = document.querySelector('#state').value;
    const email = document.querySelector('#email-signup').value;
    const password = document.querySelector('#password-signup').value;

    const response = await fetch('/api/users',{
        method: 'POST',
        body: JSON.stringify({
            username,
            state,
            email,
            password 
        }),
        headers: {'Content-Type': 'Application/json'}
    });
    if(response.ok) {
        document.location.replace('/');
    }else{
        alert(response.statusText);
    }
};

document.querySelector('#user-signup-form').addEventListener('submit',creatUserHandler);