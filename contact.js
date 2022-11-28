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

const emailLabel = document.createElement('label'); 
emailLabel.innerHTML = 'Email:';
createForm.appendChild(emailLabel);

const phoneLabel = document.createElement('label'); 
phoneLabel.innerHTML = 'Phone:';
createForm.appendChild(phoneLabel);

const messageLabel = document.createElement('label'); 
messageLabel.innerHTML = 'Message:';
createForm.appendChild(messageLabel);