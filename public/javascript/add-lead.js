


async function newLeadHandler(event) {
    event.preventDefault();

const form = document.querySelector('#lead-submit-form');
const formData = new FormData(form);
// below grabs the p in lead form
const confirmTextp = document.querySelector('#confirmtextp');
// this div will house our wait mssg
const waitMssg = document.createElement('div');
 waitMssg.textContent = 'wait while we process ...';
 waitMssg.style.fontSize = '3em';
 // append wait mssg to the paragraph in the form
 confirmTextp.appendChild(waitMssg);

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

