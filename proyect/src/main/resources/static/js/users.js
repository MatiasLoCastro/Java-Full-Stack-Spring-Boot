// Call the dataTables jQuery plugin
$(document).ready(function() {
    loadUsers();

  $('#users').DataTable();
  getUserEmail();
});

function getUserEmail(){
    document.getElementById('txt-email-user').outerHTML = localStorage.email;
}

async function loadUsers(){


  const request = await fetch('api/users', {
    method: 'GET',
    headers: getHeaders()
  });
  const users = await request.json();




    let listadoHtml = '';
    for(let user_ of users){
          let buttonDelete = '<a href="#" onclick="deleteUser('+user_.id+')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';


          let phoneTxt = user_.phone == null ? '-' : +user_.phone; //Valido si el telefono es null, ya que no lo estoy incluyendo
                                                                 //en el form que llena el user para el registro.
                                                                 //y si es null, devuelvo un '-' sino devuelvo el telefono.
          let userHtml = '<tr><td>'+user_.id+'</td><td>'+user_.name+' '+user_.lastName+'</td><td>'+user_.email+'</td><td>'+phoneTxt
          +'</td><td>' + buttonDelete + '</td></tr>';

    listadoHtml += userHtml;

    }



  console.log(users);




document.querySelector('#users tbody').outerHTML = listadoHtml;

}

function getHeaders() {
return{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.token
          };
}

async function deleteUser(id){

    if(!confirm('Are you sure you want to delete this user?')){
        return;
    }

const request = await fetch('api/users/' + id, {
    method: 'DELETE',
    headers: getHeaders()
  });

    location.reload()

}
