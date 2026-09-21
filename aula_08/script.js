//const nome = localStorage.getItem("nome");

//alert(nome);

//localStorage.getItem("nome", "duda");
//alert(localStorage.getItem("nome"));

//localStorage.removeItem("nome");

function login(){

    const local_senha = localStorage.getItem("senha");
    const local_usuario = localStorage.getItem("usuario");
   
    const campo_usuario = document.getElementById("usuario");
    const campo_senha = document.getElementById("senha");

    alert(valor_usuario.value + " " + valor_senha.value);
    //acessar o valor digitado nos campos usuario e senha
    //validar se os valores armazenados no localstorage
    
    if(campo_usuario == local_usuario){
        alert("login realizado com sucesso");
    }else{
        alert("usuario invalido");
    }
}