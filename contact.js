const x = document.getElementById('form');
const createForm = document.createElement('form'); //creates a new form
createForm.setAttribute('action', ''); //setting action attribute onto form
createForm.setAttribute('method', 'post');
x.appendChild(createForm);

const heading = document.createElement('h2');
heading.innerHTML = 'Contact';
createForm.appendChild(heading);

const horizontalLine = document.createElement('hr');
createForm.appendChild(horizontalLine);

const lineBreak = document.createElement('br');
createForm.appendChild(lineBreak);

const nameLabel = document.createElement('label'); //creates a label for the name fields
nameLabel.innerHTML = 'Name:';
createForm.appendChild(nameLabel);

const inputName = document.createElement('input');
inputName.setAttribute('type', 'text');
inputName.setAttribute('name', 'dname');
createForm.appendChild(inputName);

const emailLabel = document.createElement('label'); 
emailLabel.innerHTML = 'Email:';
createForm.appendChild(emailLabel);

const inputEmail = document.createElement('input');
inputEmail.setAttribute('type', 'text');
inputEmail.setAttribute('name', 'demail');
createForm.appendChild(inputEmail);

const phoneLabel = document.createElement('label'); 
phoneLabel.innerHTML = 'Phone:';
createForm.appendChild(phoneLabel);

const inputPhone = document.createElement('input');
inputPhone.setAttribute('type', 'text');
inputPhone.setAttribute('name', 'dphone');
createForm.appendChild(inputPhone);

const messageLabel = document.createElement('label'); 
messageLabel.innerHTML = 'Message:';
createForm.appendChild(messageLabel);

const inputMessage = document.createElement('input');
inputMessage.setAttribute('type', 'text');
inputMessage.setAttribute('name', 'dmessage');
createForm.appendChild(inputMessage);

createForm.appendChild(lineBreak);

const submitButton = document.createElement('button');
createForm.appendChild(submitButton);


function submitMessage(){
    const subMessage = prompt('Message Sent');
    alert(subMessage);
}