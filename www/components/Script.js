// This is a JavaScript file

//Ação de Cadastro
$(document).on("click", "#cadastrar", function(){
  let parametros = {
    "Nome": $('#nome').val(),
    "Curso": $('#curso').val()
  };

  $.ajax({
    type: "post", //Como vou enviar
    url: "https://www.jussimarleal.com.br/exemplo_api/pessoa", //Para onde vou enviar
    data: parametros,
    success: function(data) //Execução bem sucedida
    {
      alert(data);
      $("#nome").val("");
      $("#curso").val("");
    },
    error: function(data) //Execução mal sucedida
    {
      alert("Erro ao cadastrar suas informações!");
    }
  })
});

//Ação de Busca
$(document).on("click", "#buscar", function(){
  $.ajax({
    type: "get", //Como vou enviar
    dataType: "json",
    url: "https://www.jussimarleal.com.br/exemplo_api/pessoa/"+$("#id").val(), //Para onde vou enviar
    success: function(data) //Execução bem sucedida
    {
      $("#nome").val(data.nome);
      $("#curso").val(data.curso);
    },
    error: function(data) //Execução mal sucedida
    {
      alert("Erro ao encontrar seu ID!");
    }
  })
});

//Ação de Alteração
$(document).on("click", "#alterar", function(){
  let parametros = {
    "Nome": $('#nome').val(),
    "Curso": $('#curso').val()
  };

  $.ajax({
    type: "put", //Como vou enviar
    url: "https://www.jussimarleal.com.br/exemplo_api/pessoa/"+$("#id").val(), //Para onde vou enviar
    data: parametros,
    success: function(data) //Execução bem sucedida
    {
      alert(data);
      $("#nome").val("");
      $("#curso").val("");
    },
    error: function(data) //Execução mal sucedida
    {
      alert("Erro ao alterar as informações!");
    }
  })
});

//Ação de Exclusão
$(document).on("click", "#deletar", function(){
  $.ajax({
    type: "delete", //Como vou enviar
    url: "https://www.jussimarleal.com.br/exemplo_api/pessoa/"+$("#id").val(), //Para onde vou enviar
    success: function(data) //Execução bem sucedida
    {
      alert(data);
      $("#nome").val("");
      $("#curso").val("");
    },
    error: function(data) //Execução mal sucedida
    {
      alert("Erro ao excluir as informações!");
    }
  })
});