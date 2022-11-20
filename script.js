/*
========================================================================================================================================================
==============================================TRABALHO DE SISTEMAS DIGITAIS=============================================================================
=========================================JULIANO & SAMUEL============TURMA 23EO=========================================================================
========================================================================================================================================================
*/

///////////////////////////////////////////FUNÇÃO CHAVE/////////////////////////////////////////////////////////////////////////////////////////////////

function EnviarUbidotsChave() {
  const Http = new XMLHttpRequest();                                              // Constante para o XMLHttpRequest
  const token = "BBFF-W81XSbPfZcHpD0eXJTJKJ6E6rLsOMI";                            // Token do usuário no Ubidots
  let url = "https://industrial.api.ubidots.com/api/v1.6/devices/4-variaveis";    // Url do Ubidots
  let chave = document.getElementById("estadoChave").value;                       // Valor digitado na página
  var dado = '{"chave":' + chave + '}';                                           // JSON para a chave
  document.getElementById("resposta").innerHTML = "";                             // Limpa o status que está na página
  if (chave != "")                                                                // Só envia caso tiver valor digitado
  {
    if (chave == 0 || chave == 1)                                                 // Só envia caso o valor da chave seja ou 0 ou 1
    {
      Http.open("POST", url);                                                     // Para enviar usa-se o POST do HTTP
      Http.setRequestHeader("X-Auth-Token", token);                               // Autenticação no cabeçalho (header)
      Http.setRequestHeader("Content-Type", "application/json");                  // Tipo de conteúdo enviado é JSON!
      Http.send(dado);                                                            // Envia a requisição POST

      Http.onreadystatechange = function()                                        // Verifica o status do envio
      {
        if (Http.readyState == XMLHttpRequest.DONE)                               // Pronto?
        {
          console.log(Http.responseText);                                         // Mostra no console a resposta
          var resposta = Http.responseText;                                       // Escreve no console a resposta do HTTP
          if (resposta.includes("201"))                                           // Resposta tem o texto 201? Sim: Ubidots aceitou dado
          {
            document.getElementById("resposta").innerHTML = "Enviado com sucesso!";// Mostrao de que foi enviado corretamente
          }
          else                                                                    // Senão (Resposta != 201)
          {
            alert("[ERRO] Valor não enviado");                                    // Mostra o alerta caso tenha sido digitado valor inválido na página
          }
        }
      }
    }
    else                                                                          // Senão (Chave de 0 a 1)
    {
      alert("[ERRO] Digite 0 ou 1");                                              // Mostra o alerta caso tenha sido digitado valor inválido na página
    }
  }
  else                                                                            // Senão (Chave vazia)
  {
    alert("[ERRO] Preencha o valor da chave a ser enviada");                      // Mostrao alerta caso não tenha sido digitado valor na página
  }
}                                                                                 // Fecha função da Chave

//////////////////////////////////////////FUNÇÃO PRESSÃO////////////////////////////////////////////////////////////////////////////////////////////////

function EnviarUbidotsPressao() {
  const Http = new XMLHttpRequest();                                              // Constante para o XMLHttpRequest
  const token = "BBFF-W81XSbPfZcHpD0eXJTJKJ6E6rLsOMI";                            //Token do usuário no Ubidots
  var url = "https://industrial.api.ubidots.com/api/v1.6/devices/4-variaveis";    // Url do Ubidots
  var pressao = document.getElementById("estadoPressao").value;                   // Valor digitado na página
  var dado = '{"pressao":' + pressao + '}';                                       // JSON para pressão
  document.getElementById("resposta").innerHTML = "";                             // Limpa o status que está na página
  if (pressao != "")                                                              // Só envia caso tiver valor digitado 
  {
    if (pressao >= 0 && pressao <= 50)                                            // Só envia se o valor de pressão estiver entre 0 e 50
    {
      Http.open("POST", url);                                                     // Para enviar usa-se o POST do HTTP
      Http.setRequestHeader("X-Auth-Token", token);                               // Autenticação no cabeçalho (header)
      Http.setRequestHeader("Content-Type", "application/json");                  //Tipo de conteúdo enviado é JSON!
      Http.send(dado);                                                            //Envia a requisição POST

      Http.onreadystatechange = function()                                        // Verifica o status do envio
      {
        if (Http.readyState == XMLHttpRequest.DONE)                               // Pronto?
        {
          console.log(Http.responseText);                                         // Mostra no console a resposta
          var resposta = Http.responseText;                                       // Escreve no console a resposta do HTTP
          if (resposta.includes("201"))                                           // Resposta tem o texto 201? Sim: Ubidots aceitou dado
          {
            document.getElementById("resposta").innerHTML = "Enviado com sucesso!";// Mostra o alerta de que foi enviado corretamente
          }
          else                                                                    // Senão (Resposta != 201)
          {
            alert("[ERRO] Valor não enviado");                                    // Mostra o alerta caso tenha sido digitado valor inválido na página
          }
        }
      }
    }
    else                                                                          // Senão (Chave de 0 a 1)
    {
      alert("[ERRO] Digite um valor de 0 a 50");                                  // Mostra o alerta caso tenha sido digitado valor inválido na página
    }
  }
  else                                                                            // Senão (Chave vazia)
  {
    alert("[ERRO] Preencha o valor do sensor de pressão a ser enviada");          // Mostra o alerta caso não tenha sido digitado valor na página
  }
}                                                                                 // Fecha função da Chave

