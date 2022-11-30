const s = document.getElementById('buttonSub').value;

function messageSent(){
    alert('Message Sent');
    return;
}

s.addEventListener("click", messageSent);