


async function newLeadHandler(event) {
    event.preventDefault();

/* const first_name = document.querySelector('input[name="first-name"]').value;
 const last_name = document.querySelector('input[name="last-name"]').value;
 const email = document.querySelector('input[name="email"]').value;
 const address = document.querySelector('input[name="address"]').value;
 const walk_through_video = document.querySelector('input[name="walk-through-video"]').files[0];*/
const form = document.querySelector('#lead-submit-form');
const formData = new FormData(form)
 const response = await fetch('/api/leads',{
     method: 'POST',
     body: formData
 })
 if(response.ok) {
     console.log('hello');
 }
};

document.querySelector('#lead-submit-form').addEventListener('submit',newLeadHandler);

/*JSON.stringify({first_name,last_name,email,address, }),walk_through_video*/ 