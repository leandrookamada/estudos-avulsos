function dadosDePessoas() {
  const resultado = document.querySelector(".resultado"); //AQUI EU CRIEI UMA CONSTANTE QUE ESTÁ LIGADA A CLASSE .resultado DO MEU HTML

  const form = document.querySelector(".form"); //AQUI EU CRIEI UMA CONSTANTE QUE ESTÁ LIGADA A CLASSE .form DO MEU HTML

  const pessoa = []; //AQUI EU CRIEI UM ARRAY CHAMADO PESSPA

  function recebeValores(evento) {
    //AQUI EU CRIEI UMA FUNÇÃO QUE SEMPRE QUE O PARAMETRO evento FOR APLICADO, ELA SERÁ EXECULTADA
    evento.preventDefault(); //o "preventDefault" desabilita o comportamento padrão do navegador, nesse caso, comportamento de enviar o conteúdo do form
    const nome = form.querySelector(".nome"); //AQUI EU CRIEI UMA CONSTANTE PARA ARMAZENAR O VALOR INSERIDO NA CLASSE .nome DO FORM
    const sobrenome = form.querySelector(".sobrenome"); //AQUI EU CRIEI UMA CONSTANTE PARA ARMAZENAR O VALOR INSERIDO NA CLASSE .sobrenome DO FORM
    const peso = form.querySelector(".peso"); //AQUI EU CRIEI UMA CONSTANTE PARA ARMAZENAR O VALOR INSERIDO NA CLASSE .peso DO FORM
    const altura = form.querySelector(".altura"); //AQUI EU CRIEI UMA CONSTANTE PARA ARMAZENAR O VALOR INSERIDO NA CLASSE .altura DO FORM
    pessoa.push({
      //AQUI EU VOU INSERIR AO FINAL DO ARRAY pessoa OS SEGUINTES ARGUMENTOS
      nome: nome.value, //VALOR DA CONSTANTE nome
      sobrenome: sobrenome.value, //VALOR DA CONSTANTE sobrenome
      peso: peso.value, //VALOR DA CONSTANTE peso
      altura: altura.value, //VALOR DA CONSTANTE altura
    });

    console.log(pessoa); //AQUI ESTOU INSERIDO NO TERMINAL TODO O ARRAY pessoa

    resultado.innerHTML += `<p>     
        ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}
      </p>`;
    //NESSE MOMENTO EU INSERI UMA TAG NO HTML TODA A VEZ QUE O BOTÃO FOR CLICADO (enviado), SEJA TAG DE CIMA SERÁ POSTADA NA MINHA PÁGINA HTML
  }

  form.addEventListener("submit", recebeValores); // O form. ESTÁ RELACIONADA COM A CONSTANTE ACIMA, QUE ESTÁ LIGADA COM A CLASSE .form DO HTML, E APARTIR DELA, EU ESPECIFÍCO O QUE EU QUERO PARA ELA
  //addEventListener vai adicionar um ouvinte de eventos, no código em questão o evento é o "submit", depois disso, a função "recebeValores"
}
dadosDePessoas();

//
// const nome = form.querySelector(".nome");
// const sobrenome = form.querySelector(".sobrenome");
// const peso = form.querySelector(".peso");
// const altura = form.querySelector(".altura");
//
// console.log(nome.value, sobrenome.value, peso.value, altura.value);