///////////////////////////////////////////FUNÇÃO MOTOR/////////////////////////////////////////////////////////////////////////////////////////////////

function ReceberUbidotsMotor() {
  const Http = new XMLHttpRequest();                                              // Constante para o XMLHttpRequest
  const token = "BBFF-W81XSbPfZcHpD0eXJTJKJ6E6rLsOMI";                            // Token do usuário no Ubidots
  var url = "https://industrial.api.ubidots.com/api/v1.6/devices/4-variaveis/motor/lv";// Url do Ubidots
  document.getElementById("respostaM").innerHTML = "";                            // Limpa o status que está na página
  dado = "";                                                                      // JSON vazio para receber o valor do Ubidots
  Http.open("GET", url);                                                          // Para enviar usa-se o POST do HTTP
  Http.setRequestHeader("X-Auth-Token", token);                                   // Autenticação no cabeçalho (header)
  Http.setRequestHeader("Content-Type", "application/json");                      // Tipo de conteúdo enviado é JSON!
  Http.send(dado);                                                                // Envia a requisição POST

  Http.onreadystatechange = function () {                                         // Verifica o status do envio
    if (Http.readyState == XMLHttpRequest.DONE)                                   // Pronto?
    {
      console.log(Http.responseText);                                             // Mostra no console a resposta
      var respostaM = Http.responseText;                                          // Variavel para a resposta do motor
      if (respostaM == "1.0")                                                     // Se a resposta for 1.0
      {             
        document.getElementById("respostaM").innerHTML = "Motor Ligado";          // Escreve que o motor está ligado
      }
      else if (respostaM == "0.0")                                                // Se a resposta for 0.0
      {                                              
        document.getElementById("respostaM").innerHTML = "Motor Desligado";       // Escreve que o motor está desligado
      }
    }
  }
}                                                                                 // Fecha função do Motor

///////////////////////////////////////////FUNÇÃO COMPRESSOR////////////////////////////////////////////////////////////////////////////////////////////

function ReceberUbidotsCompressor() {
  const Http = new XMLHttpRequest();                                              // Constante para o XMLHttpRequest
  const token = "BBFF-W81XSbPfZcHpD0eXJTJKJ6E6rLsOMI";                            // Token do usuário no Ubidots
  var url = "https://industrial.api.ubidots.com/api/v1.6/devices/4-variaveis/compressor/lv";// Url do Ubidots
  document.getElementById("respostaC").innerHTML = "";                            // Limpa o status que está na página
  document.getElementById("respostaCE").innerHTML = "";                           // Limpa o status que está na página
  dado = "";                                                                      // JSON vazio para receber o valor do Ubidots
  Http.open("GET", url);                                                          // Para enviar usa-se o POST do HTTP
  Http.setRequestHeader("X-Auth-Token", token);                                   //Autenticação no cabeçalho (header)
  Http.setRequestHeader("Content-Type", "application/json");                      //Tipo de conteúdo enviado é JSON!
  Http.send(dado)                                                                 // Envia a requisição POST

  Http.onreadystatechange = function () {                                         // Verifica o status do envio
    if (Http.readyState == XMLHttpRequest.DONE)                                   //Pronto?
    {
      console.log(Http.responseText);                                             //Mostra no console a resposta
      var respostaC = Http.responseText;                                          // Variavel para a resposta do compressor
      document.getElementById("respostaC").innerHTML = Math.trunc(respostaC) + "%";// Escreve a porcentagem do compressor 
      if(Math.trunc(respostaC) == 0)                                              // Se a porcentagem for igual a 0
      {
        document.getElementById("respostaCE").innerHTML = "Desligado";            // Escreve que o motor está desligado
      }
      else if(Math.trunc(respostaC) == 100)                                       // Se a porcentagem for igual a 0
      {
        document.getElementById("respostaCE").innerHTML = "Ligado";               // Escreve que o motor está ligado
      }
      else                                                                        // Senão
      {
        document.getElementById("respostaCE").innerHTML = "";                     // Apaga o campo
      }
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////