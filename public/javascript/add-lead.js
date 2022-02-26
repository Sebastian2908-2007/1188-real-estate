


async function newLeadHandler(event) {
    event.preventDefault();

const form = document.querySelector('#lead-submit-form');
const formData = new FormData(form);
console.log(formData);
 const response = await fetch('/api/leads',{
     method: 'POST',
     body: formData
 })
 if(response.ok) {
     console.log('hello');
 }
};

document.querySelector('#lead-submit-form').addEventListener('submit',newLeadHandler);

