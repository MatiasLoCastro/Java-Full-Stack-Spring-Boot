// Call the dataTables jQuery plugin
$(document).ready(function() {

});



async function registerUser(){

    let data = {};
    data.name = document.getElementById('txtName').value;
    data.lastName = document.getElementById('txtLastName').value;
    data.email = document.getElementById('txtEmail').value;
    data.password = document.getElementById('txtPassword').value;

    let repeatPassword = document.getElementById('txtRepeatPassword').value;

    if(repeatPassword != data.password){
        alert('The passwords entered do not match!');
        return;
    }

  const request = await fetch('api/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
    alert("Account Created Successfully!");
    window.location.href = 'login.html'

}

