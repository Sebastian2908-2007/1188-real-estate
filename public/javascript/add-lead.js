


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
    document.location.replace('/');
 }else{
     alert(response.statusText);
 }
};

document.querySelector('#lead-submit-form').addEventListener('submit',newLeadHandler);

