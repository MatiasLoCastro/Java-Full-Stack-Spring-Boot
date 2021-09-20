$(document).ready(function() {

});



async function iniciarSesion(){

    let data = {};
    data.email = document.getElementById('txtEmail').value;
    data.password = document.getElementById('txtPassword').value;

  const request = await fetch('api/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const response = await request.text();
  if(response != 'FAIL'){
  localStorage.token = response; //Guardar la respuesta en el localStorage, del lado del browser
  localStorage.email = data.email;
  window.location.href = 'users.html'
  }else{
  alert("The credentials provided are incorrect. Please try again.")
  }


}



