async function userLoginHandler(event) {
  event.preventDefault();
const email = document.querySelector('#email-login').value;
const password = document.queryCommandValue('#pasword-login').value;

const response = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({
        email,
        password
    }),
    headers: { 'Content-Type': 'application/json' }
});
if(response.ok) {
    document.location.replace('/user-blog');
}else{
    alert(response.statusText);
}
};

document.querySelector('#user-login-form').addEventListener('submit',userLoginHandler);